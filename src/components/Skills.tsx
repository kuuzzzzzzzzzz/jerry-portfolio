import {
  BrainCircuit,
  Code2,
  DatabaseZap,
  GitBranch,
  MonitorSmartphone,
  Workflow,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const skills = [
  {
    icon: BrainCircuit,
    title: 'Prompt / Context Engineering',
    items: ['Prompt Engineering', 'Context Engineering', 'Few-shot 与结构化输出'],
  },
  {
    icon: Workflow,
    title: 'Agent 工作流构建',
    items: ['Planner 任务拆解', '多角色 Agent 构建', 'LangGraph 状态编排'],
  },
  {
    icon: DatabaseZap,
    title: 'RAG 与数据检索',
    items: ['RAG 构建', 'Embedding 向量化', 'FAISS 相似度检索'],
  },
  {
    icon: Code2,
    title: 'LLM 工程框架',
    items: ['LangChain / LCEL', 'Harness Engineering', '多模型 API 封装'],
  },
  {
    icon: MonitorSmartphone,
    title: '前后端工程',
    items: ['React / Vue3 / TypeScript', 'FastAPI / Spring Boot', 'MySQL / Redis / SQLite'],
  },
  {
    icon: GitBranch,
    title: '工程化能力',
    items: ['模块拆分与代码组织', 'API 调试与错误处理', 'Git / GitHub 项目文档'],
  },
];

export default function Skills() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10" id="skills">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="围绕 AI 应用落地组织技能栈"
          description="技能模块不只罗列工具名，而是展示我如何把模型能力、Agent 流程、前后端工程和数据分析场景连接起来。"
        />

        <div className="grid gap-px overflow-hidden rounded-lg bg-gray-200 ring-1 ring-gray-200 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <article className="bg-white p-6" key={skill.title}>
                <Icon className="mb-5 h-6 w-6 text-[#e8553f]" />
                <h3 className="text-lg font-medium text-gray-950">{skill.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {skill.items.map((item) => (
                    <li className="flex items-center gap-2" key={item}>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
