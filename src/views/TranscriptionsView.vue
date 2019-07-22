<template>
    <div class="container">
        <Header/>
        <section>
            <Transcriptions/>
        </section>
        <ErrorMessage/>
    </div>
</template>
<script>
import Header from '@/components/core/Header.vue';
import ErrorMessage from '@/components/core/ErrorMessage.vue';
import Transcriptions from '@/components/transcriptions/Transcriptions.vue'
import { mapState } from 'vuex';
export default {
    name:'TranscriptionsList',
    components:{
        Header,
        ErrorMessage,
        Transcriptions

    }
}
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
}
section {
    width: 100%;
    max-width: 786px;
    margin: 24px auto;
  }
</style>

