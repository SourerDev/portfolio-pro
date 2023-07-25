import { LoginAdmin } from '~/modules/auth/LoginAdmin'

export function Footer() {
  return (
    <footer className="mx-auto mb-8 flex max-w-5xl justify-between bg-text-primary p-8 text-gray-100 dark:bg-bg-primary dark:text-text-primary md:rounded-md">
      <h2 className="text-[1.3rem] font-semibold">Sourer Dev</h2>
      <LoginAdmin />
    </footer>
  )
}
