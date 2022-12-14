import { Component, OnInit } from '@angular/core';
import { RickapiService } from '../rickapi.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  constructor(private service: RickapiService) { }

  ngOnInit(): void {

  }

  handleSubmit (event: any) {
    event.preventDefault;

    const data = new FormData(event.target);
    const value = data.get('id');
    console.log({value});
  }


}
