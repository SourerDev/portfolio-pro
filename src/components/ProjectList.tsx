import {
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  ClockIcon,
  PencilSquareIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  Card,
  CardBody,
  Carousel,
  Dialog,
  Typography,
} from '@material-tailwind/react'
import Image from 'next/image'
import { ProjectForm } from './ProjectForm'
import { IconButton } from './Button'
import { Fragment, useState } from 'react'

type Project = {
  id: string
  name: string
  description: string
  images: string[]
  state: string
}

type ProjectListProps = {
  isLoading: boolean
  isError: boolean
  projects?: Project[]
}

export function ProjectList({
  isLoading,
  isError,
  projects,
}: ProjectListProps) {
  if (isLoading) return <span>... Loading</span>
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

function ProjectCard({ images, name, state, description, id }: Project) {
  return (
    <Card className="relative h-[150px] w-[200px] overflow-hidden rounded bg-bg-primary">
      <Image
        className="h-full w-full"
        src={images[0] || ''}
        alt="la imagen"
        width={200}
        height={150}
      />
      <CardBody className="absolute inset-0 grid place-content-center bg-primary/50">
        <Typography variant="h3" className="text-gray-200">
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

function PreviewProject({ name, description, images }: Project) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen((cur) => !cur)

  return (
    <Fragment>
      <IconButton onClick={handleOpen} Icon={ArrowTopRightOnSquareIcon} />
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="relative mx-auto max-h-[95vh] min-h-full overflow-y-scroll rounded-none bg-bg-primary pt-6 dark:bg-bg-primary-dk dark:text-secondary">
          <button onClick={handleOpen} className="absolute right-5 top-5">
            <XMarkIcon className=" h-8 w-8 hover:text-red-700" />
          </button>
          <CardBody>
            <Typography variant="h3">{name}</Typography>
            <div className="mt-2 flex gap-6">
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
                  <img
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
            </div>
          </CardBody>
        </Card>
      </Dialog>
    </Fragment>
  )
}

export function ProjectListClient({
  isLoading,
  isError,
  projects,
}: ProjectListProps) {
  if (isLoading) return <span>... Loading</span>
  if (isError) return <span> error </span>

  if (!projects?.length) return <h2>No projects</h2>
  return (
    <div className="grid grid-cols-2 gap-4 ">
      {projects?.map((project) => (
        <ProjectCardClient key={project.id} {...project} />
      ))}
    </div>
  )
}

function ProjectCardClient({ name, images }: Project) {
  return (
    <Card className="relative rounded-sm bg-bg-primary dark:bg-bg-primary-dk dark:text-bg-primary dark:shadow-accent">
      <CardBody className="group p-0">
        <Image
          className="h-full w-full"
          src={images[0] || ''}
          alt="Image"
          height={1000}
          width={1000}
        />
        <div className="absolute inset-0 h-full w-full transition-all group-hover:bg-gray-500/50 group-hover:backdrop-blur-sm">
          <p className="invisible text-xl font-semibold text-accent group-hover:visible">
            {name}
          </p>
        </div>
      </CardBody>
    </Card>
  )
}
