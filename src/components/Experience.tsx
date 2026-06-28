import { CalendarDays, GraduationCap, Milestone } from 'lucide-react';
import SectionHeading from './SectionHeading';

const timeline = [
  {
    icon: Milestone,
    label: 'Direction',
    title: 'AI Agent / AI 应用开发方向',
    description:
      '聚焦 LLM 应用、Agent 工作流、RAG 文档问答和 AI 数据分析系统，目标岗位为 AI 应用开发 / Agent 开发。',
  },
  {
    icon: CalendarDays,
    label: 'Projects',
    title: 'AI 项目实践',
    description:
      '完成 InsightFlow 数据分析 Agent、AI 虚拟角色即时通讯系统、Naive RAG API 等项目，覆盖自然语言转 SQL、任务编排、向量检索和模型接口封装。',
  },
  {
    icon: GraduationCap,
    label: 'Foundation',
    title: '计算机基础与课程实践',
    description:
      '系统学习数据结构、数据库、计算机网络、操作系统、软件工程等基础课程，并在课程作业和个人项目中实践前后端开发、接口设计、数据建模与系统集成。',
  },
];

export default function Experience() {
  return (
    <section className="bg-[#f4f5ef] px-5 py-20 sm:px-8 lg:px-10" id="experience">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Timeline"
          title="从基础工程到 AI 应用落地"
          description="围绕 AI Agent、RAG、数据分析和实时交互系统持续实践，重点展示可运行项目和工程化能力。"
        />

        <div className="space-y-3">
          {timeline.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="grid gap-4 rounded-lg bg-white p-5 ring-1 ring-gray-200 sm:grid-cols-[160px_1fr]"
                key={item.title}
              >
                <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-950 text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  {item.label}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
