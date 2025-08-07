'use client';

import React from 'react';
import { Footer, Header } from '@/components';
import text from '@/texts/index.json';
const Home = () => {
  return (
    <>
      <Header />
      <section
        id=""
        style={{ backgroundImage: `url('./img/bg-hero.png')` }}
        className="h-dvh relative bg-cover"
      >
        <div className="container m-auto px-4">
          <div className="flex justify-end pt-7">
            <img src={text.hero.imgBg} className="max-w-2xs" alt="" />
          </div>
        </div>
        <div className="container m-auto px-4 relative">
          <div className="absolute w-full h-full top-0 flex items-end left-0 right-0">
            <div>
              <h1>
                "
                <br />
                Tô de boa, tô com APP Vida Plano.”
              </h1>
            </div>
            <div>fdfdf</div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
