namespace MC.BL.Enums;

using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

/// <summary>
/// Тип показателя.
/// </summary>
[JsonConverter(typeof(StringEnumConverter))]
public enum IndicatorEnum
{
    /// <summary>
    /// Показатели: абсолютное содержание эритроцитов.
    /// </summary>
    RBC = 1001,

    /// <summary>
    /// Показатели: средний объем на 1 мкм эритроцитов.
    /// </summary>
    MCV = 1002,

    /// <summary>
    /// Показатели: концентрация гемоглобина.
    /// </summary>
    HGB = 1003,

    /// <summary>
    /// Показатели: среднее содержание гемоглобина в отдельном эритроците.
    /// </summary>
    MCH = 1004,

    /// <summary>
    /// </summary>
    CP = 1005,

    /// <summary>
    /// </summary>
    PLT = 1006,

    /// <summary>
    /// </summary>
    HCT = 1007,

    /// <summary>
    /// </summary>
    MCHC = 1008,

    /// <summary>
    /// </summary>
    RET = 1009,

    /// <summary>
    /// </summary>
    WBC = 1010,

    /// <summary>
    /// </summary>
    MVP = 1011,

    /// <summary>
    /// </summary>
    RFV = 1012,

    /// <summary>
    /// </summary>
    ESR = 1013
}