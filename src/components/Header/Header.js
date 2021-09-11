import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {

    const navbar = [
        {
            "category name": "Most Popular",

            "items" : [
                {
                    name: "Web development",
                    id: "WebDevelopment",
                    items: [
                       "Javascript",
                       "AngularJs",
                       "React",
                       "Css",
                       "Node Js",
                       "Vue Js",
                       "Django"
                    ]
                },
                {
                    name:"Mobile development",
                    id: "Mobiledevelopment",
                    items : [
                       "Andriod developnemt",
                       "Ios development",
                       "Google flutter",
                       "Swift",
                       "React native",
                       "Kotlin"
                    ],
                },
                {
                    name:"Game development",
                    id: "Gamedevelopment",
                    items: [
                       "Unity",
                       "Unreal engine",
                       "C#",
                       "Java",
                       "C++",
                       "2D Mobile game development"
                    ]
                },
                {
                    name: "Enterpreneurship",
                    id: "Enterpreneurship",
                    items: [
                        "Business",
                        "Freelancing",
                        "Startup",
                        "Blogging"
                    ]
                },
                {
                    name: "Business Analytics & Intelligence",
                    id: "BusinessAnalytics&Intelligence",
                    items: [
                        "Business",
                        "Freelancing",
                        "Startup",
                        "Blogging"
                    ]
                },
                {
                    name:"Digital marketing",
                    id: "Digitalmarketing",
                    items: [
                        "Business",
                        "Freelancing",
                        "Startup",
                        "Blogging"
                    ]
                },
                {
                    name:"Graphic design & illustration",
                    id: "Graphicdesign&illustration",
                    items: [
                        "Business",
                        "Freelancing",
                        "Startup",
                        "Blogging"
                    ]
                },
                {
                    name:"IT certification",
                    id: "ITcertification",
                    items: [
                        "Business",
                        "Freelancing",
                        "Startup",
                        "Blogging"
                    ]
                },
                {
                    name:"Personal Transformation",
                    id: "PersonalTransformation",
                    items: [
                        "Business",
                        "Freelancing",
                        "Startup",
                        "Blogging"
                    ]
                },
                {
                    name:"All categories",
                    id: "Allcategories",
                    items: [
                        "Business",
                        "Freelancing",
                        "Startup",
                        "Blogging"
                    ]
                }
        
                
            ]
        },
        {
            "category name": "More on VideoTube",
            "items" : [
                {name: "VideoTube Business",
            
                items: [
                    "Business",
                    "Freelancing",
                    "Startup",
                    "Blogging"
                ]
            },
                {name: "Get the app",
                items: [
                    "Business",
                    "Freelancing",
                    "Startup",
                    "Blogging"
                ]
            },
                {name: "Invite friends",
                items: [
                    "Business",
                    "Freelancing",
                    "Startup",
                    "Blogging"
                ]
            },
                {name: "Help",
                items: [
                    "Business",
                    "Freelancing",
                    "Startup",
                    "Blogging"
                ]
            }
            ]
            
        }
    ]

    const handleClick = e => {
        // document.getElementById('mainCat').style.visibility= "hidden";
        document.getElementById('mainCat').style.transform= "translate(-100%)";
        document.getElementById(e.target.dataset.mainId).classList.add("subCatShow");
        document.getElementById(e.target.dataset.mainId).style.visibility= "visible";
        // console.log(e.target.dataset)
        
    }
    const backToCat = e => {
        // document.getElementById('mainCat').style.visibility= "visible";
        document.getElementById('mainCat').style.transform= "none";
        document.getElementById(e.target.dataset.mainId).classList.remove("subCatShow");
        document.getElementById(e.target.dataset.mainId).style.visibility= "hidden";
        // console.log(e.target.dataset)
        
    }


    console.log(navbar)
    

    return (
        <>
        <nav className="navbar navbar-light bg-white container-fluid border-bottom sticky-top border-bottom" aria-label="Main navigation">
            <button 
                type="button" 
                className="btn navoffcanvasbtn" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#offcanvasCollapse" 
                aria-controls="offcanvasCollapse"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <a href="/"  className="navbar-brand me-0">VideoTube</a>

            <div className="offcanvas offcanvas-start nav-offcanvas" id="offcanvasCollapse" tabIndex="-1" aria-labelledby="offcanvasCollapseLabel">
                <div className="bg-white rounded-pill offcanvas-close">
                    <button className="btn-close text-dark" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
                </div>
                <div className="overflow-hidden w-100 h-100 position-relative">
                    <ul className="navbar-nav ps-3 py-3 mainCat" id="mainCat">
                        <div className="d-flex justify-content-center flex-column border-bottom py-3 mb-2">
                            <a href="#" className="nav-link text-primary">Login</a>
                            <a href="#" className="nav-link text-primary">Create Account</a>
                        </div>
                        {navbar.map(i=> (
                            <li className="nav-item">
                                <h6 className="nav-text">{i['category name']}</h6>
                                <hr />
                                <ul className="ps-2">
                                    {i.items.map(x=> ( 
                                <>
                                        <a 
                                            className="nav-link d-flex justify-content-between" 
                                            role="button"
                                            onClick={e => handleClick(e)}                      
                                            data-main-id={x.id}>
                                                <span className="" style={{pointerEvents: "none"}} >{x.name}</span>
                                                <span className="bi bi-chevron-right text-dark " style={{pointerEvents: "none"}} ></span>
                                        </a>
                                        
                                        
                                </>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                
                    {navbar.map(i=> (
                        <>
                            {i.items.map(x=> (
                                <ul className="subCat navbar-nav navbar-light px-3" id={x.id} >
                                    <div className="d-flex w-100 border-bottom">
                                        <button type="button" data-main-id={x.id} className="btn p-0 w-100 mt-2" onClick={e => backToCat(e)}>
                                            <span className="bi bi-caret-left" style={{pointerEvents: "none"}}></span> Menu
                                        </button>
                                    </div>
                                    

                                    {x.items.map(z=> (
                                        <li className="nav-item">
                                            <a className="nav-link" role="button">{z}</a>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        
                        </>
                    ))}                                 
                </div>                                
            </div>        

            <div className="d-flex justify-content-evenly">
                <button
                    className="btn"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#searchmodal">
                    <span className="bi bi-search" style={{pointerEvents: "none"}}></span>
                </button>


                <Link to="/cart" className="btn">
                    <span className="bi bi-cart3"></span>
                </Link>
            </div>
        </nav>
        <div class="modal" id="searchmodal" tabindex="-1" aria-labelledby="searchmodalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen-md-down">
                <div class="modal-content">
                    <div class="modal-header search-head">
                        <form action="#" style={{width: "85%"}}>
                            <input type="search" className="form-control d-inline w-75 search-inp" name="search" placeholder="Search for anything..." autoComplete />
                            <button type="submit" className="btn d-inline p-0 ps-2">

                            <span className=" bi bi-search"></span> 
                            </button>
                        </form>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default Header
