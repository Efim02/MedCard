namespace MC.WebAPI.Extensions;

using System.Reflection;

using AutoMapper;

using Microsoft.OpenApi.Models;

/// <summary>
/// Методы расширения для <see cref="IServiceCollection" />.
/// </summary>
public static class ServiceCollectionExtensions
{
    /// <summary>
    /// Конфигурация картографа.
    /// </summary>
    private static readonly MapperConfiguration _mapperConfiguration = new(cfg =>
    {
        //cfg.CreateMap<Person, SK.DB.Models.Person>().ReverseMap();
    });

    /// <summary>
    /// Подключение <see cref="IMapper" />.
    /// </summary>
    /// <param name="serviceCollection"> Коллекция сервисов. </param>
    public static void ConnectAutoMapper(this IServiceCollection serviceCollection)
    {
        serviceCollection.AddSingleton(_mapperConfiguration.CreateMapper());
    }

    /// <summary>
    /// Подключение Swagger />.
    /// </summary>
    /// <param name="serviceCollection"> Коллекция сервисов. </param>
    /// <param name="webHostEnvironment"> Среда web. </param>
    public static void ConnectSwagger(this IServiceCollection serviceCollection, IWebHostEnvironment webHostEnvironment)
    {
        serviceCollection.AddSwaggerGen(swaggerGenOptions =>
        {
            swaggerGenOptions.SwaggerDoc("v1", new OpenApiInfo { Title = "MedCard WebAPI", Version = "v1" });
            var executingAssembly = Assembly.GetExecutingAssembly();
            var assemblyDirectory = Path.GetDirectoryName(executingAssembly.Location);
            var assemblyXml = $"{executingAssembly.GetName().Name}.xml";
            swaggerGenOptions.IncludeXmlComments($"{assemblyDirectory}/{assemblyXml}");
        });
    }
}