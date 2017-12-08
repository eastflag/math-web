import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.scss']
})
export class ResultViewComponent implements OnInit {
  // lineChart
  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';
  public radarChartType:string = 'radar';

  // Radar
  public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];

  constructor() { }

  ngOnInit() {
  }

  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  print(): void {
    let popupWin;
    //printContents = document.getElementById('print-section').innerHTML;
    var printDiv = <HTMLCanvasElement> document.getElementById('canvas01') as HTMLCanvasElement;
    //var printContents = printDiv.toDataURL();

    var chartImg = "<br><img src='"+printDiv.toDataURL()+"'/>";

    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()"><h1>차트 프린트</h1>${chartImg}</body>
      </html>`
    );
    popupWin.document.close();

  }

}
