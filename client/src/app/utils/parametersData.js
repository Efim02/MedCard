import { infoParameters } from "./infoParameters"

export const getParameterInfo = (parameter) => infoParameters.find((param) => param.name === parameter);

export const extractDataset = (data) => {
    let dataset = {
        labels: [],
        datasets: [
            {
                label: null,
                data: []
            }
        ]
    }

    data.forEach((record) => {
        let date = record.created.split(/\D+/).slice(0, 3).reverse();

        dataset.labels.push(date.join("/"));
        dataset.datasets[0].label = record.indicatorEnum;
        dataset.datasets[0].data.push(record.value);
    });

    return dataset;
}