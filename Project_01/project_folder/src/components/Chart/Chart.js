import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dpValues = props.dataPoints.map((dp) => dp.value);
    const maximumValue = Math.max(...dpValues);
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maximumValue}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
