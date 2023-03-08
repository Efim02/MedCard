namespace MC.Report.Utils;

using MC.BL.Enums;
using MC.Report.Models;

/// <summary>
/// Утилита для работы с индикаторами из документа ПДФ.
/// </summary>
internal static class PdfIndicatorUtils
{
    /// <summary>
    /// Создать список индикаторов.
    /// </summary>
    /// <returns></returns>
    public static List<PdfIndicator> CreateListIndicators()
    {
        return new List<PdfIndicator>
        {
            new PdfIndicator(IndicatorEnum.ALAT, "АлАТ", "Ед/л"),
            new PdfIndicator(IndicatorEnum.ASAT, "АсАТ", "Ед/л"),
            new PdfIndicator(IndicatorEnum.Bilirubin, "Билирубин общий", "мкмоль/л"),
            new PdfIndicator(IndicatorEnum.DirectBilirubin, "Билирубин прямой", "мкмоль/л"),
            new PdfIndicator(IndicatorEnum.Glucose, "Глюкоза", "ммоль/л"),
            new PdfIndicator(IndicatorEnum.GlycatedHemoglobin, "HbA1c (гликированный Hb)", "%"),
            new PdfIndicator(IndicatorEnum.Iron, "Железо", "мкмоль/л"),
        };
    }
}