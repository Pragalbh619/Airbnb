import React, { useRef } from "react";
const FilterTag = ({ img_urls }) => {
    const sliderRef = useRef(null)
    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= 100
        }
    }
    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += 100
        }
    }
    return (

        <><hr className="xs:hidden sm:hidden" />
            <div className=" px-16 py-5 xs:px-8 sm:px-8">

                <div className="flex justify-between">
                    <div className=" ml-5 w-[75%] gap-10 flex flex-row relative xs:ml-1.5 xs:w-full sm:ml-1.5 sm:w-full md:w-[65%] md:ml-0 lg:w-[70%] xl:w-[72%] ab:w-[72%]">
                        <div className="h-5 w-5 absolute top-3 left-0" onClick={scrollLeft} ><img className="border border-black rounded-full xs:hidden" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20aria-hidden%3D%22true%22%20role%3D%22presentation%22%20focusable%3D%22false%22%20style%3D%22display%3A%20block%3B%20fill%3A%20none%3B%20height%3A%2012px%3B%20width%3A%2012px%3B%20stroke%3A%20currentcolor%3B%20stroke-width%3A%204%3B%20overflow%3A%20visible%3B%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M20%2028%208.7%2016.7a1%201%200%200%201%200-1.4L20%204%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" alt="" /></div>
                        <div className="flex overflow-x-auto  gap-3 xs:overflow-x-auto xs-gap-0.5 sm:gap-1 md:gap-2 lg:gap-1 xl:gap-0.5"  ref={sliderRef}>
                            {img_urls.map((item) => {
                                return (
                                    <>
                                        <div className="flex flex-col justify-center items-center min-w-[100px]">
                                            <div className=" flex justify-center"><img className="h-[25px] flex justify-center" src={item?.url} alt="" /></div>
                                            <div className="mt-1"><p className="text-[12px]">{item?.title}</p></div>
                                        </div>

                                    </>
                                )
                            })}
                         
                        </div>
                        <div className="h-5 w-5 absolute top-3 right-1" onClick={scrollRight}><img className="border border-black rounded-full xs:hidden" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20aria-hidden%3D%22true%22%20role%3D%22presentation%22%20focusable%3D%22false%22%20style%3D%22display%3A%20block%3B%20fill%3A%20none%3B%20height%3A%2012px%3B%20width%3A%2012px%3B%20stroke%3A%20currentcolor%3B%20stroke-width%3A%204%3B%20overflow%3A%20visible%3B%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22m12%204%2011.3%2011.3a1%201%200%200%201%200%201.4L12%2028%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" alt="" /></div>
                        </div>



                    <div className="flex justify-center items-center xs:hidden gap-4 sm:hidden md:gap-1 lg:gap-0.5 xl:gap-0.5">
                        <div className="flex border px-4 py-3 rounded-lg mr-2 md:w-[90px] lg:w-[100px] xl:w-[100px]">
                            <img className="h-5 w-5 pt-1 mr-2" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20style%3D%22display%3Ablock%3Bfill%3Anone%3Bheight%3A16px%3Bwidth%3A16px%3Bstroke%3AcurrentColor%3Bstroke-width%3A3%3Boverflow%3Avisible%22%20aria-hidden%3D%22true%22%20role%3D%22presentation%22%20focusable%3D%22false%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M7%2016H3m26%200H15M29%206h-4m-8%200H3m26%2020h-4M7%2016a4%204%200%201%200%208%200%204%204%200%200%200-8%200zM17%206a4%204%200%201%200%208%200%204%204%200%200%200-8%200zm0%2020a4%204%200%201%200%208%200%204%204%200%200%200-8%200zm0%200H3%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" alt="" />
                            <button className="md:pr-2 lg:text-xs xl:text-xs cd:text-xs">Filter</button>
                        </div>


                        <div className="flex justify-center items-center border rounded-lg xs:hidden mr-4 lg:px-0.5">
                            <button className="flex  md:w-[220px] md:text-sm md:pl-2 lg:w-[180px] lg:text-xs xl:w-[180px] xl:text-xs cd:text-xs">Display total before taxes</button>
                            <img className=" h-12 w-10 " src="https://cdn-icons-png.flaticon.com/128/5720/5720465.png" alt="" />

                        </div>
                    </div>




                </div>



            </div>
        </>
    )
}
export default FilterTag