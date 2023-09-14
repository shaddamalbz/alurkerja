import { Theme } from '@/types'

export const themeConfig: Theme = {
  table_wrapper: 'p-6',
  table: 'w-full scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 scrollbar-thumb-rounded text-xs',
  table_title: 'mb-0 mr-4 font-bold uppercase',
  table_head: 'bg-[#F3F6F9] text-[#A1A5B7]',
  table_head_row: 'border-b border-gray-200',
  table_head_col: 'whitespace-nowrap p-4 font-semibold hover:text-main-blue-alurkerja',
  table_head_col_no: 'whitespace-nowrap p-4 text-center w-14 font-bold hover:text-main-blue-alurkerja',
  table_head_col_bulk: 'whitespace-nowrap p-4 text-center w-14',
  table_head_col_bulk_item:
    'form-checkbox rounded bg-[#EBEDF3] text-indigo-600 border-none focus:border-none focus:outline-indigo-600',
  table_head_col_action: 'w-40 p-4',

  table_body_row: 'border-b border-gray-200 hover:bg-gray-100',
  table_body_col: 'text-black p-4',
  table_body_col_action: 'z-10 border-b border-gray-200 p-4',
}
