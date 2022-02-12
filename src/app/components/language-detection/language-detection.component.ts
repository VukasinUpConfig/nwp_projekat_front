import { Component, OnInit } from '@angular/core';
import {DandelionService} from "../../services/dandelion.service";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  text: string = ''
  option_clean: boolean = false

  detectedLangs: { "lang": string,"confidence": number }[] = []

  constructor(private dandelionService: DandelionService)  { }

  ngOnInit(): void {
  }

  detectLanguages() {
    this.dandelionService.getLanguageDetection(this.text, this.option_clean).subscribe(languageDetection => {
      this.detectedLangs = languageDetection.detectedLangs;
    })
  }

  switchOptionClean() {
    this.option_clean = !this.option_clean;
  }
}
