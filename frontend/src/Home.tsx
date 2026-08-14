import { useState } from "react";

type User_details = {
  name: string,
  age: number
}

const Home = () => {
  const [text, setText] = useState([]);






  return <div>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

    <h1>response:{text}</h1>
  </div>
}


export default Home;