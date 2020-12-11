import { Component, OnInit } from '@angular/core';
import { AddtoFavService } from '../addto-fav.service';

@Component({
  selector: 'app-nav-fav',
  templateUrl: './nav-fav.component.html',
  styleUrls: ['./nav-fav.component.scss']
})
export class NavFavComponent implements OnInit {
uid:number=2;
myfavlist:any;
  constructor(private serv:AddtoFavService) { }

  ngOnInit(): void {}

  getFavList(){
    this.serv.getMyFavlist(this.uid).subscribe((res: any) => {
      this.myfavlist=res;
      console.log(this.myfavlist);
      
    })
  }

}
