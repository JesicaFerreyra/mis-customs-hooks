

import React, { useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';


export const GifExpertApp = () => {

   // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
   const [categories, setCategories]= useState(['One Punch']);
    
   
   
   return (
        <>
            <h2> GifExpertApp</h2>
            <hr /> 
            <AddCategory setCategories={setCategories} />    
            
                {
                    categories.map( category => (
                        <GifGrid 
                        key = { category } 
                        category = { category } />
                    ))
                 }
            
        </>
    )
}
