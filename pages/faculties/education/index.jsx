import React from "react";
import { Button, Heading } from "../../../components";
import Link from "next/link";

const index = () => {
  return (
    <div className="container px-5 my-10 ">
      <div>
        <Heading title="Faculty of Education" />
      </div>
      <div className=" flex flex-col  justify-center my-5  sm:flex-row gap-5">
        <Button>
          <Link href="faculties/education/special-education">
            Department of Special Education
          </Link>
        </Button>
        <Button>
          <Link href="faculties/education/teacher-education">
            Department of Special Education
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default index;
