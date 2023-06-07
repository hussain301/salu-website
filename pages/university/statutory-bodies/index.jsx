import React from "react";
import { Overlay } from "../../../components";
import Table from "./table";
import data from "../../../data/tableData";

const index = () => {
  return (
    <div>
      <Overlay
        text="Functions / Duties and Powers of Statutory Bodies"
        url="/stats-bg.svg"
      />
      <div className="container bg-green-500">
        <Heading text="SENATE" />

        <div className="md:px-28 px-5 space-y-5 my-10">
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

        <div className="container px-5 my-5 space-y-5">
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
        <div className="container">
          <Heading text="ACADEMIC COUNCIL" />
          <h3 className="text-headingPrimary sm:text-3xl text-2xl my-5  font-[500] ">
            The Function and Powers of the Academic Council:
          </h3>
        </div>
      </div>
    </div>
  );
};

export default index;

const Heading = ({ text }) => {
  return (
    <h1 className="bg-headingPrimary uppercase font-bold text-3xl text-center my-5 rounded-full text-white">
      {text}
    </h1>
  );
};
