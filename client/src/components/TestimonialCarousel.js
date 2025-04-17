import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const testimonials = [
    {
      quote: 'Ravi Legal Associates secured my bail in record time. Their expertise is unmatched!',
      author: 'Anil K., Hyderabad',
    },
    {
      quote: 'The team handled my property dispute with utmost professionalism. Highly recommended!',
      author: 'Priya S., Telangana',
    },
    {
      quote: 'Their free legal advice sessions are a blessing for the community. Truly compassionate!',
      author: 'Ravi M., Warangal',
    },
  ];

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>Client Testimonials</Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontStyle: 'italic' }}>"{testimonial.quote}"</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>- {testimonial.author}</Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TestimonialCarousel;