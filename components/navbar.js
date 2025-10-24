class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 30;
        }
        .logo { 
          color: white; 
          font-weight: bold; 
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        button {
          background: transparent;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          transition: background-color 0.2s;
        }
        button:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        .icon {
          width: 20px;
          height: 20px;
        }
      </style>
      <nav>
        <div class="logo">
          <i data-feather="layout"></i>
          <span>SideSlide</span>
        </div>
        <div class="nav-actions">
          <button id="themeToggle" aria-label="Toggle theme">
            <i data-feather="moon" class="icon"></i>
          </button>
          <button aria-label="User profile">
            <i data-feather="user" class="icon"></i>
          </button>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);
