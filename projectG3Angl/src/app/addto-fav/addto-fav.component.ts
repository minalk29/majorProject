import { Component, OnInit } from '@angular/core';
import { Addfav } from '../addfav';
import { AddtoFavService } from '../addto-fav.service';



@Component({
  selector: 'app-addto-fav',
  templateUrl: './addto-fav.component.html',
  styleUrls: ['./addto-fav.component.scss']
})
export class AddtoFavComponent implements OnInit {
  selected: boolean = false;
  uid = 2;
  qid = 2;
  mydata: any;
  constructor(private myserv: AddtoFavService, private serv: Addfav) {


    this.myserv.getFavList(this.uid, this.qid).subscribe((res: any) => {
      this.mydata = res;
      console.log("data", this.mydata);
      this.selected = this.serv.getList(this.mydata);
    });

  }

  ngOnInit(): void { }

  fav = {
    "quizid": this.qid,
    "userid": this.uid,
    "status": true
  }
  toggleSelected(): void {
    this.selected = this.serv.favToggel(this.fav);
  }



}
