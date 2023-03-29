import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  infoList:any=[];

  constructor(private postService:PostService, private router:Router) { }

  ngOnInit(): void {
    this.getInfo();
  }


  getInfo(){
    this.postService.getPetition().subscribe(res=>{
      console.log(res)
      this.infoList=res;
    })
  }

}
