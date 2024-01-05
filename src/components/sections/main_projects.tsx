export function MainProjectsSection() {
  return (
    <section className="space-y-6">
      <h2 className="mt-4 text-center text-2xl font-bold uppercase">
        Portfolio
      </h2>
      <div
        className="grid grid-cols-2 gap-4"
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <div className="border-2 h-80 grid place-content-center" key={num}>
            {num}
          </div>
        ))}
      </div>
    </section>
  )
}
