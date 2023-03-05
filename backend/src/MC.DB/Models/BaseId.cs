namespace MC.DB.Models;

using System.ComponentModel.DataAnnotations;

/// <summary>
/// Класс с ИД свойством.
/// </summary>
public class BaseId
{
    /// <summary>
    /// ИД.
    /// </summary>
    [Key]
    public long Id { get; set; }
}