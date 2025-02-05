import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Company Name and Copyright */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800">Hire Circle</h2>
            <p className="text-sm text-gray-600">© 2024 Hire Circle. All rights reserved.</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" className="text-gray-700 hover:text-gray-500" aria-label="Facebook">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.326v21.348C0 23.402.597 24 1.325 24h11.495v-9.294H9.69v-3.622h3.13V8.41c0-3.1 1.892-4.788 4.656-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.917c-1.504 0-1.794.716-1.794 1.764v2.31h3.588l-.467 3.622h-3.121V24h6.116c.728 0 1.325-.598 1.325-1.326V1.326C24 .598 23.403 0 22.675 0z" />
              </svg>
            </a>

            <a href="https://twitter.com" className="text-gray-700 hover:text-gray-500" aria-label="Twitter">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.693 4.693 0 0 0 2.063-2.6 9.235 9.235 0 0 1-2.926 1.12A4.636 4.636 0 0 0 16.44 3c-2.632 0-4.777 2.155-4.777 4.81 0 .377.042.744.125 1.096a13.15 13.15 0 0 1-9.548-4.867 4.84 4.84 0 0 0-.646 2.418c0 1.668.843 3.14 2.125 4.004a4.6 4.6 0 0 1-2.162-.603v.06c0 2.33 1.627 4.273 3.785 4.713a4.728 4.728 0 0 1-2.157.084c.606 1.902 2.368 3.287 4.45 3.326a9.305 9.305 0 0 1-5.79 2.016c-.376 0-.75-.022-1.12-.065a13.078 13.078 0 0 0 7.113 2.092c8.533 0 13.204-7.12 13.204-13.29 0-.2-.004-.4-.014-.598a9.587 9.587 0 0 0 2.356-2.465z" />
              </svg>
            </a>

            <a href="https://linkedin.com" className="text-gray-700 hover:text-gray-500" aria-label="LinkedIn">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.23 0H1.77C.792 0 0 .77 0 1.723V22.28C0 23.23.792 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.723V1.723C24 .77 23.21 0 22.23 0zM7.06 20.451H3.56V8.996h3.5v11.455zM5.31 7.564a2.05 2.05 0 1 1 0-4.1 2.05 2.05 0 0 1 0 4.1zM20.451 20.451h-3.497v-5.602c0-1.337-.027-3.064-1.864-3.064-1.864 0-2.15 1.46-2.15 2.967v5.699H9.442V8.996h3.35v1.563h.047c.467-.887 1.605-1.822 3.305-1.822 3.54 0 4.307 2.328 4.307 5.357v6.357z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


