import React from 'react'
const Footer = ({ categories, sub_categories, service, shortcut, more }) => {
    return (
        <>
            <div className="h-[600px] bg-gray-100 pl-[40px] mt-[90px] xs:h-[100%] sm:h-[100%] md:h-[100%] lg:h-[100%]">
                <h1 className='mx-10 my-5 pt-[25px] pl-[22px] text-2xl xs:ml-[-32px] sm:ml-[-32px] md:ml-[-32px]'>Inspiration for future getaways</h1>

                <div className='flex flex-row mx-[60px] gap-10 my-2 xs:ml-[-9px] xs:overflow-x-auto sm:ml-[-9px] sm:overflow-x-auto md:ml-[-9px]' >
                    {categories.map((item) => {
                        return <span className='text-[15px]'>{item}</span>
                    })}
                </div>
                <hr />
               


                <div class="grid grid-cols-6 gap-5 my-5 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3">
                    {sub_categories.map((data) => {
                        return (
                            <div className='col-span-1 xs:ml-[-70px] sm:ml-[-70px] md:ml-[-70px]'>
                                <div className='text-[15px] pl-[60px] text-black'>{data?.title}</div>
                                <div className='text-[15px] pl-[60px] text-gray-500'>{data?.sub_title}</div>
                            </div>

                        )
                    })}
                </div>
                <hr />

                <div >
                    <ul className='flex ml-10 flex-row my-10 xs:flex xs:flex-col xs:ml-[-10px] sm:flex sm:flex-col sm:ml-[-25px] md:ml-[-25px]' >
                        <div className=' h-[250px] w-[500px] ml-4 xs:mt-6 xs:ml-0 xs:w-full '>
                            <h1>Support</h1>
                            <li className='font-normal text-gray-500 py-1 xs:py-1 sm:py-1 md:py-1 lg:py-1 xl:py-1'>Help Centre</li>
                            <li className='font-normal text-gray-500 py-1 xs:py-1 sm:py-1 md:py-1 lg:py-1 xl:py-1'>AirCover</li>
                            <li className='font-normal text-gray-500 py-1 xs:py-1 sm:py-1 md:py-1 lg:py-1 xl:py-1'>Anti-discrimination</li>
                            <li className='font-normal text-gray-500 py-1 xs:py-1 sm:py-1 md:py-1 lg:py-1 xl:py-1'>Disability support</li>
                            <li className='font-normal text-gray-500 py-1 xs:py-1 sm:py-1 md:py-1 lg:py-1 xl:py-1'>Cancellation options</li>
                            <li className='font-normal text-gray-500 py-1 xs:py-1 sm:py-1 md:py-1 lg:py-1 xl:py-1'>Report neighbourhood concern</li>

                        </div>

                        <div className=' h-[250px] w-[500px] ml-4 xs:mt-6 xs:ml-0 xs:w-full'>
                            <h1> Hosting</h1>
                            <li className='font-normal text-gray-500 py-1 xs:py-1 sm:py-1 md:py-1 lg:py-1 xl:py-1'>Airbnb your home</li>
                            <li className='font-normal text-gray-500 py-1 xs:py-1 sm:py-1 md:py-1 lg:py-1 xl:py-1'>AirCover for Hosts</li>
                            <li className='font-normal text-gray-500 py-1 xs:py-1 sm:py-1 md:py-1 lg:py-1 xl:py-1'>Hosting resources</li>
                            <li className='font-normal text-gray-500 py-1 xs:py-1 sm:py-1 md:py-1 lg:py-1 xl:py-1'>Community forum</li>
                            <li className='font-normal text-gray-500 py-1 xs:py-1 sm:py-1 md:py-1 lg:py-1 xl:py-1'>Hosting responsibly</li>
                            <li className='font-normal text-gray-500 py-1 xs:py-1 sm:py-1 md:py-1 lg:py-1 xl:py-1'>Join a free Hosting class</li>
                        </div>

                        <div className=' h-[250px] w-[500px] ml-4 xs:mt-6 xs:ml-0 xs:w-full'>
                            <h1> Airbnb</h1>
                            <li className='font-normal text-gray-500 py-1 xs:py-1 sm:py-1 md:py-1 lg:py-1 xl:py-1'>Newsroom</li>
                            <li className='font-normal text-gray-500 py-1 xs:py-1 sm:py-1 md:py-1 lg:py-1 xl:py-1'>New features</li>
                            <li className='font-normal text-gray-500 py-1 xs:py-1 sm:py-1 md:py-1 lg:py-1 xl:py-1'>Careers</li>
                            <li className='font-normal text-gray-500 py-1 xs:py-1 sm:py-1 md:py-1 lg:py-1 xl:py-1'>Investors</li>
                            <li className='font-normal text-gray-500 py-1 xs:py-1 sm:py-1 md:py-1 lg:py-1 xl:py-1'>Airbnb.org emergency stays  </li>
                        </div>                    </ul>
                </div>


            </div>
        </>
    )
}
export default Footer