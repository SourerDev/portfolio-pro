export interface LocalImageProps {
  name: string
  image: string
  file: File
}

export interface ProjectProps {
  id: string
  name: string
  description: string
  images: string[]
  state: string
}

export interface ProjectListProps {
  isLoading: boolean
  isError: boolean
  projects?: ProjectProps[]
}