namespace MC.WebAPI.Controllers;

using MC.BL.DTO;
using MC.BL.DTO.Indicators;

using Microsoft.AspNetCore.Mvc;

/// <summary>
/// Контроллер для обработки сущностей пользователь.
/// </summary>
[ApiController]
[Route("api/user")]
public class UserController : ControllerBase
{
    /// <summary>
    /// Получить последние индикаторы пользователя.
    /// </summary>
    /// <param name="id"> ИД пользователя. </param>
    /// <returns> Словарь: {ключ-название; значение}. </returns>
    [HttpGet]
    [Route("{id:long}/indicator")]
    public ListIndicatorDto GetLastIndicators(long id)
    {
        throw new NotImplementedException();
    }

    /// <summary>
    /// Получить пользователя.
    /// </summary>
    /// <param name="id"> ИД пользователя. </param>
    /// <returns> DTO пользователя. </returns>
    [HttpGet]
    [Route("{id:long}")]
    public UserDto GetUser(long id)
    {
        throw new NotImplementedException();
    }

    /// <summary>
    /// Обновить данные пользователя.
    /// </summary>
    /// <param name="id"> ИД пользователя. </param>
    /// <param name="weight"> Вес. </param>
    /// <param name="height"> Рост. </param>
    [HttpPut]
    [Route("{id:long}")]
    public IActionResult UpdateUser(long id, float weight, float height)
    {
        throw new NotImplementedException();
    }
}