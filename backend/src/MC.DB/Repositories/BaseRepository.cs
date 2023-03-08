namespace MC.DB.Repositories;

using AutoMapper;

using MC.BL.DTO;
using MC.BL.Interfaces.DB;
using MC.DB.Models;

using Microsoft.EntityFrameworkCore;

/// <summary>
/// Базовый репозиторий.
/// </summary>
/// <typeparam name="TEntity"> Тип BL сущности. </typeparam>
/// <typeparam name="TDbEntity"> Тип DB сущности. </typeparam>
public abstract class BaseRepository<TEntity, TDbEntity> : IBaseRepository<TEntity>
    where TEntity : BaseDto
    where TDbEntity : BaseId
{
    /// <summary>
    /// Автомаппер.
    /// </summary>
    protected readonly IMapper Mapper;

    /// <summary>
    /// Контекст БД.
    /// </summary>
    protected readonly McContext McContext;

    /// <summary>
    /// Набор сущностей из БД.
    /// </summary>
    protected readonly DbSet<TDbEntity> Set;

    /// <summary>
    /// Базовый репозиторий.
    /// </summary>
    public BaseRepository(McContext mcContext, IMapper mapper)
    {
        McContext = mcContext;
        Mapper = mapper;
        Set = mcContext.Set<TDbEntity>();
    }

    /// <inheritdoc />
    public virtual async Task<long> Create(TEntity entity)
    {
        var dbEntity = Mapper.Map<TDbEntity>(entity);

        await Set.AddAsync(dbEntity);
        await McContext.SaveChangesAsync();
        return dbEntity.Id;
    }

    /// <inheritdoc />
    public virtual async Task Delete(long id)
    {
        var dbEntity = await GetDbEntity(id);
        Set.Remove(dbEntity);

        await McContext.SaveChangesAsync();
    }

    /// <inheritdoc />
    public virtual async Task<TEntity> Get(long id)
    {
        var dbEntity = await GetDbEntity(id);
        return Mapper.Map<TEntity>(dbEntity);
    }

    /// <inheritdoc />
    public virtual async Task Update(TEntity entity)
    {
        var dbEntity = Mapper.Map<TDbEntity>(entity);
        Set.Update(dbEntity);

        await McContext.SaveChangesAsync();
    }

    /// <summary>
    /// Получить DB сущность по ИД.
    /// </summary>
    /// <param name="id"> ИД. </param>
    /// <returns> DB сущность. </returns>
    protected virtual async Task<TDbEntity> GetDbEntity(long id)
    {
        var dbEntity = await Set.AsNoTracking().FirstOrDefaultAsync(e => e.Id == id);
        if (dbEntity == null)
            throw new ArgumentException($"Сущности {typeof(TEntity)} не существует с ИД {id}.");

        return dbEntity;
    }
}