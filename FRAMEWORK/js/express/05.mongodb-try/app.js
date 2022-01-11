const { ObjectID } = require('bson');
const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'ex_data';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// run with callback

client.connect((error, client) => {
    if(error) {
        return console.log('koneksi gagal');
    }

    const db = client.db(dbName);
    // insert one data
    // db.collection('mahasiswa').insertOne(
    //     {
    //         nama:'Nawi Astnawi',
    //         email: 'nawawi@gmail.com'
    //     }, (err, result) => {
    //         if(err) {
    //             return console.log('Gagal menambahkan');
    //         }

    //         console.log(result);
    //     }
    // );


    // insert more data 
    // db.collection('mahasiswa').insertMany(
    //     [
    //         {nama:'Nawi astnaw', email: 'nawafa@gmail.com'},
    //         {nama:'Nawi astnawes', email: 'nawafa@gmail.com'},
    //     ], (err, result) => {
    //         if (err) {
    //             return console.log('Gagal menambahkan');
    //         }

    //         console.log(result);
    //     }
    // )
    
    // read data
    // find all
    // console.log( db.collection('mahasiswa').find().toArray((err, result) => {
    //     console.log(result);
    // }));
    // find specific
    // console.log( db.collection('mahasiswa').find(
    //     { 
    //         //nama : 'Nawi'
    //         _id : ObjectID('61dc54279b5d8c19239599a7')
        
    //     }
    // ).toArray((err, result) => {
    //     console.log(result);
    // }));
    
    // update 
    // const updatePromise = db.collection('mahasiswa').updateOne(
    //     {
    //         _id : ObjectID('61db037195ba3d880c33c385')
    //     }, 
    //     {
    //         $set : {
    //             nama : "rifalnurjamils"
    //         }
    //     }
    // )


    // updatePromise.then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // update many

    // db.collection('mahasiswa').updateMany(
    //     {
    //         nama: "Nawi astnawes",
    //     },
    //     {
    //         $set: {
    //             nama: "Nawis",
    //         },
    //     }
    // )

    // delete 
    // db.collection('mahasiswa').deleteOne(
    //     {
    //         _id: ObjectID('61dc54279b5d8c19239599a7')
    //     }
    // ).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // }) 

    // delete many
    // db.collection('mahasiswa').deleteMany(
    //     {
    //         nama: "Nawi "
    //     }
    // ).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // }) 

});

