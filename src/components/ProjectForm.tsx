import { PlusSmallIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  Input,
  Option,
  Select,
  Textarea,
} from '@material-tailwind/react'
import { Fragment, useState } from 'react'
import { api } from '~/utils/api'

const STATE = ['PENDING', 'COMPLETED'] as const

export function ProjectForm() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen((cur) => !cur)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [images, setImages] = useState<string[]>([])
  const [state, setState] = useState<(typeof STATE)[number]>('PENDING')

  const createProject = api.project.create.useMutation()

  return (
    <Fragment>
      <Button
        onClick={handleOpen}
        className="flex h-[150px] w-[200px] flex-col items-center justify-center gap-5 bg-bg-primary text-base font-medium lowercase text-text-primary shadow-bg-secondary hover:bg-bg-secondary hover:text-gray-600 hover:shadow-bg-secondary"
      >
        <PlusSmallIcon className="h-9 w-9" /> Add project
      </Button>
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
          <header className="sha mx-6 mt-4">
            <input
              className="text-2xl font-semibold text-text-primary outline-none placeholder:text-text-primary focus:placeholder:text-gray-400"
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
            <div>
              {images.map((image, i) => (
                <p key={i + 5}>{image}</p>
              ))}
            </div>
            <div className="relative my-4 flex w-full">
              <Input
                variant="standard"
                color="black"
                label={`Image ${images.length + 1}`}
                value={image}
                onChange={({ target }) => void setImage(target.value)}
                className="pr-20"
                containerProps={{
                  className: 'min-w-0',
                }}
              />
              <Button
                onClick={() => {
                  setImage('')
                  setImages((cur) => [...cur, image])
                }}
                size="sm"
                disabled={!image}
                className={`!absolute right-1 top-1 rounded ${
                  image
                    ? 'bg-primary shadow-primary hover:shadow-primary'
                    : 'bg-gray-500'
                }`}
              >
                Add
              </Button>
            </div>
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
            <Button
              className="bg-primary shadow-primary hover:shadow-primary"
              onClick={(e) => {
                e.preventDefault()
                createProject.mutate({ name, images, description, state })
                handleOpen()
              }}
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
