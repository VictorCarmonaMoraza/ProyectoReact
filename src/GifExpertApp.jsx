import { useState } from 'react';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['La princesa guerrera','Dragon Ball']);

    console.log(categories);

    const  onAddCategory=()=>{
         console.log('Valorant');
         //Forma1
         setCategories([ ...categories,'Valorant']);
         //Forma2
         //setCategories(cat=>[...cat,'Valorant'])
    }

    return (
        <>
            {/* titulo de la aplicacion */}
            <h2>GifExpertApp</h2>

            {/* input */}


            {/*Listado de Gif */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })
                }
            </ol>
            {/*Git Item */}


        </>
    )
}