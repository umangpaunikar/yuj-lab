import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yuj-support-ticket',
  templateUrl: './support-ticket.component.html',
  styleUrls: ['./support-ticket.component.scss'],
})
export class SupportTicketComponent implements OnInit {
  severity = ['High', 'Medium', 'Low'];
  constructor() {}

  ngOnInit(): void {}
}
