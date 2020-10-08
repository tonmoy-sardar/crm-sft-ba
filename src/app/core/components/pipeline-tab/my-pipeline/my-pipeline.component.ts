import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragStart} from '@angular/cdk/drag-drop';
import { EstimatedTimelineModalComponent } from '../../estimated-timeline-modal/estimated-timeline-modal.component';

@Component({
  selector: 'app-my-pipeline',
  templateUrl: './my-pipeline.component.html',
  styleUrls: ['./my-pipeline.component.scss']
})
export class MyPipelineComponent implements OnInit {  

  presales = [
    {value: 'Get up',  price: 2800, btn:"btn-danger",disabled: false},
    {value: 'Brush teeth',  price: 2900, btn:"btn-success",disabled: false},
    {value: 'Take a shower',  price: 3000, btn:"btn-warning",disabled: false}
  ];

  proposal = [
    {value: 'Check e-mail',  price: 3100, btn:"btn-danger",disabled: false, alert: false},
    {value: 'Walk dog',  price: 3200,btn:"btn-success", alert: true},
    // {value: 'Test a shower',  price: 3300, btn:"btn-warning"}
  ];  

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  dragStarted(event: CdkDragStart<any>){
    // this.showWonLost = true
    
  }

  drop(event: CdkDragDrop<string[]>) {
        
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {     
      let dialogRef = this.dialog.open(EstimatedTimelineModalComponent, {
        width: '525px',
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result == true){
          transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex);
  
        } else {
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
      })
    }
  }
}
