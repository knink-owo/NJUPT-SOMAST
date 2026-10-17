/**
 * 全站文案都在这个文件里。
 * 改文字、加部门、换赛事、换照片，只改这里，不用碰组件。
 * 注意：字符串里不要用 em dash（——），用「·」或逗号。
 */

export const site = {
  brandCn: "管院科协",
  brandEn: "SOMAST",
  fullName: "南京邮电大学管理学院科学与技术协会",
  shortName: "管院科协",
  tagline: "南京邮电大学管理学院 · 科学与技术协会",
  description:
    "南京邮电大学管理学院科学与技术协会（管院科协）主页：三个中心、八个部门、多项经典赛事与日常活动。",
  officialUrl: "https://bc.njupt.edu.cn/njyddxglxykxyjsxhxh/list.htm",
  /** 公众号名称（先不放二维码） */
  officialAccount: "南邮管院青年",
  /** 招新群号，会随每轮招新轮换 */
  qqGroup: "1102691914",
};

export const nav = [
  { label: "关于", href: "#about" },
  { label: "部门", href: "#departments" },
  { label: "赛事", href: "#events" },
  { label: "现场", href: "#gallery" },
];

export const hero = {
  kicker: site.tagline,
  title: ["把想法", "做成作品。"],
  sub: "三个中心、八个部门、多项经典赛事。从策划一场活动，到拿下一个奖项，都有人陪你走完。",
  cta: { label: "了解八个部门", href: "#departments" },
  dossier: {
    title: "组织档案",
    code: "SOMAST",
    rows: [
      {
        label: "中心",
        num: "03",
        note: "科研中心 · 办公中心 · 活动中心",
      },
      {
        label: "部门",
        num: "08",
        note: "技术、策划、宣传、外联、辩论",
      },
      {
        label: "品牌活动",
        num: "04",
        note: "服务周 · 冬令营 · 包饺子 · 全体会议",
      },
      {
        label: "校区",
        num: "01",
        note: "三牌楼校区，新模范马路 66 号",
      },
    ],
  },
};

export const about = {
  eyebrow: "关于科协",
  title: "一个把技术与管理放在一起练的地方。",
  paragraphs: [
    "南京邮电大学管理学院科学与技术协会（简称管院科协）由学院党委领导、学院团委指导，是面向管院学子的学术科技类学生团体，也是学院里规模最大的学习与竞赛交流平台之一。",
    "我们围绕学科竞赛、学术研究、发明创造、创新创业训练与科普宣传开展工作。院赛的组委会、赛前的培训课、活动当天的设备与现场，基本都是科协的人在跑。",
  ],
  spec: [
    {
      key: "全称",
      value: "南京邮电大学管理学院科学与技术协会",
    },
    {
      key: "简称",
      value: "管院科协 · SOMAST",
    },
    {
      key: "性质",
      value: "学术科技类学生团体，学院党委领导、学院团委指导",
    },
    {
      key: "宗旨",
      value: "传播科学知识，开展科技活动，弘扬科学精神，培养创新人才",
    },
    {
      key: "工作方向",
      value: "学科竞赛 · 学术研究 · 发明创造 · 创新创业训练 · 科普宣传",
    },
    {
      key: "构成",
      value: "主席 1 名 · 副主席 2 名 · 主任 3 名（分管三个中心）· 八个部门",
    },
    {
      key: "校区",
      value: "三牌楼校区，南京市鼓楼区新模范马路 66 号，邮编 210003",
    },
  ],
  org: {
    caption: "组织架构 / Org Chart",
    captionRight: "三中心 · 八部门",
    root: "管院科协",
    centers: [
      { name: "科研中心", depts: ["网技部", "软技部", "信技部"] },
      { name: "办公中心", depts: ["组策部", "办公室"] },
      { name: "活动中心", depts: ["外联部", "E宣部", "辩论队"] },
    ],
  },
};

export type Dept = {
  idx: string;
  name: string;
  en: string;
  slogan: string;
  body: string;
  tags: string[];
};

export const departments = {
  eyebrow: "部门",
  title: "三个中心，八个部门。",
  lede: "技术、策划、宣传、辩论各有一条线。每个部门都有自己的活儿和脾气，往下看就知道平时具体在做什么。",
  centers: [
    {
      name: "科研中心",
      en: "RESEARCH CENTER / 03 DEPTS",
      depts: [
        {
          idx: "01",
          name: "网技部",
          en: "Visual Tech",
          slogan: "海报、视频、舞台视觉，从这里出厂。",
          body: "新媒体设计大赛和海报设计大赛由我们组织与培训；科协每场晚会的视频、活动海报、立牌、宣传幅也在这里产出。我们开 PS、PR 课程，从零基础练到能独立出片。",
          tags: ["平面设计", "视频剪辑", "PS · PR"],
        },
        {
          idx: "02",
          name: "软技部",
          en: "Software Tech",
          slogan: "科协的技术小管家，设备、软件、编程干货都归我们。",
          body: "活动现场的设备调试、软件安装答疑、编程干货分享，都是软技部的主场。没有大佬门槛，零基础也可以来玩，一起解锁实用软件技能，在科创赛事里积攒实战经验。技术不枯燥，快乐搞科创。",
          tags: ["设备调试", "软件答疑", "零基础友好"],
        },
        {
          idx: "03",
          name: "信技部",
          en: "Information Tech",
          slogan: "把 Office 和计算机二级，变成你的基本功。",
          body: "信技部全称信息技术与应用部。我们用系统化的 Office 培训带你练熟文档处理、数据统计与演示文稿，也为计算机二级考试提供备考指导。科协办活动，技术保障这边也归我们。",
          tags: ["Office 培训", "计算机二级", "活动保障"],
        },
      ],
    },
    {
      name: "办公中心",
      en: "OPERATIONS CENTER / 02 DEPTS",
      depts: [
        {
          idx: "04",
          name: "组策部",
          en: "Event Planning",
          slogan: "从 0 到 1，把一场活动完整落地。",
          body: "组策部是科协活动的基石。创新杯、挑战杯等重大赛事的筹备，科协全体会议和冬至包饺子，从写策划书、统筹物资人员到现场调度，都由我们推着走。想练统筹力、执行力与领导力，这里是最近的路。",
          tags: ["活动策划", "现场统筹", "执行力"],
        },
        {
          idx: "05",
          name: "办公室",
          en: "Admin Office",
          slogan: "科协的大管家，也是主席团与部员之间的连接。",
          body: "办公室担任创新杯等重大赛事的组委会主要成员，协助院赛开展；也负责会议记录、活动实施、值班安排等日常行政。工作之外，周末团建和娱乐活动也不会少。",
          tags: ["赛事组委会", "行政统筹", "团队氛围"],
        },
      ],
    },
    {
      name: "活动中心",
      en: "ACTIVITY CENTER / 03 DEPTS",
      depts: [
        {
          idx: "06",
          name: "外联部",
          en: "Outreach",
          slogan: "活动需要的人和资源，我们去找。",
          body: "外联部主办创意营销大赛，也协助校科技节顺利开展。奖品采购、活动资源保证、财务记录与报账，以及拉赞助、与商家建立长期合作，都是外联要跑的事。",
          tags: ["创意营销大赛", "赞助合作", "资源统筹"],
        },
        {
          idx: "07",
          name: "E宣部",
          en: "Media & PR",
          slogan: "科协的声音，从这里发出去。",
          body: "E宣部负责公众号推文的撰写与排版，同时统筹科协 QQ、抖音、B 站等新媒体平台的日常运营维护。写文案、做视觉、拍现场，把科协的活动成果与部门风貌传出去，就是我们的活儿。",
          tags: ["公众号运营", "新媒体矩阵", "摄影剪辑"],
        },
        {
          idx: "08",
          name: "辩论队",
          en: "Debate Team",
          slogan: "把话说清楚，把理讲明白。",
          body: "辩论队每周有日常队训，代表管理学院参加各级辩论比赛，也策划组织新生辩论赛、清廉杯与薪火杯。逻辑、表达、临场反应，都是练出来的。",
          tags: ["日常队训", "院队出战", "新生赛"],
        },
      ],
    },
  ],
};

export type EventItem = {
  name: string;
  host: string;
  desc: string;
  link?: { label: string; href: string };
};

export const events = {
  eyebrow: "赛事",
  title: "多项经典赛事，从院赛打到校赛。",
  lede: "这些比赛大多由科协承办或协办，组委会、培训课、现场保障都从这里出人。具体项目以每学期实际安排为准。",
  head: ["No.", "赛事", "承办", "说明"],
  items: [
    {
      name: "“创新杯”大学生课外学术科技竞赛",
      host: "办公室 · 科研中心",
      desc: "面向全院学生的课外学术科技作品竞赛，科协承担院赛的组织与组委会工作。",
    },
    {
      name: "“挑战杯”大学生创业计划竞赛",
      host: "办公室 · 组策部",
      desc: "创业计划类竞赛，从院赛选拔到校赛推荐，赛事筹备由科协协同推进。",
    },
    {
      name: "“创新、创意、创业”电子商务三创赛",
      host: "办公室",
      desc: "电商方向的创意与创业实践赛，学院参赛队伍的组织与院赛保障在这里。",
    },
    {
      name: "新媒体设计大赛",
      host: "网技部",
      desc: "平面与新媒体作品的设计竞赛，由网技部负责组织与赛前培训。",
    },
    {
      name: "海报设计大赛",
      host: "网技部",
      desc: "围绕海报与视觉表达的比赛，从命题到评审都由网技部牵头。",
    },
    {
      name: "创意营销大赛",
      host: "外联部",
      desc: "外联部主办的营销策划类赛事，方案、资源与落地一起练。",
    },
    {
      name: "大学生职业规划大赛",
      host: "管院科协",
      desc: "学院主办的生涯规划类赛事，成长赛道与就业赛道同场展示，科协承担组织与现场工作。",
      link: {
        label: "赛事报道 →",
        href: "https://mp.weixin.qq.com/s/FQqts3DyJ_vVZ3wEqp1htg",
      },
    },
    {
      name: "“清廉杯”辩论赛",
      host: "辩论队",
      desc: "学院辩论赛事之一，辩论队负责赛制、组队、评审与现场组织。",
    },
    {
      name: "南京邮电大学科技节子项目",
      host: "组策部 · 外联部",
      desc: "校科技节期间由科协承办的子项目，把活动策划与资源协调搬到更大的舞台。",
    },
  ] satisfies EventItem[],
  note: "此外还有新生辩论赛、薪火杯辩论赛等固定活动，以及每年随赛程调整的各类校级、院级赛事。",
  brandsTitle: "日常品牌活动",
  brands: ["柚子服务周", "“邮”我一定过冬令营", "冬至包饺子", "科协全体会议"],
};

export const gallery = {
  eyebrow: "现场",
  title: "现场。",
  note: "招新、比赛、晚会，都是科协的日常。更多照片会陆续补进来。",
  items: [
    { src: "images/recruit.jpg", caption: "招新现场", tag: "RECRUIT" },
    { src: "images/contest.jpg", caption: "职业规划大赛现场", tag: "CONTEST" },
    { src: "images/gala.jpg", caption: "科协晚会合影", tag: "GALA" },
    { src: "images/recruit.jpg", caption: "活动现场", tag: "待替换" },
    { src: "images/recruit.jpg", caption: "活动现场", tag: "待替换" },
    { src: "images/recruit.jpg", caption: "活动现场", tag: "待替换" },
  ],
};

export const join = {
  eyebrow: "加入我们",
  title: "加入我们。",
  statement: "想加入，或者只是想先看看，都可以先进群。",
  copy: "群号会随每轮招新轮换，平时的问题、赛事消息、部门日常，群里都聊。",
  groupLabel: "招新 QQ 群",
  accountLabel: "微信公众号",
  accountNote: "活动回顾、赛事通知与招新信息，都会在这里更新。",
  addressLabel: "校区地址",
  address: "南京市鼓楼区新模范马路 66 号",
  zip: "三牌楼校区 / 210003",
};

export const footer = {
  brief: "南京邮电大学管理学院科学与技术协会。由学院党委领导、学院团委指导。",
  pagesTitle: "页面",
  contactTitle: "联系",
  copyright: `© ${new Date().getFullYear()} 南京邮电大学管理学院科学与技术协会`,
  code: "SOMAST · NJUPT",
};
