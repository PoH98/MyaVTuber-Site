<template>
    <v-container style="max-width: 1200px">
        <h1>
            米亞遊戲創建比賽
        </h1>
        <div class="text-left">
            <h2 class="mb-2">規則: </h2>
            <ul>
                <li>
                    創建任何關於米亞的遊戲，遊戲內容唔需要太長
                </li>
                <li>
                    禁止敏感，色情，過於血腥，反社會，政治內容
                </li>
                <li>
                    遊戲必須要使用線上形式創建（可有客戶端，但最終需要使用網上儲存&核對資料系統）
                </li>
                <li>
                    活動即將會係4月1號00:00結束團隊報名，並且在10月1號00:00結束開發
                </li>
                <li>
                    PoH會提供server，只需要send嗮你的伺服器端卑PoH並且交代如何設置
                </li>
                <li>
                    禁止外包，盡可能搵院友們一起合作創建
                </li>
                <li>
                    團隊人數上限6人，至少2人
                </li>
                <li>
                    如果參加團隊不足3個，活動可能取消
                </li>
                <li>
                    活動期間遊戲source code必須要上傳github，嚴禁開發者植入惡意代碼，活動結束後遊戲可恢復close source<s>並且植入惡意代碼</s>
                </li>
                <li>
                    時間過左的一律當棄權
                </li>
            </ul>
        </div>
        <hr class="my-3" />
        <div class="text-left">
            <h2 class="mb-2">開發限制</h2>
            <ul>
                <li>
                    Server環境為Windows Server 2019，所以盡可能使用返Windows Server可以容易運行的Server code
                </li>
                <li>
                    Server運行時不得使用超過1GB RAM，需要緩存的話使用文件的方式
                </li>
                <li>
                    Server運行時盡可能優化CPU，長期禁止長期運行高CPU（20%），Server spec是2 Core Intel(R) Xeon(R) Platinum 8171M CPU @
                    2.60GHz，否則需要回爐重做
                </li>
                <li>
                    客戶端盡可能靠攏網頁版，不過如果要搞Unity或者UE都冇問題，但需要提供完整遊戲zip卑PoH上傳卑大家下載
                </li>
                <li>
                    Database限制於MongoDB或者文件儲存，小遊戲唔好搞到太複雜
                </li>
                <li>
                    遊戲進度內容一律使用雲端儲存，遊戲登入可以自己創建自己的登入系統或者使用Discord登入
                </li>
            </ul>
        </div>
        <hr class="my-3" />
        <div class="text-left">
            <h2 class="mb-2">獎品</h2>
            <ul>
                <li>
                    勝出隊伍將會通過本網頁到時候的投票頁面（只限一隊勝出，每人最多投一個）每人可選擇下列獎品
                    <ul class="ml-3">
                        <li>
                            Steam Gift Card 200HKD
                        </li>
                        <li>
                            Google Play Gift Card 150HKD
                        </li>
                        <li>
                            ITunes Gift Card 150HKD
                        </li>
                    </ul>
                </li>
                <li>
                    所有遊戲會長期公開遊玩，如果有興趣成為正式遊戲都可以繼續不間斷更新或者新增充值系統等等（不過如果涉及收費的話就需要開始自己卑返個server開支！否則會關服！所以請注意！）
                </li>
            </ul>
        </div>
        <hr class="my-3" />
        <div class="text-left">
            <h2 class="mb-2">報名方式</h2>
            <ul>
                <li>
                    到米亞Discord內搵PoH98 (@poh98105) 報名，提供團隊名字以及成員discord資料
                </li>
            </ul>
        </div>
        <hr class="my-3" />
        <div class="my-3" v-if="teams.length === 0">
            <h3>等待報名中...</h3>
        </div>
        <v-row class="mt-3">
            <v-col cols="12" md="6" v-for="team in teams" :key="team.name">
                <v-card class="elevation-10 rounded-xl" style="border-width: 3px;">
                    <v-card-text>
                        <h1>
                            {{ team.name }}
                        </h1>
                        <hr class="my-6" />
                        <v-list class="text-left">
                            <v-list-item v-for="member in team.members" :key="member.discord" :title="member.name"
                                :subtitle="member.discord">
                            </v-list-item>
                        </v-list>
                        <v-btn class="w-100" target="_blank" color="purple-darken-2" :href="team.url">Website</v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            teams: [
                {
                    name: "熊貓巴士迷三人組",
                    members:[
                        {
                            name:"阿軒",
                            discord:"@ahhin1402"
                        },
                        {
                            name:"D100",
                            discord:"@yuanyouno148mtrd100d102pz9163"
                        },
                        {
                            name:"ME8853",
                            discord:"@henry0912lau"
                        }
                    ],
                    url:"https://buspanda.mya-hkvtuber.com/"
                }
            ]
        }
    }
}
</script>