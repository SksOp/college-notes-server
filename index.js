import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import dotenv from "dotenv";
import mongoose from "mongoose";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import Book from "./models/Books.js"
import searchRoute from "./routes/search.js"
import contributeRoute from "./routes/contribute.js"
import bookpreviewRoute from "./routes/bookPreview.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({ limit:"30mb" , extended: true }));
app.use(bodyParser.urlencoded({ limit:"30mb" , extended: true }));
app.use(cors());
app.use("/assets",express.static(path.join(__dirname,"public/assets")));

//routes




app.use("/search",searchRoute);
app.use("/contribute",contributeRoute);
app.use("/notes", bookpreviewRoute)








    // const data ={
    //     subCode:"hehe",
    //     semester:4,
    //     department:"hehe",
    //      name:"ash401",
    //     college:"String",
    //     url:"string"
    // }
    
    // var book = new Book(data);
    //    book.save(function (err) {
    //         if (err) return handleError(err);
    //         // saved!
    //     })




//Source: https://stackoverflow.com/questions/38290684



// const storage = multer.diskStorage({
//     destination: function(req,file,cb){
//         cb(null, "public/assets");
//     },
//     filename: function(req,file,cb){
//         cb(null,file.originalname);
//     }

// })

// const upload = multer({storage})




const PORT = process.env.PORT || 3001
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    app.listen(PORT,()=>console.log(`server started at: ${PORT}` ))


    // User.insertMany(users);
    // Post.insertMany(posts)

}).catch(console.error);