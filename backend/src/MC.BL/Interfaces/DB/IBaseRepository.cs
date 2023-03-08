namespace MC.BL.Interfaces.DB;

using MC.BL.DTO;

/// <summary>
/// Абстракция базового репозитория.
/// </summary>
/// <typeparam name="TEntity"> Тип сущности. </typeparam>
public interface IBaseRepository<TEntity> where TEntity : BaseDto
{
    /// <summary>
    /// Создать сущность.
    /// </summary>
    /// <param name="entity"> Сущность. </param>
    public Task<long> Create(TEntity entity);

    /// <summary>
    /// Удалить сущность по ИД.
    /// </summary>
    /// <param name="id"> ИД. </param>
    public Task Delete(long id);

    /// <summary>
    /// Получить сущность по ИД.
    /// </summary>
    /// <param name="id"> ИД. </param>
    /// <returns> Сущность. </returns>
    public Task<TEntity> Get(long id);

    /// <summary>
    /// Обновить сущность.
    /// </summary>
    /// <param name="entity"> Сущность. </param>
    public Task Update(TEntity entity);
}