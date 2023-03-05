namespace MC.DB.Models;

/// <summary>
/// Пользователь.
/// </summary>
public class User : BaseId
{
    /// <summary>
    /// Имя.
    /// </summary>
    public string FirstName { get; set; }

    /// <summary>
    /// Рост.
    /// </summary>
    public float Height { get; set; }

    /// <summary>
    /// Фамилия.
    /// </summary>
    public string LastName { get; set; }

    /// <summary>
    /// Отчество.
    /// </summary>
    public string Patronymic { get; set; }

    /// <summary>
    /// Вес.
    /// </summary>
    public float Weight { get; set; }

    /// <summary>
    /// Записи о показателях.
    /// </summary>
    public List<Record> Records { get; set; }
}