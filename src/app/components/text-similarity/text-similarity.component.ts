import { Component, OnInit } from '@angular/core';
import {DandelionService} from "../../services/dandelion.service";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  text1: string = ''
  text2: string = ''

  "langConfidence": number = 0
  "similarity": number = 0

  showSimilarity: boolean = false

  constructor(private dandelionService: DandelionService) { }

  ngOnInit(): void {
  }

  compare() {
    this.dandelionService.getTextSimilarity(this.text1, this.text2).subscribe(textSimilarity => {
      this.langConfidence = textSimilarity.langConfidence;
      this.similarity = textSimilarity.similarity;
      this.showSimilarity = true;
    })
  }

}
