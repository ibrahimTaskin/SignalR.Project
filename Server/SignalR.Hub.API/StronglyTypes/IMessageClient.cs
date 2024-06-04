namespace SignalR.Hubs.API.StronglyTypes
{
    // UI funcs we'll trigger 
    public interface IMessageClient
    {
        Task Clients(List<string> clients);
        Task UserJoined(string connectionId);
        Task UserLeaved(string connectionId);
    }
}
