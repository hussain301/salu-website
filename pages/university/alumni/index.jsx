import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="container rounded-md my-10">
      <h1 className="md:text-5xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 bg-clip-text text-transparent  text-3xl text-center font-bold capitalize ">
        Shah Abdul Latif University Alumni Association (SALUAA)
      </h1>

      <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 my-10 p-10 flex flex-col justify-center items-center space-y-8">
        <img
          className="rounded-md"
          src="https://salu.edu.pk/wp-content/uploads/2021/03/Qasid-Hussain.png"
          alt="Prof. Dr. Qasid Hussain Mallah"
        />
        <p className="text-center leading-loose">
          <span className="block text-white text-xl font-bold">
            Prof. Dr. Qasid Hussain Mallah
          </span>
          <span className="block text-white text-xl font-medium">
            Director, Shah Abdul Laatif University Alumni Association (SALUAA)
          </span>
          <span className="block text-white text-xl ">
            director.alumni@salu.edu.pk
          </span>
        </p>
      </div>

      <div>
        <p className="leading-loose px-5">
          <strong>
            Shah Abdul Latif University Alumni Association (SALUAA)
          </strong>{" "}
          is an official body of Shah Abdul Latif University Khairpur. If you
          are graduates, of the University who (studied at Department/Center/
          Institute/Affiliated colleges) are invited to join our official
          network of Alumni and stay connected. After becoming a member, you
          will be with us in our special events cultural programs, job fairs and
          other promotional activities. The shah Abdul Latif University is proud
          of its Alumni, and the alumni can rightly be proud of their
          University. <br />
          To become the member of the Alumni you are requested to submit the
          following documents. <br />
          Attested copy of graduation/Post graduation/ M.Phil/ Ph.D degrees.{" "}
          <br />
          Copy of Computerized National Identification Card (CNIC). <br />
          Two recent colour passport size photographs Annual Registration fee is
          Rs. 300 to be paid along with the application form of pay order/Demand
          draft in favour of SAL, Alumni Association. <br />
          Distinguished Life membership fee is Rs. 10,000/. <br />
          Annual Subscription fee for overseas graduates is USD 50 or Distingish
          life membership fee is USD 250. <br />
          Alumni association membership will be awarded and membership card will
          be despatched to your mailing address after verification and necessary
          formalities. <br />
          The application form may be dispatched to the Director , Alumni
          Association, Shah Abdul latif university, Khairpur (Mir’s) Sindh,{" "}
          <br /> Pakistan or emailed at :
          <Link
            className="text-lg text-headingPrimary"
            href="mailto:alumni@salu.edu.pk"
          >
            alumni@salu.edu.pk
          </Link>
        </p>
      </div>
    </div>
  );
};

export default index;
