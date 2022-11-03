import express from "express";
import pokedex from "./data/pokedex.json" assert { type: "json" }

const app = express();
const PORT = process.env.PORT || 3332
app.use(express.json())

app.get('/pokemon', (req, res) => res.json(pokedex))

app.get('/pokemon/:id', (req, res) => {
    console.log('helloksks', req.params)
    res.json(pokedex.find(item => item.id == req.params.id))
})


app.get('/pokemon/:id/:info', (req, res) => {
    console.log('hks', req.params)
    const id = req.params.id
    const info = req.params.info
    const poke = pokedex.find(item => item.id == id);
    res.json(poke[info])
})


app.listen(PORT, () => (console.log(`server running on http://localhost:${PORT}`)))


