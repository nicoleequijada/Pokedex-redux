import React from 'react';
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import './styles.css';
import { useEffect } from 'react';
import { getPokemons } from '../../api/getPokemons';

function Home() {
  useEffect(() => {
    getPokemons().then(res => console.log(res));
  })
  return (
    <div className='Home'>
      <Searcher />
      <PokemonList />
    </div>
  );
}

export default Home;
