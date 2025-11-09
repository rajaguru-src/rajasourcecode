import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipecomponent',
  templateUrl: './pipecomponent.component.html',
  styleUrls: ['./pipecomponent.component.sass']
})
export class PipecomponentComponent implements OnInit {
  public notes:any [];
  constructor() { 
    this.notes = [
      { title: 'Note 1', status: 'Active' },
      { title: 'Note 2', status: 'Pending' },
      { title: 'Note 3', status: 'Complete' },
    ];
  }
  ngOnInit(): void {    
  }

}
