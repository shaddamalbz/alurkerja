import { Theme } from '@/types'

export const themeConfig: Theme = {
  table: 'w-full scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 scrollbar-thumb-rounded text-xs',
  table_title: 'mb-0 mr-4 font-bold uppercase',
  table_head_row: 'text-gray-400 border-b border-gray-200',
  table_head_col: 'whitespace-nowrap py-3 px-3',
  table_head_col_no: 'whitespace-nowrap py-3 px-3 text-center w-10',
  table_head_col_bulk: 'whitespace-nowrap py-3 px-3 text-center w-10',
  table_head_col_bulk_item:
    'form-checkbox rounded bg-[#EBEDF3] text-indigo-600 border-none focus:border-none focus:outline-indigo-600',
  table_head_col_action: 'w-40 py-3 px-3 bg-white',

  table_body_row: 'border-b border-gray-200',
  table_body_col: 'px-3 text-black py-3',
  table_body_col_action: 'z-10 bg-white border-b border-gray-200 py-3 px-4',

  checkbox:
    'form-checkbox rounded bg-[#EBEDF3] text-indigo-600 border-none focus:border-none focus:outline-indigo-600 mr-2',
}
