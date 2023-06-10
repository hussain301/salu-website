import React from "react";
import Button from "../../../components/helper/Button";
import Link from "next/link";

const intro = () => {
  return (
    <div>
      <div className="container">
        <h1 className="md:text-5xl p-5   bg-gradient-to-tl from-yellow-300 via-green-500 bg-clip-text text-transparent  text-3xl text-center font-bold capitalize border-b">
          Kamyab Jawan Talent Hunt Youth Sports League
        </h1>
      </div>

      <div className="grid md:grid-cols-[3fr_1fr] gap-8 place-items-center my-12 px-5 md:px-28">
        <div className="">
          <h2 className="font-bold  text-lg uppercase text-headingPrimary ">
            Introduction
          </h2>
          <p>
            The national youth sports league will provide opportunities for
            youth to get involved in physical activities not only as a
            participant but as a professional player, coaches, leaders and
            volunteer. It will further provide cutting-edge expertise like
            coaching, camping, training and focused fitness to the youth. The
            talent hunt and sport league will provide equal opportunities for
            both men and women for performance optimization. The initiate aims
            social contributions of sports in the youth development of Pakistan
            and motivates youth to participate in sports and physical
            activities. The long-term goal of the initiative is similar to that
            of the Olympic movement i.e. to contribute to building a peaceful
            and better Pakistan by educating youth through sport practiced
            without discrimination of any kind and in the spirit of good
            sportsmanship, mutual understanding, friendship, solidarity and fair
            play. The purpose is to encourage participants to play an active
            part in promoting a genuine and lasting culture of peace, human
            rights and democracy using sport as a catalyst for change. As part
            of ongoing activities, HEC hopes to develop these young people to
            become equipped with the knowledge, skills and attitudes needed to
            live together in peace and harmony and to empower them to discover
            their talent and make the most of their potential. The initiative
            will also help in revenue generation and robust sports and tourism.
          </p>
        </div>
        <div className="justify-self-center  space-y-5 ">
          <Button className="bg-headingPrimary/75 ">
            <Link href="/university/sports-section">
              Back to Sports section
            </Link>
          </Button>
          <br />
          <div className="space-y-2 p-5 border-t border-r border-b border-gray-300 shadow-md">
            <h2 className="text-blue-500 font-medium mb-2">
              Kamyab Jawan Program
            </h2>
            <Button className="bg-orange-500">
              <Link href="/university/sports-section/target-impact">
                Target Impact
              </Link>
            </Button>
            <Button className="bg-orange-500">
              <Link href="/university/sports-section/eligibiltiy-kamyab-jawan-program">
                Eligibility-Kamyab Jawan Program
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default intro;
