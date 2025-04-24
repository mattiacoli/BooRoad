export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-light p-4 mt-5 rounded-top">

        <div className="row justify-content-between align-items-center">
          <div className="col-4">
            <img src="src/assets/logo.png" style={{ width: "200px" }} alt="" />
          </div>
          <div className="col-8">

            <ul className="list-unstyled d-flex gap-4 justify-content-end">
              <li className="">
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>

          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p>© 2025 Your Company. All rights reserved.</p>
          </div>
        </div>

      </footer>
    </>
  )
}