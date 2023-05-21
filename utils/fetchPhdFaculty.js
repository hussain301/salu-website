import axios from "axios"

export const fetchPhdFaculty = async () => {
  const data = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/getPhdFaculty`)
  const phdFaculty = await data.json()
  return phdFaculty
}
