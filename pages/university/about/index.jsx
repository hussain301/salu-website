import React from "react";
import { Overlay } from "../../../components";

const index = () => {
  const missionVision = [
    {
      title: "Mission",
      text: [
        "Providing affordable and accessible quality Under-Graduate, Graduate and Post-Graduate degree Programs, National and International in scope.",
        "Imparting learner-centered teaching through qualified faculty using modern teaching aids and methodologies.",
        "Creating and promoting quality research environment, provide consulting faculties to Industrial/Business & services sector with a realization of needs of community and national responsibility towards economic growth and welfare Building national character and put focus on production of quality graduates to contribute in the economic, industrial and social development of the country.",
        "Promoting a campus environment that welcomes, honors men and women, and values intellectual curiosity, pursuit of knowledge and academic freedom and integrity.",
      ],
    },
    {
      title: "Vision",
      text: [
        "To develop human resources & capabilities to meet national development needs through quality teaching, Learning & research. Youth Empowerment is one of the main objectives of the University.",
        "To provide quality education to the students of the region and to make them competitive in the national and international market.",
        "To provide a platform for the students to develop their skills and abilities to become good citizens and to contribute in the development of the country.",
        "To provide a platform for the students to develop their skills and abilities to become good citizens and to contribute in the development of the country.",
      ],
    },
    {
      title: "Aims & Objectives",
      text: [
        "In this dynamic age of science & technology and competitive business environment, the University provides opportunity for acquiring quality education and develops among the learners competitive edge, gaining new knowledge and insights into the fundamentals of Natural Sciences, Social Sciences and other disciplines to understand the world and universe in true colors.",
        "Providing peaceful and congenial educational atmosphere without any break or disturbance in the morning and evening hours for imparting quality education.",
        "In the University the teaching process will be to maintain the standard of excellence through the services of intellectuals, scientists, professionals, academicians and researchers.",
        "Arrangements of local and foreign qualified faculty members for quality education, creating opportunity of foreign scholarships, training and development facilities for teachers for strengthening their teaching and research skills.",
      ],
    },
  ];

  return (
    <div className="leading-6 scroll-smooth">
      <Overlay url="/hero.png" text="about us" />
      <div className="container mt-10 p-5">
        <p>
          <strong className="text-headingPrimary text-lg">
            About the University:
          </strong>{" "}
          Shah Abdul Latif University, Khairpur provides unique opportunities to
          the students to study in the fields of Natural Sciences, Physical
          Sciences, Social Sciences, Arts & Languages, Education, Management
          Sciences and Law. It is the only University in Upper Sindh which is
          catering for the academic needs in various disciplines. <br />
          Shah Abdul Latif University is one of the developed universities of
          Pakistan. It is staffed by more than 234 well-qualified faculty
          members working in 29 departments. Most of the faculty members are
          young and foreign qualified. Teaching in this University is very
          innovative. It is backed up by the state-of-the-art audio visual
          teaching tools to prepare students as per market demand and groom them
          to meet the challenges of competitive market of the day. As a result,
          most of the graduates of the University have secured professional and
          other jobs in public and private sector.
        </p>
        <br />
        <br />
        <p>
          <strong className="text-headingPrimary text-lg">Location:</strong>{" "}
          Location: Shah Abdul Latif University, Khairpur is located in the
          heartland of Upper Sindh i.e. Khairpur, one of the former princely
          states of British India. The main Campus is located near National
          Highway and is easily reachable by air, railway and bus services.
          Sukkur airport is on half an hour drive and Khairpur Railway station
          is (05) kilometers away from the main Campus. <br />
          The beauty of the University lies in the fact that it is surrounded by
          famous archaeological sites: Mohenjo Daro, Kot Diji, Rohri Hills,
          Achro Desert, religious shrines of Sadhu Bella, and Sachal Sarmast,
          barrage and bridges (Lloyds Barrage, Lansdowne and Ayoub Bridges) and
          culturally rich land where people are very friendly and hospitable.
          The main campus of the University covers an area of 302-22 acres land
          with lush green lawns, play grounds, and trees. It is located just
          three kilometers from Khairpur town. The landscape of the University
          includes three canals at a walking distance, which serve as an
          excellent picnic spots for the students and the faculty. The
          University has over 13000 students in various programs. About 70
          percent of students are male and 30 percent female. There are eight
          hostels (including three for girls).
        </p>
      </div>

      <div id="vision" className="bg-headingPrimary/30 md:p-10">
        <div className="container grid lg:grid-cols-3 gap-12 p-5">
          {missionVision.map((item, index) => (
            <ul key={index} className="px-10">
              <h1 className="text-xl font-bold text-headingPrimary">
                {item.title}
              </h1>

              {item.text.map((text, index) => (
                <>
                  <li key={index} className="list-disc text-white">
                    {text}
                  </li>
                  <br />
                </>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
