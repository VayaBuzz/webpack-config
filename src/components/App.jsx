import '../styles/index.scss';
import Recipes from './Recipes';

import React from 'react'; //!rfe

const App = () => {
  return (
    <div>
      <section className='hero'></section>
      <main>
        <section>
          <h1>Oh hai, React</h1>
        </section>
      </main>
      <Recipes />
    </div>
  );
};

export default App;
