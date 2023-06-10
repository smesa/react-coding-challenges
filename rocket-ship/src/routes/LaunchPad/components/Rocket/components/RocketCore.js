import React from 'react';
import '../styles/_rocket.scss';

/* Another way to solve the challenge is simply assigning 0 to the value of the SECONDS_TO_TAKEOFF constant, 
this will cause the rocket to never move but will continue to re-render 
from the LaunchPad Component */
const SECONDS_TO_TAKEOFF = 5; // 0
const MS_TO_TAKEOFF = SECONDS_TO_TAKEOFF * 1000;
const FINAL_POSITION_BOTTOM_VAL = 'calc(400px)';

function timeToPositionPercent(startTime) {
  const now = Date.now();
  const timeDiff = now - startTime;

  if (timeDiff >= MS_TO_TAKEOFF) { return FINAL_POSITION_BOTTOM_VAL; }

  return `calc(300px + ${((timeDiff / MS_TO_TAKEOFF) * 100).toFixed(0)}%)`;
}

/*I know it's not part of the problem of the challenge, but I added the correction of this small bug, 
to avoid warning in the application in the rendering of the iterated element */
function generateEmptyListEls(quantity) {
  return [...Array(quantity)].map((_,index) => <li key={index}/>);
}

export default function RocketCore({ initialLaunchTime }) {
  return (
    <>
      <div className="rocket" style={{ bottom: timeToPositionPercent(initialLaunchTime) }}>
        <div className="rocket__body">
          <div className="rocket__body__main"/>
          <div className="rocket__body__fin rocket__body__fin__left"/>
          <div className="rocket__body__fin rocket__body__fin__right"/>
          <div className="rocket__body__window"/>
        </div>
        <div className="rocket__exhaust__flame"/>
        <ul className="rocket__exhaust__fumes">
          {generateEmptyListEls(9)}
        </ul>
      </div>
      <ul className="stars">
        {generateEmptyListEls(7)}
      </ul>
    </>
  );
}
