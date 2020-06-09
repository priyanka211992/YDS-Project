import { Component } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected:any;
  filtered :any;
      stat = [
          { value: "All", id: "123" },
          { value: "Unpaid and sent", id:"12" },
  
          { value: "Unpaid and sent",id:"23" },
          { value: "Unpaid and not sent" ,id:"45"},
          { value: "Unpaid with due date",id:"56" },
          { value: "Paid",id:"57" },
          { value: "Open",id:"78" },
          { value: "Overdue" ,id:"45"}];
  
      status = ['Select Status', 'All', 'Unpaid and sent', 'Unpaid with due date', 'Paid', 'Open', 'Overdue'];

	

  constructor(private _authService: AuthService){}

  onOptionsSelected() {
    console.log(this.selected); 
    this.filtered = this.stat.filter(t=>t.value ==this.selected);
}
}