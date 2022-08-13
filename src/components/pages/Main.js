import React from 'react'

export const Main = () => {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="wrap-div">
              <img src="./img/test.jpg" alt="" class="img-fluid" />
              <p class="title-course">Терапия</p>
              <p class="detail-course-description-text secondary-text-color">
                Любая ваша психологическая проблема может быть решена при помощи
                гипноза !
              </p>
              <a class="button-more button-default accent-color" href="/">
                Подробнее
              </a>
            </div>
          </div>
          <div class="col">
            <div class="wrap-div">
              <img src="./img/test2.jpg" alt="" class="img-fluid" />
              <p class="title-course">Обучение</p>
              <p class="detail-course-description-text secondary-text-color">
                Онлайн курсы и обучение один на один. Любой ваш запрос на
                обучение может быть решен !
              </p>
              <a class="button-more button-default accent-color" href="/">
                Подробнее
              </a>
            </div>
          </div>
          <div class="col">
            <div class="wrap-div">
              <img src="./img/test3.jpg" alt="" class="img-fluid" />
              <p class="title-course">Эстрада</p>
              <p class="detail-course-description-text secondary-text-color">
                Веселое и незабываемое выступление на вашем празднике !
              </p>
              <a class="button-more button-default accent-color" href="/">
                Подробнее
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
