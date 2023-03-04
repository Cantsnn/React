import { useContext } from 'react'
import {useTheme} from '../context/ThemeContext'

function Header() {

    const {theme, setTheme} = useTheme();
  return (
    <div>Active Theme: {theme}</div>
  )
}

export default Header