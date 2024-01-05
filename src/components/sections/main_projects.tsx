import { projects } from '~/utils/data.json'

export function MainProjectsSection() {
  return (
    <section className="space-y-6">
      <h2 className="mt-4 text-center text-2xl font-bold uppercase">
        Portfolio
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {projects.map(({ name }, i) => (
          <div className="grid h-80 place-content-center border-2" key={i}>
            {name}
          </div>
        ))}
      </div>
    </section>
  )
}
