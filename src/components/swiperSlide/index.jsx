import { Box, Container, Grid, styled } from "@mui/material";
import { useEffect, useState } from "react" 
import { Swiper, SwiperSlide } from 'swiper/react'; 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';   
import ArticleCard from "./articleCard";

const CategoriesTitle = styled(Grid)(({ theme, lineClamp }) => ({ 
  "-webkit-line-clamp": lineClamp,
  display: "-webkit-box",
  overflow: "hidden",
  textOverflow: "ellipsis",  cursor: 'pointer',
  "-webkit-box-orient": "vertical",
  textAlign: 'left',
  font: "500 1.375rem/1.625rem 'Sentient',serif",

}))

export const ArticlesByCategory=({
  allProducts=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],

})=>{ 
 

 
 

   return ( 
<Box width={'100%'} 
sx={{
  '-webkit-user-select': 'none', /* Safari */
  '-moz-user-select': 'none',    /* Firefox */
  '-ms-user-select': 'none',    /* Internet Explorer/Edge */
  'user-select': 'none',        /* Standard syntax */
  backgroundColor: "#fff",
  margin: '10px 0px',
  "& .mySwiper": {
    width: 'calc(100% - 100px)',
    height: '100%',
    position: 'initial',

  },
  "& .swiper-button-prev, .swiper-button-next": {
      
    color: '#000',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    "&:after": {
      fontSize: '20px',
    }
  },

  "& .swiper-button-prev:hover, .swiper-button-next:hover": {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
  },
  "& .swiper-pagination": {
    display: 'none',
  }
}}>
<Grid item xs={12} sx={{
        textAlign: 'left',
        position: 'relative',
        maxHeight: '260px'
      }} >
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >

          {(allProducts || []).map((article, indexArticle) => (
            <SwiperSlide>
              <ArticleCard
                key={indexArticle}
                {...article}

              /></SwiperSlide>
          ))}


        </Swiper>
      </Grid> 
      </Box>)


}

export default ArticlesByCategory;



      
     