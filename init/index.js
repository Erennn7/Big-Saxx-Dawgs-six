const mongoose=require("mongoose");
const initData=require("./data.js");
const Hospital=require("../models/hospital.js");

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

const initDb=async ()=>{
    await Hospital.deleteMany({});
    await Hospital.insertMany(initData.data);
    console.log("Data was initialised");

}

initDb();