namespace MC.BL.DTO;

/// <summary>
/// DTO пользователя.
/// </summary>
public class UserDto : BaseDto
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
}