"use client"
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";


export default function Home() {
  const conatiner = useRef(null);
  const {contextSafe} = useGSAP({scope: conatiner})
  const [flag, setFlag] = useState(false)

  useGSAP(()=> {
    gsap.to('.box', {x: 200, rotate: "180deg"})
  },{scope: conatiner, dependencies: []})

  const handleClick = contextSafe(()=> {
    setFlag(!flag)
    if(flag) {
      gsap.to('.box', {x: 300})
    } else {
      gsap.to('.box', {x: 0})
    }
  })

  return (
    <div ref={conatiner} className="flex min-h-screen flex-col items-center justify-center border-2 border-red-700">
      <div onClick={handleClick} className="w-52 h-52 rounded-lg bg-blue-600 box"></div>
    </div>
  );
}
