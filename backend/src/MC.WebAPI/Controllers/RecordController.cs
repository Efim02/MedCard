namespace MC.WebAPI.Controllers;

using MC.BL.DTO.Indicators;
using MC.BL.Enums;
using MC.DB.Models;

using Microsoft.AspNetCore.Mvc;

/// <summary>
/// Контроллер записей.
/// </summary>
[ApiController]
[Route("api/record")]
public class RecordController : ControllerBase
{
    /// <summary>
    /// Добавить запись.
    /// </summary>
    /// <param name="userId"> ИД пользователя. </param>
    /// <param name="listIndicatorDto"> Список индикаторов. </param>
    [HttpPost]
    public IActionResult AddRecord(long userId, [FromBody] ListIndicatorDto listIndicatorDto)
    {
        throw new NotImplementedException();
    }

    /// <summary>
    /// Получить историю одного индикатора, для пользователя.
    /// </summary>
    /// <param name="indicatorType"> Тип индикатора. </param>
    /// <param name="userId"> ИД пользователя. </param>
    /// <returns> Список значений показателя. </returns>
    [HttpGet]
    [Route("{indicatorType:IndicatorEnum}")]
    public List<float> GetIndicatorHistory(IndicatorEnum indicatorType, long userId)
    {
        throw new NotImplementedException();
    }

    /// <summary>
    /// Получить показатели по ИД записи.
    /// </summary>
    /// <param name="id"> ИД записи. </param>
    /// <returns> Показатели. </returns>
    [HttpGet]
    [Route("{id:long}")]
    public List<Indicator> GetRecord(long id)
    {
        throw new NotImplementedException();
    }

    /// <summary>
    /// Получить все записи.
    /// </summary>
    /// <param name="userId"> ИД пользователя. </param>
    /// <returns> Список записей. </returns>
    [HttpGet]
    public List<Record> GetRecords(long userId)
    {
        throw new NotImplementedException();
    }

    /// <summary>
    /// Удалить запись.
    /// </summary>
    /// <param name="id"> ИД записи. </param>
    [HttpDelete]
    [Route("{id:long}")]
    public IActionResult RemoveRecord(long id)
    {
        throw new NotImplementedException();
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