<template>
  <div class="manage">
    <div class="container">
      <div class="row">
        <div
          class="col-md-6 d-flex flex-column justify-content-center align-content-center align-items-center "
        >
          <img class="manage-img" src="../../assets/images/manage.png" />
        </div>
        <div
          class="col-md-6 d-flex flex-column justify-content-center align-content-center align-items-center "
        >
          <div class="right">
            <p class="mb-0 font-weight-bolder">
              إدارة متجرك بالكامل بسهولة
            </p>
            <p class=" font-weight-bolder">
              مع لوحة تحكم مميزة يتم تخصيصها لمتجرك
            </p>

            <div class="container">
              <div class="accordion">
                <ul class="list-unstyled">
                  <li class="open">
                    <div class="question mt-4" ref="question">
                      <div
                        class="d-flex justify-content-between  align-items-center align-content-center w-100"
                      >
                        <div
                          class="d-flex  justify-content-center align-items-center align-content-center"
                        >
                          <div>
                            <img src="../../assets/images/1.png" />
                          </div>
                          <h2 class="mx-3">إضافةالمنتجات</h2>
                        </div>
                        <div>
                          <p class="plus">+</p>
                          <p class="minus">_</p>
                        </div>
                      </div>
                    </div>
                    <div class="answer">
                      <p>
                        تستطيع إضافة منتجاتك بسهولة داخل متجرك و اضافة الصور,<br />
                        و الوصف و العنوان و الخيارات الخاصة بالمنتج و عرضه
                        بشكل<br />
                        واضح و بسيط بالإضافة إلى إمكانية التعديل على المنتج في
                        أي<br />
                        .وقت وتحديث بياناته بسهولة تامة <br />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="question mt-4" ref="question">
                      <div
                        class="d-flex justify-content-between  align-items-center align-content-center w-100"
                      >
                        <div
                          class="d-flex  justify-content-center align-items-center align-content-center"
                        >
                          <div>
                            <img src="../../assets/images/2.png" />
                          </div>
                          <h2 class="mx-3">إدارة الطلبات</h2>
                        </div>
                        <div>
                          <p class="plus">+</p>
                          <p class="minus">_</p>
                        </div>
                      </div>
                    </div>
                    <div class="answer">
                      <p>
                        تستطيع إضافة منتجاتك بسهولة داخل متجرك و اضافة الصور,<br />
                        و الوصف و العنوان و الخيارات الخاصة بالمنتج و عرضه
                        بشكل<br />
                        واضح و بسيط بالإضافة إلى إمكانية التعديل على المنتج في
                        أي<br />
                        .وقت وتحديث بياناته بسهولة تامة <br />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="question mt-4" ref="question">
                      <div
                        class="d-flex justify-content-between  align-items-center align-content-center w-100"
                      >
                        <div
                          class="d-flex  justify-content-center align-items-center align-content-center"
                        >
                          <div>
                            <img src="../../assets/images/4.png" />
                          </div>
                          <h2 class="mx-3">إدارة العملاء</h2>
                        </div>
                        <div>
                          <p class="plus">+</p>
                          <p class="minus">_</p>
                        </div>
                      </div>
                    </div>
                    <div class="answer">
                      <p>
                        تستطيع إضافة منتجاتك بسهولة داخل متجرك و اضافة الصور,<br />
                        و الوصف و العنوان و الخيارات الخاصة بالمنتج و عرضه
                        بشكل<br />
                        واضح و بسيط بالإضافة إلى إمكانية التعديل على المنتج في
                        أي<br />
                        .وقت وتحديث بياناته بسهولة تامة <br />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="question mt-4" ref="question">
                      <div
                        class="d-flex justify-content-between  align-items-center align-content-center w-100"
                      >
                        <div
                          class="d-flex  justify-content-center align-items-center align-content-center"
                        >
                          <div>
                            <img src="../../assets/images/3.png" />
                          </div>
                          <h2 class="mx-3">الإطلاع على التقارير</h2>
                        </div>
                        <div>
                          <p class="plus">+</p>
                          <p class="minus">_</p>
                        </div>
                      </div>
                    </div>
                    <div class="answer">
                      <p>
                        تستطيع إضافة منتجاتك بسهولة داخل متجرك و اضافة الصور,<br />
                        و الوصف و العنوان و الخيارات الخاصة بالمنتج و عرضه
                        بشكل<br />
                        واضح و بسيط بالإضافة إلى إمكانية التعديل على المنتج في
                        أي<br />
                        .وقت وتحديث بياناته بسهولة تامة <br />
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="more">
                <a href="#">
                  المزيد من مميزات لوحة التحكم
                  <i class="fas fa-chevron-left"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Manage",
  mounted() {
    this.toggleAccodrion();
  },

  methods: {
    toggleAccodrion() {
      const accordion = document.querySelector(".accordion");
      const items = accordion.querySelectorAll("li");
      const questions = accordion.querySelectorAll(".question");
      function toggle() {
        const thisItem = this.parentNode;
        items.forEach((item) => {
          if (thisItem == item) {
            thisItem.classList.toggle("open");
            return;
          }
          item.classList.remove("open");
        });
      }
      questions.forEach((question) =>
        question.addEventListener("click", toggle)
      );
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/components/manage.scss";
</style>