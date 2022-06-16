import React from 'react';
import { Footer } from '../footer/Footer';
import { Main } from '../main/Main';
import { MainFive } from '../mainFive/MainFive';
import { MainFour } from '../mainFour/MainFour';
import { MainThree } from '../mainThree/MainThree';
import { MainTwo } from '../mainTwo/MainTwo';
import { Members } from '../members/Members';

export const Home = () => {
  return (
    <div>
      <Main />
      <MainTwo />
      <MainThree />
      <Members />
      <MainFour />
      <MainFive />
      <Footer />
    </div>
  );
};
