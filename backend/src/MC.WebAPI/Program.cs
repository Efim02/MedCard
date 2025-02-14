namespace MC.WebAPI
{
    using System.Text.Json.Serialization;

    using Helpful.Api.Parameters;
    using Helpful.Api.Swagger;

    using MC.BL.Enums;
    using MC.WebAPI.Utils;

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
            builder.Services.AddCors(options =>
            {
                // TODO: Странно, это не должно было отработать, но отработало.
                options.AddDefaultPolicy(policy => policy.WithOrigins("http://localhost:3000"));
            });

            RegisterServices(builder.Services, builder.Environment);

            var webApplication = builder.Build();

            webApplication.UseRouting();
            webApplication.UseCors(o => o.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
            webApplication.UseEndpoints(endPoints =>
                endPoints.MapControllerRoute("default", "{controller=Home}/{action=Index}/{id?}"));

            // TODO: Для использования Https необходимо в Docker-е его настроить.
            //webApplication.UseHttpsRedirection();

            webApplication.ParametrizeSwagger();

            webApplication.MapControllers();
            RegisterServiceUtils.MigrateDatabase(webApplication);

            webApplication.Run();
        }

        /// <summary>
        /// Регистрация сервисов.
        /// </summary>
        /// <param name="serviceCollection"> Сервисы. </param>
        /// <param name="webHostEnvironment"> Среда web. </param>
        private static void RegisterServices(IServiceCollection serviceCollection,
            IWebHostEnvironment webHostEnvironment)
        {
            // Add services to the container.
            serviceCollection.AddControllers();
            
            serviceCollection.ParametrizeSwagger();
            serviceCollection.AddAutoMapper(typeof(Program));

            RegisterServiceUtils.RegisterDatabase(serviceCollection);

            // Регистрация ограничителей.
            serviceCollection.Configure<RouteOptions>(options =>
            {
                options.ConstraintMap.Add(nameof(AddingEnum), typeof(CustomRouteConstraint<AddingEnum>));
                options.ConstraintMap.Add(nameof(IndicatorEnum), typeof(CustomRouteConstraint<IndicatorEnum>));
            });
            
            serviceCollection.RegisterEnumString<AddingEnum>();
        }
    }
}