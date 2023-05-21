export const fetchAnnouncements = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getAnnoucements`)
  const announcements = await data.json()
  return announcements
}
