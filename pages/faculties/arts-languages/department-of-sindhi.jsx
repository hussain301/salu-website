import React from "react";
import { PageBoiler, Team } from "../../../components";

const departmentOfSindhi = () => {
  const teamData = [
    {
      name: "Dr. Rahim Bux Mahar",
      designation: "Assistant Professor ",
      image: "/Faculties/arts-lang/SindhiTeam/rahim-bux.jpg",
      email: "dr.rahim.bux@salu.edu.pk",
    },
    {
      name: "Mr. Muhammad Sajid Soomro",
      designation: "Assistant Professor",
      image: "/Faculties/arts-lang/SindhiTeam/sajjid-Soomro.jpg",
      email: "muhammadsajid@salu.edu.pk",
    },
    {
      name: "Allah Wasayo Soomro",
      designation: "Assistant Professor",
      image: "/Faculties/arts-lang/SindhiTeam/allah-wasayo-soomro.jpg",
      email: "awasayo786@salu.edu.pk",
    },
  ];

  return (
    <div className="container my-10">
      <PageBoiler
        title="Department of Sindhi"
        name="Dr. Rahim Bux Mahar"
        designation="Director, Department of Sindhi"
        email=""
        image="/Faculties/arts-lang/EnglishTeam/noImage.jpg"
      />

      <dir className="md:mx-28 px-5">
        <h2 className="text-lg text-headingPrimary mb-1">
          <strong>Introduction</strong>
        </h2>
        <p className="mb-4">
          The Department of Sindhi was established in the year of 1990. It
          offers B.S (Four –year program) and M.A Degree Courses. B.S (Four Year
          Program) and M.A Classes are conducted in the morning shift. Facility
          of Seminar Library is also available. Literary Meetings are organized
          regularly. The Department has published fifteen issues of Research
          Journal Bhittai including Tanveer Abbasi number and Shaikh Ayaz
          number. Thirty Eight scholars have been awarded degrees of M. Phil.
          Students are encouraged to be involved in research and literary
          activities. More than hundred monographs have been written on various
          literary topics, by the students. The Department provides research
          facilities to young scholars. This Department is actively involved to
          protect and promote the culture, language, literature and venerated
          tradition of Sindh, especially of Khairpur region. The Department is
          not only providing general education and literature but also moral
          education to the students for their character building.
        </p>
        <h2 className="text-lg text-headingPrimary mb-1">
          <strong>vision</strong>
        </h2>
        <p className="px-8 mb-4">
          The Department is working for the promotion of art, culture, language
          and literature, which are the main sources of social awareness and
          stability in the society. <br />
          The Department of Sindhi is representing the Sindhi society, because
          literature is very important part of culture. <br />
          Culture is the main source of identity of any nation. <br />
          Through literature, the Department is not only providing education to
          the students but teachers of the Department are making efforts for the
          character building of the students also, because our society needs
          committed and morally good persons for its proper development. <br />
          This Department is centre of perpetual intellectual communication with
          Sindhi Society.
        </p>
        <h2 className="text-lg text-headingPrimary mb-1">
          <strong>Mission</strong>
        </h2>
        <p className="px-8 mb-4">
          To motivate people towards Sindhi language and Sindhi books. <br />
          To work for the love, peace and harmony in society through mystic
          poetry of Sufi poets. <br />
          To work for the promotion of Sindhi language, literature and culture.
        </p>
      </dir>

      <Team title="Our Team" teamData={teamData} cols={3} />

      <div className="container text-center px-5 my-10">
        <h2>
          <strong>
            {" "}
            SCHEME OF STUDIES FOR B.S (FOUR YEARS) AND M.A (TWO YEARS) PROGRAM.
          </strong>{" "}
        </h2>
        <div className="flex justify-center my-5">
          <img
            src="/faculties/arts-lang/sindhiTeam/BS-subjects-info.png"
            alt="sindi subjects info"
          />
        </div>
      </div>
    </div>
  );
};

export default departmentOfSindhi;
