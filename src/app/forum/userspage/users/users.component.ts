import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { UserService } from '../../core/user/user.service';
@Component({
  selector: 'f-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  @Input() usuarios;
  campo = new FormControl();
  pesquisa: any;
  idUser: any;
  total: any;

  constructor(private userService: UserService, private ativadorDeRota: ActivatedRoute, private router: Router, private AlertService: AlertService) {}

  ngOnInit() {

      this.userService.getUsers().subscribe(data => {
        this.usuarios = data,
        this.total = data
      }, err => {
        if(err.status == 401) {
          this.AlertService.danger('Você não tem autorização para acessar essa rota!')
          setTimeout(() => this.router.navigateByUrl('forum'), 3000)
        } else if(err.status == 500) {
          this.AlertService.danger('Problemas com o servidor, por favor tente novamente mais tarde.')
          setTimeout(() => this.router.navigateByUrl('forum'), 3000)
        }
      })

    this.campo.valueChanges.pipe(
      map(value => value.trim()),
      filter(value => value.length > -1),
      debounceTime(450),
      distinctUntilChanged(),
      ).subscribe(value => {
        if(value) {
          this.pesquisa = this.total.filter(topico =>
            topico.nome.toLowerCase().includes(value.toLowerCase()) ||
            topico.email.toLowerCase().includes(value.toLowerCase()))
        } else {
          this.pesquisa = false;
        }
      });

    this.ativadorDeRota.params.subscribe(params => {
      this.idUser = params.id
    })

  }

  perfil(perfilId: number){
     this.router.navigate(['/forum/perfil', perfilId])
  }


  subir() {
    window.scroll(0,0);
  }
}

