import React from 'react'
import { FaLink } from "react-icons/fa6";
import { MdOutlineShare } from "react-icons/md";
import { MdOutlinePhonelinkErase } from "react-icons/md";
import { MdUpdate } from "react-icons/md";
import photo from "../image/Capture-removebg-preview.png";

function Naptap() {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
            <h1 className='text-2xl md:text-4xl font-bold space-y-4 text-black mt-8 md:mt-16 ml-4'>Why NFC Smart Business Card Are Perfect for Events & Seminars ?</h1>
        </div>
        <div className="max-w-screen-2xl container mx-auto text-white mt-2 md:mt-8">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mt-2 md:mt-8 order-2 md:order-1 mb-20">
                    <div className='h-72 bg-blue-100 text-white'>
                        <div className='ml-20'>
                            <FaLink className='w-12 h-12 text-black'></FaLink>
                            <h1 className='text-black text-3xl font-bold mt-4'>My Neftap</h1>
                            <p className='text-black mt-4 text-wrap'>Sharing information is now easy with our NFC technology business card. Exchange your contact information, website, portfolio, etc with a single tap on a smartphone.</p>
                        </div>
                    </div>
                    <div className='h-72 bg-green-200 text-white'>
                        <div className='ml-20'>
                            <MdOutlineShare className='w-12 h-12 text-black'></MdOutlineShare>
                            <h1 className='text-black text-3xl font-bold mt-4'>Unlimited Sharing</h1>
                            <p className='text-black mt-4 text-wrap mr-4'>Unlimited Sharing turns your NFC card into a powerful tool to instantly share contact info, social media, and more—anytime, anywhere, with no limits.</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/3 mt-8 h-[575px] order-1 bg-black">
                    <img src={photo} className="md:w-[400px] md:h-[400px] mt-4" alt=''></img>
                </div>
                <div className="md:w-1/3 mt-0 md:mt-8 order-2 md:order-1 mb-20">
                    <div className='h-72 bg-green-200 text-white'>
                        <div className='ml-20'>
                            <MdOutlinePhonelinkErase className='w-12 h-12 text-black'></MdOutlinePhonelinkErase>
                            <h1 className='text-black text-3xl text-wrap font-bold mt-4'>No App Needed!</h1>
                            <p className='text-black text-wrap mt-4'>Just tap the NFC card—your info appears instantly. Fast, easy, and app-free!</p>
                        </div>
                    </div>
                    <div className='h-72 bg-blue-100 text-white'>
                        <div className='ml-20'>
                            <MdUpdate className='w-12 h-12 text-black'></MdUpdate>
                            <h1 className='text-black text-3xl font-bold mt-4'>Update Anytime</h1>
                            <p className='text-black text-wrap mt-4'>Easily update your info anytime—no need to reprint your NFC card. Changes sync instantly online!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Naptap
