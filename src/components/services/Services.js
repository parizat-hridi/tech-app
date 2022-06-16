import React from 'react';
import { Footer } from '../footer/Footer';
import { ServiceCard } from './serviceCard/ServiceCard';
import { ServiceHome } from './serviceHome/ServiceHome';

export const Services = () => {
  return (
    <div>
      <ServiceHome />
      <ServiceCard />
      <Footer />
    </div>
  );
};
