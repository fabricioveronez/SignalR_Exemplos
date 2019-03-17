using Microsoft.AspNetCore.SignalR;
using SignalRAzureServices.Web.Modelo;
using System;
using System.Threading.Tasks;

namespace SignalRAzureServices.Web.Hubs
{
    public class ChatHub : Hub
    {

        private static int contador;

        public async Task EnviarMensagem(Mensagem mensagem)
        {
            await Clients.All.SendAsync("RecebendoMensagem", mensagem);
        }

        public override async Task OnConnectedAsync()
        {
            contador++;
            Console.WriteLine(string.Format("{0} usuários online.", contador));
            await base.OnConnectedAsync();
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            contador--;
            Console.WriteLine(string.Format("{0} usuários online.", contador));
            await base.OnDisconnectedAsync(exception);
        }
    }

}
