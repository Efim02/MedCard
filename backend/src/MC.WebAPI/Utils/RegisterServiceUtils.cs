namespace MC.WebAPI.Utils;

using System.Diagnostics;

using MC.DB;

using Microsoft.EntityFrameworkCore;

/// <summary>
/// Утилита для помощи регистрации сервисов.
/// </summary>
public static class RegisterServiceUtils
{
    /// <summary>
    /// Регистрация БД сервисов.
    /// </summary>
    /// <param name="serviceCollection"> Сервисы. </param>
    public static async void RegisterDatabase(IServiceCollection serviceCollection)
    {
#if DEBUG
        const string connectionString = "name=ConnectionStrings:Debug";
#else
        const string connectionString = "name=ConnectionStrings:Release";
#endif
        serviceCollection.AddDbContext<McContext>(options => options.UseNpgsql(connectionString));

        try
        {

            var optionsBuilder = new DbContextOptionsBuilder<McContext>();
            optionsBuilder.UseNpgsql(connectionString);
            await using var mcContext = new McContext(optionsBuilder.Options);

            for (var counter = 0; counter < 10; counter++)
            {
                if (await mcContext.Database.CanConnectAsync().ConfigureAwait(false))
                    break;

                Task.Delay(3000).Wait();
            }

            await mcContext.Database.MigrateAsync().ConfigureAwait(false);
        }
        catch (Exception exception)
        {
            Console.WriteLine($"ERROR: \n{exception}");
        }
    }
}