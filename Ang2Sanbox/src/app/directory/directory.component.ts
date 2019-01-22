import { Component, OnInit, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';
import { ConfirmationDialog } from '../ConfirmationDialog/confirmationdialog';
import { MatDialogRef,  MatDialog } from '@angular/material';

declare var firebase: any;


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
  
  
})
export class DirectoryComponent implements OnInit {

  dialogRef: MatDialogRef<ConfirmationDialog>;
  userenter: string;
  ninjas = [];
  name: string;
  belt: string;

  constructor(private logger: LoggingService,
    private dataService: DataService, private dialog: MatDialog) {

    
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

  fbDelete(ninjaId:string) {
    var item = firebase.database().ref('/').child(ninjaId).remove();
  }

  openConfirmationDialog(name: string, id: string) {
    let config = { with: '650px', height: '400px', position: { top: '50px' } };
    let dlgRef = this.dialog.open(this.dialogRef, config);
    
    dlgRef.componentInstance.confirmMessage = "Are you sure you want to delete " + name + " ?"

    dlgRef.afterClosed().subscribe(result => {
      if (result) {
        this.fbDelete(id);
      }
      this.dialogRef = null;
    });
        
  }
}
