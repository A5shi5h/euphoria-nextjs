import Image from 'next/image'
import React from 'react'

const feedback = () => {
  return (
    <div className="feedback" id='feedback'>
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
    </div>
  )
}

export default feedback
