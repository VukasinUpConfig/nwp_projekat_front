import { Component, OnInit } from '@angular/core';
import {DandelionService} from "../../services/dandelion.service";
import {Entity} from "../../model";

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  text: string = ''
  min_confidence: number = 0.5
  image: boolean = false
  abstract: boolean = false
  categories: boolean = false

  entities: Entity [] = []

  constructor(private dandelionService: DandelionService) { }

  ngOnInit(): void {
  }

  extractEntities() {
    let include = '';
    if(this.image) include = 'image';
    if(this.abstract) include = (include !== '') ? include + ',abstract' : 'abstract';
    if(this.categories) include = (include !== '') ? include + ',categories' : 'categories';

    this.dandelionService.getEntityExtraction(this.text, this.min_confidence, include).subscribe(entityExtraction => {
      this.entities = entityExtraction.annotations;
    })
  }
  switchOptionImage() {
    this.image = !this.image;
  }

  switchOptionAbstract() {
    this.abstract = !this.abstract;
  }

  switchOptionCategories() {
    this.categories = !this.categories;
  }

}
