using Microsoft.AspNetCore.SignalR;
using SignalR.Hubs.API.Hubs;

namespace SignalR.Hubs.API.Business
{
    public class BusinessService : IBusinessService
    {
        IHubContext<HubManager> _hubContext;

        public BusinessService(IHubContext<HubManager> hubContext)
        {
            _hubContext = hubContext;
        }

        public async Task SendMessageAsync(string message)
        {
            await _hubContext.Clients.All.SendAsync("ReceiveMessage", message);
        }
    }
}
