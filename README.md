# Alurkerja

Repositori ini merupakan repositori monorepo yg untuk saat ini terdiri dari

- Aplikasi Dokumentasi Alurkerja UI
- NPM Packages Alurkerja

## Requirement

- pnpm ^8.7.4
- node 18

## Run Locally

Clone the project

```bash
  git clone https://github.com/shaddamalbz/alurkerja.git
  cd alurkerja
  pnpm i --frozen-lockfile
```

Running development app

```bash
  pnpm build:ui
  pnpm dev:docs
```

Running development packages using storybook

```bash
  pnpm dev:ui
```

## Maintanance Guide

#### Alurkerja UI (NPM Packages)

1. Lokasi
   Project NPM Packages Alurkerja UI ini berlokasi di `./packages/alurkerja-ui`
2. [Storybook](https://storybook.js.org/)

   > Why storybook?
   > Storybook disini digunakan untuk mengisolasi semua component, semua props, sehingga kita dengan mudah mengecheck apakah props pada component ini jalan seperti yang di harapkan

   ##### Membuat Story untuk component baru

   1. Pastikan component sudah di export di `./packages/alurkerja-ui/src/components/index.ts`
   2. Buat file di lokasi komponen berada dengan nama `<nama components>.stories.{tsx|ts}`

      ```tsx
      import type { Meta, StoryObj } from '@storybook/react'
      import { NamaComponent } from '@/components'

      const meta = {
        title: 'NamaComponent',
        component: NamaComponent,
        // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
        tags: ['autodocs'],
        parameters: {
          // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
          layout: 'fullscreen', // fullscreen / centered
        },
      } satisfies Meta<typeof NamaComponent>

      export default meta
      type Story = StoryObj<typeof meta>

      export const Default: Story = {
        args: {},
      }
      ```

   3. Jalankan aplikasi dengan perintah

      ```bash
          pnpm dev:ui
      ```

   4. Maka akan ada menu baru di sidebar sesuai dengan `title`
   5. Untuk memberikan props pada component didalam story silahkan liat dokumentasi ini [Arguments Story](https://storybook.js.org/docs/writing-stories/args)
   6. Baca ini juga untuk membuat story dengan cara mereturn JSX [Render Story](https://storybook.js.org/docs/writing-stories/stories-for-multiple-component)

3. NPM Packages
   Merupakan NPM Registry untuk sharing packages

   ##### Publishing dan Versioning

   1. Login menggunakan akun https://www.npmjs.com/ nya kang Purwa, bisa gunakan ini juga klo sering ganti2 akun [npm-user-switch](https://github.com/perry-mitchell/npm-user-switch)

   2. Build dengan perintah

   ```bash
    yarn build
   ```

   3. Pada file `./packages/alurkerja-ui/packages.json` ubah versionnya, misal dari 1.0.0 mendjadi 1.0.0 (Update Minor)
   4. Jalankan perintah

   ```bash
    pnpm publish:ui
   ```

   5. fyi, step 4 itu masih tag beta, untuk mengubah tag nya ke latest bisa menggunakan perintah

   ```bash
    pnpm release:ui
   ```

   > note: Packages Alurkerja UI versi 0.x.x masih proses pengembanganan juga karena masih dipakai dibeberapa project jdi lebih baik untuk versi 1 tetap di tag beta sampai project yang pakai alurkerja v0.x.x closed

4. Build System
   Untuk packages Alurkerja-ui ini dibuild menggunakan [vite library mode](https://vitejs.dev/guide/build#library-mode)\

5. Spec
   Spec merupakan bagian yang paling penting untuk menggunakan komponen `TableLowcode` dan `FormLowcode`. dengan spec membuat BE programmer memiliki kuasa untuk mengatur tampilan aplikasi, berikut contoh spec:
   ```tsx
   {
      show_as_menu: true,
      name: 'Pengajuan Izin',
      is_bpmn: true,
      is_usertask: false,
      can_bulk: false,
      can_create: true,
      can_delete: false,
      can_edit: true,
      can_detail: true,
      label: 'Takwim',
      base_url: 'https://joglo-api.merapi.javan.id',
      path: '/workflow/v1/bpmn/pengajuanizin',
      description: 'Pengajuan Izin',
      header_action: [
         {
            label: 'Tambah',
            action_label: 'Tambah Pengajuan',
            method: 'post',
            form_type: 'new_page',
            path: '/workflow/v1/bpmn/pengajuanizin',
            icon: 'plus',
            type: 'primary',
         },
      ],
      field_action: [
         {
            label: 'Detail',
            action_label: 'Detail Payslip',
            method: 'get',
            form_type: 'modal',
            path: '/workflow/v1/bpmn/pengajuanizin/{id}',
            icon: 'eye',
            type: 'primary',
         },
         {
            label: 'Edit',
            action_label: 'Kemaskini Takwim',
            method: 'put',
            form_type: 'modal',
            path: '/workflow/v1/bpmn/pengajuanizin/{id}',
            icon: 'edit',
            type: 'primary',
         },
         {
            label: 'Hapus',
            action_label: 'Hapus Takwim',
            method: 'delete',
            form_type: 'confirm_modal',
            confirm: {
               title: 'Hapus Data',
               message: 'Adakah anda pasti ingin memadam data ini?',
               confirm_text: 'Ya, Teruskan',
               cancel_text: 'Batal',
            },
            path: '/workflow/v1/bpmn/pengajuanizin/{id}',
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
            primary: false,
            is_hidden_in_create: true,
            is_hidden_in_edit: true,
            is_hidden_in_list: false,
            is_hidden_in_detail: true,
            rules: ['required', 'integer'],
            format: '',
            prefix: '',
            suffix: '',
            list_order: 6,
            create_order: 6,
            edit_order: 6,
         },
         jenis_pengajuan: {
            name: 'id',
            label: 'Id',
            required: true,
            searchable: false,
            filterable: false,
            sortable: true,
            type: 'number',
            form_field_type: 'INPUT_NUMBER',
            primary: false,
            is_hidden_in_create: true,
            is_hidden_in_edit: true,
            is_hidden_in_list: false,
            is_hidden_in_detail: true,
            rules: ['required', 'integer'],
            format: '',
            prefix: '',
            suffix: '',
            list_order: 6,
            create_order: 6,
            edit_order: 6,
         },
         action: {
            name: 'action',
            label: 'Id',
            required: true,
            searchable: false,
            filterable: false,
            sortable: true,
            type: 'number',
            form_field_type: 'INPUT_NUMBER',
            primary: false,
            is_hidden_in_create: true,
            is_hidden_in_edit: true,
            is_hidden_in_list: false,
            is_hidden_in_detail: true,
            rules: ['required', 'integer'],
            format: '',
            prefix: '',
            suffix: '',
            list_order: 6,
            create_order: 6,
            edit_order: 6,
         },
         jam_mulai: {
            name: 'jenis_pengajuan',
            label: 'jenis',
            required: true,
            searchable: false,
            filterable: false,
            sortable: true,
            type: 'number',
            form_field_type: 'INPUT_STRING',
            primary: false,
            is_hidden_in_create: true,
            is_hidden_in_edit: true,
            is_hidden_in_list: false,
            is_hidden_in_detail: true,
            rules: ['required', 'integer'],
            format: '',
            prefix: '',
            suffix: '',
            list_order: 6,
            create_order: 6,
            edit_order: 6,
         },
      },
   }
   ```

#### Dokumentasi Alukerja UI (Nextjs)

1. Lokasi + Configurasi
   Project Dokumentasi Alurkerja UI ini berlokasi di `./apps/alurkerja-docs`. Aplikasi ini dibangung menggunaka [Nextjs v13 + App Router](https://nextjs.org/docs) dengan ditambahkan [@next/mdx](https://nextjs.org/docs/pages/building-your-application/configuring/mdx) agar support markdown untuk membuat dokumentasi lebih bervariasi

2. Cara menggunakan component dari packages Alurkerja UI di local

   - Aplikasi ini sudah dikonfigurasikan agar mengambil hasil build dari packages alurkerja-ui yang berlokasi di ./packages/alurkerja-ui/dist, sehingga perlu menjalankan `pnpm build:ui` terlebih dahulu
   - selanjutnya tinggal import seperti biasa contohnya `import { Button } from 'alurkerja-ui'` dan bisa dipakai seperti seharusnya

3. Deployment
   - untuk saat ini deployment sudah otomatis di deploy ke vercel via github action di repository `https://github.com/shaddamalbz/alurkerja`
