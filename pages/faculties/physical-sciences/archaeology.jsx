import React from "react";
import { PageBoiler, PageProfileBoiler, Team } from "../../../components";

const archaeology = () => {
  const pageContent = [
    {
      title: "Introduction",
      text: [
        "In 1976, the Department of Archaeology became part of an academic institution now famously known as Shah Abdul Latif University Khairpur. During its infancy life of three decades, it has achieved its excellence in quality education and research consequently, this department is recognized as one of the leading departments nationally and internationally where higher degrees of BS, M.Sc., MS/M. Phil and Ph.D. are awarded under the supervision of Professors, who are well-qualified. The major focus of this department is to produce professionals with a higher degree of knowledge associated with Archaeology of Pakistan. The scholars and students have been given an opportunity and a place to meet and share the academic experience. The delegates around the globe visit and work collaborately in the field survey and excavation this department.",
        "Pakistan in general and Sindh in particular is bestowed with a rich cultural heritage, which ranks high in the world. The whole country is replete with Archaeological Sites of different periods, ranging from Palaeolithic to Historic Period. There is a great need to make the public aware of the rich Archaeological Heritage of Pakistan. Thousands of sites are being destroyed due to lack of Archaeological awareness by the Public and Private sector. In order to create this consciousness and produce trained manpower, who would Document, Record and Preserve the National Heritage in a better way.",
      ],
    },
    {
      title: "Vision",
      text: [
        "The vision of the department of Archaeology is to have educational and professional excellence through courses offered, collaborative research projects and an all level professional interaction around the globe. This commitment can only be achieved when department will create dedicated professionals who may continue the set traditions of this particular department.",
      ],
    },
    {
      title: "Mission",
      text: [
        "Department of Archaeology is committed to promote quality education and produce skilled graduate in the field of Archaeology having excellent success in conserving, documenting and interpreting of cultural heritage with modern techniques for future generation.",
      ],
    },
    {
      title: "PROGRAMS OFFERED",
      text: ["BS (Four-Year)", "M. Sc/M.A (Two-Year)", "MS/M.Phil"],
    },
  ];
  const teamData = [
    {
      name: "Dr. Qasid Hussain Mallah",
      designation: "Professor Archaeology and Dean Physical Sciences",
      image: "/Faculties/physical-sciences/archaeology/Qasid-Mallah.png",
      email: "qasid.mallah@salu.edu.pk",
    },
    {
      name: "Dr. Tasleem Alam Abro",
      designation: "Assistant Professor Incharge Director Archaeology Musuem",
      image: "/Faculties/physical-sciences/archaeology/Tasleem-Alam.png",
      email: "tasleem.abro@salu.edu.pk",
    },
  ];

  return (
    <div className="container my-10 px-5">
      <PageProfileBoiler
        title="DEPARTMENT OF ARCHAEOLOGY"
        name="Dr.Tasleem Alam Abro"
        designation="Chairperson"
        image="\Faculties\physical-sciences\archaeology\Tasleem-Alam.png"
      />
      <PageBoiler pageContent={pageContent} />
      <Team teamData={teamData} title="Faculty" cols={2} />
      <div className="container text-center my-10">
        <h2 className="my-5">
          <strong>
            SCHEME OF STUDIES FOR BS (FOUR-YEAR) & M.Sc. (TWO-YEAR)
          </strong>
        </h2>
        <div className="flex justify-center">
          <img
            src="\Faculties\physical-sciences\archaeology\archelogy-table.png"
            alt="teacher education table"
          />
        </div>
      </div>
      <p>
        <strong>Note:</strong> Elective Subjects can be selected in consultation
        with the Chairman
      </p>
    </div>
  );
};

export default archaeology;
