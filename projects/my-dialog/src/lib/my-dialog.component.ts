import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-dialog',
  template: `
    <p>
      my-dialog works!
    </p>
  `,
  styles: [
  ]
})
export class MyDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
