export const fetchPhdFaculty = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getPhdFaculty`)
  const phdFaculty = await data.json()
  return phdFaculty
}
