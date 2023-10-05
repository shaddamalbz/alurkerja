import React from 'react'

import { BaseSection } from './BaseSection'
import { PaginationSection } from './PaginationSection'
import { SearchSection } from './SearchSection'
import { FilterSection } from './FilterSection'
import { AllFeatureSection } from './AllFeatureSection'
import { OnClickCreateProps } from './OnClickCreateProps'
import { CustomButtonCreateProps } from './CustomButtonCreate'
import { OnClickDetailProps } from './OnClickDetailProps'
import { CustomButtonDetailProps } from './CustomButtonDetail'
import { OnClickEditProps } from './OnClickEditProps'
import { CustomButtonEditProps } from './CustomButtonEditProps'
import { CustomCellProps } from './CustomCellProps'
import { CustomHeaderProps } from './CustomHeaderProps'
import { BulkSection } from './BulkFeatureSection'
import { ExtraActionButtonProps } from './ExtraActionButtonProps'
import { CustomButtonFilterProps } from './CustomButtonFilterProps'
import { CustomActionCellProps } from './CustomActionCellProps'
import { ColumnProps } from './ColumnProps'

export default function page() {
  return (
    <article>
      <h1>TableLowcode</h1>
      <p>
        komponen ini digunakan untuk menampilkan list data dan sudah include CRUD apabila API dan spesifikasi nya sudah
        tersedia benar. default fitur CRUD nya menggunakan Modal. yang perlu ditekankan pada komponen ini adalah fitur
        default yang disediakan customisasinya terbatas. contoh ingin mengcustom tampilan modal default nya itu hanya
        ada opsi menggantikan bukan mengedit
      </p>

      <BaseSection />

      <h2>Feature</h2>
      <PaginationSection />
      <SearchSection />
      <FilterSection />
      <BulkSection />
      <AllFeatureSection />
      <h2>Props</h2>
      <OnClickCreateProps />
      <OnClickDetailProps />
      <OnClickEditProps />
      <CustomButtonDetailProps />
      <CustomButtonEditProps />
      <CustomCellProps />
      <CustomHeaderProps />
      <CustomButtonFilterProps />
      <CustomButtonCreateProps />
      <CustomActionCellProps />
      <ExtraActionButtonProps />
      <ColumnProps />
    </article>
  )
}
