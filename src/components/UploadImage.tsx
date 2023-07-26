import { PlusSmallIcon } from '@heroicons/react/24/outline'
import type { Dispatch, SetStateAction } from 'react'

type ImageProps = {
  name: string
  image: string
  file: File
}
type UploadImageProps = {
  images: ImageProps[]
  setImages: Dispatch<SetStateAction<ImageProps[]>>
}
export function UploadImage({ images, setImages }: UploadImageProps) {
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
    </>
  )
}
