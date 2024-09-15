import { Component, OnInit } from '@angular/core';
import { Chart, BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip, LinearScale, PieController, ArcElement, Colors} from 'chart.js';
import { AdminService } from 'src/app/modules/admin-service/admin.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private service:AdminService
  ) { }

  ngOnInit(): void {
    
    this.getCountOfTSL();
  }

  teacherCount:number=0;
  studentCount:number=0; 
  totalLeaveCount:number=0; 
  approveLeaveCount:number=0; 
  pendingLeaveCount:number=0; 
  chart: any;  // To hold the chart instance


  getCountOfTSL(){
      this.service.getCountsTSL().subscribe(
        (res)=>{
          if(res!=null){
            this.teacherCount=res.teacherCount;
            this.studentCount=res.studentCount;
            this.totalLeaveCount=res.totalLeaveCount;
            this.approveLeaveCount=res.approveLeaveCount;
            this.pendingLeaveCount=res.pendingLeaveCount;
            console.log(res); 
            this.showCharts();
      }else{
          console.log("some");
      }
    })
      
    }


  // showCharts(){
   
  //   Chart.register(PieController, ArcElement, Tooltip, Legend,LinearScale,Colors);
    
  // new Chart("myChart", {
  //   type: 'pie',
  //   data: {
  //     labels: ['Teachers', 'Students', 'Total Leaves', 'Approved Leaves', 'Pending Leaves'],
  //     datasets: [{
  //       label: 'Counts',
  //       data: [this.teacherCount, this.studentCount, this.totalLeaveCount, this.approveLeaveCount, this.pendingLeaveCount],
  //       // backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
  //       borderWidth: 1
  //     }]
  //   },
  //   options: {
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         display: true,
  //         position: 'top',
  //       },
  //       tooltip: {
  //         enabled: true
  //       }}
  //   }
  // });
  // }
  showCharts(){    
    Chart.register(PieController, ArcElement, Tooltip, Legend,LinearScale,Colors);    
  new Chart("myChart", {
    type: 'pie',
    data: {
      labels: ['Total Teachers', 'Total Students', 'Total Leaves', 'Approved Leaves', 'Pending Leaves'],
      datasets: [{
        label: 'Count',
        data: [this.teacherCount, this.studentCount, this.totalLeaveCount, this.approveLeaveCount, this.pendingLeaveCount],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  }

}


