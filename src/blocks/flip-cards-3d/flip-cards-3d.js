export default function flipCards3d() {
  return {
    label: '3D Flip Cards',
    media: `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve" width="30" height="30"><rect x="0" y="0" fill="none" width="30" height="30"/><g><path fill="none" d="M91.225,8.587h-0.178c0.063,0.07,0.121,0.143,0.177,0.217L91.225,8.587z"/></g><g><path d="M3.79,83.609h23.28c0.989,0,1.79-0.802,1.79-1.79V18.182c0-0.989-0.801-1.79-1.79-1.79H3.79c-0.989,0-1.79,0.802-1.79,1.79   v63.637C2,82.807,2.801,83.609,3.79,83.609z M8.741,23.132h13.38v53.736H8.741V23.132z"/><path d="M38.36,83.609h23.28c0.989,0,1.79-0.802,1.79-1.79V18.182c0-0.989-0.801-1.79-1.79-1.79H38.36   c-0.989,0-1.79,0.802-1.79,1.79v63.637C36.569,82.807,37.371,83.609,38.36,83.609z M43.31,23.132h13.38v53.736H43.31V23.132z"/><path d="M72.929,83.609h23.28c0.989,0,1.79-0.802,1.79-1.79V18.182c0-0.989-0.802-1.79-1.79-1.79h-23.28   c-0.989,0-1.79,0.802-1.79,1.79v63.637C71.139,82.807,71.941,83.609,72.929,83.609z M77.88,23.132h13.38v53.736H77.88V23.132z"/></g></svg>
    `,
    content: `
      <div class="block-flip-cards-3d" style="margin:100px; padding:25px;">
        <style>
        .block-flip-cards-3d {
          box-sizing: border-box;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          font-family: "Montserrat", sans-serif;
        }
        .block-flip-cards-3d * {
          box-sizing: border-box;
        }
        .block-flip-cards-3d .wrapper {
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
        }
        .block-flip-cards-3d .card {
          width: 420px;
          height: 340px;
          margin: 1em;
          perspective: 1500px;
        }
        .block-flip-cards-3d .card .content {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.75, 0, 0.85, 1);
        }
        .block-flip-cards-3d .more {
          display: none;
        }
        .block-flip-cards-3d .card.flipped .content {
          transform: rotateY(180deg);
        }
        .block-flip-cards-3d h2 {
          text-align: center;
        }
        .block-flip-cards-3d .front, .block-flip-cards-3d .back {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          transform-style: preserve-3d;
          border-radius: 6px;
        }
        .block-flip-cards-3d .front .inner, .block-flip-cards-3d .back .inner {
          height: 100%;
          display: grid;
          padding: 1.5em;
          transform: translateZ(80px) scale(0.94);
        }
        .block-flip-cards-3d .front {
          background-color: #fff;
          background-size: cover;
          background-position: center center;
        }
        .block-flip-cards-3d .front:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: block;
          border-radius: 6px;
          backface-visibility: hidden;
          background: linear-gradient(40deg, rgba(67, 138, 243, 0.7), rgba(255, 242, 166, 0.7));
        }
        .block-flip-cards-3d .front .inner {
          grid-template-rows: 5fr 1fr 1fr 2fr 1fr;
          justify-items: center;
        }
        .block-flip-cards-3d .front h2 {
          grid-row: 2;
          margin-bottom: 0.3em;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #fff;
          font-weight: 500;
          text-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
        }
        .block-flip-cards-3d .front .rating {
          grid-row: 3;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
        }
        .block-flip-cards-3d .front .rating i {
          margin: 0 1px;
        }
        .block-flip-cards-3d .back {
          transform: rotateY(180deg);
          background-color: #fff;
          border: 2px solid #f0f0f0;
        }
        .block-flip-cards-3d .back .inner {
          grid-template-rows: 1fr 2fr 1fr 2fr 14fr 1fr 1fr;
          grid-template-columns: repeat(4, auto);
          grid-column-gap: 0.8em;
          justify-items: center;
        }
        .block-flip-cards-3d .back .info {
          position: relative;
          display: flex;
          align-items: center;
          color: #355cc9;
          grid-row: 3;
        }
        .block-flip-cards-3d .back .info:not(:first-of-type):before {
          content: "";
          position: absolute;
          left: -0.9em;
          height: 18px;
          width: 1px;
          background-color: #ccc;
        }
        .block-flip-cards-3d .back .info span {
          font-size: 2em;
          font-weight: 700;
        }
        .block-flip-cards-3d .back .info i {
          font-size: 1.2em;
        }
        .block-flip-cards-3d .back .info .icon::before {
          background: linear-gradient(40deg, #355cc9, #438af3);
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }
        .block-flip-cards-3d .back .info .icon {
          margin-left: 0.3em;
        }
        .block-flip-cards-3d .back .info .icon span {
          display: block;
          font-size: 0.8em;
          font-weight: 600;
          white-space: nowrap;
        }
        .block-flip-cards-3d .back .description {
          grid-row: 5;
          grid-column: 1/-1;
          font-size: 0.86em;
          border-radius: 5px;
          font-weight: 600;
          line-height: 1.4em;
          overflow: auto;
          color: #355cc9;
          padding-right: 10px;
        }
        .block-flip-cards-3d .back .location, .block-flip-cards-3d .back .price {
          font-weight: 600;
          color: #355cc9;
          grid-row: 1;
          font-size: 0.86em;
        }
        .block-flip-cards-3d .back .location {
          grid-column: 1/3;
          justify-self: left;
        }
        .block-flip-cards-3d .back .price {
          grid-column: 3/-1;
          justify-self: right;
        }
        .block-flip-cards-3d .back .button {
          grid-column: 1/-1;
          justify-self: center;
        }
        .block-flip-cards-3d .button {
          grid-row: -1;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
          cursor: pointer;
          display: block;
          padding: 0 1.5em;
          height: 3em;
          line-height: 2.9em;
          min-width: 3em;
          background-color: transparent;
          border: solid 2px #fff;
          color: #fff;
          border-radius: 4px;
          text-align: center;
          left: 50%;
          backface-visibility: hidden;
          transition: 0.3s ease-in-out;
          text-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
        }
        .block-flip-cards-3d .button:hover {
          background-color: #fff;
          box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
          text-shadow: none;
          color: #355cc9;
        }
        .block-flip-cards-3d .button.return {
          line-height: 3em;
          color: #355cc9;
          border-color: #355cc9;
          text-shadow: none;
        }
        .block-flip-cards-3d .button.return:hover {
          background-color: #355cc9;
          color: #fff;
          box-shadow: none;
        }
        .block-flip-cards-3d ::-webkit-scrollbar {
          width: 5px;
        }
        .block-flip-cards-3d ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .block-flip-cards-3d ::-webkit-scrollbar-thumb {
          background: #859ddf;
        }
        .block-flip-cards-3d ::-webkit-scrollbar-thumb:hover {
          background: #355cc9;
        }
        .block-flip-cards-3d .icon img {
          width: 24px;
        }
        .block-flip-cards-3d .cta-arrow {
          width: 16px;
          margin-top: 10px;
        }
        .block-flip-cards-3d .rating img {
          width: 16px;
          opacity: 0.8;
        }
        </style>
        <div class="wrapper">
          <div class="card">
            <div class="content">
              <div class="front" style="background-image: url('https://ntvassets-a.akamaihd.net/47DA11690F9F49E888078C706AB715D9.jpg')">
                <div class="inner">
                  <h2>Embassy Suites Golf Resort</h2>
                  <div class="rating">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                  </div>
                  <button class="details-btn button">Details</button>
                </div>
              </div>
              <div class="back">
                <div class="inner">
                  <div class="info">
                    <span>5</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648966/users-solid_1_wemlhr.jpg?_s=public-apps">
                      <span>people</span>
                    </div>
                  </div>
                  <div class="info">
                    <span>3</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/door-open-solid_1_gwyqjp.jpg?_s=public-apps"> <span>rooms</span>
                    </div>
                  </div>
                  <div class="info">
                    <span>2</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/bed-solid_1_thmcy7.jpg?_s=public-apps"> <span>beds</span>
                    </div>
                  </div>
                  <div class="info">
                    <span>1</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/bath-solid_1_nremr4.jpg?_s=public-apps"> <span>bath</span>
                    </div>
                  </div>
                  <div class="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum nostrum ipsam ullam, reiciendis nam consectetur? Doloribus voluptate architecto possimus perferendis tenetur nemo amet temporibus, enim soluta nam, debitis.</p>
                  </div>
                  <div class="location">
                    Greenville, SC
                  </div>
                  <div class="price">
                    38€ / day
                  </div>
                  <button class="back-btn button return">
                    <img class="cta-arrow" src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706649369/Msc/wp9xsybfcxgn1itfa2hg.jpg?_s=public-apps">
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <input class="more" id="card2" type="checkbox">
            <div class="content">
              <div class="front" style="background-image: url('https://ntvassets-a.akamaihd.net/D7E9791C8CEA48438053E7698361180F.jpg')">
                <div class="inner">
                  <h2>Homewood Suites Downtown Cary</h2>
                  <div class="rating">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651107/star-half-alt-solid_l1f1r1.jpg?_s=public-apps">
                  </div>
                  <button class="details-btn button">Details</button>
                </div>
              </div>
              <div class="back">
                <div class="inner">
                  <div class="info">
                    <span>4</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648966/users-solid_1_wemlhr.jpg?_s=public-apps">
                      <span>people</span>
                    </div>
                  </div>
                  <div class="info">
                    <span>3</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/door-open-solid_1_gwyqjp.jpg?_s=public-apps"> <span>rooms</span>
                    </div>
                  </div>
                  <div class="info">
                    <span>2</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/bed-solid_1_thmcy7.jpg?_s=public-apps"> <span>beds</span>
                    </div>
                  </div>
                  <div class="info">
                    <span>1</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/bath-solid_1_nremr4.jpg?_s=public-apps"> <span>bath</span>
                    </div>
                  </div>
                  <div class="description">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem unde ea voluptas fuga odio vel veniam eveniet, explicabo autem earum?</p>
                    <ul>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                  </div>
                  <div class="location">
                    Cary, NC
                  </div>
                  <div class="price">
                    42€ / day
                  </div>
                  <button class="back-btn button return">
                    <img class="cta-arrow" src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706649369/Msc/wp9xsybfcxgn1itfa2hg.jpg?_s=public-apps">
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <input class="more" id="card3" type="checkbox">
            <div class="content">
              <div class="front" style="background-image: url('https://ntvassets-a.akamaihd.net/37950159B6504FC4AD96E1E78018D50E.jpg')">
                <div class="inner">
                  <h2>Aloft Downtown Chicago</h2>
                  <div class="rating">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651107/star-half-alt-solid_l1f1r1.jpg?_s=public-apps">
                  </div>
                  <button class="details-btn button">Details</button>
                </div>
              </div>
              <div class="back">
                <div class="inner">
                  <div class="info">
                    <span>8</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648966/users-solid_1_wemlhr.jpg?_s=public-apps">
                      <span>people</span>
                    </div>
                  </div>
                  <div class="info">
                    <span>3</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/door-open-solid_1_gwyqjp.jpg?_s=public-apps"> <span>rooms</span>
                    </div>
                  </div>
                  <div class="info">
                    <span>2</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/bed-solid_1_thmcy7.jpg?_s=public-apps"> <span>beds</span>
                    </div>
                  </div>
                  <div class="info">
                    <span>1</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/bath-solid_1_nremr4.jpg?_s=public-apps"> <span>bath</span>
                    </div>
                  </div>
                  <div class="description">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa libero totam nostrum consequatur autem quae provident quos alias fugit maxime nisi labore, temporibus tempore illo natus voluptates aliquam ipsum officia quasi placeat aut facilis laudantium nam!</p>
                    <p>Quam, iusto.Neque ratione ut deserunt unde dicta nesciunt, repudiandae aspernatur explicabo numquam! Tenetur!</p>
                  </div>
                  <div class="location">
                    Chicago, IL
                  </div>
                  <div class="price">
                    60€ / day
                  </div>
                  <button class="back-btn button return">
                    <img class="cta-arrow" src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706649369/Msc/wp9xsybfcxgn1itfa2hg.jpg?_s=public-apps">
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  };
}

