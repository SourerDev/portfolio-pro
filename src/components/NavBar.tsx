import { useEffect, useState } from 'react'
import {
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from '@material-tailwind/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ThemeMode } from './Button'
import Link from 'next/link'

export function NavBar() {
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  return (
    <Navbar className="sticky top-0 z-50 mx-auto max-w-5xl rounded-none border-none bg-bg-primary px-6 py-3 dark:bg-bg-primary-dk">
      <div className="flex items-center justify-between text-blue-gray-900 dark:text-text-primary-dk">
        <Link href="/">
          <Typography variant="h6" className="mr-4 cursor-pointer py-1.5">
            Sourer Dev
          </Typography>
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  )
}

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 font-medium lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="p-1 font-medium">
        <Link
          href="/projects"
          className="flex items-center transition-colors hover:text-blue-500"
        >
          Projects
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="#"
          className="flex items-center transition-colors hover:text-blue-500"
        >
          About me
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <Link
          href="/contact"
          className="flex items-center transition-colors hover:text-blue-500"
        >
          Contact me
        </Link>
      </Typography>
      <ThemeMode />
    </ul>
  )
}
