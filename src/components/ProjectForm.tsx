import {
  InformationCircleIcon,
  LinkIcon,
  PlusSmallIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  Option,
  Select,
  Spinner,
} from '@material-tailwind/react'
import { Fragment, useState } from 'react'
import { api } from '~/utils/api'
import { UploadImage } from './UploadImage'
import { uploadImagesCloudinary } from '~/utils'
import { MainInput, MainTextArea } from './Input'

type ImageProps = {
  name: string
  image: string
  file: File
}

const STATE = ['PENDING', 'COMPLETED'] as const

export function ProjectForm() {
  const [openacc, setOpenacc] = useState(1)
  const handleOpenacc = (value: number) =>
    setOpenacc(openacc === value ? 0 : value)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen((cur) => !cur)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImages] = useState<ImageProps[]>([])
  const [state, setState] = useState<(typeof STATE)[number]>('PENDING')
  const [goals, setGoals] = useState<string[]>()

  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState({
    loading: false,
    msg: '',
  })

  const createProject = api.project.create.useMutation()

  function onCreate() {
    if (!name) return setError('Please, enter a name Project')
    if (!description) return setError('Please, enter a description Project')
    if (!images.length) return setError('Please, add Project images')

    setIsLoading({
      loading: true,
      msg: 'uploading images to Cloudinary',
    })
    uploadImagesCloudinary(images.map((image) => image.file))
      .then((images) => {
        setIsLoading({
          loading: true,
          msg: 'Creating project',
        })
        createProject.mutate({ name, images, description, state })
        setIsLoading({
          loading: true,
          msg: 'Your project has been added',
        })
        setTimeout(() => {
          setIsLoading({
            loading: false,
            msg: '',
          })
          handleOpen()
        }, 3000)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Fragment>
      <button
        onClick={handleOpen}
        className="flex h-[150px] w-[200px] flex-col items-center justify-center gap-5 rounded-sm bg-secondary text-base text-text-primary hover:scale-105 hover:font-medium hover:shadow-sm hover:shadow-secondary dark:shadow-accent"
      >
        <PlusSmallIcon className="h-9 w-9" /> Add project
      </button>
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="no-scrollbar relative mx-auto max-h-[95vh] min-h-[200px] w-full overflow-y-scroll py-5">
          <button onClick={handleOpen} className="absolute right-5 top-5">
            <XMarkIcon className=" h-8 w-8 hover:text-red-700" />
          </button>
          <header className="mx-6 mt-4">
            <input
              className="text-2xl font-semibold text-text-primary outline-none placeholder:text-text-primary focus:placeholder:text-gray-400 dark:bg-transparent"
              placeholder="Add project"
              value={name}
              onChange={({ target }) => void setName(target.value)}
            />
          </header>
          <CardBody className="flex gap-x-10">
            <div className="flex w-3/4 flex-col gap-y-2">
              <MainTextArea
                label="Description"
                value={description}
                onChange={({ target }) => void setDescription(target.value)}
                placeholder="Writte your description here"
              />

              <Accordion
                open={openacc === 1}
                icon={<Icon id={1} open={openacc} />}
              >
                <AccordionHeader
                  className="pb-1 text-lg font-medium"
                  onClick={() => handleOpenacc(1)}
                >
                  Images
                </AccordionHeader>
                <AccordionBody>
                  <UploadImage images={images} setImages={setImages} />
                </AccordionBody>
              </Accordion>
              <Accordion
                open={openacc === 2}
                icon={<Icon id={2} open={openacc} />}
              >
                <AccordionHeader
                  className="pb-1 text-lg font-medium"
                  onClick={() => handleOpenacc(2)}
                >
                  Goals
                </AccordionHeader>
                <AccordionBody>
                  <form onSubmit={(evt) => 
                    {
                      evt.preventDefault()
                      console.log('enter')}}>
                    <MainInput label="" placeholder="add goal" />
                  </form>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={openacc === 3}
                icon={<Icon id={3} open={openacc} />}
              >
                <AccordionHeader
                  className="pb-1 text-lg font-medium"
                  onClick={() => handleOpenacc(3)}
                >
                  Tech Stack
                </AccordionHeader>
                <AccordionBody>
                  <div className="flex gap-4">
                    <MainInput label="" placeholder="add tech" />
                    <MainInput label="" placeholder="version" />
                  </div>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={openacc === 4}
                icon={<Icon id={4} open={openacc} />}
              >
                <AccordionHeader
                  className="pb-1 text-lg font-medium"
                  onClick={() => handleOpenacc(4)}
                >
                  Contribuitors
                </AccordionHeader>
                <AccordionBody>
                  <MainInput label="" placeholder="add contribuitor" />
                </AccordionBody>
              </Accordion>
            </div>
            <div className="relative w-1/4">
              <Select
                color="gray"
                value={state}
                onChange={(value) => {
                  if (value === STATE[1]) setState('COMPLETED')
                  else setState('PENDING')
                }}
                variant="standard"
                label="state"
              >
                <Option value="PENDING">Process</Option>
                <Option value="COMPLETED">Completed</Option>
              </Select>
              <section className="mt-6">
                <h3 className="flex items-center gap-1 text-lg">
                  <LinkIcon className="h-5 w-5" /> Links
                </h3>
                <MainInput
                  className="px-[.5rem] text-sm"
                  label=""
                  placeholder="GitHub"
                />
                <MainInput
                  className="px-[.5rem] text-sm"
                  label=""
                  placeholder="Deploy"
                />
              </section>
              <Button
                className="absolute bottom-0 bg-primary shadow-primary hover:shadow-primary"
                onClick={onCreate}
                fullWidth
              >
                Add project
              </Button>
            </div>
          </CardBody>
          <CardFooter className="flex flex-col items-center justify-center pt-0">
            {error && (
              <Alert
                icon={<InformationCircleIcon className="h-6 w-6" />}
                color="orange"
                variant="ghost"
                className="mb-2 py-2"
              >
                <span>{error}</span>
              </Alert>
            )}
            {isLoading.loading && (
              <Alert
                icon={<Spinner />}
                color="green"
                variant="ghost"
                className="mb-2 py-2"
              >
                <span>{isLoading.msg}</span>
              </Alert>
            )}
          </CardFooter>
        </Card>
      </Dialog>
    </Fragment>
  )
}

function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  )
}
