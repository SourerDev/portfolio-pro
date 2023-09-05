import { Card, CardBody, Spinner, Typography } from '@material-tailwind/react'
import { PreviewProject } from '../preview_project'
import type { ProjectListProps, ProjectProps } from '~/interfaces'
import { ProjectForm } from '../ProjectForm'
import Image from 'next/image'
import {
  CheckCircleIcon,
  ClockIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline'
import { IconButton } from '../Button'

export function ProjectList({
  isLoading,
  isError,
  projects,
}: ProjectListProps) {
  if (isLoading) return <Spinner />
  if (isError) return <span> error </span>
  //if (projects == null || projects.length === 0) return <h2 className='text-center mt-3 font-semibold text-xl'>No projects</h2>

  return (
    <div className="grid grid-cols-4 gap-4 py-4  ">
      <ProjectForm />
      {projects &&
        projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
    </div>
  )
}

function ProjectCard({ images, name, state, description, id }: ProjectProps) {
  return (
    <Card className="relative h-[150px] w-[200px] overflow-hidden rounded">
      <Image
        className="h-full w-full object-cover object-center"
        src={images[0] || ''}
        alt="la imagen"
        width={200}
        height={150}
      />
      <CardBody className="absolute inset-0 grid place-content-center bg-black/50">
        <Typography
          variant="h3"
          className={`text-gray-200 ${name.length > 10 ? 'text-xl' : ''}`}
        >
          {name}
        </Typography>
        <div className="absolute bottom-1 right-0 flex w-full items-center justify-between px-1.5">
          {state === 'PENDING' ? (
            <ClockIcon className=" h-5 w-5 rounded-full bg-blue-700 stroke-white stroke-2" />
          ) : (
            <CheckCircleIcon className=" h-5 w-5 rounded-full bg-green-700 stroke-white stroke-2" />
          )}
          <div className="flex gap-1">
            <IconButton Icon={PencilSquareIcon} />
            <PreviewProject
              name={name}
              state={state}
              description={description}
              id={id}
              images={images}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
