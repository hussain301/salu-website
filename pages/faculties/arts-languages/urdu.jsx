import React from "react";
import { PageBoiler, PageProfileBoiler, Team } from "../../../components";

const urdu = () => {
  const teamData = [
    {
      name: "Mr. Tariq Bin Umer",
      designation: "Chairman, Department of Sindhi",
      image: "/Faculties/arts-lang/urduTeam/Tariq-Bin-Umar.jpg",
      email: "tariq.umar@salu.edu.pk",
    },
    {
      name: "Mr. Tarique Hussain",
      designation: "lecturer",
      image: "/Faculties/arts-lang/urduTeam/tariq-hussain-rizvi.jpg",
      email: "tariq.hussain@salu.edu.pk",
    },
  ];

  return (
    <div className="container my-10">
      <PageProfileBoiler
        title="Department of Urdu"
        name="Mr. Tariq Bin Umer"
        designation="Chairman, Department of Sindhi"
        email=""
        image="/Faculties/arts-lang/urduTeam/Tariq-Bin-Umar.jpg"
      />

      <dir className="md:mx-28 px-5">
        <h2 className="text-lg text-headingPrimary mb-1">
          <strong>Introduction</strong>
        </h2>
        <p className="mb-4">
          The Department of Urdu was established in the year 1989 with M.A.
          Degree classes in the evening shift with objectives to provide the
          facilities to the people of upper Sindh for acquiring education and
          knowledge in the field of Urdu literature, being Urdu a national
          language. Keeping in view the interest of public in 2003-04, the
          Department started B.A. (Honors) classes. From the academic year 2005
          BS (Four Years) Program containing Eight Semesters, with M. A (four
          Semesters) has been initiated in Morning Shift. <br />
          Department had also become successful to start MS/M.Phil & Ph.D.
          Program from the year 2009. The department also offers three months
          certificate course, six months certificate course and one year Diploma
          course in Urdu for foreign students. <br />
          All Courses in Urdu are redesigned keeping in view the recommendation
          of Higher Education Commission (HEC) of Pakistan and the necessities
          of 21st century. The department has also more than 5000 books for the
          Seminar Library which are to be provided to the students for
          preparation their assignments, research work etc., department also
          arranges regularly Quiz Competition, debates, seminar lectures
          program, conferences and other co-curricular activities.
        </p>

        <h2 className="text-lg text-headingPrimary mb-1">
          <strong>RESEARCH ACTIVITIES</strong>
          <br />
          <strong>ALMAS URDU RESEARCH JOURNAL:</strong>
        </h2>
        <p className="mb-4">
          Urdu department has published Twenty two (22) issues of the Urdu
          research Journal ALMAS with special numbers on “Allama Iqbal” &
          Classic Literature, and now 23th volume is to be published in near
          future. Urdu Department has managed to put this journal on-line in
          2007 and this was the first time that an Urdu research Journal is
          available on-line in Pakistan. This “X” category HEC recognized Urdu
          journal has achieved the reputation of outstanding literary Journal at
          international level.
        </p>
        <h2 className="text-lg text-headingPrimary mb-1">
          <strong>INTERNATIONAL EXPOSURE</strong>
        </h2>
        <p className="px-8 mb-4">
          Department of Urdu makes sure to give an international exposure to its
          faculty & students. The Department brings to gather renowned scholars
          in the field of Urdu from over 17 countries, covering four continents
          Asia, Europe, Africa and America.
        </p>
        <h2 className="text-lg text-headingPrimary mb-1">
          <strong>vision</strong>
        </h2>
        <p className="px-8 mb-4">
          Becoming a center of excellence and thereby inculcating positive human
          values through language & literature.
        </p>
        <h2 className="text-lg text-headingPrimary mb-1">
          <strong>Mission</strong>
        </h2>
        <p className="px-8 mb-4">
          To inculcate among students and young scholars the importance of Urdu
          as national language of Pakistan and its role in promoting national
          ideology <br />
          To enhance the skill of communication thought writing & speaking among
          the students and to encourage them in participating research and
          analytical studies of socio-cultural, subjects. <br />
          To teach other Pakistani (Sindhi, Pashto, Punjabi, Balochi & Kashmiri)
          Classical Poets through Urdu for national solidarity and unity. <br />
          To organize conferences, workshops and symposium to bridge the gap
          among the different linguists and literary intellectuals of nation and
          the world.
        </p>
      </dir>

      <Team title="Faculty" teamData={teamData} cols={2} />

      <div className="container text-center px-5 my-10">
        <h2>
          <strong>
            {" "}
            SCHEME OF STUDIES FOR B.S (FOUR YEARS) AND M.A (TWO YEARS) PROGRAM.
          </strong>{" "}
        </h2>
        <div className="flex justify-center my-5">
          <img
            src="/Faculties/arts-lang/urduTeam/urdu-subj-table-1.png"
            alt="urdu subjects info"
          />
        </div>
        <div className="flex justify-center my-5">
          <img
            src="/Faculties/arts-lang/urduTeam/courses.png"
            alt="urdu subjects info"
          />
        </div>
        <div className="flex justify-center my-5">
          <img
            src="/Faculties/arts-lang/urduTeam/urdu-subj-table-2.png"
            alt="urdu subjects info"
          />
        </div>
      </div>
    </div>
  );
};

export default urdu;
