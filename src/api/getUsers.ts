import type { User } from '@/type/User'

export async function getUsers(): Promise<User[]> {
  return await fetch('http://localhost:4000/results').then((res) => res.json())
}
