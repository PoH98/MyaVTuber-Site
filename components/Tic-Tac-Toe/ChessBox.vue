<template>
    <div :class="'chess-box' + (filled !== null ? ' disabled' : '') + (inRange ? ' active' : '')" @click="exec">
        <v-icon v-if="filled == 'X'">{{ mdiCloseThick }}</v-icon>
        <v-icon v-else-if="filled == 'O'">{{ mdiCircleOutline }}</v-icon>
    </div>
</template>
<script>
import {
    mdiCloseThick,
    mdiCircleOutline
} from "@mdi/js";
export default {
    props: {
        chess: {
            type: String
        },
        isTurn: {
            type: Boolean
        },
        selectedBlocks: {
            type: Array
        },
        x: {
            type: Number
        },
        y: {
            type: Number
        },
        moving: {
            type: Boolean
        }
    },
    data() {
        return {
            filled: null,
            mdiCloseThick,
            mdiCircleOutline
        }
    },
    computed: {
        inRange() {
            return this.selectedBlocks.filter(d => d.x === this.x && d.y === this.y).length > 0;
        }
    },
    methods: {
        exec() {
            if (!this.moving) {
                if (this.filled != null || !this.isTurn) {
                    return;
                }
                if (!this.inRange) {
                    return;
                }
                this.$emit("played", { x: this.x, y: this.y });
            }
            else {
                if (!this.isTurn) {
                    return;
                }
                this.$emit("moved", { x: this.x, y: this.y });
            }
        },
        opponentExec(chess) {
            let vm = this;
            switch (chess) {
                case 1:
                    vm.filled = 'X';
                    break;
                case 2:
                    vm.filled = 'O';
                    break;
                default:
                    vm.filled = null;
                    break;
            }
        },

    }
}
</script>
<style lang="scss">
.chess-box {
    cursor: pointer;
    width: 80px;
    height: 80px;
    border: 1px solid rgba(var(--v-border-color), 0.3);

    @media (max-width: 500px) {
        width: 50px;
        height: 50px;
    }

    @media(max-width: 290px) {
        width: 25px;
        height: 25px;
    }
}

.chess-box.disabled {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;

    @media(max-width: 290px) {
        font-size: 16px;
    }
}

.chess-box.active {
    border: 2px solid rgba(var(--v-border-color), 1);
}
</style>