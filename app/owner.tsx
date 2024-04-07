"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

export function ThreeDCardDemo() {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(".owner" , {
      scrollTrigger:{
         trigger:".owner",
         start:"top 10%",
         end:"bottom bottom",
         scrub:.2,
      },
       opacity:1,
    })
  },[])

  return (
    <CardContainer className="owner inter-var overflow-y-hidden opacity-0">
      <CardBody className="bg-gray-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[95vw] sm:w-[40rem] h-auto rounded-xl p-4 border overflow-x-hidden">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Meet Anand Lamichaney
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-xs sm:text-md mt-2 dark:text-neutral-300 text-justify tracking-tighter"
        >
          Anand Lamichaney also famous by his alias Mr.@one, a dynamic entrepreneur who has managed to blend his passion for food with his 
          knack for social media to create a unique and thriving career. As the proud owner of the restaurant Euphoria Singtam, he has 
          mastered the art of crafting delectable dishes that not only tantalize taste buds but also make for stunning Instagram posts. With 
          a discerning palate and a talent for food presentation, Anand has attracted a very substantial online following and carved out a 
          niche for himself in the world of social media influence. His delightful engaging content have not only made his restaurant a 
          culinary hotspot but have also turned him into a sought-after Instagram influencer, offering a captivating blend of food inspiration 
          and restaurant insights to his ever-growing community of followers. In this brief exploration, we'll delve into Anand's dual role as 
          both a restaurant owner and a social media sensation, highlighting the fusion of these two worlds that has created a buzz in the 
          culinary and digital realms.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/owner.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://gmail.com"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
           Gmail
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://www.instagram.com/mr.a_one/"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
           Instagram
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://www.facebook.com/aonelamichaney/"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
           Faccebook
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
