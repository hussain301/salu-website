import Hero from '../components/Hero'
import Annoucement from '../components/Annoucement'
import { Vcmsg } from '../components/Vcmsg'
import { Statistic } from '../components/Statistic'
import Carousel from '../components/carousel/Carousel'
import AdmissionCard from '../components/AdmissionCard'
import Services from '../components/Services'
import PhdFaculty from '../components/PhdFaculty'
import GoogleMap from '../components/GoogleMap'
import { fetchVcMsg } from '../utils/fetchVcMsg'
import VirtualTour from '../components/VirtualTour'

const slides = [
  { url: '/car1.jpg' },
  { url: '/car2.png' },
  { url: '/hero.png' },
  {
    url:
      'https://salu.edu.pk/wp-content/uploads/2023/01/eec4f612-4055-4b57-848b-3b38596a9698-1024x379.jpg',
  },
  {
    url:
      'https://salu.edu.pk/wp-content/uploads/2022/10/IMG-20221026-WA0255-1024x768.jpg',
  },
  {
    url:
      'https://salu.edu.pk/wp-content/uploads/2022/12/IMG-20221229-WA0099-1024x682.jpg',
  },

  {
    url:
      'https://salu.edu.pk/wp-content/uploads/2022/02/IMG-20220223-WA0081-1024x398.jpg',
  },
  {
    url:
      'https://salu.edu.pk/wp-content/uploads/2022/10/caa2029d-5a34-42e3-ae96-def54c259067-1024x768.jpg',
  },
]
const workshopSlides = [
  {
    url:
      'https://salu.edu.pk/wp-content/uploads/2022/11/Geography-Department-Broucher-feb-2023-scaled.jpg',
  },
  { url: '	https://salu.edu.pk/wp-content/uploads/2022/11/web-ad.jpg' },
]

export default function Home(props) {
  return (
    <div className="snap-y scroll-smooth snap-mandatory">
      <Hero />
      <Annoucement />
      <Vcmsg fetchVCMsg={props.fetchVC?.[0]?.vcmessage ?? 'none'} />
      <VirtualTour />
      <Statistic />
      <Carousel />
      <Services />
      <PhdFaculty />
      <GoogleMap />
    </div>
  )
}

export const getStaticProps = async () => {
  const fetchVC = await fetchVcMsg()
  return {
    props: {
      fetchVC,
    },
    // revalidate: 10,
  }
}
