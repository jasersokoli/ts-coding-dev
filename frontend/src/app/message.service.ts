import { Injectable } from '@angular/core';

export class Message { // <-- Exporting the class
  text: string;
  status: string;
  constructor(message: string, status: string) {
    this.text = message;
    this.status = status;
  }

  empty() {
    return this.text === '';
  }
}

@Injectable()
export class MessageService {
  messages: Message[] = [];

  async all() {
    const res = await fetch('http://127.0.0.1:3000/api/messages');
    const data = await res.json();

    this.messages = data.messages.map((message: any) => new Message(message.text, message.status));
  }

  async add(message: Message) {
    this.messages.push(message);
  }
}
