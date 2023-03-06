namespace MC.DB.Repositories;

using AutoMapper;

using MC.BL.DTO;
using MC.BL.Interfaces.DB;
using MC.DB.Models;

using Microsoft.EntityFrameworkCore;

/// <summary>
/// Базовый репозиторий.
/// </summary>
/// <typeparam name="TEntity"> Тип сущности. </typeparam>
public abstract class BaseRepository<TEntity, TDbEntity> : IBaseRepository<TEntity>
    where TEntity : BaseDto
    where TDbEntity : BaseId
{
    /// <summary>
    /// Автомаппер.
    /// </summary>
    private readonly IMapper _mapper;

    /// <summary>
    /// Контекст БД.
    /// </summary>
    private readonly McContext _mcContext;

    /// <summary>
    /// Набор сущностей из БД.
    /// </summary>
    private readonly DbSet<TDbEntity> _set;

    /// <summary>
    /// Базовый репозиторий.
    /// </summary>
    public BaseRepository(McContext mcContext, IMapper mapper)
    {
        _mcContext = mcContext;
        _mapper = mapper;
        _set = mcContext.Set<TDbEntity>();
    }

    /// <inheritdoc />
    public virtual async Task Create(TEntity entity)
    {
        var dbEntity = _mapper.Map<TDbEntity>(entity);

        await _set.AddAsync(dbEntity);
        await _mcContext.SaveChangesAsync();
    }

    /// <inheritdoc />
    public virtual async Task Delete(long id)
    {
        var dbEntity = await GetDbEntity(id);
        _set.Remove(dbEntity);

        await _mcContext.SaveChangesAsync();
    }

    /// <inheritdoc />
    public virtual async Task<TEntity> Get(long id)
    {
        var dbEntity = await GetDbEntity(id);
        return _mapper.Map<TEntity>(dbEntity);
    }

    /// <inheritdoc />
    public virtual async Task Update(TEntity entity)
    {
        var dbEntity = _mapper.Map<TDbEntity>(entity);
        _set.Update(dbEntity);

        await _mcContext.SaveChangesAsync();
    }

    /// <summary>
    /// Получить DB сущность по ИД.
    /// </summary>
    /// <param name="id"> ИД. </param>
    /// <returns> DB сущность. </returns>
    protected virtual async Task<TDbEntity> GetDbEntity(long id)
    {
        var dbEntity = await _set.AsNoTracking().FirstOrDefaultAsync(e => e.Id == id);
        if (dbEntity == null)
            throw new ArgumentException($"Сущности {typeof(TEntity)} не существует с ИД {id}.");

        return dbEntity;
    }
}