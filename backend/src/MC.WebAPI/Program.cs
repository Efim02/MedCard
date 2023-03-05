namespace MC.WebAPI
{
    using MC.DB;
    using MC.WebAPI.Extensions;
    using MC.WebAPI.Utils;

    using Microsoft.EntityFrameworkCore;

    /// <summary>
    /// Начало выполнения программы.
    /// </summary>
    public static class Program
    {
        /// <summary>
        /// Главный метод.
        /// </summary>
        /// <param name="args"> Аргументы запуска-вызова. </param>
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            RegisterServices(builder.Services, builder.Environment);

            var webApplication = builder.Build();

            webApplication.UseRouting();
            webApplication.UseEndpoints(endPoints => 
                endPoints.MapControllerRoute("default", "{controller=Home}/{action=Index}/{id?}"));

            // Configure the HTTP request pipeline.
            if (webApplication.Environment.IsDevelopment())
            {
                webApplication.UseSwagger();
                webApplication.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "v1"));
            }

            webApplication.MapControllers();
            webApplication.Run();
        }

        /// <summary>
        /// Регистрация сервисов.
        /// </summary>
        /// <param name="serviceCollection"> Сервисы. </param>
        /// <param name="webHostEnvironment"> Среда web. </param>
        private static void RegisterServices(IServiceCollection serviceCollection, IWebHostEnvironment webHostEnvironment)
        {
            // Add services to the container.
            serviceCollection.AddControllers();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            serviceCollection.AddEndpointsApiExplorer();
            serviceCollection.AddSwaggerGen();

            serviceCollection.ConnectSwagger(webHostEnvironment);
            serviceCollection.ConnectAutoMapper();

            RegisterServiceUtils.RegisterDatabase(serviceCollection);
        }
    }
}