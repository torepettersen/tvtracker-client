import { Component, OnInit } from '@angular/core';
import {Show} from '../../interfaces'
import {UserService} from '../../services/user.service'
import {TvMazeService} from '../../services/tv-maze.service'
import {TvtrackerService} from '../../services/tvtracker.service'
import {CalendarEvent} from 'calendar-utils'
import { startOfDay, isSameMonth, isSameDay, format} from 'date-fns'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.sass']
})
export class ScheduleComponent implements OnInit {
  view: string = 'month'
  
  viewDate: Date = new Date()
  events: CalendarEvent[] = []
  
  activeDayIsOpen: boolean = false;
  shows: Show[] = []

  constructor(
    private _tvtrackerService: TvtrackerService,
    private _tvmazeSerive: TvMazeService,
    private _userService: UserService
  ) { }

  ngOnInit() {
    if(this._userService.isAuthenticated()) {
      
      this._tvtrackerService.subscribedShows()
        .subscribe(shows => this.shows = shows)
      
      this._tvtrackerService.subscribedEpisodes()
        .subscribe(episodes => {
          let e = []
          episodes.forEach(episode => {
            let color: any = {}
            let show = this.shows.find(show => show.id === episode.showId)
            color.primary = randomColor({luminosity: 'dark', seed: show.tvmazeId})
            color.secondary = tinycolor(color.primary).brighten(50)
            e.push({
              start: new Date(episode.airstamp),
              title: `
                 ${format(episode.airstamp, 'H:mm')} - ${show.name} S${episode.season}E${episode.number} - ${episode.name}
              `,
              color: color
            })
          })
          this.events = e
        })
    }
  }
  
  dayClicked({date, events}: {date: Date, events: CalendarEvent[]}): void {
    
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }
}
