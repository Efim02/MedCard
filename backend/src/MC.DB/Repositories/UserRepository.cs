namespace MC.DB.Repositories;

using AutoMapper;

using MC.BL.DTO;
using MC.BL.DTO.Indicators;
using MC.BL.Interfaces.DB;
using MC.BL.Utils;
using MC.DB.Models;
using MC.DB.Services;

using Microsoft.EntityFrameworkCore;

/// <summary>
/// Репозиторий пользователей.
/// </summary>
public class UserRepository : BaseRepository<UserDto, User>, IUserRepository
{
    /// <summary>
    /// Репозиторий пользователей.
    /// </summary>
    public UserRepository(McContext mcContext, IMapper mapper) : base(mcContext, mapper)
    {
    }

    /// <inheritdoc />
    public async Task<ListIndicatorDto> GetLastIndicators(long id)
    {
        var user = await Set.Include(u => u.Records).ThenInclude(r => r.Indicators)
            .FirstOrDefaultAsync(u => u.Id == id);
        if (user == null)
            throw new ArgumentException($"Не найден пользователь с ИД {id}.", nameof(id));

        var lastIndicatorsGetter = new LastIndicatorsGetter(user.Records);
        return await lastIndicatorsGetter.GetListIndicators();
    }
}