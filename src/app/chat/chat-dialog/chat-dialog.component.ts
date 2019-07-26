import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';


@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;

  constructor(public chat: ChatService) { }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
        .scan((acc, val) => acc.concat(val) );
       
  }

  sendMessage() {
    // console.log("val "+this.formValue);
    this.chat.converse(this.formValue);
    this.formValue = '';
  }
  btnOutput(event:string){
    // console.log("event "+event);
    this.chat.converse(event);
    this.formValue = '';
  }

  openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
   closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

}
