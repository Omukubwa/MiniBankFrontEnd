import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <div *ngIf="show" class="alert alert-{{ type }} alert-dismissible fade show" role="alert">
      {{ message }}
      <button type="button" class="close" aria-label="Close" (click)="close()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  `,
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() show: boolean = false;
  @Input() type: string = 'success';
  @Input() message: string = '';

  close() {
    this.show = false;
  }
}
