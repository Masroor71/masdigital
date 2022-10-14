class MyFooter extends HTMLElement {
	connectedCallback(){
		this.innerHTML = `
			<footer>
				<div id="footer">
					<div class="container">

						<div class="row">
							<div class="col-md-12 text-center">
								<p>Made with ❤️ Masroor Saad </p>
							</div>
							<div class="text-center"> 
							<a href="mailto:masroorkhan71@gmail.com"><i class="icon-envelope"></i></a>
							<a href="https://www.linkedin.com/in/masroor-saad-khan/"><i class="icon-linkedin"></i></a><br>
							<small>Shoot me a message at <a href="mailto:masroorkhan71@gmail.com">masroorkhan71@gmail.com </a></small>
							</div>
						</div>
					</div>
				</div>		
			</footer>
		`
	}
}

customElements.define('my-footer', MyFooter)