import studio from "../assets/maxresdefault.jpg";
import { useState } from "react";

// when we want to use useState, we have to import it with {}'s
export default function Child({ name }) {
  // use state is just a function
  // as an argument, it takes an inita=ial value for a 'state' variable

  useState();
  console.log(useState(0));

  const [likes, setLikes] = useState(0);
  function handleLikes() {
    setLikes(likes + 1);
  }
  return (
    <>
      <div>
        <p>{name}This is the child</p>
        <img src={studio} onClick={handleLikes} />
        <span>likes{likes}</span>
      </div>
    </>
  );
}
