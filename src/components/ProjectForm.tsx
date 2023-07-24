import {
  InformationCircleIcon,
  PlusSmallIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  Option,
  Select,
  Spinner,
  Textarea,
} from '@material-tailwind/react'
import { Fragment, useState } from 'react'
import { api } from '~/utils/api'
import { UploadImage } from './UploadImage'
import { uploadImagesCloudinary } from '~/utils'

type ImageProps = {
  name: string
  image: string
  file: File
}

const STATE = ['PENDING', 'COMPLETED'] as const

export function ProjectForm() {
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
  return (
    <Fragment>
      <button
        onClick={handleOpen}
        className="flex h-[150px] w-[200px] flex-col items-center justify-center gap-5 rounded-sm bg-secondary text-base text-text-primary hover:font-medium hover:shadow-sm hover:shadow-secondary dark:shadow-accent hover:scale-105"
      >
        <PlusSmallIcon className="h-9 w-9" /> Add project
      </button>
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="relative mx-auto min-h-[200px] w-full py-5">
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
          <CardBody>
            <Textarea
              color="gray"
              variant="standard"
              label="Description"
              value={description}
              onChange={({ target }) => void setDescription(target.value)}
            />
            <UploadImage images={images} setImages={setImages} />
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
          </CardBody>
          <CardFooter className="pt-0">
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

            <Button
              className="bg-primary shadow-primary hover:shadow-primary"
              onClick={onCreate}
              fullWidth
            >
              Add project
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </Fragment>
  )
}
