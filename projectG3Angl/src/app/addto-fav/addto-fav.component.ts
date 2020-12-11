import { Component, OnInit } from '@angular/core';
import { AddtoFav } from '../addto-fav';



@Component({
  selector: 'app-addto-fav',
  templateUrl: './addto-fav.component.html',
  styleUrls: ['./addto-fav.component.scss']
})
export class AddtoFavComponent implements OnInit {
  selected:boolean=false;
  uid = 2;
  qid = 2;
  mydata: any;
  constructor(private serv:AddtoFav ) { }

  ngOnInit(): void {

this.getfav();


    
    

    // this.serv.getFavList(this.uid, this.qid).subscribe((res: any) => {
    //   this.mydata = res;
    //   console.log(this.mydata);
    //   if (this.mydata != null) {
    //     this.selected = this.mydata.status;

    //   }
    //   else {
    //     console.log("no data");
    //   }
    //   // console.log(this.mydata.status);
    //   // console.log(this.mydata);
    // });
  }

   getfav()
  {
    this.selected=this.serv.getFavList(this.uid,this.qid);
console.log("inside main   ",this.selected);
  }


  fav = {
    "quizid": this.qid,
    "userid": this.uid,
    "status": true
  }

  favToggle():void{
      this.selected=this.serv.toggleSelected(this.fav);
  }

    
  // toggleSelected(): void {
  //   this.selected = !this.selected;
  //   if (this.selected == true) {
  //     if (!this.mydata) {
  //       this.serv.insertFav(this.fav).subscribe((res) => {
  //         console.log(res);
  //       });
  //     }
  //     else {
  //       let updateStatus = {
  //         "status": true
  //       }
  //       this.serv.updateFav(this.mydata.id, updateStatus).subscribe((res: any) => {
  //         alert(res);
  //       });

  //     }

  //   }
  //   else {
  //     alert("inside else " + this.mydata.id);
  //     let updateStatus = {
  //       "status": false
  //     }
  //     this.serv.updateFav(this.mydata.id, updateStatus).subscribe((res: any) => {
  //       alert(res);
  //     });
  //   }


  // }

}
