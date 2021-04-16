import { Controller, Get, Put, HttpStatus, Res, Body, Post } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
@Controller('product')
export class ProductController {
    @Post('/')
    getProduct(@Res() res, @Body() product: ProductDto) {
        res.status(HttpStatus.OK).json(product);
    }
}
