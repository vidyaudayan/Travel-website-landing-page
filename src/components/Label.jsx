import React from 'react'
import image from '../assets/label5.jpg'
import image1 from '../assets/label6.jpg'

const Label = () => {
    return (
    <>
<div className='w-full mt-16  text-center mb-12'>
                <h2 className='text-4xl font-bold text-blue-900 mb-4'>Most trusted travel partners</h2>
                <h4 className='text-lg text-gray-700 '>Make a memorable voyage with us</h4>
            </div>
        <div className='h-96 w-full bg-blue-500 flex '>
            <img className='w-full h-96 p-12 rounded-full' src={image} alt="" />
            <img className='w-full h-96 p-12 rounded-full' src={image1} alt="" />

            

           
        </div>

        <div className="marquee text-white bg-black ">
                <div className="slides p-4">
                    <div className="slide">
                        <span className="text-lg font-bold">
                            Proudly serving over 100k satisfied travelers worldwide..    Tours in over 200 stunning destinations .. Collaborating with 120 global partners to ensure top-quality tours..
                        </span>

                    </div>
                    <div className="slide">
                        <span className="text-lg text-green-400 font-bold">
                        Proudly serving over 100k satisfied travelers worldwide..    Tours in over 200 stunning destinations ..Collaborating with 120 global partners to ensure top-quality tours..
                        </span>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Label