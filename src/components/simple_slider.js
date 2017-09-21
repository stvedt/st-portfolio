import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        {this.props.images.map((image,index) => <div key={index}><img src={process.env.PUBLIC_URL +'/images/'+ image } alt={image} /></div>
      )}
      </Slider>
    );
  }
}

export default SimpleSlider;
