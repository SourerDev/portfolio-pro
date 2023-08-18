import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from '@material-tailwind/react'
import { useState } from 'react'
import { isValidAdmin } from '~/utils'
import { toast } from 'react-hot-toast'

export function LoginAdmin({ callback }: { callback(): void }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function goDashboard() {
    const isValid = isValidAdmin(username, password)
    if (!isValid) toast.error('Unauthorized! - only administrator')
    else callback()
  }

  return (
    <Card className="relative mx-auto w-full max-w-[24rem] rounded py-5">
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
          color="black"
          value={username}
          onChange={({ target }) => void setUsername(target.value)}
          variant="standard"
          label="Email"
          size="lg"
        />
        <Input
          color="black"
          variant="standard"
          label="Password"
          size="lg"
          type="password"
          value={password}
          onChange={({ target }) => void setPassword(target.value)}
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          className="bg-primary shadow-primary hover:shadow-primary"
          onClick={goDashboard}
          fullWidth
        >
          Sign In
        </Button>
      </CardFooter>
    </Card>
  )
}
