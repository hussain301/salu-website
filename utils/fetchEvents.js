export const fetchEvents = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getEvents`)
  const events = await data.json()
  return events
}
