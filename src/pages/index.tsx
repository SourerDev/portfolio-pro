import { Typography } from '@material-tailwind/react'
import Head from 'next/head'
import Image from 'next/image'
import { LinkTo } from '~/components/Button'
import { Icon } from '~/components/Icons'
import { ContainerPage } from '~/components/container_page'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sourer Dev | Porfolio</title>
        <meta name="description" content="Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContainerPage className="overflow-hidden">
        <main className="flex min-h-[90vh] flex-col justify-around gap-4 md:flex-row-reverse md:items-center md:justify-between">
          <div className="relative md:h-[240px] md:w-1/4">
            <Image
              className="absolute left-0 top-0 hidden rounded-sm md:block"
              src="https://res.cloudinary.com/dolf4hf4p/image/upload/f_auto,q_auto/ltu9dy9otlznpjwibxzs"
              width={200}
              height={200}
              alt="Owner"
            />
            <Image
              className="l absolute right-0 top-0 h-[150px] w-[150px] rounded-sm md:bottom-0 md:top-auto md:h-[200px] md:w-[200px]"
              src="https://res.cloudinary.com/dolf4hf4p/image/upload/f_auto,q_auto/ltu9dy9otlznpjwibxzs"
              width={200}
              height={200}
              alt="Owner"
            />
          </div>
          <div className="md:w-3/4">
            <Typography variant="h3">Hello</Typography>
            <Typography variant="h1" className="text-primary">
              I&lsquo;m Yhonier
            </Typography>
            <Typography variant="h4">Frontend Developer</Typography>
            <div className="mt-5 ">
              <Typography variant="paragraph">
                I love working with typescript and react, I have experience
                creating attractive and functional user interfaces. My main goal
                is to merge my love for design and programming to deliver
                exceptional digital experiences.
              </Typography>
              <Typography variant="paragraph">
                If you are looking for a Frontend Developer committed to
                excellence and innovation, do not hesitate to contact me. I am
                excited to explore new opportunities and contribute to the
                success of your project.
              </Typography>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2 md:flex md:gap-4">
              <LinkTo
                className="col-span-3 justify-center"
                href="/cv"
                type="primary"
                local
              >
                Read More
              </LinkTo>
              <LinkTo
                href="https://www.linkedin.com/in/yhonier-c-alegria/"
                target="_blank"
                rel="no-referrer"
                type="secondary"
                className="pl-4"
              >
                <Icon icon="LinkedIn" />
                <span className="-mb-1.5">LinkedIn</span>
              </LinkTo>
              <LinkTo
                href="https://twitter.com/SourerDev"
                target="_blank"
                rel="no-referrer"
                type="secondary"
                className="pl-4"
              >
                <Icon icon="Twitter" />
                <span className="-mb-1.5">Twitter</span>
              </LinkTo>
              <LinkTo
                href="https://github.com/SourerDev"
                target="_blank"
                rel="no-referrer"
                type="secondary"
                className="pl-4"
              >
                <Icon icon="GitHub" />
                <span className="-mb-1.5"> GitHub</span>
              </LinkTo>
            </div>
          </div>
        </main>
      </ContainerPage>
    </>
  )
}
