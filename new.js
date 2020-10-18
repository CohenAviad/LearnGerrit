/* Config-
 * store: the created store for the chart (usually shared with other charts)
 * type: the type of chart to create
 * title: the title of the left column
 * fields: the fields to measure on the left column
 */
Ext.define('Vpsa.view.performance.charts.FlcBarChart', {
  alias: 'widget.flc-bar-chart',
  extend: 'Vpsa.view.performance.charts.BaseFlcChart',
  itemId: 'flc-bar-chart', // Needs to be identical to Base.js in order for the canvas to find it for refreshCanvas
  drawChart: function (data) {

    chart_series = []
    data_arr = []
    categories_arr = []
    data_keys = Object.keys(data)
    // data_keys.sort((a, b) => (data[a]["Order"] - data[b]["Order"]))
    // for (var key of data_keys) {
    //   data_arr.push({
    //     name: key,
    //     y: this.getDataValue(data[key]["Capacity"])
    //   });
    //   categories_arr.push(key);
    // }
    // chart_series.push({
    //   data: data_arr
    // });

    Highcharts.chart(this.getChartDivId(), {
      series: chart_series,
      chart: {
        type: 'bar'
      },
      legend: {
        enabled: false
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: categories_arr
      },
      yAxis: {
        allowDecimals: false,
        title: {
          text: 'Aggregated Capacity (TiB)'
        }
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.point.name + '</b><br/>' +
            this.point.y + ' TiB';
        }
      },
      plotOptions: {

        bar: {
          dataLabels: {
            enabled: true,
            format: "{y} TiB"
          }
        }
      }
    });
  }
}
