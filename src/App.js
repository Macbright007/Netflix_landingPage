import logo from './images/logo.png';
import Banner from './Banner.js';
import Video from './components/Video.js';

const App = () => {
    return(
        <div className="container">
            <header>
                <a href="#" className="logo">
                    <img src={logo} alt="Netflix" />
                </a>
                    <ul className="navigation">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">TV Series</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">Latest</a></li>
                        <li><a href="#">My List</a></li>
                    </ul>

                <div className="search">
                    <input type="text" placeholder="Search" />
                    <i class="fa fa-search" aria-hidden="true"></i>
                </div>
            </header>
            <Banner />
            <Video />
        </div>
    )
}

export default App