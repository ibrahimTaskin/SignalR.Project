using Microsoft.AspNetCore.SignalR;

namespace SignalR.Hubs.API.Hubs
{
    public class HubManager : Hub
    {
        static List<string> clients = new List<string>();
        public async Task SendMessageAsync(string message)
        {
            await Clients.All.SendAsync("receiveMessage",message);
        }

        public override async Task OnConnectedAsync()
        {
            clients.Add(Context.ConnectionId);
            await Clients.All.SendAsync("UserJoined", Context.ConnectionId);
            await Clients.All.SendAsync("Clients", clients);
        }

        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            clients.Remove(Context.ConnectionId);
            await Clients.All.SendAsync("UserLeaved", Context.ConnectionId);
            await Clients.All.SendAsync("Clients", clients);
        }
    }
}
