import Link from "next/link"
import { useEffect } from "react"
//Methoda pe care o folosesc pentru redirect
import { useRouter } from "next/router"

const NotFound = () => {
  //Folosesc userouter pentru push
    const router = useRouter()
// Redirect la home page dupa 3secunde
      // useEffect(() => {
      //   setTimeout(() => {
      //       router.push('/')
      //   }, 3000)
      // }, [])

    return (
        <div className="not-found">
            <h1>Oooops....</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    )
}

export default NotFound