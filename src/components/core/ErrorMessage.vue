<template>
<transition name="bottom-to-left">
  <p v-if="errorMessage">{{errorMessage}}</p>
</transition>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "ErrorMessage",
  computed:{
    ...mapState(['errorMessage'])
  }
};
</script>
<style>
p {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100vw;
  padding: 24px;
  text-align: center;
  font-family: "Montserrat Medium", Helvetica, Arial, sans-serif;
  color: #ffffff;
  font-size: 16px;
  background-color: #778195;
}

.bottom-to-left-enter-active,
.bottom-to-left-leave-active {
  transition: all 150ms ease-in-out;
}

.bottom-to-left-enter {
  opacity: 0;
  bottom: -80px;
}

.bottom-to-left-leave-to {
  opacity: 0;
  left: -100vw;
}
</style>

