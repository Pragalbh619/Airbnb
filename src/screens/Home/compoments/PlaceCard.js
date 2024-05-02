import React from "react";
const PlaceCard = ({ img, location, distance, available_date, price }) => {
    return (
        <>
            <div className="h-[350px] flex-1 ">
                <div className="h-[300px] mb-3 relative ">
                    <img src={img} alt="" className="h-[300px] w-full rounded-2xl" />
                    <img className="h-6 w-6 absolute top-[5px] right-[10px]" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20aria-hidden%3D%22true%22%20role%3D%22presentation%22%20focusable%3D%22false%22%20style%3D%22display%3A%20block%3B%20fill%3A%20rgba(0%2C%200%2C%200%2C%200.5)%3B%20height%3A%2024px%3B%20width%3A%2024px%3B%20stroke%3A%20var(--linaria-theme_palette-icon-primary-inverse)%3B%20stroke-width%3A%202%3B%20overflow%3A%20visible%3B%22%3E%3Cpath%20d%3D%22M16%2028c7-4.73%2014-10%2014-17a6.98%206.98%200%200%200-7-7c-1.8%200-3.58.68-4.95%202.05L16%208.1l-2.05-2.05a6.98%206.98%200%200%200-9.9%200A6.98%206.98%200%200%200%202%2011c0%207%207%2012.27%2014%2017z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" alt="" />
                </div>

                <div className="flex flex-col xs:pb-10 sm:pb-10 md:pb-10">
                    <div className="flex justify-between"><p className="font-normal">{location}</p><div className="flex gap-2 justify-center items-center"><p>4.4</p><img className="h-4 w-4" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20aria-hidden%3D%22true%22%20role%3D%22presentation%22%20focusable%3D%22false%22%20style%3D%22display%3A%20block%3B%20height%3A%2012px%3B%20width%3A%2012px%3B%20fill%3A%20currentcolor%3B%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22m15.1%201.58-4.13%208.88-9.86%201.27a1%201%200%200%200-.54%201.74l7.3%206.57-1.97%209.85a1%201%200%200%200%201.48%201.06l8.62-5%208.63%205a1%201%200%200%200%201.48-1.06l-1.97-9.85%207.3-6.57a1%201%200%200%200-.55-1.73l-9.86-1.28-4.12-8.88a1%201%200%200%200-1.82%200z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" alt="" /></div></div>
                    
                    <p className="text-gray-500">{distance}</p>
                    <p className="text-gray-500">{available_date}</p>
                    <p className="font-normal">{price}</p>
                </div>

            </div>
        </>
    )
}
export default PlaceCard