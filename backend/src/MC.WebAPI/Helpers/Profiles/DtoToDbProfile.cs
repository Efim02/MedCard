namespace MC.WebAPI.Helpers.Profiles;

using AutoMapper;

using MC.BL.DTO;
using MC.BL.DTO.Indicators;
using MC.DB.Models;

/// <summary>
/// Профиль для маппинга BL и DB классов.
/// </summary>
public class DtoToDbProfile : Profile
{
    /// <summary>
    /// Профиль для маппинга BL и DB классов.
    /// </summary>
    public DtoToDbProfile()
    {
        CreateMap<IndicatorDto, Indicator>().ReverseMap();

        CreateMap<RecordDto, Record>().ReverseMap();

        CreateMap<UserDto, User>().ReverseMap();
    }
}