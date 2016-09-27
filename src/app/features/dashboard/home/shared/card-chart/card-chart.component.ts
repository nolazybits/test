import {Component, OnInit} from '@angular/core';
import {CardChartOptions} from "./card-chart.options";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'card-chart',
  templateUrl: './card-chart.component.html',
  styleUrls: ['./card-chart.component.scss']
})

export class CardChartComponent implements OnInit
{
  @Input() options: CardChartOptions;

  constructor()
  {
  }

  ngOnInit()
  {
  }

}
