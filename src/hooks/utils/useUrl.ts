/* eslint-disable @typescript-eslint/no-explicit-any */

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const useUrl = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const mode = searchParams.get('mode') || undefined
  const id = searchParams.get('id') || undefined

  const getUrlWithQuerys = (queryString: string, path?: string) => {
    const params = new URLSearchParams(searchParams?.toString())
    const oriParams = new URLSearchParams()
    for (const [key, value] of params) {
      if (!oriParams.has(key)) {
        oriParams.append(key, value)
      }
    }

    const objQuerys = Object.fromEntries(new URLSearchParams(oriParams?.toString() + `&${queryString}`))

    // Delete keys with falsy values
    for (const key in objQuerys) {
      if (!objQuerys[key]) {
        delete objQuerys[key]
      }
    }

    // Parse objQuerys to query string
    const query = Object.keys(objQuerys)
      ?.map(key => key + '=' + objQuerys[key])
      .join('&')
    if (path) {
      return `${path}?${query}`
    } else {
      const url = `${pathname}?${query}`
      return url
    }
  }

  const openEditForm = (idRow: string) => {
    router.push(`${pathname}?id=${idRow}&mode=edit`)
  }
  const openCreForm = () => {
    router.push(`${pathname}?mode=create`)
  }
  const onCloseForm = () => {
    router.push(pathname)
  }

  return {
    getUrlWithQuerys,
    router,
    pathname,
    searchParams,
    mode,
    id,
    openEditForm,
    openCreForm,
    onCloseForm
  }
}

export default useUrl
