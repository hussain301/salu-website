import React from "react";
import Annoucement from "./Annoucement";

const AnnoucencementRow = (props) => {
  const announcements = [
    {
      sr: "01",
      isDownloadable: false,
      IsImage: false,
      title:
        "Carrier of the multitelened hussain Ali is on the top maverik so we must follwo",
      dateOfAnnouncement: "2022-09-11",
      lastDate: "2023-01-01",
    },
    {
      sr: "02",
      isDownloadable: true,
      IsImage: false,
      title: "First ",
      dateOfAnnouncement: "date of Announcement",
      lastDate: "last Date",
    },
    {
      sr: "03",
      isDownloadable: false,
      IsImage: true,
      title: "Carrier ",
      dateOfAnnouncement: "date of Announcement",
      lastDate: "last Date",
    },
    {
      sr: "03",
      isDownloadable: false,
      IsImage: false,
      title: "Title",
      dateOfAnnouncement: "date of Announcement",
      lastDate: "last Date",
    },
  ];

  const itemsPerPage = 7;
  const [showItems, setShowItems] = React.useState(
    announcements.slice(0, itemsPerPage)
  );
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isPreviousButtonDisabled, setIsPreviousButtonDisabled] =
    React.useState(true);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = React.useState(
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
    <Annoucement
      showItems={showItems}
      handlePageChangeNext={handlePageChangeNext}
      handlePageChangePre={handlePageChangePre}
      isNextButtonDisabled={isNextButtonDisabled}
      isPreviousButtonDisabled={isPreviousButtonDisabled}
    />
  );
};

export default AnnoucencementRow;
