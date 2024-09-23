/* eslint-disable @typescript-eslint/no-explicit-any */
import { TFetch } from '@/types/interfaces/models'
import apiFactory from '../backend'

export const getAssistants = async (params: TFetch & { orderBy: { updated_at: 'desc' } }) => {
  const res = await apiFactory.assistant.getAll(params)

  return res.data
}

export const getAssistant = async (id: string | number, version: number, params?: { from?: string; to?: string }) => {
  const res = await apiFactory.assistant.get(id, version, params)

  return res.data
}

export const postAssistant = async (data: any) => {
  const res = await apiFactory.assistant.post(data)

  return res.data
}

export const putAssistant = async (id: number, data: any) => {
  const res = await apiFactory.assistant.put(id, data)

  return res.data
}

export const deleteAssistant = async (data: any) => {
  const res = await apiFactory.assistant.delete(data)

  return res.data
}
