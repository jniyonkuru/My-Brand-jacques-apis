import Portfolio from "../models/portfoliowork.js";
import _ from "lodash"
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary'
import ValidatePortfolio from "../utils/validateportfolio.js";
import PortfolioModel from "../models/portfoliowork.js";

export default class PortfolioController{

    static  async writePortfolio(req,res){
        const {error}=ValidatePortfolio.validatePortfolio(req.body);
        if(error) return res.status(401).json({
            status:"fail",
            message:error.details[0].message
        })

        try {
            const portfolio= new Portfolio(_.pick(req.body,['workUrl','workTitle']));

            if(!req.file){
              return res.status(401).json({
                status:"fail",
                message:"image is required"
              })
            }
            const result=  await cloudinary.uploader.upload(req.file.path)
            portfolio.image=result.url
            await portfolio.save();
            
            return res.status(200).json({
                status:'success',
                message:"portfolio successfully posted"
            })
            
        } catch (error) {
            return res.status(500).json({
                status:"fail",
                message:error.message
            })
            
        }
       
    }

    static async getPortfolio(req,res){
        try {
            const portfolios=await Portfolio.find();
            if(portfolios.length<1){
                return res.status(404).json({
                    status:'fail',
                    message:'no portfolio found'
                })
            }
          return res.status(200).json({
            status:'success',
            data:portfolios
          })  
            
        } catch (error) {
            return res.status(500).json({
                status:'error',
                message:error.message
            })
            
        }

    }
    static async deletePortfolio(req,res){
        try {
            let portfolio = await Portfolio.findById(req.params.id);
            if(!portfolio){
                return res.status(404).json({
                    status:'fail',
                    message:'portfolio not found'
                })
            }
            portfolio = await Portfolio.findByIdAndDelete(req.params.id);
       return res.status(200).json({
        status:'success',
        message:"portfolio deleted"
       })       
    
        } catch (error) {
            return res.status(500).json({
                status:'error',
                message:error.message
            })
            
        }

    }
}