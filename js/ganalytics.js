class Ganalytics extends HTMLElement {
	connectedCallback(){
		this.innerHTML = `			
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-8E8B5TLXJT"></script>
				<script>
				  window.dataLayer = window.dataLayer || [];
				  function gtag(){dataLayer.push(arguments);}
				  gtag('js', new Date());

				  gtag('config', 'G-8E8B5TLXJT');
				</script>
		
		`
	}
}

customElements.define('g-analytics', Ganalytics)














