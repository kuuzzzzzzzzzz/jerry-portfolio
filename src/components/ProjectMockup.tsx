import {
  Bot,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Code2,
  Copy,
  DatabaseZap,
  Grid,
  Layers3,
  Monitor,
  PanelLeft,
  Plus,
  RotateCw,
  Share,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';

const metrics = [
  ['PROJECTS', '03', '重点作品待替换'],
  ['AGENTS', '08', 'Workflow 节点'],
  ['STACK', '12', 'AI 工程工具'],
  ['IMPACT', '92%', '自动化覆盖'],
];

const subjects = [
  ['RAG Assistant', '知识库问答 / 引用溯源', 'Ready'],
  ['Tool Agent', '函数调用 / 任务编排', 'Building'],
  ['AI Dashboard', '可视化交互 / 数据洞察', 'Shipped'],
];

const rows = [
  ['如何让模型回答可追溯？', 'RAG + citations', '中', 'Demo'],
  ['怎样把复杂任务拆成流程？', 'Agent workflow', '高', 'Draft'],
  ['如何接入外部工具和 API？', 'Tool calling', '中', 'Demo'],
  ['怎样减少重复运营动作？', 'Automation', '低', 'Live'],
  ['如何把 AI 能力产品化？', 'React UI + evals', '高', 'Case'],
];

function ScaledDashboard({ children }: { children: React.ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number | undefined>();

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;

    if (!outer || !inner) {
      return undefined;
    }

    const update = () => {
      const nextScale = Math.min(1, outer.clientWidth / 896);
      setScale(nextScale);
      setHeight(inner.offsetHeight * nextScale);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(outer);
    observer.observe(inner);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={outerRef} style={{ height }}>
      <div
        ref={innerRef}
        style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}
        className="w-[896px]"
      >
        {children}
      </div>
    </div>
  );
}

export default function ProjectMockup() {
  return (
    <ScaledDashboard>
      <div className="overflow-hidden rounded-t-2xl bg-[#1a1a1c] text-left shadow-[0_-20px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
        <div className="flex items-center gap-4 border-b border-white/5 bg-[#242427] px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <PanelLeft className="h-3.5 w-3.5 text-white/40" />
          <ChevronLeft className="h-3.5 w-3.5 text-white/25" />
          <ChevronRight className="h-3.5 w-3.5 text-white/25" />
          <div className="mx-auto flex items-center gap-2 rounded-md bg-[#1a1a1c] px-6 py-1 text-[10px] text-white/60">
            <Monitor className="h-3.5 w-3.5" />
            portfolio.local/agent-lab
          </div>
          <RotateCw className="h-3.5 w-3.5 text-white/40" />
          <Share className="h-3.5 w-3.5 text-white/40" />
          <Plus className="h-3.5 w-3.5 text-white/40" />
          <Copy className="h-3.5 w-3.5 text-white/40" />
        </div>

        <div className="flex min-h-[480px]">
          <aside className="w-[22%] border-r border-white/5 bg-[#1e1e21] px-3 py-3.5">
            <div className="mb-5 flex items-center justify-between">
              <Logo className="h-4 w-4 text-white/70" />
              <Grid className="h-3.5 w-3.5 text-white/30" />
            </div>
            <div className="mb-5 flex items-center gap-2 rounded-lg bg-white/[0.03] px-2 py-2">
              <div className="flex h-4 w-4 items-center justify-center rounded bg-[#e8553f] text-[9px] font-medium text-white">
                AI
              </div>
              <span className="text-[10px] text-white/80">Agent Lab</span>
            </div>
            <div className="space-y-1.5">
              {[
                [Bot, 'AI Agents'],
                [Sparkles, 'LLM Apps'],
                [Code2, 'Frontend'],
                [Workflow, 'Automation'],
              ].map(([Icon, label]) => (
                <div
                  className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px] text-white/60"
                  key={label as string}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label as string}
                </div>
              ))}
            </div>
            <div className="mt-7">
              <p className="mb-2 text-[8px] uppercase tracking-wider text-white/30">
                Replace with real projects
              </p>
              {['个人知识库 Agent', '简历匹配助手', '运营自动化工作流'].map((item) => (
                <div
                  className="flex items-center gap-2 border-b border-white/5 py-2 text-[10px] text-white/55 last:border-b-0"
                  key={item}
                >
                  <CircleDot className="h-2.5 w-2.5 text-[#28c840]/70" />
                  {item}
                </div>
              ))}
            </div>
          </aside>

          <section className="flex-1 bg-[#19191b] px-6 py-5">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e8553f] text-sm font-medium text-white">
                  A
                </div>
                <div>
                  <h2 className="text-sm font-medium text-white">AI 应用作品集</h2>
                  <p className="text-[10px] text-white/45">
                    Agent workflow / RAG / Tool calling / React
                  </p>
                </div>
              </div>
              <button
                className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[10px] font-medium text-gray-950"
                type="button"
              >
                <Sparkles className="h-3 w-3" />
                Generate brief
              </button>
            </div>

            <div className="grid grid-cols-4 divide-x divide-white/5 rounded-xl bg-white/[0.03] ring-1 ring-white/5">
              {metrics.map(([label, value, hint]) => (
                <div className="px-4 py-3" key={label}>
                  <p className="text-[8px] tracking-wider text-white/35">{label}</p>
                  <p className="mt-1 text-xl font-medium text-white">{value}</p>
                  <p className="mt-0.5 text-[9px] text-white/35">{hint}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {subjects.map(([title, desc, status]) => (
                <article
                  className="rounded-lg bg-white/[0.03] p-3 ring-1 ring-white/5"
                  key={title}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <Layers3 className="h-4 w-4 text-white/45" />
                    <span className="rounded-full bg-[#28c840]/10 px-2 py-0.5 text-[8px] text-[#28c840]/80">
                      {status}
                    </span>
                  </div>
                  <h3 className="text-xs font-medium text-white">{title}</h3>
                  <p className="mt-1 text-[10px] text-white/40">{desc}</p>
                </article>
              ))}
            </div>

            <div className="mt-5 rounded-xl bg-white/[0.03] p-3 ring-1 ring-white/5">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xs font-medium text-white">AI 项目问题解决表</h3>
                <DatabaseZap className="h-4 w-4 text-white/35" />
              </div>
              <div className="grid grid-cols-[1.5fr_1fr_0.5fr_0.6fr] border-b border-white/5 pb-2 text-[8px] uppercase tracking-wider text-white/30">
                <span>Question</span>
                <span>Solution</span>
                <span>Diff</span>
                <span>Status</span>
              </div>
              {rows.map(([question, solution, diff, status]) => (
                <div
                  className="grid grid-cols-[1.5fr_1fr_0.5fr_0.6fr] border-b border-white/5 py-2 text-[10px] last:border-b-0"
                  key={question}
                >
                  <span className="text-white/70">{question}</span>
                  <span className="text-white/45">{solution}</span>
                  <span className="text-white/35">{diff}</span>
                  <span className="text-[#febc2e]/80">{status}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </ScaledDashboard>
  );
}
