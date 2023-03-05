namespace MC.BL.DTO.Indicators;

/// <summary>
/// Список индикаторов.
/// </summary>
public class ListIndicatorDto
{
    /// <summary>
    /// Список индикаторов.
    /// </summary>
    public ListIndicatorDto()
    {
        Indicators = new List<IndicatorDto>();
    }

    /// <summary>
    /// Индикаторы.
    /// </summary>
    public List<IndicatorDto> Indicators { get; set; }
}