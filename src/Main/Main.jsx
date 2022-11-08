import React from 'react'
import flower from "../Assets/Image/Flower3.png"
import flower2 from "../Assets/Image/Flower1.png"
import profile from "../Assets/Image/Profil.png"
import leaf1 from "../Assets/Image/Leaf1.png"
import { rubberBand } from 'react-animations'
import styled, { keyframes } from 'styled-components'


export default function Main() {

    const rAnimate = keyframes `${rubberBand}`;  
    const rD = styled.div `animation: 5s ${rAnimate};`
      
  return (
    <section className='bg-Contain bg-cover w-[640px] '>
        <>
        <div className='flex'>
            <p className='absolute text-5xl font-bold mt-[240px] ml-[90px] text-[#5d6556] font-serif rotate-[-53.09deg] animate-pulse'>T</p>
            <p className=' absolute text-5xl font-bold mt-[210px] ml-[115px] text-[#5d6556] font-serif rotate-[-43.88deg] animate-pulse'>h</p>
            <p className=' absolute text-5xl font-bold mt-[185px] ml-[140px] text-[#5d6556] font-serif rotate-[-35.08deg] animate-pulse'>e</p>
            <p className=' absolute text-5xl font-bold mt-[158px] ml-[185px] text-[#5d6556] font-serif rotate-[-18.91deg] animate-pulse'>W</p>
            <p className=' absolute text-5xl font-bold mt-[145px] ml-[240px] text-[#5d6556] font-serif rotate-[-8.02deg] animate-pulse'>e</p>
            <p className='absolute text-5xl font-bold mt-[140px] ml-[270px] text-[#5d6556] font-serif rotate-[0.95deg]  animate-pulse'>d</p>
            <p className=' absolute text-5xl font-bold mt-[137px] ml-[305px] text-[#5d6556] font-serif rotate-[10.12deg] animate-pulse'>d</p>
            <p className='absolute text-5xl font-bold mt-[140px] ml-[343px] text-[#5d6556] font-serif rotate-[17.19deg] animate-pulse'>i</p>
            <p className='absolute text-5xl font-bold mt-[150px] ml-[365px] text-[#5d6556] font-serif rotate-[24.06deg] animate-pulse'>n</p>
            <p className='absolute text-5xl font-bold mt-[155px] ml-[405px] text-[#5d6556] font-serif rotate-[33.04deg] animate-pulse'>g</p>
            <p className=' absolute text-5xl font-bold mt-[185px] ml-[445px] text-[#5d6556] font-serif rotate-[46.30deg] animate-pulse' >of</p>
            {/* <p className=' text-5xl font-bold mt-28 ml-28 text-[#5d6556] font-serif rotate-[54.81deg]'>f</p> */}
            <img src={flower}  className="w-[500px] h-[500px] ml-[400px] mt-[-90px] absolute rotate-[25deg] animate-pulse " />
        </div>
        <p className='ml-[163px] mt-[216px] border-[3.5px] border-[#a4a8a0] rounded-full w-[310px] h-[570px] absolute'>
        
        </p>
        <img src={profile} className="ml-[173px] w-[290px] h-[550px] mt-[225px] rounded-full animate-pulse" />
       <div className='flex'>
       <img src={leaf1} className="w-20 h-20 ml-10 mt-10 animate-ping duration-1000" />
       <img src={leaf1} className="w-20 h-20 ml-[530px] mt-[170px] absolute animate-ping duration-1000 " />
        <p className='text-8xl  font-normal mt-14 ml-6 text-[#5d6556] font-serif'>Mustika  </p>
        <p className='text-8xl  font-normal mt-36 absolute ml-40 text-[#5d6556] font-serif'> 
        & Wira</p>
       </div>
     
       <p className='p-2 border-2 border-[#e3a81f] w-[270px] mt-28 ml-[200px] flex justify-center'>
            <p className='text-4xl text-[#5d6556] font-semibold'>25 | 05 | 2022</p>
        </p>
        <p className='text-l text-[#5d6556] font-semibold  opacity-[0.5] ml-[235px] mt-3 font-serif'>di mohon kehadirannya</p>
       
        <img src={flower}  className="w-[250px] h-[400px] ml-[530px] mt-[-150px] absolute rotate-[-25deg]  animate-pulse " />
        <img src={flower2}  className="w-[700px] h-[400px] absolute ml-[-180px] mt-[-20px] rotate-[-10deg] z-10 animate-bounce duration-1000" />
        <p className='text-transparent mt-[100px]'>.</p>
        </>
    </section>
    
  )
}
