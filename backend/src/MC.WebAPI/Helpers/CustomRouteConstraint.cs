namespace MC.WebAPI.Helpers;

/// <summary>
/// Пользовательская реализация ограничителя для работы с Enum-ом.
/// </summary>
/// <typeparam name="TEnum"> Тип Enum-а. </typeparam>
public class CustomRouteConstraint<TEnum> : IRouteConstraint where TEnum : struct, Enum
{
    /// <inheritdoc />
    public bool Match(HttpContext? httpContext, IRouter? route, string routeKey, RouteValueDictionary values,
        RouteDirection routeDirection)
    {
        var routeValueString = values[routeKey]?.ToString();
        return Enum.TryParse(routeValueString, true, out TEnum _);
    }
}