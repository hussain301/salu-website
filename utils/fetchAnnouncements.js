import axios from 'axios';

export const fetchAnnouncements = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/getAnnoucements`);
    const announcements = response.data;
    return announcements;
  } catch (error) {
    // Handle any error that occurs during the request
    console.error('Error fetching announcements:', error);
    throw error;
  }
};
