import cookies from 'js-cookie'
import { useEffect, useState } from 'react'

const useCookiesWls = () => {
  const [myWls, setMyWls] = useState<string[]>([])

  useEffect(() => {
    const myWls = cookies.get('myWls')
    if (myWls) {
      setMyWls(JSON.parse(myWls))
    }
  }, [])
  // update myWls into cookies
  // useEffect(() => {
  //   cookies.set('myWls', JSON.stringify(myWls),)
  // }, [myWls])

  return {
    myCookiesWls: myWls
  }
}

export default useCookiesWls
