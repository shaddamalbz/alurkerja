import type { Meta, StoryObj } from '@storybook/react'
import { ReactHookWrapper, Button, Input, InputDate, Radio, Select } from '@/components'
import { FieldValues, useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { LangContext } from '@/contexts'
import { langConfig } from '@/lang'

const meta = {
  title: 'ReactHookWrapper',
  component: ReactHookWrapper,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ReactHookWrapper>

export default meta
type Story = StoryObj<typeof ReactHookWrapper>

export const Default: Story = {
  args: {},
  render: () => {
    const { setValue, control, handleSubmit } = useForm()

    const onSubmit = (data: FieldValues) => {
      console.log(data, ' form-data')
    }
    return (
      <>
        <ReactHookWrapper control={control} inline>
          <Input name="nama" required onChange={(e) => setValue(e.target.name, e.target.value)} />
          <Input name="alamat" onChange={(e) => setValue(e.target.name, e.target.value)} />
        </ReactHookWrapper>

        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </>
    )
  },
}

export const Inline: Story = {
  args: { inline: true },
  render: (args) => {
    const { setValue, control, handleSubmit } = useForm()

    const onSubmit = (data: FieldValues) => {
      console.log(data, ' form-data')
    }
    return (
      <>
        <ReactHookWrapper {...args} control={control}>
          <Input name="nama" required onChange={(e) => setValue(e.target.name, e.target.value)} />

          <Input name="alamat" onChange={(e) => setValue(e.target.name, e.target.value)} />
        </ReactHookWrapper>

        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </>
    )
  },
}

export const LabelWorkaround: Story = {
  args: {
    inline: true,
    labelSize: 'lg',
  },
  render: (args) => {
    const { setValue, control, handleSubmit } = useForm()

    const onSubmit = (data: FieldValues) => {
      console.log(data, ' form-data')
    }
    return (
      <>
        <ReactHookWrapper {...args} control={control}>
          <Input name="fullname" aria-label="Nama" required onChange={(e) => setValue(e.target.name, e.target.value)} />
          <Input name="alamat" onChange={(e) => setValue(e.target.name, e.target.value)} />
        </ReactHookWrapper>

        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </>
    )
  },
}

export const RequiredValidation: Story = {
  render: () => {
    const { control, handleSubmit, setValue } = useForm()

    return (
      <div className="flex flex-col gap-2">
        <ReactHookWrapper control={control}>
          <Input name="name" aria-label="Name" required onChange={(e) => setValue(e.target.name, e.target.value)} />

          <Input
            name="phone_number.primary"
            aria-label="Phone Number (Primary)"
            required
            onChange={(e) => setValue(e.target.name, e.target.value)}
          />

          <Input
            name="phone_number.secondary"
            aria-label="Phone Number (Secondary)"
            required
            onChange={(e) => setValue(e.target.name, e.target.value)}
          />

          <Select
            required
            name="gender"
            aria-label="Gender"
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
            ]}
            onChange={(e: any) => setValue('gender', e)}
          />

          <Radio
            required
            name="gender2"
            aria-label="Gender"
            listOption={[
              { key: 'male', label: 'Male' },
              { key: 'female', label: 'Female' },
            ]}
            onChange={(e) => setValue('gender2', e)}
          />

          <InputDate required name="tanggal" aria-label="Tanggal" onChange={(e) => setValue('tanggal', e)} />

          <Button onClick={() => handleSubmit((data) => console.log(data))()}>Submit</Button>
        </ReactHookWrapper>
      </div>
    )
  },
}

export const DefaultValueWorkaround: Story = {
  args: {
    inline: true,
    labelSize: 'lg',
  },
  render: (args) => {
    const { setValue, control, handleSubmit } = useForm()

    const onSubmit = (data: FieldValues) => {
      console.log(data, ' form-data')
    }
    return (
      <>
        <ReactHookWrapper {...args} control={control}>
          <Input
            required
            name="fullname"
            aria-label="Nama"
            onChange={(e) => setValue(e.target.name, e.target.value)}
            defaultValue="Zustand"
          />
          <Input name="alamat" aria-label="Alamat" onChange={(e) => setValue(e.target.name, e.target.value)} />
        </ReactHookWrapper>

        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </>
    )
  },
}

export const CustomErrorWorkaround: Story = {
  args: {
    inline: true,
    labelSize: 'lg',
  },
  render: (args) => {
    const { setValue, setError, control, handleSubmit } = useForm()

    useEffect(() => {
      setError('fullname', { message: 'Please fill the fullname field' })
    }, [])

    const onSubmit = (data: FieldValues) => {
      console.log(data, ' form-data')
    }

    return (
      <>
        <ReactHookWrapper {...args} control={control}>
          <Input
            required
            name="fullname"
            aria-label="Nama"
            onChange={(e) => setValue(e.target.name, e.target.value)}
            defaultValue="Zustand"
          />
        </ReactHookWrapper>

        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </>
    )
  },
}

export const CustomValidationWorkaround: Story = {
  args: {
    inline: true,
    labelSize: 'lg',
  },
  render: (args) => {
    const { setValue, control, handleSubmit } = useForm()

    const onSubmit = (data: FieldValues) => {
      console.log(data, ' form-data')
    }

    return (
      <>
        <ReactHookWrapper {...args} control={control}>
          <Input
            required
            name="age"
            aria-label="Umur"
            type="number"
            rules={{ min: { value: 0, message: 'Umur harus lebih besar dari 0' } }}
            onChange={(e) => setValue(e.target.name, e.target.value)}
          />
        </ReactHookWrapper>

        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </>
    )
  },
}

export const EmptyLabel: Story = {
  args: {
    inline: true,
    labelSize: 'lg',
  },
  render: (args) => {
    const { setValue, control, handleSubmit } = useForm()

    const onSubmit = (data: FieldValues) => {
      console.log(data, ' form-data')
    }

    return (
      <>
        <div className="flex flex-row gap-5">
          <ReactHookWrapper {...args} control={control}>
            <Input
              required
              name="first_name"
              aria-label="Nama"
              placeholder="Nama Depan"
              onChange={(e) => setValue(e.target.name, e.target.value)}
            />
          </ReactHookWrapper>

          <ReactHookWrapper {...args} control={control}>
            <Input
              required
              withoutLabel
              name="middle_name"
              aria-label="Nama Tengah"
              placeholder="Nama Tengah"
              onChange={(e) => setValue(e.target.name, e.target.value)}
            />
          </ReactHookWrapper>

          <ReactHookWrapper {...args} control={control}>
            <Input
              required
              withoutLabel
              name="last_name"
              aria-label="Nama Belakang"
              placeholder="Nama Belakang"
              onChange={(e) => setValue(e.target.name, e.target.value)}
            />
          </ReactHookWrapper>
        </div>

        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </>
    )
  },
}

export const CustomValidationLanguage: Story = {
  args: {
    inline: true,
    labelSize: 'lg',
  },
  render: (args) => {
    const { setValue, control, handleSubmit } = useForm()
    const lang = langConfig

    lang.validation.required = '{label} wajib diisi'

    const onSubmit = (data: FieldValues) => {
      console.log(data, ' form-data')
    }

    return (
      <LangContext.Provider value={lang}>
        <ReactHookWrapper {...args} control={control}>
          <Input
            required
            name="first_name"
            aria-label="Nama"
            placeholder="Nama Depan"
            onChange={(e) => setValue(e.target.name, e.target.value)}
          />
        </ReactHookWrapper>

        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </LangContext.Provider>
    )
  },
}
