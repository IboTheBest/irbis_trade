import React, { useState } from 'react'
import postContact from '../../service/postContact'

const Take = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const body = {
            name, contact, email
        }
        postContact("/", body)
        console.log(body);
        
        setName("")
        setEmail("")
        setContact("")

    }
    return (
        <section className="take-section bg-fixed py-[90px]">
            <div className="containers">
                <h2 className="text-[35px] text-white leading-[50px] font-bold text-center">
                    <span className="text-[#00bfff]">ПОЛУЧИТЕ СПЕЦТАРИФЫ</span> ДЛЯ РЕГУЛЯРНЫХ ПОСТАВОК
                </h2>
                <p className="text-[21px] text-white leading-[30px] font-normal text-center my-[30px]">
                    Предложение с максимальной выгодой <span className="font-bold">для долгосрочных партнеров и клиентов</span>
                </p>
                <form onSubmit={handleSubmit} className="flex items-center justify-center gap-5 flex-wrap pt-[50px]">
                    <label className="flex flex-col">
                        <span className="text-white font-extralight text-[12px]">Какие товары нужно растаможить?</span>
                        <input
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                            required
                            className="bg-inherit text-white outline-none border-b-[3px] border-b-slate-300 focus:border-b-[#00bfff] transition-all duration-400 max-w-[550px] p-2"
                            type="text"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-extralight text-[12px]">Контактный телефон</span>
                        <input
                            value={contact}
                            onChange={(e)=>setContact(e.target.value)}
                            required
                            className="bg-inherit text-white outline-none border-b-[3px] border-b-slate-300 focus:border-b-[#00bfff] transition-all duration-400 max-w-[550px] p-2"
                            type="text"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-extralight text-[12px]">E-Mail</span>
                        <input
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            required
                            className="bg-inherit text-white outline-none border-b-[3px] border-b-slate-300 focus:border-b-[#00bfff] transition-all duration-400 max-w-[550px] p-2"
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
                <p className="mt-[100px] text-white text-[15px] leading-[24px] text-center">
                    Нажимая на кнопку Вы соглашаетесь с политикой конфиденциальности и даете согласие на сбор и обработку Ваших персональных данных.
                </p>
            </div>
        </section>
    )
}

export default Take