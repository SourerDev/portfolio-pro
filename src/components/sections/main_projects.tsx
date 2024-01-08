import {
  ArrowLeftOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'
import { projects } from '~/utils/data.json'

export function MainProjectsSection() {
  return (
    <section className="space-y-6">
      <h2 className="mt-4 text-center text-2xl font-bold uppercase">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-4">
        {projects.map(({ name, images }, i) => (
          <div
            className="group relative grid h-80 place-content-center overflow-hidden bg-cover bg-center hover:backdrop-blur-3xl"
            key={i}
            style={{
              backgroundImage: `url(${images.main})`,
            }}
          >
            <div className="absolute inset-x-0 top-[75%] h-1/2 rounded-t-xl bg-primary p-4 text-white transition-all duration-500 ease-in-out group-hover:top-[50%]">
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold ">{name}</p>
                <div className="rounded-md p-2 transition-all ease-in-out hover:scale-110 hover:bg-accent hover:shadow">
                  <ArrowTopRightOnSquareIcon className=" aspect-square w-8" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className=" text-right">
        <span className='hover:font-semibold p-3 rounded-md hover:text-primary'>
          View More{' '}
          {
            <ChevronRightIcon className="inline-block aspect-square w-5 align-middle " />
          }{' '}
        </span>
      </p>
    </section>
  )
}
