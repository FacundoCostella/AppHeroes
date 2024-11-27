import React, { useEffect, useState } from 'react'
import { IHeroes } from '../../../types/IHeroes';
import { heroesData } from '../../../data/heroes';
import { ListHeroes } from '../../ui/ListHeroes/ListHeroes';

export const DCHeroes = () => {

  const [heros, setHeros] = useState<IHeroes[]>([]);

  const handleGetHeroesDc = () =>{
    const result = heroesData.filter((hero)=> hero.publisher === "DC Comics");
    setHeros(result);
  };

  useEffect(()=>{
    handleGetHeroesDc();
  }, []);


  return <ListHeroes heroes={heros} title="Héroes DC Comics"/>
}

