import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
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
            className="group relative grid h-80 place-content-center overflow-hidden bg-center bg-cover hover:backdrop-blur-3xl"
            key={i}
            style={{
              backgroundImage: `url(${images.main})`,
            }}
          >
            <div className="absolute inset-x-0 top-[75%] h-1/2 bg-primary p-4 transition-all duration-500 ease-in-out group-hover:top-[50%] rounded-t-xl">
              <ArrowTopRightOnSquareIcon className="block aspect-square w-8" />
              {name}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
