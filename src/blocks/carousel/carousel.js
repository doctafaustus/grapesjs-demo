export default function carousel() {
  return {
    label: 'Carousel',
    media: `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve" width="30" height="30"><rect x="0" y="0" fill="none" width="30" height="30"/><g><path fill="none" d="M91.225,8.587h-0.178c0.063,0.07,0.121,0.143,0.177,0.217L91.225,8.587z"/></g><g><path d="M3.79,83.609h23.28c0.989,0,1.79-0.802,1.79-1.79V18.182c0-0.989-0.801-1.79-1.79-1.79H3.79c-0.989,0-1.79,0.802-1.79,1.79   v63.637C2,82.807,2.801,83.609,3.79,83.609z M8.741,23.132h13.38v53.736H8.741V23.132z"/><path d="M38.36,83.609h23.28c0.989,0,1.79-0.802,1.79-1.79V18.182c0-0.989-0.801-1.79-1.79-1.79H38.36   c-0.989,0-1.79,0.802-1.79,1.79v63.637C36.569,82.807,37.371,83.609,38.36,83.609z M43.31,23.132h13.38v53.736H43.31V23.132z"/><path d="M72.929,83.609h23.28c0.989,0,1.79-0.802,1.79-1.79V18.182c0-0.989-0.802-1.79-1.79-1.79h-23.28   c-0.989,0-1.79,0.802-1.79,1.79v63.637C71.139,82.807,71.941,83.609,72.929,83.609z M77.88,23.132h13.38v53.736H77.88V23.132z"/></g></svg>
    `,
    content: `
    <div class="block-carousel" style="margin:100px; padding:25px;">
      <style>
      .block-carousel * {
        box-sizing: border-box;
      }
      .block-carousel .container {
        background-color: #000;
        padding: 30px 50px 80px 50px;
        text-align: center;
        width: 660px;
        border-radius: 25px 25px 0 0;
        margin: 0 auto;
        width: 100%;
        position: relative;
        font-family: Arial, sans-serif;
      }
      .block-carousel h3 {
        color: #fff;
        letter-spacing: -0.25px;
        font-size: 40px;
        font-weight: 900;
        margin-top: 0;
      }
      .block-carousel .glide__slide {
        max-height: 300px;
      }
      .block-carousel .glide__slide img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 4px;
      }
      .block-carousel .glide__arrow {
        background-color: #0e9af1;
        border: none;
        padding: 14px 6px;
        border-radius: 4px;
      }
      .block-carousel .glide__arrow svg {
        fill: #fff;
        display: block;
        width: 0.6rem;
        height: 1.5rem;
        border-radius: 0.25rem;
        box-sizing: border-box;
        overflow: hidden;
        transition: all 0.2s ease;
      }
      .block-carousel .glide__arrow--left {
        left: -35px;
      }
      .block-carousel .glide__arrow--right {
        right: -35px;
      }
      .block-carousel .glide__arrow--left svg {
        transform: rotate(180deg);
      }
      .block-carousel .powered-by {
        color: #fff;
        font-size: 14px;
        font-weight: 400;
        position: absolute;
        bottom: 30px;
        right: 50px;
      }
      @media (max-width: 1024px) {
        .block-carousel .glide__slide {
          max-height: 200px;
        }
      }
      @media (max-width: 768px) {
        .block-carousel h3 {
          font-size: 24px;
        }
        .block-carousel .glide__slide {
          max-height: 100px;
        }
      }
      @media (max-width: 480px) {
        .block-carousel .container {
          padding: 30px 20px 60px 20px;
        }
        .block-carousel .glide__arrows {
          display: none;
        }
        .block-carousel .powered-by {
          right: 20px;
        }
      }
      
      .glide {
        position: relative;
        width: 100%;
        box-sizing: border-box;
      }
      
      .glide * {
        box-sizing: inherit;
      }
      
      .glide__track {
        overflow: hidden;
      }
      
      .glide__slides {
        position: relative;
        width: 100%;
        list-style: none;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        touch-action: pan-Y;
        overflow: hidden;
        margin: 0;
        padding: 0;
        white-space: nowrap;
        display: flex;
        flex-wrap: nowrap;
        will-change: transform;
      }
      
      .glide__slides--dragging {
        user-select: none;
      }
      
      .glide__slide {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        white-space: normal;
        user-select: none;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: transparent;
      }
      
      .glide__slide a {
        user-select: none;
        -webkit-user-drag: none;
        -moz-user-select: none;
        -ms-user-select: none;
      }
      
      .glide__arrows {
        -webkit-touch-callout: none;
        user-select: none;
      }
      
      .glide__bullets {
        -webkit-touch-callout: none;
        user-select: none;
      }
      
      .glide--rtl {
        direction: rtl;
      }
      
      .glide__arrow {
        position: absolute;
        display: block;
        top: 50%;
        z-index: 2;
        color: #fff;
        text-transform: uppercase;
        padding: 9px 12px;
        background-color: transparent;
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: 4px;
        box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);
        text-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.1);
        opacity: 1;
        cursor: pointer;
        transition: opacity 150ms ease, border 300ms ease-in-out;
        transform: translateY(-50%);
        line-height: 1;
      }
      
      .glide__arrow:focus {
        outline: none;
      }
      
      .glide__arrow:hover {
        border-color: #fff;
      }
      
      .glide__arrow--left {
        left: 2em;
      }
      
      .glide__arrow--right {
        right: 2em;
      }
      
      .glide__arrow--disabled {
        opacity: 0.33;
      }
      
      .glide__bullets {
        position: absolute;
        z-index: 2;
        bottom: 2em;
        left: 50%;
        display: inline-flex;
        list-style: none;
        transform: translateX(-50%);
      }
      
      .glide__bullet {
        background-color: rgba(255, 255, 255, 0.5);
        width: 9px;
        height: 9px;
        padding: 0;
        border-radius: 50%;
        border: 2px solid transparent;
        transition: all 300ms ease-in-out;
        cursor: pointer;
        line-height: 0;
        box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);
        margin: 0 0.25em;
      }
      
      .glide__bullet:focus {
        outline: none;
      }
      
      .glide__bullet:hover, .glide__bullet:focus {
        border: 2px solid #fff;
        background-color: rgba(255, 255, 255, 0.5);
      }
      
      .glide__bullet--active {
        background-color: #fff;
      }
      
      .glide--swipeable {
        cursor: grab;
        cursor: -moz-grab;
        cursor: -webkit-grab;
      }
      
      .glide--dragging {
        cursor: grabbing;
        cursor: -moz-grabbing;
        cursor: -webkit-grabbing;
      }
      </style>
      <div class="container">
        <h3>See it in action</h3>
        <div class="glide">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li class="glide__slide"><img src="https://assets.olapic-cdn.com/media/j/d/n/jdnxs65/normal.jpg"></li>
              <li class="glide__slide"><img src="https://assets.olapic-cdn.com/media/z/t/n/ztnxs65/normal.jpg"></li>
              <li class="glide__slide"><img src="https://assets.olapic-cdn.com/media/b/p/i/bpixs65/normal.jpg"></li>
              <li class="glide__slide"><img src="https://assets.olapic-cdn.com/media/p/i/n/pinxs65/normal.jpg"></li>
              <li class="glide__slide"><img src="https://assets.olapic-cdn.com/media/u/p/g/upgxs65/normal.jpg"></li>
              <li class="glide__slide"><img src="https://assets.olapic-cdn.com/media/5/o/i/5oixs65/normal.jpg"></li>
              <li class="glide__slide"><img src="https://assets.olapic-cdn.com/media/o/a/i/oaixs65/normal.jpg"></li>
              <li class="glide__slide"><img src="https://assets.olapic-cdn.com/media/4/u/n/4unxs65/normal.jpg"></li>
              <li class="glide__slide"><img src="https://assets.olapic-cdn.com/media/v/v/h/vvhxs65/normal.jpg"></li>
              <li class="glide__slide"><img src="https://assets.olapic-cdn.com/media/t/f/n/tfnxs65/normal.jpg"></li>
            </ul>
          </div>
    
          <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="|<">
              <svg class="navigation-wrapper__arrow-icon svelte-1mho6ob" viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.612512 0.387512C0.125012 0.875012 0.125012 1.66251 0.612512 2.15001L5.46251 7.00001L0.612512 11.85C0.125012 12.3375 0.125012 13.125 0.612512 13.6125C1.10001 14.1 1.88751 14.1 2.37501 13.6125L8.11251 7.87501C8.60001 7.38751 8.60001 6.60001 8.11251 6.11251L2.37501 0.375012C1.90001 -0.099988 1.10001 -0.0999877 0.612512 0.387512Z"></path>
              </svg>
            </button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir="|>">
              <svg class="navigation-wrapper__arrow-icon svelte-1mho6ob" viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.612512 0.387512C0.125012 0.875012 0.125012 1.66251 0.612512 2.15001L5.46251 7.00001L0.612512 11.85C0.125012 12.3375 0.125012 13.125 0.612512 13.6125C1.10001 14.1 1.88751 14.1 2.37501 13.6125L8.11251 7.87501C8.60001 7.38751 8.60001 6.60001 8.11251 6.11251L2.37501 0.375012C1.90001 -0.099988 1.10001 -0.0999877 0.612512 0.387512Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="powered-by">Powered by NATIVO</div>
      </div>
    </div>
    `

  };
}