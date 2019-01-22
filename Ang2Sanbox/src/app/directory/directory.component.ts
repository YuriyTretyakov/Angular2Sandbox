import { Component, Inject,OnInit} from '@angular/core';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';
import { ConfirmationDialog } from '../ConfirmationDialog/confirmationdialog.component';
import { MatDialog} from '@angular/material';

declare var firebase: any;


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']


})
export class DirectoryComponent implements OnInit {

  ninjaSelected: string;
  userenter: string;
  ninjas = [];
  name: string;
  belt: string;

  constructor(private logger: LoggingService,
    private dataService: DataService, public dialog: MatDialog) { }

  logIt() {
    this.logger.log();
  }

  ngOnInit() {
    firebase = {};
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

  fbDelete(ninjaName: string) {
    this.dataService.fetchData().subscribe(data => {
      var key = Object.keys(data).find(key => data[key].name === ninjaName);
      var item = firebase.database().ref('/').child(key).remove();
    });
  }

  openDialog(ninjaName: string): void {
    this.ninjaSelected = ninjaName;
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      width: '250px',
      data: {
        title: 'Confirm Ninja Delete',
        text: 'Are you sure you want to delete ninja ' + ninjaName + '?',
        name: ninjaName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed.Result=' + result);

      if (result) {
        this.fbDelete(result);
      }
    });
  }
}
