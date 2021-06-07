import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'f-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['sidebar.component.css']
})

export class SideBarComponent implements OnInit{

  isShown:boolean = false;
  criarTop:boolean = false;
  verTops:boolean = false;
  verAdmins:boolean = false;
  @Input() admin: number;
  @Input() email: number;
  @Input() nome: string;

  constructor(private ativadoRotas: ActivatedRoute, private userService: UserService, private route: Router) {}
  ngOnInit(): void {
    this.ativadoRotas.url.subscribe(url => {
      switch (url[1].path) {
        case '': this.verTops = true;
        break;
        case this.userService.getUserName(): this.verTops = true;
        break;
        case 'cria-topico': this.criarTop = true;
        break;
      }
    })
    this.nome = this.userService.getUserName();
    this.admin = this.userService.getUserAdmin();
  }

  toggle(){

    this.isShown = !this.isShown;

  }

  init() {
    this.route.navigateByUrl(`forum/${this.nome}`)
  }
}
