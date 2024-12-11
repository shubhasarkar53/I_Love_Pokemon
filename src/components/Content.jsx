import React from 'react'
import Container from './Container'
import Card from './Card'

function Content({pokeData}) {
  return (
    <Container>

        <h2 className="font-light text-5xl text-center my-16">Pokemon You May Like.</h2>

        <div className="flex justify-evenly gap-10 flex-wrap mb-10">
          {
            pokeData.map((poke)=><Card key={poke.id} props = {poke}/>)
          }
        </div>
      </Container>
  )
}

export default Content