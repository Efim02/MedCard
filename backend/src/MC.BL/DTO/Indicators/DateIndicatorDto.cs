namespace MC.BL.DTO.Indicators;

/// <summary>
/// Показатель с датой.
/// </summary>
public class DateIndicatorDto : IndicatorDto
{
    /// <summary>
    /// Дата загрузки показателя.
    /// </summary>
    public DateTime Created { get; set; }
}