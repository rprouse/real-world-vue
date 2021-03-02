<template>
  <div class="home">
    <EventCard />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import EventCard from '@/components/EventCard.vue'; // @ is an alias to /src

@Options({
  components: {
    EventCard,
  },
})
export default class Home extends Vue {}
</script>
