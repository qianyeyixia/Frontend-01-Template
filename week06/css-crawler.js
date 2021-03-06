
function happen(element,event) {
  return new Promise((reslove) => {
    let handler = () => {
      reslove()
      element.addEventListener(event,handler)
    }

    element.removeEventListener(event,handler)
  })
}

let standard = [{
  "name": "Requirements for Chinese Text Layout中文排版需求",
  "url": "https://www.w3.org/TR/2020/WD-clreq-20200521/"
},
{
  "name": "CSS Positioned Layout Module Level 3",
  "url": "https://www.w3.org/TR/2020/WD-css-position-3-20200519/"
},
{
  "name": "CSS Display Module Level 3",
  "url": "https://www.w3.org/TR/2020/CR-css-display-3-20200519/"
},
{
  "name": "CSS Text Decoration Module Level 4",
  "url": "https://www.w3.org/TR/2020/WD-css-text-decor-4-20200506/"
},
{
  "name": "CSS Text Module Level 3",
  "url": "https://www.w3.org/TR/2020/WD-css-text-3-20200429/"
},
{
  "name": "CSS Ruby Layout Module Level 1",
  "url": "https://www.w3.org/TR/2020/WD-css-ruby-1-20200429/"
},
{
  "name": "CSS Box Model Module Level 3",
  "url": "https://www.w3.org/TR/2020/WD-css-box-3-20200421/"
},
{
  "name": "CSS Box Alignment Module Level 3",
  "url": "https://www.w3.org/TR/2020/WD-css-align-3-20200421/"
},
{
  "name": "CSS Box Model Module Level 4",
  "url": "https://www.w3.org/TR/2020/WD-css-box-4-20200421/"
},
{
  "name": "CSS Color Adjustment Module Level 1",
  "url": "https://www.w3.org/TR/2020/WD-css-color-adjust-1-20200402/"
},
{
  "name": "Media Queries Level 5",
  "url": "https://www.w3.org/TR/2020/WD-mediaqueries-5-20200318/"
},
{
  "name": "CSS Speech Module",
  "url": "https://www.w3.org/TR/2020/CR-css-speech-1-20200310/"
},
{
  "name": "CSS Conditional Rules Module Level 4",
  "url": "https://www.w3.org/TR/2020/WD-css-conditional-4-20200303/"
},
{
  "name": "CSS Transforms Module Level 2",
  "url": "https://www.w3.org/TR/2020/WD-css-transforms-2-20200303/"
},
{
  "name": "CSS Color Module Level 5",
  "url": "https://www.w3.org/TR/2020/WD-css-color-5-20200303/"
},
{
  "name": "CSS Scroll Anchoring Module Level 1",
  "url": "https://www.w3.org/TR/2020/WD-css-scroll-anchoring-1-20200211/"
},
{
  "name": "Resize Observer",
  "url": "https://www.w3.org/TR/2020/WD-resize-observer-1-20200211/"
},
{
  "name": "Timed Text Markup Language 2 (TTML2) (2nd Edition)",
  "url": "https://www.w3.org/TR/2020/CR-ttml2-20200128/"
},
{
  "name": "CSS Basic User Interface Module Level 4",
  "url": "https://www.w3.org/TR/2020/WD-css-ui-4-20200124/"
},
{
  "name": "CSS Writing Modes Level 3",
  "url": "https://www.w3.org/TR/2019/REC-css-writing-modes-3-20191210/"
},
{
  "name": "CSS Grid Layout Module Level 2",
  "url": "https://www.w3.org/TR/2019/WD-css-grid-2-20191203/"
},
{
  "name": "CSS Spatial Navigation Level 1",
  "url": "https://www.w3.org/TR/2019/WD-css-nav-1-20191126/"
},
{
  "name": "CSS Containment Module Level 1",
  "url": "https://www.w3.org/TR/2019/REC-css-contain-1-20191121/"
},
{
  "name": "CSS Fonts Module Level 4",
  "url": "https://www.w3.org/TR/2019/WD-css-fonts-4-20191113/"
},
{
  "name": "CSS Text Module Level 4",
  "url": "https://www.w3.org/TR/2019/WD-css-text-4-20191113/"
},
{
  "name": "CSS Containment Module Level 2",
  "url": "https://www.w3.org/TR/2019/WD-css-contain-2-20191111/"
},
{
  "name": "CSS Color Module Level 4",
  "url": "https://www.w3.org/TR/2019/WD-css-color-4-20191105/"
},
{
  "name": "CSS Properties and Values API Level 1",
  "url": "https://www.w3.org/TR/2019/WD-css-properties-values-api-1-20191025/"
},
{
  "name": "CSS Multi-column Layout Module Level 1",
  "url": "https://www.w3.org/TR/2019/WD-css-multicol-1-20191015/"
},
{
  "name": "CSS Images Module Level 3",
  "url": "https://www.w3.org/TR/2019/CR-css-images-3-20191010/"
},
{
  "name": "CSS Lists Module Level 3",
  "url": "https://www.w3.org/TR/2019/WD-css-lists-3-20190817/"
},
{
  "name": "CSS Text Decoration Module Level 3",
  "url": "https://www.w3.org/TR/2019/CR-css-text-decor-3-20190813/"
},
{
  "name": "CSS Generated Content Module Level 3",
  "url": "https://www.w3.org/TR/2019/WD-css-content-3-20190802/"
},
{
  "name": "CSS Writing Modes Level 4",
  "url": "https://www.w3.org/TR/2019/CR-css-writing-modes-4-20190730/"
},
{
  "name": "CSS Table Module Level 3",
  "url": "https://www.w3.org/TR/2019/WD-css-tables-3-20190727/"
},
{
  "name": "CSS Syntax Module Level 3",
  "url": "https://www.w3.org/TR/2019/CR-css-syntax-3-20190716/"
},
{
  "name": "CSS Animation Worklet API",
  "url": "https://www.w3.org/TR/2019/WD-css-animation-worklet-1-20190625/"
},
{
  "name": "CSS Overscroll Behavior Module Level 1",
  "url": "https://www.w3.org/TR/2019/WD-css-overscroll-1-20190606/"
},
{
  "name": "CSS Values and Units Module Level 3",
  "url": "https://www.w3.org/TR/2019/CR-css-values-3-20190606/"
},
{
  "name": "CSS Intrinsic & Extrinsic Sizing Module Level 3",
  "url": "https://www.w3.org/TR/2019/WD-css-sizing-3-20190522/"
},
{
  "name": "CSS Easing Functions Level 1",
  "url": "https://www.w3.org/TR/2019/CR-css-easing-1-20190430/"
},
{
  "name": "TTML Media Type Definition and Profile Registry",
  "url": "https://www.w3.org/TR/2019/NOTE-ttml-profile-registry-20190411/"
},
{
  "name": "WebVTT: The Web Video Text Tracks Format",
  "url": "https://www.w3.org/TR/2019/CR-webvtt1-20190404/"
},
{
  "name": "Non-element  Selectors  Module  Level 1",
  "url": "https://www.w3.org/TR/2019/NOTE-selectors-nonelement-1-20190402/"
},
{
  "name": "CSS Scroll Snap Module Level 1",
  "url": "https://www.w3.org/TR/2019/CR-css-scroll-snap-1-20190319/"
},
{
  "name": "CSS Pseudo-Elements Module Level 4",
  "url": "https://www.w3.org/TR/2019/WD-css-pseudo-4-20190225/"
},
{
  "name": "CSS Transforms Module Level 1",
  "url": "https://www.w3.org/TR/2019/CR-css-transforms-1-20190214/"
},
{
  "name": "CSS Values and Units Module Level 4",
  "url": "https://www.w3.org/TR/2019/WD-css-values-4-20190131/"
},
{
  "name": "CSS Snapshot 2018",
  "url": "https://www.w3.org/TR/2019/NOTE-css-2018-20190122/"
},
{
  "name": "CSS Fragmentation Module Level 4",
  "url": "https://www.w3.org/TR/2018/WD-css-break-4-20181218/"
},
{
  "name": "Motion Path Module Level 1",
  "url": "https://www.w3.org/TR/2018/WD-motion-1-20181218/"
},
{
  "name": "Filter Effects Module Level 1",
  "url": "https://www.w3.org/TR/2018/WD-filter-effects-1-20181218/"
},
{
  "name": "CSS Fragmentation Module Level 3",
  "url": "https://www.w3.org/TR/2018/CR-css-break-3-20181204/"
},
{
  "name": "Geometry Interfaces Module Level 1",
  "url": "https://www.w3.org/TR/2018/CR-geometry-1-20181204/"
},
{
  "name": "Selectors Level 4",
  "url": "https://www.w3.org/TR/2018/WD-selectors-4-20181121/"
},
{
  "name": "CSS Flexible Box Layout Module Level 1",
  "url": "https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/"
},
{
  "name": "CSS Shadow Parts",
  "url": "https://www.w3.org/TR/2018/WD-css-shadow-parts-1-20181115/"
},
{
  "name": "Selectors Level 3",
  "url": "https://www.w3.org/TR/2018/REC-selectors-3-20181106/"
},
{
  "name": "CSS Paged Media Module Level 3",
  "url": "https://www.w3.org/TR/2018/WD-css-page-3-20181018/"
},
{
  "name": "Web Animations",
  "url": "https://www.w3.org/TR/2018/WD-web-animations-1-20181011/"
},
{
  "name": "CSS Transitions",
  "url": "https://www.w3.org/TR/2018/WD-css-transitions-1-20181011/"
},
{
  "name": "CSS Animations Level 1",
  "url": "https://www.w3.org/TR/2018/WD-css-animations-1-20181011/"
},
{
  "name": "CSS Scrollbars Module Level 1",
  "url": "https://www.w3.org/TR/2018/WD-css-scrollbars-1-20180925/"
},
{
  "name": "CSS Fonts Module Level 3",
  "url": "https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/"
},
{
  "name": "Cascading  Style  Sheets,  level 1",
  "url": "https://www.w3.org/TR/2018/SPSD-CSS1-20180913/"
},
{
  "name": "CSS Cascading and Inheritance Level 3",
  "url": "https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/"
},
{
  "name": "CSS Cascading and Inheritance Level 4",
  "url": "https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/"
},
{
  "name": "CSS Logical Properties and Values Level 1",
  "url": "https://www.w3.org/TR/2018/WD-css-logical-1-20180827/"
},
{
  "name": "CSS Painting API Level 1",
  "url": "https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/"
},
{
  "name": "CSS Inline Layout Module Level 3",
  "url": "https://www.w3.org/TR/2018/WD-css-inline-3-20180808/"
},
{
  "name": "CSS Overflow Module Level 3",
  "url": "https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/"
},
{
  "name": "CSS Basic User Interface Module Level 3 (CSS3 UI)",
  "url": "https://www.w3.org/TR/2018/REC-css-ui-3-20180621/"
},
{
  "name": "CSS Color Module Level 3",
  "url": "https://www.w3.org/TR/2018/REC-css-color-3-20180619/"
},
{
  "name": "CSS Layout API Level 1",
  "url": "https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/"
},
{
  "name": "DOMMatrix interface",
  "url": "https://www.w3.org/TR/2018/NOTE-matrix-20180412/"
},
{
  "name": "CSS Typed OM Level 1",
  "url": "https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/"
}]


let iframe = document.createElement('iframe')

document.body.innerHTML = ""

document.body.appendChild(iframe)

// iframe.src= 'https://www.w3.org/TR/2020/WD-clreq-20200521/'

// iframe.contentDocument.getElementsByClassName('prod')

void async function() {
  for (const standard of standards) {
    iframe.src = standard.url
    console.log(standard.name)
    await happen(iframe,'load')
  }
}()