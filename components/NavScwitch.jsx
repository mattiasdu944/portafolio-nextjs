import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes';


const NavSwitch = () => {
  const [enabled, setEnabled] = useState(false)
  const {theme, setTheme} = useTheme();
  const handler = () => {
    setEnabled(!enabled)
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
      <Switch
        checked={enabled}
        onChange={handler}
        className={`${enabled ? 'bg-primary' : 'bg-secondary'}
           inline-flex h-[18px] w-[34px]  cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-4' : 'translate-x-0'}
            pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
  )
}

export default NavSwitch

