import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],

  
})
export class DirectoryComponent implements OnInit {

   userenter: string;

  constructor(private route: ActivatedRoute) {

    
  }

  ngOnInit() {
    
    this.ninjas = [
      { name: "Yoshi", belt: "black" },
      { name: "Ryu", belt: "red" },
      { name: "Crystal", belt: "green" }
    ];

  }

  ninjas = [];
  
}
