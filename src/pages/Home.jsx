import React from 'react'
import '../App.css'
import Sellercard from '../Components/Homecomponent/Sellercard'
import { categoryList } from '../data/category'
import Header from '../Components/Header'
import Footertop from '../Components/Footertop'
import Footerbottom from '../Components/Footerbottom'
import Middlesection from '../Components/Homecomponent/Middlesection'
import Bottomnav from '../Components/Bottomnav'
function Home() {
  return (
    <>
      <Header />
      <div className=' w-full top-40'>
        <img className='md:w-full size-auto' src="./Home.png" alt="" />
      </div>
      <div>
        <h1 className='font-semibold flex justify-center pt-5 sm:pt-10 text-xl sm:text-3xl'>TOP CATEGORY</h1>
      </div>

      <div className='flex  grid-cols-3 sm:pt-12 pt-5 justify-center sm:grid-cols-4 md:grid-cols-6 gap-10  flex-wrap'>
        {categoryList.map((val) => {
          return <Sellercard title={val.title} image={val.image} />
        })}
      </div>
      <Bottomnav/>
      <Middlesection />
      <Footertop />
<Footerbottom/>
    </>
  )
}
export default Home