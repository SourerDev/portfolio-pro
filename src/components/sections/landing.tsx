import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Typography } from '@material-tailwind/react'
import Image from 'next/image'
import { LinkTo } from '~/components/Button'
import { Icon } from '~/components/Icons'

export function LandingSection() {
  return (
    <main className="relative h-screen max-h-[610px] min-h-[500px]">
      <div className=" grid place-content-center">
        <Image
          className="aspect-square w-[168px] rounded-sm object-cover md:h-[200px] md:w-[200px]"
          src="https://res.cloudinary.com/dolf4hf4p/image/upload/f_auto,q_auto/ltu9dy9otlznpjwibxzs"
          width={200}
          height={200}
          alt="Owner"
        />
      </div>
      <div className="mt-2 text-center md:w-3/4">
        <span className="hidden">Hello</span>
        <h1 className="text-[48px] font-bold text-primary">
          I&lsquo;m Yhonier
        </h1>
        <h2 className="text-2xl font-semibold">Frontend Developer</h2>
        <div className="mt-5 ">
          <Typography variant="paragraph">
            I love working with typescript and react, I have experience creating
            attractive and functional user interfaces. My main goal is to merge
            my love for design and programming to deliver exceptional digital
            experiences.
          </Typography>
        </div>
        <div className="mt-6 grid grid-cols-4 gap-2 md:flex md:gap-4">
          <LinkTo
            className="col-span-4 justify-center"
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
            className="col-span-2 pl-4"
          >
            <Icon icon="LinkedIn" />
            <span className="-mb-1.5">LinkedIn</span>
          </LinkTo>
          <LinkTo
            href="https://github.com/SourerDev"
            target="_blank"
            rel="no-referrer"
            type="secondary"
            className="col-span-2 pl-4"
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
