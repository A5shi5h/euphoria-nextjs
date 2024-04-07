import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect } from 'react'

const About = () => {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(".about-content" ,{
       scrollTrigger : {
         trigger:".about",
         start:"top 10%",
         end:"bottom 70%",
         scrub:.2
       },
       opacity:1,
       transform:"translateY(0)",
       ease:"power1.in",
       duration:2
    })
  } , [])

  return (
    <>
     <div className='about relative' id='about'>
       <div className='about-content opacity-0 translate-y-full'>
       <h1 className='about-heading'>About</h1>
       <p className='about-para font'>Welcome to Euphoria Singtam, a gastronomic haven where the art of fine dining meets the thrill 
        of culinary exploration. Nestled in the heart of Singtam, Euphoria is a restaurant like no other, where your dining experience 
        transcends mere sustenance and becomes a journey of indulgence. With a rich blend of world-class cuisine, an inviting ambiance, and 
        a commitment to excellence, Euphoria promises to tantalize your taste buds and elevate your dining expectations. Join us as we embark 
        on a culinary voyage that promises to create unforgettable memories, one delectable dish at a time.
        Euphoria Singtam  is a culinary gem born out of a simple yet profound inspiration  the scarcity of exceptional 
        dining experiences in our town. In a landscape where quality dining options were a rarity, "Euphoria Singtam" emerged as 
        a beacon of culinary excellence. Founded by a passionate team of food enthusiasts, this restaurant is a testament to 
        their unwavering commitment to bring delectable flavors, innovative dishes, and an inviting ambiance to our community. </p>
       </div>
     </div>
    </>
  )
}

export default About;