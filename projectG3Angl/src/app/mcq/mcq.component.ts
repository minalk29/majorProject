import { Component, OnInit} from '@angular/core';
import { Mcq } from './mcq';
import {ActivatedRoute,Router, ParamMap} from '@angular/router';
import { McqService } from 'src/app/mcq.service';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.scss']
})
export class McqComponent implements OnInit{
  ques:any=[];
  mydata:any;
  uid:number=2;
  qid:number=1;
  que:any = [];
  
 
  
  constructor(public service:McqService) { 
   
   this.service.getStatusList(this.uid, this.qid).subscribe((res: any) => {
      this.mydata = res;
      console.log(res, "This is status");
    });
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  quizlist(){
    this.service.getallquestions(this.qid).subscribe((res: any) => {
      this.que= res;

      // this.que.foreach((ele, i) => {
      //   this.mydata.foreach((ele1, i1) => {
      //     if()
      //   })
      // })

      Object.keys(this.que).map((ele, i)=>{
        console.log(ele,i);
        
        // if(i < this.mydata.length -1 )
        // console.log(this.mydata[ele].questionId);
        if( i <= this.mydata.length-1 && this.que[ele].id === this.mydata[ele].questionId ){
       
         // console.log("if ",this.ques[ele]);
          this.ques[ele] = {...this.que[ele], status: true,userAns :this.mydata[ele].userans} 

        console.log("if ",this.ques[ele]);
        console.log(ele,i);
        
        } else{
          this.ques[ele] = {...this.que[ele], status: false}
          console.log("else in",this.ques[ele]);
          console.log(ele,i);
        }
      })
   
      console.log(this.ques, "All Questions");
    });
  }
setAnswer(option:string,questionid:number){

  
  let status={
    "quizeId":this.qid,
    "userId":this.uid,
    "userans":option,
    "questatus":true,
    "questionId":questionid,
    "remainingtime":'00:20:10'
  }
  
  
  this.service.insertstatus(status).subscribe((res:any)=>{
    console.log(res);
},
  )}

}
  // check(event:any)
  // {
    
   
  // }
  // myFunction(ans:any)
  // {
  //   //alert(ans);
  //   sessionStorage["answer"]=ans;
  //   let option= sessionStorage['checkoption'];
  //   console.log(option);
  //   console.log(ans);
  //   if(option==ans)
  //     this.check1="Right Answer";
  //     else
  //     this.check1="wrong Answer";

  // }
  // answerFunction()
  // {
  //    this.answer= sessionStorage['answer'];
     
  // }
  // public show:boolean = false;
  // public buttonName:any = 'Show';
  // toggle() {
  //   this.show = !this.show;

  //   // CHANGE THE NAME OF THE BUTTON.
  //   if(this.show)  
  //     this.buttonName = "Hide";
  //   else
  //     this.buttonName = "View Answer";
  // }
 
 
  


  
  


