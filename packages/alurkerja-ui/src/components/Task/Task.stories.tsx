import type { Meta, StoryObj } from '@storybook/react'
import { Task } from '@/components'
import { TaskType } from './Task'

const meta = {
  title: 'Task (BPMN)',
  component: Task,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Task>

export default meta
type Story = StoryObj<typeof Task>

const defaltMyTask: TaskType = {
  process_definition: [
    {
      process_defintion_key: 'PengajuanIzinPegawai',
      process_defintion_label: 'Pengajuan Cuti',
      process_defintion_path: '/api/pengajuan-izin-pegawai',
    },
  ],
  base_url: 'https://api-internalsopbe.merapi.javan.id',
  taskListLabel: 'My Task',
  taskEndpoint: '/my-task',
  renderChildren: () => {
    return <>Hellow</>
  },
}

export const MyTask: Story = {
  args: defaltMyTask,
  render: (args) => {
    return <Task {...args}></Task>
  },
}

const defaultMySubmission: TaskType = {
  process_definition: [
    {
      process_defintion_key: 'PengajuanIzinPegawai',
      process_defintion_label: 'Pengajuan Cuti',
      process_defintion_path: '/api/pengajuan-izin-pegawai',
    },
  ],
  base_url: 'https://api-internalsopbe.merapi.javan.id',
  taskListLabel: 'Available Task',
  taskEndpoint: '/available-task',
  renderChildren: () => {
    return <>Hellow</>
  },
}

export const AvailableTask: Story = {
  args: defaultMySubmission,
  render: (args) => {
    return <Task {...args}></Task>
  },
}
