<!-- Inject the content of 'header' file -->
<?php include('header.php'); ?>

<!-- FEATURED CONTENT -->
<div id="news-cards" class="news-cards">
    <div id="card" class="card">
        <h3>Just read the news.</h3>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Voluptates ullam in placeat dolorum pariatur
            ipsam. Illum dolorem hic eaque minima!
        </p>
        <a href="#" class="btn">Read more
            <span class="fas fa-angle-double-right"></span></a>
    </div>
    <div id="card" class="card">
        <h3>More news!</h3>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Voluptates ullam in placeat dolorum pariatur
            ipsam. Illum dolorem hic eaque minima!
        </p>
        <a href="#" class="btn">Read more
            <span class="fas fa-angle-double-right"></span></a>
    </div>
    <div id="card" class="card">
        <h3>And what about this?</h3>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Voluptates ullam in placeat dolorum pariatur
            ipsam. Illum dolorem hic eaque minima!
        </p>
        <a href="#" class="btn">Read more
            <span class="fas fa-angle-double-right"></span></a>
    </div>
</div>

<!-- Slideshow container -->
<div class="slideshow-box">
    <div class="slideshow-container">
        <!-- Full-width images with number and caption text -->
        <div class="mySlides fade">
            <img src="media/projects/07c4f3112947597.601dda0354abf.jpg" alt="Slide 1" />
        </div>

        <div class="mySlides fade">
            <img src="media/projects/095603112947597.601dda072f5b1.jpg" alt="Slide 2" />
        </div>

        <div class="mySlides fade">
            <img src="media/projects/2680ec112947597.601dda072fb5f.jpg" alt="Slide 3" />
        </div>

        <div class="mySlides fade">
            <img src="media/projects/2d4fbf112947597.601dda039babf.jpg" alt="Slide 4" />
        </div>

        <!-- Next and previous buttons -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
</div>

<!-- The dots/circles -->
<div style="text-align: center">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
    <span class="dot" onclick="currentSlide(4)"></span>
</div>

<!-- Inject the content of 'footer' file -->
<?php include('footer.php'); ?>