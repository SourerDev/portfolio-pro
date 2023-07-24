import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { Button, Input, Textarea, Typography } from '@material-tailwind/react'
import Head from 'next/head'
import { Footer } from '~/components/Footer'
import { MainInput, MainTextArea } from '~/components/Input'
import { MainContainer } from '~/components/Main'
import { NavBar } from '~/components/NavBar'

export default function ContactMe() {
  return (
    <>
      <Head>
        <title>Sourer Dev | Contact me</title>
        <meta name="description" content="Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer Navbar={<NavBar />}>
        <main className="flex min-h-[90vh] flex-col justify-center p-6">
          <Typography variant="h1">Contact me</Typography>

          <p className="mt-2 flex flex-col">
            <span> Have a Question? or Just want to say Hi?</span>
            <span>Drop me a message!</span>
          </p>
          <div className="my-10 flex gap-5">
            <MainInput label="Name" placeholder="your name" />
            <MainInput label="Email" placeholder="example@example.ex" />
          </div>
          <div className="my-5">
            <MainTextArea
              label="Message"
              placeholder="Enter your message here"
            />
          </div>
          <button className="group flex items-center gap-2 self-end rounded-md bg-primary py-3 pl-4 pr-5 font-medium text-bg-primary hover:scale-105 hover:shadow-md">
            <PaperAirplaneIcon className="h-5 w-5 " />
            Send
          </button>
        </main>

        <Footer />
      </MainContainer>
    </>
  )
}
