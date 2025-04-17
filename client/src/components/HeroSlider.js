import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
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
    autoplaySpeed: 5000,
  };

  const slides = [
    {
      image: '/assets/images/hero1.jpg',
      title: 'Justice Resonates with Ravi Legal Associates',
      subtitle: 'Expert Legal Solutions in India',
      cta: 'Learn More',
      link: '/about',
    },
    {
      image: '/assets/images/hero2.jpg',
      title: 'Free Legal Advice',
      subtitle: 'Every 3rd Saturday of the Month, Call: 9177204555',
      cta: 'Contact Us',
      link: '/contact',
    },
    {
      image: '/assets/images/hero3.jpg',
      title: 'Trusted Legal Expertise',
      subtitle: 'Across Constitutional, Criminal, Civil, and Corporate Law',
      cta: 'Explore Services',
      link: '/practice-areas',
    },
  ];

  return (
    <Slider {...settings} className="hero-slider">
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#FFFFFF',
          }}
        >
          <Box sx={{ bgcolor: 'rgba(0, 0, 0, 0.5)', p: 4, borderRadius: 2 }}>
            <Typography variant="h2" gutterBottom>{slide.title}</Typography>
            <Typography variant="h5" gutterBottom>{slide.subtitle}</Typography>
            <Button
              variant="contained"
              className="cta-button"
              component={Link}
              to={slide.link}
            >
              {slide.cta}
            </Button>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default HeroSlider;