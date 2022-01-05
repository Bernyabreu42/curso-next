import { useRouter } from "next/router"
import Layout from "../../components/Layout";
import Tittle from "../../components/tittle";


export default function post() {

  const router = useRouter();

  return (
    <Layout>
      <Tittle>Posts Details</Tittle>
      <p>Post Name: {router.query.id}</p>
    </Layout>
  )
}
