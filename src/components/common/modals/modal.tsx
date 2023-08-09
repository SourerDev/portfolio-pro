import { XMarkIcon } from '@heroicons/react/24/outline'
import { Card, CardBody, Dialog } from '@material-tailwind/react'
import { Fragment, useState, type ReactNode } from 'react'

type DialogModalProps = {
  button: ReactNode
  children: ReactNode
  size?: 'lg' | 'md' | 'sm' | 'xl' | 'xs' | 'xxl'
}

export function DialogModal({
  button,
  size = 'xl',
  children,
}: DialogModalProps) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen((cur) => !cur)
  return (
    <Fragment>
      <button onClick={handleOpen}>{button}</button>
      <Dialog size={size} open={open} handler={handleOpen}>
        <Card className="no-scrollbar relative mx-auto max-h-[95vh] min-h-[200px] w-full overflow-y-scroll py-5">
          <button onClick={handleOpen} className="absolute right-5 top-5">
            <XMarkIcon className=" h-8 w-8 hover:text-red-700" />
          </button>
          <CardBody>{children}</CardBody>
        </Card>
      </Dialog>
    </Fragment>
  )
}
