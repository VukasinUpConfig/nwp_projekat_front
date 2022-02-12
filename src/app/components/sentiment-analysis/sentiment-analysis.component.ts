import { Component, OnInit } from '@angular/core';
import {DandelionService} from "../../services/dandelion.service";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  text: string = ''
  lang: string = 'en'
  languages: string[] = ['en', 'it', 'auto']

  score: number = 0
  type: string = ''
  color: string = "rgba(0,0,0,1)"

  showAnalysis: boolean = false

  constructor(private dandelionService: DandelionService) { }

  ngOnInit(): void {
  }

  analyse() {
    this.dandelionService.getSentimentAnalysis(this.text, this.lang).subscribe(analyse => {
      this.score = analyse.sentiment.score;
      this.type = analyse.sentiment.type;
      let fraction: number = (this.score + 1) / 2;
      let red: number = -255*fraction + 255;
      let green: number = 255*fraction;
      this.color = `rgba(${red},${green},0,1)`
      this.showAnalysis = true;
    })
  }
}
