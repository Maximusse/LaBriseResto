import {
  Injectable
} from '@angular/core';

@Injectable()
export class EventsService {

  events: any;

  constructor() {
    this.events = [{
        id: '1',
        titre: 'Diner gala rotaric club Yamoussoukro',
        date: '07/10/2017',
        content: 'Lorem ipsum dolor, sit amet enim distinctio vero, hic deleniti porro nisi omnis modi neque at similique vitae?'
      },
      {
        id: '2',
        titre: 'Réception après réunion',
        date: '21/11/2017',
        content: 'Lorem ipsum dolor, sit amet enim distinctio vero, hic deleniti porro nisi omnis modi neque at similique vitae?'
      },
      {
        id: '1',
        titre: 'Soirée détente',
        date: '05/12/2017',
        content: 'Lorem ipsum dolor, sit amet enim distinctio vero, hic deleniti porro nisi omnis modi neque at similique vitae?'
      }
    ];
  }

  getEvent() {
    return this.events;
  }

}
