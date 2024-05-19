import { useState } from 'react';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['La princesa guerrera','Dragon Ball']);

    console.log(categories);

    return (
        <>
            {/* titulo de la aplicacion */}
            <h2>GifExpertApp</h2>

            {/* input */}


            {/*Listado de Gif */}
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