import { Theme } from '@/types'

export const themeConfig: Theme = {
  table_wrapper: 'p-6',
  table: 'w-full scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 scrollbar-thumb-rounded text-xs m-0',
  table_header: 'px-7 flex flex-row items-center justify-between gap-2',
  table_title: 'mb-0 mr-4 font-bold uppercase',
  table_head_row: 'text-[#A1A5B7] border-b border-gray-200',
  table_head_col: 'whitespace-nowrap p-4 bg-[#F3F6F9] text-left',
  table_head_col_no: 'whitespace-nowrap p-4 text-center w-10 bg-[#F3F6F9]',
  table_head_col_bulk: 'whitespace-nowrap p-4 text-center w-10 bg-[#F3F6F9]',
  table_head_col_bulk_item:
    'form-checkbox rounded bg-[#EBEDF3] text-indigo-600 border-none focus:border-none focus:outline-indigo-600',
  table_head_col_action: 'w-40 p-4 bg-[#F3F6F9] text-[#A1A5B7]',

  table_body_row: 'border-b border-gray-200',
  table_body_col: 'text-black px-4 py-5',
  table_body_col_action: 'z-10 border-b border-gray-200 px-4 py-5',

  checkbox:
    'form-checkbox rounded bg-[#EBEDF3] text-indigo-600 border-none focus:border-none focus:outline-indigo-600 mr-2',
}
