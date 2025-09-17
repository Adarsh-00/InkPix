import React from 'react';
import { assets } from '../assets/assets';
import {motion} from 'framer-motion';

const Description = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>CREATE AI IMAGES</h1>
      <p className='text-gray-500 mb-8'>Turn your Imaginations into visuals</p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img src={assets.sample_img_2} alt="" className='w-80 xl:w-96 rounded-lg' />
        <div>
          <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
          <p className='text-gray-600 mb-4'>
            InkPix is an AI-powered platform designed to turn words into stunning visuals. With just a simple prompt, 
            you can create artwork that reflects your imagination — from dreamy landscapes to futuristic designs and 
            everything in between. It’s creativity made effortless, where your ideas take shape without the need for 
            complex tools or design skills.
          </p>
          <p className='text-gray-600'>
            At InkPix, we believe that everyone has a story to tell and a vision to share. 
            Our mission is to empower creators, artists, and dreamers by giving them a tool that brings 
            imagination to life in seconds. Whether you’re exploring ideas, building projects, or simply having fun, 
            InkPix makes art accessible, inspiring, and uniquely yours.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Description;
