/* eslint-disable @typescript-eslint/no-explicit-any */

import apiFactory from '../../backend'

interface Experience {
  // Define the structure of the experience object
}

interface Investment {
  goals: any[]
  valuable: any[]
  awareness: any[]
  frequency: any[]
  experiences: any[]
}

export interface ProfileResData {
  code: null
  created_at: string
  created_by: string
  deleted_at: null
  deleted_by: null
  dob: null
  email: string
  external_id: string
  first_name: string
  id: string
  inactive: boolean
  last_name: string
  metadata: {
    experience: Experience[]
    investment: Investment
    onboarding: boolean
    onboarding_at: string
    watchlist?: string[]
    tour: boolean
  }
  updated_at: string
  updated_by: string
  user_type: string
  version: number
}
export type ProfileResponse = { success: boolean; response: ProfileResData }

export const getProfile = async (): Promise<ProfileResponse> => {
  const res = await apiFactory.profile.get()

  return res.data
}

export const putProfile = async (data: any) => {
  const res = await apiFactory.profile.put(data)

  return res.data
}

export const patchProfile = async (data: { onboarding: boolean }) => {
  const res = await apiFactory.profile.patch(data)

  return res.data
}
