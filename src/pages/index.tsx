import { Typography } from '@material-tailwind/react'
import Head from 'next/head'
import Image from 'next/image'
import { LinkTo } from '~/components/Button'
import { Footer } from '~/components/Footer'
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '~/components/Icons'
import { MainContainer } from '~/components/Main'
import { NavBar } from '~/components/NavBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sourer Dev | Porfolio</title>
        <meta name="description" content="Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer className="overflow-hidden" Navbar={<NavBar />}>
        <main className="flex min-h-[90vh] flex-col justify-around md:justify-between gap-4 p-6 md:flex-row-reverse md:items-center">
          <div className="relative md:h-[240px] md:w-1/4">
            <Image
              className="absolute left-0 top-0 hidden rounded-sm md:block"
              src="https://res.cloudinary.com/dolf4hf4p/image/upload/f_auto,q_auto/ltu9dy9otlznpjwibxzs"
              width={200}
              height={200}
              alt="Owner"
            />
            <Image
              className="absolute right-0 top-0 rounded-sm md:top-auto md:bottom-0 w-[150px] h-[150px] l md:w-[200px] md:h-[200px]"
              src="https://res.cloudinary.com/dolf4hf4p/image/upload/f_auto,q_auto/ltu9dy9otlznpjwibxzs"
              width={200}
              height={200}
              alt="Owner"
            />
          </div>
          <div className="md:w-3/4">
            <Typography variant="h3">Hello</Typography>
            <Typography variant="h1">I&lsquo;m Yhonier</Typography>
            <Typography variant="h4">Frontend Developer</Typography>
            <div className="mt-5 ">
              <Typography variant="paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium praesentium eius officiis quas alias, fugit voluptas
                magnam nemo nihil ut, id neque quasi. Ullam a illum
                exercitationem eveniet quis ipsa!
              </Typography>
              <Typography variant="paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium praesentium eius officiis quas alias, fugit voluptas
                magnam nemo nihil ut, id neque quasi. Ullam a illum
                exercitationem eveniet quis ipsa!
              </Typography>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2 md:flex md:gap-4">
              <LinkTo
                className="col-span-3 justify-center"
                href=""
                type="primary"
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
                <LinkedInIcon className="h-6 w-6" />
                <span className="-mb-1.5">LinkedIn</span>
              </LinkTo>
              <LinkTo
                href="https://twitter.com/SourerDev"
                target="_blank"
                rel="no-referrer"
                type="secondary"
                className="pl-4"
              >
                <TwitterIcon className="h-6 w-6" />
                <span className="-mb-1.5">Twitter</span>
              </LinkTo>
              <LinkTo
                href="https://github.com/SourerDev"
                target="_blank"
                rel="no-referrer"
                type="secondary"
                className="pl-4"
              >
                <GitHubIcon className="h-6 w-6" />
                <span className="-mb-1.5"> GitHub</span>
              </LinkTo>
            </div>
          </div>
        </main>
        <Footer />
      </MainContainer>
    </>
  )
}
