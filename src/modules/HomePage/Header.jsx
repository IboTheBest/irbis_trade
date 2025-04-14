import React, { useState } from 'react';
import HeaderModal from '../../components/HeaderModal';
const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <header className="site-header h-[100vh] pb-[100px] z-[2]">
            <div className="containers">
                <div className="pt-[112px]">
                    <div className="text-center mx-auto max-w-[900px] mt-[80px]">
                        <strong className="uppercase text-[#00bfff] text-[15px] md:text-[24px] mb-[50px]">ТАМОЖЕННОЕ ОФОРМЛЕНИЕ</strong>
                        <h2 className="uppercase text-[23px] md:text-[48px] font-bold text-white">Универсальное решение для всех ваших потребностей в таможне и логистике</h2>
                    </div>
                    <ul className="flex items-center justify-center gap-10 md:gap-20 flex-wrap mt-10">
                        {[
                            { src: 'fast-shipping', text: 'Прозрачная логистика РК' },
                            { src: 'travel-map', text: 'Таможенное оформление' },
                            { src: 'warehouse', text: 'Складские услуги' },
                            { src: 'parcel', text: 'Минимальные риски' }
                        ].map((item, index) => (
                            <li key={index} className="flex flex-col items-center">
                                <img className="untouchable" src={`https://firebasestorage.googleapis.com/v0/b/cyber-beta-204b9.appspot.com/o/new_irbis_files%2F${item.src}.svg?alt=media`} alt={item.src} width="110" />
                                <p className="text-white font-normal">{item.text}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center justify-center mt-[50px] gap-[20px]">
                        <button onClick={()=>setOpen(true)} className="bg-white border-none rounded-full w-[270px] h-[55px] font-bold transition-all duration-700 text-[#00bfff] hover:bg-[#00bfff] text-center hover:text-white flex items-center justify-center">Оформить груз</button>
                        <button onClick={()=>setOpen(true)} className="bg-white border-none rounded-full w-[270px] h-[55px] font-bold transition-all duration-700 text-[#00bfff] hover:bg-[#00bfff] text-center hover:text-white flex items-center justify-center">Получить консультацию</button>
                    </div>
                </div>
            </div>
            <HeaderModal open={open} setOpen={setOpen}/>
        </header>
    );
};

export default Header;