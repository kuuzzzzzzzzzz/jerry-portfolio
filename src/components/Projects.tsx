import {
  ArrowUpRight,
  Bot,
  DatabaseZap,
  MessageSquareText,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const projects = [
  {
    icon: DatabaseZap,
    title: 'InsightFlow 智能数据洞察分析 AI Agent 系统',
    role: '全栈开发者',
    tag: 'FastAPI / Vue3 / SQLite / DeepSeek API',
    link: 'https://github.com/kuuzzzzzzzzzz/insight-flow',
    description:
      '基于自然语言输入自动完成意图理解、SQL 生成、数据查询、图表生成与业务洞察输出，形成完整的数据分析 Agent 工作流。',
    highlights: [
      '设计 Planner 驱动的模块化 Agent 工作流，将用户问题拆解为 SQL 生成、安全校验、图表生成和中文洞察输出。',
      '结合 Schema 约束、Prompt 规则、Few-shot 示例和 SQLGuard，提升 SQL 生成稳定性与安全性。',
      '设计任务降级机制，将复杂分析请求转为稳定单 SQL 查询，复杂任务成功率由 60% 提升至 85%。',
      '接入内容数据并设计 8 个分析指标，支持自动输出图表和中文业务结论。',
    ],
    stack: ['FastAPI', 'Vue3', 'SQLite', 'DeepSeek API', 'SQLGuard', 'ChartAgent'],
  },
  {
    icon: MessageSquareText,
    title: 'AI 虚拟角色即时通讯系统',
    role: '多角色 Agent 对话模块负责人',
    tag: 'Spring Boot / Vue3 / WebSocket / Redis / MySQL',
    link: 'https://github.com/Ismweirdo/Data-Structure-Smart-Learning-Platform',
    description:
      '融合即时通讯与大语言模型能力，支持用户实时聊天、AI Bot 在线回复、多角色虚拟人格创建、聊天记录导入与角色化对话生成。',
    highlights: [
      '负责 AI Bot 对话模块设计与实现，支持机器人在聊天室中实时回复。',
      '封装 OpenAI、DeepSeek 与通义千问接口，统一请求与响应结构，提升模型接入可维护性。',
      '构建角色上下文、用户输入、历史对话、语言风格和 Few-shot 示例组合的 Prompt 流程。',
      '实现聊天记录导入与分析，支持按聊天内容生成角色画像和风格描述。',
    ],
    stack: ['Spring Boot', 'Vue3', 'WebSocket', 'Redis', 'MySQL', 'LLM API'],
  },
  {
    icon: Bot,
    title: '企智问档 RAG + Agent 智能文档问答系统',
    role: '项目组长 / RAG 与 Agent 核心开发',
    tag: 'LangGraph / LangChain / FastAPI / ChromaDB',
    link: '#',
    description:
      '面向企业制度、学院通知和流程文档场景，构建支持文档解析、智能问答、来源溯源和流程摘要的 RAG + Agent 文档问答系统。',
    highlights: [
      '基于 LangGraph 设计 RouterAgent、QueryRewriteAgent、QAAgent、SummaryAgent 和 SourceTracer 工作流。',
      '负责 RAG 核心链路，包括文档解析、分块、Embedding、ChromaDB 检索和答案来源溯源。',
      '通过 AGENTS.md、PROGRESS.md 和 .harness/rules.yaml 管理 AI 辅助开发上下文与架构约束。',
      '完成 80+ 个自动化测试用例，主分支通过 pytest、ruff 和架构检查。',
    ],
    stack: ['FastAPI', 'LangGraph', 'LangChain', 'DeepSeek API', 'ChromaDB', 'pytest'],
  },
];

export default function Projects() {
  return (
    <section className="bg-[#f7f7f2] px-5 py-20 sm:px-8 lg:px-10" id="projects">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="用项目证明 AI 能力可以被产品化"
          description="重点展示我如何把 LLM、Agent 工作流、前后端工程和业务场景连接起来，做出可运行、可维护、可验证的 AI 应用。"
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                className="flex min-h-[560px] flex-col rounded-lg bg-white p-5 shadow-sm ring-1 ring-gray-200 transition-transform hover:-translate-y-1 hover:shadow-xl"
                key={project.title}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#1a1a1c] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="max-w-[180px] text-right text-[12px] leading-5 text-gray-500">
                    <p>{project.role}</p>
                  </div>
                </div>

                <p className="mb-2 text-[12px] font-medium text-[#e8553f]">
                  {project.tag}
                </p>
                <h3 className="text-xl font-medium leading-snug text-gray-950">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{project.description}</p>

                <ul className="mt-5 space-y-2 text-sm leading-6 text-gray-700">
                  {project.highlights.map((item) => (
                    <li className="flex gap-2" key={item}>
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#28c840]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {project.stack.map((item) => (
                    <span
                      className="rounded-full bg-gray-100 px-3 py-1 text-[12px] text-gray-700"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  aria-label={`查看${project.title}`}
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gray-950 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#e8553f]"
                  href={project.link}
                  rel={project.link === '#' ? undefined : 'noreferrer'}
                  target={project.link === '#' ? undefined : '_blank'}
                >
                  {project.link === '#' ? '项目链接待补充' : '查看项目'}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
