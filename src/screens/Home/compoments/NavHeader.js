import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavHeader = ({ logo, globe, hamburger, search, profile }) => {
    const navigate = useNavigate();

    const handlePath = () => {
  
        navigate('/Data_post');
    } 
    return (
        <>
            <div className="h-[150px] xs:h-[50px] sm:h-[50px] ">

                <div className="flex flex-row justify-between h-[50px] flex-1 mx-9 my-5 xs:hidden sm:hidden md:ml-0">

                    <div className="flex flex-1 h-[30px] w-[40px] mt-1 ">
                        <img className='pl-[50px]' src={logo} alt="image" />
                        <h3 className="text-red-600 font-bold text-3xl flex justify-center items-center md:hidden">airbnb</h3>
                    </div>

                    <div className="flex flex-1 justify-center items-start list-none w-[50px] md:w-full ">
                        <Link to='/Data_get'><li className="hover:bg-gray-300 cursor-pointer py-2 px-4 rounded-full"><a href="Style"></a>Stays</li></Link>
                        <li onClick={handlePath} className="hover:bg-gray-300 cursor-pointer py-2 px-4 rounded-full"><a href="Experiences"></a>Experiences</li>
                        <Link to='/Data_delete'><li className="hover:bg-gray-300 cursor-pointer py-2 px-4 rounded-full"><a href="Online Experiences"></a>Online Experiences</li></Link>
                    
                    </div>

                    <div className="flex flex-1  justify-end items-center pb-2 w-[50px]  ">
                        <div>
                            <Link to='/Data_puts'><p className="font-normal">Airbnb your home</p></Link>
                        </div>
                        <div className="h-6 w-4 mx-5">
                            <img className="h-full w-full object-contain" src={globe} alt="" />
                        </div>
                        <div>
                            <button className="flex flex-row justify-center items-center border-2 border-gray-300 px-4 py-1 rounded-full"><img className="h-6 w-4 " src={hamburger} alt="" /><img className="h-9 w-7 ml-3" src={profile} alt="" /></button>
                        </div>
                    </div>
                </div>

         
                   
                    
               
                <div className="flex flex-row justify-center items-center bg-white border h-[43%] w-[55%] mx-auto rounded-full shadow-lg shadow-gray-200 xs:hidden sm:hidden md:w-[90%] lg:w-[80%] xl:w-[70%] ab:w-[65%] ef:w-[75%] gh:w-[95%] ij:w-[99%] ">
                    <div className=" w-[26%] xs:hidden ">
                        <div className=""><span className="">Where</span>
                        <span className="hidden xs:hidden md:hidden lg:hidden xl:hidden">Anywhere . Anyweek . Anyguest</span>
                        </div>
                        <input className="outline-none" type="text" placeholder="Search Destination" />

                    </div>
                    <div className="border border-black h-[32px] xs:hidden sm:hidden"></div>
                    <div className="  w-[20%] xs:hidden sm:hidden">
                        <div className="flex flex-col justify-center items-center "><span>check in</span>
                            <span className="text-gray-400">Add dates</span></div>


                    </div>
                    <div className="border border-black h-[32px] xs:hidden sm:hidden"></div>
                    <div className=" w-[20%] xs:hidden sm:hidden">
                        <div className="flex flex-col justify-center items-center"><span>check out</span>
                            <span className="text-gray-400">Add dates</span></div>


                    </div>

                    <div className="border border-black h-[32px] xs:hidden sm:hidden"></div>
                    <div className="w-[26%] flex justify-between  ">
                        <div className="flex flex-col xs:hidden sm:hidden justify-center items-center"><span className="">Who</span>
                            <span className="text-gray-400 pl-5 "> Add Guest</span></div>
                        <div className=""><button className="flex justify-center items-center bg-red-400 rounded-full h-[44px] w-[45px] mt-1 xs:bg-white sm:bg-white"><img className="h-6 w-6 broder-white xs:mr-[190px] sm:mr-[620px]" src={search} alt="" /></button></div>



                    </div>

                   
                </div>

              

                <div className="hidden xs:flex xs:justify-center xs:items-center xs:mt-2 sm:flex sm:justify-center sm:items-center sm:mt-3 ">
                    <div className=" xs:ml-2 xs:w-[70%] sm:ml-2 sm:w-[85%]"><input className="xs:shadow-lg shadow-gray-800  xs:border xs:rounded-full xs:pt-2 xs:h-[50px] xs:w-[98%] sm:shadow-lg shadow-gray-800  sm:border sm:rounded-full sm:pt-2 sm:h-[50px] sm:w-[98%]" type="text" placeholder="" />
                        <button className=" " ><img className="xs:h-6 xs:w-14 xs:mt-[-53px] sm:h-6 sm:w-14 sm:mt-[-53px]" src={search} alt="" /></button>
                        
                        <div className="hidden xs:flex xs:flex-col  xs:pl-[60px] xs:mt-[-70px] xs:text-xs xs:pt-2 xs-mt-[13px]"><span>Anywhere</span>
                            <span className="text-gray-400">Add week . Any guest</span>
                        </div>

                        <div className="hidden xs:hidden sm:flex sm:flex-col  sm:pl-[60px] sm:mt-[-72px] sm:text-xs sm:pt-2 sm-mt-[13px] sm:font-bold"><span>Where to?</span>
                            <span className="text-gray-400">Anywhere . Any week . Add guest</span>
                        </div> 
                    </div>
                    <div className="xs:mr-[10px] xs:mt-2 sm:mr-[10px] sm:mt-2">
                        <img className="xs:h-8 xs:w-8  xs:border xs:border-black xs:rounded-full xs:px-2 xs:py-2
                        sm:h-9 sm:w-9  sm:border sm:border-black sm:rounded-full sm:px-2 sm:py-2" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20style%3D%22display%3Ablock%3Bfill%3Anone%3Bheight%3A16px%3Bwidth%3A16px%3Bstroke%3AcurrentColor%3Bstroke-width%3A3%3Boverflow%3Avisible%22%20aria-hidden%3D%22true%22%20role%3D%22presentation%22%20focusable%3D%22false%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M7%2016H3m26%200H15M29%206h-4m-8%200H3m26%2020h-4M7%2016a4%204%200%201%200%208%200%204%204%200%200%200-8%200zM17%206a4%204%200%201%200%208%200%204%204%200%200%200-8%200zm0%2020a4%204%200%201%200%208%200%204%204%200%200%200-8%200zm0%200H3%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" alt="" />
                    </div>
                </div>

                

            </div >

        </>
    )
}




export default NavHeader