import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Plans from './pages/plans/Plans'
import Gallery from './pages/gallery/Gallery'
import Trainers from './pages/trainers/Trainers'
import NavBar from './components/NavBar'
import NotFound from './pages/notfound/NotFound'
import Footer from './components/Footer'

const App = () => {
    return (

        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="plans" element={<Plans />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="trainers" element={<Trainers />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;