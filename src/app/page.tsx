"use client";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faHighlighter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Intro from './intro';
import About from './aboutme';
import Home from './home';
import Skills from './skills';
import Project from './project';
import Me from './aboutme';
import Education from './education';
import { useEffect,useState } from 'react';
const Page = () => {
  const [menu,setmenu]=useState(false);
  return (

    <section style={{ height: '100dvh',width:"100%", justifyContent:"center", alignContent:"center",alignItems:"center"}}>
      <main id={menu?"show-menu":"hide-menu"}><Intro></Intro></main>
            <div id="menu">
                <FontAwesomeIcon icon={faBars} onClick={()=>{setmenu(!menu);
                  window.scrollTo({
                    top:0
                  })
                }}/>
        </div>
        
        <div style={{ height: '100dvh',width:"100%", justifyContent:"center", alignContent:"center",alignItems:"center"}}>
      <Home />
      </div>
      <div style={{ height: '100dvh',width:"100%", justifyContent:"center", alignContent:"center",alignItems:"center"}}>
      <Me />
      </div>
      <div style={{ height: '100dvh',width:"100%", justifyContent:"center", alignContent:"center",alignItems:"center"}}>
      <Skills />
      </div>
      <div style={{ height: '100dvh',width:"100%", justifyContent:"center", alignContent:"center",alignItems:"center"}}>
      <Project />
      </div>
    </section>

    
  )
}

export default Page
