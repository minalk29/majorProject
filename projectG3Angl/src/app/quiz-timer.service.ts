import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizTimerService {

  constructor(private http:HttpClient) { 
    
  }
  getTimer(qid: number) {
    return this.http.get("http://localhost:8080/api/status/"+qid);
    }
}
