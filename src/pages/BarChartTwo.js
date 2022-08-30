import {Component, BarChart} from 'react-d3-library';

export default class BC extends Component {
    componentDidMount() {
      this.drawChart();
    }
      
    drawChart() {
      const data = [12, 5, 6, 6, 9, 10];
      const svg = Component.select("body").append("svg").attr("width", 700).attr("height", 300);

       let size = 500;
      // const svg = d3.BarChart.select("body")
      // .append("svg")
      // .attr("width", size)
      // .attr("height", size)
      // .style("margin-left", 100);
                    
      svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) =>  size-10 * d)
        .attr("width", 65)
        .attr("height", (d, i) => d * 10)
        .attr("fill", "green");
    }
          
    render(){
      return <div id={"#" + this.props.id}></div>
    }
  };

  //export default BarChartTwo;