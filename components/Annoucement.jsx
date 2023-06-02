import Link from 'next/link'
import React from 'react'
import Model from './Models/Model'
import ImageModel from './Models/ImageModel'
import Pagination from './helper/Pagination'



const Annoucement = () => {
  const announcements = [
    { sr: '01', isDownloadable: false, IsImage: false, title: 'Carrier Opportunities: Teaching Assistants (Botany, Sindhi and Physics) Required for SALU ', dateOfAnnouncement: '2022-09-11', lastDate: '2023-01-01' },
    { sr: '02', isDownloadable: true, IsImage: false, title: 'First Merit List of Undergraduate Admission, 2023 Ghotki Campus, Shah Abdul Latif University, Khairpur', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: true, title: 'Carrier Opportunities: Teaching Assistants (Botany, Sindhi and Physics) Required for SALU', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', isDownloadable: false, IsImage: false, title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },

  ]
  return (
    <div className='relative  text-center h-[100vh] overflow-y-scroll rounded-md'>
      <div className='p-3 w-full'>
        <div className='mx-auto sm:w-[90%]'>
          <h1 className="sm:text-4xl mt-2 sm:mt-0 text-2xl uppercase font-[500] relative after:content-[''] after:absolute after:w-8 mb-8 after:bg-[#c5c5c5] after:h-[2px] after:left-0 after:bottom-[-15px]">Important Announcements</h1>
          <div className='overflow-x-auto mt-[30px]  md:border-0 '>
            <table className="table-auto text-left w-full  whitespace-nowrap md:whitespace-normal">
              <thead className=' font-normal text-[#252525] border-b-2 border-orange-400 text-sm'>
                <tr >
                  <th className="font-normal p-2">Sr#</th>
                  <th className="font-normal p-2">Title</th>
                  <th className="font-normal p-2">Documents <sup>PDF</sup> </th>
               
                </tr>
              </thead>
              <tbody className='text-[12px] text-[#252525]  '>
                {announcements.map((announcement,i) => {
                  return (
                    <tr key={i} className='hover:bg-gray-100 transition-all  w-full cursor cursor-pointer'>
                      <td className="py-3 border px-2 ">{announcement.sr}</td>
                      <td className="py-3 border md:text-sm text-[16px] font-[500] text-[#01366a] px-2">{announcement.title}</td>
                      <td className="py-3 border-b  flex justify-start px-2">

                        {announcement.IsImage && <ImageModel />}
                        {!announcement.IsImage && !announcement.isDownloadable && <Model />}
                        {announcement.isDownloadable && <Link href='https://salu.edu.pk/wp-content/uploads/2023/02/FirstMeritListBSIII_2023.pdf' className='border rounded-sm md:text-sm border-blue-900 py-2 px-4 font-[500] 
                    bg-blue-900 text-white transition-all'>Download</Link>}


                      </td>
                     
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination items = {announcements} />
      {/* <Link href='https://salu.edu.pk/wp-content/uploads/2022/11/web-ad.jpg' className='text-white font-bold text-3xl '>Important Annoucements</Link> */}
    </div>
  )
}

export default Annoucement