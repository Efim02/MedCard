namespace MC.Report.Services;

using System.Globalization;

using MC.BL.DTO.Indicators;
using MC.Report.Constants;
using MC.Report.Models;
using MC.Report.Utils;

using UglyToad.PdfPig;

/// <summary>
/// Сервис для прочтения файла
/// </summary>
public class LaboratoryPdfReadingService
{
    /// <summary>
    /// Поток файла.
    /// </summary>
    private readonly Stream _stream;

    /// <summary>
    /// Сервис для прочтения файла
    /// </summary>
    /// <param name="stream"> Поток файла. </param>
    public LaboratoryPdfReadingService(Stream stream)
    {
        _stream = stream;
    }

    /// <summary>
    /// Прочесть ПДФ файл.
    /// </summary>
    /// <returns> Список индикаторов. </returns>
    public ListIndicatorDto Read()
    {
        var pdfDocument = PdfDocument.Open(_stream);
        var page = pdfDocument.GetPage(1);

        var pdfIndicators = ParseIndicators(page.Text);
        return new ListIndicatorDto { Indicators = pdfIndicators.Cast<IndicatorDto>().ToList() };
    }

    /// <summary>
    /// Спасить файл и получить индикаторы.
    /// </summary>
    /// <param name="text"> Текст страницы. </param>
    /// <returns> Список ПДФ индикаторов. </returns>
    private List<PdfIndicator> ParseIndicators(string text)
    {
        var pdfIndicators = PdfIndicatorUtils.CreateListIndicators();
        foreach (var pdfIndicator in pdfIndicators)
        {
            var afterRowNameText = text.Split(pdfIndicator.RowName)[1];
            var valueText = afterRowNameText.Split(pdfIndicator.Unit)[0];

            if (valueText.Equals(LaboratoryPdfConstants.NO_VALUE, StringComparison.InvariantCultureIgnoreCase))
                continue;

            pdfIndicator.Value = float.Parse(valueText, NumberStyles.Float, new NumberFormatInfo());
            pdfIndicator.HasValue = true;
        }

        return pdfIndicators.Where(p => p.HasValue).ToList();
    }
}