import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.Emulated // Default
  encapsulation: ViewEncapsulation.None // Removes ViewEncapsulation | Styles put in for this Component will be applicable to All Components *
})
export class ServerElementComponent implements OnInit {

  @Input('serverEl') element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit(): void {
  }

}
