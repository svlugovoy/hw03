import {Component, OnInit, ViewChild} from '@angular/core';
import {Client} from '../../models/Client';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];

  client: Client = {
    name: '',
    email: '',
    age: 0,
    phone: '',
    comment: '',
  };

  @ViewChild('f') form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f) {
    const newClient: Client = {
      id: this.clients.length + 1,
      name: this.client.name,
      email: this.client.email,
      age: this.client.age,
      phone: this.client.phone,
      comment: this.client.comment,
    };
    this.clients.push(newClient);
    this.form.reset();
  }

  removeItem(idx) {
    this.clients.splice(idx, 1);
  }

  // focus(el) {
  //   console.log(el);
  // }

}
