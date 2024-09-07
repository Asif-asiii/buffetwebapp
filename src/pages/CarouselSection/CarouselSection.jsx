import React from 'react';
import './CarouselSection.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const reviews = [
  {
    name: 'Dixie',
    date: '10/08/2024',
    review: 'This customer did not write a review.',
    stars: 5
  },
  {
    name: 'John',
    date: '10/07/2024',
    review: 'Great food and fantastic service!',
    stars: 4
  },
  {
    name: 'Alice',
    date: '09/30/2024',
    review: 'Good experience overall.',
    stars: 5
  }
];

const CarouselSection = () => {
  return (
    <section className="carousel-section">
      <div className="carousel-overlay">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          showStatus={false}
          interval={3000}
          className="carousel-container"
        >
          {reviews.map((review, index) => (
            <div className="carousel-card" key={index}>
              <div className="review-card">
                <div className="review-avatar">{review.name[0]}</div>
                <p className="review-stars">
                  {'★'.repeat(review.stars)}
                </p>
                <p className="review-text">{review.review}</p>
                <p className="review-name">
                  {review.name} - {review.date}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselSection;
