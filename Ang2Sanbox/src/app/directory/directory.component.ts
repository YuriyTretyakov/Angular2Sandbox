import { Component, OnInit, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
  
  
})
export class DirectoryComponent implements OnInit {

   userenter: string;

  constructor(private logger: LoggingService) {

    
  }

  logIt() {
    this.logger.log();
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
