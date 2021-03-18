<template>
  <div class="events">
    <h1>Events for Good</h1>
    <EventCard v-for="event in events" :event="event" :key="event.id"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import EventService from '@/services/EventService';
import EventCard from '@/components/EventCard.vue'; // @ is an alias to /src
import { Event } from '@/store/Event';

@Options({
  components: {
    EventCard,
  },
})
export default class EventList extends Vue {
  private events: Array<Event> = [];
  created() {
    const service = new EventService();
    service.getEvents()
      .then(response => {
        this.events = response.data;
      })
      .catch(reason => {
        console.error(reason);
      });
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>