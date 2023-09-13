import { FC, useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { Button, Select, Modal, Input, ReactHookWrapper } from '@/components'
import { BsPlus } from 'react-icons/bs'

export interface SelectWithModalProps {
  options: { value: string | number | boolean; label: string }[]
  onChange: (data: string | number | boolean | undefined) => void
  placeholder?: string
  title?: string
}

export const SelectWithModal: FC<SelectWithModalProps> = ({ options, onChange, placeholder, title }) => {
  const { setValue, handleSubmit, control, reset } = useForm()

  const [listOption, setListOption] = useState<{ label: string; value: string | number | boolean }[]>(options)
  const [data, setData] = useState<string | number | boolean>()

  const onSubmit = (data: FieldValues, closeModal: () => void) => {
    setListOption((prev) => [...prev, { label: data.label, value: data.value }])
    closeModal()
    reset({ label: '', value: '' })
  }

  useEffect(() => {
    onChange?.(data)
  }, [data])

  return (
    <>
      <div className="flex gap-2 items-center">
        <Select options={listOption} placeholder={placeholder} onChange={(selected: any) => setData(selected.value)} />

        <Modal
          width={1000}
          maxWidth="4xl"
          title={title}
          triggerButton={<Button type="button" size="small" icon={<BsPlus size={32} />} />}
        >
          {({ closeModal }) => (
            <form className="p-4" onSubmit={handleSubmit((data) => onSubmit(data, closeModal))}>
              <div className="space-y-4" onSubmit={handleSubmit((data) => onSubmit(data, closeModal))}>
                <ReactHookWrapper control={control}>
                  <Input required name="label" onChange={(e) => setValue(e.target.name, e.target.value)} />
                  <Input required name="value" onChange={(e) => setValue(e.target.name, e.target.value)} />
                </ReactHookWrapper>
                <div className="w-fit ml-auto">
                  <Button className="bg-[#0095E8] text-white">Tambah</Button>
                </div>
              </div>
            </form>
          )}
        </Modal>
      </div>
    </>
  )
}
