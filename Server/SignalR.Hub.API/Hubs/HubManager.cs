using Microsoft.AspNetCore.SignalR;

namespace SignalR.Hubs.API.Hubs
{
    public class HubManager : Hub
    {
        public async Task SendMessageAsync(string message)
        {
            await Clients.All.SendAsync("receiveMessage",message);
        }
    }
}
