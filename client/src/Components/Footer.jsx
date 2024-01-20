import React from 'react'

export const Footer = () => {
  return (
    <div>
        {/* <!-- Footer Start --> */}
    <div className="container-fluid bg-info text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="container text-center py-5">
            <div className="d-flex justify-content-center mb-4">
                <a className="btn btn-light btn-social mx-2" rel="noreferre" href="https://www.instagram.com/ankybisen/"><i className="bi bi-instagram"></i></a>
                <a className="btn btn-light btn-social mx-2" rel="noreferre" href="https://github.com/ankitbisen28"><i className="bi bi-github"></i></a>
                <a className="btn btn-light btn-social mx-2" rel="noreferre" href="https://www.linkedin.com/in/ankit-bisen-0a4587208/"><i className="bi bi-linkedin"></i></a>
                <a className="btn btn-light btn-social" rel="noreferre" href="https://twitter.com/ankitbisen28"><i className="bi bi-twitter"></i></a>
            </div>
            <div className="d-flex justify-content-center mb-3">
                <a className="text-white" href="/">Privacy</a>
                <span className="px-3">|</span>
                <a className="text-white" href="/">Terms</a>
                <span className="px-3">|</span>
                <a className="text-white" href="/">FAQs</a>
                <span className="px-3">|</span>
                <a className="text-white" href="/">Help</a>
            </div>
            <p className="m-0">&copy; <a className="text-white font-weight-bold" href="/">Domain Name</a>. All Rights Reserved. Designed by <a className="text-white font-weight-bold" href="https://htmlcodex.com">HTML Codex</a>
            </p>
        </div>
    </div>
    {/* <!-- Footer End --> */}
    </div>
  )
}
