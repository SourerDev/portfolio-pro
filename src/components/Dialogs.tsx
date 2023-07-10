import { Fragment, useState } from 'react'
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from '@material-tailwind/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export function SignInAdmin() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen((cur) => !cur)

  return (
    <Fragment>
      <Button onClick={handleOpen}>Sign In</Button>
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
            <Input variant="standard" label="Email" size="lg" />
            <Input
              variant="standard"
              label="Password"
              size="lg"
              type="password"
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Sign In
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </Fragment>
  )
}
