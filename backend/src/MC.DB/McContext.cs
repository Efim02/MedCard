namespace MC.DB;

using MC.DB.Models;

using Microsoft.EntityFrameworkCore;

/// <summary>
/// Контест базы данных.
/// </summary>
// TODO: Реализовать таблицы показателей: RBC, MCV, HGB, MCH, ЦП, PLT, HCT, MCHC, RET, WBC, MVP, RFV, ESR.
public class McContext : DbContext
{
    /// <summary>
    /// Контест базы данных.
    /// </summary>
    /// <param name="contextOptions"> Параметры контекста. </param>
    public McContext(DbContextOptions<McContext> contextOptions) : base(contextOptions)
    {
    }

    /// <summary>
    /// Показатели: концентрация гемоглобина.
    /// </summary>
    public DbSet<Indicator> HGB { get; set; }

    /// <summary>
    /// Показатели: среднее содержание гемоглобина в отдельном эритроците.
    /// </summary>
    public DbSet<Indicator> MCH { get; set; }

    /// <summary>
    /// Показатели: средний объем на 1 мкм эритроцитов.
    /// </summary>
    public DbSet<Indicator> MCV { get; set; }

    /// <summary>
    /// Показатели: абсолютное содержание эритроцитов.
    /// </summary>
    public DbSet<Indicator> RBC { get; set; }

    /// <summary>
    /// Записи о показателях.
    /// </summary>
    public DbSet<Record> Records { get; set; }

    /// <summary>
    /// Пользователи.
    /// </summary>
    public DbSet<User> Users { get; set; }
}