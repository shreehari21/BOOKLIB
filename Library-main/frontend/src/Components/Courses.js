import React from 'react';
import '../Styles.css';
const Courses = () => {
  return (
    <div className="bg-light vh">
      <br />
      <div className="row">
        <div className="col mx-5">
        </div>
      </div>
      <h2 className='px-4 jamaica'>Books we offer for Skill Development</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-4">
        <div className="col">
          <div className="card">
            <img src="https://contentstatic.techgig.com/photo/90325682.cms" className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">C</h5>
              <p className="card-text">
                C is a general-purpose programming language known for its efficiency and low-level control over hardware.
                It was developed in the early 1970s by Dennis Ritchie and is widely used for system programming and
                developing applications in various domains.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230703144619/CPP-Language.png"
              className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">C++</h5>
              <p className="card-text">C++ is a powerful and versatile programming language that combines the features
                of both high-level and low-level programming. It is widely used for developing efficient software
                applications, including system software, games, and embedded systems.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://contentstatic.techgig.com/photo/93000110/What-makes-Java-still-popular-among-developers.jpg"
              className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">Java</h5>
              <p className="card-text">Java is a widely used programming language known for its platform independence
                and object-oriented approach. With its robust libraries and extensive community support, Java is favored
                for developing scalable and secure applications across various domains.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://ciracollege.com/wp-content/uploads/2020/11/How-to-Learn-Python.jpg"
              className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">Python</h5>
              <p className="card-text">Python is a powerful and versatile programming language known for its simplicity
                and readability, making it an excellent choice for both beginners and experienced developers. With its
                extensive libraries and frameworks, Python empowers developers to build a wide range of applications.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://global-uploads.webflow.com/618fa90c201104b94458e1fb/62f25059bc47b274d9fe73c3_Top-10-best-VSCode-extensions-for-React-js_MAin-Image.jpg"
              className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">React JS</h5>
              <p className="card-text">React JS is a popular JavaScript library for building user interfaces. It uses a
                component-based approach, allowing developers to create reusable UI elements that efficiently update and
                render only the necessary parts of the application, resulting in fast and responsive web experiences.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://i.ytimg.com/vi/1Oh7PTpEkGg/maxresdefault.jpg" className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">Java Script</h5>
              <p className="card-text">JavaScript is a versatile programming language used for creating interactive and
                dynamic web content. With its wide range of libraries and frameworks, JavaScript empowers developers to
                build powerful applications that run seamlessly across different platforms.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Courses;