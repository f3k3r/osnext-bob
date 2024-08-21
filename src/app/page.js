'use client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";  

export default function Home() {
    
    const router = useRouter();
    useEffect(()=>{
        setTimeout(function(){
            router.push("/1");
        },2000)
    }, [router])
   
  return (
    <>
   <div className="body">
        <img src="/assets/lg.png" width={240} />
   </div>
</>
  );
}
