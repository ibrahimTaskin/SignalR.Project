using Microsoft.AspNetCore.Mvc;
using SignalR.Hubs.API.Business;

namespace SignalR.Hubs.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HubController : ControllerBase
    {
        IBusinessService _businessService;
        public HubController(IBusinessService businessService)
        {
            _businessService = businessService;
        }

        [HttpGet("{message}")]
        public async Task<IActionResult> Index(string message)
        {
            await _businessService.SendMessageAsync(message);
            return Ok();
        }
    }
}
