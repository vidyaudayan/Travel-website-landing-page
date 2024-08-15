import React from 'react'
import image from '../assets/label5.jpg'
import image1 from '../assets/label6.jpg'
import image2 from '../assets/label10.jpg'

const Label = () => {
    return (
    <>


<div className='w-full mt-16 text-center mb-12'>
    <h2 className='text-3xl sm:text-4xl font-bold text-blue-900 mb-4'>Most Trusted Travel Partners</h2>
    <h4 className='text-base sm:text-lg text-gray-700'>Make a memorable voyage with us</h4>
</div>

<div className='w-full h-auto bg-blue-500 flex flex-wrap justify-center items-center'>
    <img className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4  object-cover rounded-full' src={image} alt="Travel Partner 1" />
    <img className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 rounded-full object-cover' src={image1} alt="Travel Partner 2" />
    <img className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 rounded-full object-cover' src={image2} alt="Travel Partner 2" />
</div>

<div className="w-full bg-black text-white">
    <div className="marquee overflow-hidden whitespace-nowrap py-2">
        <div className="slides inline-block animate-marquee">
            <div className="slide px-4 inline-block">
                <span className="text-base sm:text-lg font-bold">
                    Proudly serving over 100k satisfied travelers worldwide.. Tours in over 200 stunning destinations .. Collaborating with 120 global partners to ensure top-quality tours..
                </span>
            </div>
            <div className="slide px-4 inline-block">
                <span className="text-base sm:text-lg text-green-400 font-bold">
                    Proudly serving over 100k satisfied travelers worldwide.. Tours in over 200 stunning destinations .. Collaborating with 120 global partners to ensure top-quality tours..
                </span>
            </div>
        </div>
    </div>
</div>


        </>
    )
}

export default Label