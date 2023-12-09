function Footer() {
  return (
    <footer>
      <div className="bg-[#222222] text-gray-400 p-10">
        <div className="max-w-screen-xl mx-auto flex justify-between">
          <div className="text-white text-xl font-bold mb-4 font-Onest">
            PaiSHA
          </div>

          <div className="space-y-2 font-Onest">
            <h2 className="text-white font-semibold mb-2 ">Features</h2>
            <ul>
              <li>University Information</li>
              <li>Career Recommendation</li>
              <li>Expert Consultancy</li>
            </ul>
          </div>
          <div className="space-y-2 font-Onest">
            <h2 className="text-white font-semibold mb-2">Info</h2>
            <ul>
              <li>About Us</li>
              <li>Expert Information</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="space-y-2 font-Onest">
            <h2 className="text-white font-semibold mb-2">Legal</h2>
            <ul>
              <li>Terms & Conditions</li>

              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center text-white font-Onest">
          © PaiSHA 2023
        </div>
      </div>
    </footer>
  );
}

export default Footer;
