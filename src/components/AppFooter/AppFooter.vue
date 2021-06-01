<template>
  <footer>
    <div class="container">
      <div class="row ">
        <div class="col-md-4 mb-3">
          <h2 class="font-weight-bold mb-3">
            المقر الرئيسي
          </h2>
          <p class="mb-4">
            اﻟﺮﺻﯿﻔﺔ ﺣﻲ اﻟﺮﺻﯿﻔﺔ ﻣﻜﺔ اﻟﻤﻜﺮﻣﺔ
            <br />
            رﻗم اﻟوﺣدة : 1 اﻟﻣﻣﻠﻛﺔ 2869 - 24232 <br />
            اﻟﻌرﺑﯾﺔ اﻟﺳﻌودﯾﺔ
          </p>
          <div>
            <span class="social mx-1">
              <i class="fab fa-youtube"></i>
            </span>
            <span class="social mx-1">
              <i class="fab fa-instagram"></i>
            </span>
            <span class="social mx-1">
              <i class="fab fa-twitter"></i>
            </span>
            <span class="social mx-1">
              <i class="fab fa-facebook"></i>
            </span>
          </div>
        </div>
        <div class="col-md-3">
          <h2 class="font-weight-bold mb-3">
            القائمة الرئيسية
          </h2>
          <div class="row">
            <div class="col-md-5">
              <ul>
                <li>
                  <a href="#">الرئيسية</a>
                </li>
                <li>
                  <a href="#">التطبيقات</a>
                </li>
                <li>
                  <a href="#">المدونة</a>
                </li>
                <li>
                  <a href="#">تجربة المنصة</a>
                </li>
                <li>
                  <a href="#">اتصل بنا</a>
                </li>
                <li>
                  <a href="#">دخول</a>
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul>
                <li>
                  <a href="#">لوحة التحكم</a>
                </li>
                <li>
                  <a href="#">الملف الشخصى</a>
                </li>
                <li>
                  <a href="#">مركز الدعم</a>
                </li>
                <li>
                  <a href="#">أبدأ الأن</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <h2 class="font-weight-bold mb-3">
            اشترك الآن
          </h2>
          <p class="mb-4">
            اشترك الآن في القائمة البريدية الخصة بنا لتكون على اطلاع<br />
            دائم بأحدث العروض والأخبار الخاصة بالمنصة وتلقي خصم<br />
            .خاص بالمشتركين
          </p>
          <form action="">
            <input
              type="email"
              name="email"
              placeholder=" البريد الألكترونى..."
              id="email"
              class="form-control mb-4"
            />
            <button type="submit mt-3">
              اشترك الأن
            </button>
          </form>
        </div>
      </div>
    </div>
    <p class="text-center mt-5 py-4 footer-text mb-0 pt-4">
      جميع الحقوق محفوظة لـ منصة حلول للتجارة الإلكترونية © 2021
    </p>
  </footer>
</template>
<script>
export default {
  name: "AppFooter",
};
</script>

<style lang="scss">
@import "@/scss/components/footer.scss";
</style>
