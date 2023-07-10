import { compareSync, genSaltSync, hashSync } from 'bcrypt-ts'

export function isValidAdmin(username: string, password: string) {
  const Admin = {
    username: process.env.NEXT_PUBLIC_USERNAME,
    password: process.env.NEXT_PUBLIC_PASSWORD
  }
  if (!Admin.username || !Admin.password) return false

  const saltRounds = 10
  const salt = genSaltSync(saltRounds)
  const hashedUser = hashSync(Admin.username, salt)
  const hashedPass = hashSync(Admin.password, salt)

  const matchUser = compareSync(username, hashedUser)
  const matchPass = compareSync(password, hashedPass)

  if (!matchUser || !matchPass) return false

  return true
}