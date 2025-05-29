
class FooterMaryContact extends HTMLElement {
    // <li><a class="link" href="/resources/">Resources</a></li>
    connectedCallback() {
        this.innerHTML = `
        <div class="footer-wrapper" data-scroll-track="footer">
            <footer class="bg-purple-1 c-white">
                <div class="footer-bg"></div>
                <h5 class="serif">Want our help with something?</h5>
                <div class="df fc contact" style="margin-right: 5rem;">
                    <span>CONTACT</span>
                    <ul>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" class="link"
                                href="mailto:talk2michelleajoma@gmail.com">talk2michelleajoma@gmail.com</a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" class="link"
                                href="tel:+234 706 717 4467">
                                +234 706 717 4467</a>
                        </li>
                    </ul>
                </div>
                <div class="df fc pages">
                    <span>PAGES</span>
                    <ul>
                        <li><a class="link" href="works.html">Works</a></li>
                   
                    </ul>
                </div>
                <div class="reach df aic">
                    <a class="df aic" href="mailto:talk2michelleajoma@gmail.com" target="_blank"
                        rel="noreferrer nofollow"><span class="text">Reach Out</span>
                        <span class="icon"><img width="1" height="1" alt="alt text"
                                src="images/mail.svg" /></span></a>
                </div>
                <ul class="df aic social">
                    <li>
                        <a aria-label="link to linkedin" target="_blank" rel="noreferrer nofollow"
                            href="https://www.linkedin.com/in/ajoma-mary-5a50a2235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img width="1" height="1"
                                alt="linkedin icon" src="images/ln.svg" /></a>
                    </li>
                    <li>
                        <a aria-label="link to instagram" target="_blank" rel="noreferrer nofollow"
                            href="https://www.instagram.com/design_droplet?igsh=MWgzdDh0bjVpcTFiaA%3D%3D&utm_source=qr"><img width="1" height="1"
                                alt="instagram icon" src="images/in.svg" /></a>
                    </li>
                  
                </ul>
                <span class="logo serif df aic">
                    <picture class="logo-img"><img width="1" height="1" alt="alt text" src="images/logo2.svg" />
                    </picture><span>Ajoma Mary<span class="sans">™</span></span>
                </span><span class="copy df aic jcb"><span class="copy-text">© 2025 Ajoma Mary, All rights
                        reserved.</span>
                  </span>
            </footer>
        </div>
        `;
    }
}


class HeaderMaryInfo extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
          <nav class="z7 df jcb aic pen">
                <div class="left-pane df aic">
                    <picture class="logo"><img width="1" height="1" alt="display logo" src="images/logo2-orange.svg" />
                    </picture><span class="serif brand">Ajoma Mary<span class="sans">™</span></span>
                    <p class="ttu desc">A care oriented<br />designer</p>
                </div>
                <div class="right">
                    <a id="nav-contact" class="c-white bg-orange pea aic" href="mailto:talk2michelleajoma@gmail.com"
                        target="_blank" rel="noreferrer nofollow"><span>Contact</span>
                        <span class="arrow df"><svg viewBox="0 0 17 12" fill="none">
                                <use xlink:href="#d-rarr"></use>
                            </svg> </span></a><button id="mobile-trigger" class="pea df fc jcb z9">
                        <span></span> <span></span>
                    </button>
                </div>
                <div id="nav-sail" class="fix top left bg-white c-white">
                    <ul class="fw500 serif">
                        <li>
                            <div class="nav-el--bg top left right bottom bg-teal-2"></div>
                            <a class="df ais jcb" href="mailto:talk2michelleajoma@gmail.com" target="_blank"
                                rel="noreferrer nofollow">
                                <div>
                                    <span><span class="nav-line">Contact</span> </span><svg fill="none" class="rarr"
                                        viewBox="0 0 28 28">
                                        <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1.5" d="M2 14.32h24.64M19.82 7.5l6.82 6.82-6.82 6.82"></path>
                                    </svg>
                                </div>
                            </a>
                        </li>
                        <li>
                            <div class="nav-el--bg top left right bottom bg-red"></div>
                            <a class="df ais jcb" href="/resources/">
                                <div>
                                    <svg fill="none" viewBox="0 0 46 46">
                                        <circle cx="23" cy="23" r="23" fill="#fff"></circle>
                                        <path stroke="#FF667D" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M14.15 15.92h5.31A3.54 3.54 0 0123 19.46v12.39a2.65 2.65 0 00-2.65-2.66h-6.2V15.92z">
                                        </path>
                                        <path stroke="#FF667D" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M31.85 15.92h-5.31A3.54 3.54 0 0023 19.46v12.39a2.65 2.65 0 012.65-2.66h6.2V15.92z">
                                        </path>
                                    </svg>
                                    <span><span class="nav-line">Resources</span></span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <div class="nav-el--bg top left right bottom bg-orange"></div>
                            <a class="df ais jcb" href="/works/">
                                <div>
                                    <svg fill="none" viewBox="0 0 46 46">
                                        <circle cx="23" cy="23" r="23" fill="#fff"></circle>
                                        <path stroke="#FF9776" stroke-linejoin="round" stroke-width="2"
                                            d="M23 15s.75 4.13 2.43 5.92C27.11 22.7 31 23.5 31 23.5s-3.89.8-5.57 2.58C23.75 27.87 23 32 23 32s-.75-4.13-2.43-5.92C18.89 24.3 15 23.5 15 23.5s3.89-.8 5.57-2.58C22.25 19.13 23 15 23 15z">
                                        </path>
                                    </svg>
                                    <span><span class="nav-line">Works</span></span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <div class="nav-el--bg top left right bottom bg-blue"></div>
                            <a class="df ais jcb" href="/">
                                <div>
                                    <svg fill="none" viewBox="0 0 46 49">
                                        <ellipse cx="23" cy="24.68" fill="#fff" rx="23" ry="23.82"></ellipse>
                                        <path stroke="#8283DA" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M23 15.52v3.66M23 30.18v3.66M16.75 18.2l2.5 2.6M26.75 28.56l2.5 2.6M14.15 24.68h3.54M28.3 24.68h3.55M16.75 31.16l2.5-2.6M26.75 20.8l2.5-2.6">
                                        </path>
                                    </svg>
                                    <span><span class="nav-line">Home</span></span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        `;
    }
}

customElements.define('footer-mary-contact', FooterMaryContact);
customElements.define('header-mary-info', HeaderMaryInfo);