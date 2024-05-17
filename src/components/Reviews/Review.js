import React, { useState} from 'react';
import './Review.css';

const ReviewItem = ({reviewText, reviewer}) => {
  return(
    <div className='review'>
      <div className='avatar'></div>
      <div className='name'></div>
      <p className='review-text'> {reviewText}</p>
      <div className='reviewer'>~{reviewer}</div>
    </div>
  );
};

function Review() {
  const reviews = [
    { reviewText: "As a React developer, I was thrilled to collaborate with Jeffarson. Their proficiency in web development and design truly shone through in our project. Their attention to detail and seamless integration of React components elevated the user experience to new heights.", reviewer: "aspect-300" },
    { reviewText: "Working with Jeffarson was a pleasure! Their expertise in React development coupled with their keen eye for design resulted in a stunning website. Their ability to bring creative ideas to life while maintaining functionality is truly commendable.", reviewer: "aspect-301" },
    { reviewText: "I had the pleasure of partnering with Jeffarson on a web development project, and I couldn't be happier with the results. Their React skills are top-notch, and their design sense is impeccable. They delivered a polished product that exceeded all expectations.", reviewer: "aspect-302" },
    { reviewText: "Jeffarson is a React virtuoso! Their proficiency in both web development and design is unmatched. They not only brought my vision to life but also enhanced it with their innovative ideas and expertise. Working with them was a breeze!", reviewer: "aspect-303" },
    { reviewText: "I highly recommend Jeffarson for any React development project. Their deep understanding of React combined with their flair for design resulted in a website that exceeded our expectations. Their professionalism and dedication to delivering high-quality work are truly impressive.", reviewer: "aspect-304" },
    { reviewText: "Kudos to Jeffarson for their outstanding work in React development and design! Their ability to seamlessly blend functionality with aesthetics is truly remarkable. Working with them was a collaborative and enriching experience, and I look forward to future projects together.", reviewer: "aspect-305" },
    { reviewText: 
      "Exceptional React skills coupled with a flair for design - that's what you get when you collaborate with Jeffarson. Their ability to seamlessly integrate complex functionality with stunning visuals sets them apart in the world of web development. Working with Jeff was a game-changer for our project, and I can't recommend them highly enough!", reviewer: "aspect-306" }
  ];

  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((currentReview + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((currentReview - 1 + reviews.length) % reviews.length);
  };

  return (
    <div id='reviews' className='reviews-container'>
      <h1>My reviews</h1>
      <div className='reviews'>
        <button className='prev-button' onClick={prevReview}>&lt;</button>
        <ReviewItem key={currentReview} reviewText={reviews[currentReview].reviewText} reviewer={reviews[currentReview].reviewer} />
        <button className='next-button' onClick={nextReview}>&gt;</button>  
      </div>
    </div>  
  );
}


export default Review;