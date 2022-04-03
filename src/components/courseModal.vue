<template>
  <v-dialog
    transition="dialog-bottom-transition"
    max-width="900" content-class="modal"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-card color="transparent" class="card ma-3 pa-0" v-bind="attrs" v-on="on">
          <v-row justify="center">
            <v-img :alt="imageName" :src="require(`@/assets/cardPrev/${imageName}.png`)" max-width="300" :class='!isheadlight ? "mt-12 mb-3" : "mt-5 mx-n5 mb-n11"'/>
          </v-row>
        <v-card-actions class="justify-center mb-7">
            <v-btn
              color="accent"
              style="font-family:Space Mono" class="text-capitalize font-weight-bold" 
            >{{courseTitle}}</v-btn>
        </v-card-actions>
        <!--<img :alt="imageName" :src="require(`@/assets/cardPrev/${imageName}.png`)" id="previewImage">-->
      </v-card>
    </template>
    <template>
      <v-card color="primary">
        <v-card-text>
          <v-row>
            <v-col cols="5" class="justify-center" align="center">
              <div @click.stop="showFieldBreakupModal=true">
                <vc-donut
                v-bind="props" class="justify-start ma-4">
                  <v-img :alt="imageName" :src="require(`@/assets/cardPrev/${imageName}.png`)" max-width="200" style="outline:black"/>
                </vc-donut>
              </div>
              <fieldBreakupModal v-model="showFieldBreakupModal"/>
              <v-btn color="#B8B3D6" style="font-family:Montserrat" class="text-capitalize font-weight-bold pa-5 ma-4 black--text" @click.native="$router.push('/course/'+courseTitle)">Enroll</v-btn>
            </v-col>
            <v-col cols="7">
              <v-row>
                <v-spacer></v-spacer>
                <div class="info px-1 ma-7 mt-16" style="width:310px;border-radius:2px">
                  <h2 class="black--text pa-2 text-capitalize" style="text-align:right; font-family:Space Mono">{{courseTitle}}</h2>
                </div>
              </v-row>
              <v-row>
                <h2 class="text-heading1 font-weight-regular">Over 12 modules, you’ll explore the field of electronics by learning and building your own logic gates, circuits, and eventually building your own breadboard computer from scratch</h2>
              </v-row>
              <v-row class="justify-end mt-16 mr-6">
                <h2 style="font-family:Space Mono">INSTRUCTORS</h2>
              </v-row>
              <v-row class="justify-end ml-16 pr-6">
                <v-col v-for="instructor in instructorList" :key="instructor" cols="2">
                  <v-img :src="require(`@/assets/instructors/${instructor}.png`)" max-width="50" style="border-radius:100px" class="ma-0 pa-0"/>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
        <!--<v-card-actions>
          <v-btn color="accent" style="font-family:Montserrat" class="text-capitalize font-weight-bold pa-5 ml-16">Enroll</v-btn>
        </v-card-actions>-->
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import fieldBreakupModal from './fieldBreakupModal.vue';
export default {
  components:{
    fieldBreakupModal
  },
    methods: {
      close() {
        this.$emit('close');
      }
    },
    props:{
      courseTitle:String,
      imageName:String,
      instructorList:String,
      isheadlight:Boolean,
    },
    created(){
      console.log(this.instructorList)
    },
    data: () => ({
      props: {
        size: 250,
        foreground: '#fcf3ee',
        background: '#F0DDD1',
        sections: [
          { value: 70 , color:'#958FB4'},
        ],
        thickness: 20, // set this to 100 to render it as a pie chart instead
        hasLegend: false,
      },
      showFieldBreakupModal: false
    })
}
</script>

<style>
#previewImage{
    height:200px;
}
.modal {
  box-shadow: 0px 0px 35px #4D7EA8 !important;
  border-radius:100px !important;
}
.card{
    border: 1px solid #4d7ea8 !important;
    border-radius: 50px !important;
    box-shadow: 2px 2px 7px #4d7ea8 !important;
}
</style>