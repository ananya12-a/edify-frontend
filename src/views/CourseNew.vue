<template>
  <div style="position:relative;left:0;top:0">
    <v-img style="position:relative" :src="require(`@/assets/path/path.png`)"/>
    <v-img class="flag" id="flag1" :src="require(`@/assets/path/flag.png`)" max-width="120px"/>
    <v-img class="flag" id="flag2" :src="require(`@/assets/path/flag.png`)" max-width="120px"/>
    <v-img class="flag" id="flag3" :src="require(`@/assets/path/flag.png`)" max-width="120px"/>
    <v-img class="flag" id="flag4" :src="require(`@/assets/path/flag.png`)" max-width="120px"/>
    <v-img class="flag" id="flag5" :src="require(`@/assets/path/flag.png`)" max-width="120px"/>
    <v-img class="flag" id="flag6" :src="require(`@/assets/path/flag.png`)" max-width="120px"/>
    <v-img class="flag" id="flag7" :src="require(`@/assets/path/flag.png`)" max-width="120px"/>
    <v-img class="flag" id="orange" :src="require(`@/assets/path/orange.png`)" max-width="45px" @mouseover="orange=true" @mouseleave="orange=false"/>
    <v-img class="flag" id="blue" :src="require(`@/assets/path/blue.png`)" max-width="45px" @mouseover="blue=true" @mouseleave="blue=false"/>
    <v-img class="flag" id="purple" :src="require(`@/assets/path/purple.png`)" max-width="45px" @mouseover="purple=true" @mouseleave="purple=false"/>
    <v-img class="flag" id="pink" :src="require(`@/assets/path/pink.png`)" max-width="45px" @mouseover="pink=true" @mouseleave="pink=false"/>
    <v-img class="flag" id="green" :src="require(`@/assets/path/green.png`)" max-width="45px" @mouseover="green=true" @mouseleave="green=false"/>
    <v-img class="flag" id="orange1" :src="require(`@/assets/path/orange.png`)" max-width="45px" @mouseover="orange1=true" @mouseleave="orange1=false"/>
    <v-img class="flag" id="blue1" :src="require(`@/assets/path/blue.png`)" max-width="45px" @mouseover="blue1=true" @mouseleave="blue1=false"/>
    <v-img class="flag" id="purple1" :src="require(`@/assets/path/purple.png`)" max-width="45px" @mouseover="purple1=true" @mouseleave="purple1=false"/>
    <v-img class="flag" id="pink1" :src="require(`@/assets/path/pink.png`)" max-width="45px" @mouseover="pink1=true" @mouseleave="pink1=false"/>
    <v-img class="flag" id="green1" :src="require(`@/assets/path/green.png`)" max-width="45px" @mouseover="green1=true" @mouseleave="green1=false"/>

    <v-img class="flag" id="blue_t" :src="require(`@/assets/path/blue_Tooltip.png`)" max-width="95px" v-if="blue"/>
    <v-img class="flag" id="purple_t" :src="require(`@/assets/path/purple_Tooltip.png`)" max-width="95px" v-if="purple"/>
    <v-img class="flag" id="pink_t" :src="require(`@/assets/path/pink_Tooltip.png`)" max-width="95px" v-if="pink"/>
    <v-img class="flag" id="green_t" :src="require(`@/assets/path/green_Tooltip.png`)" max-width="95px" v-if="green"/>
    <v-img class="flag" id="orange_t" :src="require(`@/assets/path/orange_Tooltip.png`)" max-width="95px" v-if="orange"/>
    <v-img class="flag" id="blue_t1" :src="require(`@/assets/path/blue_Tooltip.png`)" max-width="95px" v-if="blue1"/>
    <v-img class="flag" id="purple_t1" :src="require(`@/assets/path/purple_Tooltip.png`)" max-width="95px" v-if="purple1"/>
    <v-img class="flag" id="pink_t1" :src="require(`@/assets/path/pink_Tooltip.png`)" max-width="95px" v-if="pink1"/>
    <v-img class="flag" id="green_t1" :src="require(`@/assets/path/green_Tooltip.png`)" max-width="95px" v-if="green1"/>
    <v-img class="flag" id="orange_t1" :src="require(`@/assets/path/orange_Tooltip.png`)" max-width="95px" v-if="orange1"/>
  </div>
</template>

<script>
export default {
    data() {
    return {
      blue:false,
      purple:false,
      pink:false,
      green:false,
      orange:false,
      blue1:false,
      purple1:false,
      pink1:false,
      green1:false,
      orange1:false,
    };
  }
}
</script>

<style scoped>
.flag{
  position:absolute
}
#flag1{
  left:62px;
  top:170px;
}
#flag2{
  right:-56px;
  top:345px;
}
#flag3{
  left:62px;
  top:520px;
}
#flag4{
  right:-56px;
  top:675px;
}
#flag5{
  left:62px;
  top:850px;
}
#flag6{
  right:-56px;
  top:1005px;
}
#flag7{
  left:62px;
  top:1180px;
}
#orange{
  left:450px;
  top:0px;
}
#orange_t{
  left:425px;
  top:50px;
}
#blue{
  left:650px;
  top:160px;
}
#blue_t{
  left:625px;
  top:110px;
}
#purple{
  right:350px;
  top:330px;
}
#purple_t{
  right:325px;
  top:280px;
}
#pink{
  left:350px;
  top:330px;
}
#pink_t{
  left:325px;
  top:280px;
}
#green{
  left:550px;
  top:500px;
}
#green_t{
  left:525px;
  top:450px;
}
#orange1{
  left:250px;
  top:665px;
}
#orange_t1{
  left:225px;
  top:615px;
}
#blue1{
  left:850px;
  top:665px;
}
#blue_t1{
  left:825px;
  top:615px;
}
#purple1{
  right:350px;
  top:830px;
}
#purple_t1{
  right:325px;
  top:780px;
}
#pink1{
  left:250px;
  top:995px;
}
#pink_t1{
  left:225px;
  top:945px;
}
#green1{
  left:850px;
  top:1165px;
}
#green_t1{
  left:825px;
  top:1115px;
}
</style>