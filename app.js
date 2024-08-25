const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Hospital=require("./models/hospital.js");
const path=require("path");


const MONGO_URL= 'mongodb://127.0.0.1:27017/sih';

main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/",(req,res)=>{
    res.send("Home route")
})
//Index Route

app.get("/hospitals", async (req,res)=>{
    const allHospitals=await Hospital.find({});
    res.render("hospitals/index.ejs",{allHospitals});
})

// Show Route

app.get("/hospitals/:id",async(req,res)=>{
    let {id}=req.params;
    const hospital=await Hospital.findById(id);
    // console.log(hospital);
    res.render("hospitals/show.ejs",{hospital});
})

app.listen(8080,()=>{
    console.log("listening on port 8080");
})