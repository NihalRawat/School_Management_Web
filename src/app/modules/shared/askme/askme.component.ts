import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../helper.service';

@Component({
  selector: 'app-askme',
  templateUrl: './askme.component.html',
  styleUrls: ['./askme.component.css']
})
export class AskmeComponent implements OnInit {

  constructor(private helper:HelperService) { }

  ngOnInit(): void {
  }
   currentDateTime = new Date().toLocaleTimeString();
// console.log(currentDateTime);
geminiAnswer:string='Waiting for response...';
  geminiAllAnswer:string[]=[];
 question:string;
  callGemini(prompt: string){
    console.log(prompt);
    this.helper.generateContent(prompt).subscribe({
      
      next: (answer: string) => {
        this.geminiAnswer = answer;
        this.geminiAllAnswer.push(this.geminiAnswer);
      },
      error: (err) => {
        console.error('Gemini API Error:', err);
        this.geminiAnswer = 'Error: Failed to get response.';
      },
      complete: () => {
        console.log('Gemini request complete.');
      }
   });
   
}

}
