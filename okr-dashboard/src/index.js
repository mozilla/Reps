import React from 'react';
import { render } from 'react-dom';
import Objective from './components/Objective';
import data from './okrs.json';
import 'bootstrap/dist/css/bootstrap-flex.min.css';
import './global.css';
import logoUrl from './remo_logo.png';

render((
  <div className="container-fluid">
    <div className="row">
      <div className="inline col-xs">
        <img src={ logoUrl } className="img-fluid logo" />
        <h1>Mozilla Reps OKR Dashboard - Q3 2017</h1>
      </div>
    </div>
    <div className="row">
      {data.objectives.map((objective, key) => (
        <Objective
          key={key}
          title={objective.name}
          keyResults={objective.results}
          goals={objective.okrs} />
      ))}
    </div>
  </div>
), document.getElementById('root'));
