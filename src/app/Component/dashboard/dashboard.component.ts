import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
import{UserserviceService} from '../../Services/Users/userservice.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  p: number = 1;
 totaluser=[];
 Basic:string;
 Advance:string;
 items:string;
 user=[];
 config: any;
  constructor(private route:Router,private userservice:UserserviceService) { 
    
  }

  ngOnInit() {
    this.GetAllStatistics()
    this.GetAllUsername(this.items)
  }
  logout() {
    localStorage.removeItem("token");
    this.route.navigate(["login"]);
  }
  GetAllStatistics()
  {
    this.userservice.GetStatistics().subscribe(data=>{
   this.Basic=data['result'].Basic,
   this.Advance=data['result'].Advance

    })
  }
  searched = [];
  GetAllUsername(items) {
    if(items)
    {
      console.log(items)
      this.userservice.GetAllUsername(items).subscribe(response => {
        this.searched = response['result'];
        console.log(this.searched)
      })
    }
    else
    {
      this.userservice.GetAllUser().subscribe(response=>{
        console.log(response)
        this.searched=response['result']
        console.log("all user list",this.user)
      }) 
    } 
  } 
}
