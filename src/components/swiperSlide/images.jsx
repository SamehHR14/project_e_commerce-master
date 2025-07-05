 import { memo, useEffect, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { styled } from '@mui/material/styles';
import { isEmpty } from 'loadsh';
import Image from 'components/Image';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

/**
 * Custom styled Swiper component for navigation functionality
 */
const CustomSwiper = styled(Swiper)(({ theme }) => ({
  '.swiper': {
    width: '100%',
    height: "500px",
  },
  '.swiper-slide': {
    background: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.typography.h6.fontSize,
    color: theme.palette.text.primary,
  },
  '.swiper-button-next, .swiper-button-prev': {
    color: theme.palette.primary.main,
    width: 40,
    height: 40,
    '&::after': {
      fontSize: 24,
    },
  },
  '.swiper-pagination-bullet': {
    backgroundColor: theme.palette.grey[500],
  },
  '.swiper-pagination-bullet-active': {
    backgroundColor: theme.palette.primary.main,
  },
}));

/**
 * Renders a Swiper with navigation buttons.
 * @function CustomSwiperNavigation
 * @returns {JSX.Element} Swiper component with multiple slides and navigation.
 */
function CustomSwiperNavigation() {

  return (
    <div>
      <CustomSwiper navigation={true} modules={[Navigation]}
        style={{ width: '100%', height: '400px', cursor: 'pointer' }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </CustomSwiper>
    </div>
  );
}
/**
 * Custom styled Swiper component for coverflow effect.
 */
const CustomSwiperCoverflow = styled(Swiper)(({ theme }) => ({
  '.swiper': {
    width: '100%',
    paddingTop: '50px',
    paddingBottom: '50px'
  },
  '.swiper-slide': {
    background: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '300px',
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '.swiper-slide img': {
    display: 'block',
    maxWidth: '100%',
    minWidth: '1px',
    maxHeight: '100%',
    minHeight: '1px'
  },
  '.swiper-3d .swiper-slide-shadow-left': {
    backgroundImage: 'linear-gradient(to left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))'
  }
}));

/**
 * Renders a Swiper with coverflow effect. 
 * Accepts a list of images to display.
 * @function SwiperCoverflow
 * @param {Object} props
 * @param {string[]} props.images - Array of image URLs to display in the swiper.
 * @returns {JSX.Element} Swiper with coverflow effect.
 */
function SwiperCoverflow({ images = [], alt }) {
  const swiperRef = useRef(null);
 

  return (
    <>
      <CustomSwiperCoverflow
        ref={swiperRef}
        effect={'coverflow'}
        grabCursor
        centeredSlides
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {!isEmpty(images) ? images?.map(({ imageUrl }) => {

          return <SwiperSlide>
            <Image src={imageUrl} alt={alt} />
          </SwiperSlide>
        }) : <>  </>}


      </CustomSwiperCoverflow>
    </>
  );
};


/**
 * Memoized components for performance optimization
 * 
 * @type {React.ComponentType}
 */
const SwiperNavigation = memo(CustomSwiperNavigation);
const SwiperCoverflowMemo = memo(SwiperCoverflow);
export { SwiperNavigation, SwiperCoverflowMemo };
export default SwiperNavigation; 