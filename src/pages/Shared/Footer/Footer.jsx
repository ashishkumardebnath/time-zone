const Footer = () => {
  return (
    <div className="mt-28 bg-gray-50">
      <footer className="footer py-10 max-w-screen-xl mx-auto ">
        <aside>
          <h3 className="lg:text-3xl text-2xl font-semibold mb-4 ">
            Time <span className="text-[#ff2022]">Zone</span>
          </h3>
          <p className="font-sans">
            Asorem ipsum adipolor sdit amet, <br /> consectetur adipisicing
            elitcf <br /> sed do eiusmod tem.
          </p>
        </aside>
        <nav className="font-sans">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="font-sans">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="font-sans">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="divider"></div>
      <footer className="footer footer-center mb-6 font-sans">
        <aside>
          <p>Copyright © 2024 - All right reserved by Dream-Developer</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
