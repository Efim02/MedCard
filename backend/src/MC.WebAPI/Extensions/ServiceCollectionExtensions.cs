namespace MC.WebAPI.Extensions;

using System.Reflection;

using MC.WebAPI.Helpers;

using Microsoft.OpenApi.Models;

/// <summary>
/// Методы расширения для <see cref="IServiceCollection" />.
/// </summary>
public static class ServiceCollectionExtensions
{
    /// <summary>
    /// Подключение Swagger />.
    /// </summary>
    /// <param name="serviceCollection"> Коллекция сервисов. </param>
    /// <param name="webHostEnvironment"> Среда web. </param>
    public static void ParametrizeSwagger(this IServiceCollection serviceCollection, IWebHostEnvironment webHostEnvironment)
    {
        serviceCollection.AddSwaggerGen(swaggerGenOptions =>
        {
            swaggerGenOptions.SwaggerDoc("v1", new OpenApiInfo { Title = "MedCard WebAPI", Version = "v1" });
            swaggerGenOptions.OperationFilter<SwaggerFileOperationFilter>();
            var executingAssembly = Assembly.GetExecutingAssembly();
            var assemblyDirectory = Path.GetDirectoryName(executingAssembly.Location);
            var assemblyXml = $"{executingAssembly.GetName().Name}.xml";
            swaggerGenOptions.IncludeXmlComments($"{assemblyDirectory}/{assemblyXml}");
        });
    }
}