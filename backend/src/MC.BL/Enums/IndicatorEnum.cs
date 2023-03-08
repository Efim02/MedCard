﻿namespace MC.BL.Enums;

using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

/// <summary>
/// Тип показателя.
/// </summary>
[JsonConverter(typeof(StringEnumConverter))]
public enum IndicatorEnum
{
    /// <summary>
    /// Показатели: абсолютное содержание эритроцитов.
    /// </summary>
    RBC = 1001,

    /// <summary>
    /// Показатели: средний объем на 1 мкм эритроцитов.
    /// </summary>
    MCV = 1002,

    /// <summary>
    /// Показатели: концентрация гемоглобина.
    /// </summary>
    HGB = 1003,

    /// <summary>
    /// Показатели: среднее содержание гемоглобина в отдельном эритроците.
    /// </summary>
    MCH = 1004,

    /// <summary>
    /// Показатели: Цветной показатель.
    /// </summary>
    CP = 1005,

    /// <summary>
    /// Показатели: абсолютное содержание тромбоцитов.
    /// </summary>
    PLT = 1006,

    /// <summary>
    /// Показатели: Гематокрит это соотношение объёма форменных элементов к плазме крови.
    /// </summary>
    HCT = 1007,

    /// <summary>
    /// Показатели: средняя концентрация гемоглобина в эритроцитарной массе, а не в цельной крови.
    /// </summary>
    MCHC = 1008,

    /// <summary>
    /// Показатели: ретикулоциты. Это незрелые эритроциты. В процессе эритропоэза ретикулоциты развиваются и созревают в
    /// костном мозге, а затем около суток циркулируют в кровотоке, прежде чем превратиться в зрелые эритроциты.
    /// </summary>
    RET = 1009,

    /// <summary>
    /// Показатели: абсолютное содержание лейкоцитов.
    /// </summary>
    WBC = 1010,

    /// <summary>
    /// Показатели: средний объём тромбоцитов
    /// </summary>
    MPV = 1011,

    /// <summary>
    /// Показатели: евматоидный фактор – это показатель, указывающий на развивающийся ревматоидный артрит, красную волчанку,
    /// синдром Шегрена, саркоидоз или болезнь Лайма
    /// </summary>
    RFV = 1012,

    /// <summary>
    /// Показатели: скорость оседания эритроцитов — неспецифический индикатор патологического состояния организма.
    /// </summary>
    ESR = 1013,

    // TODO: Индикаторы которых не было в Web UI макете.

    /// <summary>
    /// Аланинаминотрансфераза. Синоним (Глутамат-пируват-трансаминаза; СГПТ.SGPT)
    /// </summary>
    /// <remarks>
    /// Аланинаминотрансфераза относится к группе ферментов, которые катализируют обратимое превращение a-кетокислот в
    /// аминокислоты, путем переноса аминогрупп.
    /// </remarks>
    ALAT = 1014,

    /// <summary>
    /// Аспартатаминотрансфераза. Глутамат-оксалоацетат-трансаминаза сыворотки крови (СГОТ SGOT; GOT.);
    /// </summary>
    /// <remarks>
    /// Аспартатаминотрансфераза катализирует обратимую реакцию переноса аминогруппы от аспарагиновой кислоты на
    /// α-кетоглутаровую кислоту с образованием щавелевоуксусной и глутаминовой кислот.
    /// </remarks>
    ASAT = 1015,


    /// <summary>
    /// Билирубин. Totalbilirubin; TBIL.
    /// </summary>
    /// <remarks>
    /// Билирубин – это пигмент коричневато-желтого цвета, основное количество которого образуется в результате метаболизма
    /// гемовой части гемоглобина при деструкции стареющих эритроцитов клетками тканевой моноцитарно-макрофагальной системы в
    /// печени, селезенке или костном мозге (80-85%).
    /// </remarks>
    Bilirubin = 1016,

    /// <summary>
    /// Прямой билирубин.
    /// </summary>
    /// <remarks>
    /// Примерно 85% общего билирубина происходит из гемовой части гемоглобина, высвобождаемой стареющими эритроцитами, которые
    /// разрушаются в ретикулоэндотелиальных клетках печени, селезенки и костного мозга
    /// </remarks>
    DirectBilirubin = 1016,

    /// <summary>
    /// Глюкоза в крови.
    /// </summary>
    Glucose = 1017,

    /// <summary>
    /// Гликированный гемоглобин.
    /// </summary>
    /// <remarks>
    /// Анализ крови на гликированный гемоглобин.
    /// </remarks>
    GlycatedHemoglobin = 1018,

    /// <summary>
    /// Железа в крови.
    /// </summary>
    Iron = 1019,
}