import type { KeyboardEvent, ReactNode } from 'react'

import { LinkIcon, PlusSmallIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Option,
  Select,
} from '@material-tailwind/react'
import { useState } from 'react'
import { api } from '~/utils/api'
import { UploadImage } from './UploadImage'
import { uploadImagesCloudinary } from '~/utils'
import { MainInput } from './Input'
import { DialogModal } from './common/modals/modal'
import { TextAreaAuto } from './common/textareas/TextAreaAuto'
import { IconButton } from './Button'

type ImageProps = {
  name: string
  image: string
  file: File
}

type Goals = {
  current: string
  values: string[]
}
export function ProjectForm() {
  const [projectInfo, setProjectInfo] = useState({
    name: '',
    description: '',
    state: 'PENDING',
  })
  const handleProjectInfo = (
    key: 'name' | 'description' | 'state',
    value: string
  ) => setProjectInfo((cur) => ({ ...cur, [key]: value }))

  const [images, setImages] = useState<ImageProps[]>([])

  const [goals, setGoals] = useState<Goals>({
    current: '',
    values: [],
  })

  const [links, setLinks] = useState({
    github: '',
    deploy: '',
  })
  const handleLinks = (key: 'github' | 'deploy', value: string) =>
    setLinks((cur) => ({ ...cur, [key]: value }))

  const createProject = api.project.create.useMutation()

  function onCreate() {
    uploadImagesCloudinary(images.map((image) => image.file))
      .then((images) => {
        createProject.mutate({
          name: projectInfo.name,
          images,
          description: projectInfo.description,
          state: projectInfo.state === 'PENDING' ? 'PENDING' : 'COMPLETED',
          goals: goals.values,
          github: links.github,
          deploy: links.deploy,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function addGoal({ code }: KeyboardEvent<HTMLInputElement>) {
    if (code === 'Enter') {
      if (!goals?.current) return

      setGoals((prev) => ({ ...prev, values: [goals.current, ...prev.values] }))
      setGoals((prev) => ({ ...prev, current: '' }))
      console.log(goals.current)
    }
  }
  function removeGoal(id: number) {
    setGoals((cur) => ({
      ...cur,
      values: goals.values.filter((_x, i) => i !== id),
    }))
  }
  return (
    <DialogModal
      button={
        <span className="flex h-[150px] w-[200px] flex-col items-center justify-center gap-5 rounded-sm bg-gray-200 text-base hover:scale-105 hover:font-medium hover:shadow-sm hover:shadow-secondary dark:shadow-accent">
          <PlusSmallIcon className="h-9 w-9" /> Add project
        </span>
      }
    >
      <div>
        <input
          className="placeholder:text-text-primary text-2xl font-semibold outline-none focus:placeholder:text-gray-400 dark:bg-transparent"
          placeholder="Add project"
          value={projectInfo.name}
          onChange={({ target }) => handleProjectInfo('name', target.value)}
        />
      </div>
      <div className="flex gap-x-10">
        <section className="flex w-3/4 flex-col gap-y-2">
          <TextAreaAuto
            className="border-b pb-2 focus:border-b-2 focus:border-primary"
            value={projectInfo.description}
            placeholder="Writte your description here"
            onChange={({ target }) =>
              handleProjectInfo('description', target.value)
            }
          />
          <UploadImage images={images} setImages={setImages} />
          <MainInput
            label=""
            placeholder="add goal"
            value={goals.current}
            onChange={({ target }) =>
              setGoals((prev) => ({ ...prev, current: target.value }))
            }
            onKeyDown={addGoal}
          />
          {goals?.values &&
            goals.values.map((ele, i) => (
              <div
                key={i}
                className="flex items-center justify-between pb-1"
              >
                <p className="">{ele}</p>
                <button onClick={() => removeGoal(i)}>
                  <IconButton Icon={XMarkIcon} className="hover:text-red-400" />
                </button>
              </div>
            ))}
        </section>
        <section className="flex w-1/4 flex-col justify-between gap-y-4">
          <div>
            <Select
              color="gray"
              value={projectInfo.state}
              onChange={(value) =>
                handleProjectInfo('state', value ? value : '')
              }
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
                value={links.github}
                onChange={({ target }) => handleLinks('github', target.value)}
              />
              <MainInput
                className="px-[.5rem] text-sm"
                label=""
                placeholder="Deploy"
                value={links.deploy}
                onChange={({ target }) => handleLinks('deploy', target.value)}
              />
            </section>
          </div>
          <Button
            className="shadow-node bg-primary hover:shadow-primary"
            onClick={onCreate}
            fullWidth
          >
            Add project
          </Button>
        </section>
      </div>
      {/* 
        <div className="flex w-3/4 flex-col gap-y-2">
          

          <MainAccordion
            header="Images"
            id={1}
            open={openacc}
            handleOpen={() => handleOpenacc(1)}
          >
            <UploadImage images={images} setImages={setImages} />
          </MainAccordion>

          <MainAccordion
            header="Goals"
            id={2}
            open={openacc}
            handleOpen={() => handleOpenacc(2)}
          >
            <MainInput
              label=""
              placeholder="add goal"
              value={goals.current}
              onChange={({ target }) =>
                setGoals((prev) => ({ ...prev, current: target.value }))
              }
              onKeyDown={addGoal}
            />
            {goals?.values &&
              goals.values.map((ele, i) => <p key={i}>{ele}</p>)}
          </MainAccordion>

          <MainAccordion
            header="Tech Stack"
            id={3}
            open={openacc}
            handleOpen={() => handleOpenacc(3)}
          >
            <div className="flex gap-4">
              <MainInput label="" placeholder="add tech" />
              <MainInput label="" placeholder="version" />
            </div>
          </MainAccordion>

          <MainAccordion
            header="Crontribuitors"
            id={4}
            open={openacc}
            handleOpen={() => handleOpenacc(4)}
          >
            <MainInput label="" placeholder="add contribuitor" />
          </MainAccordion>
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
      </div>
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
      </CardFooter> */}
    </DialogModal>
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

type MainAccordionProps = {
  header: string
  open: number
  id: number
  handleOpen: () => void
  children: ReactNode
}

function MainAccordion({
  id,
  open,
  header,
  handleOpen,
  children,
}: MainAccordionProps) {
  return (
    <Accordion open={open === id} icon={<Icon id={id} open={open} />}>
      <AccordionHeader
        className="pb-1 text-lg font-medium"
        onClick={handleOpen}
      >
        {header}
      </AccordionHeader>
      <AccordionBody>{children}</AccordionBody>
    </Accordion>
  )
}
