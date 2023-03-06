namespace MC.BL.Enums;

using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

/// <summary>
/// Способ добавления записи о показателях.
/// </summary>
[JsonConverter(typeof(StringEnumConverter))]
public enum AddingEnum
{
    /// <summary>
    /// Парсингом, файла.
    /// </summary>
    Parse = 1,

    /// <summary>
    /// Ручной ввод.
    /// </summary>
    Input = 2
}