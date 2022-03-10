<template>
  <div>
    <NewsServiceBar :ns-text1="NsText1" :ns-text2="NsText2" />

    <div class="news_table">
      <v-simple-table fixed-header height="1000px">
        <template #default>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(list, i) in testData" :key="i">
              <td :style="{ color: 'gray' }">
                {{ list.num }}
              </td>
              <td :style="{ textAlign: 'left' }">
                {{ list.title }}
              </td>
              <td :style="{ color: 'gray' }">
                {{ list.date }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NewsServiceBar from "@/components/News_ServiceBar.vue";

export default {
  name: "NeWs",

  components: { NewsServiceBar },

  data() {
    return {
      NsText1: "NEWS",
      NsText2: "스타 플래닛의 소식을 알려드립니다.",

      testData: [],
    };
  },

  // ..Test용 데이터
  mounted() {
    axios.get("/Test.json").then((response) => {
      console.log(response);
      this.testData = response.data;
    });
  },
};
</script>

<style>
@import "@/static/News_Service.scss";
@import "@/styles/variables.scss";
.test {
  height: 1000px;
}
</style>
