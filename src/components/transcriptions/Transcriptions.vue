<template>
    <div class="list">
        <transition-group name="list-anim" tag="ul">
            <li v-for="item in allTranscripts" :key="item.id">
                <Transcription :transcriptionitem="item"/>
            </li>
        </transition-group>
        <i class="add-row" @click="createTranscript"/>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import Transcription from '@/components/transcriptions/Transcription.vue'
export default {
    name:'Transcriptions',
    components:{
        Transcription
    },
    methods:{
        ...mapActions({
            createTranscript:'addNewTranscript'
        })
    },
    computed: mapState({
        allTranscripts:'transcriptList'
    })
}
</script>

<style scoped>
.list {
    overflow: hidden;
}

.list ul {
    list-style: none;
    margin: 0 0 24px 0;
    padding: 0 24px;
}

.list ul li {
    position: relative;
    margin: 0;
    background-color: #ffffff;
    border-top: 1px solid #EAEDEF;
    border-right: 1px solid #EAEDEF;
    border-left: 1px solid #EAEDEF;
}

.list ul li:last-child {
    border-bottom: 1px solid #EAEDEF;
}

.list i.add-row {
    background: url('~@/assets/images/add-row.svg') center / cover no-repeat;
    width: 32px;
    height: 32px;
    margin: 0 auto 24px auto;
    display: block;
    cursor: pointer;
}

.list .list-anim-enter-active,
.list-content .list-anim-leave-active {
    transition: all 1 1;
}

.list .list-anim-enter,
.list-content .list-anim-leave-to {
    opacity: 0;
    margin-left: -100%;
}
</style>
