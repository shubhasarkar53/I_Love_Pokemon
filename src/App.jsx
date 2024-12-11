import { useEffect, useState } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

export default function App() {

  const [pokeData,setPokeData] = useState([]);

  useEffect(()=>{

    const pokeIdArr = [];

    for (let index = 0; index < 8; index++) {
    const randomId = Math.floor(Math.random()*800+1);
      const p = fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then((data)=>data.json());
      pokeIdArr.push(p);
    }

    Promise.all(pokeIdArr).then((values) => {
      console.log(values); // [3, 1337, "foo"]
      setPokeData(values);
    });

  },[])


  return (
    <div className="bg-[#fafafa]">
      <Navbar />
      <Hero />
      <Content pokeData={pokeData}/>
      <Footer />
    </div>
  );
}
