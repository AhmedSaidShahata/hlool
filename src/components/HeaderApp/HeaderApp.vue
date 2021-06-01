<template>
  <div class="header-app">
    <nav class="navbar py-4 navbar-expand ">
      <div class="container">
        <div
          class="d-flex px-5  w-100 justify-content-between align-content-center align-items-center"
        >
          <div class="ml-5 mr-4">
            <img class="logo" src="../../assets/images/logo.png" alt="logo" />
          </div>
          <div>
            <p class="font-weight-bold">
              <a href="#">
                الرئيسية
              </a>
            </p>
          </div>
          <div class="">
            <ul class="parent">
              <li class="font-weight-bold parent-li">
                <a href=""> التطبيقات</a>
                <div class="child">
                  <div class="square"></div>
                  <ul>
                    <li class="mb-3">
                      تطبيق حلول
                    </li>
                    <li>
                      حلول مود
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="">
            <p class="font-weight-bold">
              <a href="#">
                المدونة
              </a>
            </p>
          </div>
          <div class="">
            <p class="font-weight-bold">
              <a href="#">
                تجربة المنصة
              </a>
            </p>
          </div>
          <div class="">
            <p class="font-weight-bold">
              <a href="#">
                اتصل بنا
              </a>
            </p>
          </div>
          <div class="">
            <p class="font-weight-bold">
              <a href="#">
                دخول
              </a>
            </p>
          </div>
          <div class="">
            <button class="btn start">
              ابدأ الأن
            </button>
          </div>
          <div class="">
            <p class="font-weight-bold mb-0 lang-text">
              EN
            </p>
          </div>
        </div>
      </div>
    </nav>
    <div class="nav-mobile-container">
      <img
        class="logo logo-mobile"
        src="../../assets/images/logo.png"
        alt="logo"
      />

      <input id="burger" type="checkbox" />

      <label for="burger">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <div class="mobile-nav">
        <ul>
          <li>
            <a href="#">
              الرئيسية
            </a>
          </li>
          <li>
            <a href="#">
              التطبيقات
            </a>
          </li>
          <li>
            <a href="#">
              المدونة
            </a>
          </li>
          <li>
            <a href="#">
              تجربة المنصة
            </a>
          </li>
          <li>
            <a href="#">
              اتصل بنا
            </a>
          </li>

          <li>
            <a href="#">
              ابدأ الأن
            </a>
          </li>

          <li>
            <a href="#">
              En
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/components/header-app.scss";
</style>
