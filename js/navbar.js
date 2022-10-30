class MyNavbar extends HTMLElement {
	connectedCallback(){
		this.innerHTML = `
				<nav id="colorlib-main-nav" role="navigation">
		<a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle active"><i></i></a>
		<div class="js-fullheight colorlib-table">
			<div class="colorlib-table-cell js-fullheight">

				<div class="row">
					<div class="col-md-12">
						<ul>
							<li class=""><a href="index.html">Home</a></li>
							<li class=""><a href="about.html">About Me</a></li>
							<li class=""><a href="work.html">Portfolio</a></li>
							<li><a href="resume.html">My Resume</a></li>

						
						</ul>
					</div>
				</div>
			</div>
		</div>
	</nav>

	<header>
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="colorlib-navbar-brand">
							<a class="colorlib-logo" href="index.html"><span>Mas </span><span></span></a>
						</div>
						<a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
					</div>
				</div>
			</div>
		</header>
		<br>
		<br>


		`
	}
}

customElements.define('my-navbar', MyNavbar)