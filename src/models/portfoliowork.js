import mongoose from "mongoose";
const portfolioSchema=new mongoose.Schema({
     
workUrl:{
   type:String,
   required:true,
   maxlength:255,
   minlength:5
},
image:{
type:String,
required:true
},
workTitle:{
   type:String,
   required:true
}

})

const PortfolioModel= mongoose.model('portFolioModel',portfolioSchema);
export default PortfolioModel;