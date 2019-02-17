import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Mensagem } from 'src/app/models/mensagem';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  public nome: string;
  public mensagemTela: string;
  public mensagens: Mensagem[] = [];
  public chatSubscription: Observable<Mensagem>;

  constructor(private service: ChatService) {
    this.nome = localStorage.getItem('apelido');
  }

  ngOnInit() {

    this.chatSubscription = this.service.getNotificationObservable();
    this.chatSubscription.subscribe((resposta) => {
      this.mensagens.push(resposta);
    }, err => alert(err));
    this.service.start();
  }

  public enviarMensagem(event: Event) {
    event.preventDefault();
    let men = new Mensagem();
    men.nome = this.nome;
    men.msg = this.mensagemTela;
    this.service.enviarMensagem(men);
    this.mensagemTela = '';
  }
}
