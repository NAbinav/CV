import React from 'react';
const Me = () => {
  return (
    <main className=''>
    <div style={{ height: '100dvh',display:"contents"}} className='hidden'>
        <h1 id="" className='about'>ABOUT ME</h1>
        <p id='hey-guys' className=''>Hey guys,
My name is <span className=' font-bold'>Abinav N</span> and I'm a Second-year <span className='font-bold'>Electronics and Computer Science </span>student at <span className='font-bold'>VIT Chennai</span>.<br/>
I'm intrested in working as a Front end Devoloper and if you need a guy to make a website for you,
you have come to the right place
        </p>
        <div className="education" style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
          <ul className='m-10 p-10 ' style={{display:'flow'}}>
            <li>
              <div className="secondary box">
                <p className='name '>Secondary School</p>
                <p className='place'>Chinmaya Vidyalaya</p>
              </div>
            </li>
            <li>
              <div className="senior box">
                <p className='name'>Higher Secondary School</p>
                <p className='place'>Chinmaya Vidhyalaya </p>
              </div>
            </li>
            <li>
              <div className="vit box">
                <p className='name'>Bachelor's Degree</p>
                <p className='place'>Vellore Institute Of Technology,Chennai</p>
              </div>
            </li>
          </ul>
        </div>

    </div>
    </main>
  )
}

export default Me
