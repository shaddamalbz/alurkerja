import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import _ from 'lodash'

import { TableLowcode } from '@/components'

const meta = {
  title: 'TableLowcode',
  component: TableLowcode,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TableLowcode>

export default meta
type Story = StoryObj<typeof TableLowcode>

export const NonBpmn: Story = {
  args: {
    baseUrl: 'https://kpm-sys.merapi.javan.id',
    specPath: '/api/crud/main-kursus',
    onClickCreate: undefined,
    onClickEdit: undefined,
    onClickDetail: undefined,
    onClickDelete: undefined,
    onDeleteConfirm: undefined,
    customButtonFilter: undefined,
  },
  render: (args) => {
    const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
    const [renderState, setRenderState] = useState(0)
    const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
    const [search, setSearch] = useState<string>()
    const [selectedRow, setSelectedRow] = useState<number[]>([])

    return (
      <TableLowcode
        {...args}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        renderState={renderState}
        setRenderState={setRenderState}
        pageConfig={pageConfig}
        setPageConfig={setPageConfig}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        search={search}
        setSearch={setSearch}
      />
    )
  },
}

export const BPMN: Story = {
  args: {
    baseUrl: 'https://api-geekacademy.merapi.javan.id',
    specPath: '/api/bpmn/cuti',
    onClickCreate: undefined,
    onClickEdit: undefined,
    onClickDetail: undefined,
    onClickDelete: undefined,
    onDeleteConfirm: undefined,
  },
  render: (args) => {
    const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
    const [renderState, setRenderState] = useState(0)
    const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
    const [search, setSearch] = useState<string>()
    const [selectedRow, setSelectedRow] = useState<number[]>([])

    return (
      <TableLowcode
        {...args}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        renderState={renderState}
        setRenderState={setRenderState}
        pageConfig={pageConfig}
        setPageConfig={setPageConfig}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        search={search}
        setSearch={setSearch}
      />
    )
  },
}
