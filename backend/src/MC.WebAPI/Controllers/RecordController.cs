﻿namespace MC.WebAPI.Controllers;

using MC.BL.DTO;
using MC.BL.DTO.Indicators;
using MC.BL.Enums;
using MC.BL.Interfaces.DB;

using Microsoft.AspNetCore.Mvc;

/// <summary>
/// Контроллер записей.
/// </summary>
[ApiController]
[Route("api/record")]
public class RecordController : ControllerBase
{
    /// <summary>
    /// Репозиторий записей.
    /// </summary>
    private readonly IRecordRepository _recordRepository;

    /// <summary>
    /// Контроллер записей.
    /// </summary>
    public RecordController(IRecordRepository recordRepository)
    {
        _recordRepository = recordRepository;
    }

    /// <summary>
    /// Добавить запись.
    /// </summary>
    /// <param name="userId"> ИД пользователя. </param>
    /// <param name="listIndicatorDto"> Список индикаторов. </param>
    [HttpPost]
    public async Task<IActionResult> AddRecord([FromQuery] long userId, [FromBody] ListIndicatorDto listIndicatorDto)
    {
        var recordDto = new RecordDto
        {
            AddingEnum = AddingEnum.Input,
            Created = DateTime.UtcNow,
            UserId = userId,
            Indicators = listIndicatorDto.Indicators
        };

        var recordDtoId = await _recordRepository.Create(recordDto);
        return Ok(recordDtoId);
    }

    /// <summary>
    /// Получить историю одного индикатора, для пользователя.
    /// </summary>
    /// <param name="indicatorType"> Тип индикатора. </param>
    /// <param name="userId"> ИД пользователя. </param>
    /// <returns> Список показателей. </returns>
    [HttpGet]
    public async Task<IActionResult> GetIndicatorHistory([FromQuery] IndicatorEnum indicatorType, [FromQuery] long userId)
    {
        var dateIndicatorDtos = await _recordRepository.GetValuesByIndicator(indicatorType, userId);
        return Ok(dateIndicatorDtos);
    }

    /// <summary>
    /// Получить показатели по ИД записи.
    /// </summary>
    /// <param name="id"> ИД записи. </param>
    /// <returns> Показатели. </returns>
    [HttpGet]
    [Route("{id:long}")]
    public async Task<IActionResult> GetRecord(long id)
    {
        var recordDto = await _recordRepository.GetRecordWithIndicators(id);
        return Ok(recordDto);
    }

    /// <summary>
    /// Получить все записи.
    /// </summary>
    /// <param name="userId"> ИД пользователя. </param>
    /// <returns> Список записей. </returns>
    [HttpGet]
    public async Task<IActionResult> GetRecords([FromQuery] long userId)
    {
        var recordDtos = await _recordRepository.GetRecordsByUserId(userId);
        return Ok(recordDtos);
    }

    /// <summary>
    /// Удалить запись.
    /// </summary>
    /// <param name="id"> ИД записи. </param>
    [HttpDelete]
    [Route("{id:long}")]
    public async Task<IActionResult> RemoveRecord(long id)
    {
        await _recordRepository.Delete(id);
        return Ok();
    }

    /// <summary>
    /// Загрузить документ с показателями.
    /// </summary>
    /// <param name="userId"> ИД пользователя. </param>
    /// <param name="bytes"> Байты документа. </param>
    [HttpPost]
    [Route("pdf")]
    public IActionResult UploadPdfDocument(long userId, [FromBody] byte[] bytes)
    {
        throw new NotImplementedException();
    }
}