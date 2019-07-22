<template>
    <div>
        <span :class="[{'empty':!content},{'hide':edit},textClass]" @click="onClickHandler"> {{content ? content : "Click to add content"}}</span>
        <input :value="content" ref="inputRef" name="voice" type="text"  v-if="!multiline" @blur="onClickHandler"  @input="onChangeText"/>
        <textarea :value="content" ref="inputRef" name="text" v-if="multiline" @blur="onClickHandler" @input="onChangeText"/>
    </div>
</template>
<script>
export default {
    name:'TextEditable',
    props:{
        content:{
            required:true,
            type:String,
        },
        textClass:String,
        multiline:Boolean,
        itemid:String

        
    },
    data(){
        return {
            edit:false
        }
    },
    methods:{
        onClickHandler(event){
            this.edit=!this.edit
            if (this.edit){
                const activeInput= this.$refs.inputRef
                setTimeout(() => {
                    activeInput.focus()
                }, 50);
            }
        },
        onChangeText(e){
          /* console.log(`e current target:${e.currentTarget.value} by :${this.$refs.inputRef.name}`); */
          
          this.$store.dispatch('updateTranscript',{itemid:this.itemid,item:this.$refs.inputRef.name,data:e.target.value.trim()})
        }
    }
}
</script>

<style>
span {
  cursor: pointer;
  display: block;
}
span.voice {
  font-family: "Montserrat SemiBold", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: #566074;
  margin: 2px 0 8px 0;
}
span.voice + input {
  font-family: "Montserrat Semibold", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: #566074;
  margin: 0 0 4px 0;
}
span.voice + textarea {
  font-family: "Montserrat Semibold", Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  color: #566074;
  margin: 0 0 4px 0;
}
span.text {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 16px;
  
  line-height: 22px;
  color: #778195;
}
span.text + input {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: #778195;
}
span.text + textarea {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: #778195;
}
span.empty {
  opacity: 0.6;
}
span.hide {
  display: none;
}
span.hide + input {
  display: block;
}
span.hide + textarea {
  display: block;
}
span + input {
  display: none;
  width: 100%;
}
span + textarea {
  display: none;
  width: 100%;
  resize: none;
  height: 150px;
}

</style>
