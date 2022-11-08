import React from 'react'
import flower from "../Assets/Image/Flower3.png"
import flower2 from "../Assets/Image/Flower2.png"
import profile from "../Assets/Image/Profil.png"
import leaf1 from "../Assets/Image/Leaf1.png"

export default function About() {
  return (
    <section className='bg-bg2 bg-cover  w-[640px] h-[1410px] absolute '>
        <>
         <p className='text-3xl font-bold mt-60  ml-[120px] text-[#a68841] font-serif'>Assalamualaikum Wr. Wb.</p>
         <p className='text-l text-[#5d6556] w-[500px] font-semibold  opacity-[0.5] ml-[120px] mt-3 font-serif'>Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/saudara/i pada acara pernikahan kami:</p>
         
       <div className='flex'>
       <img src={leaf1} className="w-20 h-20 ml-14 mt-[330px] absolute  animate-ping" />
       <img src={leaf1} className="w-20 h-20 ml-[500px] mt-[80px] absolute animate-ping" />
        <p className='text-8xl font-normal mt-14 ml-[150px] w-[150px]  text-[#5d6556] font-serif'>Mustika</p>
       </div>
       <p className='text-l text-[#5d6556]  font-semibold  opacity-[0.5] ml-[155px] mt-1 font-serif'>Putri dari Bpk Winarno & Ibu Julaikah</p>
       <p className='text-8xl font-normal mt-3 ml-[290px] w-[150px]  text-[#5d6556] font-serif'>&</p>
       <p className='text-8xl font-normal mt-3 ml-[205px] w-[150px]  text-[#5d6556] font-serif'>Wira</p>
       <p className='text-l text-[#5d6556]  font-semibold  opacity-[0.5] ml-[155px] mt-1 font-serif'>Putra dari Bpk Winarno & Ibu Julaikah</p>


       <p className='text-3xl font-bold mt-20  ml-[150px] text-[#a68841] font-serif'>Qs. Ar-Rum Ayat 21</p>
         <p className='text-l text-[#5d6556] w-[480px] font-semibold  opacity-[0.5] ml-[90px] mt-3 font-serif'>Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.</p>
         
       
      
        <img src={flower2}  className="w-[1500px] h-[350px] absolute  ml-[-50px]   animate-pulse " />
        {/* <p className='text-transparent mt-[600px]'>.</p> */}
        </>
    </section>
    
  )
}
