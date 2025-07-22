import React from 'react';
import { FOOTER_SECTIONS, SOCIAL_LINKS } from './constants';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FOOTER_SECTIONS.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <div className="text-xs font-medium text-gray-400 uppercase">
                {section.title}
              </div>
              {section.links.map((link, linkIndex) => (
                <a 
                  key={linkIndex}
                  href="#" 
                  className="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
                  style={{ marginTop: linkIndex === 0 ? '1.25rem' : '0.75rem' }}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <hr className="my-10 border-gray-200 dark:border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-400">{`© Copyright ${new Date().getFullYear()}. Todos los derechos reservados.`}</p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            {SOCIAL_LINKS.map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" 
                aria-label={social.ariaLabel}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};