import React from "react";
import { Heading } from "../../../components";

const foreignLanguages = () => {
  return (
    <div className="container my-10">
      <Heading title="INSTITUTE OF FOREIGN LANGUAGES (IFL)" />

      <div className="md:mx-28 px-5">
        <h2 className="text-lg text-headingPrimary mb-1">
          <strong>Introduction</strong>
        </h2>
        <p dir="ltr" className="mb-4">
          The Institute of Foreign Languages (IFL) was established in the year
          2014. In the first phase the IFL offers certificate course and Diploma
          in Arabic, Persian, Turkish, Russian and Chinese languages. A good
          command of these languages will not only enhance opportunity of
          finding suitable positions/jobs, but also will also help to bring
          closer to the people and countries belonging to above languages.
          <br />
          Further, this will enable the learners to benefit from the advantages
          that knowledge of another language can bring in global economy, as
          well as, earning an additional academic qualification.
        </p>
        <h2 className="text-lg text-headingPrimary mb-1">
          <strong>Mission</strong>
        </h2>
        <p dir="ltr" className="mb-4">
          To promote and provide facilities for the study of modern foreign
          languages.
        </p>
        <h2 className="text-lg text-headingPrimary mb-1">
          <strong>LANGUAGE SKILLS AND COURSE DESIGN</strong>
        </h2>
        <p dir="ltr" className="mb-4">
          Students wishing to develop proficiency across all the above languages
          skills: Reading, Writing, Listening, and Speaking. The course outlines
          have been designed for learners. <br />
          The IFL will also focus on encouraging the students to learn the
          respective language and culture at the same time.
        </p>
        <h2 className="text-lg text-headingPrimary mb-1">
          <strong>ELIGIBILITY</strong>
        </h2>
        <p dir="ltr" className="mb-4">
          Those who have passed the Bachelor&rsquo;s degree are eligible for
          admission. Admission will be on first-come first served basis. <br />{" "}
          Schedule Six-month Certificate Course and one year Diploma.
        </p>
        <h2 className="text-lg text-headingPrimary mb-1">
          <strong>ELIGIBILITY</strong>
        </h2>
        <p dir="ltr" className="mb-4">
          Classes will be conducted three days a week
        </p>

        <div>
          <img
            src="/Faculties/arts-lang/forign-lang/FEES.png"
            alt="forign lang fees stucture"
          />
        </div>
      </div>
    </div>
  );
};

export default foreignLanguages;
