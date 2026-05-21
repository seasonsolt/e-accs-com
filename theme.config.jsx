export default {
  logo: <strong>E-ACCS</strong>,
  docsRepositoryBase: 'https://github.com',
  footer: {
    content: 'E-ACCS.com · AI learning notes, practices, and product thinking.'
  },
  editLink: {
    component: null
  },
  feedback: {
    content: ''
  },
  toc: {
    title: '本页目录',
    backToTop: true
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s | E-ACCS'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#101316" />
      <meta
        name="description"
        content="E-ACCS 是一个面向 AI 学习、工具实践、AI 编程和 Agent 产品观察的个人知识分享站。"
      />
      <meta property="og:title" content="E-ACCS | AI 知识实验室" />
      <meta property="og:description" content="持续记录 AI 学习、工具实践、AI 编程和 Agent 产品观察。" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.e-accs.com/" />
      <link rel="canonical" href="https://www.e-accs.com/" />
    </>
  )
}
