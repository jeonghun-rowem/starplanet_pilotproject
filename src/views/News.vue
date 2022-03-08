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
            <tr v-for="item in Test" :key="item.name">
              <td :style="{ color: 'gray' }">
                {{ item.name }}
              </td>
              <td :style="{ textAlign: 'left' }">
                {{ item.calories }}
              </td>
              <td :style="{ color: 'gray' }">
                {{ item.date }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import NewsServiceBar from "@/components/News_ServiceBar.vue";

export default {
  name: "NeWs",

  components: { NewsServiceBar },

  data() {
    return {
      NsText1: "NEWS",
      NsText2: "스타 플래닛의 소식을 알려드립니다.",

      // Test용 데이터
      Test: [
        {
          name: "1",
          calories: "[공지] 스타패스 ▶ 스타 플래닛 BI 변경 업데이트 안내",
          date: "2022-01-21 12:38:29",
        },
        {
          name: "2",
          calories: "	[공지] 스타패스 서비스 명칭 변경 안내",
          date: "2022-01-21 12:38:29",
        },
        {
          name: "3",
          calories: "[공지] 스타패스 이용약관 및 개인정보 처리방침 변경 안내",
          date: "2022-01-21 12:38:29",
        },
        {
          name: "4",
          calories: "	[공지] 스타패스 홈 새단장 기념 앱 리뷰 이벤트 당첨자 안내",
          date: "2022-01-21 12:38:29",
        },
        {
          name: "5",
          calories: "[공지] 스타패스 ▶ 스타 플래닛 BI 변경 업데이트 안내",
          date: "2022-01-21 12:38:29",
        },
        {
          name: "6",
          calories: "[공지] 스타패스 ▶ 스타 플래닛 BI 변경 업데이트 안내",
          date: "2022-01-21 12:38:29",
        },
        {
          name: "7",
          calories: "[공지] 스타패스 ▶ 스타 플래닛 BI 변경 업데이트 안내",
          date: "2022-01-21 12:38:29",
        },
        {
          name: "8",
          calories: "[공지] 스타패스 ▶ 스타 플래닛 BI 변경 업데이트 안내",
          date: "2022-01-21 12:38:29",
        },
        {
          name: "9",
          calories: "[공지] 스타패스 ▶ 스타 플래닛 BI 변경 업데이트 안내",
          date: "2022-01-21 12:38:29",
        },
        {
          name: "10",
          calories: "[공지] 스타패스 ▶ 스타 플래닛 BI 변경 업데이트 안내",
          date: "2022-01-21 12:38:29",
        },
      ],
    };
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
