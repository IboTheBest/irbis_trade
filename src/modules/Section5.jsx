import React from 'react'
import img1 from "../assets/images/img1.svg"
import img2 from "../assets/images/img2.svg"
import img3 from "../assets/images/img3.svg"
import img4 from "../assets/images/img4.svg"
import img5 from "../assets/images/img5.svg"
import ReusebleCard from '../components/ReusebleCard'
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
    return (
        <section className="py-[90px]">
            <div className="containers">
                <h2 className="uppercase font-bold text-center text-[34px]">
                    <span className="text-[#00bfff]">ВОПРОСЫ</span> ПО ТАМОЖЕННОМУ ОФОРМЛЕНИЮ
                </h2>
                <ul className='flex flex-wrap items-center justify-center gap-[20px]'>
                    {section5data.map(item=><li className=''><ReusebleCard isBtn={true} imgClass={"w-[75px] mt-[40px] h-[74px]"} description={item.title} image={item.image} /></li>)}
                </ul>
                <img src={img1} alt="" />
            </div>
        </section>
    )
}

export default Section5