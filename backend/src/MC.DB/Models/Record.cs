namespace MC.DB.Models;

using System.ComponentModel.DataAnnotations.Schema;

using MC.BL.Enums;

/// <summary>
/// Запись о показателях.
/// </summary>
public class Record : BaseId
{
    /// <summary>
    /// Способ добавления записи о показателях.
    /// </summary>
    public AddingEnum AddingEnum { get; set; }

    /// <summary>
    /// Дата создания записи.
    /// </summary>
    public DateTime Created { get; set; }

    /// <summary>
    /// Индикаторы для данной записи.
    /// </summary>
    public List<Indicator> Indicators { get; set; }

    /// <summary>
    /// Пользователь.
    /// </summary>
    public User User { get; set; }

    /// <summary>
    /// ИД пользователя.
    /// </summary>
    [ForeignKey(nameof(User))]
    public long UserId { get; set; }
}