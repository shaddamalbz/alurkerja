import { useState, useEffect, FC } from 'react'

export interface SwitchProps {
  options: { value: string | number | boolean; label: string }[]
  /** callback to get value */
  onChange?: (value: boolean | string | number | undefined) => void
  /** props to set defaultvalue */
  defaultValue?: boolean
}

/**
 *
 * @returns 0 for false, 1 for true
 */
export const Switch: FC<SwitchProps> = ({ options, onChange, defaultValue = false }) => {
  const [selected, setSelected] = useState<boolean | number | string>()

  useEffect(() => {
    onChange?.(selected)
  }, [selected])

  useEffect(() => {
    if (defaultValue === false || defaultValue === true) {
      setSelected(defaultValue)
    }
  }, [defaultValue])

  return (
    <>
      <div className="w-full flex items-center">
        {options.map((option, idx: number) => (
          <div
            className={`w-fit text-white p-2 flex justify-center cursor-pointer ${
              selected === option.value ? (idx % 2 === 0 ? 'bg-[#005FC2]' : ' bg-[#F4402C]') : 'bg-[#DFDFDF]'
            } ${idx % 2 === 0 ? `rounded-l` : 'rounded-r'}`}
            onClick={() => setSelected(option.value)}
            key={idx}
          >
            {option.label}
          </div>
        ))}
      </div>
    </>
  )
}
