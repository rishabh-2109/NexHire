import React from "react";
import { Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* About Us */}
        <div>
          <h2 className="text-base font-semibold text-white mb-2">About Us</h2>
          <p className="text-sm leading-relaxed">
            NexHire connects job seekers and companies with smart and fast hiring solutions.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-base font-semibold text-white mb-2">Contact</h2>
          <p className="text-sm">
            Email: <a href="mailto:support@nexhire.com" className="hover:text-white">support@nexhire.com</a><br />
            Phone: +91 99999 99999<br />
            Address: IIT Jammu, India
          </p>
        </div>

        {/* Connect */}
        <div>
          <h2 className="text-base font-semibold text-white mb-2">Connect with Us</h2>
          <div className="flex space-x-3 mt-1">
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18} /></a>
            <a href="#" aria-label="GitHub" className="hover:text-white"><Github size={18} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs text-gray-600 mt-4">
        © {new Date().getFullYear()} NexHire. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
