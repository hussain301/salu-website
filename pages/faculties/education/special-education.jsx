import { PageBoiler, PageProfileBoiler, Team } from "../../../components";

const pageContent = [
  {
    title: "Introduction",
    text: [
      "The Department of Special Education was established in the year of 2018 under The Faculty of Education. The Faculty of Education Building was donated by USAID, with state-of-the-art facilities like; multipurpose hall along with multimedia system and sound system connected with internet facility & digital computer lab fully equipped with core i5 laptops, seminar library with latest editions of books and research journals and newspapers, fully air-conditioned and science lab: to run education programs. The purpose is to provide Special Education considering its importance.",
      "The Department of Special Education was established in the year of 2018 under The Faculty of Education. The Faculty of Education Building was donated by USAID, with state-of-the-art facilities like; multipurpose hall along with multimedia system and sound system connected with internet facility & digital computer lab fully equipped with core i5 laptops, seminar library with latest editions of books and research journals and newspapers, fully air-conditioned and science lab: to run education programs. The purpose is to provide Special Education considering its importance.",
      "The Department enrolled 1st batch of BS in 2018. The Department provides conducive learning environment to the students of Special Education.",
    ],
  },
  {
    title: "Vision",
    text: [
      "To prepare reflective professional educators, in order to provide service to the nation to meet the special educational challenges of the 21st century",
    ],
  },
  {
    title: "Mission",
    text: [
      "To prepare teachers to bring effective contributions in the field of Special Education for the special persons.",
    ],
  },
  {
    title: "PROGRAMS OFFERD",
    text: ["BS Special Education (4 Years)"],
  },
];

const teamData = [
  {
    name: "Mr. Zahid Hussain Sahito",
    designation: "Incharge Chairperson",
    image: "/Faculties/education/Special/zahid-sahto.jpg",
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

const SpecialEducation = () => {
  return (
    <div className="container my-10">
      <PageProfileBoiler
        title="Department of Special Education"
        name="Ms. Farzana Jabeen Khoso"
        image="/Faculties/education/Special/zahid-sahto.jpg"
        designation="Incharge Chairperson"
      />
      <PageBoiler pageContent={pageContent} />
      <Team teamData={teamData} title="Faculty" />
      <div className="container text-center my-10">
        <h2 className="my-5">
          <strong>
            SYLLABUS FOR BS (FOUR YEARS) & M.A (TWO YEARS) IN SPECIAL EDUCATION
            SEMESTER WISE SCHEME OF STUDIES
          </strong>
        </h2>
        <div className="flex justify-center">
          <img
            src="/Faculties/education/Special/special-education-table1.png"
            alt="teacher education table"
          />
        </div>
        <h2 className="mt-5 text-blue-500">
          <strong>
            SYLLABUS FOR MA (TWO YEARS) IN SPECIAL EDUCATION SEMESTER WISE
            SCHEME OF STUDIES
          </strong>
        </h2>
        <div className="flex justify-center">
          <img
            src="/Faculties/education/Special/special-education-table2.png"
            alt="teacher education table"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialEducation;
