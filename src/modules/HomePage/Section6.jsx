import React from 'react'

const Section6 = () => {
    return (
        <section>
            <div className="containers">
                <h2 className="text-[24px] md:text-[34px] text-center font-bold">
                    <span className="text-[#00bfff]">ОСТАЛИСЬ ВОПРОСЫ?</span> ЗАДАЙТЕ ИХ НАШИМ СПЕЦИАЛИСТАМ
                </h2>

                <div className="flex mt-[55px] items-start md:justify-evenly justify-center">
                    <img
                        className="hidden lg:block"
                        src="./images/photo.png"
                        alt="phone img"
                        width={530}
                        height={600}
                    />

                    <form className="flex items-center w-[380px] flex-col justify-center gap-5 flex-wrap">
                        <h3 className="font-bold text-[21px] mb-[35px] text-center">
                            Мы дадим вам развернутый ответ в течение рабочего дня
                        </h3>

                        <label className="flex flex-col">
                            <span className="text-black font-light text-[12px]">
                                Какие товары нужно растаможить?
                            </span>
                            <input
                                required
                                className="bg-inherit text-black outline-none border-b-[3px] border-b-slate-300 focus:border-b-[#00bfff] transition-all duration-400 w-[256px] md:w-[350px] p-2"
                                type="text"
                            />
                        </label>

                        <label className="flex flex-col">
                            <span className="text-black font-light text-[12px]">Контактный телефон</span>
                            <input
                                required
                                className="bg-inherit text-black outline-none border-b-[3px] border-b-slate-300 focus:border-b-[#00bfff] transition-all duration-300 w-[256px] md:w-[350px] p-2"
                                type="text"
                            />
                        </label>

                        <label className="flex flex-col">
                            <span className="text-black font-light text-[12px]">E-Mail</span>
                            <input
                                required
                                className="bg-inherit text-black outline-none border-b-[3px] border-b-slate-300 focus:border-b-[#00bfff] transition-all duration-400 w-[256px] md:w-[350px] p-2"
                                type="email"
                            />
                        </label>

                        <button
                            type="submit"
                            className="w-[256px] p-[14px] bg-[#00bfff] rounded-md skew-x-[-6deg] hover:skew-x-[6deg] transition-all duration-500 text-white"
                        >
                            Получить тарифы
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Section6