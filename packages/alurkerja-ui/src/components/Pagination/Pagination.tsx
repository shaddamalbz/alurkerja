import { PaginationProps } from '@/types'
import { FC, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import _ from 'lodash'

export const Pagination: FC<PaginationProps> = ({ pagination, pageConfig, setPageConfig, tableSpec }) => {
  var totalShowedPagination = 3
  const [paginationRange, setPaginationRange] = useState<any[]>([])

  useEffect(() => {
    if (pagination) {
      var start = pagination.number - totalShowedPagination > 0 ? pagination.number - totalShowedPagination : 0
      var end =
        pagination.number + totalShowedPagination < pagination.total_page
          ? pagination.number + totalShowedPagination
          : pagination.total_page
      setPaginationRange(_.range(start, end))
    }
  }, [pagination])

  const getPage = () => (pagination.number * pagination.size === 0 ? 1 : pagination.number * pagination.size)
  const getLimit = () =>
    (pagination.number + 1) * pagination.size > pagination.total_elements
      ? pagination.total_elements
      : (pagination.number + 1) * pagination.size

  const getTotal = () => pagination.total_elements

  return (
    <>
      {JSON.stringify(pagination)}
      {pagination && pageConfig && setPageConfig ? 'true' : 'flase'}
      {pagination && pageConfig && setPageConfig && (
        <div className="alurkerja-pagination text-xs md:text-base sm:text-sm py-4 px-4 rounded border-t">
          <div className="flex flex-wrap gap-4 justify-between item-center relative">
            <nav>
              {pagination.total_page > 0 && (
                <ul className="pagination flex items-center gap-x-1 list-none">
                  {pagination.number > totalShowedPagination - 1 && (
                    <li
                      onClick={() => {
                        if (!pagination.first) {
                          setPageConfig({ ...pageConfig, ...{ page: 0 } })
                        }
                      }}
                    >
                      <span className="flex flex-row items-center justify-center cursor-pointer w-8 h-8 page-link relative py-1.5 px-3  border-0 outline-none transition-all duration-300 rounded focus:shadow-none bg-gray-100">
                        <FaChevronLeft color="#5E6278" />
                        <FaChevronLeft color="#5E6278" />
                      </span>
                    </li>
                  )}
                  {!pagination.first && (
                    <li
                      onClick={() => {
                        if (!pagination.first) {
                          setPageConfig({
                            ...pageConfig,
                            ...{ page: pagination.number - 1 },
                          })
                        }
                      }}
                    >
                      <span className="flex flex-row items-center justify-center cursor-pointer w-8 h-8 page-link relative py-1.5 px-3  border-0 outline-none transition-all duration-300 rounded focus:shadow-none bg-gray-100">
                        <FaChevronLeft size={7} color="#5E6278" />
                      </span>
                    </li>
                  )}
                  {paginationRange.map((page: number) => {
                    return (
                      <li
                        key={page}
                        onClick={() => {
                          if (pagination.number !== page) {
                            setPageConfig({ ...pageConfig, ...{ page: page } })
                          }
                        }}
                        className={pagination.number === page ? 'active' : ''}
                      >
                        <span
                          className={
                            'flex flex-row items-center justify-center cursor-pointer w-8 h-8 page-link relative py-1.5 px-3 rounded border-0 outline-none transition-all duration-300  focus:shadow-none' +
                            (pagination.number === page
                              ? ' bg-blue-400 text-white hover:bg-blue-500 outline-none transition-all duration-300 rounded focus:shadow-none'
                              : ' bg-gray-100 text-gray-400 hover:bg-gray-200 woutline-none transition-all duration-300 rounded focus:shadow-none')
                          }
                        >
                          {page + 1}
                        </span>
                      </li>
                    )
                  })}
                  {!pagination.last && (
                    <li
                      className="page-item"
                      onClick={() => {
                        if (!pagination.last) {
                          setPageConfig({
                            ...pageConfig,
                            ...{ page: pagination.number + 1 },
                          })
                        }
                      }}
                    >
                      <span className="flex flex-row items-center justify-center cursor-pointer w-8 h-8 page-link relative py-1.5 px-3  border-0 outline-none transition-all duration-300 rounded focus:shadow-none bg-gray-100">
                        <FaChevronRight size={7} color="#5E6278" />
                      </span>
                    </li>
                  )}
                  {pagination.number - 1 < pagination.total_page && !pagination.last && (
                    <li
                      className="page-item"
                      onClick={() => {
                        if (!pagination.last) {
                          setPageConfig({
                            ...pageConfig,
                            ...{ page: pagination.total_page - 1 },
                          })
                        }
                      }}
                    >
                      <span className="flex flex-row items-center justify-center cursor-pointer w-8 h-8 page-link relative py-1.5 px-3  border-0 outline-none transition-all duration-300 rounded focus:shadow-none bg-gray-100">
                        <FaChevronRight color="#5E6278" />
                        <FaChevronRight color="#5E6278" />
                      </span>
                    </li>
                  )}
                </ul>
              )}
            </nav>
            <div className="flex flex-row gap-2 items-center ">
              <select
                onChange={(e) => {
                  setPageConfig({
                    ...pageConfig,
                    ...{ limit: Number(e.target.value), page: 0 },
                  })
                }}
                className="alurkerja-form w-full  rounded border border-gray-100 text-xs bg-gray-100 p-2 pr-10"
                style={{ paddingRight: '30px' }}
              >
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
                <option value={30}>30</option>
              </select>
              <span className="whitespace-nowrap text-xs text-[#5E6278]">
                {tableSpec?.languages?.pagination_info
                  ? tableSpec.languages?.pagination_info
                      .replace('{page}', `${getPage()}`)
                      .replace('{limit}', `${getLimit()}`)
                      .replace('{total}', `${getTotal()}`)
                  : `Memunculkan data dari ${getPage()} sampai  ${getLimit()} total ${getTotal()}`}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
