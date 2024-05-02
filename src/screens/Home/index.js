import React from "react";
import NavHeader from "./compoments/NavHeader";
import FilterTag from "./compoments/FilterTag";
import PlaceCard from "./compoments/PlaceCard";
import Footer from "./compoments/Footer";
import Data_get from "./Pages/Data_get";
import Data_post from "./Pages/Data_post";
import Data_delete from "./Pages/Data_delete";
import Data_puts from "./Pages/Data_puts";
const Home = () => {
    return (
        <>
            <NavHeader logo={"https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png"}
                globe={"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%20aria-hidden%3D%22true%22%20role%3D%22presentation%22%20focusable%3D%22false%22%20style%3D%22display%3A%20block%3B%20height%3A%2016px%3B%20width%3A%2016px%3B%20fill%3A%20currentcolor%3B%22%3E%3Cpath%20d%3D%22M8%20.25a7.77%207.77%200%200%201%207.75%207.78%207.75%207.75%200%200%201-7.52%207.72h-.25A7.75%207.75%200%200%201%20.25%208.24v-.25A7.75%207.75%200%200%201%208%20.25zm1.95%208.5h-3.9c.15%202.9%201.17%205.34%201.88%205.5H8c.68%200%201.72-2.37%201.93-5.23zm4.26%200h-2.76c-.09%201.96-.53%203.78-1.18%205.08A6.26%206.26%200%200%200%2014.17%209zm-9.67%200H1.8a6.26%206.26%200%200%200%203.94%205.08%2012.59%2012.59%200%200%201-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26%206.26%200%200%200-3.83%205.03h2.75c.09-1.83.48-3.54%201.06-4.81zm2.25-.42c-.7%200-1.78%202.51-1.94%205.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95%2012.95%200%200%201%201.15%205.02h2.75a6.28%206.28%200%200%200-3.93-5.07z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"}
                hamburger={"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20aria-hidden%3D%22true%22%20role%3D%22presentation%22%20focusable%3D%22false%22%20style%3D%22display%3A%20block%3B%20fill%3A%20none%3B%20height%3A%2016px%3B%20width%3A%2016px%3B%20stroke%3A%20currentcolor%3B%20stroke-width%3A%203%3B%20overflow%3A%20visible%3B%22%3E%3Cg%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M2%2016h28M2%2024h28M2%208h28%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E"}
                search={"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20style%3D%22display%3Ablock%3Bfill%3Anone%3Bheight%3A16px%3Bwidth%3A16px%3Bstroke%3AcurrentColor%3Bstroke-width%3A4%3Boverflow%3Avisible%22%20aria-hidden%3D%22true%22%20role%3D%22presentation%22%20focusable%3D%22false%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M13%2024a11%2011%200%201%200%200-22%2011%2011%200%200%200%200%2022zm8-3%209%209%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"}
                profile={"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20aria-hidden%3D%22true%22%20role%3D%22presentation%22%20focusable%3D%22false%22%20style%3D%22display%3A%20block%3B%20height%3A%20100%25%3B%20width%3A%20100%25%3B%20fill%3A%20currentcolor%3B%22%3E%3Cpath%20d%3D%22M16%20.7C7.56.7.7%207.56.7%2016S7.56%2031.3%2016%2031.3%2031.3%2024.44%2031.3%2016%2024.44.7%2016%20.7zm0%2028c-4.02%200-7.6-1.88-9.93-4.81a12.43%2012.43%200%200%201%206.45-4.4A6.5%206.5%200%200%201%209.5%2014a6.5%206.5%200%200%201%2013%200%206.51%206.51%200%200%201-3.02%205.5%2012.42%2012.42%200%200%201%206.45%204.4A12.67%2012.67%200%200%201%2016%2028.7z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"}
            />


            <FilterTag img_urls={[{ title: "Historical homes", url: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'},{ title: "Amazing pools", url: 'https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg'},{ title: "Countryside", url: 'https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg'},{ title: "Islands", url: 'https://a0.muscache.com/pictures/747b326c-cb8f-41cf-a7f9-809ab646e10c.jpg'},{ title: "Design", url: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'},{ title: "Camper vans", url: 'https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg'},{ title: "Arctic", url: 'https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg'},{ title: "Amazing views", url: 'https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg'},{ title: "OMG!", url: 'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg'},{ title: "Camping", url: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg'},{ title: "Top cities", url: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg'},{ title: "Tiny homes", url: 'https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg'},{ title: "Design", url: 'https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg'},{ title: "Earth homes", url: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg'},{ title: "Rooms", url: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg'},{ title: "Skiing", url: 'hhttps://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg'},{ title: "Mansion", url: 'https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg'},{ title: "Cycladic homes", url: 'https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg'},{ title: "Top of the world", url: 'https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg'},{ title: "Hanok", url: 'https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg'}]}


            />
           <div className="mx-10 xs:mx-0.5 sm:mx-0.5 md:mx-0.5">
            <div className="flex justify-center items-center flex flex-row gap-10 pb-10 mx-10 xs:grid xs:grid-cols-1 xs:gap-[100px] sm:grid sm:grid-cols-2 sm:gap-[100px] md:grid md:grid-cols-3 md:gap-[100px] md:mx-5">
                <PlaceCard img={"https://a0.muscache.com/im/pictures/20b86b4e-8cd3-4a12-9f45-b84dd6af3974.jpg"}
                    location={"Jaipur, India"} distance={"507 kilometres away"} available_date={"16–21 Apr"} price={"₹11,298 night"} />
                <PlaceCard img={"https://a0.muscache.com/im/pictures/miso/Hosting-612651749922832511/original/42c8627d-f380-441b-aeed-036e4bb78584.jpeg"} location={"Agra, India"} distance={"286 kilometres away"} available_date={"15–20 Apr"} price={"₹4565 night"} />
                <PlaceCard img={"https://a0.muscache.com/im/pictures/miso/Hosting-577505014702341958/original/79e01da0-4d74-4428-8f9d-235c933f9b24.jpeg"} location={"Kalwar, India"} distance={"529 kilometres away"} available_date={"15–20 Apr"} price={"₹90,000 night"} />
                <PlaceCard img={"https://a0.muscache.com/im/pictures/miso/Hosting-24018001/original/15de2db7-cccb-44f3-9eec-b48c448be33f.jpeg"} location={"Jaipur, India"} distance={"508 kilometres away"} available_date={"16–21 Apr"} price={"₹51,639 night"} />
            </div>
            <div className="flex justify-center items-center flex flex-row gap-10 py-10 mx-10 xs:grid xs:grid-cols-1 xs:gap-[100px] sm:grid sm:grid-cols-2 sm:gap-[100px] md:grid md:grid-cols-3 md:gap-[100px]">
                <PlaceCard img={"https://a0.muscache.com/im/pictures/miso/Hosting-3967737/original/a8ba8be5-8e1a-4ead-95aa-93907e34760e.jpeg"} location={"Dharampur, India"} distance={"588 kilometres away"} available_date={"20-25 Apr"} price={"₹36,518 night"} />
                <PlaceCard img={"https://a0.muscache.com/im/pictures/5942a863-a47d-47af-874a-6a5d58048c4f.jpg"} location={"Patna, India"} distance={"500 kilometres away"} available_date={"15–20 Apr"} price={"₹11,997 night"} />
                <PlaceCard img={"https://a0.muscache.com/im/pictures/miso/Hosting-757810259930133710/original/74beb87f-459a-400e-82b9-08e314befd23.jpeg"} location={"Village Kalakho (Area Kandoli), India"} distance={"442 kilometres away"} available_date={"15–20 Apr"} price={"₹9,500 night"} />
                <PlaceCard img={"https://a0.muscache.com/im/pictures/miso/Hosting-52598531/original/ccaeea06-9e14-413d-860c-f185ddc4c70c.jpeg"} location={"Mandawa, India"} distance={"585 kilometres away"} available_date={"16–21 Apr"} price={"₹5,999 night"} />

            </div>
            <div className="flex justify-center items-center flex flex-row gap-10 py-10 mx-10 xs:grid xs:grid-cols-1 xs:gap-[100px] sm:grid sm:grid-cols-2 sm:gap-[100px] md:grid md:grid-cols-3 md:gap-[100px]" >
                <PlaceCard img={"https://a0.muscache.com/im/pictures/baf95740-5680-46a2-9dcf-6396d26c0cd4.jpg"} location={"Satna, India"} distance={"Built in the 18th century"} available_date={"15–20 Apr"} price={"₹3,776 night"} />
                <PlaceCard img={"https://a0.muscache.com/im/pictures/miso/Hosting-46634829/original/0ee66358-657a-429c-9c45-4a19e457e34f.jpeg"} location={"Bijainagar, India"} distance={"633 kilometres away"} available_date={"15–20 Apr"} price={"₹10,854 night"} />
                <PlaceCard img={"https://a0.muscache.com/im/pictures/miso/Hosting-24018001/original/3c9dc1fb-1033-411d-915f-75c0ba9e056d.jpeg"} location={"Jaipur, India"} distance={"Built in 1987"} available_date={"16–21 Apr"} price={"₹4,008 night"} />
                <PlaceCard img={"https://a0.muscache.com/im/pictures/b7f4263a-44a2-47c1-a641-387795f67b67.jpg"} location={"Baldeyan, India"} distance={"600 kilometres away"} available_date={"16–21 Apr"} price={"₹13,693 night"} />
            </div>
            <div className="flex justify-center items-center flex flex-row gap-10 py-10 mx-10 xs:grid xs:grid-cols-1 xs:gap-[100px] sm:grid sm:grid-cols-2 sm:gap-[100px]   md:grid md:grid-cols-3 md:gap-[100px]">
                <PlaceCard img={"https://a0.muscache.com/im/pictures/miso/Hosting-577505014702341958/original/d5bb9983-3fe9-4a6a-bc4f-48007080b729.jpeg"} l location={"Chennai, India"} distance={"577 kilometres away"} available_date={"16–21 Apr"} price={"₹17,298 night"} />
                <PlaceCard img={"https://a0.muscache.com/im/pictures/9060061/acca0acf_original.jpg"} location={"Mumbai, India"} distance={"547 kilometres away"} available_date={"16–21 Apr"} price={"₹49,999 night"} />
                <PlaceCard img={"https://a0.muscache.com/im/pictures/e198bb38-1416-4799-a765-0a701aac7afd.jpg"} l location={"Jharkhand, India"} distance={"507 kilometres away"} available_date={"16–21 Apr"} price={"₹9,999 night"} />
                <PlaceCard img={"https://a0.muscache.com/im/pictures/miso/Hosting-757810259930133710/original/57a84161-a0c9-4a18-a3ab-998d221ed8b9.jpeg"} location={"Kerala, India"} distance={"707 kilometres away"} available_date={"16–21 Apr"} price={"₹6,999 night"} />
            </div>
            </div>
            
            <Footer categories={['Populars', 'Arts & Cultures', 'Outdoors', ' Mountains', 'Beach', 'Unique stays', 'Categories', 'Things to do']} sub_categories={[{title:'Canmore',sub_title:'Apartment rentals'}, {title:'Benalmádena',sub_title:' House rentals'}, {title:'Marbella',sub_title:'Flat rentals'},{title:'Mijas',sub_title:'Flat rentals'},{title:'Prescott',sub_title:' House rentals'},{title:'Scottsdale',sub_title:' House rentals'},{title:'Tucson',sub_title:'Flat rentals'},{title:'Jasper',sub_title:'Holiday rentals'},{title:'Mountain View',sub_title:'Cabin rentals'},{title:'Devonport',sub_title:'Holiday rentals'},{title:'Ibiza',sub_title:'Holiday rentals'},{title:'Anaheim',sub_title:'Holiday rentals'},{title:'Monterey',sub_title:'Holiday rentals'},{title:'Mallacoota',sub_title:'Pet-friendly rentals'},{title:'Paso Robles',sub_title:'Cottage rentals'},{title:'Santa Barbara',sub_title:'Pet-friendly rentals'},{title:'Sonom',sub_title:'Cabin rentals'}]} />
        
        <Data_get/>
        <Data_post/>
        <Data_delete/>
        <Data_puts/>
        </>
    )



}
export default Home