const consistencyData = (turns) => {
    return {
        type: 'line',
        height: 100,
        options: {
            chart: {
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#fff'],
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            yaxis: {
                min: 0,
                max: 180
            },
            tooltip: {
                theme: 'dark',
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: 'Consistency'
                },
                marker: {
                    show: false
                }
            }
        },
        series: [
            {
                name: 'series1',
                data: [...turns]
            }
        ]
    };
};

export default consistencyData;
