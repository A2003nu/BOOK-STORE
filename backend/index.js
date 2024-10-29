const express=require('express')
const app=express();
const port=process.env.PORT || 3000
const cors=require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

//middleware
app.use(cors());
app.use(express.json());
const uri = "mongodb+srv://anu:anu@anushadev.sjl6h.mongodb.net/?retryWrites=true&w=majority&appName=anushaDev";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
   const bookCollections=client.db("BookInventory").collection("Books");
   
   app.post("/upload-book",async(req,res)=>{
    const data=req.body;
    const result=await bookCollections.insertOne(data);
    res.send(result);
   });


app.get("/all-books",async(req,res)=>{
    let query={}
    if(req.query?.category){
        query={category:req.query.category}
    }
    const result=await bookCollections.find(query).toArray();
    res.send(result);
})
app.get("/book/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const result = await bookCollections.findOne(filter);
  res.send(result)
})

app.patch("/book/:id",async(req,res)=>{
    const id=req.params.id;
    const updateBookData=req.body;
    const filter={_id: new ObjectId(id) }
    const updateData={
        $set:{
            ...updateBookData
        },
    }
    const options = { upsert: true };
    const result=await bookCollections.updateOne(filter,updateData,options);
    res.send(result);
})


app.delete("/book/:id",async(req,res)=>{
    const id=req.params.id;
    const filter={_id:new ObjectId(id)}
    const result=await bookCollections.deleteOne(filter);
    res.send(result)
})


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
   
  }
}
run().catch(console.dir);




app.listen(port,()=>{
   
    console.log(`Server Listening at ${port}`)
})