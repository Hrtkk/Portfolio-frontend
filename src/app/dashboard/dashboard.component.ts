import { Component,Injector, OnInit, AfterViewInit, ViewChild, TemplateRef, 
  ComponentFactoryResolver, 
  ViewContainerRef, ChangeDetectorRef} from '@angular/core';
import { HEROES } from '../models/mock-transaction';
import { Hero } from '../models/hero';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']


})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  @ViewChild('tpl') tpl: TemplateRef<any>;
    index = 0;
    len = 10;
    hero: Hero[] = [HEROES[0], HEROES[1], HEROES[2], HEROES[3]];

    constructor(private cdr: ChangeDetectorRef) { }
    ngOnInit() {
      this.len = HEROES.length;
      this.index = 0;

    }
  ngAfterViewInit() {
    const view = this.tpl.createEmbeddedView(null);
    this.vc.insert(view);
    this.cdr.detectChanges();
  }

  next() {
    if (this.index === this.len - 1) {
      this.index = 0;
    } else if (this.index === undefined){
      this.index = 0;
    } else {
      this.index += 1;
    }
    this.hero.shift();
    this.hero.push(HEROES[(this.index + 3) % this.len]);
  }
  prev() {
    if (this.index === 0) {
      this.index = this.len - 1;
    } else {
      this.index -= 1;
    }
    this.hero.pop();
    this.hero.unshift(HEROES[this.index]);
  }
}
