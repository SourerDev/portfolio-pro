import { Card, CardBody, Spinner } from '@material-tailwind/react'
import Image from 'next/image'
import type { ProjectListProps, ProjectProps } from '~/interfaces'
import { PreviewProject } from '../preview_project'

export function ProjectList({
  isLoading,
  isError,
  projects,
}: ProjectListProps) {
  if (isLoading) return <Spinner />
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

function ProjectCardi({ name, images, ...props }: ProjectProps) {
  return (
    <Card className="dark:bg-bg-primary-dk dark:text-bg-primary relative rounded-sm bg-white dark:shadow-accent">
      <CardBody className="group p-0">
        <Image
          className="h-full w-full"
          src={images[0] || ''}
          alt="Image"
          height={1000}
          width={1000}
        />
        <div className="flex items-center justify-between px-4 py-2 group-hover:bg-black/50 md:absolute md:inset-0 md:justify-center">
          <p className="text-lg font-semibold group-hover:visible md:invisible md:text-xl md:text-white">
            {name}
          </p>
          <span className="group-hover:visible md:invisible md:absolute md:right-3 md:top-3">
            <PreviewProject name={name} images={images} {...props} />
          </span>
        </div>
      </CardBody>
    </Card>
  )
}

import { Typography } from '@material-tailwind/react'

export function ProjectCard({ images, name }: ProjectProps) {
  return (
    <figure className="relative h-96 w-full hover:shadow-lg">
      <img
        className="h-full w-full rounded object-cover object-center"
        src={images[0]}
        alt="nature image"
      />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 px-6 py-4 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray">
            {name}
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
            20 July 2022
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray">
          Growth
        </Typography>
      </figcaption>
    </figure>
  )
}
