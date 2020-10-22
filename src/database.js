// Here we just:
// import MongoClient and try to connect to the database
// export the function (make a req to the database)

import MongoClient  from 'mongodb';

export async function connect() {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', {
            useUnifiedTopology: true
        });
        const db = client.db('node_restApi');
        console.log("DB is connected");
        return db;
    } catch(e) {
        console.log(e)
    }
}