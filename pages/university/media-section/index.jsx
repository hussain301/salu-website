import React from "react";
import { Team, Button, Overlay } from "../../../components";
import Link from "next/link";

const index = () => {
  const teamData = [
    {
      name: "Prof. Dr, Taj Muhammad Lashari",
      designation: "Director",
      image: "/MediaTeam/Taj-Muhammad.png",
    },
    {
      name: "Mr. Irfan Ali Phulpoto",
      designation: "Public Relation Officer",
      image: "/MediaTeam/Irfan-Ali-Phulpoto.jpg",
    },
    {
      name: "Syed Manzar Abbas Zaidi",
      designation: "computer operator",
      image: "/MediaTeam/Syed-Manzar-Abbas-Zaidi.jpg",
    },
    {
      name: "Mr. Sahab Khan Shaikh",
      designation: "Reporter",
      image: "/MediaTeam/Sahib-Khan-Shaikh.jpg",
    },
    {
      name: "Mr. Ghulam Raza Bhutto",
      designation: "Photographer",
      image: "/MediaTeam/Ghulam-Raza-Bhutto.jpg",
    },
    {
      name: "Mr. Ghulam Sarwar Bhutto",
      designation: "Photographer",
      image: "/MediaTeam/ghulam sarwar.jpg",
    },
  ];

  return (
    <div>
      <Overlay
        gradient="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900"
        text="Directorate of Media & Public Relations"
      />
      <div className="md:mx-28 flex justify-end mx-5 my-5 mb-10">
        <Button className="bg-orange-500 hover:bg-orange-400">
          Read Blogs
        </Button>
      </div>
      <div className="md:mx-28 mx-5 my-5 leading-relaxed">
        <h2 className="text-xl">
          <strong>Introduction</strong>
        </h2>
        <p>
          The century we live in, is the century of media. With fast growing
          technology, the media has also witnessed greater changes in its scope.
          The success of any Institute depends upon the media coverage, as
          without the news in media, the events go unnoticed and lose their
          significance. At Shah Abdul Latif University, Khairpur, this sensitive
          and onerous responsibility of media coverage, documentation of the
          news, photo records of the events and their wide publicity is taken by
          a vibrant, active and vigilant team working as Media Section.
          <br />
          Though currently restricted to a single room, this section covers each
          and every event, official visit, research and academic activity
          covering the entire campus. At the reach of this section is every
          faculty and every activity of Administration Block. As the mouthpiece
          of the University, the responsibility of Media Section is not
          restricted to coverage of the news alone; this section also brings out
          SALUNI Newsletter, plays vital role in publication of every documents
          of the University ranging from Prospectus to Annual Reports etc.
          <br />
          Media Section also highlights students&rsquo; participation in
          curricular and co-curricular activities. It is the section, usually
          referred by the students, parents, journalists and public for
          authentication of information, confirmation of dates and official
          point of view of the University. Thus, Media Section of Shah Abdul
          Latif University, Khairpur is not limited to news alone, it has become
          an information desk of the University and highly visited section of
          the University by the students and faculty alike. All this have been
          possible with the kind and benign patronage of the Vice Chancellor who
          allows this section to work independently and with ease. The section
          also actively covers social media through Facebook Page and WhatsApp.
          <br />
          <strong className="block">Vision of Media Section</strong>
          <span>
            Our vision is to be the mouthpiece of the University by highlighting
            all the leading events, occasions, visits and academic as well as
            research activities to the print, electronic and social media to
            create soft, brighter and better image of the University with
            dedication, commitment and sincerity.
          </span>
          <strong className="block">Aims & Objectives</strong>
          <span className="block px-5">
            To be the mouthpiece of the University. To give proper media
            coverage to all the events, occasions, visits, research as well as
            academic activities. <br />
            To create soft, brighter and better image of the University through
            print, electronic and social media. <br />
            To keep and maintain the record of all the events. <br />
            To keep vigilant eye on every news regarding the University and
            defend the University (in case of any false news published against
            the University). <br />
            To represent the University at various platforms. <br />
            To promote the aims and objectives of the University through media
            coverage. <br />
            To advance the academic excellence of the University through print,
            electronic and social media to garner public support and
            appreciation. <br />
          </span>
        </p>
        <p className="mt-7 mb-3">
          <strong>
            For Further Contact /NEWS / Quarries Please do not hesitate to
            contact on following:
          </strong>
        </p>
        <div className="container bg-gray-300 px-8 py-5">
          <p>
            <span className="block">Prof. Dr. Taj Muhammad Lashari</span>
            <span className="block">Director Media & Public Relations</span>
            <span className="block">
              Shah Abdul Latif University (SALU), Khairpur
            </span>
            <span className="block">Phone: +92 243 552 261</span>
            <span className="block">Cell: +92 307 3616422</span>
            <Link className="block" href="mailto:pro@salu.edu.pk ">
              Email:
              <span className="text-headingPrimary text-lg font-semibold">
                pro@salu.edu.pk
              </span>
            </Link>
          </p>
        </div>
      </div>

      <Team teamData={teamData} title="Our Team" />
    </div>
  );
};

export default index;
