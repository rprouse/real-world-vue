<template>
  <div class="home">
    <EventCard v-for="event in events" :event="event" :key="event.id"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import EventCard from '@/components/EventCard.vue'; // @ is an alias to /src
import { Event } from '@/store/Event';

@Options({
  components: {
    EventCard,
  },
})
export default class Home extends Vue {
  data() {
    return {
      events: [
        new Event (
          5928101,
          'animal welfare',
          'Cat Adoption Day',
          'Find your new feline friend at this event',
          'Meow Town',
          'April 8, 2021',
          '12:00',
          true,
          'Kat Laydee'
        ),
        new Event(
          6928101,
          'fund raising',
          'Cancer Run',
          'Run and raise money for cancer',
          'Runner Lane',
          'April 22, 2021',
          '14:00',
          true,
          'Joe Sprinter'
        ),
        new Event(
          5826701,
          'fund raising',
          'Laugh-A-Lot',
          'Comedy standup to raise money for the food shelter',
          'Tiger Theater',
          'April 2, 2021',
          '20:00',
          false,
          'Bob Bishop'
        )
      ]
    }
  }
}
</script>
