import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { Typography } from '@material-tailwind/react'
import Head from 'next/head'
import { useState } from 'react'
import { MainInput, MainTextArea } from '~/components/Input'
import { MainContainer } from '~/components/Main'

export default function ContactMe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <>
      <Head>
        <title>Sourer Dev | Contact me</title>
        <meta name="description" content="Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <main className="flex min-h-[90vh] flex-col justify-center">
          <Typography variant="h1">Contact me</Typography>

          <p className="mt-2 flex flex-col">
            <span> Have a Question? or Just want to say Hi?</span>
            <span>Drop me a message!</span>
          </p>
          <div className="my-10 flex gap-5">
            <MainInput
              label="Name"
              placeholder="your name"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <MainInput
              label="Email"
              placeholder="example@example.ex"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div className="my-5">
            <MainTextArea
              label="Message"
              placeholder="Enter your message here"
              value={message}
              onChange={({ target }) => setMessage(target.value)}
            />
          </div>
          <button className="group flex items-center gap-2 self-end rounded-md bg-primary py-3 pl-4 pr-5 font-medium text-bg-primary hover:scale-105 hover:shadow-md">
            <PaperAirplaneIcon className="h-5 w-5 " />
            Send
          </button>
        </main>
      </MainContainer>
    </>
  )
}
