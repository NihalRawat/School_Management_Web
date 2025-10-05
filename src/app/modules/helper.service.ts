import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Keys } from '../constants/Keys';
import { map, Observable } from 'rxjs';

// Define the expected response structure from the Gemini API
interface Part {
  text: string;
}
interface Content {
  parts: Part[];
}
interface Candidate {
  content: Content;
}
interface GeminiResponse {
  candidates: Candidate[];
}
@Injectable({
  providedIn: 'root'
})
export class HelperService {
  keys:string='http://localhost:8083/';
  // geminiKey:string = this.key.geminiMineKey;
  //   geminiUrl:string=this.key.geminiUrl;//inclued key in it
    geminiUrl:string='https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyCwK1fDZhJbCDPkBUSXX1tg8SCk2lUnDLA';

  constructor(private http:HttpClient) { }
    
  // callGemini(){
  //   this.http.post(this.geminiUrl).subscribe()
  // }
  generateContent(prompt: string): Observable<string> {
    // 1. Define the Request Headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // For some older models/methods, the key was passed here. 
      // For generateContent with the key in the URL, you only need Content-Type.
      // 'x-goog-api-key': 'YOUR_API_KEY_HERE' // Alternative: pass key in header
    });

    // 2. Define the Request Body (Payload)
    // The Gemini API expects the prompt text inside a specific JSON structure.
    const body = {
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ],
      // Optional: Add generation configurations if needed
      // config: { temperature: 0.8 } 
    };

    // 3. Make the POST request and process the response
    return this.http
      .post<GeminiResponse>(this.geminiUrl, body)
      .pipe(
        // Map the complex JSON response to just the text string
        map((response: GeminiResponse) => {
          // Navigate the response object to find the generated text
          return (
            response.candidates[0]?.content?.parts[0]?.text || 'No response generated.'
          );
        })
      );
  }
}
