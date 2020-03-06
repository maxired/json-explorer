import React from 'react';
import LocalSearch from './components/LocalSearch';
import connectHits from './components/LocalSearch/connectHits';
import { ConnectedFilterHits } from './components/LocalSearch/filterHits';
import { Provider, Consumer, FilePicker } from './components/FileContext';

import './App.css';

import { MyHits } from './MyHits';

const CustomHits = connectHits(MyHits);

const App = () => (
  <div>
    <Provider>
      <header className="header">
        <h1 className="header-title">
          <a href="/">JSON explorer</a>
        </h1>
        <p className="header-subtitle">
          Browse and filter a JSON array in your browser
        </p>
        <FilePicker />
      </header>
      <Consumer>
        {({ data }) => (
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
        )}
      </Consumer>
    </Provider>
  </div>
);
export default App;
