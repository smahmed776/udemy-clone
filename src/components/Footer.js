import React from 'react'

const Footer = () => {
    return (
        <footer className="container-fluid p-0 ps-4 pt-3 bg-dark text-white border-top ">
            <div className="form-select ps-4 bg-dark m-0 mb-2" style={{width: "175px"}}>
                <span className="bi bi-globe text-white"></span>
            <select className="form-select bg-dark d-inline text-white text-center p-0" name="language" id="" style={{
                width: "80%",
                border: 0,
                outline: 0,
            }}> 
                <option value="Us" className=""> English </option>
                <option value="fr" className=""> French </option>
                <option value="bn" className=""> Bangla </option>
            </select>
            </div>
            <ul className="nav justify-content-between flex-column navbar-dark bg-dark w-100 ps-0">
                <li className="nav-item">
                    <a href="#" className="nav-link text-white ps-0">
                        Aboust us
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white ps-0">
                       Contact us
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white ps-0">
                        Terms
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white ps-0">
                       Privacy policy
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white ps-0">
                       Blog
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white ps-0">
                       Sitemap
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">
                      Get the app
                    </a>
                </li>
            </ul>

            <div className="col-12 py-3">
                <h4>
                    VideoTube
                </h4>
                <small> 2021 VideoTube,Inc.</small> 
            </div>
        </footer>
    )
}

export default Footer
