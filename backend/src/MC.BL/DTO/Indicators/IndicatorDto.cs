namespace MC.BL.DTO.Indicators;

/// <summary>
/// DTO индикатора.
/// </summary>
public class IndicatorDto
{
    /// <summary>
    /// Название индикатора.
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// Значение.
    /// </summary>
    public string Value { get; set; }
}