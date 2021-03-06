import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'yuj-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input()
  personName!: string;

  @Input() userProfile!: any;

  profileUrl = 'assets/profile.jpeg';

  @Output() loginDetails = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.loginDetails.emit('Hello From Profile');
  }
}
