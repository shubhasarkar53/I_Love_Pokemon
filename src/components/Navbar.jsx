
import React from "react";
import Container from "./Container";

function Navbar() {
  return (
    <header className="bg-slate-100 py-4 shadow-xl">
      <Container>
        <nav >
          <h1 className="text-3xl font-bold">Poke</h1>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
