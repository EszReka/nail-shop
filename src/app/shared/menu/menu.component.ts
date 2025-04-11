import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit, AfterViewInit {
  @Output() selectedPage : EventEmitter<string> = new EventEmitter();ű

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    
  }

  menuSwitch(pageValue: string){
    this.selectedPage.emit(pageValue);
  }


}
