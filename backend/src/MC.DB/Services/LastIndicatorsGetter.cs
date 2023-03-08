namespace MC.DB.Services;

using MC.BL.DTO.Indicators;
using MC.BL.Extensions;
using MC.BL.Utils;
using MC.DB.Models;

/// <summary>
/// Сервис для получения последних индикаторов по записям.
/// </summary>
internal class LastIndicatorsGetter
{
    /// <summary>
    /// Записи отсортированные с "последней к первой".
    /// </summary>
    private readonly List<Record> _records;

    /// <summary>
    /// Сервис для получения последних индикаторов по записям.
    /// </summary>
    public LastIndicatorsGetter(List<Record> records)
    {
        _records = records;
        _records.Reverse();
    }

    /// <summary>
    /// Получить список индикаторов.
    /// </summary>
    /// <returns> Список индикаторов. </returns>
    public async Task<ListIndicatorDto> GetListIndicators()
    {
        var listIndicatorDto = ListIndicatorUtils.CreateEmptyListIndicator();
        var indicatorDtos = new List<IndicatorDto>();
        await listIndicatorDto.Indicators.InvokeParallelAsync(indicatorDto =>
            SetLastValueIndicator(indicatorDtos, indicatorDto));
        listIndicatorDto.Indicators = indicatorDtos;

        return listIndicatorDto;
    }


    /// <summary>
    /// Установить последние возможное значение для индикатора и добавить его в список индикаторов.
    /// </summary>
    /// <param name="indicatorDtos"> Список индикаторов. </param>
    /// <param name="indicatorDto"> Индикатор. </param>
    private void SetLastValueIndicator(ICollection<IndicatorDto> indicatorDtos, IndicatorDto indicatorDto)
    {
        var indicatorEnum = indicatorDto.IndicatorEnum;
        foreach (var record in _records)
        {
            var indicator = record.Indicators.FirstOrDefault(i => i.IndicatorEnum == indicatorEnum);
            if (indicator == null)
                continue;

            indicatorDto.Value = indicator.Value;
            indicatorDto.RecordId = indicator.RecordId;
            indicatorDtos.Add(indicatorDto);
            return;
        }
    }
}