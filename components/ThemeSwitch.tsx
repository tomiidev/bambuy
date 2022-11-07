import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FiSun } from 'react-icons/fi'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="inline-flex items-center mt-12 border border-neutral-700 rounded-md px-1">
      <FiSun className="w-4 h-4 mr-2" />
      <select className="bg-black dark:bg-black cursor-pointer rounded-md outline-none" value={theme} onChange={e => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  )
}

export default ThemeSwitch