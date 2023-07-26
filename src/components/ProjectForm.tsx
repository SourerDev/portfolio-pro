import {
  InformationCircleIcon,
  PhotoIcon,
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
  Input,
  Option,
  Select,
  Spinner,
  Textarea,
} from '@material-tailwind/react'
import { Fragment, useState } from 'react'
import { api } from '~/utils/api'
import { UploadImage } from './UploadImage'
import { uploadImagesCloudinary } from '~/utils'
import Image from 'next/image'
import { IconButton } from './Button'

type ImageProps = {
  name: string
  image: string
  file: File
}

const STATE = ['PENDING', 'COMPLETED'] as const

export function ProjectForm() {
  const [openacc, setOpenacc] = useState(0)
  const handleOpenacc = (value: number) =>
    setOpenacc(openacc === value ? 0 : value)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen((cur) => !cur)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImages] = useState<ImageProps[]>([])
  const [state, setState] = useState<(typeof STATE)[number]>('PENDING')
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
  function removeImage(index: number) {
    const Images = images.filter((_img, i) => i !== index)
    setImages(Images)
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
          <CardBody className="flex gap-x-4">
            <div className="w-3/4">
              <Textarea
                color="gray"
                variant="standard"
                label="Description"
                value={description}
                onChange={({ target }) => void setDescription(target.value)}
              />
              <UploadImage images={images} setImages={setImages} />
              <Accordion
                open={openacc === 1}
                icon={<Icon id={1} open={openacc} />}
              >
                <AccordionHeader onClick={() => handleOpenacc(1)}>
                  Images
                </AccordionHeader>
                <AccordionBody>
                  <div className="my-3 flex flex-col gap-2">
                    {images &&
                      images.map((image, i) => (
                        <PreviewImage
                          key={i}
                          id={i}
                          remove={removeImage}
                          {...image}
                        />
                      ))}
                  </div>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={openacc === 2}
                icon={<Icon id={2} open={openacc} />}
              >
                <AccordionHeader onClick={() => handleOpenacc(2)}>
                  Goals
                </AccordionHeader>
                <AccordionBody>
                  <Input variant="outlined" placeholder="+ add goal" />
                </AccordionBody>
              </Accordion>
              <Accordion
                open={openacc === 3}
                icon={<Icon id={3} open={openacc} />}
              >
                <AccordionHeader onClick={() => handleOpenacc(3)}>
                  Tech Stack
                </AccordionHeader>
                <AccordionBody>
                  <div className="flex gap-4">
                    <Input variant="outlined" placeholder="+ add tech" />
                    <Input variant="outlined" placeholder="version" />
                  </div>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={openacc === 4}
                icon={<Icon id={4} open={openacc} />}
              >
                <AccordionHeader onClick={() => handleOpenacc(4)}>
                  Contribuitors
                </AccordionHeader>
                <AccordionBody>
                  <Input variant="outlined" placeholder="+ add contribuitors" />
                </AccordionBody>
              </Accordion>
            </div>
            <div className="w-1/4">
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
              <p>Links</p>
              <Input variant="static" color="black" placeholder="GitHub" />
              <Input variant="static" color="black" placeholder="Deploy" />
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
          <Button
            className="absolute bottom-4 right-4 w-40 bg-primary shadow-primary hover:shadow-primary"
            onClick={onCreate}
            fullWidth
          >
            Add project
          </Button>
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

type PreviewImageProps = {
  id: number
  name: string
  image: string
  remove: (index: number) => void
}
function PreviewImage({ name, image, remove, id }: PreviewImageProps) {
  return (
    <div className="flex items-center justify-between border-b pb-1">
      <div className="group relative flex items-center gap-2">
        <PhotoIcon className="h-5 w-5" /> {name}
        <Card className="absolute bottom-[115%] left-0 hidden w-[300px] max-w-xs rounded p-2 hover:hidden group-hover:block">
          <Image
            src={image}
            alt={name}
            width={200}
            height={150}
            className="h-auto w-full"
          />
        </Card>
      </div>
      <button onClick={() => remove(id)}>
        <IconButton Icon={XMarkIcon} className="hover:text-red-400" />
      </button>
    </div>
  )
}
