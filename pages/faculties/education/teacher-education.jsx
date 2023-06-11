import React from "react";
import { PageBoiler, PageProfileBoiler, Team } from "../../../components";
const pageContent = [
  {
    title: "Introduction",
    text: [
      "The Department of Teacher Education was established in the end of year 2014 under Faculty of Education. The Faculty of Education Building was donated by USAID, with state of the art facilities like; multipurpose hall along with multimedia system and sound system connected with internet facility & digital computer lab fully equipped with cor i5 laptops, seminar library with latest editions of books and research journals and news papers, fully air-conditioned and science lab: to run teacher education programs. The purpose is to provide an alternative paradigm of teacher education considering structural changes in the system of teacher education, while redefining the teachers&rsquo; role within the framework of the school education system.",
      "The Department of Teacher Education (DTE) at main campus initially offered 4-years B.Ed (Hons) Elementary which can be recognized as a New Teacher Education Program for 21st Century Teachers. The Department also admits 2-year associate degree in education (ADE) passed students in 5th semester who come from affiliated colleges of other universities.",
      "The department enrolled 1st batch of M.Phil in 2015 and currently 3rd batch is enrolled. Keeping in view the future needs M.Phil Education with specialization in Educational Technology has also been offered.",
      "To fully utilize infrastructure and to produce more professional teachers for Pre-primary, Elementary & Secondary Education, the Postgraduate Diploma in Early Childhood Education, 2.5 year conversion program of B.Ed Elementary and 1.5 year conversion program of Secondary Education have been started in evening time.",
      "To standardize all academic programs, B.Ed (4 Year) Program has accredited in “Y level” and B.Ed (1.5-Year) program is under process of accreditation from National Accreditation Council for Teacher Education (NACTE).",
      "To transfer various educational models of developed countries, to discuss the educational issues and their remedies, an International Conference on Research in Education & Technologies was organized in 2017.",
      "The Department provides conducive learning and research environment to the students of graduate & undergraduate level through various celebrations & competitions.",
    ],
  },
  {
    title: "Vision",
    text: [
      "To prepare reflective professional educators, create & disseminate new knowledge and provide service to the nation to meet the educational challenges of the 21st century",
    ],
  },
  {
    title: "Mission",
    text: [
      "To provide exemplary programs that prepare teachers to make effective decisions in diverse contexts, promoting professional excellence within socio-cultural framework, bringing forth benefits to prospective teacher, community and the country.",
    ],
  },
  {
    title: "PROGRAMS OFFERD",
    text: [
      "B.Ed (Hons) Elementary (4-Year) (Morning)",
      "Eligibility Criteria:",
      "The candidates are eligible for admission who have 12 Years Education i.e., F.A/ F.Sc. etc.",
      "B.Ed (Hons) Elementary (2.5-Year) (Evening Program)",
      "Eligibility Criteria:",
      "The candidates are eligible for admission who have 14 Years Education i.e., B.A/ B.Sc. etc.",
      "B.Ed (Hons) Secondary (1.5-Year) (Evening Program)",
      "Eligibility Criteria:",
      "The candidates are eligible for admission who have 16 Years Education i.e.,M.A, M.Sc. etc",
      "PGD in Early Childhood Education (1-Year) (Evening Program)",
      "Eligibility Criteria:",
      "The candidates are eligible for admission who have 14 Years Education i.e., B.A/ B.Sc. etc.",
    ],
  },
];

const teamData = [
  {
    name: "Ms. Farzana Jabeen Khoso",
    designation: "Incharge Chairperson",
    image: "/Faculties/education/Teacher/farzana-jabeen.png",
    email: "farzana.khoso@salu.edu.pk",
  },
  {
    name: "Dr. Muhammad Tariq Bhatti",
    designation: "Assistant Professor",
    image: "/Faculties/education/Teacher/tariq-bhatti.png",
    email: "tariq.bhatti@salu.edu.pk",
  },
  {
    name: "Mr. Ghulam Ali Kerio",
    designation: "Assistant Professor",
    image: "/Faculties/education/Teacher/Ghulam-Ali-Kerio.jpg",
    email: "ghulamali.kerio@salu.edu.pk",
  },
  {
    name: "Syed Zahid Hussain Shah",
    designation: "Assistant Professor",
    image: "/noImage.jpg",
    email: "zahid.shah@salu.edu.pk",
  },
  {
    name: "Ms. Firdous Bugti",
    designation: "Assistant Professor",
    image: "/Faculties/education/Teacher/firdous-bugti.jpg",
    email: "firdous.bugti@salu.edu.pk",
  },
];

const teacherEducation = () => {
  return (
    <div className="container my-10">
      <PageProfileBoiler
        title="Department of Teacher Education"
        name="Ms. Farzana Jabeen Khoso"
        image="/Faculties/education/Teacher/farzana-jabeen.png"
        designation="Incharge Chairperson"
      />
      <PageBoiler pageContent={pageContent} />
      <Team teamData={teamData} title="Faculty" />
      <div className="container text-center my-5">
        <h2>
          <strong>
            SCHEME OF STUDY FOR B.ED (HONS) (4-YEAR & 2.5-YEAR &1.5-YEAR) & PGD
            IN EARLY CHILDHOOD EDUCATION - 1 YEAR
          </strong>
        </h2>
        <div className="flex justify-center">
          <img
            src="/Faculties/education/Teacher/teacher-education-table1.png"
            alt="teacher education table"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="/Faculties/education/Teacher/teacher-education-table2.png"
            alt="teacher education table"
          />
        </div>
      </div>
    </div>
  );
};

export default teacherEducation;
