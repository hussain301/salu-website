import React from "react";
import { PageBoiler, PageProfileBoiler, Team } from "../../../components";

const geography = () => {
  const pageContent = [
    {
      title: "Introduction",
      text: [
        "The Department of Geography offers the Bachelor & Master’s level courses in the discipline of Geography. The discipline has been opened to meet the long standing demands of the people of upper Sindh. The classes of BS (4 year) Program started from the academic year 2005-06 and M.A/M.Sc from the Year 2010. Department of Geography announced the admissions in MS/M.Phil in Geography started from the academic year 2020.",
        "The subject of Geography provides wealth of information and advanced knowledge of the Earths surface. It is meant to open further frontiers of knowledge for the students and to give an understanding and the preparation which may help them proceed further to acquire the present day knowledge of the concepts of Geographical Science.",
        "The discipline of Geography deals with Physical Geography, Climatology, Hydrography, Geomorphology, Biogeography, the Geography of soils and Plants, Animals and Human Geography. Historically Geography is concerned primarily with the Human Geography of the past because so many of the present spatial patterns owe much to earlier ones, remote sensing & GIS (Geographic Information System) are new market oriented disciplines in Geography various fields of Geography are proposed to be taught in the Syllabus of Bachelor of Studies BS (4-year) Program and M.A/M.Sc (Two years Program).",
      ],
    },
    {
      title: "Vision",
      text: [
        "Create new vistas and impart knowledge and enhance awareness about the Earth as a living planet with reference to Man-environment Interaction and resulting Physical and Human phenomena amongst the Geography students.",
      ],
    },
    {
      title: "Mission",
      text: [
        "To make Geography an integral part of education at all levels",
        "To enhance the quality of Geographical education for broader applications and implementation in all walks of life",
        "To make Geography effective for the enhancement of quality of environment and wellbeing of humanity",
        "To introduce new applied fields of Geography that can fulfill the requirements of the modern world",
        "To make Geographic research effective in our daily lives",
        "To broaden Geographic research areas and to effectively integrate it with national planning and development.",
        "To create insight appreciating current world affairs based on modern Geographic areas.",
      ],
    },
    {
      title: "PROGRAMS OFFERED",
      text: ["BS (Four-Year)", "M. Sc/M.A (Two-Year)", "MS/M.Phil"],
    },
  ];
  const teamData = [
    {
      name: "Dr. Noor Hussain Chandio",
      designation: "Professor & Chairman,Department of Geography",
      image: "/Faculties/physical-sciences/geography/Noor-Hussain.png",
      email: "hussain.chandio@salu.edu.pk",
    },
    {
      name: "Dr. Naila Parveen Abbasi",
      designation: "Assistant Professor Department of Geography",
      image: "/Faculties/physical-sciences/geography/naila-parveen.png",
      email: "naila.abbassi@salu.edu.pk",
    },
    ,
    {
      name: "Mr. Kamal Hussain",
      designation: "Assistant Professor Department of Geography",
      image: "/Faculties/physical-sciences/geography/Kamal-Hussain.png",
      email: "hussain.kamal@salu.edu.pk",
    },
  ];

  return (
    <div className="container my-10 px-5">
      <PageProfileBoiler
        title="DEPARTMENT OF geography"
        name="Dr. Noor Hussain"
        designation="Chairman"
        image="\Faculties\physical-sciences\geography\Noor-Hussain.png"
      />
      <PageBoiler pageContent={pageContent} />
      <Team teamData={teamData} title="Faculty" cols={3} />
      <div className="container text-center my-10">
        <h2 className="my-5">
          <strong>
            SCHEME OF STUDIES FOR BS (FOUR-YEAR) &M.A/M.Sc (TWO-YEAR)
          </strong>
        </h2>
        <div className="flex justify-center">
          <img
            src="\Faculties\physical-sciences\geography\geography-table.png"
            alt="teacher education table"
          />
        </div>
      </div>
    </div>
  );
};

export default geography;
