// import mongoose from "mongoose";
import Book from "../models/Books.js";

function removeSpaces(str) {
    const originalText = str;
    const removedSpacesText = [...originalText].reduce((accum, char)=> (char===" ") ? accum : accum+char, '') ;
    return removedSpacesText;
}

export const keywordSearch = async(req,res)=>{
    try {
        
        console.log(req.params);
        var keyword=""
        if(req.params.keyword)
            keyword =removeSpaces(req.params.keyword) ;
        else
            keyword = removeSpaces(req.body.keyword)
        //if keyword is of subcode

        // console.log(keyword);
        
        const resp = await Book.find({ $text: { $search: keyword } });
        
        // const formattedRes = resp.map(
        //     (_id,subCode,name,semester,department,uploadedby,url,createdAt)=>{
        //         return{_id,subCode,name,semester,department,uploadedby,url,createdAt}
        //     }
        // )
        
        res.status(200).json(resp);            
        
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
