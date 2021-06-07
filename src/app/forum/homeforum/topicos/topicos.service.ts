import { criaTopico } from './../../criarpage/criartopicos/criatopico';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.ApiUrl;
@Injectable({ providedIn: 'root' })
export class TopicosService {
  constructor(private http: HttpClient) {}
  params;
    getTopicos() {
      return this.http.get(API + `/usuario/topicos/`)
    }

    perfilUsuario(id: number) {
      return this.http.get(API + '/' + id + '/perfil')
    }

    pegaParametro(id: number) {
      this.params = id;
    }

    devolveParams() {
      return this.params
    }

    ListaCategorias () {
      return this.http.get(API + '/lista/categorias')
    }

    CadastraTopico(topico: criaTopico) {
      return this.http.post<criaTopico>(API + '/usuario/topicos', topico)
    }

    ListaRespostas(idTopico) {
      return this.http.get(API + '/lista/total-res/' + idTopico)
    }

    Topico(idTopico) {
      return this.http.get(API + '/usuario/topico/' + idTopico)
    }

    Respostas(idTopico) {
      return this.http.get(API + '/usuario/respostas-topico/' + idTopico)
    }

    Responde(idtTopico, resposta) {
      return this.http.post(API + `/usuario/respostas-topico/${idtTopico}`, resposta)
    }

    CurtirTop(iddtTopico, like) {
      return this.http.post(API + `/usuario/like-topico/${iddtTopico}`, like)
    }

    DescurtirTop(idTopico, like) {
      return this.http.delete(API + `/usuario/like-topico/${idTopico}`, like)
    }

    EhDonoLike(iddtTopico) {
      return this.http.get(API + `/usuario/dono-like/${iddtTopico}`)
    }

    PegaTopicoUser() {
      return this.http.get(API + '/usuario/meu-topico/')
    }

    PegaListaLikes(topicoId) {
      return this.http.get(API + `/lista/likes-topico/${topicoId}`)
    }
}

