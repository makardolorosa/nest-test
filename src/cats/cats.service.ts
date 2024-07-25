import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cats.interface';

@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];

  createcat(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
