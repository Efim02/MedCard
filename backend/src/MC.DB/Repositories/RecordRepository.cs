namespace MC.DB.Repositories;

using AutoMapper;

using MC.BL.DTO;
using MC.BL.DTO.Indicators;
using MC.BL.Enums;
using MC.BL.Interfaces.DB;
using MC.DB.Models;

using Microsoft.EntityFrameworkCore;

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

    /// <inheritdoc />
    public async Task<List<RecordDto>> GetRecordsByUserId(long userId)
    {
        var records = await Set.AsNoTracking().Where(r => r.UserId == userId).ToListAsync();
        return Mapper.Map<List<RecordDto>>(records);
    }

    /// <inheritdoc />
    public async Task<RecordDto> GetRecordWithIndicators(long id)
    {
        var record = await Set.AsNoTracking().Include(r => r.Indicators)
            .FirstOrDefaultAsync(r => r.Id == id);
        return Mapper.Map<RecordDto>(record);
    }

    /// <inheritdoc />
    public async Task<List<DateIndicatorDto>> GetValuesByIndicator(IndicatorEnum indicatorEnum, long userId)
    {
        var records = await Set.AsNoTracking().Where(r => r.UserId == userId)
            .Include(r => r.Indicators).ToListAsync();

        var dateIndicatorDtos = new List<DateIndicatorDto>();
        foreach (var record in records)
        {
            var indicator = record.Indicators.FirstOrDefault(i => i.IndicatorEnum == indicatorEnum);
            if (indicator == null)
                continue;

            var dateIndicatorDto = Mapper.Map<DateIndicatorDto>(indicator);
            dateIndicatorDto.Created = record.Created;

            dateIndicatorDtos.Add(dateIndicatorDto);
        }

        return dateIndicatorDtos;
    }
}