using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using SignalRAzureServices.Web.Hubs;

namespace SignalRAzureServices.Web
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            // Adicionando suporte ao SignalR
            services.AddSignalR().AddAzureSignalR("Endpoint=https://dotnetinside.service.signalr.net;AccessKey=lQtYADDPzyJPMAAB4XZ5bv2WqJ34lYXPhjFgnXU5bcc=;Version=1.0;");
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(builder =>
            {
                builder.WithOrigins("http://localhost:4200", "http://localhost:4200/chat")
                    .AllowAnyHeader()
                    .WithMethods("GET", "POST")
                    .AllowCredentials();
            });

            // Configuro os hubs do SignalR
            app.UseAzureSignalR(routes =>
            {
                routes.MapHub<ChatHub>("/hubs/chat");
            });

            app.UseMvc();
        }
    }
}
