﻿namespace MC.WebAPI
{
    using System.Text.Json.Serialization;

    using MC.BL.Enums;
    using MC.WebAPI.Extensions;
    using MC.WebAPI.Helpers;
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

            // Configure the HTTP request pipeline.
            if (webApplication.Environment.IsDevelopment())
            {
                webApplication.UseSwagger();
                webApplication.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "v1"));
            }
            
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
            serviceCollection.AddControllersWithViews().AddJsonOptions(options =>
                options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter()));

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            serviceCollection.AddEndpointsApiExplorer();
            serviceCollection.AddSwaggerGen();

            serviceCollection.ParametrizeSwagger(webHostEnvironment);
            serviceCollection.AddAutoMapper(typeof(Program));

            RegisterServiceUtils.RegisterDatabase(serviceCollection);

            // Регистрация ограничителей.
            serviceCollection.Configure<RouteOptions>(options =>
            {
                options.ConstraintMap.Add(nameof(AddingEnum), typeof(CustomRouteConstraint<AddingEnum>));
                options.ConstraintMap.Add(nameof(IndicatorEnum), typeof(CustomRouteConstraint<IndicatorEnum>));
            });
        }
    }
}