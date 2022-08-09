import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import Utils from './lib/utils';

(function () {
  function getData(name, data, colorKey) {
    return {
      labels: ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"],
      datasets: [
        {
          label: name,
          data: data,
          borderColor: Utils.CHART_COLORS[colorKey],
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS[colorKey], 0.5)
        },
      ]
    };
  }

  function getCombinedData() {
    return {
      labels: ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"],
      datasets: [
        {
          label: 'Thorin',
          data: [10, 11, 16, 12, 16, 10],
          borderColor: Utils.CHART_COLORS.red,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5)
        },
        {
          label: 'Swan',
          data: [17, 13, 16, 10, 14, 18],
          borderColor: Utils.CHART_COLORS.blue,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5)
        },
        {
          label: 'Trougar',
          data: [15, 16, 11, 13, 15, 17],
          borderColor: Utils.CHART_COLORS.green,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.5)
        },
        {
          label: 'Balto',
          data: [8, 16, 14, 18, 10, 10],
          borderColor: Utils.CHART_COLORS.orange,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.orange, 0.5)
        },
      ]
    };
  }

  function getConfig(title, data) {
    return {
      type: 'radar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: false,
            text: title
          }
        },
      }
    };
  }



  function main() {
    const items = [
      {
        id: 'chart1',
        config: getConfig('Thorin', getData('Thorin', [10, 11, 16, 12, 16, 10], 'red'))
      },
      {
        id: 'chart2',
        config: getConfig('Swan', getData('Swan', [17, 13, 16, 10, 14, 18], 'blue'))
      },
      {
        id: 'chart3',
        config: getConfig('Trougar', getData('Trougar', [15, 16, 11, 13, 15, 17], 'green'))
      }
    ];

    const chartEl = document.getElementById('chart4');
    const config = getConfig('Party', getCombinedData());
    const context = chartEl.getContext('2d');
    new Chart(context, config);
  };

  main();
}());
