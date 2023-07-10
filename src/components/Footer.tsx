import { LoginAdmin } from "~/modules/auth/LoginAdmin"

export function Footer() {
  return (
    <footer className="mb-8 rounded-md bg-text-primary p-8 text-gray-100 flex justify-between">
      <h2 className="text-[1.3rem] font-semibold">Alegria Dev</h2>
      <LoginAdmin />
    </footer>
  )
}
