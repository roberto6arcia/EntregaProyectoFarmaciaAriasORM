import { Component, OnInit } from '@angular/core';
import { User } from '../../seguridad/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuario-consulta',
  templateUrl: './usuario-consulta.component.html',
  styleUrls: ['./usuario-consulta.component.css']
})
export class UsuarioConsultaComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.get().subscribe(result => {
      this.users = result;
    });
  }

}
