const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin: 'http://localhost:5173',  // Allow requests from frontend server
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow methods
    allowedHeaders: ['Content-Type', 'Authorization'],  // Allow headers
}));
const ChatRoute = require( './Routes/chatapi.js')
app.use('/api/route',ChatRoute)
app.listen(5174,()=>{
    console.log('listening on port 5174')
    
})