<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="3">
                Current Players:
                <v-text-field class="mt-2" v-model="playerName" variant="outlined"></v-text-field>
                VS
                <v-text-field class="mt-2" v-model="enemyName" readonly variant="outlined"></v-text-field>
                <hr class="my-3" />
                <div v-if="!haveOpponent">
                    Invite Opponent:
                    <v-btn @click="copyInvite('joiner')" color="success" class="my-2">
                        Copy Link
                    </v-btn>
                </div>
                <div v-else>
                    Invite Viewers:
                    <v-btn @click="copyInvite('viewer')" color="success" class="my-2">
                        Copy Link
                    </v-btn>
                </div>
                <hr class="my-3" />
                Current Moving: Player {{ playingPlayer }}

                <hr class="my-3" />
                <v-btn @click="move = true" v-if="!move">
                    Move Block
                </v-btn>
                <v-btn @click="move = false" v-else>
                    Cancel Move
                </v-btn>
            </v-col>
            <v-col v-if="haveOpponent">
                <table class="my-5">
                    <tr v-for="x in 5" :key="'x' + x">
                        <td v-for="y in 5" :key="'y' + y">
                            <ChessBox :ref="x + '-' + y" :chess="current" @played="playedChess" @moved="movingBlocks"
                                :isTurn="turn" :selectedBlocks="selectedBlocks" :x="x" :y="y" :moving="move" />
                        </td>
                    </tr>
                </table>
            </v-col>
            <v-col v-else>
                Awaiting Opponents...
            </v-col>
        </v-row>
        <v-dialog v-model="showWin" max-width="300px" persistent>
            <v-card>
                <v-card-title>
                    Victory!
                </v-card-title>
                <v-card-text>
                    Game Over! Winner is born!
                    Congrats for Player {{ winner }}!
                    <v-btn color="success" class="mt-3 mb-2 w-100" @click="reload">
                        Create New Game
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-dialog v-model="showDraw" max-width="300px" persistent>
            <v-card>
                <v-card-title>
                    Oh no!
                </v-card-title>
                <v-card-text>
                    Draw! No Winners this time!
                    <v-btn color="success" class="mt-3 mb-2 w-100" @click="reload">
                        Create New Game
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-container>
</template>
<script>
import ChessBox from '../../components/Tic-Tac-Toe/ChessBox.vue';
import { useGameStore } from "@/store/tic-tac-toe.js";
import { useHead } from 'unhead';
import * as SignalR from "@microsoft/signalr";
export default {
    setup() {
        useHead({
            title: '米亞Tic Tac Toe'
        })
        const game = useGameStore();
        const route = useRoute();
        const router = useRouter();
        return {
            game,
            route,
            router
        }
    },
    components: {
        ChessBox
    },
    data() {
        return {
            chess: ['X', 'O'],
            current: "",
            turn: true,
            move: false,
            selectedBlocks: [],
            playerName: "Player",
            enemyName: "Awaiting...",
            hub: null,
            haveOpponent: false,
            showWin: false,
            showDraw: false,
            winner: 0,
            playingPlayer: 0
        }
    },
    mounted() {
        if (process.client) {
            this.createConnection().then(async () => {
                await this.joinRoom();
            });
        }
    },
    methods: {
        movingBlocks(position) {
            if ((position.x - 1) <= 1) {
                position.x = 2;
            }
            if ((position.y - 1) <= 1) {
                position.y = 2;
            }
            if ((position.x + 1) >= 5) {
                position.x = 4
            }
            if ((position.y + 1) >= 5) {
                position.y = 4
            }
            let blocks = [];
            for (let x = position.x - 1; x < position.x + 2; x++) {
                for (let y = position.y - 1; y < position.y + 2; y++) {
                    blocks.push({
                        x: x,
                        y: y
                    });
                }
            }
            this.selectedBlocks = blocks;
            this.hub.invoke("MoveBlock", {
                x: position.x - 1,
                y: position.y - 1,
                guid: this.route.query.guid
            });
            this.move = false;
            this.turn = false;
        },
        playedChess(position) {
            this.hub.invoke("Chess", {
                x: position.x - 1,
                y: position.y - 1,
                guid: this.route.query.guid
            })
            this.turn = false;
        },
        copyInvite(role) {
            navigator.clipboard.writeText("https://www.mya-hkvtuber.com/tic-tac-toe/play?guid=" + this.route.query.guid + "&role=" + role);
        },
        async createConnection() {
            let vm = this;
            this.hub = new SignalR.HubConnectionBuilder()
            .withUrl("https://www.mya-hkvtuber.com/game")
            .withAutomaticReconnect()
            .build();
            this.hub.on("RoomJoined", (e) => {
                vm.router.push({
                    path: "/tic-tac-toe/play",
                    query: {
                        guid: e.guid
                    }
                })
            });
            this.hub.on("RoomGone", () => {
                alert("Room is not exist anymore!");
                vm.router.push({
                    path: "/tic-tac-toe/play",
                    query: {}
                });
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            });
            this.hub.on("OpponentJoined", async () => {
                vm.haveOpponent = true;
                vm.enemyName = "Player 2";
                await vm.hub.invoke("GetBoard", this.route.query.guid);
            });
            this.hub.on("Board", (e) => {
                let blocks = [];
                for (let x = e.x + 1; x < e.x + 4; x++) {
                    for (let y = e.y + 1; y < e.y + 4; y++) {
                        blocks.push({
                            x: x,
                            y: y
                        });
                    }
                }
                this.selectedBlocks = blocks;
            });
            this.hub.on("Mov", (e) => {
                console.log(e);
                if (e == 1 && this.current == 'X') {
                    vm.turn = true;
                }
                else if (e == 2 && this.current == 'O') {
                    vm.turn = true;
                }
                vm.playingPlayer = e;
            });
            this.hub.on("Chess", (e) => {
                const arr = vm.chunkIntoN(e, 5);
                for (let x = 0; x < 5; x++) {
                    for (let y = 0; y < 5; y++) {
                        try {
                            vm.$refs[(x + 1) + "-" + (y + 1)][0].opponentExec(arr[x][y]);
                        }
                        catch (e) {
                            console.error(e);
                        }
                    }
                }
            });
            this.hub.on("Winner", (e) => {
                vm.showWin = true;
                vm.winner = e;
            });
            this.hub.on("Draw", () => {
                vm.showDraw = true;
            });
            await this.hub.start();
        },
        async joinRoom() {
            if (!this.route.query.guid || this.route.query.role !== 'joiner') {
                await this.hub.invoke("CreateRoom");
                this.current = this.chess[0];
            }
            else {
                await this.hub.invoke("Join", this.route.query.guid);
                this.current = this.chess[1];
                this.move = false;
            }
        },
        chunkIntoN(arr, n) {
            const size = Math.ceil(arr.length / n);
            return Array.from({ length: n }, (v, i) =>
                arr.slice(i * size, i * size + size)
            );
        },
        reload() {
            window.location.reload();
        }
    }
}
</script>
<style>
table {
    margin: auto;
}
</style>