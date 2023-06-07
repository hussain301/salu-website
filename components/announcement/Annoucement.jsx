import Link from "next/link";
import React, { useState } from "react";
import Model from "../Models/Model";
import ImageModel from "../Models/ImageModel";
import { config, urlFor } from "../../sanity";
import Pagination from "../helper/Pagination";
import { getFile } from "@sanity/asset-utils";

const Annoucement = ({ announcements }) => {
  console.log(announcements);

  const itemsPerPage = 5;
  const [showItems, setShowItems] = useState(
    announcements.slice(0, itemsPerPage)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [isPreviousButtonDisabled, setIsPreviousButtonDisabled] =
    useState(true);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(
    announcements.length < itemsPerPage
  );
  const handlePageChangeNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    const startIndex = (currentPage + 1) * itemsPerPage - itemsPerPage;
    const endIndex = (currentPage + 1) * itemsPerPage;
    const newShowItems = announcements.slice(startIndex, endIndex);
    setShowItems(newShowItems);

    if (endIndex >= announcements.length) {
      setIsNextButtonDisabled(true);
    }
    setIsPreviousButtonDisabled(false);
  };

  const handlePageChangePre = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    const startIndex = (currentPage - 1) * itemsPerPage - itemsPerPage;
    const endIndex = (currentPage - 1) * itemsPerPage;
    const newShowItems = announcements.slice(startIndex, endIndex);
    setShowItems(newShowItems);

    if (startIndex <= 0) {
      setIsPreviousButtonDisabled(true);
    }

    setIsNextButtonDisabled(false);
  };

  return (
    <div className="relative  text-center h-auto py-10  rounded-md">
      <div className="w-full pb-5">
        <div className="mx-auto sm:w-[90%]">
          <h1 className="sm:text-4xl mt-2 sm:mt-0 text-2xl uppercase font-[500] relative after:content-[''] after:absolute after:w-8 mb-8 after:bg-[#c5c5c5] after:h-[2px] after:left-0 after:bottom-[-15px]">
            Important Announcements
          </h1>
          <div className="overflow-x-auto mt-[30px]  md:border-0 ">
            <table className="table-auto text-left w-full  whitespace-nowrap md:whitespace-normal">
              <thead className=" font-normal text-[#252525] border-b-2 border-orange-400 text-sm">
                <tr>
                  <th className="font-normal p-2">Title</th>
                  <th className="font-normal flex justify-center items-center px-2 p-2">
                    Documents <sup>PDF</sup>{" "}
                  </th>
                </tr>
              </thead>
              <tbody className="text-[12px] text-[#252525]">
                {showItems.map((announcement, i) => {
                  const ref = announcements[i]?.pdf?.asset;
                  let asset;
                  let downloadUrl;
                  if (ref) {
                    asset = getFile(ref, config);
                    downloadUrl = asset.asset.url;
                  }
                  return (
                    <tr
                      key={i}
                      className="hover:bg-gray-100 transition-all w-full cursor cursor-pointer"
                    >
                      <td className="py-3 border flex-grow md:text-sm text-[16px] font-[500] text-[#01366a] px-2">
                        {announcement.title}
                      </td>
                      <td className="py-3 border-r border-b flex justify-center items-center px-2">
                        {announcement.isImage && (
                          <ImageModel
                            image={urlFor(announcement.image).url()}
                          />
                        )}
                        {!announcement.isImage &&
                          !announcement.isPdf &&
                          !announcement.isLink && <Model />}
                        {announcement.isPdf && (
                          <Link
                            href={downloadUrl}
                            className="border rounded-sm md:text-sm border-blue-900 py-2 px-4 font-[500] bg-blue-900 text-white transition-all"
                          >
                            {announcement.button}
                          </Link>
                        )}
                        {announcement.isLink && (
                          <Link
                            href={announcement.link}
                            className="border rounded-sm md:text-sm border-blue-900 py-2 px-4 font-[500] bg-blue-900 text-white transition-all"
                          >
                            {announcement.button}
                          </Link>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination
        handlePageChangeNext={handlePageChangeNext}
        handlePageChangePre={handlePageChangePre}
        isNextButtonDisabled={isNextButtonDisabled}
        isPreviousButtonDisabled={isPreviousButtonDisabled}
      />
    </div>
  );
};

export default Annoucement;
