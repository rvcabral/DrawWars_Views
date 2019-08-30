<script>
  //Importing Bar class from the vue-chartjs wrapper
  import { HorizontalBar  } from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default {
    extends: HorizontalBar,
    props:{

    },
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: this.$root.scores.map(score => score.username),
          datasets: [
            {
              label: 'Podium',
              backgroundColor: ['#009973', '#000','#009973', '#000','#009973', '#000','#009973', '#000'],
              pointBackgroundColor: 'black',
              borderWidth: 1,
              pointBorderColor: '#000',
              //Data to be represented on y-axis
              data: this.$root.scores.map(score => score.score)
            }
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }],
            xAxes: [ {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: false
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>