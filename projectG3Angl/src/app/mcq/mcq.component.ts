import { Component, OnInit} from '@angular/core';
import { Mcq } from './mcq';
import {ActivatedRoute,Router, ParamMap} from '@angular/router';
import { McqService } from 'src/app/mcq.service';
import { AddtoFavService } from '../addto-fav.service';
import { Addfav } from '../addfav';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.scss']
})
export class McqComponent implements OnInit{

  // @ViewChild('#'+qidid) divView: ElementRef;
  qidid:any;
  ques:any=[];
  mydata:any;
  favData:any;
  uid:number=2;
  qid:number=1;
  que:any = [];
  selected: boolean = false;
  correctans:boolean=false;
  checkAns:boolean=false;
  questionobj:any;
  constructor(public service:McqService, private myserv: AddtoFavService, private serv: Addfav) { 
   

   this.service.getStatusList(this.uid, this.qid).subscribe((res: any) => {
      this.mydata = res;
      console.log(res, "This is status");
      
    });

    this.myserv.getFavList(this.uid, this.qid).subscribe((res: any) => {
      this.favData = res;
      console.log("data", this.favData);
      this.selected = this.serv.getList(this.favData);
    });

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  fav = {
    "quizid": this.qid,
    "userid": this.uid,
    "status": true
  }
  toggleSelected(): void {
    this.selected = this.serv.favToggel(this.fav);
  }

  quizlist(){
    this.service.getallquestions(this.qid).subscribe((res: any) => {
      this.que= res;
console.log(this.que);
      Object.keys(this.que).map((ele, i)=>{
        console.log(ele,i);
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


  
setAnswer(option:string,questionid:number,ans:string,question:any)
{
  this.qidid = questionid;
  console.log((<HTMLInputElement> document.getElementById(this.qidid+"1")));
  (<HTMLInputElement> document.getElementById(this.qidid+"1")).disabled = true;
  (<HTMLInputElement> document.getElementById(this.qidid+"2")).disabled = true;
  (<HTMLInputElement> document.getElementById(this.qidid+"3")).disabled = true;
  (<HTMLInputElement> document.getElementById(this.qidid+"4")).disabled = true;

  var opt1=(<HTMLInputElement> document.getElementById(this.qidid+"11")).innerText;
  var opt2=(<HTMLInputElement> document.getElementById(this.qidid+"22")).innerText;
  var opt3=(<HTMLInputElement> document.getElementById(this.qidid+"33")).innerText;
  var opt4=(<HTMLInputElement> document.getElementById(this.qidid+"44")).innerText;
  debugger;
  
  if(opt1==ans)
  {
    (<HTMLInputElement> document.getElementById(this.qidid+"11")).classList.add('correct');
  }else
  if(opt2==ans)
  {
    (<HTMLInputElement> document.getElementById(this.qidid+"22")).classList.add('correct');
  }else
  if(opt3==ans)
  {
    (<HTMLInputElement> document.getElementById(this.qidid+"33")).classList.add('correct');
  }else
  if(opt4==ans)
  {
    (<HTMLInputElement> document.getElementById(this.qidid+"44")).classList.add('correct');
  }
  
  this.correctans=true;
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
},)



};

 

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
 
 
  


  
  


