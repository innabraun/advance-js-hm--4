const root=document.querySelector(".root");


const getCharacters= async (item)=>{
    return await Promise.all(item.map((el)=>{
        return fetch(el)
            .then(res=>res.json())
            .then(res=>res)
    }))
}

 fetch( "https://ajax.test-danit.com/api/swapi/films")
     .then( (res) => {
         return res.json()//получаю промис
     })
     .then( (data) => {

         data.forEach( async film=>{
           const {episodeId,characters, name, openingCrawl}=film;
            const chr= await getCharacters(characters)

             chr.map((el)=>{
                 root.insertAdjacentHTML("afterend",`<p>CHARACTER: ${el.name}</p>`)
             })

           root.insertAdjacentHTML("afterend",`<p>EPISODE NUMBER: ${episodeId} </p>`)
           root.insertAdjacentHTML("afterend",`<p>TITLE: ${name} </p>`)


           root.insertAdjacentHTML("afterend",`<p>DESCRIPTION: ${openingCrawl} </p>`);


        })


     })


