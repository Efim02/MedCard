namespace MC.WebAPI.Utils;

using MC.DB;

using Microsoft.EntityFrameworkCore;

/// <summary>
/// Утилита для помощи регистрации сервисов.
/// </summary>
public static class RegisterServiceUtils
{
    /// <summary>
    /// Накатить миграции на БД.
    /// </summary>
    /// <param name="applicationBuilder"> Веб-приложение. </param>
    public static async void MigrateDatabase(IApplicationBuilder applicationBuilder)
    {
        try
        {
            // Применение миграций к БД при инициализации сервера.
            var serviceScopeFactory = applicationBuilder.ApplicationServices.GetRequiredService<IServiceScopeFactory>();
            using var serviceScope = serviceScopeFactory.CreateScope();
            var mcContext = serviceScope.ServiceProvider.GetService<McContext>();

            if (mcContext == null)
                throw new Exception($"Сервис {nameof(McContext)} не был получен.");

            for (var counter = 0; counter < 10; counter++)
            {
                if (await mcContext.Database.CanConnectAsync().ConfigureAwait(false))
                    break;

                Task.Delay(3000).Wait();
            }

            await mcContext.Database.MigrateAsync().ConfigureAwait(false);

            Console.WriteLine("INFO: McContext Migrated!");
        }
        catch (Exception exception)
        {
            Console.WriteLine($"ERROR: \n{exception}");
        }
    }

    /// <summary>
    /// Регистрация БД сервисов.
    /// </summary>
    /// <param name="serviceCollection"> Сервисы. </param>
    public static async void RegisterDatabase(IServiceCollection serviceCollection)
    {
#if DEBUG
        const string connectionString = "name=ConnectionStrings:DebugConnection";
#else
        const string connectionString = "name=ConnectionStrings:ReleaseConnection";
#endif
        serviceCollection.AddDbContext<McContext>(options => options.UseNpgsql(connectionString));
    }
}