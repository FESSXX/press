module.exports = {
    locales: {
        '/':{
            lang:'zh-CN',

        }
    },


    head: [['link', { rel: 'icon', href: '/images/wy.png' }]],
    title: '无用', // 设置网站标题
    description: '描述：无用',
    base: '/',
    themeConfig : {

        lastUpdatedText: 'Last Updated', // 显示最后的更新时间
        sidebarDepth: 3, // 侧边栏的目录深度
        repo: 'https://github.com/Tamray/myblog', // 源码地址
        repoLabel: '查看源码', // (查看源码的)组件名称
        docsBranch: 'master', // git 源仓库 仓库分支
        docsDir: 'docs', // 仓库下的文件夹
        editLinks: true, // 编辑链接
        editLinkText: '修改页面',


        logo:'/images/wy.png',
        navbar: [
            // NavbarItem

            {
                text: '我还没想好',
                children:[
                    {text:'还没想好',link: '/guide/README.md'}
                ]
            },
            {
                text: '兴许说这个有点用',
                children:[
                    {text:'兴许说的没准过',link: '/guide/ashdj/'}
                ]
            },
            // NavbarGroup



        ],
        sidebar: {
            '/guide/ashdj/': [
                {
                    text:'这页面就是搞笑来的',
                    link:'/guide/ashdj/README.md'
                },
                {
                text: '这是最无聊的分组',
                collapsible:true,
                children: [{
                    text: '你最好别点',
                    link: '/guide/ashdj/ajxue.md'
                }, {
                    text: '最好别点你',
                    link: '/guide/ashdj/qweqw.md'
                }]
            }],
            '/' : [
                "", //指的是根目录的md文件 也就是 qweqw.md 里面的内容
            ]
        },
    }
}