import Star from "./Star";
import { useState } from "react";

import './Stars.css';

interface StarsProps {
    count: number
};

function Stars(props:StarsProps) {
  const initialStarsArray: number[] = new Array(props.count);
  
    const[count, setCount] = useState<number>(props.count);
    const[starsArray, setStarsArray] = useState<number[]>(initialStarsArray);

    const randomStarsHandler = () =>{
        setCount(Math.floor(Math.random() * (5 - 0 + 1)));
        setStarsArray(new Array(count).fill(Math.random().toFixed(1)));

    };

  return (
    <div className="rate-container">
      <ul className="rate-container__stars" id='stars-id'>
        {starsArray.map((e) => <Star key={Math.random()}/>)}
      </ul>
        <button onClick={randomStarsHandler}>Рандомная оценка</button>
   </div>
  )
}

export default Stars;
