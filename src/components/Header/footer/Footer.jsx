import React from 'react'

function Footer() {
  return (
    <div>
    <footer style={{marginLeft:"20px"}}>
    <p>“A modern Apple-inspired website built with React. It features a clean UI, smart  design, smooth animations, and detailed product showcase sections. The project focuses on  performance, simplicity, and a premium user experience similar to Apple Inc.’s official  website.”
          Navigation bar with Apple-style links and icons
          Multiple hero sections with background images (iPhone 16 Pro, iPhone 16, Apple Watch,    MacBook, etc.)
      3-column promo section with flex layout
       Gallery section with hover zoom effects
       Footer component separated from Header
       Images imported correctly via Vite asset system</p>
</footer>
<br/><br/>

<footer>
    <div className="column">

<div className="footer-column" style={{marginLeft:"30px"}}>
    <h5>shop and learn</h5>
<ul>
    <li>store</li>
    <li>mac</li>
    <li>ipad</li>
    <li>iphone</li>
    <li>watch</li>
</ul>
</div>

<div className="footer-column">
    <h5>account</h5>
    <ul>
        <li>manage your apple account</li>
        <li>apple store account</li>
        <div><h5>entertainment</h5></div>
        <li>apple -one</li>
        <li>apple-tv</li> 
    </ul>
</div>

<div className="footer-column">
    <h5>apple store</h5>
    <ul>
        <li>find storef</li>
        <li>genius bar</li>
        <li>today at apple</li>
        <li>apple trade in</li>
        <li>financing</li>
    </ul>
</div>

<div className="footer-column">
    <h5>more from apple </h5>
    <div><h5>busines</h5></div>
    <ul>
        <li>apple and busines</li>
        <li>shop and busines</li>
        <div><h5>apple for education</h5></div>
        <li>apple and education</li>
        <li>education coolege</li>
    </ul>
</div>

 </div>
</footer>
<br/><br/>
    </div>
  )
}

export default Footer;