﻿namespace MC.WebAPI.Helpers;

using Microsoft.OpenApi.Models;

using Swashbuckle.AspNetCore.SwaggerGen;

/// <summary>
/// Фильтр для Swagger-а, чтобы в Web UI можно было загрузить файл.
/// </summary>
public class SwaggerFileOperationFilter : IOperationFilter
{
    /// <inheritdoc />
    public void Apply(OpenApiOperation operation, OperationFilterContext context)
    {
        const string fileUploadMime = "multipart/form-data";
        if (operation.RequestBody == null || !operation.RequestBody.Content.Any(x =>
                x.Key.Equals(fileUploadMime, StringComparison.InvariantCultureIgnoreCase)))
            return;

        var fileParams = context.MethodInfo.GetParameters().Where(p => p.ParameterType == typeof(IFormFile));
        var schema = operation.RequestBody.Content[fileUploadMime].Schema;
        schema.Properties = fileParams.ToDictionary(k => k.Name, v => new OpenApiSchema
        {
            Type = "string",
            Format = "binary"
        });
    }
}