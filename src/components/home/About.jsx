import React from "react";

export default function About() {
  return (
    // <section className="section">
    //     <div className="container">
    //         <div className="row align-items-center">
    //             <div className="col-lg-6 col-md-6">
    //                 <div className="row align-items-center">
    //                     <div className="col-lg-6 col-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
    //                         <div className="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
    //                             <div className="card-body p-0">
    //                                 <img src="images/course/online/ab01.jpg" className="img-fluid" alt="work-image">
    //                                 <div className="overlay-work bg-dark"></div>
    //                                 <div className="content">
    //                                     <a href="javascript:void(0)" className="title text-white d-block font-weight-bold">Web Development</a>
    //                                     <small className="text-light">IT & Software</small>
    //                                 </div>
    //                             </div>
    //                         </div>

    //                         <div className="mt-4 pt-2 text-right d-none d-md-block">
    //                             <a href="javascript:void(0)" className="btn btn-primary">See More <i data-feather="chevron-right" className="fea icon-sm"></i></a>
    //                         </div>
    //                     </div><!--end col-->

    //                     <div className="col-lg-6 col-6">
    //                         <div className="row">
    //                             <div className="col-lg-12 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
    //                                 <div className="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
    //                                     <div className="card-body p-0">
    //                                         <img src="images/course/online/ab02.jpg" className="img-fluid" alt="work-image">
    //                                         <div className="overlay-work bg-dark"></div>
    //                                         <div className="content">
    //                                             <a href="javascript:void(0)" className="title text-white d-block font-weight-bold">Michanical Engineer</a>
    //                                             <small className="text-light">Engineering</small>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div><!--end col-->

    //                             <div className="col-lg-12 col-md-12 mt-4 pt-2">
    //                                 <div className="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
    //                                     <div className="card-body p-0">
    //                                         <img src="images/course/online/ab03.jpg" className="img-fluid" alt="work-image">
    //                                         <div className="overlay-work bg-dark"></div>
    //                                         <div className="content">
    //                                             <a href="javascript:void(0)" className="title text-white d-block font-weight-bold">Chartered Accountant</a>
    //                                             <small className="text-light">C.A.</small>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div><!--end col-->
    //                         </div><!--end row-->
    //                     </div><!--end col-->
    //                 </div><!--end row-->
    //             </div><!--end col-->

    //             <div className="col-lg-6 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
    //                 <div className="ml-lg-4">
    //                     <div className="section-title mb-4 pb-2">
    //                         <h4 className="title mb-4">About Our Story</h4>
    //                         <p className="text-muted para-desc">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
    //                         <p className="text-muted para-desc mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.</p>
    //                     </div>

    //                     <h5>Our Branches :</h5>

    //                     <div className="row">
    //                         <div className="col-md-6 col-12 mt-4">
    //                             <div className="d-flex align-items-center">
    //                                 <i data-feather="map-pin" className="fea icon-md text-muted"></i>
    //                                 <div className="content ml-2">
    //                                     <h5 className="mb-0"><a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" className="video-play-icon text-primary">U.S.A.</a></h5>
    //                                     <p className="text-muted mb-0">Long Street, WS, US</p>
    //                                 </div>
    //                             </div>
    //                         </div>

    //                         <div className="col-md-6 col-12 mt-4">
    //                             <div className="d-flex align-items-center">
    //                                 <i data-feather="map-pin" className="fea icon-md text-muted"></i>
    //                                 <div className="content ml-2">
    //                                     <h5 className="mb-0"><a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" className="video-play-icon text-primary">China</a></h5>
    //                                     <p className="text-muted mb-0">Wuhan, China</p>
    //                                 </div>
    //                             </div>
    //                         </div>

    //                         <div className="col-md-6 col-12 mt-4">
    //                             <div className="d-flex align-items-center">
    //                                 <i data-feather="map-pin" className="fea icon-md text-muted"></i>
    //                                 <div className="content ml-2">
    //                                     <h5 className="mb-0"><a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" className="video-play-icon text-primary">India</a></h5>
    //                                     <p className="text-muted mb-0">Channai, India</p>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>

    //                     <div className="watch-video mt-4 pt-2">
    //                         <a href="https://1.envato.market/4n73n" target="_blank" className="btn btn-primary mb-2">Read More <i data-feather="chevron-right" className="fea icon-sm"></i></a>
    //                         <a href="https://www.youtube.com/watch?v=jNTZpfXYJa4" className="video-play-icon watch text-dark mb-2 ml-2"><i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-circle title-dark text-white position-relative play play-iconbar"></i> Watch Video !</a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div><!--end row-->
    //     </div><!--end container-->

    //     <div className="container mt-100 mt-60">
    //         <div className="row">
    //             <div className="col-lg-3 col-md-6 col-12">
    //                 <div className="media align-items-center features">
    //                     <div className="icons m-0 rounded h2 text-primary text-center px-3">
    //                         <i className="uil uil-airplay"></i>
    //                     </div>
    //                     <div className="content ml-3">
    //                         <h5 className="mb-1"><a href="javascript:void(0)" className="text-dark">Learners</a></h5>
    //                         <p className="text-muted mb-0">This is required when, for text is not yet available.</p>
    //                     </div>
    //                 </div>
    //             </div><!--end col-->

    //             <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
    //                 <div className="media align-items-center features">
    //                     <div className="icons m-0 rounded h2 text-primary text-center px-3">
    //                         <i className="uil uil-bag"></i>
    //                     </div>
    //                     <div className="content ml-3">
    //                         <h5 className="mb-1"><a href="javascript:void(0)" className="text-dark">Teachers</a></h5>
    //                         <p className="text-muted mb-0">This is required when, for text is not yet available.</p>
    //                     </div>
    //                 </div>
    //             </div><!--end col-->

    //             <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2 mt-lg-0 pt-lg-0">
    //                 <div className="media align-items-center features">
    //                     <div className="icons m-0 rounded h2 text-primary text-center px-3">
    //                         <i className="uil uil-star"></i>
    //                     </div>
    //                     <div className="content ml-3">
    //                         <h5 className="mb-1"><a href="javascript:void(0)" className="text-dark">Parents</a></h5>
    //                         <p className="text-muted mb-0">This is required when, for text is not yet available.</p>
    //                     </div>
    //                 </div>
    //             </div><!--end col-->

    //             <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2 mt-lg-0 pt-lg-0">
    //                 <div className="media align-items-center features">
    //                     <div className="icons m-0 rounded h2 text-primary text-center px-3">
    //                         <i className="uil uil-at"></i>
    //                     </div>
    //                     <div className="content ml-3">
    //                         <h5 className="mb-1"><a href="javascript:void(0)" className="text-dark">Doners</a></h5>
    //                         <p className="text-muted mb-0">This is required when, for text is not yet available.</p>
    //                     </div>
    //                 </div>
    //             </div><!--end col-->
    //         </div><!--end row-->
    //     </div><!--end container-->
    //     <!-- About End -->

    //     <!-- Popular Course Start -->
    //     <div className="container mt-100 mt-60">
    //         <div className="row justify-content-center">
    //             <div className="col-12">
    //                 <div className="section-title text-center mb-4 pb-2">
    //                     <h4 className="title mb-4">Popular Courses</h4>
    //                     <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
    //                 </div>
    //             </div><!--end col-->
    //         </div><!--end row-->

    //         <div className="row">
    //             <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
    //                 <div className="card blog rounded border-0 shadow overflow-hidden">
    //                     <div className="position-relative">
    //                         <img src="images/course/1.jpg" className="card-img-top" alt="...">
    //                         <div className="overlay bg-dark"></div>
    //                         <div className="teacher d-flex align-items-center">
    //                             <img src="images/client/01.jpg" className="avatar avatar-md-sm rounded-circle shadow" alt="">
    //                             <div className="ml-2">
    //                                 <h6 className="mb-0"><a href="javascript:void(0)" className="text-light user">Dung Lewis</a></h6>
    //                                 <p className="text-light small my-0">Professor</p>
    //                             </div>
    //                         </div>
    //                         <div className="course-fee bg-white text-center shadow-md rounded-circle">
    //                             <h6 className="text-primary font-weight-bold fee">$11</h6>
    //                         </div>
    //                     </div>
    //                     <div className="position-relative">
    //                         <div className="shape overflow-hidden text-white">
    //                             <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                 <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
    //                             </svg>
    //                         </div>
    //                     </div>
    //                     <div className="card-body content">
    //                         <small><a href="javascript:void(0)" className="text-primary h6">Design</a></small>
    //                         <h5 className="mt-2"><a href="javascript:void(0)" className="title text-dark">Program for Missionaries</a></h5>
    //                         <p className="text-muted">The most well-known dummy text is the have originated in the 16th century.</p>
    //                         <a href="javascript:void(0)" className="text-primary">Read More <i data-feather="chevron-right" className="fea icon-sm"></i></a>
    //                         <ul className="list-unstyled d-flex justify-content-between border-top mt-3 pt-3 mb-0">
    //                             <li className="text-muted small"><i data-feather="book" className="fea icon-sm text-info"></i> 25 Lectures</li>
    //                             <li className="text-muted small ml-3"><i data-feather="clock" className="fea icon-sm text-warning"></i> 1h 30m</li>
    //                             <li className="text-muted small ml-3"><i data-feather="eye" className="fea icon-sm text-primary"></i> 3012</li>
    //                         </ul>
    //                     </div>
    //                 </div> <!--end card / course-blog-->
    //             </div><!--end col-->

    //             <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
    //                 <div className="card blog rounded border-0 shadow overflow-hidden">
    //                     <div className="position-relative">
    //                         <img src="images/course/2.jpg" className="card-img-top" alt="...">
    //                         <div className="overlay bg-dark"></div>
    //                         <div className="teacher d-flex align-items-center">
    //                             <img src="images/client/02.jpg" className="avatar avatar-md-sm rounded-circle shadow" alt="">
    //                             <div className="ml-2">
    //                                 <h6 className="mb-0"><a href="javascript:void(0)" className="text-light user">Lisa Marvel</a></h6>
    //                                 <p className="text-light small my-0">Professor</p>
    //                             </div>
    //                         </div>
    //                         <div className="course-fee bg-white text-center shadow-md rounded-circle">
    //                             <h6 className="text-primary font-weight-bold fee">$15</h6>
    //                         </div>
    //                     </div>
    //                     <div className="position-relative">
    //                         <div className="shape overflow-hidden text-white">
    //                             <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                 <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
    //                             </svg>
    //                         </div>
    //                     </div>
    //                     <div className="card-body content">
    //                         <small><a href="javascript:void(0)" className="text-primary h6">Development</a></small>
    //                         <h5 className="mt-2"><a href="javascript:void(0)" className="title text-dark">Access to Higher Education</a></h5>
    //                         <p className="text-muted">The most well-known dummy text is the have originated in the 16th century.</p>
    //                         <a href="javascript:void(0)" className="text-primary">Read More <i data-feather="chevron-right" className="fea icon-sm"></i></a>
    //                         <ul className="list-unstyled d-flex justify-content-between border-top mt-3 pt-3 mb-0">
    //                             <li className="text-muted small"><i data-feather="book" className="fea icon-sm text-info"></i> 25 Lectures</li>
    //                             <li className="text-muted small ml-3"><i data-feather="clock" className="fea icon-sm text-warning"></i> 1h 30m</li>
    //                             <li className="text-muted small ml-3"><i data-feather="eye" className="fea icon-sm text-primary"></i> 3012</li>
    //                         </ul>
    //                     </div>
    //                 </div> <!--end card / course-blog-->
    //             </div><!--end col-->

    //             <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
    //                 <div className="card blog rounded border-0 shadow overflow-hidden">
    //                     <div className="position-relative">
    //                         <img src="images/course/3.jpg" className="card-img-top" alt="...">
    //                         <div className="overlay bg-dark"></div>
    //                         <div className="teacher d-flex align-items-center">
    //                             <img src="images/client/03.jpg" className="avatar avatar-md-sm rounded-circle shadow" alt="">
    //                             <div className="ml-2">
    //                                 <h6 className="mb-0"><a href="javascript:void(0)" className="text-light user">Amanda Carlo</a></h6>
    //                                 <p className="text-light small my-0">Professor</p>
    //                             </div>
    //                         </div>
    //                         <div className="course-fee bg-white text-center shadow-md rounded-circle">
    //                             <h6 className="text-primary font-weight-bold fee">$19</h6>
    //                         </div>
    //                     </div>
    //                     <div className="position-relative">
    //                         <div className="shape overflow-hidden text-white">
    //                             <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                 <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
    //                             </svg>
    //                         </div>
    //                     </div>
    //                     <div className="card-body content">
    //                         <small><a href="javascript:void(0)" className="text-primary h6">Software</a></small>
    //                         <h5 className="mt-2"><a href="javascript:void(0)" className="title text-dark">Educational Communication</a></h5>
    //                         <p className="text-muted">The most well-known dummy text is the have originated in the 16th century.</p>
    //                         <a href="javascript:void(0)" className="text-primary">Read More <i data-feather="chevron-right" className="fea icon-sm"></i></a>
    //                         <ul className="list-unstyled d-flex justify-content-between border-top mt-3 pt-3 mb-0">
    //                             <li className="text-muted small"><i data-feather="book" className="fea icon-sm text-info"></i> 25 Lectures</li>
    //                             <li className="text-muted small ml-3"><i data-feather="clock" className="fea icon-sm text-warning"></i> 1h 30m</li>
    //                             <li className="text-muted small ml-3"><i data-feather="eye" className="fea icon-sm text-primary"></i> 3012</li>
    //                         </ul>
    //                     </div>
    //                 </div> <!--end card / course-blog-->
    //             </div><!--end col-->

    //             <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
    //                 <div className="card blog rounded border-0 shadow overflow-hidden">
    //                     <div className="position-relative">
    //                         <img src="images/course/4.jpg" className="card-img-top" alt="...">
    //                         <div className="overlay bg-dark"></div>
    //                         <div className="teacher d-flex align-items-center">
    //                             <img src="images/client/04.jpg" className="avatar avatar-md-sm rounded-circle shadow" alt="">
    //                             <div className="ml-2">
    //                                 <h6 className="mb-0"><a href="javascript:void(0)" className="text-light user">Anne McKnight</a></h6>
    //                                 <p className="text-light small my-0">Professor</p>
    //                             </div>
    //                         </div>
    //                         <div className="course-fee bg-white text-center shadow-md rounded-circle">
    //                             <h6 className="text-primary font-weight-bold fee">$9</h6>
    //                         </div>
    //                     </div>
    //                     <div className="position-relative">
    //                         <div className="shape overflow-hidden text-white">
    //                             <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                 <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
    //                             </svg>
    //                         </div>
    //                     </div>
    //                     <div className="card-body content">
    //                         <small><a href="javascript:void(0)" className="text-primary h6">Music</a></small>
    //                         <h5 className="mt-2"><a href="javascript:void(0)" className="title text-dark">Introduction to Epidemiology</a></h5>
    //                         <p className="text-muted">The most well-known dummy text is the have originated in the 16th century.</p>
    //                         <a href="javascript:void(0)" className="text-primary">Read More <i data-feather="chevron-right" className="fea icon-sm"></i></a>
    //                         <ul className="list-unstyled d-flex justify-content-between border-top mt-3 pt-3 mb-0">
    //                             <li className="text-muted small"><i data-feather="book" className="fea icon-sm text-info"></i> 25 Lectures</li>
    //                             <li className="text-muted small ml-3"><i data-feather="clock" className="fea icon-sm text-warning"></i> 1h 30m</li>
    //                             <li className="text-muted small ml-3"><i data-feather="eye" className="fea icon-sm text-primary"></i> 3012</li>
    //                         </ul>
    //                     </div>
    //                 </div> <!--end card / course-blog-->
    //             </div><!--end col-->

    //             <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
    //                 <div className="card blog rounded border-0 shadow overflow-hidden">
    //                     <div className="position-relative">
    //                         <img src="images/course/5.jpg" className="card-img-top" alt="...">
    //                         <div className="overlay bg-dark"></div>
    //                         <div className="teacher d-flex align-items-center">
    //                             <img src="images/client/05.jpg" className="avatar avatar-md-sm rounded-circle shadow" alt="">
    //                             <div className="ml-2">
    //                                 <h6 className="mb-0"><a href="javascript:void(0)" className="text-light user">Leosy Murfhy</a></h6>
    //                                 <p className="text-light small my-0">Professor</p>
    //                             </div>
    //                         </div>
    //                         <div className="course-fee bg-white text-center shadow-md rounded-circle">
    //                             <h6 className="text-primary font-weight-bold fee">$24</h6>
    //                         </div>
    //                     </div>
    //                     <div className="position-relative">
    //                         <div className="shape overflow-hidden text-white">
    //                             <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                 <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
    //                             </svg>
    //                         </div>
    //                     </div>
    //                     <div className="card-body content">
    //                         <small><a href="javascript:void(0)" className="text-primary h6">Art & Fashion</a></small>
    //                         <h5 className="mt-2"><a href="javascript:void(0)" className="title text-dark">Good Clinical Practice</a></h5>
    //                         <p className="text-muted">The most well-known dummy text is the have originated in the 16th century.</p>
    //                         <a href="javascript:void(0)" className="text-primary">Read More <i data-feather="chevron-right" className="fea icon-sm"></i></a>
    //                         <ul className="list-unstyled d-flex justify-content-between border-top mt-3 pt-3 mb-0">
    //                             <li className="text-muted small"><i data-feather="book" className="fea icon-sm text-info"></i> 25 Lectures</li>
    //                             <li className="text-muted small ml-3"><i data-feather="clock" className="fea icon-sm text-warning"></i> 1h 30m</li>
    //                             <li className="text-muted small ml-3"><i data-feather="eye" className="fea icon-sm text-primary"></i> 3012</li>
    //                         </ul>
    //                     </div>
    //                 </div> <!--end card / course-blog-->
    //             </div><!--end col-->

    //             <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
    //                 <div className="card blog rounded border-0 shadow overflow-hidden">
    //                     <div className="position-relative">
    //                         <img src="images/course/6.jpg" className="card-img-top" alt="...">
    //                         <div className="overlay bg-dark"></div>
    //                         <div className="teacher d-flex align-items-center">
    //                             <img src="images/client/06.jpg" className="avatar avatar-md-sm rounded-circle shadow" alt="">
    //                             <div className="ml-2">
    //                                 <h6 className="mb-0"><a href="javascript:void(0)" className="text-light user">Cristino Murfhy</a></h6>
    //                                 <p className="text-light small my-0">Professor</p>
    //                             </div>
    //                         </div>
    //                         <div className="course-fee bg-white text-center shadow-md rounded-circle">
    //                             <h6 className="text-primary font-weight-bold fee">$21</h6>
    //                         </div>
    //                     </div>
    //                     <div className="position-relative">
    //                         <div className="shape overflow-hidden text-white">
    //                             <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                 <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
    //                             </svg>
    //                         </div>
    //                     </div>
    //                     <div className="card-body content">
    //                         <small><a href="javascript:void(0)" className="text-primary h6">Programmer</a></small>
    //                         <h5 className="mt-2"><a href="javascript:void(0)" className="title text-dark">Social Computing</a></h5>
    //                         <p className="text-muted">The most well-known dummy text is the have originated in the 16th century.</p>
    //                         <a href="javascript:void(0)" className="text-primary">Read More <i data-feather="chevron-right" className="fea icon-sm"></i></a>
    //                         <ul className="list-unstyled d-flex justify-content-between border-top mt-3 pt-3 mb-0">
    //                             <li className="text-muted small"><i data-feather="book" className="fea icon-sm text-info"></i> 25 Lectures</li>
    //                             <li className="text-muted small ml-3"><i data-feather="clock" className="fea icon-sm text-warning"></i> 1h 30m</li>
    //                             <li className="text-muted small ml-3"><i data-feather="eye" className="fea icon-sm text-primary"></i> 3012</li>
    //                         </ul>
    //                     </div>
    //                 </div> <!--end card / course-blog-->
    //             </div><!--end col-->
    //         </div><!--end row-->
    //     </div><!--end container-->
    //     <!-- Popular Course End -->

    //     <!-- CTA Start -->
    //     <div className="container-fluid mt-100 mt-60">
    //         <div className="rounded py-md-5" style="background: url('images/course/online/cta.jpg') center center;">
    //             <div className="row py-5">
    //                 <div className="container">
    //                     <div className="row align-items-center px-3 px-sm-0">
    //                         <div className="col-lg-8 col-md-6 col-12">
    //                             <div className="section-title">
    //                                 <h4 className="display-4 h1 text-white title-dark mb-4">Register Now !</h4>
    //                                 <p className="text-light title-dark para-desc">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
    //                                 <div className="mt-4">
    //                                     <a href="javascript:void(0)" className="btn btn-primary">Admission Now</a>
    //                                 </div>
    //                             </div>
    //                         </div><!--end col-->

    //                         <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
    //                             <div className="card login_page shadow rounded border-0">
    //                                 <div className="card-body">
    //                                     <h4 className="card-title">Register Now</h4>

    //                                     <form className="login-form">
    //                                         <div className="row">
    //                                             <div className="col-md-12">
    //                                                 <div className="form-group position-relative">
    //                                                     <label>Your Name :<span className="text-danger">*</span></label>
    //                                                     <i data-feather="user" className="fea icon-sm icons"></i>
    //                                                     <input name="name" id="name" type="text" className="form-control pl-5" placeholder="First Name :">
    //                                                 </div>
    //                                             </div><!--end col-->
    //                                             <div className="col-md-12">
    //                                                 <div className="form-group position-relative">
    //                                                     <label>Your Email :<span className="text-danger">*</span></label>
    //                                                     <i data-feather="mail" className="fea icon-sm icons"></i>
    //                                                     <input name="email" id="email" type="email" className="form-control pl-5" placeholder="Your email :">
    //                                                 </div>
    //                                             </div><!--end col-->
    //                                             <div className="col-md-12">
    //                                                 <div className="form-group position-relative">
    //                                                     <label>Your Phone no. :<span className="text-danger">*</span></label>
    //                                                     <i data-feather="phone" className="fea icon-sm icons"></i>
    //                                                     <input name="number" id="number" type="number" className="form-control pl-5" placeholder="Your phone no. :">
    //                                                 </div>
    //                                             </div><!--end col-->
    //                                             <div className="col-md-12">
    //                                                 <div className="form-group">
    //                                                     <div className="custom-control custom-checkbox">
    //                                                         <input type="checkbox" className="custom-control-input" id="customCheck1">
    //                                                         <label className="custom-control-label" for="customCheck1">I Accept <a href="#" className="text-primary">Terms And Condition</a></label>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="col-md-12">
    //                                                 <button className="btn btn-primary w-100">Register Now</button>
    //                                             </div>
    //                                         </div>
    //                                     </form>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div><!--end row-->
    //                 </div><!--end container-->
    //             </div><!---end row-->
    //         </div><!--end div-->
    //     </div><!--end container fluid-->
    //     <!-- CTA End -->

    //     <!-- Teachers Start -->
    //     <div className="container mt-100 mt-60">
    //         <div className="row justify-content-center">
    //             <div className="col-12">
    //                 <div className="section-title text-center mb-4 pb-2">
    //                     <h4 className="title mb-4">Our Instructor</h4>
    //                     <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
    //                 </div>
    //             </div><!--end col-->
    //         </div><!--end row-->

    //         <div className="row">
    //             <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
    //                 <div className="media align-items-center">
    //                     <img src="images/client/05.jpg" className="avatar avatar-medium rounded-circle img-thumbnail" alt="">
    //                     <div className="content ml-3">
    //                         <h5 className="mb-0"><a href="javascript:void(0)" className="text-dark">Krista John</a></h5>
    //                         <small className="position text-muted">Professor</small>
    //                     </div>
    //                 </div>
    //             </div><!--end col-->

    //             <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
    //                 <div className="media align-items-center">
    //                     <img src="images/client/06.jpg" className="avatar avatar-medium rounded-circle img-thumbnail" alt="">
    //                     <div className="content ml-3">
    //                         <h5 className="mb-0"><a href="javascript:void(0)" className="text-dark">Jack John</a></h5>
    //                         <small className="position text-muted">Professor</small>
    //                     </div>
    //                 </div>
    //             </div><!--end col-->

    //             <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
    //                 <div className="media align-items-center">
    //                     <img src="images/client/01.jpg" className="avatar avatar-medium rounded-circle img-thumbnail" alt="">
    //                     <div className="content ml-3">
    //                         <h5 className="mb-0"><a href="javascript:void(0)" className="text-dark">Roger Jackson</a></h5>
    //                         <small className="position text-muted">Professor</small>
    //                     </div>
    //                 </div>
    //             </div><!--end col-->

    //             <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
    //                 <div className="media align-items-center">
    //                     <img src="images/client/02.jpg" className="avatar avatar-medium rounded-circle img-thumbnail" alt="">
    //                     <div className="content ml-3">
    //                         <h5 className="mb-0"><a href="javascript:void(0)" className="text-dark">Luchhi Cina</a></h5>
    //                         <small className="position text-muted">Professor</small>
    //                     </div>
    //                 </div>
    //             </div><!--end col-->

    //             <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
    //                 <div className="media align-items-center">
    //                     <img src="images/client/03.jpg" className="avatar avatar-medium rounded-circle img-thumbnail" alt="">
    //                     <div className="content ml-3">
    //                         <h5 className="mb-0"><a href="javascript:void(0)" className="text-dark">Sophiya Cally</a></h5>
    //                         <small className="position text-muted">Professor</small>
    //                     </div>
    //                 </div>
    //             </div><!--end col-->

    //             <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
    //                 <div className="media align-items-center">
    //                     <img src="images/client/04.jpg" className="avatar avatar-medium rounded-circle img-thumbnail" alt="">
    //                     <div className="content ml-3">
    //                         <h5 className="mb-0"><a href="javascript:void(0)" className="text-dark">Johnny English</a></h5>
    //                         <small className="position text-muted">Professor</small>
    //                     </div>
    //                 </div>
    //             </div><!--end col-->
    //         </div><!--end row-->
    //     </div><!--end container-->
    //     <!-- Teachers End -->

    //     <!-- Testi Start -->
    //     <div className="container mt-100 mt-60">
    //         <div className="row justify-content-center">
    //             <div className="col-12 text-center">
    //                 <div className="section-title mb-4 pb-2">
    //                     <h4 className="title mb-4">What Students Say ?</h4>
    //                     <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
    //                 </div>
    //             </div><!--end col-->
    //         </div><!--end row-->

    //         <div className="row justify-content-center">
    //             <div className="col-lg-12 mt-4">
    //                 <div id="customer-testi" className="owl-carousel owl-theme">
    //                     <div className="media customer-testi m-2">
    //                         <img src="images/client/01.jpg" className="avatar avatar-small mr-3 rounded shadow" alt="">
    //                         <div className="media-body content p-3 shadow rounded bg-white position-relative">
    //                             <ul className="list-unstyled mb-0">
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                             </ul>
    //                             <p className="text-muted mt-2">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "</p>
    //                             <h6 className="text-primary">- Thomas Israel <small className="text-muted">C.E.O</small></h6>
    //                         </div>
    //                     </div>

    //                     <div className="media customer-testi m-2">
    //                         <img src="images/client/02.jpg" className="avatar avatar-small mr-3 rounded shadow" alt="">
    //                         <div className="media-body content p-3 shadow rounded bg-white position-relative">
    //                             <ul className="list-unstyled mb-0">
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star-half text-warning"></i></li>
    //                             </ul>
    //                             <p className="text-muted mt-2">" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "</p>
    //                             <h6 className="text-primary">- Barbara McIntosh <small className="text-muted">M.D</small></h6>
    //                         </div>
    //                     </div>

    //                     <div className="media customer-testi m-2">
    //                         <img src="images/client/03.jpg" className="avatar avatar-small mr-3 rounded shadow" alt="">
    //                         <div className="media-body content p-3 shadow rounded bg-white position-relative">
    //                             <ul className="list-unstyled mb-0">
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                             </ul>
    //                             <p className="text-muted mt-2">" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>
    //                             <h6 className="text-primary">- Carl Oliver <small className="text-muted">P.A</small></h6>
    //                         </div>
    //                     </div>

    //                     <div className="media customer-testi m-2">
    //                         <img src="images/client/04.jpg" className="avatar avatar-small mr-3 rounded shadow" alt="">
    //                         <div className="media-body content p-3 shadow rounded bg-white position-relative">
    //                             <ul className="list-unstyled mb-0">
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                             </ul>
    //                             <p className="text-muted mt-2">" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "</p>
    //                             <h6 className="text-primary">- Christa Smith <small className="text-muted">Manager</small></h6>
    //                         </div>
    //                     </div>

    //                     <div className="media customer-testi m-2">
    //                         <img src="images/client/05.jpg" className="avatar avatar-small mr-3 rounded shadow" alt="">
    //                         <div className="media-body content p-3 shadow rounded bg-white position-relative">
    //                             <ul className="list-unstyled mb-0">
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                             </ul>
    //                             <p className="text-muted mt-2">" There is now an abundance of readable dummy texts. These are usually used when a text is required. "</p>
    //                             <h6 className="text-primary">- Dean Tolle <small className="text-muted">Developer</small></h6>
    //                         </div>
    //                     </div>

    //                     <div className="media customer-testi m-2">
    //                         <img src="images/client/06.jpg" className="avatar avatar-small mr-3 rounded shadow" alt="">
    //                         <div className="media-body content p-3 shadow rounded bg-white position-relative">
    //                             <ul className="list-unstyled mb-0">
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                                 <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
    //                             </ul>
    //                             <p className="text-muted mt-2">" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "</p>
    //                             <h6 className="text-primary">- Jill Webb <small className="text-muted">Designer</small></h6>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div><!--end col-->
    //         </div><!--end row-->
    //     </div><!--end container-->
    //     <!-- Testi End -->

    //     <!-- Blog Start -->
    //     <div className="container mt-100 mt-60">
    //         <div className="row justify-content-center">
    //             <div className="col-12 text-center">
    //                 <div className="section-title mb-4 pb-2">
    //                     <h4 className="title mb-4">Latest News</h4>
    //                     <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
    //                 </div>
    //             </div><!--end col-->
    //         </div><!--end row-->

    //         <div className="row">
    //             <div className="col-lg-4 col-md-6 mt-4 pt-2">
    //                 <div className="card blog rounded border-0 shadow">
    //                     <div className="position-relative">
    //                         <img src="images/blog/01.jpg" className="card-img-top rounded-top" alt="...">
    //                     <div className="overlay rounded-top bg-dark"></div>
    //                     </div>
    //                     <div className="card-body content">
    //                         <h5><a href="javascript:void(0)" className="card-title title text-dark">Design your apps in your own way</a></h5>
    //                         <div className="post-meta d-flex justify-content-between mt-3">
    //                             <ul className="list-unstyled mb-0">
    //                                 <li className="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>33</a></li>
    //                                 <li className="list-inline-item"><a href="javascript:void(0)" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>08</a></li>
    //                             </ul>
    //                             <a href="page-blog-detail.html" className="text-muted readmore">Read More <i className="mdi mdi-chevron-right"></i></a>
    //                         </div>
    //                     </div>
    //                     <div className="author">
    //                         <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
    //                         <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
    //                     </div>
    //                 </div>
    //             </div><!--end col-->

    //             <div className="col-lg-4 col-md-6 mt-4 pt-2">
    //                 <div className="card blog rounded border-0 shadow">
    //                     <div className="position-relative">
    //                         <img src="images/blog/02.jpg" className="card-img-top rounded-top" alt="...">
    //                     <div className="overlay rounded-top bg-dark"></div>
    //                     </div>
    //                     <div className="card-body content">
    //                         <h5><a href="javascript:void(0)" className="card-title title text-dark">How apps is changing the IT world</a></h5>
    //                         <div className="post-meta d-flex justify-content-between mt-3">
    //                             <ul className="list-unstyled mb-0">
    //                                 <li className="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>33</a></li>
    //                                 <li className="list-inline-item"><a href="javascript:void(0)" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>08</a></li>
    //                             </ul>
    //                             <a href="page-blog-detail.html" className="text-muted readmore">Read More <i className="mdi mdi-chevron-right"></i></a>
    //                         </div>
    //                     </div>
    //                     <div className="author">
    //                         <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
    //                         <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
    //                     </div>
    //                 </div>
    //             </div><!--end col-->

    //             <div className="col-lg-4 col-md-6 mt-4 pt-2">
    //                 <div className="card blog rounded border-0 shadow">
    //                     <div className="position-relative">
    //                         <img src="images/blog/03.jpg" className="card-img-top rounded-top" alt="...">
    //                     <div className="overlay rounded-top bg-dark"></div>
    //                     </div>
    //                     <div className="card-body content">
    //                         <h5><a href="javascript:void(0)" className="card-title title text-dark">Smartest Applications for Business</a></h5>
    //                         <div className="post-meta d-flex justify-content-between mt-3">
    //                             <ul className="list-unstyled mb-0">
    //                                 <li className="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>33</a></li>
    //                                 <li className="list-inline-item"><a href="javascript:void(0)" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>08</a></li>
    //                             </ul>
    //                             <a href="page-blog-detail.html" className="text-muted readmore">Read More <i className="mdi mdi-chevron-right"></i></a>
    //                         </div>
    //                     </div>
    //                     <div className="author">
    //                         <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
    //                         <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
    //                     </div>
    //                 </div>
    //             </div><!--end col-->
    //         </div><!--end row-->
    //     </div><!--end container-->
    // </section>
    <></>
  );
}
