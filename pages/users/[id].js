import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import Tittle from "../../components/tittle"

export default function user() {

  const router = useRouter()
  console.log(router)

  return (
    <Layout>
      <Tittle>User details</Tittle>
      <p>User ID: {router.query.id}</p>
    </Layout>
  )
}
