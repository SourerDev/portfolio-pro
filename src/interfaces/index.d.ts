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
  goals: string[]
  state: string
  github: string
  deploy: string
}