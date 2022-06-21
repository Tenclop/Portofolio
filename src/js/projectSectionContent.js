const projectContent = {
  section: () => {
    const container = document.querySelector(".projects--container");
    const containerContent = `          <h1>
            <span>&lth1&gt</span>
            <span class="numbers">02.</span>Projects
            <span>&lt/h1&gt</span>
          </h1>

          <svg
            class="projects--container--underline"
            width="258"
            height="30"
            viewBox="0 0 558 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M333.946 24.664C259.686 25.6231 185.389 29.4278 111.453 36.2287C76.301 39.4627 35.4794 39.0584 1.38664 50.0841C-0.312118 50.6389 0.0114043 52.3035 0.0481739 52.47C0.121713 52.8108 0.430657 53.9442 1.78378 53.9997C1.93086 54.0076 2.96769 53.8491 3.3648 53.7936C13.4323 52.3669 23.4631 50.7024 33.538 49.3549C68.322 44.6863 103.209 41.159 138.147 38.0677C184.521 33.9618 231.292 31.774 277.791 30.0619C303.243 29.1266 329.305 30.371 354.838 28.437C364.214 28.3815 373.591 28.3737 382.967 28.4054C422.163 28.556 461.315 30.1571 500.446 32.3528C513.028 33.0582 522.625 33.8192 534.943 34.3344C539.62 34.5325 547.04 34.6673 552.202 34.7545C552.96 34.7703 554.894 34.786 555.696 34.794C555.776 34.8098 555.857 34.8098 555.946 34.8098C556.255 34.8098 556.402 34.786 556.431 34.786C558.181 34.5086 558.02 32.7252 557.975 32.4557C557.968 32.4002 557.703 30.8942 556.196 30.8387C555.835 30.8228 553.254 30.8071 552.261 30.7913C547.128 30.7041 539.738 30.5693 535.083 30.3791C522.787 29.8639 513.197 29.1029 500.637 28.3975C461.448 26.2019 422.237 24.5928 382.982 24.4422C378.187 24.4263 373.385 24.4184 368.59 24.4263C368.428 23.9745 368.068 23.4672 367.274 23.2453C366.531 23.0392 361.214 22.8569 359.162 22.6746C343.976 21.3271 344.425 21.3905 327.717 20.2887C302.412 18.6163 298.558 18.2356 272.239 17.5302C224.431 16.2461 176.601 16.3493 128.786 16.4761C105.18 16.5474 79.9044 18.2674 55.938 15.0572C63.8361 14.0585 71.7636 13.3293 79.6764 12.497C106.695 9.65933 133.735 7.89958 160.864 6.66305C225.939 3.69857 291.116 2.51762 356.169 6.5601C342.322 6.70278 328.482 7.03559 314.634 7.2496C258.266 8.13736 201.354 7.47161 145.104 12.0769C144.097 12.1641 143.339 13.1152 143.413 14.2011C143.486 15.295 144.376 16.1114 145.384 16.0322C201.56 11.4269 258.391 12.1006 314.686 11.2128C335.6 10.8878 356.507 10.3013 377.422 10.4757C384.599 10.5391 391.777 10.8245 398.954 10.9196C400.374 10.9434 404.029 11.2446 404.551 11.1178C405.705 10.8404 405.955 9.92085 406.029 9.46904C406.065 9.19955 406.183 7.64596 404.418 7.09111C392.372 3.30228 370.142 3.47666 358.434 2.73157C292.58 -1.46944 226.593 -0.296356 160.709 2.69984C133.515 3.94429 106.408 5.71199 79.3161 8.55758C69.8516 9.54839 60.3651 10.4044 50.9374 11.7202C49.4151 11.9342 45.9955 12.2434 44.3409 12.5684C43.6496 12.7032 43.1495 12.8933 42.9289 13.028C42.0685 13.5512 41.9141 14.3121 41.9141 14.8273C41.9067 15.2236 42.0612 16.6187 43.8629 16.9992C71.3151 22.7934 101.187 20.5186 128.793 20.4393C176.579 20.3125 224.372 20.2093 272.151 21.4934C298.404 22.1988 302.243 22.5716 327.496 24.244C329.989 24.4026 332.1 24.5451 333.946 24.664Z"
              fill="#19E7C8"
            />
          </svg>
          <div class="projects--container--showcase">
            <div class="projects--container--showcase__project">
              <div class="projects--container--showcase__project-img">
                <a href="https://dice-game-sihlanic.netlify.app/" >
                  <div
                    class="projects--container--showcase__project-img gallery__content-1"
                  >
                    <div
                      class="projects--container--showcase__project-img-text"
                    >
                      <h1>
                        <span>&lth3&gt</span>
                        <span class="numbers">Dice Game</span>
                        <span>&lt/h3&gt</span>
                      </h1>

                      <p>
                        <span>&ltp&gt</span>As the name sais, it’s a dice game!
                        I made this to practice DOM manipulation and it ended
                        being something fun. <span>&lt/p&gt</span>
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <!-- Dice proj -->
              <div class="projects--container--showcase__project-text">
                <div class="projects--container--showcase__project-text_about">
                  <h1>
                    <span>&lth3&gt</span>
                    <span class="numbers">Dice Game</span>
                    <span>&lt/h3&gt</span>
                  </h1>

                  <p>
                    <span>&ltp&gt</span>As the name sais, it’s a dice game! I
                    made this to practice DOM manipulation and it ended being
                    something fun. <span>&lt/p&gt</span>
                  </p>
                </div>
                <div
                  class="projects--container--showcase__project-text-info info"
                >
                  <div class="info--text">
                    <h1>HTML CSS JS</h1>
                  </div>

                  <div class="info--icons">
                    <a href="https://github.com/Tenclop/DiceGame" target="_blank" rel="noopener noreferrer">
                      <i class="fa-brands fa-github"></i>
                    </a>

                    <a href="https://dice-game-sihlanic.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <i class="fa-solid fa-arrow-up-right-from-square"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Bucovina proj -->
            <div class="projects--container--showcase__project">
              <div class="projects--container--showcase__project-img">
                <a href="https://bukovina.netlify.app/" >
                  <div
                    class="projects--container--showcase__project-img gallery__content-2"
                  >
                    <div
                      class="projects--container--showcase__project-img-text"
                    >
                      <h1>
                        <span>&lth1&gt</span>
                        <span class="numbers">Bukovina</span>
                        <span>&lt/h1&gt</span>
                      </h1>

                      <p>
                        <span>&ltp&gt</span>Bukovina it’s a brochure website
                        about mountain tourism. This project represents my first
                        time when i worked with npm and webpack. Understanding
                        how to use webpack third-party packages was a little
                        challenge.
                        <span>&lt/p&gt</span>
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="projects--container--showcase__project-text">
                <div class="projects--container--showcase__project-text_about">
                  <h1>
                    <span>&lth1&gt</span>
                    <span class="numbers">Bukovina</span>
                    <span>&lt/h1&gt</span>
                  </h1>

                  <p>
                    <span>&ltp&gt</span>Bukovina it’s a brochure website about
                    mountain tourism. This project represents my first time when
                    i worked with npm and webpack. Understanding how to use
                    webpack third-party packages was a little challenge.
                    <span>&lt/p&gt</span>
                  </p>
                </div>

                <div
                  class="projects--container--showcase__project-text-info info"
                >
                  <div class="info--text">
                    <h1>HTML CSS JS Webpack Sass NPM</h1>
                  </div>

                  <div class="info--icons">
                    <a href="https://github.com/Tenclop/Bucovina-Remake" target="_blank" rel="noopener noreferrer">
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="https://bukovina.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <i class="fa-solid fa-arrow-up-right-from-square"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Northpack proj -->
            <div class="projects--container--showcase__project">
              <div class="projects--container--showcase__project-img">
                <a href="https://northpack.netlify.app/" >
                  <div
                    class="projects--container--showcase__project-img gallery__content-3"
                  >
                    <div
                      class="projects--container--showcase__project-img-text"
                    >
                      <h1>
                        <span>&lth1&gt</span>
                        <span class="numbers">Northpack</span>
                        <span>&lt/h1&gt</span>
                      </h1>

                      <p>
                        <span>&ltp&gt</span>Northpack, it’s an eCommerce
                        website, the products that are promoted are backpacks. I
                        can say that I had fun learning how to use local
                        storage. The hardest part was making the payment method
                        via Stripe and Express.
                        <span>&lt/p&gt</span>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="projects--container--showcase__project-text">
                <div class="projects--container--showcase__project-text_about">
                  <h1>
                    <span>&lth1&gt</span>
                    <span class="numbers">Northpack</span>
                    <span>&lt/h1&gt</span>
                  </h1>

                  <p>
                    <span>&ltp&gt</span>Northpack, it’s an eCommerce website,
                    the products that are promoted are backpacks. I can say that
                    I had fun learning how to use local storage. The hardest
                    part was making the payment method via Stripe and Express.
                    <span>&lt/p&gt</span>
                    <!-- The payment
                  method doesn't work in this demo because I couldn't figure it
                  out the reason why netlify functions aren't working, but if
                  you clone my project it will work perfectly. -->
                  </p>
                </div>

                <div
                  class="projects--container--showcase__project-text-info info"
                >
                  <div class="info--text">
                    <h1>HTML CSS JS Webpack Sass NPM Node.js Express</h1>
                  </div>

                  <div class="info--icons">
                    <a href="https://github.com/Tenclop/Northpack" target="_blank" rel="noopener noreferrer">
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="https://northpack.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <i class="fa-solid fa-arrow-up-right-from-square"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
    container.innerHTML += containerContent;
  },
};

export default projectContent;
