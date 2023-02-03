//mongoDb model code?
// import { text } from "body-parser";
import mongoose from "mongoose";
const BooksSchema = new mongoose.Schema(
    {
        subCode:{
            type: String,
            required:true,
            index: true
        },
        name:{
            type:String,
            index: true

        },
        semester:{
            type:Number,
            required:true,
            min:1,
            max:16,
        },
        department:{
            type:String,
            required:false,
            index: true
        },
        uploadedby:{
            type: String,
            required: false,
        },
        college:String,
        url:{
            type: String,
            required: true,
        },
        comments:{
            type:Array,
            default:[],
        },
        rating:{
            type:Array,
            default:[],
        }
    },{timestamps:true}
)

BooksSchema.index({subCode:"text", name: 'text', department: 'text' });

const Book = mongoose.model("Book",BooksSchema);
export default Book;

