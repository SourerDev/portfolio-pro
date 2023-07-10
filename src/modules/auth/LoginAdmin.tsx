import { XMarkIcon } from '@heroicons/react/24/outline'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  Typography,
  Input,
} from '@material-tailwind/react'
import { Fragment, useState } from 'react'
import { isValidAdmin } from '~/utils'

export function LoginAdmin() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen((cur) => !cur)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function goDashboard() {
    const isValid = isValidAdmin(username, password)
    console.log(isValid)
    handleOpen()
  }

  return (
    <Fragment>
      <button
        className="rounded-sm px-4 py-2 text-sm hover:bg-accent"
        onClick={handleOpen}
      >
        Dashboard
      </button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="relative mx-auto w-full max-w-[24rem] py-5">
          <button onClick={handleOpen} className="absolute right-5 top-5">
            <XMarkIcon className=" h-8 w-8 hover:text-red-700" />
          </button>
          <header className="sha mx-6">
            <Typography variant="h4" color="blue-gray">
              Admin Sign In
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Only authorized personnel
            </Typography>
          </header>
          <CardBody className="flex flex-col gap-5">
            <Input
              value={username}
              onChange={({ target }) => void setUsername(target.value)}
              variant="standard"
              label="Email"
              size="lg"
            />
            <Input
              variant="standard"
              label="Password"
              size="lg"
              type="password"
              value={password}
              onChange={({ target }) => void setPassword(target.value)}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={goDashboard} fullWidth>
              Sign In
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </Fragment>
  )
}
