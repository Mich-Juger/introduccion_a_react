import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../componentes-css/Portada.css';

const items = [
  {
    src: require('../img/portada.jpg'),
    altText: '',
    caption: '',
    key: 1,
  },
  {
    src: require('../img/Portada2.jpg'),
    altText: '',
    caption: '',
    key: 2,
  },
  {
    src: require('../img/Portada3.jpg'),
    altText: '',
    caption: '',
    key: 3,
  },
  {
    src: require('../img/Portada4.jpg'),
    altText: '',
    caption: '',
    key: 4,
  },
  {
    src: require('../img/Portada5.jpg'),
    altText: '',
    caption: '',
    key: 5,
  },

];

function App(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}

      >
        <img  src={item.src} alt={item.altText}/>
        <CarouselCaption 
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <section className='portada'>
        <Carousel 
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
        >
        <CarouselIndicators 
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl 
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
        />
        <CarouselControl 
            direction="next"
            directionText="Next"
            onClickHandler={next}
        />
        </Carousel>
    </section>
  );
}

export default App;