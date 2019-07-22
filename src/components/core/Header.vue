<template>
  <header class="header-container">
    <div class="content">
      <h1 class="headerTitle">Transcriptions</h1>
      <div>
        <i class="upload" @click="mergeTranscripts"></i>
        <i class="fetch" @click="fetchTranscripts"></i>
      </div>
    </div>
  </header>
</template>
<script>
export default {
    name:'Header'
}
</script>

<style>
.header-container {
    background-color: #FFFFFF;
    width: 100%;
    height: 69px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.24), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

}

.header-container .content {
    width: 738px;
    padding: 0 24px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
}
.headerTitle{
    font-size: 18px;
    color: #414C5E;
    font-family: 'Montserrat Medium', Helvetica, Arial, sans-serif; 
    
}
.header-container .content i {
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-left: 24px;
    display: inline-block;
}

.header-container .content i.upload {
     background: url('~@/assets/images/upload.svg') center / cover no-repeat;
}

.header-container .content i.fetch {
    background: url('~@/assets/images/fetch-document.svg') center / cover no-repeat;
}
</style>
<script>
import { mapActions  } from 'vuex'
export default {
    name:'Header',
    methods:{
        ...mapActions({
            fetchTranscripts:'getTranscripts',
            mergeTranscripts:'uploadTranscripts'
        })
    }
}
</script>

