export const bloodParameters = [
  {
    id: 1,
    name: "RBC",
    value: 3.8,
    info: {
      fullName: "Эритроциты",
      measure: "%",
      menNorm: "3.5 - 3.8",
      womenNorm: "3.2 - 3.6",
    },
  },
  {
    id: 2,
    name: "MCV",
    value: 3.8,
    info: {
      fullName: "Эритроциты",
      measure: "%",
      menNorm: "3.5 - 3.8",
      womenNorm: "3.2 - 3.6",
    },
  },

  {
    id: 3,
    name: "PLT",
    value: 3.8,
    info: {
      fullName: "Эритроциты",
      measure: "%",
      menNorm: "3.5 - 3.8",
      womenNorm: "3.2 - 3.6",
    },
  },

  {
    id: 4,
    name: "RBC",
    value: 3.8,
    info: {
      fullName: "Эритроциты",
      measure: "%",
      menNorm: "3.5 - 3.8",
      womenNorm: "3.2 - 3.6",
    },
  },

  {
    id: 5,
    name: "RBC",
    value: 3.8,
    info: {
      fullName: "Эритроциты",
      measure: "%",
      menNorm: "3.5 - 3.8",
      womenNorm: "3.2 - 3.6",
    },
  },

  {
    id: 6,
    name: "RBC",
    value: 3.8,
    info: {
      fullName: "Эритроциты",
      measure: "%",
      menNorm: "3.5 - 3.8",
      womenNorm: "3.2 - 3.6",
    },
  },

  {
    id: 7,
    name: "RBC",
    value: 3.8,
    info: {
      fullName: "Эритроциты",
      measure: "%",
      menNorm: "3.5 - 3.8",
      womenNorm: "3.2 - 3.6",
    },
  },

  {
    id: 8,
    name: "RBC",
    value: 3.8,
    info: {
      fullName: "Эритроциты",
      measure: "%",
      menNorm: "3.5 - 3.8",
      womenNorm: "3.2 - 3.6",
    },
  },

  {
    id: 9,
    name: "RBC",
    value: 3.8,
    info: {
      fullName: "Эритроциты",
      measure: "%",
      menNorm: "3.5 - 3.8",
      womenNorm: "3.2 - 3.6",
    },
  },

  {
    id: 10,
    name: "RBC",
    value: 3.8,
    info: {
      fullName: "Эритроциты",
      measure: "%",
      menNorm: "3.5 - 3.8",
      womenNorm: "3.2 - 3.6",
    },
  },

  {
    id: 11,
    name: "RBC",
    value: 3.8,
    info: {
      fullName: "Эритроциты",
      measure: "%",
      menNorm: "3.5 - 3.8",
      womenNorm: "3.2 - 3.6",
    },
  },

  {
    id: 12,
    name: "RBC",
    value: 3.8,
    info: {
      fullName: "Эритроциты",
      measure: "%",
      menNorm: "3.5 - 3.8",
      womenNorm: "3.2 - 3.6",
    },
  },

  {
    id: 13,
    name: "RBC",
    value: 3.8,
    info: {
      fullName: "Эритроциты",
      measure: "%",
      menNorm: "3.5 - 3.8",
      womenNorm: "3.2 - 3.6",
    },
  },
];

export const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    line: {
      borderWidth: 4,
      tension: 0.3,
      borderColor: '#38B2AC',
    },
    point: {
      radius: 6,
      hoverRadius: 4,
      borderColor: '#38B2AC',
      backgroundColor: 'rgba(56, 178, 172, 0.75)'
    }
  },
  scales: {
    x: {
      ticks: {
        color: '#38B2AC',
        font: {
          size: 15,
        }
      }
    },
    y: {
      ticks: {
        color: '#38B2AC',
        font: {
          size: 15,
        }
      }
    }
  },
  plugins: {
    legend: false,
  }
};

export const mockDynamics = {
  labels: [
          "14.01.23", 
          "07.02.21", 
          "16.07.22", 
          "29.09.22", 
          "16.09.21", 
          "12.12.22", 
          "21.12.21", 
          "10.08.21", 
          "08.12.21", 
          "05.01.21"
        ],
  datasets: [
              {
                label: 'MCV', 
                data: [91, 83, 62, 64, 75, 60, 87, 80, 45, 68]
              }
            ]
};

export const handInput = [
  {
    indicatorEnum: 'RBC',
    displayValue: 'RBC',
    value: 0,
  },
  {
    indicatorEnum: 'MCV',
    displayValue: 'MCV',
    value: 0,
  },
  {
    indicatorEnum: 'HGB',
    displayValue: 'HGB',
    value: 0,
  },
  {
    indicatorEnum: 'MCH',
    displayValue: 'MCH',
    value: 0,
  },
  {
    indicatorEnum: 'CP',
    displayValue: 'CP',
    value: 0,
  },
  {
    indicatorEnum: 'PLT',
    displayValue: 'PLT',
    value: 0,
  },
  {
    indicatorEnum: 'HCT',
    displayValue: 'HCT',
    value: 0,
  },
  {
    indicatorEnum: 'MCHC',
    displayValue: 'MCHC',
    value: 0,
  },
  {
    indicatorEnum: 'RET',
    displayValue: 'RET',
    value: 0,
  },
  {
    indicatorEnum: 'WBC',
    displayValue: 'WBC',
    value: 0,
  },
  {
    indicatorEnum: 'MPV',
    displayValue: 'MPV',
    value: 0,
  },
  {
    indicatorEnum: 'RFV',
    displayValue: 'RFV',
    value: 0,
  },
  {
    indicatorEnum: 'ESR',
    displayValue: 'ESR',
    value: 0,
  },
  {
    indicatorEnum: 'ALAT',
    displayValue: 'ALAT',
    value: 0,
  },
  {
    indicatorEnum: 'ASAT',
    displayValue: 'ASAT',
    value: 0,
  },
  {
    indicatorEnum: 'Bilirubin',
    displayValue: 'Bilirubin',
    value: 0,
  },
  {
    indicatorEnum: 'Glucose',
    displayValue: 'Glucose',
    value: 0,
  },
  {
    indicatorEnum: 'GlycatedHemoglobin',
    displayValue: 'HbA1c',
    value: 0,
  },
  {
    indicatorEnum: 'Iron',
    displayValue: 'RBC',
    value: 0,
  },
]