import { FC, useState, useEffect } from 'react'
import { Input, Select, Button } from '@/components'
import { UseFormSetValue, FieldValues } from 'react-hook-form'
import axios from 'axios'

export interface AddressProps {
  setValue: UseFormSetValue<FieldValues>
  onSubmit?: () => void
}

export const Address: FC<AddressProps> = ({ setValue, onSubmit }) => {
  const [listProvince, setListProvince] = useState<{ id: string; name: string }[]>()
  const [listRegencies, setListRegencies] = useState<{ id: string; name: string; province_id: string }[]>()

  const [selectedProvince, setSelectedProvince] = useState<any>()

  useEffect(() => {
    axios.get('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json').then((res) => {
      if (res.status === 200) {
        setListProvince(
          res.data.map((province: { id: string; name: string }) => ({ label: province.name, value: province.id }))
        )
      }
    })
  }, [])

  useEffect(() => {
    if (selectedProvince) {
      axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince}.json`).then((res) => {
        if (res.status === 200) {
          setListRegencies(
            res.data.map((province: { id: string; name: string }) => ({ label: province.name, value: province.id }))
          )
        }
      })
    }
  }, [selectedProvince])

  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center">
          <label className="basis-52" htmlFor="">
            Tipe Alamat
          </label>
          <Input name="type" onChange={(e) => setValue(e.target.name, e.target.value)} />
        </div>
        <div className="flex items-center">
          <label className="basis-52" htmlFor="">
            Alamat Lengkap
          </label>
          <Input textArea name="address" onChange={(e) => setValue(e.target.name, e.target.value)} />
        </div>

        <div className="flex items-center">
          <label className="basis-52" htmlFor="">
            Provinsi
          </label>

          <Select
            options={listProvince}
            onChange={(selected: any) => {
              setValue('province', selected.value)
              setSelectedProvince(selected.value)
            }}
          />
        </div>
        <div className="flex items-center">
          <label className="basis-52" htmlFor="">
            Kabupaten/Kota
          </label>

          <Select
            options={listRegencies}
            onChange={(selected: any) => {
              setValue('regency', selected.value)
            }}
          />
        </div>

        <div className="flex items-center">
          <label className="basis-52" htmlFor="">
            Geo Location URL
          </label>
          <Input name="url" onChange={(e) => setValue(e.target.name, e.target.value)} />
        </div>
        <div className="flex items-center">
          <label className="basis-52" htmlFor="">
            Latitude
          </label>
          <Input name="latitude" onChange={(e) => setValue(e.target.name, e.target.value)} />
        </div>
        <div className="flex items-center">
          <label className="basis-52" htmlFor="">
            Longitude
          </label>
          <Input name="longitude" onChange={(e) => setValue(e.target.name, e.target.value)} />
        </div>
        <div className="w-fit ml-auto flex gap-4">
          <Button onClick={onSubmit}>Submit</Button>
        </div>
      </div>
    </>
  )
}
