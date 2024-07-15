import React from 'react'
import image1 from './assets/boypic.jpg'
export default function Pricing() {
  return (
    <>
    
<section class="about section bd-container" id="about">
  <span class="section-subtitle">My history</span>
  <h2 class="section-title">About me</h2>

  <div class="about__container bd-grid">
    <div class="about__data bd-grid">
      <p class="about__description"><span>Hello, I am <br/></span>Ibad khilji Freelance frontend developer, I am passionate about creating and developing web interfaces. With years of experience in web design and development.</p>

      <div>
        <span class="about__number">01</span>
        <span class="about__achievement">Years off Experience</span>
      </div>

      <div>
        <span class="about__number">29+</span>
        <span class="about__achievement">how many language understand</span>
      </div>

    </div>

    <img src={image1} alt="" class="about__img"/>
  </div>
</section>
    </>
  )
}
