import {
  Hero,                // Importing Hero component for the hero section
  Annoucement,         // Importing Annoucement component for displaying announcements
  Vcmsg,               // Importing Vcmsg component for displaying VC message
  Statistic,           // Importing Statistic component for displaying statistics
  Carousel,            // Importing Carousel component for displaying a carousel of events
  AdmissionCard,       // Importing AdmissionCard component for displaying admission card
  Services,            // Importing Services component for displaying services
  PhdFaculty,          // Importing PhdFaculty component for displaying PhD faculty
  GoogleMap,           // Importing GoogleMap component for displaying Google Maps
  VirtualTour,         // Importing VirtualTour component for displaying a virtual tour
  Model,               // Importing Model component (not used in this code)
} from '../components'

import {
  fetchAnnouncements,   // Importing fetchAnnouncements utility function to fetch announcements
  fetchEvents,          // Importing fetchEvents utility function to fetch events
  fetchPhdFaculty,      // Importing fetchPhdFaculty utility function to fetch PhD faculty
  fetchVcMsg,           // Importing fetchVcMsg utility function to fetch VC message
} from '../utils'

import Courses from '../components/courses/Courses'  // Importing Courses component for displaying courses

export default function Home(props = null) {
  return (
    <div className="snap-y scroll-smooth snap-mandatory">
      <Hero />                     
      <Annoucement />             
      <Courses />                  
      {props?.fetchVC && <Vcmsg vcInfo={props.fetchVC} />}  /
      <VirtualTour />               
      <Statistic />                 
      {props?.events && <Carousel events={props.events} />}  
      <Services />                 
      <AdmissionCard />            
      {props?.phdTeachers && <PhdFaculty teachers={props.phdTeachers} />}  
      <GoogleMap />                 
    </div>
  );
}

export const getServerSideProps = async () => {
  const fetchVC = await fetchVcMsg();              // Fetching VC message data
  const events = await fetchEvents();              // Fetching events data
  const phdTeachers = await fetchPhdFaculty();     // Fetching PhD faculty data
  // const announcements = await fetchAnnouncements();  // Fetching announcements data (commented out)

  return {
    props: {
      fetchVC,                // Passing VC message data to the component as prop
      events,                 // Passing events data to the component as prop
      phdTeachers,            // Passing PhD faculty data to the component as prop
    },
    // revalidate: 60 * 1440,    // Setting revalidation time to 24 hours (60 minutes * 1440 minutes = 24 hours)
  };
}
