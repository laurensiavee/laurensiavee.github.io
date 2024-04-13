import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <>
      <div className="bg-ddb">
        {/* navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark roboto mb-0 nav-fixed">
            <div className="container-fluid w-20 mx-0">
                <p className="text-light mx-0 p-l t-lb daniel-b">v e e</p>
            </div>

            <div className="w-60 center-w mx-0">
                <a className="navbar-brand mp-0" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 center-w">
                        <li className="nav-item"><a className="nav-link active" href="#home">Home</a></li>
                        <li className="nav-item"><a className="nav-link active" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link active" href="#skills">Skills</a></li>
                        <li className="nav-item"><a className="nav-link active" href="#experience">Experience</a></li>
                        <li className="nav-item"><a className="nav-link active" href="#projects">Projects</a></li>
                    </ul>
                </div>
            </div>

            <div className="w-20 mx-0">
                <form className="d-flex justify-content-end me-5">
                    <a href="#contacts" className="btn btn-info me-2 my-1"><b>Contact Me</b></a>
                </form>
            </div>
        </nav>

        {/* home */}
        <section id="home" className="px-5 mb-5">
            <div className="px-3">
                <div className='heading-title-container'>
                    <h1 className='daniel f mt-10'>Hello!</h1>
                </div>

                <div className="my-5">
                    <div>
                        <h3 className="text-center text-white"><b> </b></h3>
                    </div>
                </div>

                <div className="mx-10 px-10 mt-10">
                    <div className="row g-0">
                        <div className="col-md-9">
                            <h3 className="t-wg f-console">I'm</h3>
                            <h1><b className="t-lb f-console px-5">Laurensia Vilda</b></h1>
                            <p className="t-wg f-console px-3">Computer Science Fresh Graduate focused in Intelligent Systems </p>
                            <div className="ps-2 py-4 align-r">
                                <a className='t-lb logo-size mx-2' href="https://github.com/laurensiavee"><FontAwesomeIcon icon={faGithub}/></a>
                                <a className='t-lb logo-size mx-2' href="https://id.linkedin.com/in/laurensia-vy"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            </div>
                        </div>
                        <div className="col-md-3 ps-3">
                            <div className="card mb-3">
                            </div>
                        </div>
                    </div>

                    <div className="row g-0 my-5">
                        <div className="col-md-5 my-2 px-5">
                            <div className="card mb-3">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        {/* about */}
        <section id="about" className="px-5 mb-5">
            <div className="px-3">
                <div className='heading-title-container'>
                    <h1 className='daniel mt-5'>about me .</h1>
                </div>

                <div className='heading-container w-50 center-w'>
                    <p className="roboto f-thicker f-med py-3">I'm Laurensia, Computer Science fresh graduate of Bina Nusantara University and currently looking for roles in Frontend / Fullstack Development.</p>
                    <p className="roboto f-thicker f-med py-3">On University I took focus in Intelligent Systems and enjoy a lot of time learning Artificial Intelligence and Data Science.</p>
                    <p className="roboto f-thicker f-med py-3">I have working experience as a Fullstack Web Developer at Advance Innovation intern for 1 year which then become my full time job for 4 months.</p>
                    <p className="roboto f-thicker f-med py-3">On my free time, I love to draw and enjoy making illustrations.</p>
                    <p className="roboto f-thicker f-med py-3">My current interest is to work as a Frontend Developer and currently looking for jobs opportunity. If you're Interested to works with me, feel free to contact me!</p>
                </div>
            </div>
        </section>

        {/* skills */}
        <section id="skills" className="px-5 mb-5">
            <div className="px-3">
                <div className='heading-title-container'>
                    <h1 className='daniel mt-5'>skills .</h1>
                </div>

                <div className="my-9 w-80 center-w text-white">
                    <hr />
                    <h1 className='daniel f-lg mb-0 ms-0 text-start'>Programming Languages</h1>
                    <hr />

                    <div className="px-4 roboto py-1">
                        Python, Javascript, C#, R, C++, C, Java, PHP
                    </div>
                </div>

                <div className="my-9 w-80 center-w text-white">
                    <hr />
                    <h1 className='daniel f-lg mb-0 ms-0 text-start'>Data Science</h1>
                    <hr />

                    <div className="px-4 roboto py-1">
                        Python, Jupyter Notebook, R Notebook
                    </div>
                    <div className="px-4 roboto py-1">
                        Scikit-learn, Tensorflow, Keras, Scipy, Pandas, Numpy, Matplotlib, Seaborn, Ggplot2
                    </div>
                    <div className="px-4 roboto py-1">
                        Machine Learning, Neural Networks, Classification, Regression, Clustering, Natural Language Processing, Information Retreival
                    </div>
                </div>

                <div className="my-9 w-80 center-w text-white">
                    <hr />
                    <h1 className='daniel f-lg mb-0 ms-0 text-start'>Frontend</h1>
                    <hr />

                    <div className="px-4 roboto py-1">
                        ReactJS, TailwindCSS, Javascript, HTML, CSS, Blade, Bootstrap
                    </div>
                </div>

                <div className="my-9 w-80 center-w text-white">
                    <hr />
                    <h1 className='daniel f-lg mb-0 ms-0 text-start'>Backend</h1>
                    <hr />

                    <div className="px-4 roboto py-1">
                        Flask, Laravel, ASP.NET
                    </div>
                    <div className="px-4 roboto py-1">
                        Python, C#, PHP
                    </div>
                </div>

                <div className="my-9 w-80 center-w text-white">
                    <hr />
                    <h1 className='daniel f-lg mb-0 ms-0 text-start'>Database</h1>
                    <hr />

                    <div className="px-4 roboto py-1">
                        SQL, SQL Server, MySQL, SQLAlchemy
                    </div>
                </div>

                <div className="my-9 w-80 center-w text-white">
                    <hr />
                    <h1 className='daniel f-lg mb-0 ms-0 text-start'>Tools</h1>
                    <hr />

                    <div className="px-4 roboto py-1">
                        Version Control: GIT, TFS
                    </div>
                    <div className="px-4 roboto py-1">
                        Postman
                    </div>
                </div>
            </div>
        </section>

        {/* experience */}
        <section id="experience" className="px-5 mb-5">
            <div className="px-3">
                <div className='heading-title-container'>
                    <h1 className='daniel mt-5'>experience</h1>
                </div>

                <div className="timeline-container">
                    <div className="timeline">
                        <div className="tl-container tl-right">
                            <div className="tl-content">
                                <h2 className="daniel-b ">july 2023</h2>
                                <h5>Graduate!</h5>
                                <p className="t-justify tl-desc">Completed my Thesis Defense on may and soon to be graduate with Computer Science degree.</p>
                            </div>
                        </div>
                        <div className="tl-container tl-left">
                            <div className="tl-content">
                                <h2 className="daniel-b text-end">feb 2023</h2>
                                <h5>Junior Developer</h5>
                                <p className="t-justify tl-desc">Fullstack Web Developer at Advance Inovation (Contract). Develop Change Request from client for multifinace based app 'CONFINS'. Partook on CPS (CONFINS Priority Support) Team and collaborate with clients.</p>
                            </div>
                        </div>
                        <div className="tl-container tl-right">
                            <div className="tl-content">
                                <h2 className="daniel-b ">feb 2022</h2>
                                <h5>Fullstack Web Developer</h5>
                                <p className="t-justify tl-desc">Fullstack Web Developer at Advance Inovation (Internship). Develop Change Request from client for multifinace based app 'CONFINS'.</p>
                            </div>
                        </div>
                        <div className="tl-container tl-left">
                            <div className="tl-content">
                                <h2 className="daniel-b text-end ">sept 2019</h2>
                                <h5>Computer Science Student</h5>
                                <p className="t-justify tl-desc">Student at Bina Nusantara University. Start University for Computer Science Degree, Took streaming on Intellegent Systems</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* projects */}
        <section id="projects" className="px-5 mb-5">
            <div className="px-3">
                <div className='heading-title-container'>
                    <h1 className='daniel mt-5'>projects</h1>
                    <br />
                    <a href="https://github.com/laurensiavee/portfolio" className="px-2 py-2">
                        <span className="bg-gb text-white rounded-pill px-2 mx-1 py-2 my-0 pill-ell">
                            <span className="t-lb mpy-0 me-1 logo-size-sm"><FontAwesomeIcon icon={faGithub}/></span>
                            Portfolio Repository
                        </span>
                    </a>
                </div>

                <div className='heading-container'>
                    <h1 className='daniel f-lg mb-0 ms-0 text-start'>Data Science</h1>
                    <hr />

                    <div className="container-fluid mb-5">
                        <div className="row justify-content-center">

                            <a className="col-sm-auto align-self-center ps-0 pe-1" href="https://github.com/laurensiavee/anime-recommender">
                                <div className="card text-white border-dark bg-dark bg-opacity-10 mb-5 card-whh">
                                    <img src="https://raw.githubusercontent.com/laurensiavee/portfolio/main/img/1_kny.png" className="card-img-top img-whh" />
                                    <div className="card-body bg-dark text-white">
                                        <div className="row g-0">
                                            <div className="col-md-11">
                                                <div className="card-title mpy-0"><b>Anime Recommender</b></div>
                                                <p className=" px-2 py-0 t-justify card-desc">
                                                    Anime Recommender with content-based and collaborative filtering.
                                                </p>
                                            </div>
                                            <div className="col-md-1 text-end">
                                                <p className="t-lb mpy-0 logo-size-sm"><FontAwesomeIcon icon={faGithub}/></p>
                                            </div>
                                        </div>
                                        <div className="mt-2 text-start">
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Python
                                            </span>
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Jupyter Notebook
                                            </span>
                                            <span className="bg-gb text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Information Retreival
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a className="col-sm-auto align-self-center ps-0 pe-1" href="https://github.com/laurensiavee/customer-churn-prediction">
                                <div className="card text-white border-dark bg-dark bg-opacity-10 mb-5 card-whh">
                                    <img src="https://raw.githubusercontent.com/laurensiavee/portfolio/main/img/cust-churn-img.jpeg" className="card-img-top img-whh" />
                                    <div className="card-body bg-dark text-white">
                                        <div className="row g-0">
                                            <div className="col-md-11">
                                                <div className="card-title mpy-0"><b>Customer Churn Prediction</b></div>
                                                <p className=" px-2 py-0 t-justify card-desc">
                                                    Predict whether a customer will churn or not. Accuracy reached 88%.
                                                </p>
                                            </div>
                                            <div className="col-md-1 text-end">
                                                <p className="t-lb mpy-0 logo-size-sm"><FontAwesomeIcon icon={faGithub}/></p>
                                            </div>
                                        </div>
                                        <div className="mt-2 text-start">
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Python
                                            </span>
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Jupyter Notebook
                                            </span>
                                            <span className="bg-gb text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Machine Learning
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>


                            <a className="col-sm-auto align-self-center ps-0 pe-1" href="https://github.com/laurensiavee/customer-churn-prediction/tree/main/customer-clustering">
                                <div className="card text-white border-dark bg-dark bg-opacity-10 mb-5 card-whh">
                                    <img src="https://raw.githubusercontent.com/laurensiavee/customer-churn-prediction/main/customer-clustering/plot/6.png" className="card-img-top img-whh" />
                                    <div className="card-body bg-dark text-white">
                                        <div className="row g-0">
                                            <div className="col-md-11">
                                                <div className="card-title mpy-0"><b>Customer Clustering</b></div>
                                                <p className=" px-2 py-0 t-justify card-desc">
                                                    Customer Clustering with K-means + DBSCAN and dimensionality reduction with PCA.
                                                </p>
                                            </div>
                                            <div className="col-md-1 text-end">
                                                <p className="t-lb mpy-0 logo-size-sm"><FontAwesomeIcon icon={faGithub}/></p>
                                            </div>
                                        </div>
                                        <div className="mt-2 text-start">
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Python
                                            </span>
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Jupyter Notebook
                                            </span>
                                            <span className="bg-gb text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Unsupervised Learning
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a className="col-sm-auto align-self-center ps-0 pe-1" href="https://github.com/laurensiavee/fraud-job-posting">
                                <div className="card text-white border-dark bg-dark bg-opacity-10 mb-5 card-whh">
                                    <img src="https://raw.githubusercontent.com/laurensiavee/portfolio/main/img/fraud.png" className="card-img-top img-whh" />
                                    <div className="card-body bg-dark text-white">
                                        <div className="row g-0">
                                            <div className="col-md-11">
                                                <div className="card-title mpy-0"><b>Fraud Detection</b></div>
                                                <p className=" px-2 py-0 t-justify card-desc">
                                                    Fraud detection on Job Posting. Accuracy reached 86%.
                                                </p>
                                            </div>
                                            <div className="col-md-1 text-end">
                                                <p className="t-lb mpy-0 logo-size-sm"><FontAwesomeIcon icon={faGithub}/></p>
                                            </div>
                                        </div>
                                        <div className="mt-2 text-start">
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Python
                                            </span>
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Jupyter Notebook
                                            </span>
                                            <span className="bg-gb text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                NLP
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a className="col-sm-auto align-self-center ps-0 pe-1" href="https://github.com/laurensiavee/insurance-medical-cost-pred">
                                <div className="card text-white border-dark bg-dark bg-opacity-10 mb-5 card-whh">
                                    <img src="https://raw.githubusercontent.com/laurensiavee/portfolio/main/img/insurance.jpg" className="card-img-top img-whh" />
                                    <div className="card-body bg-dark text-white">
                                        <div className="row g-0">
                                            <div className="col-md-11">
                                                <div className="card-title mpy-0"><b>Insurance Cost Forecast</b></div>
                                                <p className=" px-2 py-0 t-justify card-desc">
                                                    Predict Medical Insurance Cost (Regression)
                                                </p>
                                            </div>
                                            <div className="col-md-1 text-end">
                                                <p className="t-lb mpy-0 logo-size-sm"><FontAwesomeIcon icon={faGithub}/></p>
                                            </div>
                                        </div>
                                        <div className="mt-2 text-start">
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                R
                                            </span>
                                            <span className="bg-gb text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Machine Learning
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a className="col-sm-auto align-self-center ps-0 pe-1" href="https://github.com/laurensiavee/mnist-digit-recognition">
                                <div className="card text-white border-dark bg-dark bg-opacity-10 mb-5 card-whh">
                                    <img src="https://raw.githubusercontent.com/laurensiavee/mnist-digit-recognition/main/plot/2.png" className="card-img-top img-whh" />
                                    <div className="card-body bg-dark text-white">
                                        <div className="row g-0">
                                            <div className="col-md-11">
                                                <div className="card-title mpy-0"><b>Handwritten Digit Recognizer</b></div>
                                                <p className=" px-2 py-0 t-justify card-desc">
                                                    MNIST digit recognizer with CNN. Acuracy reached 99.3%.
                                                </p>
                                            </div>
                                            <div className="col-md-1 text-end">
                                                <p className="t-lb mpy-0 logo-size-sm"><FontAwesomeIcon icon={faGithub}/></p>
                                            </div>
                                        </div>
                                        <div className="mt-2 text-start">
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Python
                                            </span>
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Jupyter Notebook
                                            </span>
                                            <span className="bg-gb text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                CNN
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a className="col-sm-auto align-self-center ps-0 pe-1" href="https://github.com/laurensiavee/covid-tweets-sentiment">
                                <div className="card text-white border-dark bg-dark bg-opacity-10 mb-5 card-whh">
                                    <img src="https://raw.githubusercontent.com/laurensiavee/covid-tweets-sentiment/main/img/1_covid.png" className="card-img-top img-whh" />
                                    <div className="card-body bg-dark text-white">
                                        <div className="row g-0">
                                            <div className="col-md-11">
                                                <div className="card-title mpy-0"><b>Sentiment Analysis</b></div>
                                                <p className=" px-2 py-0 t-justify card-desc">
                                                    Sentiment Analysis on Covid Tweets. Accuracy reached 80%. NLP and Classification with BERT.
                                                </p>
                                            </div>
                                            <div className="col-md-1 text-end">
                                                <p className="t-lb mpy-0 logo-size-sm"><FontAwesomeIcon icon={faGithub}/></p>
                                            </div>
                                        </div>
                                        <div className="mt-2 text-start">
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Python
                                            </span>
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Jupyter Notebook
                                            </span>
                                            <span className="bg-gb text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                NLP
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a className="col-sm-auto align-self-center ps-0 pe-1" href="https://github.com/laurensiavee/orange-vs-grape">
                                <div className="card text-white border-dark bg-dark bg-opacity-10 mb-5 card-whh">
                                    <img src="https://raw.githubusercontent.com/laurensiavee/orange-vs-grape/main/plot/3.png" className="card-img-top img-whh" />
                                    <div className="card-body bg-dark text-white">
                                        <div className="row g-0">
                                            <div className="col-md-11">
                                                <div className="card-title mpy-0"><b>Orange vs Grape</b></div>
                                                <p className=" px-2 py-0 t-justify card-desc">
                                                    Citrus data classifier. Accuracy reached 98.5%.
                                                </p>
                                            </div>
                                            <div className="col-md-1 text-end">
                                                <p className="t-lb mpy-0 logo-size-sm"><FontAwesomeIcon icon={faGithub}/></p>
                                            </div>
                                        </div>
                                        <div className="mt-2 text-start">
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Python
                                            </span>
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Jupyter Notebook
                                            </span>
                                            <span className="bg-gb text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Machine Learning
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>

                <div className='heading-container'>
                    <h1 className='daniel f-lg mb-0 ms-0 text-start'>Web Development</h1>
                    <hr />

                    <div className="container-fluid mb-5">
                        <div className="row justify-content-center">

                            <a className="col-sm-auto align-self-center ps-0 pe-1" href="https://github.com/laurensiavee/to-do-list">
                                <div className="card text-white border-dark bg-dark bg-opacity-10 mb-5 card-whh">
                                    <img src="https://raw.githubusercontent.com/laurensiavee/portfolio/main/img/plain-black.jpg" className="card-img-top img-whh" />
                                    <div className="card-body bg-dark text-white">
                                        <div className="row g-0">
                                            <div className="col-md-11">
                                                <div className="card-title mpy-0"><b>Todo List</b></div>
                                                <p className=" px-2 py-0 t-justify card-desc">
                                                    Simple todo list with React-js and TailwindCSS.
                                                </p>
                                            </div>
                                            <div className="col-md-1 text-end">
                                                <p className="t-lb mpy-0 logo-size-sm"><FontAwesomeIcon icon={faGithub}/></p>
                                            </div>
                                        </div>
                                        <div className="mt-2 text-start">
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                ReactJS
                                            </span>
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                TailwindCSS
                                            </span>
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                HTML
                                            </span>
                                            <span className="bg-gb text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Frontend
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a className="col-sm-auto align-self-center ps-0 pe-1" href="https://github.com/laurensiavee/simple-calculator">
                                <div className="card text-white border-dark bg-dark bg-opacity-10 mb-5 card-whh">
                                    <img src="https://raw.githubusercontent.com/laurensiavee/simple-calculator/main/calc.PNG" className="card-img-top img-whh" />
                                    <div className="card-body bg-dark text-white">
                                        <div className="row g-0">
                                            <div className="col-md-11">
                                                <div className="card-title mpy-0"><b>Calculator</b></div>
                                                <p className=" px-2 py-0 t-justify card-desc">
                                                    Simple calculator made with Vanilla JS.
                                                </p>
                                            </div>
                                            <div className="col-md-1 text-end">
                                                <p className="t-lb mpy-0 logo-size-sm"><FontAwesomeIcon icon={faGithub}/></p>
                                            </div>
                                        </div>
                                        <div className="mt-2 text-start">
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Javascript
                                            </span>
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                HTML
                                            </span>
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                CSS
                                            </span>
                                            <span className="bg-gb text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Frontend
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a className="col-sm-auto align-self-center ps-0 pe-1" href="https://github.com/laurensiavee/tic-tac-toe">
                                <div className="card text-white border-dark bg-dark bg-opacity-10 mb-5 card-whh">
                                    <img src="https://raw.githubusercontent.com/laurensiavee/portfolio/main/img/plain-black.jpg" className="card-img-top img-whh" />
                                    <div className="card-body bg-dark text-white">
                                        <div className="row g-0">
                                            <div className="col-md-11">
                                                <div className="card-title mpy-0"><b>Tic Tac Toe</b></div>
                                                <p className=" px-2 py-0 t-justify card-desc">
                                                    Simple tic tac toe made with Vanilla JS.
                                                </p>
                                            </div>
                                            <div className="col-md-1 text-end">
                                                <p className="t-lb mpy-0 logo-size-sm"><FontAwesomeIcon icon={faGithub}/></p>
                                            </div>
                                        </div>
                                        <div className="mt-2 text-start">
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Javascript
                                            </span>
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                HTML
                                            </span>
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                CSS
                                            </span>
                                            <span className="bg-gb text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Frontend
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a className="col-sm-auto align-self-center ps-0 pe-1" href="https://github.com/laurensiavee/poke-wiki">
                                <div className="card text-white border-dark bg-dark bg-opacity-10 mb-5 card-whh">
                                    <img src="https://raw.githubusercontent.com/laurensiavee/portfolio/main/img/plain-black.jpg" className="card-img-top img-whh" />
                                    <div className="card-body bg-dark text-white">
                                        <div className="row g-0">
                                            <div className="col-md-11">
                                                <div className="card-title mpy-0"><b>Poke wiki</b></div>
                                                <p className=" px-2 py-0 t-justify card-desc">
                                                    Simple pokemon wikipedia with PokeAPI
                                                </p>
                                            </div>
                                            <div className="col-md-1 text-end">
                                                <p className="t-lb mpy-0 logo-size-sm"><FontAwesomeIcon icon={faGithub}/></p>
                                            </div>
                                        </div>
                                        <div className="mt-2 text-start">
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                ReactJS
                                            </span>
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                TailwindCSS
                                            </span>
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                HTML
                                            </span>
                                            <span className="bg-mb2 text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Webpack
                                            </span>
                                            <span className="bg-gb text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                Frontend
                                            </span>
                                            <span className="bg-gb text-white rounded-pill px-2 mx-1 py-0 my-3 pill-ell">
                                                API
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* contacts */}
        <section id="contacts" className="px-5 mb-5">
            <div className="px-3">
                <div className='heading-title-container'>
                    <h1 className='daniel f my-5'>Contact me!</h1>
                </div>

                <div className="my-9 w-80 center-w text-white">
                    <hr />
                    <h1 className='daniel f-lg mb-0 ms-0 text-center'>Laurensia Vilda</h1>
                    <hr />

                    <div className="text-center">
                        <span className="roboto py-1 text-center px-2"><b>
                            <a className="t-lb px-2 logo-size" href="https://github.com/laurensiavee"><FontAwesomeIcon icon={faGithub}/></a>
                            laurensiavee
                        </b></span>
                        <span className="roboto py-1 text-center px-2"><b>
                            <a className="t-lb px-2 logo-size" href="https://id.linkedin.com/in/laurensia-vy"><FontAwesomeIcon icon={faLinkedin}/></a>
                            Laurensia Vilda
                        </b></span>
                    </div>
                    <hr />
                    <hr />
                </div>
            </div>
        </section>

        {/* scroll to top */}
        <section className="mx-10 my-5 text-end">
            <a href="#home" className="btn btn-info">Scroll to top</a>
        </section>

        {/* footer */}
        <footer className="foot">
            <div className="mx-7 px-10 my-5 text-center">
                <h2 className="daniel line-h">Contact</h2>
                <a className="t-lb ps-3 logo-size-sm" href="https://github.com/laurensiavee"></a>
                laurensiavee
                <a className="t-lb ps-3 logo-size-sm" href="https://id.linkedin.com/in/laurensia-vy"><FontAwesomeIcon icon={faGithub}/></a>
                Laurensia Vilda
            </div>

            <p className="roboto text-center text-muted px-0"><b>© 2023 laurensiavee. All right reserved.</b></p>
        </footer>

      </div>
    </>
  );
}
