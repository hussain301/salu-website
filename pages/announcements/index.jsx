import React from 'react'

const index = () => {
  
  const announcements = [

    { sr: '01', title: 'Admission test resutl annoucemnt', dateOfAnnouncement: '2022-09-11', lastDate: '2023-01-01' },
    { sr: '02', title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
    { sr: '03', title: 'Title', dateOfAnnouncement: 'date of Announcement', lastDate: 'last Date' },
 
  ]
  return (
    <div className='md:p-10 sm:p-4 p-3 w-full'>
      <div className='xl:w-[90%] mx-auto sm:w-[90%]'>
        <h1 className="sm:text-4xl mt-5 sm:mt-0 text-3xl font-[500] relative after:content-[''] after:absolute after:w-8 mb-8 after:bg-[#c5c5c5] after:h-[2px] after:left-0 after:bottom-[-15px]">Admissions Announcements</h1>
        <div className='overflow-x-auto mt-[30px] border md:border-0 '>
          <table className="table-auto text-left w-full whitespace-nowrap md:whitespace-normal">
            <thead className=' font-normal text-[#252525] border-b-2 border-orange-400 text-sm'>
              <tr >
                <th className="font-normal p-2">Sr#</th>
                <th className="font-normal p-2">Title</th>
                <th className="font-normal p-2">Documents <sup>PDF</sup> </th>
                <th className="font-normal p-2">Publish Date</th>
                <th className="font-normal p-2">Last Date</th>
              </tr>
            </thead>
            <tbody className='text-[12px]  text-[#252525]  '>
              {announcements.map(announcement => {
                return (
                  <tr key={announcement.sr} className='hover:bg-gray-100 transition-all cursor cursor-pointer'>
                    <td className="py-4 border-t px-2 ">{announcement.sr}</td>
                    <td className="py-4 border-t md:text-sm text-[16px] font-[500] text-[#01366a] px-2">{announcement.title}</td>
                    <td className="py-4 border-t px-2"><button className='border-2 rounded-md md:text-sm text-[#01366a] border-blue-900 py-2 px-4 font-[500] 
                    hover:bg-blue-900 hover:text-white transition-all'>View all Docs</button></td>
                    <td className="py-4 border-t px-2 ">{announcement.dateOfAnnouncement}</td>
                    <td className="py-4 border-t px-2 ">{announcement.lastDate}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default index