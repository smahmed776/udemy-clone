import React from 'react'

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
        document.getElementById('mainCat').classList.add("d-none");
        document.getElementById(e.target.dataset.mainId).classList.add("subCatShow");
        document.getElementById(e.target.dataset.mainId).classList.remove("d-none");
        document.getElementById(e.target.dataset.mainId).style.visibility= "visible";
        // console.log(e.target.dataset)
        
    }
    const backToCat = e => {
        document.getElementById(e.target.dataset.mainId).classList.add("d-none");
        document.getElementById('mainCat').classList.remove("d-none");
        document.getElementById(e.target.dataset.mainId).classList.remove("subCatShow");
        document.getElementById(e.target.dataset.mainId).style.visibility= "hidden";
        // console.log(e.target.dataset)
        
    }


    console.log(navbar)
    

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white container-fluid border-bottom sticky-top border-bottom" aria-label="Main navigation">
            <button 
                type="button" 
                className="btn navbar-toggler navoffcanvasbtn" 
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
                <ul className="navbar-nav ps-3 py-3" id="mainCat">
                    {navbar.map(i=> (
                        <li className="nav-item">
                            <h6 className="nav-text">{i['category name']}</h6>
                            <hr />
                            <ul className="ps-2">
                                {i.items.map(x=> ( 
                            <>
                                    <a 
                                        className="nav-link" 
                                        role="button"
                                        onClick={e => handleClick(e)}                      
                                        data-main-id={x.id}>
                                            {x.name}
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
                            <ul className="subCat d-none navbar-nav navbar-light px-3" id={x.id} >
                                <button type="button" data-main-id={x.id} className="btn p-0 w-25 mt-2" onClick={e => backToCat(e)}>
                                    <span className="bi bi-chevron-left w-100" style={{pointerEvents: "none"}}></span>
                                </button>
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

            <div className="d-flex justify-content-evenly">
                <button className="btn">
                    <span className="bi bi-search"></span>
                </button>

                <button className="btn">
                    <span className="bi bi-cart3"></span>
                </button>
            </div>
        </nav>
    )
}

export default Header
