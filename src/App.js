import React from 'react';
import LocalSearch from './components/LocalSearch';
import connectHits from './components/LocalSearch/connectHits';
import { ConnectedFilterHits } from './components/LocalSearch/filterHits';
import { Provider, Consumer, FilePicker } from './components/FileContext';

import './App.css';

import { MyHits } from './MyHits';

const CustomHits = connectHits(MyHits);

const App = () => (
  <div className="app-container">
    <Provider>
      <header className="header">
        <h1 className="header-title">
          <a href="/">JSON explorer</a>
        </h1>
        <p className="header-subtitle">
          Browse and filter a JSON file in your browser
        </p>
      </header>
      <Consumer>
        {({ data }) => {
          if (!data || data.length === 0)
            return (
              <div className="main-container">
                <FilePicker />
              </div>
            );
          else
            return (
              <LocalSearch searchClient={{ data }} indexName="retromat_en">
                <div className="main-container">
                  <div className="filter-panel">
                    <ConnectedFilterHits />
                  </div>
                  <div className="container">
                    <div className="search-panel">
                      <div className="search-panel__results">
                        <CustomHits />
                      </div>
                    </div>
                  </div>
                </div>
              </LocalSearch>
            );
        }}
      </Consumer>
      <footer className="footer">
        <p className="footer-title">
          © All rights reserved - 2020 - Built by{' '}
          <a href="https://www.linkedin.com/in/maxencedalmais/">
            Maxence Dalmais
          </a>
          {' - '}
          Sponsored by <a href="https://www.retrolution.co/">Retrolution</a>
          {' - '}
          Hosted by Github
        </p>
      </footer>
    </Provider>
  </div>
);
export default App;
