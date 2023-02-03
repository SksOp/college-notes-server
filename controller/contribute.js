import Book from "../models/Books.js";
import mongoose from "mongoose";

function removeSpaces(str) {
    const originalText = str;
    const removedSpacesText = [...originalText].reduce((accum, char)=> (char===" ") ? accum : accum+char, '') ;
    return removedSpacesText;
}

export const contribute = async (req,res)=>{
    try {
        const {name,
            subCode,
            semester,
            department,
            uploadedby,
            college,
            url}=req.body;
        
        const lowerSubCode = subCode.toLowerCase();
        const noSpaceSubCode = removeSpaces(lowerSubCode);
        const newBook = new Book({
            name,
            subCode:noSpaceSubCode,
            semester,
            department,
            uploadedby,
            college,
            url
        })
    
        const savedBook = await newBook.save();
        res.status(200).json(savedBook)    
    } catch (error) {
        res.status(400).json({message:error.message})
    
    }
}

