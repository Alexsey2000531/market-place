enum Gender {
  Male = 'm',
  Female = 'f',
}

export type UserData = {
  id?: number | null
  login?: string | null
  email?: string | null
  phone?: string | string | null
  nameFirst?: string | null
  nameLast?: string | null
  namePatronymic?: string | null
  displayName: string | null
  birthDate?: string | null
  gender?: Gender | null
}
