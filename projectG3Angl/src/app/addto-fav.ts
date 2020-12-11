import { AddtoFavService } from './addto-fav.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddtoFav {
    
    mydata: any;
    public selected:boolean;
    
    
    
    constructor(private serv: AddtoFavService) { 
          this.selected=true;
          this.mydata="";
    }

  getFavList(uid:any,qid:any): any{
    // debugger;
    this.serv.getFavList(uid,qid).subscribe((res: any) => {
      this.selected = res.status;
      this.mydata=res;
      console.log("result from service", res.status)
      console.log("service file" +this.selected);    
      
    })
    console.log("service out file" +this.mydata); 
    if (this.selected == true) {
        console.log(("iiifcgsdcvjhds"));
       // console.log(this.mydata.status);
        
    //  this.selected = this.mydata.status;
      return this.selected;
   
    }
    else {
      console.log("no data");
      return this.selected;
      
    }
  
  
    
   
  }


  toggleSelected(favObj:any): boolean {
      console.log("my obj",favObj);
      
   this.selected = !this.selected;
    if (this.selected == true) {
      if (!this.mydata) {
        this.serv.insertFav(favObj).subscribe((res) => {
          console.log(res);
          return this.selected;
        });
        
      }
      else {
        let updateStatus = {
          "status": true
        }
        this.serv.updateFav(this.mydata.id, updateStatus).subscribe((res: any) => {
          alert(res);
        });
        return this.selected;
        

      }

    }
    else {
      alert("inside else " + this.mydata.id);
      let updateStatus = {
        "status": false
      }
      this.serv.updateFav(this.mydata.id, updateStatus).subscribe((res: any) => {
        alert(res);
      });
    }
    return this.selected;

  }






}
