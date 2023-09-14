import type { Meta, StoryObj } from '@storybook/react'
import { TableNested } from '@/components'

const meta = {
  title: 'TableNested',
  component: TableNested,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TableNested>

export default meta
type Story = StoryObj<typeof meta>

const dummySpec: any = {
  show_as_menu: true,
  name: 'users',
  is_bpmn: false,
  is_usertask: false,
  can_bulk: false,
  can_create: true,
  can_delete: true,
  can_edit: true,
  can_detail: true,
  label: 'Users',
  base_url: 'https://api-geekacademy.merapi.javan.id',
  path: '/api/profile/user-profile',
  description: 'Field Dari Users',
  header_action: [
    {
      label: 'Tambah',
      action_label: 'Tambahkan Users',
      method: 'post',
      form_type: 'new_page',
      path: '/api/profile/user-profile',
      icon: 'plus',
      type: 'primary',
    },
  ],
  field_action: [
    {
      label: 'Detail',
      action_label: 'Detail Users',
      method: 'get',
      form_type: 'modal',
      path: '/api/profile/user-profile/{id}',
      icon: 'eye',
      type: 'primary',
    },
    {
      label: 'Edit',
      action_label: 'Edit Users',
      method: 'put',
      form_type: 'modal',
      path: '/api/profile/user-profile/{id}',
      icon: 'edit',
      type: 'primary',
    },
    {
      label: 'Hapus',
      action_label: 'Delete Users',
      method: 'delete',
      form_type: 'confirm_modal',
      confirm: {
        title: 'Hapus Data',
        message: 'Apakah anda yakin ingin menghapus data ini?1',
        confirm_text: 'Lanjutkan',
        cancel_text: 'Batal',
      },
      path: '/api/profile/user-profile/{id}',
      icon: 'trash',
      type: 'danger',
    },
  ],
  fields: {
    id: {
      name: 'id',
      label: 'Id',
      required: true,
      searchable: false,
      filterable: false,
      sortable: true,
      type: 'number',
      form_field_type: 'INPUT_NUMBER',
      primary: true,
      is_hidden_in_create: true,
      is_hidden_in_edit: true,
      is_hidden_in_list: false,
      is_hidden_in_detail: false,
      rules: ['required', 'integer'],
      format: '',
      prefix: '',
      suffix: '',
      list_order: 1,
      create_order: 1,
      edit_order: 1,
    },
    username: {
      name: 'username',
      label: 'Username',
      required: true,
      searchable: true,
      filterable: false,
      sortable: true,
      type: 'text',
      form_field_type: 'INPUT_TEXT',
      primary: false,
      is_hidden_in_create: false,
      is_hidden_in_edit: false,
      is_hidden_in_list: false,
      is_hidden_in_detail: false,
      rules: ['required', 'string', 'max:255'],
      format: '',
      prefix: '',
      suffix: '',
      list_order: 2,
      create_order: 2,
      edit_order: 2,
    },
    email: {
      name: 'email',
      label: 'Email',
      required: true,
      searchable: true,
      filterable: false,
      sortable: true,
      type: 'text',
      form_field_type: 'INPUT_TEXT',
      primary: false,
      is_hidden_in_create: false,
      is_hidden_in_edit: false,
      is_hidden_in_list: false,
      is_hidden_in_detail: false,
      rules: ['required', 'string', 'max:255'],
      format: '',
      prefix: '',
      suffix: '',
      list_order: 3,
      create_order: 3,
      edit_order: 3,
    },
    email_verified_at: {
      name: 'email_verified_at',
      label: 'Email Verified At',
      required: false,
      searchable: false,
      filterable: false,
      sortable: true,
      type: 'datetime-local',
      form_field_type: 'INPUT_DATETIME-LOCAL',
      primary: false,
      is_hidden_in_create: false,
      is_hidden_in_edit: false,
      is_hidden_in_list: false,
      is_hidden_in_detail: false,
      rules: ['nullable', 'date_format:Y-m-d H:i:s'],
      format: '',
      prefix: '',
      suffix: '',
      list_order: 4,
      create_order: 4,
      edit_order: 4,
    },
    password: {
      name: 'password',
      label: 'Password',
      required: true,
      searchable: true,
      filterable: false,
      sortable: true,
      type: 'text',
      form_field_type: 'INPUT_TEXT',
      primary: false,
      is_hidden_in_create: true,
      is_hidden_in_edit: true,
      is_hidden_in_list: true,
      is_hidden_in_detail: false,
      rules: ['required', 'string', 'max:255'],
      format: '',
      prefix: '',
      suffix: '',
      list_order: 5,
      create_order: 5,
      edit_order: 5,
    },
    remember_token: {
      name: 'remember_token',
      label: 'Remember Token',
      required: false,
      searchable: true,
      filterable: false,
      sortable: true,
      type: 'text',
      form_field_type: 'INPUT_TEXT',
      primary: false,
      is_hidden_in_create: true,
      is_hidden_in_edit: true,
      is_hidden_in_list: true,
      is_hidden_in_detail: false,
      rules: ['nullable', 'string', 'max:100'],
      format: '',
      prefix: '',
      suffix: '',
      list_order: 6,
      create_order: 6,
      edit_order: 6,
    },
    created_at: {
      name: 'created_at',
      label: 'Created At',
      required: false,
      searchable: false,
      filterable: false,
      sortable: true,
      type: 'datetime-local',
      form_field_type: 'INPUT_DATETIME-LOCAL',
      primary: false,
      is_hidden_in_create: false,
      is_hidden_in_edit: false,
      is_hidden_in_list: false,
      is_hidden_in_detail: false,
      rules: ['nullable', 'date_format:Y-m-d H:i:s'],
      format: '',
      prefix: '',
      suffix: '',
      list_order: 7,
      create_order: 7,
      edit_order: 7,
    },
    updated_at: {
      name: 'updated_at',
      label: 'Updated At',
      required: false,
      searchable: false,
      filterable: false,
      sortable: true,
      type: 'datetime-local',
      form_field_type: 'INPUT_DATETIME-LOCAL',
      primary: false,
      is_hidden_in_create: false,
      is_hidden_in_edit: false,
      is_hidden_in_list: false,
      is_hidden_in_detail: false,
      rules: ['nullable', 'date_format:Y-m-d H:i:s'],
      format: '',
      prefix: '',
      suffix: '',
      list_order: 8,
      create_order: 8,
      edit_order: 8,
    },
    first_name: {
      name: 'first_name',
      label: 'First Name',
      required: true,
      searchable: true,
      filterable: false,
      sortable: true,
      type: 'text',
      form_field_type: 'INPUT_TEXT',
      primary: false,
      is_hidden_in_create: false,
      is_hidden_in_edit: false,
      is_hidden_in_list: false,
      is_hidden_in_detail: false,
      rules: ['required', 'string', 'max:255'],
      format: '',
      prefix: '',
      suffix: '',
      list_order: 9,
      create_order: 9,
      edit_order: 9,
    },
    last_name: {
      name: 'last_name',
      label: 'Last Name',
      required: true,
      searchable: true,
      filterable: false,
      sortable: true,
      type: 'text',
      form_field_type: 'INPUT_TEXT',
      primary: false,
      is_hidden_in_create: false,
      is_hidden_in_edit: false,
      is_hidden_in_list: false,
      is_hidden_in_detail: false,
      rules: ['required', 'string', 'max:255'],
      format: '',
      prefix: '',
      suffix: '',
      list_order: 10,
      create_order: 10,
      edit_order: 10,
    },
    'user-pendidikan': {
      name: 'user-pendidikan',
      label: 'Pendidikan',
      required: false,
      searchable: false,
      filterable: false,
      sortable: false,
      type: '',
      form_field_type: 'INPUT_TABLE',
      primary: false,
      is_hidden_in_create: false,
      is_hidden_in_edit: false,
      is_hidden_in_list: false,
      rules: [],
      format: '',
      prefix: '',
      suffix: '',
      custom_field_atribute: {
        table: 'userpendidikan',
        name: 'user-pendidikan',
        type: 'INPUT_TABLE',
        spec: {
          show_as_menu: true,
          name: 'userpendidikan',
          is_bpmn: false,
          is_usertask: false,
          can_bulk: true,
          can_create: true,
          can_delete: true,
          can_edit: true,
          can_detail: true,
          label: 'Userpendidikan',
          base_url: 'https://api-geekacademy.merapi.javan.id',
          path: '/api/profile/userpendidikan',
          description: 'Field Dari Userpendidikan',
          header_action: [
            {
              label: 'Tambah',
              action_label: 'Tambahkan Userpendidikan',
              method: 'post',
              form_type: 'new_page',
              path: '/api/profile/userpendidikan',
              icon: 'plus',
              type: 'primary',
            },
          ],
          field_action: [
            {
              label: 'Detail',
              action_label: 'Detail Userpendidikan',
              method: 'get',
              form_type: 'modal',
              path: '/api/profile/userpendidikan/{id}',
              icon: 'eye',
              type: 'primary',
            },
            {
              label: 'Edit',
              action_label: 'Edit Userpendidikan',
              method: 'put',
              form_type: 'modal',
              path: '/api/profile/userpendidikan/{id}',
              icon: 'edit',
              type: 'primary',
            },
            {
              label: 'Hapus',
              action_label: 'Delete Userpendidikan',
              method: 'delete',
              form_type: 'confirm_modal',
              confirm: {
                title: 'Hapus Data',
                message: 'Apakah anda yakin ingin menghapus data ini?1',
                confirm_text: 'Lanjutkan',
                cancel_text: 'Batal',
              },
              path: '/api/profile/userpendidikan/{id}',
              icon: 'trash',
              type: 'danger',
            },
          ],
          fields: {
            id: {
              name: 'id',
              label: 'Id',
              required: true,
              searchable: false,
              filterable: false,
              sortable: true,
              type: 'number',
              form_field_type: 'INPUT_NUMBER',
              primary: true,
              is_hidden_in_create: true,
              is_hidden_in_edit: true,
              is_hidden_in_list: false,
              is_hidden_in_detail: false,
              rules: ['required', 'integer'],
              format: '',
              prefix: '',
              suffix: '',
              list_order: 1,
              create_order: 1,
              edit_order: 1,
            },
            user_id: {
              name: 'user_id',
              label: 'User Id',
              required: true,
              searchable: false,
              filterable: false,
              sortable: true,
              type: 'number',
              form_field_type: 'INPUT_FOREIGN-SELECT',
              primary: false,
              is_hidden_in_create: false,
              is_hidden_in_edit: false,
              is_hidden_in_list: false,
              is_hidden_in_detail: false,
              rules: ['required', 'integer'],
              format: '',
              prefix: '',
              suffix: '',
              select_options: {
                url: '/api/profile/user-profile',
                method: 'get',
                type: 'INPUT_FOREIGN-SELECT',
                option_key: 'id',
                option_label: 'first_name',
              },
              table_value_mapping: {
                name: 'user_id',
                type: 'hasOne',
                relation: 'user',
                value: 'first_name',
              },
              list_order: 2,
              create_order: 2,
              edit_order: 2,
            },
            nama: {
              name: 'nama',
              label: 'Nama',
              required: true,
              searchable: true,
              filterable: false,
              sortable: true,
              type: 'text',
              form_field_type: 'INPUT_TEXT',
              primary: false,
              is_hidden_in_create: false,
              is_hidden_in_edit: false,
              is_hidden_in_list: false,
              is_hidden_in_detail: false,
              rules: ['required', 'string', 'max:255'],
              format: '',
              prefix: '',
              suffix: '',
              list_order: 3,
              create_order: 3,
              edit_order: 3,
            },
            jenjang: {
              name: 'jenjang',
              label: 'Jenjang',
              required: true,
              searchable: true,
              filterable: false,
              sortable: true,
              type: 'text',
              form_field_type: 'INPUT_TEXT',
              primary: false,
              is_hidden_in_create: false,
              is_hidden_in_edit: false,
              is_hidden_in_list: false,
              is_hidden_in_detail: false,
              rules: ['required', 'string', 'max:255'],
              format: '',
              prefix: '',
              suffix: '',
              list_order: 4,
              create_order: 4,
              edit_order: 4,
            },
            created_at: {
              name: 'created_at',
              label: 'Created At',
              required: false,
              searchable: false,
              filterable: false,
              sortable: true,
              type: 'datetime-local',
              form_field_type: 'INPUT_DATETIME-LOCAL',
              primary: false,
              is_hidden_in_create: false,
              is_hidden_in_edit: false,
              is_hidden_in_list: false,
              is_hidden_in_detail: false,
              rules: ['nullable', 'date_format:Y-m-d H:i:s'],
              format: '',
              prefix: '',
              suffix: '',
              list_order: 5,
              create_order: 5,
              edit_order: 5,
            },
            updated_at: {
              name: 'updated_at',
              label: 'Updated At',
              required: false,
              searchable: false,
              filterable: false,
              sortable: true,
              type: 'datetime-local',
              form_field_type: 'INPUT_DATETIME-LOCAL',
              primary: false,
              is_hidden_in_create: false,
              is_hidden_in_edit: false,
              is_hidden_in_list: false,
              is_hidden_in_detail: false,
              rules: ['nullable', 'date_format:Y-m-d H:i:s'],
              format: '',
              prefix: '',
              suffix: '',
              list_order: 6,
              create_order: 6,
              edit_order: 6,
            },
            created_by: {
              name: 'created_by',
              label: 'Created By',
              required: false,
              searchable: false,
              filterable: false,
              sortable: true,
              type: 'number',
              form_field_type: 'INPUT_NUMBER',
              primary: false,
              is_hidden_in_create: false,
              is_hidden_in_edit: false,
              is_hidden_in_list: false,
              is_hidden_in_detail: false,
              rules: ['nullable', 'integer'],
              format: '',
              prefix: '',
              suffix: '',
              list_order: 7,
              create_order: 7,
              edit_order: 7,
            },
            updated_by: {
              name: 'updated_by',
              label: 'Updated By',
              required: false,
              searchable: false,
              filterable: false,
              sortable: true,
              type: 'number',
              form_field_type: 'INPUT_NUMBER',
              primary: false,
              is_hidden_in_create: false,
              is_hidden_in_edit: false,
              is_hidden_in_list: false,
              is_hidden_in_detail: false,
              rules: ['nullable', 'integer'],
              format: '',
              prefix: '',
              suffix: '',
              list_order: 8,
              create_order: 8,
              edit_order: 8,
            },
            deleted_by: {
              name: 'deleted_by',
              label: 'Deleted By',
              required: false,
              searchable: false,
              filterable: false,
              sortable: true,
              type: 'number',
              form_field_type: 'INPUT_NUMBER',
              primary: false,
              is_hidden_in_create: false,
              is_hidden_in_edit: false,
              is_hidden_in_list: false,
              is_hidden_in_detail: false,
              rules: ['nullable', 'integer'],
              format: '',
              prefix: '',
              suffix: '',
              list_order: 9,
              create_order: 9,
              edit_order: 9,
            },
          },
          relations: {
            userpendidikan_user_id_foreign: {
              users: {
                type: 'belongsTo',
                from_key: 'user_id',
                destination_table: 'users',
                destination_key: 'id',
              },
            },
          },
        },
      },
      list_order: 11,
      create_order: 11,
      edit_order: 11,
    },
  },
  relations: [],
}

export const Base: Story = {
  args: { spec: dummySpec, onSubmit: (data) => console.log(data) },
}
