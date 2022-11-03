
import pokedex from "./pokedex.json" assert {type: "json"}


const searchById = (id) => pokedex.find(item => item.id == id)

const getInfobyID = (id, info) => {
    const poke = pokedex.find(item => item.id == id);
    // console.log(poke)
    return poke[info]
}

const No1 = str => str.charAt(0)

//console.log(searchById(55))
console.log(getInfobyID(55, 'type'))
