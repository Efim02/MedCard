namespace MC.BL.Interfaces.DB;

using MC.BL.DTO;
using MC.BL.DTO.Indicators;
using MC.BL.Enums;

/// <summary>
/// Репозиторий записей.
/// </summary>
public interface IRecordRepository : IBaseRepository<RecordDto>
{
    /// <summary>
    /// Получить записи по ИД пользователя.
    /// </summary>
    /// <param name="userId"> ИД пользователя. </param>
    /// <returns> Список ДТО записей. </returns>
    Task<List<RecordDto>> GetRecordsByUserId(long userId);

    /// <summary>
    /// Получить запись с включенными в нее показателей.
    /// </summary>
    /// <param name="id"> ИД записи. </param>
    /// <returns> Запись. </returns>
    Task<RecordDto> GetRecordWithIndicators(long id);

    /// <summary>
    /// Получить значения по типу индикатору.
    /// </summary>
    /// <param name="indicatorEnum"> Тип индикатора. </param>
    /// <param name="userId"> ИД пользователя. </param>
    /// <returns> Список показателей. </returns>
    Task<List<DateIndicatorDto>> GetValuesByIndicator(IndicatorEnum indicatorEnum, long userId);
}