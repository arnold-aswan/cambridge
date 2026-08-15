import { Link } from '@tanstack/react-router'
import { Button } from './ui/button'
import { useEffect, useState } from 'react';

interface NavMenuItems {
  label: string;
  href: string;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navMenu: NavMenuItems[] = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Services',
      href: '/services',
    },
    {
      label: 'Eyewear',
      href: '/eyewear',
    },
    {
      label: 'Contact Lenses',
      href: '/contact-lenses',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ]
  return (
    <header className={`
        fixed left-1/2 z-50 w-full max-w-[1177px] -translate-x-1/2 px-4
        transition-all duration-300 ease-in-out rounded-xl bg-(--header-bg)
        ${scrolled
        ? "top-0 shadow-md"
        : "top-25"
      }
        border-b border-(--line)
      `}>
      <nav className="page-wrap flex flex-wrap items-center justify-between gap-x-3 gap-y-2 py-3 sm:py-4">
        <h2 className="m-0 text-xl font-semibold tracking-tight">
          <Link
            to="/"
            className='dark-blue-text'
          >
            Cambridge Opticians
          </Link>
        </h2>

        <div className="flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-sm font-semibold sm:w-auto sm:flex-nowrap sm:pb-0">
          {navMenu?.map((item: NavMenuItems) => (
            <Link
              to={item?.href}
              key={item?.label}
              className="nav-link uppercase "
              activeProps={{ className: 'nav-link is-active' }}
            >
              {item?.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Button className='bg-(--dark-blue) text-white text-xs font-semibold uppercase'>Book Appointment</Button>
        </div>
      </nav>
    </header>
  )
}
