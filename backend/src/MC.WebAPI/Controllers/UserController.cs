﻿namespace MC.WebAPI.Controllers;

using MC.BL.DTO;
using MC.BL.DTO.Indicators;
using MC.BL.Interfaces.DB;

using Microsoft.AspNetCore.Mvc;

/// <summary>
/// Контроллер для обработки сущностей пользователь.
/// </summary>
[ApiController]
[Route("api/user")]
public class UserController : ControllerBase
{
    /// <summary>
    /// Репозиторий пользователей.
    /// </summary>
    private readonly IUserRepository _userRepository;

    /// <summary>
    /// Контроллер для обработки сущностей пользователь.
    /// </summary>
    public UserController(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    /// <summary>
    /// Создать пользователя.
    /// </summary>
    /// <param name="userDto"> Пользователь. </param>
    [HttpPost]
    public async Task<IActionResult> AddUser([FromBody] UserDto userDto)
    {
        await _userRepository.Create(userDto);
        return Ok();
    }

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
    public async Task<IActionResult> GetUser(long id)
    {
        var userDto = await _userRepository.Get(id);
        return Ok(userDto);
    }

    /// <summary>
    /// Обновить данные пользователя.
    /// </summary>
    /// <param name="id"> ИД пользователя. </param>
    /// <param name="weight"> Вес. </param>
    /// <param name="height"> Рост. </param>
    [HttpPut]
    [Route("{id:long}")]
    public async Task<IActionResult> UpdateUser(long id, float weight, float height)
    {
        var userDto = await _userRepository.Get(id);
        userDto.Weight = weight;
        userDto.Height = height;

        await _userRepository.Update(userDto);
        return Ok();
    }
}