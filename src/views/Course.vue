<template>
  <div class="about">
    <h1 class="white--text">{{$route.params.course}}</h1>
    <!--<span>{{onCircles}}, {{circles}}</span>-->
    <div style="max-width: calc(100vw);max-height:100vh;overflow: scroll;">
      <canvas id="c" width="1380px" height="3000px" @mousemove="showCoordinates"></canvas>
    </div>
    <v-img :src="require(`@/assets/path/flag.png`)" max-width="120px" id="flag"/>
    <!--<div v-for="n in [...Array(onCircles.length).keys()]" :key="n">
      <v-tooltip content-class="tooltip" left :v-model="onCircles[n]">
        <div>Spotwelder{{n}}</div>
      </v-tooltip>
    </div>-->
    
  </div>
</template>

<script>
export default {
  mounted() {
      var c = document.getElementById("c");
      var ctx = c.getContext("2d");    
      this.vueCanvas = ctx;
      ctx.setLineDash([10,10]);
      ctx.strokeStyle = "white";
      ctx.lineWidth = 1;
      let start = {x:0, y:20}
      //let circles = 0
      let num_paths = Math.floor(this.modules.length/3)
      if (this.modules.length%3!=0) num_paths = num_paths + 1
      /*for (const module of this.modules) {
        console.log(module, num_paths)
      }*/
      for (let i =0 ;i<num_paths;i++){
        ctx.setLineDash([10,10]);
        ctx.strokeStyle = "white";
        if(i==0){
          start = this.drawLineandCurve(start, ctx, true, 1050)
          
        }
        else if (i==1){
          start = this.drawLineandCurve(start, ctx, false, 840)
        }
        else if (i==num_paths-1){
          start = this.drawLine(start, ctx, i%2==0, 1200)
        }
        else{
          start = this.drawLineandCurve(start, ctx, i%2==0, 1045)
        }
      }
      for (let i=0;i<this.modules.length;i++){
        if (this.modules[i].color != "#ff0000"){
          ctx.fillStyle = this.modules[i].color;
          ctx.strokeStyle = this.modules[i].color;
          ctx.beginPath()
          ctx.setLineDash([])
          const circle1 = new Path2D();
          console.log(this.modules[i])
          if (i%3==0) {
            circle1.arc(start.x-950, 20+(Math.floor(i/3))*166, 20, 0, 2 * Math.PI);
          }
          else if (i%3==1){
            circle1.arc(start.x-350, 20+(Math.floor(i/3))*166, 20, 0, 2 * Math.PI);
          }
          else {
            if (Math.floor(i/3) % 2 == 0){
              if (i==2) circle1.arc(start.x-250, 20+(Math.floor(i/3))*166 + 83, 20, 0, 2 * Math.PI);
              else circle1.arc(start.x-50, 20+(Math.floor(i/3))*166 + 83, 20, 0, 2 * Math.PI);
            }
            else{
              circle1.arc(start.x-1300, 20+(Math.floor(i/3))*166 + 83, 20, 0, 2 * Math.PI);
            }
          }
          ctx.stroke(circle1);
          ctx.fill(circle1)
          ctx.closePath()
          this.circles[i] = circle1
        }
        /*
        else{
          //if its a flag
        }
        */
      }
      /*
      start = this.drawLineandCurve(start, ctx, true, 1050)
      
      start = this.drawLineandCurve(start, ctx, false, 840)
      start = this.drawLineandCurve(start, ctx, true, 1045)
      start = this.drawLineandCurve(start, ctx, false, 1045)
      start = this.drawLineandCurve(start, ctx, true, 1045)
      start = this.drawLineandCurve(start, ctx, false, 1045)
      start = this.drawLineandCurve(start, ctx, true, 1045)
      start = this.drawLineandCurve(start, ctx, false, 1045)
      start = this.drawLineandCurve(start, ctx, true, 1045)
      start = this.drawLineandCurve(start, ctx, false, 1045)
      start = this.drawLineandCurve(start, ctx, true, 1045)
      start = this.drawLineandCurve(start, ctx, false, 1045)
      start = this.drawLineandCurve(start, ctx, true, 1045)
      start = this.drawLineandCurve(start, ctx, false, 1045)
      start = this.drawLineandCurve(start, ctx, true, 1045)
      start = this.drawLineandCurve(start, ctx, false, 1045)
      start = this.drawLineandCurve(start, ctx, true, 1045)
      start = this.drawLineandCurve(start, ctx, false, 1045)
      start = this.drawLineandCurve(start, ctx, true, 1045)
      */
      this.ctx = ctx
      /*const props = [{color: '#C18D5C', x:-850,y:0}, {color: '#5C8BC1', x:-250,y:0}, {color: '#7C5CC1', x:-250,y:2}, {color: '#C15C5C', x:-750,y:2}, {color: '#A7C15C', x:-550,y:3},{color: '#C18D5C', x:-250,y:4}]
      
      
      for (let i=0; i<props.length;i++){
        ctx.fillStyle = props[i].color;
        ctx.strokeStyle = props[i].color;
        ctx.beginPath()
        ctx.setLineDash([])
        const circle1 = new Path2D();
        circle1.arc(start.x+props[i].x, 20+props[i].y*166, 20, 0, 2 * Math.PI);
        ctx.stroke(circle1);
        ctx.fill(circle1)
        ctx.closePath()
        this.circles[i] = circle1
      }*/

      /*ctx.fillStyle = "#5C8BC1";
      ctx.strokeStyle ="#5C8BC1";
      ctx.beginPath()
      ctx.setLineDash([])
      const circle2 = new Path2D();
      circle2.arc(start.x-1050, start.y-(166*18), 20, 0, 2 * Math.PI);
      ctx.stroke(circle2);
      ctx.fill(circle2)
      ctx.closePath()
      this.circles[1] = circle2*/
      this.drawImage()

      
  },
  methods:{
    drawCurve(start, ctx, isRight){
      const end = {x:start.x, y:start.y+166}
      const mid = {x: isRight ? start.x+106 : start.x-106, y:(start.y+end.y)/2} 
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.bezierCurveTo(isRight ? start.x-11 : start.x+11, start.y+1, isRight ? start.x+94 : start.x-94, start.y-12, mid.x, mid.y);
      ctx.bezierCurveTo(mid.x, mid.y, mid.x+7, mid.y+87, end.x, end.y);
      ctx.stroke();
      ctx.closePath();
    },
    drawLineandCurve(start, ctx, isRight, lineLength){
      ctx.beginPath();
      ctx.moveTo(start.x,start.y)
      ctx.lineTo(isRight ? start.x+lineLength : start.x-lineLength,start.y)
      ctx.stroke()
      start.x = isRight ? start.x+lineLength : start.x-lineLength
      this.drawCurve(start, ctx, isRight)
      ctx.closePath();
      return {x:start.x, y:start.y+166}
    },
    drawLine(start, ctx, isRight, lineLength){
      ctx.beginPath();
      ctx.moveTo(start.x,start.y)
      ctx.lineTo(isRight ? start.x+lineLength : start.x-lineLength,start.y)
      ctx.stroke()
      start.x = isRight ? start.x+lineLength : start.x-lineLength
      ctx.closePath();
      return {x:start.x, y:start.y+166}
    },
    showCoordinates(e) {
      this.mouseX = e.offsetX;
      this.mouseY = e.offsetY;
      this.onCircles = []
      for (let i=0; i<this.circles.length;i++){
        this.onCircles.push(this.ctx.isPointInPath(this.circles[i], this.mouseX, this.mouseY))
      }
    },
    drawImage(){
      this.img = new Image();
      this.img.src = '../src/assets/path/flag.png'
      console.log('this.img.src:', this.img.src);
      this.img.onload = () => {
        console.log('this.ctx:', this.ctx);
        this.ctx.drawImage(this.img, 100,100);
      }
    }
  },
  data:()=>({
    mouseX:100,
    mouseY:100,
    onCircle1: false,
    onCircle2: false,
    onCircles:[],
    ctx:null,
    circles:[],

    //make props
    //if color code if ff0000, its a flag
    modules: [
      {isFlag: false, name: 'Spotwelder', color: '#C18D5C'},
      {isFlag: false, name: 'Spotwelder', color: '#5C8BC1'},
      {isFlag: true, name: 'Spotwelder', color: '#ff1000'},
      {isFlag: false, name: 'Spotwelder', color: '#C15C5C'},
      {isFlag: false, name: 'Spotwelder', color: '#7C5CC1'},
      {isFlag: false, name: 'Spotwelder', color: '#A7C15C'},
      {isFlag: true, name: 'Spotwelder', color: '#ff1000'},
      {isFlag: false, name: 'Spotwelder', color: '#C18D5C'},
      {isFlag: false, name: 'Spotwelder', color: '#5C8BC1'},
      {isFlag: true, name: 'Spotwelder', color: '#ff1000'},
      {isFlag: false, name: 'Spotwelder', color: '#C15C5C'},
      {isFlag: false, name: 'Spotwelder', color: '#7C5CC1'},
      {isFlag: false, name: 'Spotwelder', color: '#A7C15C'},
      {isFlag: true, name: 'Spotwelder', color: '#ff1000'},
      {isFlag: false, name: 'Spotwelder', color: '#C18D5C'},
      {isFlag: false, name: 'Spotwelder', color: '#5C8BC1'},
      {isFlag: true, name: 'Spotwelder', color: '#ff1000'},
      {isFlag: false, name: 'Spotwelder', color: '#C15C5C'},
      {isFlag: false, name: 'Spotwelder', color: '#7C5CC1'},
      {isFlag: false, name: 'Spotwelder', color: '#A7C15C'},
      {isFlag: true, name: 'Spotwelder', color: '#ff1000'},
      {isFlag: false, name: 'Spotwelder', color: '#C18D5C'},
      {isFlag: false, name: 'Spotwelder', color: '#5C8BC1'},
      {isFlag: true, name: 'Spotwelder', color: '#ff1000'},
      {isFlag: false, name: 'Spotwelder', color: '#C15C5C'},
      {isFlag: false, name: 'Spotwelder', color: '#7C5CC1'},
      {isFlag: false, name: 'Spotwelder', color: '#A7C15C'},
      {isFlag: false, name: 'Spotwelder', color: '#7C5CC1'},
      {isFlag: false, name: 'Spotwelder', color: '#A7C15C'},
      {isFlag: false, name: 'Spotwelder', color: '#7C5CC1'},
      {isFlag: false, name: 'Spotwelder', color: '#A7C15C'},
      {isFlag: false, name: 'Spotwelder', color: '#7C5CC1'},
    ]
  })
}
</script>

<style scoped>
.tooltip{
  border-radius:100px !important;
}
#c{
  width: 100%;
}
</style>
