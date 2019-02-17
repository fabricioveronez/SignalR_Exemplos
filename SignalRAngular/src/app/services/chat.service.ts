import { Injectable } from '@angular/core';
import { HubConnectionBuilder, HubConnection, LogLevel } from '@aspnet/signalr'
import { Subject, Observable } from 'rxjs';
import { Mensagem } from '../models/mensagem';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private hubConnection: HubConnection;
  private subject = new Subject<Mensagem>();

  constructor() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(`${environment.url}/hubs/chat`)
      .configureLogging(LogLevel.Information)
      .build();

    this.hubConnection.on("RecebendoMensagem", (mensagem) => {
      this.subject.next(mensagem);
    });
  }

  public start(): void {
    this.hubConnection.start();
  }

  public getNotificationObservable(): Observable<Mensagem> {
    return this.subject.asObservable();
  }

  public enviarMensagem(mensagem: Mensagem): void {
    this.hubConnection.invoke("EnviarMensagem", mensagem)
    .catch(err => console.error(err.toString()));
  }
}
