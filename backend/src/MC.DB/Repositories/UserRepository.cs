namespace MC.DB.Repositories;

using AutoMapper;

using MC.BL.DTO;
using MC.BL.Interfaces.DB;
using MC.DB.Models;

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
}