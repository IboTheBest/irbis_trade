import React from 'react'

const Options = () => {
    return (
        <section className="options-section py-[90px]">
            <div className="containers">
                <h2 className="text-center text-white font-extrabold md:text-[34px] leading-[50px]">
                    НАШИ <span className="text-[#00bfff]">УСЛУГИ</span>
                </h2>
                <div className="text-center max-w-[1200px] mx-auto mt-[30px]">
                    <p className="text-[21px] text-white">
                        Предлагаем решение всех задач по таможенному оформлению.
                        <strong> Обеспечиваем нашим клиентам комфорт, безопасность и финансовую выгоду</strong>
                    </p>
                </div>
                <ul className="flex justify-center items-start flex-wrap gap-10 mt-[40px]">
                    <li className="bg-white p-[30px] rounded-[25px] max-w-[585px]">
                        <h3 className="text-center font-bold text-[24px] leading-[34px]">
                            Таможенное декларирование импорт/экспорт/транзит
                        </h3>
                        <ul className="list-disc mt-[30px] pl-[40px]">
                            <li className="text-[16px] leading-[24px]">
                                Оформление деклараций во всех таможенных режимах.
                            </li>
                            <li className="text-[16px] leading-[24px]">
                                Оформление транзитных деклараций для грузов из КНР.
                            </li>
                        </ul>
                        <h2 className="text-center font-bold text-[24px] text-[#00bfff] m-[35px]">
                            от 75 000 сум
                        </h2>
                        <button className="w-[256px] p-[14px] bg-[#00bfff] rounded-md skew-x-[-6deg] hover:skew-x-[6deg] transition-all duration-500 text-white block mx-auto">
                            Оформить груз
                        </button>
                    </li>

                    <li className="bg-white p-[30px] rounded-[25px] max-w-[585px]">
                        <h3 className="text-center font-bold text-[24px] leading-[34px]">
                            Нетарифное регулирование
                        </h3>
                        <ul className="list-disc mt-[30px] pl-[40px]">
                            <li className="text-[16px] leading-[24px]">
                                Сертификаты соответствия и разрешения для различных типов товаров ЕАС
                            </li>
                            <li className="text-[16px] leading-[24px]">
                                Разрешения КНБ для телекоммуникационного оборудования и прочие документы
                            </li>
                        </ul>
                        <h2 className="text-center font-bold text-[24px] text-[#00bfff] m-[35px]">
                            от 25 000 сум
                        </h2>
                        <button className="w-[256px] p-[14px] bg-[#00bfff] rounded-md skew-x-[-6deg] hover:skew-x-[6deg] transition-all duration-500 text-white block mx-auto">
                            Оформить груз
                        </button>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Options