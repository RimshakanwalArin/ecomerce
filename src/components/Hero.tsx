'use client';
import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600, // For screens smaller than 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const slideData = [
    {
      id: 0,
      img: '/image-1.jpeg',
      title: 'girls image',
      mainTitle: 'WOMENS WINTER CAP',
      price: '$20'
    },
    {
      id: 1,
      img: '/jewelry.jpeg',
      title: 'girls jewelry',
      mainTitle: 'WOMENS ACCESSORIES',
      price: '$100'
    },
    {
      id: 2,
      img: '/shose2.jpg',
      title: 'men shoes',
      mainTitle: 'SHOES',
      price: '$200'
    },
    {
      id: 3,
      img: '/watch1.jpeg',
      title: 'girls watch',
      mainTitle: 'WOMENS HAND WATCH',
      price: '$700'
    },
    {
      id: 4,
      img: '/cort1.png',
      title: 'girls shoes',
      mainTitle: 'WOMENS COAT',
      price: '$2000'
    },
    {
      id: 6,
      img: '/shose2.jpg',
      title: 'girls shoes',
      mainTitle: 'WOMENS SHOES',
      price: '$1200'
    }
  ];

  return (
    <div>
      <div className='container pt-6 lg:pt-40'>
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
