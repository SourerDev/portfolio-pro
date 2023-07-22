import { LoginAdmin } from '~/modules/auth/LoginAdmin'

export function Footer() {
  return (
    <footer className="mb-8 flex justify-between md:rounded-md bg-text-primary p-8 text-gray-100 dark:bg-bg-primary dark:text-text-primary">
      <h2 className="text-[1.3rem] font-semibold">Alegria Dev</h2>
      <LoginAdmin />
    </footer>
  )
}
