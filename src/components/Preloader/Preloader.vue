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
    this.Preloader();
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
      setTimeout(() => {
        let opacityPrloader = setInterval(() => {
          preloader.style.opacity = opacityValue;
          opacityValue -= 0.04;
 
        }, 50);
        setTimeout(() => {
          clearTimeout(opacityPrloader);
          this.showPreloader = false;
        }, 1000);
      }, 3000);
    },
    Preloader() {
  
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/components/preloader.scss";
</style>


