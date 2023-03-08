namespace MC.BL.Interfaces.DB;

using MC.BL.DTO;
using MC.BL.DTO.Indicators;

/// <summary>
/// Репозиторий пользователей.
/// </summary>
public interface IUserRepository : IBaseRepository<UserDto>
{
    /// <summary>
    /// Получить последние индикаторы пользователя.
    /// </summary>
    /// <param name="id"> ИД пользователя. </param>
    /// <returns> Список индикаторов. </returns>
    Task<ListIndicatorDto> GetLastIndicators(long id);
}