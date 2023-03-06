namespace MC.BL.DTO;

using MC.BL.DTO.Indicators;
using MC.BL.Enums;

/// <summary>
/// DTO - записи показателей.
/// </summary>
public class RecordDto : BaseDto
{
    /// <summary>
    /// Способ добавления записи о показателях.
    /// </summary>
    public AddingEnum AddingEnum { get; set; }

    /// <summary>
    /// Дата создания записи.
    /// </summary>
    public DateTime Created { get; set; }

    /// <summary>
    /// Индикаторы для данной записи.
    /// </summary>
    public List<IndicatorDto> Indicators { get; set; }

    /// <summary>
    /// ИД пользователя.
    /// </summary>
    public long UserId { get; set; }
}