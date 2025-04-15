import React from 'react'
import getProducts from '../service/getProducts'
import ReusebleCard from '../components/ReusebleCard'

const Products = () => {
  const data = getProducts()
  
  return (
    <section className='containers !py-[100px] flex flex-wrap items-center gap-[20px]'>{data?.map(item=><ReusebleCard extraClass={"!p-[0]"} key={item.id} imgClass={"!rounded-t-[20px]"} item={item} isBtn={false}/>)}</section>
  )
}

export default Products