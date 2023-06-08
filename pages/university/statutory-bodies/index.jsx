import React from "react";
import { Overlay } from "../../../components";
import Table from "./table";
import data from "../../../data/tableData";

const index = () => {
  return (
    <div>
      <Overlay
        text="Functions / Duties and Powers of Statutory Bodies"
        gradient="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900"
      />
      <div className="container ">
        <Heading text="SENATE" />

        <div className="md:px-28 px-5 leading-loose space-y-5 my-10">
          <h2 className="text-center">
            <strong>The Function and Powers of the Senate:</strong>
          </h2>
          <p>
            To consider the drafts of Statutes proposed by the Syndicate and
            deal with them in the manner indicated in sub-section (2) of section
            29 To consider and pass resolution on the annual report, the annual
            statement of accounts and the annual and revised budget estimates To
            appoint members to the Syndicate and other Authorities in accordance
            with the provisions of this Act To delegate any of its powers to an
            Authority or Officer or a Committee or Sub-Committee to perform such
            other functions as may be prescribed by Statutes
          </p>
        </div>
        <div className="px-5 mt-5">
          <Heading text="SYNDICATE" />
          <h3 className="text-headingPrimary sm:text-3xl text-2xl  font-[500] ">
            The Syndicate body comprises of following members.
          </h3>
          <div className="md:px-28 my-10">
            <Table data={data} />
          </div>
        </div>

        <div className="container leading-loose px-5 my-5 space-y-5">
          <h3 className="text-2xl sm:text-3xl font-[500] text-headingPrimary ">
            The Function and Powers of the Syndicate:
          </h3>
          <div className="sm:mx-10 mx-5 leading-relaxed my-5">
            <p>
              The Syndicate is the executive body of the University and shall,
              subject to the provisions of this Act and the statutes, exercise
              general supervision over the affairs of the University and the
              management of its property. Without prejudice to the generality of
              the foregoing powers, and subject to the provisions of this Act
              and the Statutes, the Syndicate shall have the powers.
              <br />
              To hold, control and administer the property and funds of the
              University. To govern and regulate, with due regard to the advise
              of the Finance and Planning Committee in this behalf, the
              finances, accounts and investments of the University and for that
              purpose to appoint such agents as it may think fit. To consider
              the annual report, the annual and revised budget estimates and to
              advice the Senate thereon, and to re-appropriate funds from the
              major head of expenditure to another.
              <br />
              To transfer and accept transfer of moveable or immoveable property
              on behalf of the University To enter into, vary, carry out and
              cancel contracts on behalf of the University. To cause proper
              books of account to be kept for all sums of money received and
              expended by the University and for the assets and liabilities of
              the University.
              <br />
              To invest any moneys belonging to the University including any
              unapplied income in any manner it deems fit and may withdraw from
              such investment. To receive and manage any property transferred,
              and grants, bequests, trusts, gifts, donations, endowments and
              other contributions made to the University. To administer any
              funds placed at the disposal of the University for specified
              purposes. To determine the form provide for the custody and
              regulate the use of the common seal of the University. To provide
              the buildings, libraries, Premises, furniture, apparatus,
              equipment and other means required for carrying out the work of
              the University. To establish and maintain halls of residence and
              hostels or approve or license hostels or lodging for the residence
              of students. To affiliate and disaffiliate colleges.
              <br />
              To admit educational institutions to the privileges of the
              University and withdraw such privileges. To arrange for the
              inspection of colleges and the Teaching Departments. To institute
              Professorships. Associate, Professorships. Assistant
              Professorships, Lectureships and other teaching posts or to
              suspend or to abolish such posts. To create, suspend or abolish
              such administrative, research, extension or other posts as may be
              necessary. To appoint University Teachers and other officers on
              the recommendation of the Selection Board to posts in basic scale
              of pay 17 or above.
              <br />
              To appoint Emeritus Professors on such terms and conditions as may
              be prescribed. To confer Honorary Degrees in accordance with
              conditions prescribed. To prescribe the duties of Officers,
              Teachers and other employees of the University. To suspend, punish
              and remove from service Officers (other than the Vice Chancellor),
              Teachers and other employees in the manner prescribed.
              <br />
              To report to the Senate on matters on which it has been asked to
              report. To appoint members to the various Authorities in
              accordance with the provisions of this Act. To propose drafts for
              Statutes for submission to the Senate.
              <br />
              To consider and deal in the manner prescribed in sub-section (2)
              of section 30, the Regulations made by the Academic Council;
              provided that the Syndicate may frame a Regulation at its own
              initiative and approve it after calling for the advance of the
              Academic Council.To regulate, determine and administer all other
              matters concerning the University and to this and exercise all
              other powers not specifically mentioned in this Act and the
              Statutes.
              <br />
              To regulate, determine and administer all other matters concerning
              the University and to this and exercise all other powers not
              specifically mentioned in this Act and the Statutes. To delegate
              any of its powers to an Authority or Officer or a Committee or
              Sub-Committee; and To perform such other functions as are assigned
              to it by the other provisions of this Act or by the Statutes.
            </p>
          </div>
        </div>
        <div className="container leading-loose px-5 my-5 space-y-5">
          <Heading text="ACADEMIC COUNCIL" />
          <h3 className="text-headingPrimary sm:text-3xl text-2xl my-5  font-[500] ">
            The Function and Powers of the Academic Council:
          </h3>
          <div>
            <p className="px-5">
              <span>
                The Academic Council shall be the academic body of the
                University and shall, subject to the provision of this Act and
                the Statutes, have the power to lay down proper standards of
                instruction, research and examinations and to regulate and
                promote the academic life of the University and the colleges.
                Without prejudice to the generality of the foregoing powers and
                subject to the provisions of this Act and the Statutes, the
                Academic Council shall have the powers –
              </span>
              <span className="mx-7 block">
                To advise the Syndicate on academic matters.
                <br />
                To regulate the conduct of teaching, research and examination.{" "}
                <br />
                To regulate the admission of students to the courses of studies
                and examinations in the university. <br />
                To regulate the conduct and discipline of the students of the
                university. <br />
                To propose to the syndicate schemes for the constitution and
                organization of faculties, teaching departments and boards of
                studies. <br />
                To consider or formulate proposals for the planning or
                development of teaching and research in the university. <br />
                To make regulations, on the recommendations of the boards of
                faculties and the boards of studies prescribing the courses of
                studies the syllabi and the outlines of tests for all university
                examinations; provided that if the recommendations of the board
                of faculty or a board of studies are not received by the
                prescribed date, the academic council may, subject to the
                approval of the syndicate, continue for the next year the
                courses of studies already prescribed for an examination. <br />
                To recognize the examinations of other universities or examining
                bodies as equivalent to the corresponding examinations of the
                university. <br />
                To regulate the award of studentships, scholarships,
                exhibitions, medals and prizes To frame regulations for
                submission to the syndicate. <br />
                To appoint members to the various authorities in accordance with
                the provisions of this act. <br />
                To perform such other functions as may be prescribed by
                statutes.
              </span>

              <span>
                The constitution, functions and powers of the authorities for
                which no specific provision has been made in this act shall be
                such as may be prescribed by statutes. <br />
                The senate, the syndicate, the academic council and other
                authorities may, from time to time, appoint such standing,
                special or advisory committees, as they may deem fit, and may
                place on such committees, persons who are not members of the
                authorities appointing the committees.
              </span>
            </p>
          </div>
        </div>

        <div className="container leading-loose px-5 my-5 ">
          <Heading text="Advance Studies and Research Board (ASRB)" />
          <h3 className="text-2xl sm:text-3xl font-[500] text-headingPrimary ">
            The Function and Powers of the Advance Studies and Research Board
            (ASRB):
          </h3>
          <p className="px-8 my-7">
            To advise the Authorities on all matters connected with the
            promotion of advanced studies and research in the University. <br />
            To consider and report to the Authorities on the institution of
            research degree in the University. <br />
            To propose Regulations regarding the awards of research degrees.{" "}
            <br />
            To appoint supervisors for research students and to determine the
            subjects of their thesis. <br />
            To recommend panels of names of paper setters and examiners for
            research examinations after considering the proposals of the Board
            of Studies in this behalf. <br />
            To perform such other functions as may be prescribed by Statutes.{" "}
            <br />
          </p>
        </div>
        <div className="container leading-loose px-5 my-5 ">
          <Heading text="Selection Board" />
          <h3 className="text-2xl sm:text-3xl font-[500] text-headingPrimary ">
            The Function and Powers of the Selection Board:
          </h3>
          <p className="px-8 ">
            The Selection Board shall consider the applications received in
            response to advertisement and recommend to the Syndicate the names
            of suitable candidates for appointment to teaching and other posts.{" "}
            <br />
            The Selection Board may recommend the grant of a higher initial pay
            in a suitable case for reasons to be recorded. <br />
            The Selection Board may recommend to the Syndicate the appointment
            of an eminently qualified person to a professorship in the
            University on terms and conditions other than those prescribed.{" "}
            <br />
            In the event of an unresolved difference of opinion between the
            Selection Board and the Syndicate, the matter shall be referred to
            the Chancellor whose opinion shall be final. <br />
          </p>
        </div>
        <div className="container leading-loose px-5 my-5 ">
          <Heading text="Board of Faculty" />
          <h3 className="text-2xl sm:text-3xl font-[500] text-headingPrimary ">
            The Board of each Faculty shall subject to the general control of
            the Academic Council and the Syndicate, have the powers:
          </h3>
          <p className="px-8 my-7">
            To co-ordinate the teaching and research work in the subject
            assigned to the Faculty. <br />
            To scrutinize the recommendations of the Board of Studies, comprised
            in the Faculty in regard to the appointment of papers setters and
            the examiners, except for the research examinations, and to forward
            the panels of suitable papers setters and examiners for each
            examinations to the Vice Chancellor <br />
            To consider any other academic matter relating to the Faculty and to
            report thereon to the Academic Council. <br />
            To perform such other functions as may be prescribed by Statutes.{" "}
            <br />
          </p>
        </div>
        <div className="container leading-loose px-5 my-5 ">
          <Heading text="Board of Studies (BoS)" />
          <h3 className="text-2xl sm:text-3xl font-[500] text-headingPrimary ">
            The Function and Powers of the Board of Studies (BoS):
          </h3>
          <p className="px-8 my-7">
            To advise the authorities on all academic matters connected with
            instruction, research and examination in the subject or subjects
            concerned. <br />
            To propose curricula and syllabi for all degree, diploma and
            certificate courses in the subject or subjects concerned. <br />
            To suggest a panel of names of paper setters and examiners in the
            subject or subjects concerned. <br />
            To perform such other functions as may be prescribed by Regulations.{" "}
            <br />
            <span className="mx-5 block">
              The Head of the Department shall preside at all meetings of the
              Board of Studies in the subject and shall select a member on the
              staff of the Department to work as the Secretary of the Board Each
              Board of Studies shall draw up a list of Paper Setters in the
              subject or subjects with which the Board is concerned The work of
              drawing up a list of Paper Setters and Examiners shall be
              completed by the Board of Studies before the end the first term.
              The list shall be subject to the approval of the Vice Chancellor
              The names of Paper Setters, Examiners and Moderators shall be kept
              strictly secret and their list shall not be incorporated in the
              normal proceedings of the Board of Studies.
            </span>
          </p>
        </div>
        <div className="container leading-loose px-5 my-5 ">
          <Heading text="Finance and Planning Committee (FPC)" />
          <h3 className="text-2xl sm:text-3xl font-[500] text-headingPrimary ">
            The Function and Powers of the Finance and Planning Committee (FPC):
          </h3>
          <p className="px-8 my-7">
            The functions of the Finance and Planning Committee shall be –{" "}
            <br />
            <span className="mx-5 block">
              To consider the annual statement of accounts and the revised
              budget estimates and advise the Syndicate thereon/ <br />
              To review periodically the financial position of the University.{" "}
              <br />
              To advise the Syndicate on all matters relating to planning,
              development, finances, investments and accounts of the University.{" "}
              <br />
              To perform such other functions as may be prescribed by the
              statutes. <br />
            </span>
          </p>
        </div>
        <div className="container leading-loose px-5 my-5 ">
          <Heading text="Scrutiny Committee (SC)" />
          <h3 className="text-2xl sm:text-3xl font-[500] text-headingPrimary ">
            The Function and Powers of the Scrutiny Committee (SC):
          </h3>
          <p className="px-8 my-7">
            The Scrutiny Committee will examine and recommend the
            Synopsis/topics of MS/MPhil/PhD candidates, regarding validity of
            the Research topic, its scope and facilities available for research
            work at this University. <br />
            To recommend the matters regarding to approve the Guides/Supervisors
            and Co-Guides in the related fields/subjects Shifting of Credit
            Hours of MS/MPhil and PhD candidates from other
            Universities/Institutes in various fields. <br />
            To change or correction in research topics/projects etc, if
            required. <br />
            Other matters related with postgraduate studies within its
            jurisdiction. <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;

const Heading = ({ text }) => {
  return (
    <h1 className="bg-headingPrimary uppercase font-bold sm:text-3xl text-2xl text-center my-5 rounded-full text-white">
      {text}
    </h1>
  );
};
