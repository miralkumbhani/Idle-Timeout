import { Component, OnInit } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	public showModal: boolean = false;

  constructor(private userIdle: UserIdleService) { }

  ngOnInit() {
  	this.userIdle.startWatching();
  	var classrepresentor = this;
  	this.userIdle.onTimerStart().subscribe(count => console.log(count));
  	this.userIdle.onTimeout().subscribe(() => classrepresentor.showModal = true);
  }

  stop() {
  	this.userIdle.stopTimer();
  }

  stopWatching() {
	this.userIdle.stopWatching();
  }

  startWatching() {
  	this.userIdle.startWatching();
  }

  restart() {
  	this.userIdle.resetTimer();
  }

  onCloseModal() {
  	this.showModal = false;
  }

}
