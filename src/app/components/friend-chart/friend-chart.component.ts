import { Component, Input, OnDestroy, OnInit, input } from '@angular/core';
import * as d3 from 'd3';
import { IAgGridFriendsInterface } from '../../models/friends-form.interface';
import { Observable, Subscription, tap } from 'rxjs';

@Component({
  selector: 'secureworks-friend-chart',
  standalone: true,
  imports: [],
  templateUrl: './friend-chart.component.html',
  styleUrl: './friend-chart.component.scss',
})
export class FriendChartComponent implements OnInit, OnDestroy {
  @Input() public data!: Observable<IAgGridFriendsInterface[] | null>;
  private _subscription = new Subscription();
  private _friendData!: IAgGridFriendsInterface[] | null;
  private _svg!: any;
  private _margin = 50;
  private _weight = 700 - this._margin * 2;
  private _height = 600 - this._margin * 2;

  public ngOnInit(): void {
    this._subscription.add(
      this.data.pipe(tap(data => {
        this._friendData = data;
        this._create_svg();
        this._drawPlot();
      })).subscribe()
    );
  }

  private _create_svg(): void {
    this._svg = d3
      .select('figure#scatter')
      .append('svg')
      .attr('width', this._weight + this._margin * 2)
      .attr('height', this._height + this._margin * 2)
      .append('g')
      .attr(
        'transform',
        'translate(' + this._margin + ',' + this._margin + ')'
      );
  }

  private _drawPlot(): void {
     // Add X axis label:
  this._svg.append("text")
  .attr("text-anchor", "end")
  .attr("x", this._weight/2 + 10)
  .attr("y", this._height + 10 + 20)
  .text("Age");

// Y axis label:
this._svg.append("text")
  .attr("text-anchor", "end")
  .attr("transform", "rotate(-90)")
  .attr("y", -30)
  .attr("x", 10 - this._height/2 + 30)
  .text("Weight")
    // Add X axis
    const x = d3.scaleLinear().domain([0, 200]).range([0, this._weight]);
    this._svg
      .append('g')
      .attr('transform', 'translate(0,' + this._height + ')')
      .call(d3.axisBottom(x).tickFormat(d3.format('d')));

    // Add Y axis
    const y = d3.scaleLinear().domain([0, 200]).range([this._height, 0]);
    this._svg.append('g').call(d3.axisLeft(y));

    // Add dots
    const dots = this._svg.append('g');
    dots
      .selectAll('dot')
      .data(this._friendData)
      .enter()
      .append('circle')
      .attr('cx', (d: any) => x(d.age))
      .attr('cy', (d: any) => y(d.weight))
      .attr('r', 7)
      .style('opacity', 0.5)
      .style('fill', '#69b3a2');

    // Add labels
    dots
      .selectAll('text')
      .data(this._friendData)
      .enter()
      .append('text')
      .text((d: any) => d.name)
      .attr('x', (d: any) => x(d.age))
      .attr('y', (d: any) => y(d.weight));
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
