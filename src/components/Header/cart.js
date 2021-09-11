import React from 'react'

const Cart = () => {
    return (
        <div>
            <div className="p-3">
                <div className="d-flex justify-content-evenly align-items-center p-3" style={{
                    backgroundColor: "#eceb98"
                }}>
                    <span className="bi bi-calendar w-25 pe-3" style={{
                        fontSize: "1.8rem"
                    }}></span>
                    <p>All courses have a 30-day money-back guarantee.</p>
                </div>
            </div>
            <div className="p-2" style={{
                minHeight: "45vh"
            }}>
                <h6 className="text-reset ps-2">0 Courses in cart</h6>
                <div className="border d-flex justify-content-center align-items-center flex-column p-3" >
                    <img src="https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2.jpg" height="150px" width="100%" alt="image" />
                    <div className="d-flex flex-column justify-content-center ps-2">
                        <p>
                        Your cart is empty. Keep shopping to find a course!
                        </p>
                        <button className="btn btn-primary m-auto">Keep Shopping</button>
                    </div>
                </div>
            </div>

            <div className="p-0 pt-3 mt-2 ">
                <div className="bg-dark text-light p-2">
                    <h5 className="p-2">Top companies choose videoTube Business to buil in-demand career skills. </h5>
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

export default Cart
