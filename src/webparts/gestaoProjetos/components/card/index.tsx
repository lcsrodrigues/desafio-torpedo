import * as React from 'react';
import style from './style.module.scss';
import { Chart } from "react-google-charts";

export default function Card({ title, estimateValue, revenueValue }) {

    function calcPercentage(_var1, _var2) {
        var xPercentage = (_var2 * 100) / _var1;
        return xPercentage;
    };

    const data = [
        ["Faturamento", "Estimado X Faturado"],
        ["Faturado", calcPercentage(estimateValue, revenueValue)],
        ["Pendente", 100 - calcPercentage(estimateValue, revenueValue)]
    ];

    const options = {
        pieHole: 0.5,
        pieSliceTextStyle: {
            color: 'black',
        },
        legend: 'none'
    };

    return (
        <div className={style.card}>
            <div className={style.title}>
                <span>{title}</span>
            </div>
            <div className={style.chart}>
                <Chart
                    chartType="PieChart"
                    width="100%"
                    height="230px"
                    data={data}
                    options={options}
                />
            </div>
            <div className={style.revenues}>
                <div className={style.estimate}>
                    <div className={style.title}>
                        <span>ESTIMADO</span>
                    </div>
                    <div className={style.value}>
                        <span>{estimateValue}Є</span>
                    </div>
                </div>
                <div className={style.revenue}>
                    <div className={style.title}>
                        <span>FATURADO</span>
                    </div>
                    <div className={style.value}>
                        <span>{revenueValue}Є</span>
                    </div>
                </div>
            </div>
        </div>
    )
}