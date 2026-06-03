import { legacyAssetBasePath } from '@/data/assets'
import type { User } from '@/types/user'

export const users: User[] = [
  {
    id: 1,
    name: 'Ahmad Hendri',
    nik: '3174050101900001',
    email: 'ahmad@gosit.us',
    personalEmail: 'ahmad@mail.id',
    phone: '+62 812-7713-1222',
    joinDate: '2024-03-01',
    dob: '1995-06-12',
    pob: 'Jakarta',
    age: 29,
    division: 'Frontend Programmer',
    gender: 'male',
    avatar: `${legacyAssetBasePath}/images/avatar/male/bear-3.png`,
    active: true,
  },
  {
    id: 2,
    name: 'Wilson Li',
    nik: '3174050502900002',
    email: 'wilson@gosit.us',
    personalEmail: 'wilson@mail.id',
    phone: '+62 811-2288-1090',
    joinDate: '2023-10-15',
    dob: '1993-02-21',
    pob: 'Medan',
    age: 31,
    division: 'Project Manager',
    gender: 'male',
    avatar: `${legacyAssetBasePath}/images/avatar/male/lion-1.png`,
    active: false,
  },
]
