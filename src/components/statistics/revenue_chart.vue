
  <script>
import { Bar } from "vue-chartjs";
export default {
  extends: Bar,
  name: "statistics",
  components: {
    Bar,
  },

  props: {
    data_revenue_chart: Object,
  },

  data() {
    return {
      chartdata: {
        labels: ["Sun", "Mon", "Tue", "wed", "Thu", "Fri", "Sat"],
        datasets: [
          {
            label: "Revenue",
            data: this.data_revenue_chart,
            type: "line",
            backgroundColor: "#DF9A00",
            borderColor: "#DF9A00",
            fill: false,
            borderWidth: 2,
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },

  methods: {},

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>

  <style scoped>
</style>