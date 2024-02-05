import { useEffect, useState } from 'react'
import { getDaysInMonth, getDay } from 'date-fns'
import { Switch } from '@headlessui/react'
import moment from 'moment'
import clsx from 'clsx'
import { createPortal } from 'react-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { Input } from '../Input'
import { useOverlay } from '@/hooks'
import { DATE_LOCALE_DAYS, MONTH_LOCALE_DAYS } from '@/helpers/constants'

interface AlurkerjaCalendar {
  /**
   *
   * @param value
   * @returns Object {date_start, date_end}
   */
  onChange?: (value: { date_start?: Date | null; date_end?: Date | null }) => void
  type?: 'date' | 'range' | 'month' | 'year'
}

/**
 * Component Calendar
 * @param onChange
 * @returns object with date_start & date_end
 */

export const Calendar = ({ onChange, type = 'range' }: AlurkerjaCalendar) => {
  const { hide, isOverlayVisible, show, elementRef, overlayRef } = useOverlay()

  const [selectedDate, setSelectedDate] = useState<[Date | null, Date | null]>()

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  const [daysFromPreviousMonth, setDaysFromPreviousMonth] = useState<{ date: number; month: number; year: number }[]>()
  const [days, setDays] = useState<{ date: number; month: number; year: number }[]>()
  const [daysFromNextMonth, setDaysFromNextMonth] = useState<{ date: number; month: number; year: number }[]>()
  const [toggled, setToggled] = useState(type === 'range')
  const [pickerType, setPickerType] = useState(type)

  const clearDateValue = () => {
    setSelectedDate(undefined)
  }

  // clear current selected when toggle change
  useEffect(() => {
    clearDateValue()
  }, [toggled])

  const getDays = () => {
    const currentMonthTotalDay = getDaysInMonth(new Date(currentYear, currentMonth))
    const previosMonthTotalDay = getDaysInMonth(new Date(currentYear, currentMonth !== 1 ? currentMonth - 1 : 12))
    const firstDayOfMonth = getDay(new Date(currentYear, currentMonth, 1))

    const daysForPreviousMonth = []
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysForPreviousMonth.push({ date: previosMonthTotalDay - i, month: currentMonth - 1, year: currentYear })
    }
    daysForPreviousMonth.reverse()

    const daysFromCurrentsMonth = []
    for (let i = 1; i <= currentMonthTotalDay; i++) {
      daysFromCurrentsMonth.push({ date: i, month: currentMonth, year: currentYear })
    }

    // value 42 represent total column on calendar (7x6)
    const restDaysFromNextMonth = 42 - daysForPreviousMonth.length - daysFromCurrentsMonth.length
    const daysForNextMonth = []
    for (let i = 1; i <= restDaysFromNextMonth; i++) {
      daysForNextMonth.push({ date: i, month: currentMonth + 1, year: currentYear })
    }

    setDaysFromPreviousMonth(daysForPreviousMonth)
    setDays(daysFromCurrentsMonth)
    setDaysFromNextMonth(daysForNextMonth)
  }

  useEffect(() => {
    getDays()
  }, [currentMonth, currentYear])

  useEffect(() => {
    onChange?.({ date_start: selectedDate?.[0], date_end: selectedDate?.[1] })
  }, [selectedDate])

  const classNameOverlay = clsx(
    isOverlayVisible ? 'block' : 'hidden',
    'absolute mt-2 rounded-lg shadow border p-2 bg-white z-10'
  )

  const onPreviosClick = () => {
    if (pickerType === 'year') {
      setCurrentYear((prev) => prev - 5)
    } else if (pickerType === 'month') {
      setCurrentYear((prev) => prev - 1)
    } else {
      setCurrentMonth((prev) => {
        const isLastMonth = prev === 0
        if (isLastMonth) {
          setCurrentYear((prev) => prev - 1)
          return 11
        }
        return prev - 1
      })
    }
  }

  const onNextClick = () => {
    if (pickerType === 'year') {
      setCurrentYear((prev) => prev + 5)
    } else if (pickerType === 'month') {
      setCurrentYear((prev) => prev + 1)
    } else {
      setCurrentMonth((prev) => {
        const isLastMonth = prev === 12
        if (isLastMonth) {
          setCurrentYear((prev) => prev + 1)

          return 1
        }
        return prev + 1
      })
    }
  }

  const onClickDate = (day: number) => {
    if (!toggled) {
      const startDate = new Date(currentYear, currentMonth, day)

      setSelectedDate([startDate, null])
    } else {
      setSelectedDate((prev) => {
        // if all date are filled select from startDate again
        if (!prev?.[0] || (prev[0] && prev[1])) {
          return [new Date(currentYear, currentMonth, day), null]
        }
        const startDate = prev[0]
        const endDate = new Date(currentYear, currentMonth, day)

        // reverse value if startDate greater than endDate
        const date: [Date, Date] = startDate.getDate() < endDate.getDate() ? [startDate, endDate] : [endDate, startDate]

        return date
      })
    }
  }

  const renderOverlayHeader = () => {
    return (
      <div className="flex items-center justify-between p-2 border-b">
        <button
          type="button"
          className="w-8 h-8 hover:bg-gray-100 rounded-full flex items-center justify-center"
          onClick={onPreviosClick}
        >
          <FaChevronLeft />
        </button>
        <div className="w-fit mx-auto flex gap-4 items-center font-bold">
          {pickerType !== 'month' && pickerType !== 'year' && (
            <span className="hover:text-[#0095E8] text-gray-600 cursor-pointer" onClick={() => setPickerType('month')}>
              {MONTH_LOCALE_DAYS['id'][currentMonth]}
            </span>
          )}
          {pickerType === 'year' ? (
            <span>
              {currentYear - 5} - {currentYear}
            </span>
          ) : (
            <span className="hover:text-[#0095E8] text-gray-600 cursor-pointer" onClick={() => setPickerType('year')}>
              {currentYear}
            </span>
          )}
        </div>
        <button
          type="button"
          className="w-8 h-8 hover:bg-gray-100 rounded-full flex items-center justify-center"
          onClick={onNextClick}
        >
          <FaChevronRight />
        </button>
      </div>
    )
  }

  const renderDatePicker = () => {
    if (pickerType === 'range' || pickerType === 'date') {
      return (
        <div className="w-96 pb-2 border-b">
          <div className="grid grid-cols-7">
            {DATE_LOCALE_DAYS['id'].map((day, idx) => (
              <div
                className="text-center font-bold text-gray-600 p-2 cursor-default bg-gray-50"
                key={`table-head-${idx}`}
              >
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {daysFromPreviousMonth?.map(({ date, month, year }, idx) => {
              const currentDate = new Date(year, month, date)

              const isWithinSelectedRange =
                selectedDate &&
                selectedDate[0] &&
                selectedDate[1] &&
                currentDate >= selectedDate[0] &&
                currentDate <= selectedDate[1]

              const isSelected =
                selectedDate &&
                selectedDate[0] &&
                currentDate.getDate() === selectedDate[0].getDate() &&
                month === selectedDate[0].getMonth() &&
                year === selectedDate[0].getFullYear()
              return (
                <div
                  key={`daysFromPreviousMonth-${idx}`}
                  className={clsx(
                    'h-8 w-8 mx-auto text-center text-gray-400 rounded-full p-2 flex items-center justify-center cursor-default',
                    isSelected || (pickerType === 'range' && isWithinSelectedRange) ? 'bg-[#0095E8]' : ''
                  )}
                >
                  {date}
                </div>
              )
            })}
            {days?.map(({ date, month, year }, idx) => {
              const currentDate = new Date(year, month, date)

              const isWithinSelectedRange =
                selectedDate &&
                selectedDate[0] &&
                selectedDate[1] &&
                currentDate >= selectedDate[0] &&
                currentDate <= selectedDate[1]

              const isSelected =
                selectedDate &&
                selectedDate[0] &&
                currentDate.getDate() === selectedDate[0].getDate() &&
                month === selectedDate[0].getMonth() &&
                year === selectedDate[0].getFullYear()

              return (
                <div
                  key={`day-${idx}`}
                  className={clsx(
                    'h-8 w-8 mx-auto text-center rounded-full p-2 flex items-center justify-center cursor-pointer',
                    isSelected || (pickerType === 'range' && isWithinSelectedRange)
                      ? 'bg-[#0095E8] text-white'
                      : 'text-black hover:bg-gray-100'
                  )}
                  onClick={() => onClickDate(date)}
                >
                  {date}
                </div>
              )
            })}
            {daysFromNextMonth?.map(({ date, month, year }, idx) => {
              const currentDate = new Date(year, month, date)

              const isWithinSelectedRange =
                selectedDate &&
                selectedDate[0] &&
                selectedDate[1] &&
                currentDate >= selectedDate[0] &&
                currentDate <= selectedDate[1]

              const isSelected =
                selectedDate &&
                selectedDate[0] &&
                currentDate.getDate() === selectedDate[0].getDate() &&
                month === selectedDate[0].getMonth() &&
                year === selectedDate[0].getFullYear()
              return (
                <div
                  key={`daysFromNextMonth-${idx}`}
                  className={clsx(
                    'h-8 w-8 mx-auto text-center text-gray-400 rounded-full p-2 flex items-center justify-center cursor-default',
                    isSelected || (pickerType === 'range' && isWithinSelectedRange) ? 'bg-[#0095E8]' : ''
                  )}
                >
                  {date}
                </div>
              )
            })}
          </div>
        </div>
      )
    }
    return null
  }

  const renderOverlayFooter = () => {
    return (
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center gap-0.5">
          <Switch
            checked={toggled}
            onChange={setToggled}
            className={clsx(
              'relative inline-flex h-[18px] w-[30px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 ',
              toggled ? 'bg-blue-300' : 'bg-gray-300'
            )}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${toggled ? 'translate-x-4' : 'translate-x-0'}
            pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
          <span className="text-xs ">Period Activity</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-2 py-0.5 text-sm text-gray-600 bg-blue-200 rounded" onClick={clearDateValue}>
            Cancel
          </button>
          <button className="px-2 py-0.5 text-sm text-white bg-gray-400 rounded" onClick={hide}>
            Apply
          </button>
        </div>
      </div>
    )
  }

  const renderMonthPicker = () => {
    if (pickerType === 'month') {
      return (
        <div className="w-96 pb-2 border-b">
          <div className="grid grid-cols-3">
            {MONTH_LOCALE_DAYS['id'].map((month, idx) => {
              const isSelected = currentMonth === idx + 1
              return (
                <div
                  className={clsx(
                    'text-center py-2 cursor-pointer hover:bg-gray-100 rounded-lg font-semibold',
                    isSelected && 'text-[#0095E8]'
                  )}
                  key={`month-${idx}`}
                  onClick={() => {
                    setCurrentMonth(idx + 1)
                    setPickerType(type)
                  }}
                >
                  {month}
                </div>
              )
            })}
          </div>
        </div>
      )
    }
    return null
  }

  const renderYearPicker = () => {
    if (pickerType === 'year') {
      return (
        <div className="w-96 pb-2 border-b">
          <div className="space-y-2">
            {Array.from(Array(5), (_, idx) => (
              <div
                className="py-2 text-center hover:bg-gray-100 rounded-lg font-semibold"
                key={`year-${idx}`}
                onClick={() => {
                  setCurrentYear(currentYear - idx)
                  setPickerType(type)
                }}
              >
                {currentYear - idx}
              </div>
            )).reverse()}
          </div>
        </div>
      )
    }
    return null
  }

  const overlayHeader = renderOverlayHeader()
  const datePicker = renderDatePicker()
  const monthPicker = renderMonthPicker()
  const yearPicker = renderYearPicker()
  const overlayFooter = renderOverlayFooter()

  const inputValue = selectedDate
    ? selectedDate[1]
      ? `${moment(selectedDate[0]).format('DD/MM/YYYY')} - ${moment(selectedDate[1]).format('DD/MM/YYYY')}`
      : moment(selectedDate[0]).format('DD/MM/YYYY')
    : ''

  if (typeof document !== 'undefined') {
    return (
      <div ref={elementRef} className="relative">
        <Input onClick={show} value={inputValue} readOnly />
        {createPortal(
          <div ref={overlayRef} className={classNameOverlay}>
            {overlayHeader}
            {datePicker}
            {monthPicker}
            {yearPicker}
            {overlayFooter}
          </div>,
          document.body
        )}
      </div>
    )
  }
}
