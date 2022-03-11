<template>
  <div>
    <NewsServiceBar
      :news-service-text1="newsServiceText1"
      :news-service-text2="newsServiceText2"
    />

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
                {{ list.seq }}
              </td>
              <td :style="{ textAlign: 'left' }">
                {{ list.board_title }}
              </td>
              <td :style="{ color: 'gray' }">
                {{ list.upd_dt }}
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
      newsServiceText1: "NEWS",
      newsServiceText2: "스타 플래닛의 소식을 알려드립니다.",
      testData: [],
    };
  },

  mounted() {
    // postmen Documentation -> Request Headers참고하여 header 생성..
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Accept-Language": "en",
    };
    axios
      .post(
        "https://apitest.starpass.co.kr/board/getBoardList",
        {
          page: 3,
          row: 10,
          board_type: "1",
        },
        { headers }
      )
      .then((response) => {
        console.log("test");
        console.log(response.data.result.list);
        // 데이터 경로 담기..
        this.testData = response.data.result.list;
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
