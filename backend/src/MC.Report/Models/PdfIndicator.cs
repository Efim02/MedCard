namespace MC.Report.Models;

using MC.BL.DTO.Indicators;
using MC.BL.Enums;

/// <summary>
/// Показатель из документа PDF.
/// </summary>
internal class PdfIndicator : IndicatorDto
{
    /// <summary>
    /// Показатель из документа PDF.
    /// </summary>
    /// <param name="indicatorEnum"> Тип показателя. </param>
    /// <param name="rowName"> Название индикатора в строке, таблицы. </param>
    public PdfIndicator(IndicatorEnum indicatorEnum, string rowName, string unit)
    {
        IndicatorEnum = indicatorEnum;
        RowName = rowName;
        Unit = unit;
    }

    /// <summary>
    /// Название индикатора в строке, таблицы.
    /// </summary>
    public string RowName { get; set; }

    /// <summary>
    /// Единицы измерения.
    /// </summary>
    public string Unit { get; set; }

    /// <summary>
    /// Есть ли значение.
    /// </summary>
    public bool HasValue { get; set; }
}