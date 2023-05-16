<template>
  <div class="ayat">
    <li v-for="item in ayatQuran">
      <p>{{ item.text_uthmani }}</p>
      <hr>
    </li>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {

  data() {
    return {
      ayatQuran: ref([])
    }
  },

  mounted() {
    this.getAyatQuran()
  },

  methods: {
    getAyatQuran() {
      axios.get(`https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${this.$route.params.id}`)
          .then ((response) => {
            console.log(response)
            this.ayatQuran = response.data.verses
          }).catch((err) => {
        console.log(err)
      })
    }
  }
}

</script>

<style>

.ayat {
  text-align: right;
  padding-right: 100px;
  padding-left: 100px;
  font-size: 64px;
  font-family: Verdana;
}

</style>