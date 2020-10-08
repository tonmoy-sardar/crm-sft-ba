import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Output,EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss']
})
export class PipelineComponent implements OnInit {
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  openSettings(){
    this.router.navigateByUrl('/settings');
  }  

}
