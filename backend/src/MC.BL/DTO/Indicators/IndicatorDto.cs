namespace MC.BL.DTO.Indicators;

/// <summary>
/// DTO индикатора.
/// </summary>
public class IndicatorDto
{
    /// <summary>
    /// Сокращенный аббревиатура показателя.
    /// </summary>
    public string Key { get; set; }

    /// <summary>
    /// Название индикатора.
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// Значение.
    /// </summary>
    public float Value { get; set; }
}