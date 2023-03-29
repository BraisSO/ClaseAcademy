import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RickymortyService } from 'src/app/services/rickymorty.service';

@Component({
  selector: 'app-ricky-morty',
  templateUrl: './ricky-morty.component.html',
  styleUrls: ['./ricky-morty.component.css']
})
export class RickyMortyComponent implements OnInit {

  characterList:any=[];
  characterResults: any[] = [];
  isDropdownOpen: boolean = false; 
selectedOption: string = '';


  constructor(private rickymortyService:RickymortyService, private router:Router) { }

  ngOnInit(): void {
    this.getPersonajes();
  }
  

  getPersonajes() {
    this.rickymortyService.getPetition().subscribe(res => {
      this.characterList = res;

      for (const key in this.characterList.results) {
        this.characterResults.push(this.characterList.results[key]);
      }
    });
  }


selectOption(option: string): void {
  this.selectedOption = option;
}

toggleDropdown(): void {
  this.isDropdownOpen = !this.isDropdownOpen; // toggle the dropdown open/closed state
}

  


}
