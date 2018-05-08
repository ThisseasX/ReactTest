import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var count = 0;

function Team(props) {
  count++;
  return (
    <div className="team">
      <h1 className="team_id">{count}st Team</h1>
      <h3 className="frameworks">Frameworks used: {props.frameworks.length}</h3>
      <ul className="frameworks_list">
        {
          props.frameworks.map(function (fw) {
            return <li>{fw}</li>
          })
        }
      </ul>
    </div>
  );
}

function TeamBoard() {
  return (
    <div>
      <Team
        frameworks={["JSF", "Spring"]}
      />
      <Team
        frameworks={["Spring", "JPA", "React"]}
      />
      <Team
        frameworks={["MongoDB", "Angular2", "ExpressJS", "NodeJS"]}
      />
    </div>
  )
}

ReactDOM.render(
  <TeamBoard />,
  document.getElementById('root')
);