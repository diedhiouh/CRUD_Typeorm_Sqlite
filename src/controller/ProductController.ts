import { AppDataSource } from "../data-source";
import { Products } from "../entity/Products";
import { NextFunction, Request, Response } from "express"



export class ProductController {
    
    private productRepository = AppDataSource.getRepository(Products);


    async listProducts(req: Request, res: Response){

        const products = await this.productRepository.find();

        return products;
    }

    async getProduct(req: Request, res: Response){

        const idproduct = req.params.id;
        const product = await this.productRepository.findOne({where:{id: idproduct }})

        return product;
    }

    async addProduct(req: Request, res: Response){

        const payload = req.body;

        const product = await this.productRepository.create(payload);
        const result = await this.productRepository.save(product);
        return result;
    }
    
    async updateProduct(req: Request, res: Response){

        const payload = req.body
        const product = await this.productRepository.findOne({where:{id: req.params.id }})
        const merged = await this.productRepository.merge(product, payload);
        this.productRepository.save(product);
        return merged
    }

    async removePorduct(req: Request, res: Response){
        let productToRemove = await this.productRepository.findOneBy({ id: req.params.id })

        this.productRepository.delete(productToRemove)
        
    }

}
