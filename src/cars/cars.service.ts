import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto/index';

@Injectable()
export class CarsService {

    private cars: Car[] = []

    findAll() {
        return this.cars;
    }

    findOne( id: string ) {
        const car = this.cars.find(item => item.id == id);

        if(!car) throw new NotFoundException(`Car with id '${id}' not found`);
        
        return car;
    }

    create( createCarDto: CreateCarDto) {
        const car: Car = {
            id: uuid(),
            ...createCarDto
        }

        this.cars.push(car);

        return car;
    }

    update( id: string, body: UpdateCarDto) {
        let carDB = this.findOne(id);

        if(body.id && body.id !== id) {
            throw new BadRequestException('Car id is not valid inside body');
        }

        this.cars = this.cars.map(car => {

            if(car.id == id) {
                carDB = {...carDB, ...body, id}
                return carDB;
            }

            return car;
        })
        return carDB;
    }

    delete(id: string) {
        this.findOne(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }

    fillCarsWithSeedData(cars: Car[]) {
        this.cars = cars;
    }

}
