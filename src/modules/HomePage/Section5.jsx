import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import img1 from "https://cdn.irbis-trade.uz/images/img1.svg"
import img2 from "https://cdn.irbis-trade.uz/images/img2.svg"
import img3 from "https://cdn.irbis-trade.uz/images/img3.svg"
import img4 from "https://cdn.irbis-trade.uz/images/img4.svg"
import img5 from "https://cdn.irbis-trade.uz/images/img5.svg"
import ReusebleCard from '../../components/ReusebleCard'

const Section5 = () => {
    const section5data = [
        {
            id: 1,
            image: img1,
            title:"Полный спектр услуг УЭО"
        },
        {
            id: 2,
            image: img2,
            title:"Таможенное оформление"
        },
        {
            id: 3,
            image: img3,
            title:"Комплексная логистика"
        },
        {
            id: 4,
            image: img4,
            title:"Автоперевозки"
        },
        {
            id: 5,
            image: img5,
            title:"ЖД-перевозки"
        },
    ]

    useEffect(() => {
        AOS.init({
            duration: 1000,
        })
    }, [])

    return (
        <section className="py-[90px]" data-aos="fade-up">
            <div className="containers">
                {/* Title Section with AOS */}
                <h2 className="uppercase font-bold mb-[20px] text-center text-[34px]" data-aos="fade-up">
                    <span className="text-[#00bfff]">ВОПРОСЫ</span> ПО ТАМОЖЕННОМУ ОФОРМЛЕНИЮ
                </h2>
                <ul className='flex flex-wrap items-center justify-center gap-[20px]'>
                    {section5data.map(item => (
                        <li key={item.id} data-aos="fade-up">
                            <ReusebleCard
                                isBtn={true}
                                imgClass={"w-[75px] mt-[40px] h-[74px]"}
                                item={item}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Section5