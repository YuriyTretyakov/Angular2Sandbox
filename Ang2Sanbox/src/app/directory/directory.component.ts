import { Component, OnInit, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';
declare var firebase: any;


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
  
  
})
export class DirectoryComponent implements OnInit {

  userenter: string;
  ninjas = [];
  name: string;
  belt: string;

  constructor(private logger: LoggingService,
              private dataService: DataService) {

    
  }

  logIt() {
    this.logger.log();
  }

  ngOnInit() {

    this.fbSubscribeChildRemoved();
    this.fbGetData();
  }

  fbGetData() {
    firebase.database().ref('/').on('child_added', (snapshot) => {
      this.ninjas.push(snapshot.val());
    })

  }

  fbSubscribeChildRemoved() {
    firebase.database().ref('/').on('child_removed', (snapshot) => {
      var ninjaToDelete = snapshot.val().name;
      console.log("snapshot.val().name=" + ninjaToDelete);
      this.ninjas = this.ninjas.filter(function (ninja) {
        return ninja.name !== ninjaToDelete;
      });
    });
}

  fbPostData(name: string, belt: string) {
    firebase.database().ref('/').push({ name: name, belt: belt });
    this.name = "";
    this.belt = "";
  }

  fbDelete($event) {
    var ninjaName = $event.target.getAttribute('data-name');
    this.dataService.fetchData().subscribe(data => {
    var key = Object.keys(data).find(key => data[key].name === ninjaName);
    var item = firebase.database().ref('/').child(key).remove();
    });
  }
  

}
