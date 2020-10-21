import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  list = []; list1 = []; list2 = []; list3 = []; list4 = []; list5 = []; list6 = []; list7 = []; list8 = [];

  todo = [
    'A',
    'B',
    'C',
    'D',
    'E'
  ];

  done = [ 
    'F',
    'G',
    'H',
    'I',
    'J'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
