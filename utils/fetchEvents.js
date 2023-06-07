import axios from "axios";
export const fetchEvents = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/api/getEvents`
  );
  const events = await response.data;
  return events;
};
