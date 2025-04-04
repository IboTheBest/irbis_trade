import React from 'react';
import menu from '../assets/images/manu.svg';

const Header = () => {
    return (
        <header className="site-header pb-[100px] z-[2]">
            <div className="containers">
                <nav className="top-0 bg-[#00000070] fixed w-full mx-auto left-0 right-0 flex items-center justify-between py-[10px]">
                    <a className="ml-[30px]" href="./index.html">
                        <img className="untouchable" src="https://firebasestorage.googleapis.com/v0/b/cyber-beta-204b9.appspot.com/o/new_irbis_files%2Flogo.svg?alt=media&token=91595f4b-c369-4b3c-b460-07fb760d5570" alt="site logo" width="144" height="112" />
                    </a>
                    <ul className="hidden md:flex md:mr-[30px] gap-[32px]">
                        {['Услуги', 'Продукты', 'О компании', 'Новости', 'Контакты', 'Партнерства'].map((text, index) => (
                            <li key={index}>
                                <a className="font-bold md:text-[12px] lg:text-[18px] text-white duration-300 hover:text-[#00bfff] transition linear" href="#">{text}</a>
                            </li>
                        ))}
                    </ul>
                    <button className="mr-[30px] md:hidden">
                        <img className="untouchable" src={menu} alt="open navbar menu" width="40" height="40" />
                    </button>
                    <div id="wrapper" className="modal-wrapper hidden fixed inset-0 flex items-center justify-end bg-[#00000070]">
                        <div className="modal bg-[#FFFFFFF0] w-[250px] h-[100vh] flex justify-center flex-col top-[-100%] right-[-100%] transition-all duration-700 relative"></div>
                    </div>
                </nav>

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
                        <a className="bg-white border-none rounded-full w-[270px] h-[55px] font-bold transition-all duration-700 text-[#00bfff] hover:bg-[#00bfff] text-center hover:text-white flex items-center justify-center">Оформить груз</a>
                        <a className="bg-white border-none rounded-full w-[270px] h-[55px] font-bold transition-all duration-700 text-[#00bfff] hover:bg-[#00bfff] text-center hover:text-white flex items-center justify-center">Получить консультацию</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;