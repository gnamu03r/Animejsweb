import React, {useEffect, useRef} from 'react'
import './App.css'
import anime from 'animejs'

const App = () => {

  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    container.innerHTML = "";
    
    for(let i = 0; i < 100; i++){
      let dot = document.createElement("div");
      dot.classList.add("element");
      container.appendChild(dot);
    }

    let dotAll = document.querySelectorAll(".element");
    let animation = anime.timeline({
      targets: dotAll,
      easing: "easeInOutExpo",
      loop: true,
      delay: anime.stagger(100, {grid: [10, 10], from: "center"}),
    });

    animation
    .add({
      rotateZ: 180,
      translateY: anime.stagger(0, {grid: [10, 10], from: "center", axis: "y"}),
      translateX: anime.stagger(0, {grid: [10, 10], from: "center", axis: "x"}),
      opacity: 1
    })
    .add({
      borderRadius: 50,
    })
    .add({
      scale: 0.2, 
      opacity: 0.2
    })

    .add({
      rotateZ: 180,
      translateY: anime.stagger(0, {grid: [10, 10], from: "center", axis: "y"}),
      translateX: anime.stagger(0, {grid: [10, 10], from: "center", axis: "x"}),
      opacity: 1
    })

    .add({
      scale: 1, 
      borderRadius: 0,
    })
    .add({
      rotateZ: -90,
    })

  })


  return (
    <div>
      <header>
        <a href='#' className='logo'>LOGO</a>
        <ul>
          <li>
            <a href='#' className='Home'>Home</a>
          </li>
          <li>
            <a href='#' className='About'>About</a>
          </li>
          <li>
            <a href='#' className='Contact'>Contact</a>
          </li>
          <li>
            <a href='#' className='Blog'>Blog</a>
          </li>
        </ul>
      </header>
      <section>
        <div className='content'>
          <h2>
            Level Up Your Website <b>Anime.js</b>
          </h2>
          <p>
            This amazing website UI built by ~gnamu03r is going to blow your mind. A sleek, minimalist design that is perfect for any website.
          </p>
          <a href='#' className='btn'>Learn More</a>
        </div>
        <div className='container' ref={containerRef}>

        </div>

      </section>
    </div>
    
  )
}

export default App