import { useContext } from 'react'
import { ThemeContext } from '@/contexts'
import { themeConfig } from '@/theme'

function getTheme() {
  const theme = useContext(ThemeContext)

  return theme ?? themeConfig
}

export default getTheme
