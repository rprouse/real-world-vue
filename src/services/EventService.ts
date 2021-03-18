import axios, { AxiosInstance } from 'axios';
import { Event } from '@/store/Event';

export default class EventService {

  private readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://my-json-server.typicode.com/rprouse/real-world-vue',
      withCredentials: false,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application.json'
      }
    });
  }

  public getEvents = () => this.client.get<Event[]>('/events');
}