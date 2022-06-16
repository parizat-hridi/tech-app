import React from 'react';
import { Footer } from '../footer/Footer';
import { AwesomeFeatures } from './awesomeFeatures/AwesomeFeatures';
import { OtaPortal } from './features/OtaPortal';
import { Pricing } from './pricing/Pricing';
import { ProductHome } from './productHome/ProductHome';

export const Products = () => {
  return (
    <div>
      <ProductHome />
      <OtaPortal />
      <AwesomeFeatures />
      <Pricing />
      <Footer />
    </div>
  );
};
