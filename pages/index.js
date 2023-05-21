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

export default function Home(props) {
  return (
    <div className="snap-y scroll-smooth snap-mandatory">
      <Hero />
      <Annoucement />
      <Courses/>
      <Vcmsg vcInfo={props.fetchVC} />
      <VirtualTour />
      <Statistic />
      <Carousel events={props.events} />
      <Services />
      <AdmissionCard />
      <PhdFaculty teachers={props.phdTeachers} />
      <GoogleMap />
    </div>
  )
}

export const getStaticProps = async () => {
  const fetchVC = await fetchVcMsg()
  const events = await fetchEvents()
  const phdTeachers = await fetchPhdFaculty()
  // const announcements = await fetchAnnouncements()
  

  return {
    props: {
      fetchVC,
      events,
      phdTeachers,
    },
    revalidate: 1,
  }
}
