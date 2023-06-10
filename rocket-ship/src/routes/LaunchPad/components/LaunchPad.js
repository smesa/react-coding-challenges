import { ClassRocket, FunctionalRocket } from './Rocket';
import '../styles/_launchpad.scss';

export default function LaunchPad() {

  /* To solve what has been proposed in the challenge, we simply have to prevent the component from performing a re-render, 
   which in this case is doing the triggerRerender hard in the setInterval every 500 ms, eliminating the useEffect that executes 
   the setInterval is enough for which the component is not re-rendered and therefore the rocket never takes off, 
   this will happen if ClassRocket or FunctionalRocket is implemented.
   Also remove the instance of useState triggerRerender as it will not be used */
  
  return (
    <div className="launchpad">
      <FunctionalRocket />
    </div>
  );
}
