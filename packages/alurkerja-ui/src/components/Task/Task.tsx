import { useContext, useEffect, useState, FC } from 'react'
import { Tab } from '@headlessui/react'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form'

import { AuthContext } from '@/contexts'
import { FormLowcode, Button, Input, Modal, Select, ReactDiagramSingle } from '@/components'
import CardTask from './components/CardTask'
import { toKebabCase } from '@/helpers/utils'
import DetailLowcode from '../FormLowcode/DetailLowCode'

export interface TaskType {
  process_definition: [
    {
      process_defintion_key: string
      process_defintion_path: string
      process_defintion_label: string
    }
  ]
  renderChildren: Function
  base_url: string
  taskListLabel: string
  taskEndpoint: string
}

export const Task: FC<TaskType> = (props) => {
  const { process_definition, base_url, taskListLabel, taskEndpoint } = props
  const [selectedPath, setSelectedPath] = useState('')

  const [myTask, setMyTask] = useState([])

  const axiosInstance = useContext(AuthContext)

  useEffect(() => {
    if (selectedPath == '') {
      setMyTask([])
    } else {
      axiosInstance.get(base_url + selectedPath + (taskEndpoint || '/my-task')).then((response) => {
        setMyTask(response.data.data)
      })
    }
  }, [selectedPath])

  const claim = (task: any) => {
    Swal.fire({
      icon: 'warning',
      title: 'Claim Task',
      text: 'Apakah Anda Yakin Untuk Claim Task',
      showCancelButton: true,
      confirmButtonColor: '#0095E8',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Batalkan',
      confirmButtonText: 'Konfirmasi',
    }).then(async (result) => {
      if (result.isConfirmed) {
        axiosInstance
          .post(base_url + selectedPath + '/claim-task', {
            task_id: task.id,
          })
          .then((_response) => {
            // Todo add handler
            Swal.fire('Claim Task', 'Behasil Melakukan Claim Task', 'success')
          })
      }
    })
  }
  const [selectedData, setSelectedData] = useState<null | any>(null)

  const { formState, handleSubmit, control, setValue } = useForm()
  return (
    <div className="bg-white rounded-lg">
      <h1 className="py-7 px-9 font-bold uppercase border-b-2 border-gray-200">{taskListLabel}</h1>
      <div className="flex gap-y-4 flex-wrap md:flex-nowrap">
        <div className="basis-full lg:basis-1/3 border-r-2 border-gray-200">
          <div className="border-b-2 border-gray-200">
            <div className="p-5">
              <select
                className="w-full bg-gray-100 text-gray-400 p-2 rounded"
                onChange={(e) => {
                  setSelectedPath(e.target.value)
                }}
              >
                <option>Please Pick</option>
                {(process_definition || []).map(function (item) {
                  return <option value={item.process_defintion_path}>{item.process_defintion_label}</option>
                })}
              </select>
            </div>
          </div>
          {/* Card Container */}
          <div>
            {myTask.map((data) => {
              return (
                <CardTask
                  taskData={data}
                  onClick={(value: any) => {
                    console.log(value)
                    setSelectedData(value)
                  }}
                />
              )
            })}
          </div>
        </div>
        <div className="basis-full lg:basis-2/3 flex flex-col gap-4 ">
          {/* {selectedPath} */}

          <span className="mx-4 mt-3 font-bold text-lg">Aksi</span>
          <hr></hr>
          {selectedData != null && selectedPath != '' && selectedData.process_instance && (
            <>
              <div className="px-4">
                Assigne: {selectedData.assignee ?? 'Not Assigned'}
                <div className="flex flex-row pt-2 gap-2">
                  {/* <Button className="bg-green-400" >Assign</Button> */}
                  <AssigneModal
                    action="Assigne"
                    baseUrl={base_url + selectedPath}
                    selectedData={selectedData}
                  ></AssigneModal>

                  {!selectedData.assignee && (
                    <Button
                      className="bg-blue-400"
                      onClick={() => {
                        claim(selectedData)
                      }}
                    >
                      Claim
                    </Button>
                  )}
                  {/* <Button color="bg-blue-400">Delegate</Button> */}

                  <AssigneModal
                    action="Delegate"
                    baseUrl={base_url + selectedPath}
                    selectedData={selectedData}
                  ></AssigneModal>
                </div>
              </div>

              <FormLowcode
                baseUrl={base_url}
                specPath={selectedData.user_task_mapping.url}
                id={selectedData.process_instance.id}
                taskId={selectedData.id}
                isBpmn={true}
                isUsertask={true}
                hideAction={true}
                formState={formState}
                handleSubmit={handleSubmit}
                control={control}
                setValue={setValue}
              />
            </>
          )}

          <Tab.Group>
            <Tab.List className="flex items-center gap-x-10 border-y px-8">
              <Tab className="px-2.5 py-4 hover:border-b hover:border-b-[#0095E8] hover:text-[#0095E8]">Detail</Tab>
              <Tab className="px-2.5 py-4 hover:border-b hover:border-b-[#0095E8] hover:text-[#0095E8]">History</Tab>
              <Tab className="px-2.5 py-4 hover:border-b hover:border-b-[#0095E8] hover:text-[#0095E8]">Bpmn</Tab>
            </Tab.List>

            <Tab.Panels className="px-2 pb-2 pt-4">
              <Tab.Panel>
                <span className="mx-2 pb-3 font-bold text-lg">Detail & Data </span>
                {selectedData != null && selectedPath != '' && selectedData.process_instance && (
                  <DetailLowcode baseUrl={base_url} specPath={selectedPath} id={selectedData.process_instance.id} />
                )}
                <hr></hr>
              </Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>
                {selectedData != null && (
                  <ReactDiagramSingle
                    url={base_url + selectedPath}
                    selectedItem={selectedData.user_task_mapping.id}
                  ></ReactDiagramSingle>
                )}
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  )
}

const AssigneModal = ({ action, baseUrl, selectedData }: { action: string; selectedData: any; baseUrl: string }) => {
  const axiosInstance = useContext(AuthContext)
  const [userList, setUserList] = useState<any[]>()
  const getAssigne = () => {
    axiosInstance
      .post(baseUrl + '/' + toKebabCase(selectedData.task_definition_key) + '/assigne-candidate', selectedData)
      .then((response) => {
        setUserList(response.data.data)
      })
  }
  const assign = () => {
    Swal.fire({
      icon: 'warning',
      title: action + ' Task',
      text: 'Apakah Anda Yakin Untuk ' + action + ' Task',
      showCancelButton: true,
      confirmButtonColor: '#0095E8',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Batalkan',
      confirmButtonText: 'Konfirmasi',
    }).then(async (result) => {
      if (result.isConfirmed) {
        axiosInstance
          .post(baseUrl + '/assign-task', {
            task_id: selectedData.id,
            user_id: selectedAssigne,
            message: message,
          })
          .then((_response) => {
            // Todo add handler
            Swal.fire('Assigne Task', 'Behasil Melakukan ' + action + ' Task', 'success')
          })
      }
    })
  }
  const [selectedAssigne, setSelectedAssigne] = useState()
  const [message, setMessage] = useState('')
  useEffect(() => {
    getAssigne()
  }, [])
  return (
    <Modal title={action} triggerButton={<Button className="bg-blue-400 text-white">{action}</Button>}>
      <div>
        <div className="px-4 pt-4">
          <label>Select Assigne</label>
          <Select
            onChange={(e: any) => {
              setSelectedAssigne(e.value)
            }}
            options={userList}
          />
        </div>
        <div className="px-4 pt-4">
          <label>Message</label>
          <Input
            type="text"
            textArea={true}
            onChange={(e: any) => {
              setMessage(e.target.value)
            }}
          />
        </div>
        <div className="px-4 pt-4">
          <Button
            className="bg-blue-400 text-white"
            onClick={() => {
              assign()
            }}
          >
            {action}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
