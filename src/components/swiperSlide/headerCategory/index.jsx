import React, { useRef, useState } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
 
import 'swiper/css';
import 'swiper/css/pagination';
 
// import required modules
import { Pagination, Autoplay } from 'swiper/modules'; 
import { Box } from '@mui/material';



const categories = [
  { id: 1, title: 'Category 1', image: 'https://habitat-main.myshopify.com/cdn/shop/files/slide-01.webp?v=1652267956&width=2560' },
  { id: 2, title: 'Category 2', image: 'https://habitat-main.myshopify.com/cdn/shop/files/slide-02.webp?v=1652268557&width=2560' },
  { id: 3, title: 'Category 3', image: 'https://habitat-main.myshopify.com/cdn/shop/files/slide-03.webp?v=1652268583&width=2560' }, 
];



export default function HeaderCategory({withoutTitle}) {
  return (
<Box width={'100%'} 
sx={{ 
    height: '400px',

'.swiper': {
  width: '100%',
  height: '100%',
},

  '& .swiper-slide': {
    textAlign: 'center',
    fontSize: 18,
    background: '#444',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  '& .swiper-slide img': {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  '& .swiper-v': {
    background: '#000',
  }
}}
>
        <Swiper
        className="mySwiper swiper-h"
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // ✅ délai entre les slides
          disableOnInteraction: false, // ✅ continue après clic
        }}
        modules={[Pagination, Autoplay]} // ✅ Autoplay ajouté ici
      >


        {categories.map((category) => (
          <SwiperSlide key={category.id}>
         <Box sx={{

            backgroundImage:`linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${category.image})`,
              backgroundSize: 'cover',       // Ensures the image covers the entire area
              backgroundPosition: 'center',  // Centers the image
              backgroundRepeat: 'no-repeat', // Prevents image repetition
              display: 'flex',
              margin: 0,
              padding: 0, 
              position: 'relative',
                  height: '100%',
    width: '100%',
         }}> 
           
          { !withoutTitle && <Box 
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,  
                color: '#fff',
                fontSize: '2.5rem',
                fontWeight: 700,
                padding: '10px',
                textAlign: 'center',
              }}
            >
              {category.title}
            </Box>}
         </Box>
         
      
         
          </SwiperSlide>
        ))} 
      </Swiper>
    </Box>
  );
}
