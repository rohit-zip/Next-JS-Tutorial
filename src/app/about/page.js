"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const About = () => {

    const router = useRouter();


  return (
    <div>
        About Page
        <br />
        <button onClick={()=> router.push("/login")}>Login Page</button>
    </div>
  )
}

export default About