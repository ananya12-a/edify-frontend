<template>
<v-dialog v-model="show" max-width="900" content-class="modal">
  <!--make frame 9-->
  <v-card class="pa-4">
    <v-card-text>
      <v-row class="justify-center">
        <v-col cols="4" v-for="piechart in piecharts" :key="piechart">
          <vc-donut
          v-bind="piechart">
            <h4 class="white--text">{{piechart.sections[0].value}}%</h4>
            <h4 class="white--text">Computer Architecture</h4>
          </vc-donut>
        </v-col>
      </v-row>
    </v-card-text>
    <!--<v-card-actions>
      <v-btn color="primary" @click.stop="show=false">Close</v-btn>
    </v-card-actions>-->
  </v-card>
</v-dialog>
</template>

<script>
export default {
  props: {
     value: Boolean
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
         this.$emit('input', value)
      }
    }
  },
  data: () => ({
    piecharts:[
      {
        size: 250,
        foreground: '#F0DDD1',
        background: '#212121',
        sections: [
          { value: 50 , color:'#C15C5C'},
        ],
        thickness: 20, // set this to 100 to render it as a pie chart instead
        hasLegend: false,
      },
      {
        size: 250,
        foreground: '#F0DDD1',
        background: '#212121',
        sections: [
          { value: 5/8*100 , color:'#A7C15C'},
        ],
        thickness: 20, // set this to 100 to render it as a pie chart instead
        hasLegend: false,
      },
      {
        size: 250,
        foreground: '#F0DDD1',
        background: '#212121',
        sections: [
          { value: 25 , color:'#7C5CC1'},
        ],
        thickness: 20, // set this to 100 to render it as a pie chart instead
        hasLegend: false,
      },
      {
        size: 250,
        foreground: '#F0DDD1',
        background: '#212121',
        sections: [
          { value: 75 , color:'#5C8BC1'},
        ],
        thickness: 20, // set this to 100 to render it as a pie chart instead
        hasLegend: false,
      },
      {
        size: 250,
        foreground: '#F0DDD1',
        background: '#212121',
        sections: [
          { value: 7/8*100 , color:'#C18D5C'},
        ],
        thickness: 20, // set this to 100 to render it as a pie chart instead
        hasLegend: false,
      },
    ],
    })
}
</script>

<style scoped>
.modal {
  box-shadow: 0px 0px 35px #4D7EA8 !important;
  border-radius:100px !important;
}
</style>