import React from 'react'

const Main = () => {

    return (
        
        <div className="w-100 overflow-hidden">
            <img src="https://img-c.udemycdn.com/notices/web_banner/image_responsive_udlite/39824d4d-f243-4d7a-af14-157dbeaea7cb.jpg" alt="videoTube" height="150px"
                 width="100%"/>
            <div className="row flex-column px-3 mt-2 my-3 gy-3">
                <div className="col">
                    <h1>New to VideoTube? Lucky you!</h1>
                </div>
                <div className="col">
                    <h6>Courses starts at $3.54! get your preferred offer now</h6>
                </div>
                <div className="col">
                    <form action="#">
                        <div className="input-group">
                            <input type="search" className="form-control" placeholder="What do you want to learn?"/>
                            <div className="input-group-text">
                                <button type="submit" className="btn"><span className="bi bi-search"></span></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="px-3">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Python
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Excel
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Web Development
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Javascript
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-light px-3 my-3 border py-3">
                    <h3>Why learn on VideoTube?</h3>
                    <h6 className="mt-3">Learn in-demand skills with over 1, 55,00 video courses</h6>
                    <h6 className="mt-3">chose courses tought by real-world experts</h6>
                    <h6 className="mt-3">Learn at your own pace, with lifetime access on mobile and desktop</h6>
                </div>
                <div>
                    slick component
                </div>
                <div className="container-fluid">
                    <h2>Top Categories</h2>
                    <div>
                        <button className="btn border border-secondary ms-2 p-2 my-2 rounded-pill">Design</button>
                        <button className="btn border border-secondary ms-2 p-2 my-2 rounded-pill">Development</button>
                        <button className="btn border border-secondary ms-2 p-2 my-2 rounded-pill">marketing</button>
                        <button className="btn border border-secondary ms-2 p-2 my-2 rounded-pill">It & Software</button>
                        <button className="btn border border-secondary ms-2 p-2 my-2 rounded-pill">Personal Development</button>
                        <button className="btn border border-secondary ms-2 p-2 my-2 rounded-pill">Bussiness</button>
                        <button className="btn border border-secondary ms-2 p-2 my-2 rounded-pill">Photography</button>
                    </div>
                </div>

            </div>
            <div className="container py-3 my-2">
                <div className="bg-light p-2">
                    <h3>Trusted by companies of all size </h3>
                    <div className="row g-3 p-3">
                        <div className="col ">
                            <img src="https://s.udemycdn.com/partner-logos/v4/apple-dark.svg" alt="" />
                        </div>
                        <div className="col">
                            <img src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg" alt="" />
                        </div>
                        <div className="col ">
                            <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" alt="" />
                        </div>
                        <div className="col">
                            <img src="https://s.udemycdn.com/partner-logos/v4/netflix-dark.svg" alt="" />
                        </div>
                        <div className="col">
                            <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
