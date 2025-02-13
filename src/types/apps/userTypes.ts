// ** Types
// import { ThemeColor } from '@/@core/layouts/types'

export type UsersType = {
  id: number
  role: string
  email: string
  status: string
  avatar: string
  company: string
  country: string
  contact: string
  fullName: string
  username: string
  currentPlan: string
  // avatarColor?: ThemeColor
}
export type PaymentsType = {
  id: number
  status: string
  avatar: string
  contact: string
  name: string
  username: string
  currentPlan: string
  // avatarColor?: ThemeColor
}

export type ProjectListDataType = {
  id: number
  img: string
  hours: string
  totalTask: string
  projectType: string
  projectTitle: string
  progressValue: number
  // progressColor: ThemeColor
}
