import React from 'react'

const Section3 = () => {
    return (
        <section className="py-[95px]">
            <div className="containers">
                <h2 className="text-black text-[34px] leading-[50px] mb-[30px] font-bold text-center">
                    ПОДРОБНЕЕ ОБ <span className="text-[#00bfff]">УСЛУГАХ</span>
                </h2>
                <ul className="flex items-start justify-center gap-10 flex-wrap">
                    <li className="max-w-[366px] flex flex-col justify-between h-[580px] rounded-[25px] bg-white shadow-md p-[40px]">
                        <div>
                            <h3 className="text-[24px] font-bold mb-[36px]">Таможенное декларирование</h3>
                            <ul className="list-disc">
                                <li className="text-[16px] leading-[24px]">Таможенное оформление импорта, экспорта и транзита;</li>
                                <li className="text-[16px] leading-[24px]">Классификация товаров по кодам ТН ВЭД</li>
                                <li className="text-[16px] leading-[24px]">Организация проведения досмотра и таможенной экспертизы («Красный» коридор)</li>
                                <li className="text-[16px] leading-[24px]">Расчет и оплата таможенных пошлин от имени клиентов</li>
                                <li className="text-[16px] leading-[24px]">Классификационные решения</li>
                                <li className="text-[16px] leading-[24px]">Предварительное декларирование</li>
                            </ul>
                        </div>
                        <button className="w-[256px] p-[14px] bg-[#00bfff] rounded-md skew-x-[-6deg] hover:skew-x-[6deg] transition-all duration-500 text-white block mx-auto">
                            Рассчитать стоимость
                        </button>
                    </li>

                    <li className="max-w-[366px] flex flex-col justify-between h-[580px] rounded-[25px] bg-white shadow-md p-[40px]">
                        <div>
                            <h3 className="text-[24px] font-bold mb-[36px]">Консалтинг</h3>
                            <ul className="list-disc">
                                <li className="text-[16px] leading-[24px]">Консалтинг на протяжении всей цепочки таможенного оформления</li>
                                <li className="text-[16px] leading-[24px]">Представительство интересов клиента в таможенных органах</li>
                                <li className="text-[16px] leading-[24px]">
                                    Поддержка и консалтинг при включении в реестры Комитета государственных доходов
                                    (УЭО, Таможенный склад, Склад временного хранения).
                                </li>
                            </ul>
                        </div>
                        <button className="w-[256px] p-[14px] bg-[#00bfff] rounded-md skew-x-[-6deg] hover:skew-x-[6deg] transition-all duration-500 text-white block mx-auto">
                            Получить консультацию
                        </button>
                    </li>

                    <li className="max-w-[366px] flex flex-col justify-between h-[580px] rounded-[25px] bg-white shadow-md p-[40px]">
                        <div>
                            <h3 className="text-[24px] font-bold mb-[36px]">Нетарифное регулирование</h3>
                            <ul className="list-disc">
                                <li className="text-[16px] leading-[24px]">Сертификация и декларации соответствия на товары</li>
                                <li className="text-[16px] leading-[24px]">Получение разрешений КНБ</li>
                                <li className="text-[16px] leading-[24px]">Прочая разрешительная документация (ДКТРМ, РДИ и др.)</li>
                            </ul>
                        </div>
                        <button className="w-[256px] p-[14px] bg-[#00bfff] rounded-md z-[1] skew-x-[-6deg] hover:skew-x-[6deg] transition-all duration-500 text-white block mx-auto">
                            Оформить документ
                        </button>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Section3