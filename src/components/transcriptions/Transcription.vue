<template>
  <div class="list-item-content">
    <Checkbox :id="transcriptionitem.id" class="checkbox"/>
    <i class="person"/>
    <div class="text-container">
      <TextEditable :content="transcriptionitem.voice" :textClass="'voice'" :itemid="transcriptionitem.id"/>
      <TextEditable :content="transcriptionitem.text" :textClass="'text'" :multiline="true" :itemid="transcriptionitem.id" />
    </div>
    <i class="delete" @click="deleteTranscript(transcriptionitem.id)"/>
  </div>
</template>
<script>
import Checkbox from '@/components/ui/Checkbox.vue';
import TextEditable from '@/components/ui/TextEditable.vue';
import {mapActions} from 'vuex'
export default {
    name:'Transcription',
    props:{
      transcriptionitem:{
        required:true,
        type:Object
      }
    },
    components:{
      Checkbox,
      TextEditable
    },
    methods:{
      ...mapActions({
        deleteTranscript:'removeTranscript'
      })
    }
}
</script>

<style>
.list-item-content {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    padding: 24px 53px 24px 24px;
  }
  .list-item-content:hover i.delete {
    visibility: visible;
    opacity: 1;
  }
  .list-item-content i {
    display: block;
  }
  .list-item-content i.person {
    background: url("~@/assets/images/person.svg") center/cover no-repeat;
    width: 26px;
    height: 26px;
    margin-right: 8px;
    flex-shrink: 0;
  }
  .list-item-content i.delete {
    position: absolute;
    top: 24px;
    right: 24px;
    width: 16px;
    height: 20px;
    background: url("~@/assets/images/delete.svg") center/cover no-repeat;
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
    transition: opacity 150ms ease-in-out;
  }
  .list-item-content .text-container {
    width: 100%;
  }
  
</style>
