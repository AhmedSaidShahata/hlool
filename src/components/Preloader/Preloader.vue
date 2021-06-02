<template>

 <div v-if="showPreloader" class="preloader" ref="preloader">
      <div class="bar bar1"></div>
      <div class="bar bar2"></div>
      <div class="bar bar3"></div>
      <div class="bar bar4"></div>
      <div class="bar bar5"></div>
      <div class="bar bar6"></div>
      <div class="bar bar7"></div>
      <div class="bar bar8"></div>
    </div>
  
</template>
<script>
export default {
  name: "Preloader",
    mounted() {

    this.hidePreloder();
  },
  data: () => {
    return {
      showPreloader: true,
    };
  },
  methods: {
    hidePreloder() {
      let preloader = this.$refs.preloader;
      let opacityValue = 1;
      let opacityPrloader;
      window.onload = ()=>{
            opacityPrloader = setInterval(() => {
            preloader.style.opacity = opacityValue;
            opacityValue -= 0.04;
          }, 50);      
            setTimeout(() => {
              this.showPreloader = false;
              clearTimeout(opacityPrloader);
          }, 1000);
      }
 
    },
   
  },
};
</script>

<style lang="scss">
@import "@/scss/components/preloader.scss";
</style>


