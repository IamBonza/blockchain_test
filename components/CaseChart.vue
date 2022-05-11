<template>
  <Pie
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Pie } from 'vue-chartjs/legacy/index.cjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'PieChart',
  components: {
    Pie
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    chartId: {
      type: String,
      default: 'pie-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  computed: {
      chartData() {
        return {
          labels: ['USD','Bitcoin', 'Ethereum'],
          datasets: [
            {
              backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
              data: this.data
            }
          ]
        }},
      chartOptions() {
        return {
          responsive: true,
          maintainAspectRatio: false
        }
      }
  }
}
</script>


<style scoped>

</style>
