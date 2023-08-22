import { Injectable } from '@angular/core';
import { productInfo } from '../../shared/models/productinfo';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class MerchandiseService {

  constructor() { }

  getProductById(id: number): productInfo {
    return this.getAll().find(shirt => shirt.id == id)!;
  }

  getAllProductsBySearchTerm(searchTerm:string) : productInfo[]{
    return this.getAll().filter(shirt =>
      shirt.name.toLowerCase().includes(searchTerm.toLowerCase())
      || shirt.tags?.includes(searchTerm.toLowerCase())
      || shirt.material.includes(searchTerm.toLowerCase()));
  }
  getAllTags():Tag[]{
    return [
      { name: 'All', count: 5 },
      { name: 'wywm', count: 5 },
      { name: 'tshirt', count: 5 },
      { name: 'archetypes', count: 3 },
      { name: 'black', count: 2 },
      { name: 'green', count: 2 },
      { name: 'red', count: 2 },
      { name: 'blue', count: 1 },
      { name: 'be curious', count: 1 },
      { name: 'doer', count: 1 },
      { name: 'creator', count: 1 },
      { name: 'translator', count: 1 },
    ];
  }

  getAllProductsByTag(tag: string): productInfo[] {
    return tag == "All" ?
    this.getAll() :
    this.getAll().filter(shirt => shirt.tags?.includes(tag));
  }

  getAll():productInfo[]{
    return [
      {
        id: 1,
        name: 'Pro T-Shirt',
        price: 40,
        tags: ['tshirt','wywm','green', 'black', 'white', 'red'],
        imageUrl: '/assets/images/shirts/proShirt.png',
        material: 'polyester mix',
        colours: ['green', 'black', 'white', 'red'],
        description: 'Attractive sports Tshirt made of lightweight wicking fabric. White, black and green design with WYWM logo and red trim on sleeves. Available in sizes XS-XXXL.'
      },
      {
        id: 2,
        name: 'Be Curious T-Shirt',
        price: 30,
        tags: ['tshirt','wywm', 'be curious', 'black'],
        imageUrl: '/assets/images/shirts/beCuriousShirt.png',
        material: '100% cotton',
        colours: ['black'],
        description: 'Black short sleeved basic heavyweight T-Shirt with large WYWM logo printed in white and green. Available in sizes XS-XXXL.'
      },
      {
        id: 3,
        name: 'Doer T-Shirt',
        price: 20,
        tags: ['tshirt','wywm', 'doer', 'archetypes', 'archetype','green'],
        imageUrl: '/assets/images/shirts/doerShirt.png',
        material: '100% cotton',
        colours: ['green'],
        description: 'Doers are the worker bees. They like to get things done and strive in process driven, structured environments. They enjoy being able to execute and deliver on tasks, projects, and other responsibilities, and can become hyper-focused on whatever they’re working on. Basic heavyweight T-shirt available in sizes XS-XXXL.'
      },
      {
        id: 4,
        name: 'Creator T-Shirt',
        price: 20,
        tags: ['tshirt','wywm', 'creator', 'archetypes', 'archetype', 'red'],
        imageUrl: '/assets/images/shirts/creatorShirt.png',
        material: '100% cotton',
        colours: ['red'],
        description: 'Creators are the big ideas people. They think on their feet, crave solutions to problems and are capable of considering all the consequences. They think outside the box, typically have less resistance to change, and don’t necessarily need structure or process to operate efficiently. Basic heavyweight T-shirt available in sizes XS-XXXL.'
      },
      {
        id: 5,
        name: 'Translator T-Shirt',
        price: 20,
        tags: ['tshirt','wywm', 'translator', 'archetypes', 'archetype', 'blue'],
        imageUrl: '/assets/images/shirts/translatorShirt.png',
        material: '100% cotton',
        colours: ['blue'],
        description: 'Translators are the essential connecting component of every team. They’re able to discuss and understand the ideas of a Creator and translate them into executable actions for the Doer. They look at a project, delegate tasks, and then bring all the puzzle pieces together to deliver a final product. Basic heavyweight T-shirt available in sizes XS-XXXL.'
      },
    ]
  }
}
