<template>
  <div>
    <v-row class="ma-2">
      <v-icon large>mdi-flash</v-icon>
      <h1 class="font-weight-bold white--text">Electronics</h1>
    </v-row>
    <v-row height="30px">
      <v-col cols="3" v-for="course in electronicsCourseList" :key="course.title">
        <courseModal :courseTitle="course.title" :imageName="course.image" :instructorList="course.instructors" :isheadlight="false"/>
      </v-col>
      <v-col cols="3">
        <courseModal courseTitle="Car Battery spot welder" imageName="spotwelder" :instructorList='["A", "B", "C", "D"]' :isheadlight="true"/>
      </v-col>
    </v-row>
    <v-row class="ma-0 ml-2">
      <v-icon large>mdi-cog</v-icon>
      <h1 class="font-weight-bold white--text">Hardware</h1>
    </v-row>
    <v-row height="30px">
      <v-col cols="3" v-for="course in hardwareCourseList" :key="course.title">
        <courseModal :courseTitle="course.title" :imageName="course.image" :instructorList="course.instructors" :isheadlight="false"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import courseModal from '.././components/courseModal';
export default {
  name: 'App',
  components: {
    courseModal,
  },
  data: () => ({
    electronicsCourseList: [
              {title: "Breadboard PC", image: "computer", instructors:["A", "B", "C", "D"]},
      ],
    hardwareCourseList:[
      {title: "Homemade forge", image:"forging", instructors:["A", "B", "C", "D"]},
      {title: "DIY toolbox", image:"toolbox", instructors:["A", "B", "C", "D"]}
    ]
  }),
};
</script>