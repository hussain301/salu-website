import React from 'react'
import { PageBoiler, PageProfileBoiler, Team } from '../../../components'


const pageContent = [
    {
        title: "Introduction",
        text:[
            'Shaheed Zulfiqar Ali Bhutto School of Law was established in 2011 & the classes of the first batch started in April 2012. This School is offering 5 year LLB Program and its Curriculum follows the standards prescribed by the HEC in consultation with the Pakistan Bar Council (PBC), a statutory body to regulate legal profession & legal education in Pakistan. There was no such institution in upper Sindh to offer 5 year LLB program.','This School is offering legal education to train students in all the important subjects of Law, legislative methodology & corporate related legal activities in the field of Information Technology.','SZAB School of Law is offering Masters Program in the field of legislative from academic session 2016. This highly significant academic step is motivated towards the provision of legal education for legal reforms in the context of globalization & the emerging global scenario. In other words this University is endeavoring to set up a program for legal education of International level. This program would offer excellent opportunities to legal professionals in the field of research.',
            'The 5 year BA-LLB program combines BA & LLB degree in creative manner so as to insure greater value and consistency in the field of Law. Through this program students will obtained a professional degree best up on versatile & intellectually challenging academic training in various subjects of Law.',
    ]},
    {
        title: "Vision",
        text:['To provide policy making, skilled & legally trained Law interpreters to the different national institutions of Pakistan.','To become a hub of research activities in the field of Law and human rights.']
    },
    {
        title: "Mission",
        text:['To produce significant Lawyers, professionals Judges, Politicians, Solicitors equipped with virtues civic sense & sprit of duty to words the people & respect for the fundamental rights of other fellow human beings.',
        ]}
    ]

    const teamData = [
        {
            name: "Mr. Manzoor Hussain Larik",
            designation: "Lecturer Dean of SZAB School of Law",
            image: "/Faculties/law/mansoor-hussain.png",
            email:'manzoor.larik@salu.edu.pk'
        },
        {
            name:'Mr. Zulqarnain Shaikh',
            designation:'Lecturer, Director of SZAB School of Law',
            image:'/Faculties/law/zulqarnain-shaikh.png',
            email:'zulqarnain.shaikh@salu.edu.pk'
        },
        {
            name:'Javed Hussain Bhayo',
            designation:'Lecturer of SZAB School of Law',
            image:'/Faculties/law/javed-hussain-bhayo.png',
            email:'javed.bhayo@salu.edu.pk'
        },
    ]


const index = () => {
  return (
    <div className='container my-10'>
        <PageProfileBoiler
        title="SHAHEED ZULFIQAR ALI BHUTTO SCHOOL OF LAW"
        name="Mr. Manzoor Hussain Larik"
        image="/Faculties/law/mansoor-hussain.png"
        designation="DEAN"
      />
      <PageBoiler pageContent={pageContent} />
      <Team teamData={teamData} title="Faculty" cols={3} />
      <div className="container text-center my-10">
        <h2 className="my-5">
          <strong>
           SCHEME OF STUDIES FOR B.A.LLB (FIVE- YEARS)
          </strong>
        </h2>
        <div className="flex justify-center">
          <img
            src="/Faculties/law/lawtable1.png"
            alt="law subjects structure table"
          />
        </div>

      </div>
  </div>
    
  )
}

export default index