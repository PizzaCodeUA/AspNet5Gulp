using System.Collections.Generic;
using AspNet5Gulp.Models;
using Microsoft.AspNet.Mvc;

namespace AspNet5Gulp.Controllers
{
	[Route("api/[controller]")]
	public class UsersController : Controller
	{
		private readonly List<User> _users = new List<User>
		{
			new User {Id = 1, Name = "Frank Wierman", Email = "frank@gmail.com", Phone = "800256841"},
			new User {Id = 2, Name = "Jessica Alba", Email = "jessica@gmail.com", Phone = "8008462105"},
			new User {Id = 3, Name = "Bill Peterson", Email = "bill@gmail.com", Phone = "8008742941"}
		};

		// GET api/values
		[HttpGet]
		public IEnumerable<User> Get()
		{
			return _users;
		}

		//// GET api/values/5
		//[HttpGet("{id}")] 
		//public User Get(int id)
		//{
		//	return _users.First(u => u.Id == id);
		//}

		//// POST api/values
		//[HttpPost] 
		//public void Post([FromBody] User user)
		//{
		//	_users.Add(user);
		//}

		//// DELETE api/values/5
		//[HttpDelete("{id}")]  
		//public void Delete(int id)
		//{
		//	_users.Remove(_users.First(u => u.Id == id));
		//}
	}
}