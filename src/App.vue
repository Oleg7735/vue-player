<template>
  <v-app dark>
    <v-content>
      <v-container>
        <player-title-bar></player-title-bar>
        <play-list-panel :playlist="playlist"></play-list-panel>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import PlayerTitleBar from './components/PlayerTitleBar'
  import PlayListPanel from './components/PlayListPanel'
export default {
  components: {
    PlayListPanel,
    PlayerTitleBar
  },
  data () {
    return {
      playlist: [

      ]
    }
  },
  created: function (){
    let fileName
    for(let record of playlist){
      fileName = record.title.replace(/\s/g, "_")
      record.howl = new Howl({src: [`./playlist/${fileName}.mp3`]})
    }
  }
}
</script>

<style>

</style>
