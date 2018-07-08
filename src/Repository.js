import React from 'react';

const Repository = ({ url = '', name = '', language = '', stars = 0 }) => ((
  <div className="gh-widget-container">
    <div className="name">
      <div>
        <a className="gh-widget-link" href={url} >{name}</a>
      </div>
    </div>
    <div className="language">
      <div>
        {language}
      </div>
    </div>
    <div className="stars">
      <div>
        <i className="fa fa-star-o" />&nbsp;
        {stars}
      </div>
    </div>
  </div>
));

export default Repository;
