import { Download, Github, Mail, Sparkles } from 'lucide-react';
import GrassCharacters from './GrassCharacters';
import Navbar from './Navbar';

const heroImage =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260611_133301_d5f2a94a-b22e-4e4a-a6b6-eacdddf1f5b0.png&w=1280&q=85';

const grassImage =
  'https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1781191264/grass_eam204.png';

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#eef1e5] bg-cover bg-center"
      id="top"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-[#eef1e5]/20" />
      <Navbar />

      <div className="relative z-20 flex flex-1 flex-col">
        <div className="min-h-8 flex-1 shrink-0 sm:min-h-12 lg:min-h-16" />
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-5 text-center">
          <p className="animate-fade-up mb-3 inline-flex items-center gap-2 rounded-full bg-white/55 px-3 py-1.5 text-[12px] text-gray-700 ring-1 ring-gray-200 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            Agent 开发 / AI 应用开发 求职作品集
          </p>

          <h1 className="font-normal leading-none tracking-tight text-gray-900">
            <span className="animate-fade-up inline-block translate-x-[22px] text-[40px] leading-[0.95] sm:translate-x-[30px] sm:text-[52px] lg:translate-x-[40px] lg:text-[68px]">
              Hello,i&apos;m
            </span>
            <span className="animate-fade-up block text-[76px] leading-[0.88] [animation-delay:100ms] sm:text-[104px] lg:text-[132px]">
              JERRY
            </span>
          </h1>

          <p className="animate-fade-up mt-5 max-w-md text-sm leading-relaxed text-gray-600 [animation-delay:220ms] sm:mt-6 sm:text-base lg:text-lg">
            把 LLM 能力接进真实工作流，关注从问题拆解、工具调用到前端交互的完整落地。
            <br />
            正在寻找 Agent 开发相关机会。
          </p>

          <div className="animate-fade-up mt-4 flex flex-wrap items-center justify-center gap-3 [animation-delay:340ms] sm:mt-5">
            <a
              className="rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-gray-800 hover:shadow-lg"
              href="#projects"
            >
              查看项目
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-gray-700 ring-1 ring-gray-300 transition-colors hover:bg-gray-100"
              href="#"
            >
              <Download className="h-4 w-4" />
              下载简历
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-gray-700 ring-1 ring-gray-300 transition-colors hover:bg-gray-100"
              href="#contact"
            >
              <Mail className="h-4 w-4" />
              微信：lq316299
            </a>
            <a
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-700 ring-1 ring-gray-300 transition-colors hover:bg-gray-100"
              href="https://github.com/kuuzzzzzzzzzz"
              rel="noreferrer"
              target="_blank"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="min-h-24 flex-1 shrink-0 sm:min-h-32 lg:min-h-40" />
      </div>

      <GrassCharacters />

      <img
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 z-10 w-full select-none"
        src={grassImage}
      />
    </section>
  );
}
