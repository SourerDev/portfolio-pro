import {
  AdjustmentsHorizontalIcon,
  ChevronLeftIcon,
  PowerIcon,
  Square3Stack3DIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import {
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from '@material-tailwind/react'
import Head from 'next/head'
import { GoBack } from '~/components/GoBack'
import { MainContainer } from '~/components/Main'
import { useState, type Dispatch, type SetStateAction } from 'react'
import { api } from '~/utils/api'
import { ProjectList } from '~/components/ProjectList'

export default function Dashboard() {
  const [current, setCurrent] = useState('projects')
  return (
    <>
      <Head>
        <title>Dashboard | Porfolio</title>
      </Head>
      <MainContainer className="flex gap-x-3 py-2 max-w-7xl">
        <div className="rounded border px-4 py-4 shadow-md">
          <header className="flex items-center gap-x-2 border-b pb-3">
            <GoBack>
              <ChevronLeftIcon />
            </GoBack>
            <Typography variant="h2" className="text-xl font-medium">
              Dashboard
            </Typography>
          </header>
          <NavList current={current} setCurrent={setCurrent} />
        </div>
        <main className="relative w-full overflow-y-hidden rounded border p-4 shadow-md">
          <Typography variant="h6" className="absolute right-6 top-6">
            Alegria Dev
          </Typography>
          <div className="p-2">
            <Typography variant="h3">
              {current.charAt(0).toUpperCase() + current.slice(1)}
            </Typography>
          </div>
          <div className="p-2">
            {current === 'projects' && <Projects />}
            {current === 'profile' && <Profile />}
          </div>
        </main>
      </MainContainer>
    </>
  )
}
type NavListProps = {
  current: string
  setCurrent: Dispatch<SetStateAction<string>>
}

export function NavList({ current, setCurrent }: NavListProps) {
  return (
    <List>
      <ListItem
        className={`${current === 'projects' ? 'font-semibold' : ''}`}
        onClick={() => setCurrent('projects')}
      >
        <ListItemPrefix>
          <Square3Stack3DIcon className="h-5 w-5" />
        </ListItemPrefix>
        Projects
      </ListItem>
      <ListItem
        className={`${current === 'profile' ? 'font-semibold' : ''}`}
        onClick={() => setCurrent('profile')}
      >
        <ListItemPrefix>
          <UserCircleIcon className="h-5 w-5" />
        </ListItemPrefix>
        Profile
      </ListItem>
      <ListItem>
        <ListItemPrefix>
          <PowerIcon className="h-5 w-5" />
        </ListItemPrefix>
        Log Out
      </ListItem>
    </List>
  )
}

const TABS = ['All', 'Pending', 'Completed'] as const

export function Projects() {
  const [selected, setSelected] = useState<(typeof TABS)[number]>('All')
  const projects = api.project.getAll.useQuery()

  return (
    <>
      <div className=" flex justify-between px-1 shadow-md">
        <ul className="space-x-3">
          {TABS.map((tab) => (
            <button
              className={`px-4 py-2 text-center hover:bg-bg-secondary ${
                tab === selected
                  ? 'border-b-2 border-primary font-semibold'
                  : ''
              }`}
              key={tab}
              onClick={() => setSelected(tab)}
            >
              {tab}
            </button>
          ))}
        </ul>
        <span className="grid place-content-center">
          <AdjustmentsHorizontalIcon className="h-7 w-7 cursor-pointer stroke-primary hover:stroke-accent" />
        </span>
      </div>
      <ProjectList
        isError={projects.isError}
        projects={projects.data}
        isLoading={projects.isLoading}
      />
    </>
  )
}
export function Profile() {
  return <p> Mi Perfil</p>
}
