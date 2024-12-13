import express from "express";
import dotenv from "dotenv";
dotenv.config();    
const app = express();
const PORT = process.env.PORT;


//Middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World')
})

app.get('/api', (req, res) => {
    res.json({message: 'Welcome to the API'});
})

app.listen(PORT, () => {
    console.log(`Server is running on http://locahlhost:${PORT}`)
})
