const express = require('express')
const app = express()

let notes = [
    {
      id: "1",
      content: "HTML is easy",
      important: true
    },
    {
      id: "2",
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: "3",
      content: "GET and POST are the most important methods of HTTP protocol",
      important: false
    }
  ]

app.get('/',(request,response)=>{
  response.send('<h1>Welcome page</h1>')
})

app.get('/api/notes',(request,response)=>{
  response.json(notes)
})

app.get('/api/notes/:id',(request,response)=>{
  const id = request.params.id
  console.log(response)
  const note = notes.find((n)=>{return n.id===id})
  if (note) {
    response.json(note)
  }
  else {
    response.status(404).end()
  }
  
})

app.delete('/api/notes/:id',(request,response)=>{
  const id = request.params.id
  notes = notes.filter((n)=>{return n.id!==id})
  response.status(204).end()
})

const PORT = 3001
app.listen(PORT,()=>{})
console.log(`server running on ${PORT}`)