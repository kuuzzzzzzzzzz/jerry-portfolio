import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

const links = [
  { label: '项目', href: '#projects' },
  { label: '技能', href: '#skills' },
  { label: '经历', href: '#experience' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="animate-fade-down relative z-20 px-5 py-4 sm:px-8 sm:py-5 lg:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a
          aria-label="返回首页"
          className="flex items-center gap-2 text-gray-900"
          href="#top"
        >
          <Logo className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="text-[13px] font-medium">JERRY</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            className="flex items-center gap-1 text-[13px] text-gray-700 transition-colors hover:text-gray-900"
            href="#projects"
          >
            作品集
            <ChevronDown aria-hidden="true" className="h-3.5 w-3.5" />
          </a>
          {links.slice(1).map((link) => (
            <a
              className="text-[13px] text-gray-700 transition-colors hover:text-gray-900"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            className="rounded-full bg-gray-900 px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-gray-800 sm:px-5"
            href="#contact"
          >
            联系我
          </a>
          <button
            aria-expanded={open}
            aria-label={open ? '关闭导航菜单' : '打开导航菜单'}
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-900 transition-colors hover:bg-gray-900/10 md:hidden"
            onClick={() => setOpen((current) => !current)}
            type="button"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="animate-fade-up absolute left-4 right-4 top-full rounded-2xl bg-white/80 px-5 py-3 shadow-xl ring-1 ring-gray-200 backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <a
              className="block border-b border-gray-200 py-3 text-[15px] text-gray-700 transition-colors last:border-b-0 hover:text-gray-900"
              href={link.href}
              key={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
