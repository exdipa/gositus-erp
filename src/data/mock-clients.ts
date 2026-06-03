import type { Client } from '@/types/client'

export const clients: Client[] = [
  {
    id: 1,
    type: 'PT',
    name: 'Gositus Indonesia',
    email: 'admin@gosit.us',
    phone: '+62 812-7713-1222',
    address: 'Jln. Pejagalan 1 No. 1Bb, Tambora',
    city: 'Jakarta',
    country: 'Indonesia',
    active: true,
  },
  {
    id: 2,
    type: 'CV',
    name: 'Wilson Digital',
    email: 'wilson@example.com',
    phone: '+62 811-2288-1090',
    address: 'Jl. Pangeran Tubagus Angke',
    city: 'Jakarta',
    country: 'Indonesia',
    active: true,
  },
]
