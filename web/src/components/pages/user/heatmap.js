import React,{Component} from 'react'
import styled  from 'styled-components'

const HomeWrapper = styled.div `

  

`
export default class Heatmap extends Component{

    render(){

        return (
            <div>
            {/* Mirrored from colorlib.com/polygon/adminator/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 05 Feb 2020 03:18:23 GMT */}
            {/* Added by HTTrack */}<meta httpEquiv="content-type" content="text/html;charset=UTF-8" />{/* /Added by HTTrack */}
            <title>Dashboard</title>
            <style dangerouslySetInnerHTML={{__html: "\n      #loader {\n        transition: all 0.3s ease-in-out;\n        opacity: 1;\n        visibility: visible;\n        position: fixed;\n        height: 100vh;\n        width: 100%;\n        background: #fff;\n        z-index: 90000;\n      }\n      #loader.fadeOut {\n        opacity: 0;\n        visibility: hidden;\n      }\n      .spinner {\n        width: 40px;\n        height: 40px;\n        position: absolute;\n        top: calc(50% - 20px);\n        left: calc(50% - 20px);\n        background-color: #333;\n        border-radius: 100%;\n        -webkit-animation: sk-scaleout 1s infinite ease-in-out;\n        animation: sk-scaleout 1s infinite ease-in-out;\n      }\n      @-webkit-keyframes sk-scaleout {\n        0% {\n          -webkit-transform: scale(0);\n        }\n        100% {\n          -webkit-transform: scale(1);\n          opacity: 0;\n        }\n      }\n      @keyframes sk-scaleout {\n        0% {\n          -webkit-transform: scale(0);\n          transform: scale(0);\n        }\n        100% {\n          -webkit-transform: scale(1);\n          transform: scale(1);\n          opacity: 0;\n        }\n      }\n    " }} />
            <link href="style.css" rel="stylesheet" />
            
            <div>
              <div className="sidebar">
                <div className="sidebar-inner">
                  <div className="sidebar-logo">
                    <div className="peers ai-c fxw-nw">
                      <div className="peer peer-greed">
                        <a className="sidebar-link td-n" href="index.html"><div className="peers ai-c fxw-nw">
                            <div className="peer">
                              <div className="logo">
                                <img src="assets/static/images/logo.png" alt="" />
                              </div>
                            </div>
                            <div className="peer peer-greed">
                              <h5 className="lh-1 mB-0 logo-text">Adminator</h5>
                            </div>
                          </div></a>
                      </div>
                      <div className="peer">
                        <div className="mobile-toggle sidebar-toggle">
                          <a href="#" className="td-n"><i className="ti-arrow-circle-left" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="sidebar-menu scrollable pos-r">
                    <li className="nav-item mT-30 active">
                      <a className="sidebar-link" href="index.html" default><span className="icon-holder"><i className="c-blue-500 ti-home" /> </span><span className="title">Dashboard</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="sidebar-link" href="email.html"><span className="icon-holder"><i className="c-brown-500 ti-email" /> </span><span className="title">Email</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="sidebar-link" href="compose.html"><span className="icon-holder"><i className="c-blue-500 ti-share" /> </span><span className="title">Compose</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="sidebar-link" href="calendar.html"><span className="icon-holder"><i className="c-deep-orange-500 ti-calendar" /> </span><span className="title">Calendar</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="sidebar-link" href="chat.html"><span className="icon-holder"><i className="c-deep-purple-500 ti-comment-alt" /> </span><span className="title">Chat</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="sidebar-link" href="charts.html"><span className="icon-holder"><i className="c-indigo-500 ti-bar-chart" /> </span><span className="title">Charts</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="sidebar-link" href="forms.html"><span className="icon-holder"><i className="c-light-blue-500 ti-pencil" /> </span><span className="title">Forms</span></a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="sidebar-link" href="ui.html"><span className="icon-holder"><i className="c-pink-500 ti-palette" /> </span><span className="title">UI Elements</span></a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="dropdown-toggle" href="javascript:void(0);"><span className="icon-holder"><i className="c-orange-500 ti-layout-list-thumb" /> </span><span className="title">Tables</span>
                        <span className="arrow"><i className="ti-angle-right" /></span></a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="sidebar-link" href="basic-table.html">Basic Table</a>
                        </li>
                        <li>
                          <a className="sidebar-link" href="datatable.html">Data Table</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="dropdown-toggle" href="javascript:void(0);"><span className="icon-holder"><i className="c-purple-500 ti-map" /> </span><span className="title">Maps</span>
                        <span className="arrow"><i className="ti-angle-right" /></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="google-maps.html">Google Map</a></li>
                        <li><a href="vector-maps.html">Vector Map</a></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="dropdown-toggle" href="javascript:void(0);"><span className="icon-holder"><i className="c-red-500 ti-files" /> </span><span className="title">Pages</span>
                        <span className="arrow"><i className="ti-angle-right" /></span></a>
                      <ul className="dropdown-menu">
                        <li><a className="sidebar-link" href="404.html">404</a></li>
                        <li><a className="sidebar-link" href="500.html">500</a></li>
                        <li><a className="sidebar-link" href="signin.html">Sign In</a></li>
                        <li><a className="sidebar-link" href="signup.html">Sign Up</a></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="dropdown-toggle" href="javascript:void(0);"><span className="icon-holder"><i className="c-teal-500 ti-view-list-alt" /> </span><span className="title">Multiple Levels</span>
                        <span className="arrow"><i className="ti-angle-right" /></span></a>
                      <ul className="dropdown-menu">
                        <li className="nav-item dropdown">
                          <a href="javascript:void(0);"><span>Menu Item</span></a>
                        </li>
                        <li className="nav-item dropdown">
                          <a href="javascript:void(0);"><span>Menu Item</span>
                            <span className="arrow"><i className="ti-angle-right" /></span></a>
                          <ul className="dropdown-menu">
                            <li><a href="javascript:void(0);">Menu Item</a></li>
                            <li><a href="javascript:void(0);">Menu Item</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="page-container">
                <div className="header navbar">
                  <div className="header-container">
                    <ul className="nav-left">
                      <li>
                        <a id="sidebar-toggle" className="sidebar-toggle" href="javascript:void(0);"><i className="ti-menu" /></a>
                      </li>
                      <li className="search-box">
                        <a className="search-toggle no-pdd-right" href="javascript:void(0);"><i className="search-icon ti-search pdd-right-10" />
                          <i className="search-icon-close ti-close pdd-right-10" /></a>
                      </li>
                      <li className="search-input">
                        <input className="form-control" type="text" placeholder="Search..." />
                      </li>
                    </ul>
                    <ul className="nav-right">
                      <li className="notifications dropdown">
                        <span className="counter bgc-red">3</span>
                        <a href="#" className="dropdown-toggle no-after" data-toggle="dropdown"><i className="ti-bell" /></a>
                        <ul className="dropdown-menu">
                          <li className="pX-20 pY-15 bdB">
                            <i className="ti-bell pR-10" />
                            <span className="fsz-sm fw-600 c-grey-900">Notifications</span>
                          </li>
                          <li>
                            <ul className="ovY-a pos-r scrollable lis-n p-0 m-0 fsz-sm">
                              <li>
                                <a href="#" className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100"><div className="peer mR-15">
                                    <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                                  </div>
                                  <div className="peer peer-greed">
                                    <span><span className="fw-500">John Doe</span>
                                      <span className="c-grey-600">liked your
                                        <span className="text-dark">post</span></span></span>
                                    <p className="m-0">
                                      <small className="fsz-xs">5 mins ago</small>
                                    </p>
                                  </div></a>
                              </li>
                              <li>
                                <a href="#" className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100"><div className="peer mR-15">
                                    <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/2.jpg" alt="" />
                                  </div>
                                  <div className="peer peer-greed">
                                    <span><span className="fw-500">Moo Doe</span>
                                      <span className="c-grey-600">liked your
                                        <span className="text-dark">cover image</span></span></span>
                                    <p className="m-0">
                                      <small className="fsz-xs">7 mins ago</small>
                                    </p>
                                  </div></a>
                              </li>
                              <li>
                                <a href="#" className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100"><div className="peer mR-15">
                                    <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/3.jpg" alt="" />
                                  </div>
                                  <div className="peer peer-greed">
                                    <span><span className="fw-500">Lee Doe</span>
                                      <span className="c-grey-600">commented on your
                                        <span className="text-dark">video</span></span></span>
                                    <p className="m-0">
                                      <small className="fsz-xs">10 mins ago</small>
                                    </p>
                                  </div></a>
                              </li>
                            </ul>
                          </li>
                          <li className="pX-20 pY-15 ta-c bdT">
                            <span><a href="#" className="c-grey-600 cH-blue fsz-sm td-n">View All Notifications
                                <i className="ti-angle-right fsz-xs mL-10" /></a></span>
                          </li>
                        </ul>
                      </li>
                      <li className="notifications dropdown">
                        <span className="counter bgc-blue">3</span>
                        <a href="#" className="dropdown-toggle no-after" data-toggle="dropdown"><i className="ti-email" /></a>
                        <ul className="dropdown-menu">
                          <li className="pX-20 pY-15 bdB">
                            <i className="ti-email pR-10" />
                            <span className="fsz-sm fw-600 c-grey-900">Emails</span>
                          </li>
                          <li>
                            <ul className="ovY-a pos-r scrollable lis-n p-0 m-0 fsz-sm">
                              <li>
                                <a href="#" className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100"><div className="peer mR-15">
                                    <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                                  </div>
                                  <div className="peer peer-greed">
                                    <div>
                                      <div className="peers jc-sb fxw-nw mB-5">
                                        <div className="peer">
                                          <p className="fw-500 mB-0">John Doe</p>
                                        </div>
                                        <div className="peer">
                                          <small className="fsz-xs">5 mins ago</small>
                                        </div>
                                      </div>
                                      <span className="c-grey-600 fsz-sm">Want to create your own customized data
                                        generator for your app...</span>
                                    </div>
                                  </div></a>
                              </li>
                              <li>
                                <a href="#" className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100"><div className="peer mR-15">
                                    <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/2.jpg" alt="" />
                                  </div>
                                  <div className="peer peer-greed">
                                    <div>
                                      <div className="peers jc-sb fxw-nw mB-5">
                                        <div className="peer">
                                          <p className="fw-500 mB-0">Moo Doe</p>
                                        </div>
                                        <div className="peer">
                                          <small className="fsz-xs">15 mins ago</small>
                                        </div>
                                      </div>
                                      <span className="c-grey-600 fsz-sm">Want to create your own customized data
                                        generator for your app...</span>
                                    </div>
                                  </div></a>
                              </li>
                              <li>
                                <a href="#" className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100"><div className="peer mR-15">
                                    <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/3.jpg" alt="" />
                                  </div>
                                  <div className="peer peer-greed">
                                    <div>
                                      <div className="peers jc-sb fxw-nw mB-5">
                                        <div className="peer">
                                          <p className="fw-500 mB-0">Lee Doe</p>
                                        </div>
                                        <div className="peer">
                                          <small className="fsz-xs">25 mins ago</small>
                                        </div>
                                      </div>
                                      <span className="c-grey-600 fsz-sm">Want to create your own customized data
                                        generator for your app...</span>
                                    </div>
                                  </div></a>
                              </li>
                            </ul>
                          </li>
                          <li className="pX-20 pY-15 ta-c bdT">
                            <span><a href="#" className="c-grey-600 cH-blue fsz-sm td-n">View All Email
                                <i className="fs-xs ti-angle-right mL-10" /></a></span>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle no-after peers fxw-nw ai-c lh-1" data-toggle="dropdown"><div className="peer mR-10">
                            <img className="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/10.jpg" alt="" />
                          </div>
                          <div className="peer">
                            <span className="fsz-sm c-grey-900">John Doe</span>
                          </div></a>
                        <ul className="dropdown-menu fsz-sm">
                          <li>
                            <a href="#" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700"><i className="ti-settings mR-10" /> <span>Setting</span></a>
                          </li>
                          <li>
                            <a href="#" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700"><i className="ti-user mR-10" /> <span>Profile</span></a>
                          </li>
                          <li>
                            <a href="#" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700"><i className="ti-email mR-10" /> <span>Messages</span></a>
                          </li>
                          <li role="separator" className="divider" />
                          <li>
                            <a href="#" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700"><i className="ti-power-off mR-10" /> <span>Logout</span></a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <main className="main-content bgc-grey-100">
                  <div id="mainContent">
                    <div className="row gap-20 masonry pos-r">
                      <div className="masonry-sizer col-md-6" />
                      <div className="masonry-item w-100">
                        <div className="row gap-20">
                          <div className="col-md-3">
                            <div className="layers bd bgc-white p-20">
                              <div className="layer w-100 mB-10">
                                <h6 className="lh-1">Total threats</h6>
                              </div>
                              <div className="layer w-100">
                                <div className="peers ai-sb fxw-nw">
                                  <div className="peer peer-greed">
                                    <span id="sparklinedash" />
                                  </div>
                                  <div className="peer">
                                    <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">+10%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="layers bd bgc-white p-20">
                              <div className="layer w-100 mB-10">
                                <h6 className="lh-1">Total responses</h6>
                              </div>
                              <div className="layer w-100">
                                <div className="peers ai-sb fxw-nw">
                                  <div className="peer peer-greed">
                                    <span id="sparklinedash2" />
                                  </div>
                                  <div className="peer">
                                    <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-red-50 c-red-500">-7%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="layers bd bgc-white p-20">
                              <div className="layer w-100 mB-10">
                                <h6 className="lh-1">Crime data</h6>
                              </div>
                              <div className="layer w-100">
                                <div className="peers ai-sb fxw-nw">
                                  <div className="peer peer-greed">
                                    <span id="sparklinedash3" />
                                  </div>
                                  <div className="peer">
                                    <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-purple-50 c-purple-500">~12%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="layers bd bgc-white p-20">
                              <div className="layer w-100 mB-10">
                                <h6 className="lh-1">Bounce Rate</h6>
                              </div>
                              <div className="layer w-100">
                                <div className="peers ai-sb fxw-nw">
                                  <div className="peer peer-greed">
                                    <span id="sparklinedash4" />
                                  </div>
                                  <div className="peer">
                                    <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-blue-50 c-blue-500">33%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="masonry-item col-12">
                        <div className="bd bgc-white">
                          <div className="peers fxw-nw@lg+ ai-s">
                            <div className="peer peer-greed w-70p@lg+ w-100@lg- p-20">
                              <div className="layers">
                                <div className="layer w-100 mB-10">
                                  <h6 className="lh-1">Site Visits</h6>
                                </div>
                                <div className="layer w-100">
                                  <div id="world-map-marker" />
                                </div>
                              </div>
                            </div>
                            <div className="peer bdL p-20 w-30p@lg+ w-100p@lg-">
                              <div className="layers">
                                <div className="layer w-100">
                                  <div className="layers">
                                    <div className="layer w-100">
                                      <h5 className="mB-5">100k</h5>
                                      <small className="fw-600 c-grey-700">Threat From USA</small>
                                      <span className="pull-right c-grey-600 fsz-sm">50%</span>
                                      <div className="progress mT-10">
                                        <div className="progress-bar bgc-deep-purple-500" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>
                                          <span className="sr-only">50% Complete</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="layer w-100 mT-15">
                                      <h5 className="mB-5">1M</h5>
                                      <small className="fw-600 c-grey-700">threat From Europe</small>
                                      <span className="pull-right c-grey-600 fsz-sm">80%</span>
                                      <div className="progress mT-10">
                                        <div className="progress-bar bgc-green-500" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                                          <span className="sr-only">80% Complete</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="layer w-100 mT-15">
                                      <h5 className="mB-5">450k</h5>
                                      <small className="fw-600 c-grey-700">Threat From Australia</small>
                                      <span className="pull-right c-grey-600 fsz-sm">40%</span>
                                      <div className="progress mT-10">
                                        <div className="progress-bar bgc-light-blue-500" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
                                          <span className="sr-only">40% Complete</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="layer w-100 mT-15">
                                      <h5 className="mB-5">1B</h5>
                                      <small className="fw-600 c-grey-700">Visitors From India</small>
                                      <span className="pull-right c-grey-600 fsz-sm">90%</span>
                                      <div className="progress mT-10">
                                        <div className="progress-bar bgc-blue-grey-500" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                                          <span className="sr-only">90% Complete</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="peers pT-20 mT-20 bdT fxw-nw@lg+ jc-sb ta-c gap-10">
                                    <div className="peer">
                                      <div className="easy-pie-chart" data-size={80} data-percent={75} data-bar-color="#f44336">
                                        <span />
                                      </div>
                                      <h6 className="fsz-sm">New allotments</h6>
                                    </div>
                                    <div className="peer">
                                      <div className="easy-pie-chart" data-size={80} data-percent={50} data-bar-color="#2196f3">
                                        <span />
                                      </div>
                                      <h6 className="fsz-sm">Greater coverage</h6>
                                    </div>
                                    <div className="peer">
                                      <div className="easy-pie-chart" data-size={80} data-percent={90} data-bar-color="#ff9800">
                                        <span />
                                      </div>
                                      <h6 className="fsz-sm">Accuracy status</h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="masonry-item col-md-12">
                        <div className="bd bgc-white">
                          <div className="layers">
                            <div className="layer w-100 pX-20 pT-20">
                              <h6 className="lh-1">Monthly Stats</h6>
                            </div>
                            <div className="layer w-100 p-20">
                              <canvas id="line-chart" height={220} />
                            </div>
                            <div className="layer bdT p-20 w-100">
                              <div className="peers ai-c jc-c gapX-20">
                                <div className="peer">
                                  <span className="fsz-def fw-600 mR-10 c-grey-800">10% <i className="fa fa-level-up c-green-500" /></span>
                                  <small className="c-grey-500 fw-600">APPL</small>
                                </div>
                                <div className="peer fw-600">
                                  <span className="fsz-def fw-600 mR-10 c-grey-800">2% <i className="fa fa-level-down c-red-500" /></span>
                                  <small className="c-grey-500 fw-600">Average</small>
                                </div>
                                <div className="peer fw-600">
                                  <span className="fsz-def fw-600 mR-10 c-grey-800">15% <i className="fa fa-level-up c-green-500" /></span>
                                  <small className="c-grey-500 fw-600">Sales</small>
                                </div>
                                <div className="peer fw-600">
                                  <span className="fsz-def fw-600 mR-10 c-grey-800">8% <i className="fa fa-level-down c-red-500" /></span>
                                  <small className="c-grey-500 fw-600">Profit</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>     
                    </div>
                  </div>
                </main>
                <footer className="bdT ta-c p-30 lh-0 fsz-sm c-grey-600">
                  <span>Copyright © 2020 Designed by
                    <a href="https://seeU.com/" target="_blank" title="Colorlib">seeU</a>. All rights reserved.</span>
                </footer>
              </div>
            </div>
            {/* Mirrored from colorlib.com/polygon/adminator/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 05 Feb 2020 03:18:42 GMT */}
          </div>
        )
    }
}