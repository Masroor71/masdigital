class Ganalytics extends HTMLElement {
	connectedCallback(){
		this.innerHTML = `
			<div>
				
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-8E8B5TLXJT"></script>
				<script>
				  window.dataLayer = window.dataLayer || [];
				  function gtag(){dataLayer.push(arguments);}
				  gtag('js', new Date());

				  gtag('config', 'G-8E8B5TLXJT');
				</script>
			</div>
		`
	}
}

customElements.define('g-analytics', Ganalytics)














