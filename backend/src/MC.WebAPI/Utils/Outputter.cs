namespace MC.WebAPI.Utils;

/// <summary>
/// Утилита для вывода в консоль.
/// </summary>
public static class Outputter
{
    /// <summary>
    /// Сообщить об ошибке.
    /// </summary>
    /// <param name="message"> Сообщение. </param>
    public static void Error(string message)
    {
        Console.WriteLine($"error: {message}");
    }

    /// <summary>
    /// Сообщить об ошибке.
    /// </summary>
    /// <param name="exception"> Исключение. </param>
    public static void Error(Exception exception)
    {
        Console.WriteLine($"error: {exception}");
    }

    /// <summary>
    /// Сообщить информацию.
    /// </summary>
    /// <param name="message"> Сообщение. </param>
    public static void Info(string message)
    {
        Console.WriteLine($"info: {message}");
    }
}