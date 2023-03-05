namespace MC.DB.Models;

using MC.BL.Enums;

/// <summary>
/// Показатель (какой-то).
/// </summary>
public class Indicator
{
    /// <summary>
    /// Тип показателя.
    /// </summary>
    public IndicatorEnum IndicatorEnum { get; set; }

    /// <summary>
    /// Запись.
    /// </summary>
    public Record Record { get; set; }

    /// <summary>
    /// ИД записи.
    /// </summary>
    public long RecordId { get; set; }

    /// <summary>
    /// Значение.
    /// </summary>
    public float Value { get; set; }
}