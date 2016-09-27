import {Component, OnInit} from "@angular/core";
import {User} from "../../../shared/api/user";
import {UserService} from "../../../shared/api/user.service";
import {CardChartOptions} from "./shared/card-chart/card-chart.options";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  public users: User[] = [];
  public chart1: CardChartOptions;
  public chart2: CardChartOptions;
  public chart3: CardChartOptions;

  constructor(private userService: UserService)
  {
    this.chart1 = new CardChartOptions();
    this.chart1.title = "Wayvy Lines";
    this.chart1.subtitle = "Working hours";
    this.chart1.chart = this.chart1Options();

    this.chart2 = new CardChartOptions();
    this.chart2.title = "Daily Progress";
    this.chart2.subtitle = "Working hours";
    this.chart2.chart = this.chart2Options();

    this.chart3 = new CardChartOptions();
    this.chart3.chart = this.chart3Options();
  }

  ngOnInit()
  {
    //  just get 10 random users + image url
    this.userService.getRandoms()
      .subscribe((user: User) =>
      {
        this.users.push(user);
      });
  }

  public getUserAvatar(index: number): string
  {
    if(!this.users || !this.users[index])
    {
      return 'https://s3.amazonaws.com/uifaces/faces/twitter/whale/48.jpg';
    }
    return this.users[index].image_urls.normal;
  }

  public chart1Options()
  {
    return {
      chart: {
        type: 'area'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        allowDecimals: false,
        labels: {
          formatter: function ()
          {
            return this.value; // clean, unformatted number for year
          }
        },
      },
      yAxis: {
        title: {
          text: 'Nuclear weapon states'
        },
        labels: {
          formatter: function ()
          {
            return this.value / 1000 + 'k';
          }
        },
      },
      tooltip: {
        pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
      },
      plotOptions: {
        area: {
          pointStart: 1940,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      series: [{
        name: 'USA',
        data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
          1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
          27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
          26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
          24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
          22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
          10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
      }, {
        name: 'USSR/Russia',
        data: [null, null, null, null, null, null, null, null, null, null,
          5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
          4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
          15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
          33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
          35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
          21000, 20000, 19000, 18000, 18000, 17000, 16000]
      }]
    }
  }

  public chart2Options()
  {
    return {
      credits: {
        enabled: false
      },
      colors: ['blue', 'red'],
      plotOptions: {
        line: {
          lineWidth: 3
        },
        tooltip: {
          hideDelay: 200
        }
      },
      xAxis: {
        categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6',
          'Day 7', 'Day 8', 'Day 9', 'Day 10']
      },
      yAxis: {
        title: {
          text: 'Hours'
        },
        plotLines: [{
          value: 0,
          width: 1
        }]
      },
      tooltip: {
        valueSuffix: ' hrs',
        crosshairs: true,
        shared: true
      },
      series: [{
        name: 'Ideal Burn',
        color: 'rgba(255,0,0,0.25)',
        lineWidth: 2,
        data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
      }, {
        name: 'Actual Burn',
        color: 'rgba(0,120,200,0.75)',
        marker: {
          radius: 6
        },
        data: [100, 110, 85, 60, 60, 30, 32, 23, 9, 2]
      }]
    }
  }

  public chart3Options()
  {
    return {
      title: {
        text: null
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      xAxis: [{
        lineWidth: 0,
        push: null,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        title: {
          enabled: false
        },
        labels: {
          enabled: false
        },
        minorTickLength: 0,
        tickLength: 0
      }],
      yAxis: [{
        lineWidth: 0,

        minorGridLineWidth: 0,
        lineColor: 'transparent',
        title: {
          enabled: false
        },
        labels: {
          enabled: false
        },
        minorTickLength: 0,
        tickLength: 0
      }],
      series: [{
        data: [29.9, 71.5, 106.4, 129.2],
      }]
    }
  }

}
