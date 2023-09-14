import moment from 'moment'
import React from 'react'
import { BiTime } from 'react-icons/bi'

const CardTask = ({ taskData, onClick }: any) => {
  return (
    <div
      className="border border-gray-200 m-2 rounded cursor-pointer"
      onClick={() => {
        onClick(taskData)
      }}
    >
      <div className="mx-2 flex flex-col py-2 ">
        {/* {reimburse.processInstaceLabel === 'Reimbursment' ? (
            <div className='p-2 bg-[#17BCB4] rounded'>
              <ReimburseIcons />
            </div>
          ) : reimburse.processInstaceLabe === 'Leave' ? (
            <div className='p-2 bg-[#17BCB4] rounded'>
              <LeaveIcons />
            </div>
          ) : (
            ''
          )} */}

        <span className="">{taskData.process_definition_label}</span>
        <span className="text-sm flex gap-2 items-center" style={{ fontSize: '12px', color: '#9e9e9e' }}>
          <BiTime></BiTime>
          {moment(taskData.created).format('DD-MM-YYYY hh:mm')}
        </span>
      </div>
      <hr className="m-0 p-0" />
      <div className="flex py-2 ml-2 items-center">
        <div className="flex flex-col">
          <span className="text-sm">{taskData.name}</span>
          <span style={{ fontSize: '12px', color: '#9e9e9e' }}>By: {taskData.owner?.name || 'Anonim'}</span>
        </div>
      </div>
    </div>
  )
}

export default CardTask
