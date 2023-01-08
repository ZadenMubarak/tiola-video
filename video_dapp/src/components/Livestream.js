import React from 'react'
import './stream.css'

function Livestream() {
  return (
    <div className='parent'>
        <div className='videocont'>
            <h2 className='h2'>Live Video Unavailable</h2>
            
        </div>
        <h2 className='h22'>zaden ngobeni live test video</h2>
        
        <div className='chatcont'>
            <div className='top'>
                <img className='topi' src='https://user-images.githubusercontent.com/84284739/211211884-c05b1514-e874-4aea-8d4f-4f063ec614d2.png'/>
                </div>

            <div className='msgdiv'>
                <div className='ava1'><h5>Z.N</h5></div>
                <h4 className='msg4'>
                    0xA623...3f56
                </h4>
                <h3 className='date'>{'1/4/2023'}</h3>
                <p className='msgp'>You:hey guys!!</p>
            </div>
            
            <div className='settings'>
                <p className='con'> Connected as</p>
                <h4 className='wallet'>c0xA623...3f56</h4>
            </div>

        </div>
    </div>
  )
}

export default Livestream