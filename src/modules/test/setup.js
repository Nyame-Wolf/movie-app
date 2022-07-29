document.body.innerHTML = ` 
    <header>
      <nav>
        <div class="logo">
          <a href="#">
            <!--TV logo-->
            <i class="fa-solid fa-tv"></i>
            <p class="text-logo">Movieflix</p>
          </a>
        </div>
        <ul class="links">
          <li><a href="#homepage">Homepage</a></li>
          <li><a href="#homepage">About Us</a></li>
          <li><a href="#homepage">Download Movies</a></li>
        </ul>
      </nav>
    </header>

    <form action="#" class="search-form">
      <div class="search-box">
        <input type="text" placeholder="Search..." class="search-input" />
        <button type="submit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </form>

    <div class="title" id="homepage">
      <h1>MOVIEFLIX</h1>
      <p class="secondary-text">
        Which are your favorite shows? Here you can see all the best TV shows!
        Add your likes and comments!
      </p>
      <p class="item-counter-container">We have more than <span class="item-counter"></span> shows for you!</p>
    </div>

    <div class="grid-container">
      <!--Created dynamically with javascript-->
    </div>
    <div class="modal"></div>
    <footer class="footer">
      <p>
        &copy; Created By
        <a class="footer-link" href="https://www.linkedin.com/in/romina-patino/"
          >Romina</a
        >
        and
        <a
          class="footer-link"
          href="https://www.linkedin.com/in/mumenya-nyamu-web-designer-data-enthusiast/"
          >Mumenya Nyamu</a
        >
        as part of Microverse Bootcamp curriculum
      </p>
    </footer>
`;
