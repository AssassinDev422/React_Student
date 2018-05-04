import React from 'react';
import ImageCard from '../../common/image-card/image-card';
import './how-it-works.css';

const HOW_IT_WORKS = 'how-it-works';

const HowItWorks = () => {
  const props = {
    prefixClass: HOW_IT_WORKS,
    isTextCenter: true
  };

  return (
    <div className="how-it-works container">
      <div className="text-xxxlarge text-center">
        How Student Wallet Works
      </div>
      <div className="how-it-works__cards">
        <ImageCard image="application"
                   { ...props }
                   title="Sign Up for Free in 30-secs"
                   text="Fill in 3-4 fields to see how many scholarships you are eligible for." />
        <ImageCard image="scholarship"
                   { ...props }
                   title="Our Algorithms Get to Work"
                   text="Based on your unique data, our algorithm will curate a list of scholarships you are most likely to win, potentially saving you hundreds of hours. You will also be matched to grants (free money that does not have to be repaid), federal financial aid, university scholarships, private donors, and more." />
        <ImageCard image="apply"
                   { ...props }
                   title="Graduate Debt-Free"
                   text="Student Wallet will continue to find scholarships and other funding options until your tuition, room and board, books, and even living expenses are covered. Whether you are a mid-life returning student or a high school Junior, anyone is qualified to the over $150 billion in financial aid every year." />
      </div>
    </div>
  );
};
export default HowItWorks;
