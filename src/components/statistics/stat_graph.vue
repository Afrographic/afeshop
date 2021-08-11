
  <script>
import { Bar } from "vue-chartjs";
export default {
  extends: Bar,
  name: "statistics",
  components: {
    Bar,
  },

  props: {
    data_sales_chart: Object,
    data_order_chart: Object,
  },

  data() {
    return {
      chartdata: {
        labels: ["Sun", "Mon", "Tue", "wed", "Thu", "Fri", "Sat"],
        datasets: [
          {
            label: "Orders",
            data: this.data_order_chart,
            type: "line",
            backgroundColor: "#DF9A00",
            borderColor: "#DF9A00",
            fill: false,
            borderWidth: 2,
          },
          {
            label: "Sales",
            data: this.data_sales_chart,
            backgroundColor: [
              "#0085FF",
              "#0085FF",
              "#0085FF",
              "#0085FF",
              "#0085FF",
              "#0085FF",
              "#0085FF",
            ],
            borderWidth: 1,
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