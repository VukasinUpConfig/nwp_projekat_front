import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {LanguageDetection, TextSimilarity, EntityExtraction, SentimentAnalysis} from "../model";
import {HistoryService} from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class DandelionService {

  private readonly apiUrl = environment.dApi

  constructor(private httpClient: HttpClient, private  historyService: HistoryService) { }


  getTextSimilarity(text1: string, text2: string): Observable<TextSimilarity> {
    let token = localStorage.getItem("token")
    let link = `${this.apiUrl}/datatxt/sim/v1/?text1=${text1}&text2=${text2}&token=${token}`;
    let date = new Date();
    let method = "GET";
    this.historyService.addRecord({date, method, link});
    return this.httpClient.get<TextSimilarity>(link)
  }

  getLanguageDetection(text: string, option_clean: boolean): Observable<LanguageDetection> {
    let token = localStorage.getItem("token")
    let link = `${this.apiUrl}/datatxt/li/v1/?text=${text}&clean=${option_clean}&token=${token}`;
    let date = new Date();
    let method = "GET";
    this.historyService.addRecord({date, method, link});
    return this.httpClient.get<LanguageDetection>(link)
  }

  getEntityExtraction(text: string, min_confidence: number, include: string): Observable<EntityExtraction> {
    let token = localStorage.getItem("token")
    let include_in_query = (include !== "") ? `&include=${include}` : "";
    let link = `${this.apiUrl}/datatxt/nex/v1/?text=${text}&min_confidence=${min_confidence}${include_in_query}&token=${token}`;
    let date = new Date();
    let method = "GET";
    this.historyService.addRecord({date, method, link});
    return this.httpClient.get<EntityExtraction>(link)
  }

  getSentimentAnalysis(text: string, lang: string): Observable<SentimentAnalysis> {
    let token = localStorage.getItem("token")
    let link = `${this.apiUrl}/datatxt/sent/v1/?text=${text}&lang=${lang}&token=${token}`;
    let date = new Date();
    let method = "GET";
    this.historyService.addRecord({date, method, link});
    return this.httpClient.get<SentimentAnalysis>(link)
  }

}
