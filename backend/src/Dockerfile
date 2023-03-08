#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["MC.WebAPI/MC.WebAPI.csproj", "MC.WebAPI/"]
COPY ["MC.BL/MC.BL.csproj", "MC.BL/"]
COPY ["MC.DB/MC.DB.csproj", "MC.DB/"]
COPY ["MC.Report/MC.Report.csproj", "MC.Report/"]
RUN dotnet restore "MC.WebAPI/MC.WebAPI.csproj"
COPY . .
WORKDIR "MC.WebAPI"
RUN dotnet build "MC.WebAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MC.WebAPI.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MC.WebAPI.dll"]

ENV ASPNETCORE_URLS http://*:80
ENV ASPNETCORE_ENVIRONMENT=Development
EXPOSE 80