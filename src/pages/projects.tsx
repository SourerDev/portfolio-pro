import { MainContainer } from '~/components/Main'
import { NavBar } from '~/components/NavBar'

export default function ProjectsPage() {
  return (
    <>
      <MainContainer className='p-6' Navbar={<NavBar />}>
        <p>This is a project page</p>
      </MainContainer>
    </>
  )
}
