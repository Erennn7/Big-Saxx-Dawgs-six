const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const hospitalSchema = new Schema({
    hos_title: { type: String, required: true },
    hos_aim: { type: String, required: true },
    main_features: [
        {
            feature_name: { type: String, required: true },
            main_desc: { type: String, required: true },
        }
    ],
    about_us: { type: String, required: true },
    add_features: [
        {
            add_feature_name: { type: String, required: true },
            add_desc: { type: String, required: true }
        }
    ],
    // img: {
    //     url: String,
    //     filename: String
    // },
    doctors_count: { type: Number, required: true },
    depart_count: { type: Number, required: true },
    lab_count: { type: Number, required: true },
    award_count: { type: Number, required: true },
    services: [
        {
            serv_name: { type: String, required: true },
            serv_desc: { type: String, required: true }
        }
    ],
    departments: [
        {
            depart_name: { type: String, required: true },
            depart_desc: { type: String, required: true }
        }
    ],
    doctors: [
        {
            doc_name: { type: String, required: true },
            doc_role: { type: String, required: true },
            doc_quali: { type: String, required: true }
        }
    ],
    location: { type: String, required: true },
    phone_number: { type: Number, required: true },
    email: { type: String, required: true }
});


const Hospital=mongoose.model("Hospital",hospitalSchema);
module.exports=Hospital;