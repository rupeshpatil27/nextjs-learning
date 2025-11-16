'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Assume react-slick does NOT have "use client"
// This wrapper adds the necessary directive and boundary
export default function SlickCarouselWrapper() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <Slider {...sliderSettings}>
        <div className="p-4 text-center">
          <h4 className="text-2xl font-semibold">Wrapped Slide 1</h4>
        </div>
        <div className="p-4 text-center">
          <h4 className="text-2xl font-semibold">Wrapped Slide 2</h4>
        </div>
        <div className="p-4 text-center">
          <h4 className="text-2xl font-semibold">Wrapped Slide 3</h4>
        </div>
      </Slider>
    </div>
  );
}
