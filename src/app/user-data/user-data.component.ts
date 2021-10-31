import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  usuario: any = {
    idUsuario: "",
    nome: "",
    email: "",
    dataCadastro: ''

  }

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.userData()
      .subscribe(
        (data: any) => {
          this.usuario = data;
        },
        (e: any) => {
          console.log(e);
        }
      )
  }

}
