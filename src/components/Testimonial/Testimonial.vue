<template>
  <div class="testimonial">
    <div class="container">
      <img
        class="dotted d-none d-lg-block"
        src="../../assets/images/dotted.png"
        alt="dotted"
      />
      <p class="text-center mb-0 heading">
        عملائنا التي نفخر بهم
      </p>
      <div class="row">
        <div class="col-lg-3 col-md-6 mt-4 p-0 testimonial-container">
          <div
            class="test mt-3 text-center d-flex flex-column justify-content-center align-content-center align-items-center "
          >
            <div
              class="img-container d-flex justify-content-center align-items-center"
            >
              <img src="../../assets/images/person.png" alt="person" />
            </div>
            <p class="mt-3 mb-0 font-weight-bold">
              28
            </p>
            <p>
              عميل حالى
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mt-4 p-0 testimonial-container">
          <div
            class="test mt-3 text-center d-flex flex-column justify-content-center align-content-center align-items-center "
          >
            <div
              class="img-container d-flex justify-content-center align-items-center"
            >
              <img src="../../assets/images/pc2.png" alt="pc" />
            </div>

            <p class="mt-3 mb-0 font-weight-bold">
              35
            </p>

            <p>
              تطبيق تم تسليمهم
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mt-4 p-0 testimonial-container">
          <div
            class="test mt-3 text-center d-flex flex-column justify-content-center align-content-center align-items-center "
          >
            <div
              class="img-container d-flex justify-content-center align-items-center"
            >
              <img src="../../assets/images/bag.png" alt="bag" />
            </div>
            <p class="mt-3 mb-0 font-weight-bold">
              1550
            </p>
            <p>
              مباع يوميا
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 mt-4 p-0 testimonial-container">
          <div
            class="test mt-3 text-center d-flex flex-column justify-content-center align-content-center align-items-center "
          >
            <div
              class="img-container d-flex justify-content-center align-items-center"
            >
              <img src="../../assets/images/message.png" alt="message" />
            </div>
            <p class="mt-3 mb-0 font-weight-bold">
              2600
            </p>

            <p>
              تعليق يكتب يوميا
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonial",
};
</script>
<style lang="scss">
@import "@/scss/components/testimonial.scss";
</style>
