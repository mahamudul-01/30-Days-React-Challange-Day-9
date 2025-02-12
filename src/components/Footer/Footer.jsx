import footerImg from "../../assets/icons/social.png";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-[#1A1919] text-gray-400 p-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 justify-between ">
          <aside className="">
            <h2 className="text-4xl text-white">Work Wave</h2>
            <p className="text-base text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis libero in dui sollicitudin, at volutpat diam ultricies.
              Donec sit amet nunc nec nibh ultrices fringilla. Nulla facilisi.
            </p>
            <img src={footerImg} alt="" />
          </aside>
          <nav className="text-base text-gray-600 space-y-4">
            <h6 className="text-xl text-white">Company</h6>
            <h2>About Us</h2>
            <h2>Work</h2>
            <h2>Latest News</h2>
            <h2>Careers</h2>
          </nav>
          <nav className="text-base text-gray-600 space-y-4">
            <h6 className="text-xl text-white">Product</h6>
            <h2>Prototyping</h2>
            <h2>Plans & Pricing</h2>
            <h2>Customers</h2>
            <h2>Integrations</h2>
          </nav>
          <nav className="text-base text-gray-600 space-y-4">
            <h6 className="text-xl text-white">Support</h6>

            <h2>Help Desk</h2>
            <h2>Sales</h2>
            <h2>Become a Partner</h2>
            <h2>Developers</h2>
          </nav>
          <nav className="text-base text-gray-600 space-y-4">
            <h6 className="text-xl text-white">Contact</h6>

            <h2>+8801717314816</h2>
            <h2 className="underline">mahamudulofficial.info@gmail.com</h2>
          </nav>
        </div>
        <div className="divider mt-6 mb-6 "></div>
        <div className="flex justify-between">
            <p className="text-base">©️2025 <span className="font-bold">Work Wave </span>| All rights reserved</p>
            <p className="text-base">Powered by Work Wave</p>
        </div>
      </footer>
      
    </div>
  );
};

export default Footer;
