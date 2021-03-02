export class Event {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  petsAllowed: boolean;
  organizer: string;

  /**
   *
   */
  constructor() {
    this.id = 5928101;
    this.category = 'animal welfare';
    this.title = 'Cat Adoption Day';
    this.description = 'Find your new feline friend at this event';
    this.location = 'Meow Town';
    this.date = 'April 8, 2021'
    this.time = '12:00';
    this.petsAllowed = true;
    this.organizer = 'Kat Laydee';
  }
}