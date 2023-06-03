import Link from 'next/link'
import React,{useState} from 'react'
import Model from './Models/Model'
import ImageModel from './Models/ImageModel'
import Pagination from './helper/Pagination'




const Annoucement = () => {

  const announcements = [
    { sr: '01', isDownloadable: false, IsImage: false, title: 'Carrier of the multitelened hussain Ali is on the top maverik so we must follwo', dateOfAnnouncement: '2022-09-11', lastDate: '2023-01-01' },
    { sr: '02', isDownloadable: true, IsImage: false, title: 'First ', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: true, title: 'Carrier ', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '01', isDownloadable: false, IsImage: false, title: 'Carrier of the multitelened hussain Ali is on the top maverik so we must follwo', dateOfAnnouncement: '2022-09-11', lastDate: '2023-01-01' },
    { sr: '02', isDownloadable: true, IsImage: false, title: 'First ', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: true, title: 'Carrier ', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '01', isDownloadable: false, IsImage: false, title: 'Carrier of the multitelened hussain Ali is on the top maverik so we must follwo', dateOfAnnouncement: '2022-09-11', lastDate: '2023-01-01' },
    { sr: '02', isDownloadable: true, IsImage: false, title: 'First ', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: true, title: 'Carrier ', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '01', isDownloadable: false, IsImage: false, title: 'Carrier of the multitelened hussain Ali is on the top maverik so we must follwo', dateOfAnnouncement: '2022-09-11', lastDate: '2023-01-01' },
    { sr: '02', isDownloadable: true, IsImage: false, title: 'First ', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: true, title: 'Carrier ', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '01', isDownloadable: false, IsImage: false, title: 'Carrier of the multitelened hussain Ali is on the top maverik so we must follwo', dateOfAnnouncement: '2022-09-11', lastDate: '2023-01-01' },
    { sr: '02', isDownloadable: true, IsImage: false, title: 'First ', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: true, title: 'Carrier ', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },

  ]
const itemsPerPage = 7; 
const [showItems, setShowItems] = React.useState(announcements.slice(0, itemsPerPage));
const [currentPage, setCurrentPage] = React.useState(1);
const [isPreviousButtonDisabled, setIsPreviousButtonDisabled] = React.useState(true);
const [isNextButtonDisabled, setIsNextButtonDisabled] = React.useState(false);
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
    <div className='relative  text-center h-[100vh]  rounded-md'>
      <div className='md:p-5 p-3 w-full'>
        <div className='mx-auto sm:w-[90%]'>
          <h1 className="sm:text-4xl mt-2 sm:mt-0 text-2xl uppercase font-[500] relative after:content-[''] after:absolute after:w-8 mb-8 after:bg-[#c5c5c5] after:h-[2px] after:left-0 after:bottom-[-15px]">Important Announcements</h1>
          <div className='overflow-x-auto mt-[30px]  md:border-0 '>
            <table className="table-auto text-left w-full  whitespace-nowrap md:whitespace-normal">
              <thead className=' font-normal text-[#252525] border-b-2 border-orange-400 text-sm'>
                <tr >
                  <th className="font-normal p-2">Sr#</th>
                  <th className="font-normal p-2">Title</th>
                  <th className="font-normal flex justify-center items-center px-2 p-2">Documents <sup>PDF</sup> </th>
               
                </tr>
              </thead>
              <tbody className='text-[12px] text-[#252525]'>
                  {showItems.map((announcement, i) => {
                    return (
                      <tr key={i} className='hover:bg-gray-100 transition-all w-full cursor cursor-pointer'>
                        <td className="py-3 border px-2">{announcement.sr}</td>
                        <td className="py-3 border flex-grow md:text-sm text-[16px] font-[500] text-[#01366a] px-2">{announcement.title}</td>
                        <td className="py-3 border-r border-b flex justify-center items-center px-2" >
                          {announcement.IsImage && <ImageModel />}
                          {!announcement.IsImage && !announcement.isDownloadable && <Model />}
                          {announcement.isDownloadable && <Link href='https://salu.edu.pk/wp-content/uploads/2023/02/FirstMeritListBSIII_2023.pdf' className='border rounded-sm md:text-sm border-blue-900 py-2 px-4 font-[500] bg-blue-900 text-white transition-all'>Download</Link>}
                        </td>
                      </tr>
                      );
                    })}
                  </tbody>
            </table>
          </div>
        </div>
      </div>
   <Pagination items={announcements} handlePageChange={handlePageChangeNext} handlePageChangePre={handlePageChangePre} isNextButtonDisabled={isNextButtonDisabled} isPreviousButtonDisabled={isPreviousButtonDisabled}/>
    </div>
  )
}

export default Annoucement
