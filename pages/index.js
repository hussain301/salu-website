import { SanityClient } from '../sanity'
import {
  Hero,
  Annoucement,
  Vcmsg,
  Statistic,
  Carousel,
  AdmissionCard,
  Services,
  PhdFaculty,
  GoogleMap,
  VirtualTour,
  Model,
} from '../components'
import {
  fetchAnnouncements,
  fetchEvents,
  fetchPhdFaculty,
  fetchVcMsg,
} from '../utils'
import Courses from '../components/courses/Courses'

export default function Home(props = null) {
  return (
    <div className="snap-y scroll-smooth snap-mandatory">
      <Hero />
      <Annoucement />
      <Courses />
      {props?.fetchVC && <Vcmsg vcInfo={props.fetchVC} />}
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


export const getStaticProps = async () => {
  if (typeof window === 'undefined') {
    // Running on the server during build process
    console.log('Server is not running');
    return {
      props: {
        fetchVC: null,
        events: null,
        phdTeachers: null,
      },
      revalidate: 60,
    };
  } else {
    console.log('Server is running');
    const fetchVC = await fetchVcMsg();
    const events = await fetchEvents();
    const phdTeachers = await fetchPhdFaculty();
    // const announcements = await fetchAnnouncements();

    return {
      props: {
        fetchVC,
        events,
        phdTeachers,
      },
      revalidate: 60,
    };
  }
};

