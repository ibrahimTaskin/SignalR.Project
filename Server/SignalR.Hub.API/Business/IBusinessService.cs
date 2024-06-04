namespace SignalR.Hubs.API.Business
{
    public interface IBusinessService
    {
        Task SendMessageAsync(string message);
    }
}
