function Navar() {
    return (
        <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
            <div class="container">
                <a href="#" class="navbar-brand">

                    <span class="text-uppercase font-weight-bold">
                        AGR
                    </span>
                </a>

                <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    class="navbar-toggler"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div id="navbarSupportedContent" class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a href="#" class="nav-link"
                            >Home <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">About</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Experiences</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Works</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
        </div>
    )
}

function Footer() {
    return (
        <footer className="footer">
            &copy; Alberth G. Ruado
        </footer>
    )
}
ReactDOM.render(
    <div>
        <Navar />,
        <MainContent />,
        <Footer />,
    </div>,
    document.getElementById("root")

)
