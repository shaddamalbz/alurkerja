import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import _ from 'lodash'
import { AiOutlineUndo } from 'react-icons/ai'
import { HiMagnifyingGlass } from 'react-icons/hi2'

import { Button, Card, Radio, TableLowcode, FormLowcodeLite } from '@/components'
import { InputTypesContext, ThemeContext } from '@/contexts'
import { themeConfig } from '@/theme'
import staticSpec from '@/helpers/constants/tableSpec.json'
import staticData from '@/helpers/constants/tableData.json'
import staticSpec2 from '@/helpers/constants/tableSpec2.json'

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

export const Base: Story = {
  args: {
    // baseUrl: 'https://api-geekacademy.merapi.javan.id',
    // tableName: 'cuti',
    // module: 'bpmn',
    baseUrl: 'https://kpm-sys.merapi.javan.id',
    tableName: 'main-kursus',
    onClickCreate: undefined,
    onClickEdit: undefined,
    onClickDetail: undefined,
    onClickDelete: undefined,
    onDeleteConfirm: undefined,
    tableConfig: {
      table_number_header: 'No',
    },
    customButtonDetail: (ButtonWithModal, _ButtonWithAction, row) => (+row.rn % 2 === 0 ? ButtonWithModal : <></>),
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

export const CustomHeader: Story = {
  args: {
    baseUrl: 'https://api-geekacademy.merapi.javan.id',
    tableName: 'cuti',
    module: 'bpmn',
    // baseUrl: 'https://kpm-sys.merapi.javan.id',
    // tableName: 'takwim',
    onClickCreate: undefined,
    onClickEdit: undefined,
    onClickDetail: undefined,
  },
  render: (args) => {
    const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
    const [renderState, setRenderState] = useState(0)
    const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
    const [search, setSearch] = useState<string>()

    const spec = [
      {
        form_field_type: 'INPUT_TEXT',
        label: 'Nama',
        name: 'nama.tes',
        type: 'text',
      },
      {
        form_field_type: 'INPUT_TEXT',
        label: 'No. Hp',
        name: 'handphone',
        type: 'number',
      },
      {
        form_field_type: 'INPUT_TEXTAREA',
        label: 'Alamat',
        name: 'addres',
        type: 'text',
      },
      {
        form_field_type: 'INPUT_SELECT',
        label: 'Tes',
        name: 'tes',
        type: 'text',
        select_options: {
          method: 'GET',
          option_key: 'id',
          option_label: 'nama',
          url: '/api/crud/jpn',
          // options: [
          //   {
          //     key: 1,
          //     label: 'Menu1',
          //   },
          // ],
        },
      },
    ]

    return (
      <TableLowcode
        {...args}
        renderState={renderState}
        setRenderState={setRenderState}
        pageConfig={pageConfig}
        setPageConfig={setPageConfig}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        search={search}
        setSearch={setSearch}
        subHeader={
          <Card title="pencarian">
            <FormLowcodeLite
              spec={spec}
              baseUrl="https://kpm-sys.merapi.javan.id"
              submitButtonText="Cari"
              submitButtonIcon={<HiMagnifyingGlass />}
              cancelButtonIcon={<AiOutlineUndo />}
              cancelButtonText="Reset"
              onCancel={(reset) => {
                reset()
                setFilterBy?.(undefined)
              }}
              onSubmit={(data) => setFilterBy(data)}
            />
          </Card>
        }
      />
    )
  },
}

export const CustomHeaderNotInline: Story = {
  args: {
    baseUrl: 'https://api-geekacademy.merapi.javan.id',
    tableName: 'cuti',
    module: 'bpmn',
    // baseUrl: 'https://kpm-sys.merapi.javan.id',
    // tableName: 'takwim',
    onClickCreate: undefined,
    onClickEdit: undefined,
    onClickDetail: undefined,
  },
  render: (args) => {
    const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
    const [renderState, setRenderState] = useState(0)
    const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
    const [search, setSearch] = useState<string>()

    const spec = [
      {
        form_field_type: 'INPUT_TEXT',
        label: 'Maker',
        name: 'maker.name',
        type: 'text',
      },
      {
        form_field_type: 'INPUT_SELECT',
        label: 'Type',
        name: 'type',
        type: 'text',
        select_options: {
          option_key: 'key',
          option_label: 'label',
          options: [
            {
              key: 'maintenance',
              label: 'Maintenance',
            },
            {
              key: 'similarity',
              label: 'Similarity',
            },
          ],
        },
      },
      {
        form_field_type: 'INPUT_SELECT',
        label: 'Status',
        name: 'status',
        type: 'text',
        select_options: {
          option_key: 'key',
          option_label: 'label',
          options: [
            {
              key: 'maintenance',
              label: 'Maintenance',
            },
            {
              key: 'similarity',
              label: 'Similarity',
            },
          ],
        },
      },
      {
        form_field_type: 'INPUT_SELECT',
        label: 'Priority',
        name: 'priority',
        type: 'text',
        select_options: {
          option_key: 'key',
          option_label: 'label',
          options: [
            {
              key: 'low',
              label: 'Low',
            },
            {
              key: 'medium',
              label: 'Medium',
            },
            {
              key: 'high',
              label: 'High',
            },
          ],
        },
      },
    ]

    return (
      <TableLowcode
        {...args}
        renderState={renderState}
        setRenderState={setRenderState}
        pageConfig={pageConfig}
        setPageConfig={setPageConfig}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        search={search}
        setSearch={setSearch}
        subHeader={
          <Card title="pencarian">
            <FormLowcodeLite
              spec={spec}
              baseUrl="https://kpm-sys.merapi.javan.id"
              submitButtonText="Cari"
              inline={false}
              inputSize="xs"
              submitButtonIcon={<HiMagnifyingGlass />}
              cancelButtonIcon={<AiOutlineUndo />}
              cancelButtonText="Reset"
              onCancel={(reset) => {
                reset()
                setFilterBy?.(undefined)
              }}
              onSubmit={(data) => setFilterBy(data)}
            />
          </Card>
        }
      />
    )
  },
}

export const CustomTitle: Story = {
  args: {
    baseUrl: 'https://api-geekacademy.merapi.javan.id',
    tableName: 'category',
    module: 'category',
    onClickCreate: undefined,
    onClickEdit: undefined,
    onClickDetail: undefined,
    onClickDelete: undefined,
    title: 'Custom Title',
    readonly: true,
  },
  render: (args) => {
    const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
    const [renderState, setRenderState] = useState(0)
    const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
    const [search, setSearch] = useState<string>()

    return (
      <TableLowcode
        {...args}
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

export const CustomButtonAction: Story = {
  args: {
    baseUrl: 'https://api-geekacademy.merapi.javan.id',
    tableName: 'category',
    module: 'category',
    onClickCreate: undefined,
    onClickEdit: undefined,
    onClickDetail: undefined,
    onClickDelete: undefined,
  },
  render: (args) => {
    const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
    const [renderState, setRenderState] = useState(0)
    const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
    const [search, setSearch] = useState<string>()

    return (
      <TableLowcode
        {...args}
        renderState={renderState}
        setRenderState={setRenderState}
        pageConfig={pageConfig}
        setPageConfig={setPageConfig}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        search={search}
        setSearch={setSearch}
        customButtonCreate={(ButtonWithModal, _, data) => {
          return data?.length === 10 ? ButtonWithModal : <></>
        }}
      />
    )
  },
}

export const ExtraActionButton: Story = {
  args: {
    baseUrl: 'https://api-geekacademy.merapi.javan.id',
    tableName: 'category',
    module: 'category',
    onClickCreate: undefined,
    onClickEdit: undefined,
    onClickDetail: undefined,
    onClickDelete: undefined,
  },
  render: (args) => {
    const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
    const [renderState, setRenderState] = useState(0)
    const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
    const [search, setSearch] = useState<string>()

    return (
      <TableLowcode
        {...args}
        renderState={renderState}
        setRenderState={setRenderState}
        pageConfig={pageConfig}
        setPageConfig={setPageConfig}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        search={search}
        setSearch={setSearch}
        extraActionButton={(row) => <button>{row.id}</button>}
      />
    )
  },
}

export const CustomFilterField: Story = {
  args: {
    baseUrl: 'https://kpm-sys.merapi.javan.id',
    tableName: 'jpn',
    onClickCreate: undefined,
    onClickEdit: undefined,
    customFilterField: ({ field, defaultField }) => {
      const [name, _spec] = field

      if (name === 'nama') {
        return <div>Custom</div>
      }
      return defaultField
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
        const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
        const [renderState, setRenderState] = useState(0)
        const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
        const [search, setSearch] = useState<string>()

        <TableLowcode
          renderState={renderState}
          setRenderState={setRenderState}
          pageConfig={pageConfig}
          setPageConfig={setPageConfig}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          search={search}
          setSearch={setSearch}
        />`,
      },
    },
  },
  render: (args) => {
    const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
    const [renderState, setRenderState] = useState(0)
    const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
    const [search, setSearch] = useState<string>()

    return (
      <TableLowcode
        {...args}
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

export const CustomCreateField: Story = {
  args: {
    baseUrl: 'https://api-geekacademy.merapi.javan.id',
    tableName: 'category',
    module: 'category',
    onClickCreate: undefined,
    onClickEdit: undefined,
    onClickDetail: undefined,
    onClickDelete: undefined,
    customCreateField({ field, defaultField }) {
      const { name } = field
      if (name === 'name') {
        return <div>Custom</div>
      }
      return defaultField
    },
  },
  render: (args) => {
    const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
    const [renderState, setRenderState] = useState(0)
    const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
    const [search, setSearch] = useState<string>()

    return (
      <TableLowcode
        {...args}
        renderState={renderState}
        setRenderState={setRenderState}
        pageConfig={pageConfig}
        setPageConfig={setPageConfig}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        search={search}
        setSearch={setSearch}
        extraActionButton={(row) => <button>{row.id}</button>}
      />
    )
  },
}

export const CustomAction: Story = {
  args: {
    baseUrl: 'https://api-geekacademy.merapi.javan.id',
    tableName: 'category',
    module: 'category',
    onClickCreate: () => console.log('create clicked'),
    onClickEdit: (spec, id) => console.log(`edit button on row with id ${id} clicked`, spec),
    onClickDelete: (spec, id) => console.log(`delete button on row with id ${id} clicked`, spec),
    onClickDetail: (id) => console.log(`delete button on row with id ${id} clicked`),
  },

  render: (args) => {
    const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
    const [renderState, setRenderState] = useState(0)
    const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
    const [search, setSearch] = useState<string>()

    return (
      <TableLowcode
        {...args}
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

export const CustomAlertMessage: Story = {
  args: {
    baseUrl: 'https://api-geekacademy.merapi.javan.id',
    tableName: 'category',
    module: 'category',
    onClickCreate: undefined,
    onClickEdit: undefined,
    onClickDelete: undefined,
    onClickDetail: undefined,
    onDeleteConfirm: undefined,
    message: {
      success_create_text: 'Custom text create',
      success_create_title: 'Custom title create',
      success_delete_title: 'Custom tile delete',
      success_delete_text: 'Custom text delete',
      success_edit_text: 'Custom text edit',
      success_edit_title: 'Custom title edit',
    },
  },

  render: (args) => {
    const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
    const [renderState, setRenderState] = useState(0)
    const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
    const [search, setSearch] = useState<string>()

    return (
      <TableLowcode
        {...args}
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

export const HideHeaderButton: Story = {
  args: {
    baseUrl: 'https://api-geekacademy.merapi.javan.id',
    tableName: 'cuti',
    module: 'bpmn',
    onClickCreate: undefined,
    onClickEdit: undefined,
    onClickDelete: undefined,
    onClickDetail: undefined,
    onDeleteConfirm: undefined,
    canFilter: false,
    hideBpmnButton: true,
    customButtonCreate: () => <></>,
  },

  render: (args) => {
    const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
    const [renderState, setRenderState] = useState(0)
    const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
    const [search, setSearch] = useState<string>()

    return (
      <TableLowcode
        {...args}
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

export const FormConfig: Story = {
  args: {
    baseUrl: 'https://api-geekacademy.merapi.javan.id',
    tableName: 'category',
    module: 'category',
    onClickCreate: undefined,
    onClickEdit: undefined,
    onClickDelete: undefined,
    onClickDetail: undefined,
    onDeleteConfirm: undefined,
    formConfig: {
      hideButtonCancel: true,
    },
  },

  render: (args) => {
    const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
    const [renderState, setRenderState] = useState(0)
    const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
    const [search, setSearch] = useState<string>()

    return (
      <TableLowcode
        {...args}
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

export const TableBpmn: Story = {
  args: {
    baseUrl: 'http://localhost:8000',
    specPath: '/api/class-resume',
    module: 'kpm100',
    onClickCreate: undefined,
    onClickEdit: undefined,
    onClickDelete: undefined,
    onClickDetail: undefined,
    onDeleteConfirm: undefined,
    formConfig: {
      hideButtonCancel: true,
    },
  },

  render: (args) => {
    const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
    const [renderState, setRenderState] = useState(0)
    const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
    const [search, setSearch] = useState<string>()

    return (
      <TableLowcode
        {...args}
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

export const CustomButtonColor: Story = {
  args: {
    // baseUrl: 'https://api-geekacademy.merapi.javan.id',
    // tableName: 'cuti',
    // module: 'bpmn',
    baseUrl: 'https://kpm-sys.merapi.javan.id',
    tableName: 'takwim',
    onClickCreate: undefined,
    onClickEdit: undefined,
    onClickDetail: undefined,
    onClickDelete: undefined,
    layout: 'fixed',
    tableConfig: {
      button_delete_color: 'bg-red-400 text-red-100',
      button_edit_color: 'bg-green-400 text-green-100',
      button_detail_color: 'bg-blue-400 text-blue-100',
      button_create_color: 'bg-blue-500 text-blue-100',
      button_bpmn_color: 'bg-blue-500 text-blue-100',
    },
  },
  render: (args) => {
    const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
    const [renderState, setRenderState] = useState(0)
    const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
    const [search, setSearch] = useState<string>()

    return (
      <TableLowcode
        {...args}
        renderState={renderState}
        setRenderState={setRenderState}
        pageConfig={pageConfig}
        setPageConfig={setPageConfig}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        search={search}
        setSearch={setSearch}
        customFilterField={({ field, defaultField, setValue }) => {
          const [name, _spec] = field
          if (name === 'status') {
            return (
              <Radio
                name={name}
                listOption={[
                  { key: 1, label: 'tes1' },
                  { key: 2, label: 'tes2' },
                ]}
                onChange={(selected) => setValue(name, selected)}
              />
            )
          }
          return defaultField
        }}
      />
    )
  },
}

export const ExtraButton: Story = {
  render: (_args) => {
    const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
    const [renderState, setRenderState] = useState(0)
    const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
    const [search, setSearch] = useState<string>()

    return (
      <TableLowcode
        baseUrl="https://kpm-sys.merapi.javan.id"
        tableName="takwim"
        renderState={renderState}
        setRenderState={setRenderState}
        pageConfig={pageConfig}
        setPageConfig={setPageConfig}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        search={search}
        setSearch={setSearch}
        extraButton={() => <button>Extra Button</button>}
      />
    )
  },
}

export const ExtraButtonInteractWithBpmn: Story = {
  render: (_args) => {
    const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
    const [renderState, setRenderState] = useState(0)
    const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
    const [search, setSearch] = useState<string>()
    const [showBpmn, setShowBpmn] = useState(false)

    useEffect(() => {
      console.log(showBpmn)
    }, [showBpmn])

    return (
      <TableLowcode
        baseUrl="https://kpm-sys.merapi.javan.id"
        module="bpmn"
        tableName="permohonan-bantuan-rmt"
        renderState={renderState}
        setRenderState={setRenderState}
        pageConfig={pageConfig}
        setPageConfig={setPageConfig}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        search={search}
        setSearch={setSearch}
        showBpmn={showBpmn}
        hideBpmnButton
        extraButton={() => (
          <button type="button" onClick={() => setShowBpmn((prev) => !prev)}>
            Bpmn
          </button>
        )}
      />
    )
  },
}

export const Theming: Story = {
  render: (_args) => {
    const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
    const [renderState, setRenderState] = useState(0)
    const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
    const [search, setSearch] = useState<string>()

    return (
      <ThemeContext.Provider
        value={{ ...themeConfig, table_wrapper: 'tes', table_title: 'mb-0 mr-4 font-bold uppercase 3xl' }}
      >
        <TableLowcode
          baseUrl="https://api-geekacademy.merapi.javan.id"
          tableName="cuti"
          module="bpmn"
          renderState={renderState}
          setRenderState={setRenderState}
          pageConfig={pageConfig}
          setPageConfig={setPageConfig}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          search={search}
          setSearch={setSearch}
        />
      </ThemeContext.Provider>
    )
  },
}

export const StaticSpec: Story = {
  render: (_args) => {
    const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
    const [renderState, setRenderState] = useState(0)
    const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
    const [search, setSearch] = useState<string>()

    return (
      <ThemeContext.Provider
        value={{ ...themeConfig, table_wrapper: 'tes', table_title: 'mb-0 mr-4 font-bold uppercase 3xl' }}
      >
        <TableLowcode
          baseUrl="https://api-geekacademy.merapi.javan.id"
          spec={staticSpec as any}
          data={staticData as any}
          renderState={renderState}
          setRenderState={setRenderState}
          pageConfig={pageConfig}
          setPageConfig={setPageConfig}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          search={search}
          setSearch={setSearch}
        />
      </ThemeContext.Provider>
    )
  },
}

export const ShowHiddenTable: Story = {
  render: (_args) => {
    const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
    const [renderState, setRenderState] = useState(0)
    const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
    const [search, setSearch] = useState<string>()
    const [hideTable, setHideTable] = useState(false)

    return (
      <ThemeContext.Provider
        value={{ ...themeConfig, table_wrapper: 'tes', table_title: 'mb-0 mr-4 font-bold uppercase 3xl' }}
      >
        <TableLowcode
          baseUrl="https://api-geekacademy.merapi.javan.id"
          tableName="cuti"
          module="bpmn"
          renderState={renderState}
          setRenderState={setRenderState}
          pageConfig={pageConfig}
          hideTable={hideTable}
          setPageConfig={setPageConfig}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          search={search}
          setSearch={setSearch}
          subHeader={
            <div className="flex flex-row gap-5">
              <Button type="button" onClick={() => setHideTable(false)}>
                Show Table
              </Button>
              <Button type="button" onClick={() => setHideTable(true)}>
                Hide Table
              </Button>
            </div>
          }
        />
      </ThemeContext.Provider>
    )
  },
}

export const CustomBulkCell: Story = {
  args: {
    baseUrl: 'https://api-geekacademy.merapi.javan.id',
    tableName: 'cuti',
    module: 'bpmn',
    // baseUrl: 'https://kpm-sys.merapi.javan.id',
    // tableName: 'takwim',
    onClickCreate: undefined,
    onClickEdit: undefined,
    onClickDetail: undefined,
  },
  render: (args) => {
    const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
    const [renderState, setRenderState] = useState(0)
    const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
    const [search, setSearch] = useState<string>()
    const [selectedRow, setSelectedRow] = useState<number[]>([])

    console.log(selectedRow)

    return (
      <TableLowcode
        {...args}
        renderState={renderState}
        setRenderState={setRenderState}
        pageConfig={pageConfig}
        setPageConfig={setPageConfig}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        search={search}
        setSearch={setSearch}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        customBulkCell={({ row }) =>
          row.id % 2 === 0 ? (
            <input
              type="checkbox"
              className="form-checkbox rounded bg-[#EBEDF3] text-indigo-600 border-none focus:border-none focus:outline-indigo-600"
              checked={selectedRow && selectedRow.includes(row.id)}
              onClick={() => {
                if (selectedRow && !selectedRow.includes(row.id)) {
                  setSelectedRow?.((prev) => [...prev, row.id])
                } else {
                  setSelectedRow?.((prev) => _.without(prev, row.id))
                }
              }}
            />
          ) : (
            <></>
          )
        }
        onSelectAll={({ data, selectedAll, setSelectedAll }) => {
          if (data) {
            const selectedIdList = [...data].map((item) => item.id).filter((id) => id % 2 === 0)
            if (selectedAll) {
              setSelectedRow([])
            } else {
              setSelectedRow(selectedIdList)
            }
            setSelectedAll((prev) => !prev)
          }
        }}
      />
    )
  },
}

export const Tooltip: Story = {
  args: {
    baseUrl: 'https://api-geekacademy.merapi.javan.id',
    tableName: 'cuti',
    module: 'bpmn',
    // baseUrl: 'https://kpm-sys.merapi.javan.id',
    // tableName: 'takwim',
    onClickCreate: undefined,
    onClickEdit: undefined,
    onClickDetail: undefined,
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
        renderState={renderState}
        setRenderState={setRenderState}
        pageConfig={pageConfig}
        setPageConfig={setPageConfig}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        search={search}
        setSearch={setSearch}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        tooltip={{
          button_create: 'Tooltip button create',
          button_delete: 'Tooltip button delete',
          button_detail: 'Tooltip button detail',
          button_edit: 'Tooltip button edit',
        }}
      />
    )
  },
}

export const Bordered: Story = {
  args: {
    baseUrl: 'https://api-geekacademy.merapi.javan.id',
    tableName: 'cuti',
    module: 'bpmn',
    // baseUrl: 'https://kpm-sys.merapi.javan.id',
    // tableName: 'takwim',
    onClickCreate: undefined,
    onClickEdit: undefined,
    onClickDetail: undefined,
    bordered: true,
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
        renderState={renderState}
        setRenderState={setRenderState}
        pageConfig={pageConfig}
        setPageConfig={setPageConfig}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        search={search}
        setSearch={setSearch}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
      />
    )
  },
}

export const ExtendInputTypes: Story = {
  args: {
    spec: staticSpec2,
    baseUrl: 'https://kpm-sys.merapi.javan.id',
    tableName: 'main-kursus',
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

    const ElementFormExtend = ({ onChange }: { onChange: (value: string | number | boolean) => void }) => {
      return (
        <input className="w-full border border-indigo-400" type="text" onChange={(e) => onChange(e.target.value)} />
      )
    }

    const ElementTableExtend = ({ children }: { children: JSX.Element }) => {
      return (
        <div className="bg-blue-400">
          <div>ini custom cell via context</div>
          <div>{children}</div>
        </div>
      )
    }

    return (
      <InputTypesContext.Provider
        value={[{ form_field_type: 'INPUT_EXTEND', ElementForm: ElementFormExtend, ElementTable: ElementTableExtend }]}
      >
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
      </InputTypesContext.Provider>
    )
  },
}
