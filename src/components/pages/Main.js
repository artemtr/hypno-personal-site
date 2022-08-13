import React from 'react'

export const Main = () => {
  return (
    <div>
      <div class="container">
        <div className="row">
          <div className="col-md-6">
            <div className="text-left">
              <p>Hey, my name is Tony Spark. I am a hypnotist.</p>
              <p>Welcome to my page. I am glad to fill your needs</p>
              <ul>
                <li>
                  <a href="http://">
                    <img src="./img/youtube.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="http://">
                    <img src="./img/instagram.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <img src="./img/main.jpg" alt="" class="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p id="help">What I can help you with ?</p>
          </div>
        </div>
      </div>
      <div className="container-fluid main-block">
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
