<template>

  <h1 class="title"><u>LIST SURAH</u></h1>

  <div>
    <li v-for="item in listSurah">
      <h3>{{ item.id + '. ' + item.name_simple + ' (' + item.translated_name.name + ')'
      + ' | ' + item.verses_count + ' Ayat' }}</h3>
      <h2 class="name_arabic">{{ item.name_arabic }}</h2>
      <router-link :to="{name: 'surah', params: {id: item.id}}" class="baca">Baca Surah</router-link> <hr>
    </li>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'

export default {

  data() {
    return {
      listSurah: ref([])
    }
  },

  mounted() {
    this.getListSurah()
  },

  methods: {
    getListSurah() {
      axios.get('https://api.quran.com/api/v4/chapters?language=id')
          .then((response) => {
            console.log(response)
            this.listSurah = response.data.chapters
          }).catch ((err) => {
        console.log(err)
      })
    }
  }
}

</script>

<style>
li {
  list-style: none;
  padding-left: 20pt;
  padding-top: 20pt;
}

.title {
  text-align: center;
  font-weight: bold;
}

.name_arabic {
  float: right;
  font-size: 40px;
}

.baca {
  font-size: 15pt;
  font-family: Verdana;
}

</style>