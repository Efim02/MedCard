namespace MC.DB.Models;

using System.ComponentModel.DataAnnotations.Schema;

/// <summary>
/// Показатель (какой-то).
/// </summary>
public class Indicator
{
    /// <summary>
    /// Запись.
    /// </summary>
    [NotMapped]
    public Record Record { get; set; }

    /// <summary>
    /// ИД записи.
    /// </summary>
    public long RecordId { get; set; }

    /// <summary>
    /// Значение.
    /// </summary>
    public float Value { get; set; }
}