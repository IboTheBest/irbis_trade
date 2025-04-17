import React from 'react'
import getProducts from '../service/getProducts'
import ReusebleCard from '../components/ReusebleCard'
import { Helmet } from 'react-helmet'

const Products = () => {
  const data = getProducts()

  return (
    <>
      <Helmet>
        <title>Продукты | IRBIS U.S. — Таможенное оформление и ВЭД в Узбекистане</title>
        <meta name="description" content="Продукты компании IRBIS U.S." />
        <meta name="keywords" content="продукты IRBIS, ВЭД, таможенное оформление, логистика, экспорт, импорт, Узбекистан, IRBIS U.S." />
        <meta property="og:title" content="Продукты IRBIS U.S. — ВЭД и Таможня" />
        <meta property="og:description" content="Продукты компании IRBIS U.S." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://irbis-trade.uz/our-products" />
        <meta property="og:image" content="https://storage.cloupard.uz/irbisuz/irbis_logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Продукты IRBIS U.S." />
        <meta name="twitter:description" content="Продукты компании IRBIS U.S." />
        <meta name="twitter:image" content="https://storage.cloupard.uz/irbisuz/irbis_logo.png" />
      </Helmet>
      <section className='containers !pt-[30px] !pb-[100px] flex flex-wrap items-center gap-[20px]'>
        <h2 className='w-full text-center font-black text-black text-[28px] mb-8'>Наши продукты</h2>
        {data?.map(item => (
          <ReusebleCard key={item.id} extraClass="!p-[0]" imgClass="!rounded-t-[20px]" item={item} isBtn={false} />
        ))}
      </section>
    </>
  )
}

export default Products