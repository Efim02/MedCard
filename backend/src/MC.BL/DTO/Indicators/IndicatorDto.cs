namespace MC.BL.DTO.Indicators;

using MC.BL.Enums;

/// <summary>
/// DTO индикатора.
/// </summary>
public class IndicatorDto
{
    /// <summary>
    /// Сокращенный аббревиатура показателя.
    /// </summary>
    public IndicatorEnum IndicatorEnum { get; set; }

    /// <summary>
    /// ИД записи.
    /// </summary>
    public long RecordId { get; set; }

    /// <summary>
    /// Значение.
    /// </summary>
    public float Value { get; set; }
}