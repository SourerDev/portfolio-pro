import Head from 'next/head'
import { GoBack } from '~/components/GoBack'
import { MainContainer } from '~/components/Main'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | Porfolio</title>
      </Head>
      <MainContainer>
        <GoBack />
        <h1>dashboard como va todo </h1>
      </MainContainer>
    </>
  )
}
