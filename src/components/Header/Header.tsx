import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/rmdb-logo.svg';
import logoSmall from 'public/rmdb-logo-small.svg';

const Header = () => {
  return (
    <div className='sticky flex top-0 z-40 w-full h-24 bg-zinc-900'>
      <div className='flex justify-between w-full h-full max-w-7xl px-4'>
        <Link href='/'>
          <div className='flex items-center cursor-pointer'>
            <div className='invisible md:visible'>
              <Image src={logo} width='150' height='50' alt='rmdb-logo' />
            </div>
            <div className='absolute md:invisible'>
              <Image
                src={logoSmall}
                width='42'
                height='42'
                alt='rmdb-logo-small'
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
