import {
  bottomLinks,
  companyLinks,
  customerLinks,
  supportLinks,
} from "@/contants/footerConstants";
import React from "react";
import { Link } from "react-router-dom";

const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className='font-bold text-lg mb-4'>{title}</h3>
    <ul className='space-y-3'>
      {links.map((link) => (
        <li key={link.to}>
          <Link to={link.to} className='text-gray-600 hover:text-gray-900'>
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const SocialIcons = ({ href, path }) => (
  <a href={href} className='text-gray-600 hover:text-gray-900'>
    <svg
      className='w-6 h-6'
      fill='currentColor'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path d={path} />
    </svg>
  </a>
);

function Footer() {
  return (
    <footer className='bg-gray-50 pt-16 pb-12'>
      <div className='container mx-auto px-4'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Column 1 - For Customers */}
          <FooterColumn title='برای مشتریان' links={customerLinks} />

          {/* Column 2 - Support */}
          <FooterColumn title='پشتیبانی' links={supportLinks} />

          {/* Column 3 - Company */}
          <FooterColumn title='شرکت' links={companyLinks} />

          {/* Column 4 - Social */}
          <div>
            <SocialIcons />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='border-t border-gray-200 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-500 text-sm'>
              © 2024 فروشگاه شما. تمامی حقوق محفوظ است.
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              {bottomLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className='text-gray-500 text-sm hover:text-gray-900'
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
