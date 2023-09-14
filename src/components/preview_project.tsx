import type { ProjectProps } from '~/interfaces'
import { DialogModal } from './common/modals/modal'
import { Carousel, Typography } from '@material-tailwind/react'
import { IconButton, LinkTo } from './Button'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import type { Dispatch, SetStateAction } from 'react'

export function PreviewProject({
  name,
  description,
  images,
  github,
  deploy,
}: ProjectProps) {
  const navigation = ({
    setActiveIndex,
    activeIndex,
    length,
  }: {
    setActiveIndex: Dispatch<SetStateAction<number>>
    activeIndex: number
    length: number
  }) => (
    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
      {new Array(length).fill('').map((_, i) => (
        <span
          key={i}
          className={`block h-1 cursor-pointer rounded-2xl bg-blend-difference transition-all content-[''] ${
            activeIndex === i ? 'w-8 bg-primary' : 'w-4 bg-primary/50'
          }`}
          onClick={() => setActiveIndex(i)}
        />
      ))}
    </div>
  )

  return (
    <DialogModal button={<IconButton Icon={ArrowTopRightOnSquareIcon} />}>
      <Typography variant="h3">{name}</Typography>
      <div className="flex gap-x-10">
        <section className="flex w-3/4 flex-col gap-y-2">
          <div className="h-[350px] overflow-hidden shadow-md">
            <Carousel className="w-full rounded-xl" navigation={navigation}>
              {images.map((image, i) => (
                <Image
                  loading="eager"
                  key={i}
                  className="h-full w-full object-cover object-center"
                  src={image || ''}
                  alt="la imagen"
                  width={200}
                  height={150}
                />
              ))}
            </Carousel>
          </div>

          <p>{description}</p>
        </section>
        <article className="flex w-1/4 flex-col gap-y-4">
          <LinkTo type="primary" href={github}>
            Repository
          </LinkTo>
          {deploy && (
            <LinkTo type="secondary" href={deploy}>
              deploy
            </LinkTo>
          )}
          <h2>Tech Stack</h2>
          <ul className="">
            <li>- React 13.13.13</li>
          </ul>
        </article>
      </div>
    </DialogModal>
  )
  {
  }
}
