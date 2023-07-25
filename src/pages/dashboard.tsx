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
import { ThemeMode } from '~/components/Button'

export default function Dashboard() {
  const [current, setCurrent] = useState('projects')
  return (
    <>
      <Head>
        <title>Dashboard | Porfolio</title>
      </Head>
      <MainContainer
        className="flex max-w-7xl gap-x-3 py-2"
        header={false}
        footer={false}
      >
        <div className="rounded  px-4 py-4 shadow-md dark:shadow-accent ">
          <header className="flex items-center justify-between gap-x-2 border-b pb-3">
            <span className="flex items-center gap-x-2">
              <GoBack>
                <ChevronLeftIcon />
              </GoBack>
              <Typography variant="h2" className="text-xl font-medium">
                Dashboard
              </Typography>
            </span>
            <ThemeMode />
          </header>
          <NavList current={current} setCurrent={setCurrent} />
        </div>
        <main className="relative w-full overflow-y-hidden rounded  p-4 shadow-md dark:shadow-accent">
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
        className={`dark:text-bg-secondary dark:hover:bg-accent ${
          current === 'projects' ? 'font-semibold' : ''
        }`}
        onClick={() => setCurrent('projects')}
      >
        <ListItemPrefix>
          <Square3Stack3DIcon className="h-5 w-5" />
        </ListItemPrefix>
        Projects
      </ListItem>
      <ListItem
        className={`dark:text-bg-secondary dark:hover:bg-accent ${
          current === 'profile' ? 'font-semibold' : ''
        }`}
        onClick={() => setCurrent('profile')}
      >
        <ListItemPrefix>
          <UserCircleIcon className="h-5 w-5" />
        </ListItemPrefix>
        Profile
      </ListItem>
      <ListItem className="dark:text-bg-secondary dark:hover:bg-accent">
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
              className={`px-4 py-2 text-center hover:bg-bg-secondary dark:hover:bg-accent ${
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
          <AdjustmentsHorizontalIcon className="h-7 w-7 cursor-pointer stroke-primary hover:stroke-accent dark:hover:stroke-bg-primary" />
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
