import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-iti',
  imports: [FormsModule],
  templateUrl: './iti.component.html',
  styleUrl: './iti.component.css'
})
export class ITIComponent {
    ChoseTrack:string='';
    filteredTracks: { trackName: string; branch: string[] }[] = [];
  tracks:{ trackName:string ,branch:string[]}[] = [
    {
      trackName:'DotNet',
      branch:['smart' , 'mnof' , 'banha']
    },
    {
      trackName:'Tester',
          branch:['smart' , 'banha']
    },
    {
          trackName:'FrontEnd',
          branch:[ 'mnof' , 'banha','asute']
    },
    {
          trackName:'PHP',
          branch:['smart' , 'mnof' , 'banha','asute','geza']
    }]

    Search(){
      if (this.ChoseTrack) {
        this.filteredTracks = this.tracks.filter(item => item.trackName === this.ChoseTrack);
        console.log("Filtered Result:", this.filteredTracks);
      } else {
        alert("Please select a track first!");
      }

    }
}
