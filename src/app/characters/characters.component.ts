import { Component, OnInit } from '@angular/core';
import { RickapiService } from '../rickapi.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  data: any;

  constructor(private service: RickapiService) { }

  ngOnInit(): void {
    this.service.getCharacters()
    .subscribe(res => {
      this.data = res;
    })
  }


}
