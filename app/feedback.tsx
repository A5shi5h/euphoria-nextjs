
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Link from 'next/link'
import React, { useEffect } from 'react'

const feedback = () => {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to("#feedback-text" , {
      scrollTrigger : {
        trigger:".feedback",
        start:"top 20%",
        end:"bottom 90%",
        scrub:.2,
      },
      opacity:1,
      transform:"translateY(0)",
      ease:"power2",
    })
  },[])

  return (
    <div className="feedback flex flex-col items-center" id='feedback'>
      <h1 id="feedback-text" className='text-white text-7xl text-center mb-10 font-medium opacity-0 translate-y-full'>Check out what <span className='text-green-500 font-bold'>people</span><br/>have to <span className='text-green-500 font-bold'>say</span> about us</h1>
       <section>
            <article>
                <div>
                <ul>
                    <li><img  src="./images/f1.png" alt=''/></li>
                    <li><img  src="./images/f2.png" alt=""/></li>
                    <li><img  src="./images/f3.png" alt=""/></li>
                    <li><img  src="./images/f4.png" alt=""/></li>
                </ul>
                </div>
            </article>
        </section>
        <button className='bg-green-600 mt-10 text-1xl p-4 text-white font-semibold rounded-full hover:bg-green-700'>
          <Link href={"https://www.tripadvisor.in/Restaurant_Review-g8801236-d25952526-Reviews-Euphoria_Singtam-Singtam_South_Sikkim_Sikkim.html"}>Check Feedbacks</Link>
        </button>
    </div>
  )
}

export default feedback
