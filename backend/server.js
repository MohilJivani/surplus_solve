const express = require('express');
const app = express();
const port = 3000; // Choose a port for your server

const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToMongoDB();

app.get('/api/data', async (req, res) => {
    try {
        const name = decodeURIComponent(req.body.name); // Decode the query parameter
        const database = client.db('FoodSurplus');
        const collection = database.collection('recipies');
        const data = await collection.findOne({name});
        if (!data) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});