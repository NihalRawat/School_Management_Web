import { Component, OnInit } from '@angular/core';
// import { Chart } from 'chart.js';
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
        
      }else{
          console.log("some");
      }
    }
      )
      this.showCharts();
    }

  showCharts(){
    // Chart.register(BarElement,PieController, BarController, CategoryScale, LinearScale, Decimation, Filler, Legend, Title, Tooltip);
    Chart.register(PieController, ArcElement, Tooltip, Legend,LinearScale,Colors);
    
  new Chart("myChart", {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
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
