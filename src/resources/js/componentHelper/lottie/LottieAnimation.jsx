import React from 'react';
import Lottie from 'lottie-react';

export const LottieAnimation = ({ animation, loop = true, style = {}, ...other }) => {
  return (
    <Lottie animationData={animation} loop={loop} style={style} {...other} />
  );
};