import { Component, OnInit } from '@angular/core';
import { NgForOf } from "@angular/common";
import { MessageService, Message } from './message.service';
import { MessageComponent } from './message.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  providers: [MessageService],
  imports: [
    NgForOf,
    MessageComponent
  ],
  template: `
    <div>
      <div *ngFor="let message of messages; index as i;">
        <app-massage [message]="message" [no]="i"></app-massage>
      </div>
    </div>
  `,
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageService) {}

  async ngOnInit() {
    await this.messageService.all();
    this.messages = this.messageService.messages;
  }
}
