import { Controller, Get, Post, Patch, Delete, Param, ParseUUIDPipe, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto/index';



@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) {

    }

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', new ParseUUIDPipe({version: '4'})) id: string ) {
        return this.carsService.findOne(id);
    }
    

    @Post()
    createCar(@Body() createCarDto: CreateCarDto) {
        return this.carsService.create(createCarDto);
    }

    @Patch('/:id')
    editCar(
        @Param('id', new ParseUUIDPipe({version: '4'})) id: string, 
        @Body() body: UpdateCarDto
    ) {
        return this.carsService.update(id, body);
    }

    @Delete('/:id')
    deleteCar(@Param('id', new ParseUUIDPipe({version: '4'})) id: string) {
        return this.carsService.delete(id);
    }

}
