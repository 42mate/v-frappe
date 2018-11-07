const Chart = {
  install(Vue) {
    Vue.component('v-frappe', {
      props: ['chartData'],
      data() {
        return {
            
        };
      },
      methods: {
        /**
         * Generate a new Chart of type chartType
         * @memberOf Chart
         */
        initalizeChart() {
          
        },
        /**
         * Redraw the Chart when the data is recycled
         * @memberOf Chart
         */
        refreshChart() {
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
        '<div>hello</div>',
    });
  },
};
export default Chart;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Chart);
}