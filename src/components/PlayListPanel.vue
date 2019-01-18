<template>
    <v-card>
      <v-list>
        <v-list-tile v-for="(track, index) of playlist" :key="track.title" v-show="track.display">
          <v-list-tile-content>
            <v-list-tile-title>{{index}} {{track.artist}} - {{track.title}}</v-list-tile-title>
          </v-list-tile-content>
          <v-spacer></v-spacer>
          {{track.howl.duration()}}
        </v-list-tile>
      </v-list>
    </v-card>
</template>

<script>
  export default {
    name: 'PlayListPanel',
    props: {
      playList: Array
    },
    data(){
      return {

      }
    }
  }
</script>

<style scoped>

</style>
