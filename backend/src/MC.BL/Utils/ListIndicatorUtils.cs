namespace MC.BL.Utils;

using MC.BL.DTO.Indicators;
using MC.BL.Enums;

/// <summary>
/// Утилита для работы со списком индикаторов.
/// </summary>
public static class ListIndicatorUtils
{
    /// <summary>
    /// Создать незаполненный значениями список доступных в БД индикаторов.
    /// </summary>
    /// <param name="recordId"> ИД рекорда. </param>
    /// <returns> Список индикаторов. </returns>
    public static ListIndicatorDto CreateEmptyListIndicator(long recordId = 0)
    {
        var listIndicatorDto = new ListIndicatorDto();
        var enumValues = Enum.GetValues<IndicatorEnum>().ToList();

        enumValues.ForEach(enumValue => listIndicatorDto.Indicators.Add(new IndicatorDto
        {
            IndicatorEnum = enumValue,
            RecordId = recordId
        }));

        return listIndicatorDto;
    }
}