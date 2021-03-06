import {Chart} from 'frappe-charts/dist/frappe-charts.esm'

const ChartFrappe = {
    install(Vue) {
        Vue.component('v-frappe', {
            props: ['chartData'],
            data() {
                return {
                    data: {
                        labels: '',
                        datasets: [{
                            chartType: this.chartData.chartType,
                            values: [25, 40, 30, 35, 8, 52, 17, -4]
                        }],
                    },
                    chartType: this.chartData.chartType
                };
            },
            computed: {
                /**
                 * Dataset getter function
                 * @memberOf Chart
                 * @returns {Object} normalized dataset
                 */
                ds() {
                    return this.chartData.data.map((d) => {
                        let labels = this.chartData.dim ? d[this.chartData.dim] : d;
                        let datasets = this.chartData.metric ? d[this.chartData.metric] : d;
                        return {labels: labels, datasets: datasets};
                    });
                },
                getLabel() {
                    return this.chartData.data.map((d) => {
                        let labels = this.chartData.dim ? d[this.chartData.dim] : d;
                        return labels;
                    });
                },
                getDataset() {
                    return this.chartData.data.map((d) => {
                        let datasets = this.chartData.metric ? parseInt(d[this.chartData.metric]) : parseInt(d);
                        return datasets;
                    });
                }
            },
            methods: {
                getDatasetMixed(field) {
                    return this.chartData.data.map((d) => {
                        let datasets = field ? parseInt(d[field]) : parseInt(d);
                        return datasets;
                    });
                },
                /**
                 * Generate a new Chart of type chartType
                 * @memberOf Chart
                 */
                graph() {
                    this.data.datasets = [];
                    this.data.labels = this.getLabel;

                    var chartType = this.chartData.chartType;
                    let options = {
                        regionFill: 0,
                        hideLine: 0
                    };
                    if (this.chartData.chartType === "vbar") {
                        chartType = "bar";
                    }
                    else if (this.chartData.chartType === "area") {
                        chartType = "line";
                        options.regionFill = 1;
                    }
                    else if (this.chartData.chartType === "scatter") {
                        chartType = "line";
                        options.hideLine = 1;
                    }
                    else if (this.chartData.chartType === "mixed") {
                        chartType = "axis-mixed";
                    }

                    if (this.chartData.chartType === 'mixed') {
                        for (let i = 0; i < this.chartData.metricMixed.length; i++) {
                            let metric = this.chartData.metricMixed[i];
                            let dataset = {
                                name: metric.field,
                                values: this.getDatasetMixed(metric.field),
                                chartType: metric.type
                            }
                            this.data.datasets.push(dataset);
                        }
                    }
                    else {
                        let dataset = {
                            values: this.getDataset,
                            chartType: chartType,
                        }
                        this.data.datasets.push(dataset);
                    }

                    var chart = new Chart("#" + this.chartData.selector, { // or DOM element
                        data: {
                            labels: this.data.labels,
                            datasets: this.data.datasets,
                        },
                        title: this.chartData.title,
                        type: chartType, // or 'bar', 'line', 'pie', 'percentage'
                        height: this.chartData.height,
                        colors: ['orange'],
                        lineOptions: options
                    });
                },
                /**
                 * Redraw the Chart when the data is recycled
                 * @memberOf Chart
                 */
                refreshChart() {
                },
                forceUpdateC() {
                    this.$forceUpdate();
                },
                /**
                 * Remove x and y axes
                 * @memberOf Chart
                 */
                clearAxis() {
                },
                /**
                 * Remove all content from the SVG
                 * @memberOf Chart
                 */
                clearCanvas() {
                    var myNode = document.getElementById("chartfrappe");
                    myNode.innerHTML = '';
                },
                /**
                 * Appends title and subtitle to the chart
                 * @memberOf Chart
                 */
                drawTitle() {
                },
                /**
                 * Adds a tooltip to the SVG
                 * @memberOf Chart
                 * @param {Object} d dataset
                 * @param {Object} e event x and y coordinates
                 */
                addTooltip(d, e) {
                },
                /**
                 * Removes all tooltips from the SVG
                 * @memberOf Chart
                 * @param {Object} d dataset
                 */
                removeTooltip() {
                },
                /**
                 * Override default values
                 * @param {Object} cs configuration of the coordinate systems
                 * @param {Object} overrides the additional values that can be used for an object
                 * @returns {Object} updated configuration of coordinate system
                 */
                setOverrides(cs, overrides) {
                },
                /**
                 * Generate legend if option -legends- defined as true
                 * @memberOf Chart
                 * @param {Object} cs configuration of the coordinate system
                 */
                generateLegend(cs) {
                },
            },
            template:
                '<div :id=\'this.chartData.selector\' :height=\'parseInt(this.chartData.height) + 20\' :width=\'parseInt(this.chartData.width) + 20\'></div>',
        });
    },
};
export default ChartFrappe;

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Chart);
}