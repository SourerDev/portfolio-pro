import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { projects } from '~/utils/data'

export function MainProjectsSection() {
  return (
    <section className="space-y-6 mt-10">
      <h2 className="mt-4 text-center text-2xl font-bold uppercase">
        Portfolio
      </h2>
      <div className="grid grid-cols-1  gap-10 sm:grid-cols-2 sm:gap-4">
        {projects.map(({ name, images }, i) => (
          <div
            className="group relative h-72 overflow-hidden rounded-xl bg-cover bg-center hover:backdrop-blur-3xl "
            key={i}
            style={{
              backgroundImage: `url(${images.main})`,
              boxShadow:
                '0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.02), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.03), 0px 100px 80px 0px rgba(0, 0, 0, 0.07)',
            }}
          >
            <div
              className="absolute inset-x-0 bottom-0 flex items-center justify-between rounded-xl p-3 text-text-dk"
              style={{ background: 'rgba(13, 14, 18, 0.90)' }}
            >
              <p className="text-xl font-semibold ">{name}</p>
              <ChevronRightIcon className="inline-block aspect-square w-7 align-middle " />
            </div>
          </div>
        ))}
      </div>
      <p className=" text-right">
        <span className="rounded-md p-3 hover:font-semibold hover:text-primary">
          View More{' '}
          {
            <ChevronRightIcon className="inline-block aspect-square w-5 align-middle " />
          }{' '}
        </span>
      </p>
    </section>
  )
}
