using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Framework.DependencyInjection;

namespace AspNet5Gulp
{
	public class Startup
	{
		//public IConfiguration Configuration { get; set; }

		//public Startup(IHostingEnvironment env, IApplicationEnvironment appEnv)
		//{
		//	var builder = new ConfigurationBuilder(appEnv.ApplicationBasePath);
		//	builder.AddEnvironmentVariables();
		//	Configuration = builder.Build();
		//}

		public Startup(IHostingEnvironment env)
		{

		}

		// For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddMvc();
		}

		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			app.UseStaticFiles();
			app.UseDefaultFiles();

			app.UseMvc();
		}
	}
}
