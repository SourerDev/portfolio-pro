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
    <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
      {projects?.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  )
}

function ProjectCard({ name, images, ...props }: ProjectProps) {
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
