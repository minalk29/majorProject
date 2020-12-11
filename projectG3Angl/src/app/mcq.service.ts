import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class McqService {
  getallquestions(qid: number) {
    return this.http.get("http://localhost:8080/api/status/allque/"+qid);
    }
  getStatusList(uid: number, qid: number) {
   return this.http.get("http://localhost:8080/api/status/"+ uid+'/'+qid);
  }
  insertstatus(status: any) {
   return this.http.post("http://localhost:8080/api/status",status);
  }

  constructor(private http:HttpClient) { }
 
}
