import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  home:boolean = false;
  contato:boolean = false;
  forum:boolean = false;
  constructor(private ativadoRotas: ActivatedRoute) {}
  ngOnInit(): void {
    this.ativadoRotas.url.subscribe(url => {
      if(!url[0]) this.home = true
      if(url[0]) {
      switch (url[0].path) {
        case 'contato': this.contato = true;
        break;
        case 'forum-login': this.forum = true;
        case 'forum-cadastro': this.forum = true;
        break;
      }
    }
    })
  }
}
