const url = "https://rickandmortyapi.com/api/character"

fetch(url).then((response) => {

    console.log(response)
    if (response.ok){
        response.json().then((apiJsonData) => {

            console.log(apiJsonData)
            
            apiJsonData.results.map((character, index) => {

                console.log(character)
            })
             

        })
    }
    else {
      alert("TODO MAL")
    }

})
