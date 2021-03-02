export class Event {
  constructor(
    readonly id: number,
    readonly category: string,
    readonly title: string,
    readonly description: string,
    readonly location: string,
    readonly date: string,
    readonly time: string,
    readonly petsAllowed: boolean,
    readonly organizer: string
  ) { }
}