import React from "react";
import { PageProfileBoiler } from "../../../components";

const index = () => {
  return (
    <div className="container rounded-md my-10">
      <PageProfileBoiler
        title="sports section"
        image="https://salu.edu.pk/wp-content/uploads/2021/08/DSC_0011-e1628437640471.jpg"
        name="Mr. Muhammad Murad Pirzada"
        designation="Director Physical Education & Sports, Shah Abdul Latif University, Khairpur"
        email="Email:- dpe.salu@gmail.com"
      />
      <div className="container  whitespace-normal ">
        <p className="leading-relaxed space-y-8 md:mx-28 mx-5">
          <span className="block">
            <strong className="py-5 text-lg text-headingPrimary uppercase">
              Introduction
            </strong>{" "}
            <br />
            The students enrolled in the University are given maximum facilities
            in almost all games as well as sports at national level particularly
            in Boxing, Table Tennis, Badminton, Athletics, Revering, Cricket,
            Volleyball, Cycling, Hockey, Chess, Squash, Judo and Foot Ball. The
            Sports Section is responsible to entertain the students of the
            University by arranging indoor and outdoor sports events at hostel,
            department, faculty and University level. The University also
            organizes and participates in inter-varsity sports events at
            provincial and national level.
          </span>
          <span className="block">
            <strong className="py-5 text-lg text-headingPrimary uppercase">
              PARTICIPATION
            </strong>{" "}
            <br />
            The best players are selected every year who aspire to participate
            in the Inter-varsity tournaments organized by various universities
            in collaboration with Higher Education Commission, Islamabad.
          </span>
          <span className="block">
            <strong className="py-5 text-lg text-headingPrimary uppercase">
              SPORTS COMPLEX
            </strong>{" "}
            <br />
            The well equipped sports complex is providing facility of all indoor
            games like Badminton, Table Tennis, Basketball, Volleyball and
            Squash.
          </span>
          <span className="block">
            <strong className="py-5 text-lg text-headingPrimary uppercase">
              FITNESS CENTER
            </strong>{" "}
            <br />
            The SALU Sports Fitness Center is well equipped with modern exercise
            machines. This center is functioning properly in morning 9:00 AM to
            1:30 PM and during evening 3:00 PM to 7:00 PM. The purpose of this
            center is to provide fitness facilities to the students, players,
            teachers, officers and families of residential colony and all
            hostlers (girls and boys) students of the University.
          </span>
          <span className="block">
            <strong className="py-5 text-lg text-headingPrimary uppercase">
              SPORTS GROUND
            </strong>{" "}
            <br />A sports ground is available in the University on which
            various out door games are being organized by the Sports Section
            like Cricket, Foot ball, Hockey, Athletics, Tug of War, Malah,
            Kabadi for faculty members and officers as well as students.
          </span>
        </p>
      </div>
    </div>
  );
};

export default index;
