import { MainContainer } from '~/components/Main'
import { NavBar } from '~/components/NavBar'

export default function ContactMe() {
  return (
    <>
      <MainContainer Navbar={<NavBar />} className="p-6">
        Contact me
      </MainContainer>
    </>
  )
}
