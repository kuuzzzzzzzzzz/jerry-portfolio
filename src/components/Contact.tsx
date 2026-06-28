import { ArrowUpRight, Download, Github, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section className="bg-[#1a1a1c] px-5 py-20 text-white sm:px-8 lg:px-10" id="contact">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <div>
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.18em] text-[#febc2e]">
            Contact
          </p>
          <h2 className="max-w-3xl text-3xl font-normal leading-tight sm:text-5xl">
            期待 Agent 开发相关机会
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            我关注 LLM 应用、RAG、工具调用、Agent 工作流和 AI 产品工程化，希望参与能把智能体能力真正落到业务场景中的项目。
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <a
            className="flex items-center justify-between rounded-lg bg-white px-5 py-4 text-sm font-medium text-gray-950 transition-transform hover:-translate-y-0.5"
            href="mailto:2022326660014@whu.edu.cn"
          >
            <span className="flex items-center gap-3">
              <Mail className="h-4 w-4" />
              2022326660014@whu.edu.cn
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <div className="flex items-center justify-between rounded-lg bg-white/8 px-5 py-4 text-sm font-medium text-white ring-1 ring-white/10">
            <span className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4" />
              微信：lq316299
            </span>
          </div>
          <a
            className="flex items-center justify-between rounded-lg bg-white/8 px-5 py-4 text-sm font-medium text-white ring-1 ring-white/10 transition-colors hover:bg-white/12"
            href="https://github.com/kuuzzzzzzzzzz"
            rel="noreferrer"
            target="_blank"
          >
            <span className="flex items-center gap-3">
              <Github className="h-4 w-4" />
              GitHub
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            className="flex items-center justify-between rounded-lg bg-white/8 px-5 py-4 text-sm font-medium text-white ring-1 ring-white/10 transition-colors hover:bg-white/12"
            href="/resume.pdf"
            target="_blank"
          >
            <span className="flex items-center gap-3">
              <Download className="h-4 w-4" />
              下载简历 PDF
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
