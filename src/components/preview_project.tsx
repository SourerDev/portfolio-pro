import type { ProjectProps } from '~/interfaces'
import { DialogModal } from './common/modals/modal'
import { Carousel, Typography } from '@material-tailwind/react'
import { IconButton } from './Button'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export function PreviewProject({ name, description, images }: ProjectProps) {
  return (
    <DialogModal button={<IconButton Icon={ArrowTopRightOnSquareIcon} />}>
      <Typography variant="h3">{name}</Typography>
      <div className="flex gap-x-10">
        <section className="flex w-3/4 flex-col gap-y-2">
          <Carousel
            className="max-w-[450px] rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill('').map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl bg-blend-difference transition-all content-[''] ${
                      activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {images.map((image, i) => (
              <Image
                loading="eager"
                key={i}
                className="h-full w-full"
                src={image || ''}
                alt="la imagen"
                width={200}
                height={150}
              />
            ))}
          </Carousel>
          <p>{description}</p>
        </section>
        <section className="flex w-1/4 flex-col gap-y-4">
          Link to github and deploy
        </section>
      </div>
    </DialogModal>
  )
  {
  }
}
