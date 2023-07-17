import {
  PhotoIcon,
  PlusSmallIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Card } from '@material-tailwind/react'
import Image from 'next/image'
import type { Dispatch, SetStateAction } from 'react'
import { IconButton } from './Button'

type ImageProps = {
  name: string
  image: string
  file: File | null | undefined
}
type UploadImageProps = {
  images: ImageProps[]
  setImages: Dispatch<SetStateAction<ImageProps[]>>
}
export function UploadImage({ images, setImages }: UploadImageProps) {
  function removeImage(index: number) {
    const Images = images.filter((_img, i) => i !== index)
    setImages(Images)
  }
  return (
    <>
      <div className="group relative grid place-content-center border border-dashed p-4 hover:border-primary hover:bg-bg-secondary/50">
        <input
          id="upload-image"
          className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0 outline-none"
          title=""
          type="file"
          accept="image/*"
          onChange={({ target }) => {
            const file = target.files && target.files[0]
            if (!file) return

            const reader = new FileReader()
            reader.onload = () => {
              setImages((cur) => [
                ...cur,
                {
                  name: file.name,
                  image: typeof reader.result === 'string' ? reader.result : '',
                  file: file,
                },
              ])
            }
            reader.readAsDataURL(file)

            /*             const URL =
              'https://api.cloudinary.com/v1_1/' + could_name + '/image/upload'
            const formdata = new FormData()
            formdata.append('file', file)
            formdata.append('upload_preset', preset_key)
            axios
              .post(URL, formdata)
              .then((res) => console.log(res))
              .catch((err) => console.log(err)) */
          }}
        />
        <label
          htmlFor="upload-image"
          className="flex gap-x-3 group-hover:text-text-primary"
        >
          <PlusSmallIcon className="group-hover:bg<-text-primary h-6 w-6 rounded-full bg-primary stroke-white stroke-2 p-1" />
          <span>Add image</span>
        </label>
      </div>
      <div className="my-3 flex flex-col gap-2">
        {images &&
          images.map((image, i) => (
            <PreviewImage key={i} id={i} remove={removeImage} {...image} />
          ))}
      </div>
    </>
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
