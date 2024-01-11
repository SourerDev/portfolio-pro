import { useEffect, useState } from 'react'
import { IconButton, Navbar, Typography } from '@material-tailwind/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ThemeMode } from './Button'
import Link from 'next/link'
import Image from 'next/image'
import { routes } from '~/utils/data'

export function NavBar() {
  const [open, setOpen] = useState(false)

  const openDrawer = () => setOpen(true)
  const closeDrawer = () => setOpen(false)

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && closeDrawer()
    )
  }, [])

  return (
    <Navbar className="sticky top-0 z-50  rounded-none border-none bg-background/70 p-0 shadow-none dark:bg-background-dk/70">
      <div className="relative mx-auto max-w-5xl p-3">
        <div className="flex items-center justify-between text-text dark:text-text-dk">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/My-logo.png"
              alt="Yhonier Alegria"
              width={20}
              height={20}
            />
            <Typography
              variant="h6"
              className="mr-4 cursor-pointer py-1.5 text-primary"
            >
              Alegria
            </Typography>
          </Link>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => openDrawer()}
          >
            {open ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        {open && (
          <div className="fixed inset-0 z-50 min-h-screen bg-background p-3 text-text">
            <div className="flex items-center justify-between text-text dark:text-text-dk">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/My-logo.png"
                  alt="Yhonier Alegria"
                  width={20}
                  height={20}
                />
                <Typography
                  variant="h5"
                  className="mr-4 cursor-pointer py-1.5 text-primary"
                >
                  Alegria
                </Typography>
              </Link>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => closeDrawer()}
              >
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              </IconButton>
            </div>
            <ul>
              {routes?.map(({ title, href }, i) => (
                <Typography
                  key={i}
                  as="li"
                  variant="lead"
                  className="p-1 font-medium"
                >
                  <Link
                    href={href}
                    className="flex items-center transition-colors hover:font-medium hover:text-primary p-3 hover:bg-gray-300 rounded-md"
                  >
                    {title}{' '}
                  </Link>
                </Typography>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Navbar>
  )
}

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 font-medium lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes?.map(({ title, href }, i) => (
        <Typography key={i} as="li" variant="small" className="p-1 font-medium">
          <Link
            href={href}
            className="flex items-center transition-colors hover:font-medium hover:text-primary"
          >
            {title}{' '}
          </Link>
        </Typography>
      ))}
      <ThemeMode />
    </ul>
  )
}
