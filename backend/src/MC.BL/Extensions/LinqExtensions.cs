namespace MC.BL.Extensions;

/// <summary>
/// Расширение для работы с Linq.
/// </summary>
public static class LinqExtensions
{
    /// <summary>
    /// Выполнить параллельно метод с каждым элементом в перечислении.
    /// </summary>
    /// <typeparam name="T"> Тип элемента. </typeparam>
    /// <param name="enumerable"> Перечисление. </param>
    /// <param name="action"> Действие. </param>
    public static Task InvokeParallelAsync<T>(this IEnumerable<T> enumerable, Action<T> action)
    {
        var tasks = new List<Task>();
        foreach (var item in enumerable)
        {
            tasks.Add(Task.Run(() => action.Invoke(item)));
        }

        return Task.WhenAll(tasks);
    }
}