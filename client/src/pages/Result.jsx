import { useState } from 'react';
import { assets } from '../assets/assets';
import {motion} from 'framer-motion';

const Result = () => {

  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loader, setloader] = useState(false);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(input);

    //waiting for the data from server/backend.
  }

  return (
    <motion.form onSubmit={handleSubmit} className='flex flex-col min-h-[90vh] justify-center items-center'
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div>
        <div className='relative'>
          <img src={image} alt="" className='max-w-sm rounded' />
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${!loader ? 'w-0' : 'w-full transition-all duration-[10s]'}`}></span>
        </div>
        <p className={loader ? '' : 'hidden'}>Loading...</p>
      </div>
      {
        !isImageLoaded &&
        <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>
          <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Write your promt here' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color' />
          <button type='submit' className='magic-button px-10 sm:px-16 py-3 rounded-full text-white font-semibold'>Generate</button>
        </div>
      }
      {isImageLoaded &&
        <div className="flex gap-3 flex-wrap justify-start text-sm mt-10">

          <p
            onClick={() => setIsImageLoaded(false)}
            className="border border-zinc-800 text-zinc-800 px-5 py-3 rounded-full cursor-pointer hover:bg-zinc-800 hover:text-white transition flex items-center justify-center group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
              className="bi bi-arrow-clockwise group-hover:animate-spin" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
            </svg>
            <span>Generate Another</span>
          </p>

          <a
            href=""
            download
            className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 rounded-full text-white cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
              className="bi bi-download" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
            </svg>
            <span>Download</span>
          </a>
        </div>

      }
    </motion.form>
  );
}

export default Result;
