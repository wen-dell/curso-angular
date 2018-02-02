import { Component, OnInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import { AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { 
    this.log('constructor')
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.log('ngOnChanges');
  }
  
  ngOnInit() {
    this.log('ngOnInit');
  }
  
  ngDoCheck(): void {
    this.log('ngDoCheck');
  }
  
  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
  }
  
  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }
  
  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
