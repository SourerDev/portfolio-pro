import { Spinner } from '@material-tailwind/react'
import Image from 'next/image'
import type { ProjectListProps, ProjectProps } from '~/interfaces'
import { PreviewProject } from '../preview_project'

export function ProjectList({
  isLoading,
  isError,
  projects,
}: ProjectListProps) {
  if (isLoading)
    return (
      <div className='grid place-content-center'>
        <Spinner />
      </div>
    )
  if (isError) return <span> error </span>

  if (!projects?.length) return <h2>No projects</h2>
  return (
    <div className="flex flex-col gap-5 md:grid md:grid-cols-2 ">
      {projects?.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  )
}

import { Typography } from '@material-tailwind/react'

export function ProjectCard({ images, name, ...props }: ProjectProps) {
  return (
    <figure className="group relative h-80 w-full overflow-hidden hover:shadow-lg">
      <Image
        className="h-full w-full rounded object-cover object-center"
        src={images[0] || ''}
        height={320}
        width={500}
        alt={name}
      />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl bg-primary/30 px-6 py-4 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm md:invisible md:inset-0 md:left-0 md:w-full md:-translate-x-0  md:items-center md:justify-center md:rounded-none md:group-hover:visible">
        <div>
          <Typography variant="h5" color="blue-gray">
            <span className="text-accent">{name}</span>
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
            25 July 2023
          </Typography>
        </div>
        <span className="group-hover:visible md:invisible md:absolute md:right-3 md:top-3">
          <PreviewProject name={name} images={images} {...props} />
        </span>
      </figcaption>
    </figure>
  )
}
