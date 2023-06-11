import React from "react";
import { PageBoiler, PageProfileBoiler } from "../../../components";
import Button from "../../../components/helper/Button";
import Link from "next/link";

const index = () => {
  const departments = [
    {
      name: "INSTITUTE OF ENGLISH LANGUAGE & LITERATURE",
      link: "/faculties/arts-languages/english-language-and-literature",
    },
    {
      name: "DEPARTMENT OF SINDHI",
      link: "/faculties/arts-languages/sindhi",
    },
    {
      name: "DEPARTMENT OF URDU",
      link: "/faculties/arts-languages/urdu",
    },
    {
      name: "INSTITUTE OF FOREIGN LANGUAGES",
      link: "/faculties/arts-languages/foreign-languages",
    },
  ];

  return (
    <div className="container rounded-md my-10">
      <PageProfileBoiler
        title="Faculty of Arts & Languages"
        name="Prof. Dr. Ghulam Mustafa Mashori"
        image="/Faculties/arts-lang/EnglishTeam/G-Mustafa-Mashori.jpg"
        email=""
        designation="DEAN"
      />
      <div className="container flex justify-between md:flex-row gap-5 flex-col px-5">
        {departments.map((department, index) => (
          <Button className="md:text-sm text-xs p-5" key={index}>
            <Link href={department.link}>{department.name}</Link>{" "}
          </Button>
        ))}
      </div>

      <div className="container my-10 px-5">
        <div>
          <h2 className="uppercase font-bold my-2  text-headingPrimary text-base">
            SEMESTER RULES & REGULATIONS
          </h2>
          <h3 className="uppercase font  text-base">
            FACULTY OF ARTS & LANGUAGES (APPLICABLE FOR THE ACADEMIC YEAR 2017
            AND ONWARDS)
          </h3>
          <p>
            New semester rules shall be applicable for all students enrolling
            for BS (Part-I) and M.A (Previous) degree programs offered by the
            Faculty of Arts & Languages from academic year 2017 and onwards.
          </p>
        </div>

        <div class="container my-10 ">
          <div class="my-5 ">
            <h2>
              <strong>1.Grading Plan</strong>
            </h2>
          </div>
          <div class="mx-auto w-full">
            <table class="table-auto w-full">
              <thead>
                <tr>
                  <th class="px-4 py-2">Letters</th>
                  <th class="px-4 py-2">Numerical Marks</th>
                  <th class="px-4 py-2">Grade Point</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border px-4 py-2">A</td>
                  <td class="border px-4 py-2">87-100</td>
                  <td class="border px-4 py-2">4.0</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">B</td>
                  <td class="border px-4 py-2">72-86</td>
                  <td class="border px-4 py-2">3 to 3.9</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">C</td>
                  <td class="border px-4 py-2">60-71</td>
                  <td class="border px-4 py-2">2 to 2.9</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">F</td>
                  <td class="border px-4 py-2">Below-60</td>
                  <td class="border px-4 py-2">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="container mx-auto my-10 ">
          <div class="my-5 text-center">
            <h2 class="text-2xl font-bold">2. G.P.A</h2>
          </div>
          <div class="mx-auto w-full">
            <p class="my-5">
              The Grade Point Average (GPA) and Cumulative Grade Point Average
              (CGPA) of each student shall be determined as under:
            </p>
            <ol class="list-decimal list-inside">
              <li class="my-3">
                <span class="font-bold">G.P.A. Per Semester:</span> Total GP of
                courses per semester / Total No. of courses per semester
              </li>
              <li class="my-3">
                <span class="font-bold">G.P.A. Academic Year:</span> G.P.A of
                Two semesters / 2
              </li>
              <li class="my-3">
                <span class="font-bold">G.P.A. of n Academic Years:</span> G.P.A
                of n Academic Years / Number of Years
              </li>
              <li class="my-3">
                In case of allowing probation in a course, and promotion in the
                next semester to a student, if the second fraction after decimal
                is 5 or more, it will be taken into account by raising the first
                fraction to the next higher digit that will be as G.P.A 0.95 or
                0.96 can be raised to 1.0.
              </li>
              <li class="my-3">
                <span class="font-bold">
                  C.G.P.A. and Percentage in Marks Sheet:
                </span>{" "}
                The C.G.P.A. of student shall be recorded in the Marks sheet/
                Transcript along with overall percentage obtained by the student
                in four semesters.
              </li>
              <li class="my-3">
                No “make up” exam is allowed in any course under any
                circumstance.
              </li>
            </ol>
          </div>
        </div>
        {/* table NO 2 */}
        <div className=" container">
          <table class="table-auto w-full">
            <thead>
              <tr>
                <th class="px-4 py-2">Marks in %</th>
                <th class="px-4 py-2">Grade Point (G.P.)</th>
                <th class="px-4 py-2">Grade</th>
                <th class="px-4 py-2">Marks in %</th>
                <th class="px-4 py-2">Grade Point (G.P.)</th>
                <th class="px-4 py-2">Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border px-4 py-2">60.0</td>
                <td class="border px-4 py-2">2.0</td>
                <td class="border px-4 py-2">C</td>
                <td class="border px-4 py-2">72.0</td>
                <td class="border px-4 py-2">3.0</td>
                <td class="border px-4 py-2">B</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">61.5</td>
                <td class="border px-4 py-2">2.1</td>
                <td class="border px-4 py-2">-</td>
                <td class="border px-4 py-2">73.5</td>
                <td class="border px-4 py-2">3.1</td>
                <td class="border px-4 py-2">-</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">63.0</td>
                <td class="border px-4 py-2">2.2</td>
                <td class="border px-4 py-2">-</td>
                <td class="border px-4 py-2">75.0</td>
                <td class="border px-4 py-2">3.2</td>
                <td class="border px-4 py-2">-</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">64.5</td>
                <td class="border px-4 py-2">2.3</td>
                <td class="border px-4 py-2">-</td>
                <td class="border px-4 py-2">76.5</td>
                <td class="border px-4 py-2">3.3</td>
                <td class="border px-4 py-2">-</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">66.0</td>
                <td class="border px-4 py-2">2.5</td>
                <td class="border px-4 py-2">-</td>
                <td class="border px-4 py-2">78.0</td>
                <td class="border px-4 py-2">3.4</td>
                <td class="border px-4 py-2">-</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">67.5</td>
                <td class="border px-4 py-2">2.6</td>
                <td class="border px-4 py-2">-</td>
                <td class="border px-4 py-2">79.5</td>
                <td class="border px-4 py-2">3.5</td>
                <td class="border px-4 py-2">-</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">69.0</td>
                <td class="border px-4 py-2">2.7</td>
                <td class="border px-4 py-2">-</td>
                <td class="border px-4 py-2">81.0</td>
                <td class="border px-4 py-2">3.6</td>
                <td class="border px-4 py-2">-</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">70.5</td>
                <td class="border px-4 py-2">2.8</td>
                <td class="border px-4 py-2">-</td>
                <td class="border px-4 py-2">82.5</td>
                <td class="border px-4 py-2">3.7</td>
                <td class="border px-4 py-2">-</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">-</td>
                <td class="border px-4 py-2">-</td>
                <td class="border px-4 py-2">-</td>
                <td class="border px-4 py-2">84.0</td>
                <td class="border px-4 py-2">3.8</td>
                <td class="border px-4 py-2">-</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">-</td>
                <td class="border px-4 py-2">-</td>
                <td class="border px-4 py-2">-</td>
                <td class="border px-4 py-2">85.5</td>
                <td class="border px-4 py-2">3.9</td>
                <td class="border px-4 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="container mx-auto my-8 ">
          <h1 class="text-2xl font-bold mb-4">Grade Point (GP)</h1>

          <h2 class="text-xl font-bold mb-4">Probation:</h2>
          <p>
            A student who is fail in any course shall be allowed probation to
            pass the course. No semester break will be allowed to the
            probationers.
          </p>

          <h3 class="text-lg font-bold mt-8 mb-4">Conditions for Probation:</h3>
          <ol class="list-decimal pl-8 mb-4">
            <li>
              A student failing to obtain a minimum G.P.A of 2.0 in any semester
              will be placed on probation provided he/she shall not be fail in
              more than three courses and his/her G.P.A not less than 1.33.
            </li>
            <li>
              Two consecutive probations are permissible in each course to pass
              or to maintain GPA of 2.0.
            </li>
            <li>
              A student who is fail in four courses in any semester or did not
              maintain G.P.A 1.33 in a semester or did not maintain continuity
              in appearing in the Examinations but avail semester break he/she
              shall be placed on term back from the rolls of the Department. A
              student accumulating three consecutive probations shall cease to
              be the student of the University.
            </li>
            <li>
              A student failing to maintain GPA of 2.0 or fail in any course but
              maintaining GPA 2.0, shall be placed on probation and he/she shall
              be promoted to next semester provided his/her GPA is not less than
              1.33.
            </li>
            <li>
              A student placed on probation shall repeat all the courses in
              which he/she is fail and/or such other courses as recommended by
              the department as soon as the course(s) are offered next semester.
            </li>
            <li>
              A student who is fail in four courses in any semester or could not
              maintain G.P.A 1.33 in a semester or could not maintain continuity
              in appearing in the Examinations but avail semester break he/she
              shall be dropped from the rolls of the Faculty of Arts & Languages
              Main campus.
            </li>
          </ol>

          <h2 class="text-xl font-bold mt-8 mb-4">Restoration of Admission:</h2>
          <p>
            Student achieving less than GPA 1.33 and declared &rdquo;drop&rdquo;
            in any semester, may be provided with one chance to repeat the same
            semester in order to improve GPA up to or more than 1.33, till that
            he/she will not promoted in the next semester for which he/she has
            to submit a fresh application for restoration of admission and to
            pay full fees of the academic year.
          </p>

          <h2 class="text-xl font-bold mt-8 mb-4">
            Improvement of Grade &rsquo;C&rsquo;:
          </h2>
          <p>
            A student whose Degree in Grade C or a student shall be allowed to
            improve his/her grade C in the course(s) in any semester.
          </p>

          <table className="w-full my-5">
            <tbody>
              <tr>
                <td className="border px-4 py-2">Semester Final Test Marks</td>
                <td className="border px-4 py-2">80</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Mid Term Test Marks</td>
                <td className="border px-4 py-2">20</td>
              </tr>
            </tbody>
          </table>
          <div>
            <h2 class="text-xl font-bold mt-8 mb-4">Course Marks Break-up</h2>
            <p className="leading-relaxed">
              1. Each credit course carries 100 marks of which 50 marks are
              reserved for mid Term, attendance & assignment marks and awarded
              by teacher during the conduct of classes and the remaining 50
              marks are for the Final Test Examination.
              <br />
              2. Minimum pass marks in each course are 60%.
              <br />
              3. The break-up of marks of each course is as under:
            </p>
            <div className="px-14 mt-5 mb-8">
              <table class="w-full">
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">Mid Test Marks</td>
                    <td class="border px-4 py-2">30</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">Final Test Marks</td>
                    <td class="border px-4 py-2">50</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">Assignment Marks</td>
                    <td class="border px-4 py-2">05</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">Presentation Marks</td>
                    <td class="border px-4 py-2">10</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">Attendance Marks</td>
                    <td class="border px-4 py-2">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="container mx-auto p-8">
          <div class="bg-white rounded-lg p-4">
            <h2 class="text-xl font-bold mb-2">Re-assessment Application</h2>
            <p>
              A student who is a failure/improver or on probation shall have to
              pay Examination Fee Rs. 500.00 (Rupees five hundred) for each
              course. If a student applies for re-assessment, their application
              will be entertained within 7 days of the announcement of the
              result by the Controller of Examinations with the payment of Rs.
              500/- per subject. However, if their request is found genuine and
              marks are enhanced, the fees will be refunded to the student. The
              decision of the Semester Committee, comprised of three most senior
              teachers of the department, will be final.
            </p>
          </div>

          <div class="bg-white rounded-lg p-4 mt-4">
            <h2 class="text-xl font-bold mb-2">Attendance Requirement</h2>
            <p>
              The class attendance requirement for each student shall be 75
              percent in each course to become eligible for appearing in the Mid
              Term & Final Test Examinations.
            </p>
          </div>

          <div class="bg-white rounded-lg p-4 mt-4">
            <h2 class="text-xl font-bold mb-2">
              Short Attendance & Restoration of Admission in Semester
            </h2>
            <p>
              A student who fails short attendance in any case will not be
              eligible to appear in Mid Term or final test examination. That
              student&apos;s case shall be examined by the chairman or on
              medical grounds. If genuine, he/she will be recommended for the
              restoration of admission to continue education from that semester
              from where he/she discontinued education.
            </p>
          </div>

          <div class="bg-white rounded-lg p-4 mt-4">
            <h2 class="text-xl font-bold mb-2">
              Feedback System and Assessment of Scripts
            </h2>
            <p>
              In the semester system, the teacher shall return the scripts of
              Mid Term Test after assessment of the test within a week to the
              student for feedback.
            </p>
          </div>

          <div class="bg-white rounded-lg p-4 mt-4">
            <h2 class="text-xl font-bold mb-2">Paper Review Day</h2>
            <p>
              The teacher will fix a &quot;Paper Review Day&quot; for students
              within twelve days after the conduct of the final test paper to
              discuss the result. Later, he/she will submit the result to the
              Chairman/Director for further process to the Controller of
              Examinations.
            </p>
          </div>

          <div class="bg-white rounded-lg p-4 mt-4">
            <h2 class="text-xl font-bold mb-2">
              Submission of Final Test Result
            </h2>
            <p>
              Once the &quot;Paper Review Day&quot; is held, the result of the
              Final Test will be displayed by the teacher on the notice board
              within fifteen days after the conduct of the paper. The teacher
              will submit assessed scripts of Final Test after a period of two
              months.
            </p>
          </div>

          <div class="bg-white rounded-lg p-4 mt-4">
            <h2 class="text-xl font-bold mb-2">
              Declaration of the Result by Controller
            </h2>
            <p>
              All the HoDs will submit the result of the final test to the
              Controller of Examination within eighteen days of the conduct of
              the paper. Subsequently, the Controller of Examination will
              finalize and announce the final result within forty-five days of
              the conduct of the last paper.
            </p>
          </div>

          <div class="bg-white rounded-lg p-4 mt-4">
            <h2 class="text-xl font-bold mb-2">Semester Committee</h2>
            <p>
              If any student applies for re-assessment, their application will
              be entertained within 7 days of the announcement of the result by
              the Controller of Examinations with the payment of Rs. 500/- per
              subject. However, if their request is found genuine and marks are
              enhanced, the fees will be refunded to the student. The Semester
              Committee will be comprised of three most senior teachers of the
              department. The decision of the Semester Committee will be final.
            </p>
          </div>

          <div class="bg-white rounded-lg p-4 mt-4">
            <h2 class="text-xl font-bold mb-2">
              Vice Chancellor&apos;s Authority
            </h2>
            <p>
              The Vice Chancellor has powers to issue orders and instructions
              where the regulations are silent. In cases of ambiguity or
              discrepancy regarding the interpretation of semester rules and
              regulations, the decision of the Vice Chancellor shall be final.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
