import React from "react";
import { Button, PageProfileBoiler } from "../../../components";
import Link from "next/link";

const index = () => {
  const deps = [
    {
      name: "Department of Computer Science",
      link: "physical-sciences/computer-science",
    },
    {
      name: "Department of Archaeology",
      link: "physical-sciences/archaeology",
    },
    { name: "Department of Mathematics", link: "physical-sciences/mathmatics" },
    {
      name: "Department of Physics and Electronics",
      link: "physical-sciences/physics-electronics",
    },
    { name: "Department of Statistics", link: "physical-sciences/statistics" },
    { name: "Department of Geography", link: "physical-sciences/geography" },
  ];

  return (
    <div className="container px-5 my-10 ">
      <div>
        <PageProfileBoiler
          title="Faculty of Physical Sciences"
          name="Prof. Dr. Qasid Hussain Mallah"
          designation="DEAN"
          email="director.alumni@salu.edu.pk"
          image="https://salu.edu.pk/wp-content/uploads/2021/03/Qasid-Hussain.png"
        />
      </div>
      <div className=" flex flex-col  justify-center my-5 flex-wrap sm:flex-row gap-5">
        {deps.map((dep, i) => (
          <Button key={i}>
            <Link href={dep.link}>{dep.name}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default index;
