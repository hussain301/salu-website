import axios from "axios"
export const fetchEvents = async () => {
  const data = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/getEvents`)
  const events = await data.json()
  return events
}
