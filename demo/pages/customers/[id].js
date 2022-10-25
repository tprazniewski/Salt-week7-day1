import { useRouter } from 'next/router'
const Customer = () => {
  const router = useRouter()
  const { id } = router.query
  return <p>This is customer: {id}</p>
}
export default Customer;