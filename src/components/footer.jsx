import React from 'react';
import Logo from '../images/icon.png'
import { FaInstagram, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const getCurrentYear = () => {
  return new Date().getFullYear();
}

const Footer = () => {
  return (
    <footer className='bg-black text-white text-center mt-auto' > 
    <div className='md:flex md:justify-center items-center md:items-center sm:px-0 bg-black py-0 h-12 mt-4 '>
      {/* <h1 className=' lg:text-4x1 text-3x1 md:mb-0 mb-6 lg:leading-normal md:w-2/5 '
      ><span className='font-semibold'>hello world</span>, this is footer</h1> */}
      <img src={Logo} alt="Anveshna Logo" className="object-center h-12 md:h-8 pl-4 pb-0 pt-2 justify-center	" />
    </div>
      <div className='flex w-full mb-0 border-b-2 border-gray-900'>
      <p className='pl-4 flex text-left md:text-center w-full lg:text-4x1 text-3x1 md:mb-3 mb-4  lg:leading-normal text-xs md:text-[10px] md:mr-4'>Situs web ini tidak menyimpan file apa pun di servernya. Sebaliknya, ini hanya menyediakan tautan ke konten media yang dihosting oleh layanan pihak ketiga.</p>
      </div>
      <div className='flex p-4 mb-0 pb-0 text-gray-400 text-[13px] md:flex-col items-center'  >
        <div >&#169; {getCurrentYear()} Nazri Anime.  |  Website made by <a href="https://github.com/XyraaCode" className='font-semibold text-white'>Nazri XD</a> </div>
        <div className='felx ml-96 mr-64 md:mr-0 md:ml-0 md:py-2 items-center md:justify-start justify-center'>
          <a href="/about" className='text-gray-400 hover:font-semibold ease-out duration-300 ...'>About</a> | <a href="/contact" className='text-gray-400 hover:font-semibold ease-in duration-300 ...'>Contact</a> | <a href="/privacy" className='text-gray-400 hover:font-semibold ease-out duration-300 ...'>Privacy Policy</a>
        </div>
        <div className='flex ml-auto mr-4 md:items-center	justify-center	md:p-1 md:m-0 md:w-full'>
        {[
                {
                  href: 'https://twitter.com/xyraacode',
                  Icon: FaTwitter,
                  label: 'Twitter',
                },
                {
                  href: 'https://instagram.com/xyraacode',
                  Icon: FaInstagram,
                  label: 'Instagram',
                },
                {
                  href: 'https://github.com/xyraacode',
                  Icon: FaGithub,
                  label: 'GitHub',
                },
                {
                  href: 'https://linkedin.com/xyraacode',
                  Icon: FaLinkedin,
                  label: 'LinkedIn',
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1 mt-auto mb-5 focus:outline-none text-gray-600 md:text-gray-600 ml-2 scale-125 hover:text-white hover:scale-150 ease-out duration-300 ..."
                >
                  <Icon />
                </a>
                
            ))}
        </div>
      </div>

    </footer>
  )
}

export default Footer
