import { useEffect, useState } from 'react'
import { Dialog, IconButton, Navbar } from '@material-tailwind/react'
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
          <NavHeader />
          <div className="hidden lg:block">
            <NavList type="desktop" />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => openDrawer()}
          >
            <Bars3Icon className="aspect-square w-8" strokeWidth={2} />
          </IconButton>
        </div>
        <Dialog
          size="xxl"
          open={open}
          handler={openDrawer}
          className="duration-0"
        >
          <div className="bg-background p-3 text-text">
            <div className="flex items-center justify-between text-text dark:text-text-dk">
              <NavHeader />
              <IconButton
                variant="text"
                className="ml-auto h-8 w-8 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => closeDrawer()}
              >
                <XMarkIcon className="aspect-square w-8" strokeWidth={2} />
              </IconButton>
            </div>
            <NavList type="mobile" />
            <div className="absolute bottom-0 left-0 grid w-full place-content-center py-4">
              <ThemeMode />
            </div>
          </div>
        </Dialog>
      </div>
    </Navbar>
  )
}

function NavList({ type }: { type: 'mobile' | 'desktop' }) {
  if (type === 'mobile')
    return (
      <ul>
        {routes?.map(({ title, href }, i) => (
          <li key={i} className="p-1 text-2xl font-medium">
            <Link
              href={href}
              className="flex items-center rounded-md p-3 transition-colors hover:bg-gray-300 hover:font-medium hover:text-primary"
            >
              {title}{' '}
            </Link>
          </li>
        ))}
      </ul>
    )

  return (
    <ul className="my-2 flex flex-col gap-2 font-medium lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes?.map(({ title, href }, i) => (
        <li key={i} className="p-1 font-medium">
          <Link
            href={href}
            className="flex items-center transition-colors hover:font-medium hover:text-primary"
          >
            {title}{' '}
          </Link>
        </li>
      ))}
      <ThemeMode />
    </ul>
  )
}

function NavHeader() {
  return (
    <>
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/icon-ya.svg"
          alt="Yhonier Alegria"
          width={30}
          height={30}
        />
        <p className="mr-4 cursor-pointer py-1.5 text-2xl font-bold text-primary">
          Alegria
        </p>
      </Link>
    </>
  )
}
