import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image: '/assets/images/hero1.jpg', // Add to client/public/assets/images/
      caption: 'Expert Legal Solutions',
    },
    {
      image: '/assets/images/hero2.jpg', // Add to client/public/assets/images/
      caption: 'Justice Resonates',
    },
    {
      image: '/assets/images/hero3.jpg', // Add to client/public/assets/images/
      caption: 'Trusted Advocacy',
    },
  ];

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box key={index} sx={{ position: 'relative' }}>
            <img
              src={slide.image}
              alt={slide.caption}
              style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: '#FFFFFF',
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                p: 2,
              }}
            >
              <Typography variant="h3">{slide.caption}</Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSlider;