import axios from "axios";

export const fetchPhdFaculty = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/api/getPhdFaculty`
  );
  const phdFaculty = await response.data;
  return phdFaculty;
};
