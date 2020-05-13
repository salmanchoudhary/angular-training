import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterContentChecked, OnDestroy {
  title = 'angular-training';
  constructor() {
    console.log(">>Constructer Called");
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Async Work Complete");
        resolve();
      }, 1000);
    });
    let fakeAsyncData$ = new Observable(observer => {
      setTimeout(() => {
        observer.next('New data is coming');
        observer.complete();
      }, 2000);
    });
    fakeAsyncData$.subscribe({
      next(val) { console.log(val) } 
    });
    // promise.then(data=>{

    // },
    // error =>{

    // })
  }

  ngOnChanges() {
    console.log(">>OnChanges Called")
  }

  ngOnInit(): void {
    console.log(">>OnInit Called")
  }

  ngDoCheck() {
    console.log(">>DoCheck Called")
  }

  ngAfterContentInit() {
    console.log(">>AfterContentInit Called")
  }

  ngAfterContentChecked() {
    console.log(">>AfterContentChecked Called")
  }

  ngAfterViewInit() {
    console.log(">>AfterViewInit Called")
  }

  ngAfterViewChecked() {
    console.log(">>AfterViewChecked Called")
  }

  ngOnDestroy() {
    console.log(">>OnDestrory Called")
  }
}
