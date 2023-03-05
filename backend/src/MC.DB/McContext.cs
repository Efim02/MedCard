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
    /// Показатели.
    /// </summary>
    public DbSet<Indicator> Indicators { get; set; }

    /// <summary>
    /// Записи о показателях.
    /// </summary>
    public DbSet<Record> Records { get; set; }

    /// <summary>
    /// Пользователи.
    /// </summary>
    public DbSet<User> Users { get; set; }

    /// <inheritdoc />
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Indicator>(eb =>
        {
            eb.HasKey(e => new { e.RecordId, e.IndicatorEnum });
            eb.HasOne(e => e.Record).WithMany(e => e.Indicators).HasForeignKey(e => e.RecordId);
        });

        base.OnModelCreating(modelBuilder);
    }
}