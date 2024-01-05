import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Typography } from '@material-tailwind/react'
import Image from 'next/image'
import { LinkTo } from '~/components/Button'
import { Icon } from '~/components/Icons'

export function LandingSection() {
  return (
    <main className="relative min-h-[90vh]">
      <div className=" grid place-content-center">
        <Image
          className="h-[150px] w-[150px] rounded-sm md:h-[200px] md:w-[200px]"
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
            I love working with typescript and react, I have experience creating
            attractive and functional user interfaces. My main goal is to merge
            my love for design and programming to deliver exceptional digital
            experiences.
          </Typography>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2 md:flex md:gap-4">
          <LinkTo
            className="col-span-3 justify-center"
            href="/"
            type="primary"
            local
            title="soon!"
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
      <span className="absolute inset-x-0 bottom-0 flex animate-bounce items-center justify-center">
        <ChevronDownIcon className="aspect-square w-7" />
      </span>
    </main>
  )
}
