import React, { useEffect, useState } from 'react'
import { useForm } from '../../../hooks/useForm'
import { IHeroes } from '../../../types/IHeroes';
import { heroesData } from '../../../data/heroes';
import { FormControl, InputGroup } from 'react-bootstrap';
import { CardHero } from '../../ui/CardHero/CardHero';
import styles from "./Search.module.css"

export const Search = () => {
  const {values, handleChange} = useForm({
    search: "",
  })

  const {search} = values;
  
  const [heros, setHeros] = useState<IHeroes[]>([])
  useEffect(()=>{
    const result = heroesData.filter((h)=> h.superhero.toLowerCase().trim().includes(search))
    setHeros(result);
  },[search])

  return (
    <div className={styles.containerSearch}>
      <div>
        <InputGroup className='mb-3'>
        <InputGroup.Text> Ingrese Héroe </InputGroup.Text>
        <FormControl  onChange={handleChange} type='text' name="search"/>
        </InputGroup>
      </div>
      <div className={styles.containerListHeros}>
        {
          heros.length > 0 ?(
            <>
              {
                heros.map((hero)=>(
                  <div key={hero.id} style={{width: "80%"}}>
                    <CardHero hero = {hero} />
                  </div>
                ))
              }
            </>
          ) : (
            <div>
            <h2>No coincide la búsqueda</h2>
            </div>
          )}
      </div>
    </div>
  )
}
