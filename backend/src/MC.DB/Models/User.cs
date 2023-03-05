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
    /// Вес.
    /// </summary>
    public float Weight { get; set; }
}