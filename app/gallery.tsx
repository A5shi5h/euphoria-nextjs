"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../components/ui/layout-grid";
 
export function LayoutGridDemo() {
  return (
    <div id="gallery" className="h-screen py-20 w-full relative">
      <LayoutGrid cards={cards} />
      <h1 className="text-white text-center"><span>Click on the images to view -{">"}</span></h1>
    </div>
  );
}
 
const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Ambiance</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        The Ambiance that we have here is just extravagant...
      </p>
    </div>
  );
};
 
const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Drinks for Enjoyment</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Here we serve you with variety of drinks which contain alcohol and no alcohol
        We also have variety of cocktails and mocktails available. 
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Room also available</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A spacious room with pleasing interior and absolutely top tier facility
        is also available , for comfortable stay with us..
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Live Music and Open mic sessions </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We also do live music here by giving opportunities to our local musicians and
        we also have open mic sessions where anyone can showcase their talent..
      </p>
    </div>
  );
};
 
const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    content: <SkeletonOne />,
    thumbnail:
      "/images/g3.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
    "/images/g1.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
    "/images/g4.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
    "https://images.unsplash.com/photo-1566808907623-51b8fc382454?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGxpdmUlMjBtdXNpY3xlbnwwfDB8MHx8fDA%3D",
  },
];