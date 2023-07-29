import { LoginAdmin } from '~/modules/auth/LoginAdmin'

export function Footer() {
  return (
    <footer className="mx-auto mb-8 flex max-w-5xl justify-between bg-background-dk p-8 text-text-dk dark:bg-background dark:text-text md:rounded-md">
      <h2 className="text-[1.2rem] font-semibold">Sourer Dev</h2>
      <LoginAdmin />
    </footer>
  )
}
