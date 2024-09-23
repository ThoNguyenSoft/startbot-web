export type TTopic = {
  created_at: string
  created_by: string
  deleted_at: string | null
  deleted_by: string | null
  description: string | null
  external_id: string | null
  fork_id: string | null
  id: number
  inactive: boolean
  metadata: {
    id?: number
    category?: string
    index?: number
    symbols: string[]
  }
  name: string
  private: boolean
  updated_at: string
  updated_by: string
}
