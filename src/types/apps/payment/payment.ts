export type TCheckTransaction = {
  transaction_id: number
  provider_code: string
}
export type TPay = {
  bank_code: string
  redirect: string
  project_code: string
  product_code: string
  provider_code: string
  message: string
}
export type TProvider = {
  code: string
  name: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  inactive: boolean
  version: number
  created_by: string
  updated_by: string
  deleted_by: string | null
  metadata: {
    vnp_IPN: string
    vnp_Url: string
    vnp_TmnCode: string
    vnp_HashSecret: string
    vnp_Merchant_User: string
    vnp_Merchant_Password: string
    vnp_Merchant_Admin_Page: string
  }
}
