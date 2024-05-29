/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
//import { CreateProductDto } from './dto/create-product.dto';
//import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';



@Injectable()
export class ProductsService {
  private products : Product[]=[

    {
      id:1,
      "name": "T-shirt en coton",
      "description": "T-shirt confortable en coton, idéal pour une tenue décontractée.",
      "price": 19.99
    },
    {
      id:2,
      "name": "Sac à dos",
      "description": "Sac à dos spacieux avec de multiples compartiments pour vos affaires quotidiennes.",
      "price": 39.99
  },
  {
    id:3,
    "name": "Montre-bracelet élégante",
    "description": "Montre-bracelet élégante avec un design minimaliste, parfaite pour toutes les occasions.",
    "price": 79.99
  }
  
  ];
  public lastProductId =3

  getAllProducts():Product[]{
    return this.products;
  }


  getProductById(id:number):Product
  {
    const product =this.products.find(p=>p.id==id);

    if (!product) throw new NotFoundException(`Le produit d'id ${id} n'existe pas.`);
      
      else return product
  }

  deleteProductById(id:number):Product[]
  {
    const index =this.products.findIndex(p=>p.id==id);

    if (index === -1) throw new NotFoundException(`Le produit d'id ${id} n'existe pas.`);
      
      else
      { 
         this.products.splice(index,1);
         return this.products
      } 
}

  // create(products: CreateProductDto) {
  //   const NewProduct:Product={
  //     id:this.lastProductId++,
  //     name:products.name,
  //     description: products.description,
  //     price: products.price

  //   }
  //   this.products.push(NewProduct)
  //   return NewProduct;
  // }

  // findAll():Product {
  //   return this.products;
  // }

  // findOne(id: number){  
  //   const   product=this.products.find((p)=>p===id);
  //   if(!product){
  //     return(`le produit  d'id ${id} n'existe pas`);
  //   }
  //   return product;
  // }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} product`;
  // }
}
