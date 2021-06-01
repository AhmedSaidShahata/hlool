<template>
  <div>
   <preloader />
    <header-app />
    <hello />
    <features />
    <describtion />
    <projects />
    <testimonial />
    <applications />
    <manage />
    <clients />
    <start />
    <app-footer />
  </div>
</template>

<script>
import Preloader from "../../components/Preloader/Preloader";
import HeaderApp from "../../components/HeaderApp/HeaderApp";
import Hello from "../../components/Hello/Hello";
import Features from "../../components/Features/Features";
import Describtion from "../../components/Describtion/Describtion";
import Projects from "../../components/Projects/Projects";
import Testimonial from "../../components/Testimonial/Testimonial";
import Applications from "../../components/Applications/Applications";
import Manage from "../../components/Manage/Manage";
import Clients from "../../components/Clients/Clients";
import Start from "../../components/Start/Start";
import AppFooter from "../../components/AppFooter/AppFooter";
export default {
  components: {
    Preloader,
    HeaderApp,
    Hello,
    Features,
    Describtion,
    Projects,
    Testimonial,
    Applications,
    Manage,
    Clients,
    Start,
    AppFooter
  },
};
</script>
