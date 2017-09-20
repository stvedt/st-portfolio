import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class SimpleSlider extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    var settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    console.log('images from slider',this.props.images);

    return (
      <Slider {...settings}>
        {this.props.images.map((image,index) => <div key={index}><img src={process.env.PUBLIC_URL +'/images/'+ image } /></div>
      )}
      </Slider>
    );
  }
}

export default SimpleSlider;
