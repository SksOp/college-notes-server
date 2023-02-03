import Book from "../models/Books.js";

export const bookpreview = async(req,res)=>{
    try{
        const id = req.params.id;
        const foundBook = await Book.findById(id);
        if(!foundBook)
            res.status(400).json({message:"NOT FOUND"});
        else{
            
            res.status(200).json(foundBook);
        }

    }catch(e){
        res.status(400).json({message:e.message})
    }
}