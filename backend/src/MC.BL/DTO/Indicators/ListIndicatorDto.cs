namespace MC.BL.DTO.Indicators;

using MC.BL.Enums;

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
    /// Способ добавления записи о показателях.
    /// </summary>
    public AddingEnum AddingEnum { get; set; }

    /// <summary>
    /// Индикаторы.
    /// </summary>
    public List<IndicatorDto> Indicators { get; set; }
}