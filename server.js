const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

const posts = [
    {
        username:"azmeer",
        title: "post1"
    },
    {
        username:"fahad",
        title: "post2"
    }
]

app.get('/posts', (req, res)=>{
    res.json(posts)
})

app.get('/login', (req, res)=>{

})


app.listen(3000)