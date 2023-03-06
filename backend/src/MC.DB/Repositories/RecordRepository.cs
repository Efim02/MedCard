namespace MC.DB.Repositories;

using AutoMapper;

using MC.BL.DTO;
using MC.BL.Interfaces.DB;
using MC.DB.Models;

/// <summary>
/// Репозиторий записей.
/// </summary>
public class RecordRepository : BaseRepository<RecordDto, Record>, IRecordRepository
{
    /// <summary>
    /// Репозиторий записей.
    /// </summary>
    public RecordRepository(McContext mcContext, IMapper mapper) : base(mcContext, mapper)
    {
    }
}