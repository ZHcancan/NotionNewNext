// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a
const BLOG = {
  // Important page_id！！！Duplicate Template from  https://www.notion.so/tanghh/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
        process.env.NOTION_PAGE_ID || '02ab3b8678004aa69e9e415905ef32a5',
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // 伪静态路径，开启后所有文章URL都以 .html 结尾。
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5, // 更新内容缓存间隔 单位(秒)；即每个页面有5秒的纯静态期、此期间无论多少次访问都不会抓取notion数据；调大该值有助于节省Vercel资源、同时提升访问速率，但也会使文章更新有延迟。
  THEME: process.env.NEXT_PUBLIC_THEME || 'hexo', // 当前主题，在themes文件夹下可找到所有支持的主题；主题名称就是文件夹名，例如 example,fukasawa,gitbook,heo,hexo,landing,matery,medium,next,nobelium,plog,simple
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // 是否显示切换主题按钮
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN', // e.g 'zh-CN','en-US'  see /lib/lang.js for more.
  SINCE: 2021, // e.g if leave this empty, current year will be used.
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'auto', // ['light', 'dark', 'auto'], // light 日间模式 ， dark夜间模式， auto根据时间和主题自动夜间模式
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // 夜间模式起至时间，false时关闭根据时间自动切换夜间模式

  // 3.14.1版本后，欢迎语在此配置，英文逗号隔开 ,  即可支持多个欢迎语打字效果。
  GREETING_WORDS: process.env.NEXT_PUBLIC_GREETING_WORDS || 'Hi，我是一个程序员, Hi，我是一个打工人,Hi，我是一个干饭人,欢迎来到我的博客🎉',

  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, // 支持Menu 类型，从3.12.0版本起，各主题将逐步支持灵活的二级菜单配置，替代了原来的Page类型，此配置是试验功能、默认关闭。

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || '张灿灿', // 您的昵称 例如 tangly1024
  BIO: process.env.NEXT_PUBLIC_BIO || '一个普通的干饭人🍚', // 作者简介
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://www.cancan.love', // 网站地址
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || '', // 网站关键词 英文逗号隔开

  // 社交链接，不需要可留空白，例如 CONTACT_WEIBO:''
  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '', // 邮箱地址 例如mail@tangly1024.com
  CONTACT_WEIBO: process.env.NEXT_PUBLIC_CONTACT_WEIBO || '', // 你的微博个人主页
  CONTACT_TWITTER: process.env.NEXT_PUBLIC_CONTACT_TWITTER || '', // 你的twitter个人主页
  CONTACT_GITHUB: process.env.NEXT_PUBLIC_CONTACT_GITHUB || '', // 你的github个人主页 例如 https://github.com/tangly1024
  CONTACT_TELEGRAM: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || '', // 你的telegram 地址 例如 https://t.me/tangly_1024
  CONTACT_LINKEDIN: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || '', // 你的linkedIn 首页
  CONTACT_INSTAGRAM: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || '', // 您的instagram地址
  CONTACT_BILIBILI: process.env.NEXT_PUBLIC_CONTACT_BILIBILI || '', // B站主页
  CONTACT_YOUTUBE: process.env.NEXT_PUBLIC_CONTACT_YOUTUBE || '', // Youtube主页

  NOTION_HOST: process.env.NEXT_PUBLIC_NOTION_HOST || 'https://www.cancan.love', // Notion域名，您可以选择用自己的域名进行反向代理，如果不懂得什么是反向代理，请勿修改此项

  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // blog favicon 配置, 默认使用 /public/favicon.ico，支持在线图片，如 https://img.imesong.com/favicon.png

  // START ************网站字体*****************

  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-sans', // ['font-serif','font-sans'] 两种可选，分别是衬线和无衬线: 参考 https://www.jianshu.com/p/55e410bd2115
  // 字体CSS 例如 https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css
  FONT_URL: [
    // 'https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css',
    'https://fonts.googleapis.com/css?family=Bitter&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300&display=swap'
  ],
  // 无衬线字体 例如'"LXGW WenKai"'
  FONT_SANS: [
    // '"LXGW WenKai"',
    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans GB"',
    '"Microsoft YaHei"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"Noto Sans SC"',
    'HarmonyOS_Regular',
    '"Helvetica Neue"',
    'Helvetica',
    '"Source Han Sans SC"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"'
  ],
  // 衬线字体 例如'"LXGW WenKai"'
  FONT_SERIF: [
    // '"LXGW WenKai"',
    'Bitter',
    '"Noto Serif SC"',
    'SimSun',
    '"Times New Roman"',
    'Times',
    'serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"'
  ],
  FONT_AWESOME: process.env.NEXT_PUBLIC_FONT_AWESOME_PATH || 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', // font-awesome 字体图标地址; 可选 /css/all.min.css ， https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css

  // END ************网站字体*****************
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // 是否允许复制页面内容 默认允许，如果设置为false、则全栈禁止复制内容。
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU: process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU || false, // 自定义右键菜单，覆盖系统菜单

  // 自定义外部脚本，外部样式
  CUSTOM_EXTERNAL_JS: [''], // e.g. ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g. ['http://xx.com/style.css','http://xx.com/style.css']

  // 侧栏布局 是否反转(左变右,右变左) 已支持主题: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE: false,

  // 一个小插件展示你的facebook fan page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // 邊欄 Facebook Page widget 的標題欄，填''則無標題欄 e.g FACEBOOK 粉絲團'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page 的連結 e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID 來啟用 messenger 聊天功能
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '', // Facebook App ID 來啟用 messenger 聊天功能 获取: https://developers.facebook.com/

  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // 备案号 闽ICP备XXXXXXX

  // START********代码相关********
  // PrismJs 代码相关
  PRISM_JS_PATH: 'https://npm.elemecdn.com/prismjs@1.29.0/components/',
  PRISM_JS_AUTO_LOADER: 'https://npm.elemecdn.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js',

  // 代码主题 @see https://github.com/PrismJS/prism-themes
  PRISM_THEME_PREFIX_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_PREFIX_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.css', // 代码块默认主题
  PRISM_THEME_SWITCH: process.env.NEXT_PUBLIC_PRISM_THEME_SWITCH || true, // 是否开启浅色/深色模式代码主题切换； 开启后将显示以下两个主题
  PRISM_THEME_LIGHT_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_LIGHT_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-solarizedlight.css', // 浅色模式主题
  PRISM_THEME_DARK_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_DARK_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css', // 深色模式主题

  CODE_MAC_BAR: process.env.NEXT_PUBLIC_CODE_MAC_BAR || true, // 代码左上角显示mac的红黄绿图标
  CODE_LINE_NUMBERS: process.env.NEXT_PUBLIC_CODE_LINE_NUMBERS || true, // 是否显示行号
  CODE_COLLAPSE: process.env.NEXT_PUBLIC_CODE_COLLAPSE || true, // 是否支持折叠代码框
  CODE_COLLAPSE_EXPAND_DEFAULT: process.env.NEXT_PUBLIC_CODE_COLLAPSE_EXPAND_DEFAULT || true, // 折叠代码默认是展开状态

  // END********代码相关********

  // Mermaid 图表CDN
  MERMAID_CDN: process.env.NEXT_PUBLIC_MERMAID_CDN || 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.2.4/mermaid.min.js', // CDN
  // QRCodeCDN
  QR_CODE_CDN: process.env.NEXT_PUBLIC_QR_CODE_CDN || 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',

  BACKGROUND_LIGHT: '#eeeeee', // use hex value, don't forget '#' e.g #fffefc
  BACKGROUND_DARK: '#000000', // use hex value, don't forget '#'
  SUB_PATH: '', // leave this empty unless you want to deploy in a folder

  POST_SHARE_BAR_ENABLE: process.env.NEXT_PUBLIC_POST_SHARE_BAR || 'true', // 文章分享功能 ，将在底部显示一个分享条
  POSTS_SHARE_SERVICES: process.env.NEXT_PUBLIC_POST_SHARE_SERVICES || 'link,wechat,qq,weibo,email,facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin', // 分享的服務，按顺序显示,逗号隔开
  // 所有支持的分享服务：link(复制链接),wechat(微信),qq,weibo(微博),email(邮件),facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin,vkshare,okshare,tumblr,livejournal,mailru,viber,workplace,pocket,instapaper,hatena

  POST_URL_PREFIX: process.env.NEXT_PUBLIC_POST_URL_PREFIX || 'article',
  // POST类型文章的默认路径前缀，例如默认POST类型的路径是  /article/[slug]
  // 如果此项配置为 '' 空， 则文章将没有前缀路径，使用场景： 希望文章前缀路径为 /post 的情况 支持多级
  // 支援類似 WP 可自訂文章連結格式的功能：https://wordpress.org/documentation/article/customize-permalinks/，目前只先實作 %year%/%month%/%day%
  // 例：如想連結改成前綴 article + 時間戳記，可變更為： 'article/%year%/%month%/%day%'

  POST_LIST_STYLE: process.env.NEXT_PUBLIC_POST_LIST_STYLE || 'page', // ['page','scroll] 文章列表样式:页码分页、单页滚动加载
  POST_LIST_PREVIEW: process.env.NEXT_PUBLIC_POST_PREVIEW || 'false', //  是否在列表加载文章预览
  POST_PREVIEW_LINES: 12, // 预览博客行数
  POST_RECOMMEND_COUNT: 6, // 推荐文章数量
  POSTS_PER_PAGE: 12, // post counts per page
  POSTS_SORT_BY: process.env.NEXT_PUBLIC_POST_SORT_BY || 'notion', // 排序方式 'date'按时间,'notion'由notion控制

  ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || null, // 在这里查看 https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_ADMIN_APP_KEY: process.env.ALGOLIA_ADMIN_APP_KEY || null, // 管理后台的KEY，不要暴露在代码中，在这里查看 https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_SEARCH_ONLY_APP_KEY: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_APP_KEY || null, // 客户端搜索用的KEY
  ALGOLIA_INDEX: process.env.NEXT_PUBLIC_ALGOLIA_INDEX || null, // 在Algolia中创建一个index用作数据库
  //   ALGOLIA_RECREATE_DATA: process.env.ALGOLIA_RECREATE_DATA || process.env.npm_lifecycle_event === 'build', // 为true时重新构建索引数据; 默认在build时会构建

  PREVIEW_CATEGORY_COUNT: 16, // 首页最多展示的分类数量，0为不限制
  PREVIEW_TAG_COUNT: 16, // 首页最多展示的标签数量，0为不限制

  POST_DISABLE_GALLERY_CLICK: process.env.NEXT_PUBLIC_POST_DISABLE_GALLERY_CLICK || false, // 画册视图禁止点击，方便在友链页面的画册插入链接

  //   ********动态特效相关********
  // 鼠标点击烟花特效
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || true, // 开关
  // 烟花色彩，感谢 https://github.com/Vixcity 提交的色彩
  FIREWORKS_COLOR: [
    '255, 20, 97',
    '24, 255, 146',
    '90, 135, 255',
    '251, 243, 140'
  ],

  // 樱花飘落特效
  SAKURA: process.env.NEXT_PUBLIC_SAKURA || true, // 开关
  // 漂浮线段特效
  NEST: process.env.NEXT_PUBLIC_NEST || false, // 开关
  // 动态彩带特效
  FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || false, // 开关
  // 静态彩带特效
  RIBBON: process.env.NEXT_PUBLIC_RIBBON || false, // 开关
  // 星空雨特效 黑夜模式才会生效
  STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || true, // 开关

  //   ********挂件组件相关********
  // Chatbase 是否显示chatbase机器人 https://www.chatbase.co/
  CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || null,
  // WebwhizAI 机器人 @see https://github.com/webwhiz-ai/webwhiz
  WEB_WHIZ_ENABLED: process.env.NEXT_PUBLIC_WEB_WHIZ_ENABLED || false, // 是否显示
  WEB_WHIZ_BASE_URL: process.env.NEXT_PUBLIC_WEB_WHIZ_BASE_URL || 'https://api.webwhiz.ai', // 可以自建服务器
  WEB_WHIZ_CHAT_BOT_ID: process.env.NEXT_PUBLIC_WEB_WHIZ_CHAT_BOT_ID || null, // 在后台获取ID

  // 悬浮挂件
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || false, // 是否显示宠物挂件
  WIDGET_PET_LINK:
        process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
        'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // 挂件模型地址 @see https://github.com/xiazeyu/live2d-widget-models
  WIDGET_PET_SWITCH_THEME: process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || false, // 点击宠物挂件切换博客主题

  // 音乐播放插件
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || false, // 是否使用音乐播放插件
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || false, // 是否在左下角显示播放和切换，如果使用播放器，打开自动播放再隐藏，就会以类似背景音乐的方式播放，无法取消和暂停
  MUSIC_PLAYER_AUTO_PLAY:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || false, // 是否自动播放，不过自动播放时常不生效（移动设备不支持自动播放）
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // 歌词显示类型，可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）（前提是有配置歌词路径，对 meting 无效）
  MUSIC_PLAYER_CDN_URL:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
        'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list', // 默认播放方式，顺序 list，随机 random
  MUSIC_PLAYER_AUDIO_LIST: [
    // 示例音乐列表。除了以下配置外，还可配置歌词，具体配置项看此文档 https://aplayer.js.org/#/zh-Hans/
    {
      name: '断点',
      artist: '张敬轩',
      url: 'https://music.163.com/song/media/outer/url?id=189323.mp3',
      cover:
            'https://wx4.sinaimg.cn/orj360/007QvzfIgy1hip0g8drfrj30sg0sgn36.jpg'
    }
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // 是否要开启 MetingJS，从平台获取歌单。会覆盖自定义的 MUSIC_PLAYER_AUDIO_LIST，更多配置信息：https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // 音乐平台，[netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // 对应歌单的 id
  MUSIC_PLAYER_METING_LRC_TYPE:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // 可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）

  //   ********挂件组件相关********
  // ----> 评论互动 可同时开启多个支持 WALINE VALINE GISCUS CUSDIS UTTERRANCES GITALK

  // artalk 评论插件
  COMMENT_ARTALK_SERVER: process.env.NEXT_PUBLIC_COMMENT_ARTALK_SERVER || '', // ArtalkServert后端地址 https://artalk.js.org/guide/deploy.html
  COMMENT_ARTALK_JS: process.env.NEXT_PUBLIC_COMMENT_ARTALK_JS || 'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.js', // ArtalkServert js cdn
  COMMENT_ARTALK_CSS: process.env.NEXT_PUBLIC_COMMENT_ARTALK_CSS || 'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.css', // ArtalkServert css cdn

  // twikoo
  COMMENT_TWIKOO_ENV_ID: process.env.NEXT_PUBLIC_COMMENT_ENV_ID || '', // TWIKOO后端地址 腾讯云环境填envId；Vercel环境填域名，教程：https://tangly1024.com/article/notionnext-twikoo
  COMMENT_TWIKOO_COUNT_ENABLE: process.env.NEXT_PUBLIC_COMMENT_TWIKOO_COUNT_ENABLE || false, // 博客列表是否显示评论数
  COMMENT_TWIKOO_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_TWIKOO_CDN_URL || 'https://cdn.staticfile.org/twikoo/1.6.16/twikoo.min.js', // twikoo客户端cdn

  // utterance
  COMMENT_UTTERRANCES_REPO:
        process.env.NEXT_PUBLIC_COMMENT_UTTERRANCES_REPO || '', // 你的代码仓库名， 例如我是 'tangly1024/NotionNext'； 更多文档参考 https://utteranc.es/

  // giscus @see https://giscus.app/
  COMMENT_GISCUS_REPO: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO || '', // 你的Github仓库名 e.g 'tangly1024/NotionNext'
  COMMENT_GISCUS_REPO_ID: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID || '', // 你的Github Repo ID e.g ( 設定完 giscus 即可看到 )
  COMMENT_GISCUS_CATEGORY_ID:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID || '', // 你的Github Discussions 內的 Category ID ( 設定完 giscus 即可看到 )
  COMMENT_GISCUS_MAPPING:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_MAPPING || 'pathname', // 你的Github Discussions 使用哪種方式來標定文章, 預設 'pathname'
  COMMENT_GISCUS_REACTIONS_ENABLED:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED || '1', // 你的 Giscus 是否開啟文章表情符號 '1' 開啟 "0" 關閉 預設開啟
  COMMENT_GISCUS_EMIT_METADATA:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA || '0', // 你的 Giscus 是否提取 Metadata '1' 開啟 '0' 關閉 預設關閉
  COMMENT_GISCUS_INPUT_POSITION:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION || 'bottom', // 你的 Giscus 發表留言位置 'bottom' 尾部 'top' 頂部, 預設 'bottom'
  COMMENT_GISCUS_LANG: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LANG || 'zh-CN', // 你的 Giscus 語言 e.g 'en', 'zh-TW', 'zh-CN', 預設 'en'
  COMMENT_GISCUS_LOADING:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_LOADING || 'lazy', // 你的 Giscus 載入是否漸進式載入, 預設 'lazy'
  COMMENT_GISCUS_CROSSORIGIN:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_CROSSORIGIN || 'anonymous', // 你的 Giscus 可以跨網域, 預設 'anonymous'

  COMMENT_CUSDIS_APP_ID: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_APP_ID || '', // data-app-id 36位 see https://cusdis.com/
  COMMENT_CUSDIS_HOST:
        process.env.NEXT_PUBLIC_COMMENT_CUSDIS_HOST || 'https://cusdis.com', // data-host, change this if you're using self-hosted version
  COMMENT_CUSDIS_SCRIPT_SRC:
        process.env.NEXT_PUBLIC_COMMENT_CUSDIS_SCRIPT_SRC ||
        '/js/cusdis.es.js', // change this if you're using self-hosted version

  // gitalk评论插件 更多参考 https://gitalk.github.io/
  COMMENT_GITALK_REPO: process.env.NEXT_PUBLIC_COMMENT_GITALK_REPO || '', // 你的Github仓库名，例如 'NotionNext'
  COMMENT_GITALK_OWNER: process.env.NEXT_PUBLIC_COMMENT_GITALK_OWNER || '张灿灿', // 你的用户名 e.g tangly1024
  COMMENT_GITALK_ADMIN: process.env.NEXT_PUBLIC_COMMENT_GITALK_ADMIN || '张灿灿', // 管理员用户名、一般是自己 e.g 'tangly1024'
  COMMENT_GITALK_CLIENT_ID:
        process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_ID || '', // e.g 20位ID ， 在gitalk后台获取
  COMMENT_GITALK_CLIENT_SECRET:
        process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_SECRET || '', // e.g 40位ID， 在gitalk后台获取
  COMMENT_GITALK_DISTRACTION_FREE_MODE: true, // 类似facebook的无干扰模式
  COMMENT_GITALK_JS_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_GITALK_JS_CDN_URL || 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js', // gitalk客户端 js cdn
  COMMENT_GITALK_CSS_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_GITALK_CSS_CDN_URL || 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css', // gitalk客户端 css cdn

  COMMENT_GITTER_ROOM: process.env.NEXT_PUBLIC_COMMENT_GITTER_ROOM || '', // gitter聊天室 see https://gitter.im/ 不需要则留空
  COMMENT_DAO_VOICE_ID: process.env.NEXT_PUBLIC_COMMENT_DAO_VOICE_ID || '', // DaoVoice http://dashboard.daovoice.io/get-started
  COMMENT_TIDIO_ID: process.env.NEXT_PUBLIC_COMMENT_TIDIO_ID || '', // [tidio_id] -> //code.tidio.co/[tidio_id].js

  COMMENT_VALINE_CDN: process.env.NEXT_PUBLIC_VALINE_CDN || 'https://unpkg.com/valine@1.5.1/dist/Valine.min.js',
  COMMENT_VALINE_APP_ID: process.env.NEXT_PUBLIC_VALINE_ID || '', // Valine @see https://valine.js.org/quickstart.html 或 https://github.com/stonehank/react-valine#%E8%8E%B7%E5%8F%96app-id-%E5%92%8C-app-key
  COMMENT_VALINE_APP_KEY: process.env.NEXT_PUBLIC_VALINE_KEY || '',
  COMMENT_VALINE_SERVER_URLS: process.env.NEXT_PUBLIC_VALINE_SERVER_URLS || '', // 该配置适用于国内自定义域名用户, 海外版本会自动检测(无需手动填写) @see https://valine.js.org/configuration.html#serverURLs
  COMMENT_VALINE_PLACEHOLDER:
        process.env.NEXT_PUBLIC_VALINE_PLACEHOLDER || '抢个沙发吧~', // 可以搭配后台管理评论 https://github.com/DesertsP/Valine-Admin  便于查看评论，以及邮件通知，垃圾评论过滤等功能

  COMMENT_WALINE_SERVER_URL: process.env.NEXT_PUBLIC_WALINE_SERVER_URL || '', // 请配置完整的Waline评论地址 例如 hhttps://preview-waline.tangly1024.com @see https://waline.js.org/guide/get-started.html
  COMMENT_WALINE_RECENT: process.env.NEXT_PUBLIC_WALINE_RECENT || false, // 最新评论

  // 此评论系统基于WebMention，细节可参考https://webmention.io
  // 它是一个基于IndieWeb理念的开放式评论系统，下方COMMENT_WEBMENTION包含的属性皆需配置：
  // ENABLE: 是否开启
  // AUTH: Webmention使用的IndieLogin，可使用Twitter或Github个人页面连结
  // HOSTNAME: Webmention绑定之网域，通常即为本站网址
  // TWITTER_USERNAME: 评论显示区域需要的资讯
  // TOKEN: Webmention的API token
  COMMENT_WEBMENTION_ENABLE: process.env.NEXT_PUBLIC_WEBMENTION_ENABLE || false,
  COMMENT_WEBMENTION_AUTH: process.env.NEXT_PUBLIC_WEBMENTION_AUTH || '',
  COMMENT_WEBMENTION_HOSTNAME: process.env.NEXT_PUBLIC_WEBMENTION_HOSTNAME || '',
  COMMENT_WEBMENTION_TWITTER_USERNAME: process.env.NEXT_PUBLIC_TWITTER_USERNAME || '',
  COMMENT_WEBMENTION_TOKEN: process.env.NEXT_PUBLIC_WEBMENTION_TOKEN || '',

  // <---- 评论插件

  // ----> 站点统计
  ANALYTICS_VERCEL: process.env.NEXT_PUBLIC_ANALYTICS_VERCEL || false, // vercel自带的统计 https://vercel.com/docs/concepts/analytics/quickstart https://github.com/tangly1024/NotionNext/issues/897
  ANALYTICS_BUSUANZI_ENABLE: process.env.NEXT_PUBLIC_ANALYTICS_BUSUANZI_ENABLE || true, // 展示网站阅读量、访问数 see http://busuanzi.ibruce.info/
  ANALYTICS_BAIDU_ID: process.env.NEXT_PUBLIC_ANALYTICS_BAIDU_ID || '', // e.g 只需要填写百度统计的id，[baidu_id] -> https://hm.baidu.com/hm.js?[baidu_id]
  ANALYTICS_CNZZ_ID: process.env.NEXT_PUBLIC_ANALYTICS_CNZZ_ID || '', // 只需要填写站长统计的id, [cnzz_id] -> https://s9.cnzz.com/z_stat.php?id=[cnzz_id]&web_id=[cnzz_id]
  ANALYTICS_GOOGLE_ID: process.env.NEXT_PUBLIC_ANALYTICS_GOOGLE_ID || '', // 谷歌Analytics的id e.g: G-XXXXXXXXXX

  // ACKEE网站访客统计工具
  ANALYTICS_ACKEE_TRACKER: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_TRACKER || '', // e.g 'https://ackee.tangly1024.com/tracker.js'
  ANALYTICS_ACKEE_DATA_SERVER: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DATA_SERVER || '', // e.g https://ackee.tangly1024.com , don't end with a slash
  ANALYTICS_ACKEE_DOMAIN_ID: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DOMAIN_ID || '', // e.g '82e51db6-dec2-423a-b7c9-b4ff7ebb3302'

  SEO_GOOGLE_SITE_VERIFICATION:
        process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  SEO_BAIDU_SITE_VERIFICATION:
        process.env.NEXT_PUBLIC_SEO_BAIDU_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  // <---- 站点统计

  // START---->营收相关

  // 谷歌广告
  ADSENSE_GOOGLE_ID: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_ID || '', // 谷歌广告ID e.g ca-pub-xxxxxxxxxxxxxxxx
  ADSENSE_GOOGLE_TEST: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_TEST || false, // 谷歌广告ID测试模式，这种模式获取假的测试广告，用于开发 https://www.tangly1024.com/article/local-dev-google-adsense
  ADSENSE_GOOGLE_SLOT_IN_ARTICLE: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_IN_ARTICLE || '3806269138', // Google AdScene>广告>按单元广告>新建文章内嵌广告 粘贴html代码中的data-ad-slot值
  ADSENSE_GOOGLE_SLOT_FLOW: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_FLOW || '1510444138', // Google AdScene>广告>按单元广告>新建信息流广告
  ADSENSE_GOOGLE_SLOT_NATIVE: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_NATIVE || '4980048999', // Google AdScene>广告>按单元广告>新建原生广告
  ADSENSE_GOOGLE_SLOT_AUTO: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_AUTO || '8807314373', // Google AdScene>广告>按单元广告>新建展示广告 （自动广告）

  // 万维广告
  AD_WWADS_ID: process.env.NEXT_PUBLIC_WWAD_ID || null, // https://wwads.cn/ 创建您的万维广告单元ID
  AD_WWADS_BLOCK_DETECT: process.env.NEXT_PUBLIC_WWADS_AD_BLOCK_DETECT || false, // 是否开启WWADS广告屏蔽插件检测,开启后会在广告位上以文字提示 @see https://github.com/bytegravity/whitelist-wwads

  // END<----营收相关

  // 自定义配置notion数据库字段名
  NOTION_PROPERTY_NAME: {
    password: process.env.NEXT_PUBLIC_NOTION_PROPERTY_PASSWORD || 'password',
    type: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || 'type', // 文章类型，
    type_post: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || 'Post', // 当type文章类型与此值相同时，为博文。
    type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || 'Page', // 当type文章类型与此值相同时，为单页。
    type_notice:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || 'Notice', // 当type文章类型与此值相同时，为公告。
    type_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MENU || 'Menu', // 当type文章类型与此值相同时，为菜单。
    type_sub_menu:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU || 'SubMenu', // 当type文章类型与此值相同时，为子菜单。
    title: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TITLE || 'title', // 文章标题
    status: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS || 'status',
    status_publish:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || 'Published', // 当status状态值与此相同时为发布，可以为中文
    status_invisible:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || 'Invisible', // 当status状态值与此相同时为隐藏发布，可以为中文 ， 除此之外其他页面状态不会显示在博客上
    summary: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SUMMARY || 'summary',
    slug: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SLUG || 'slug',
    category: process.env.NEXT_PUBLIC_NOTION_PROPERTY_CATEGORY || 'category',
    date: process.env.NEXT_PUBLIC_NOTION_PROPERTY_DATE || 'date',
    tags: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TAGS || 'tags',
    icon: process.env.NEXT_PUBLIC_NOTION_PROPERTY_ICON || 'icon'
  },

  // RSS订阅
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // 是否开启RSS订阅功能
  MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID || null, // 开启mailichimp邮件订阅 客户列表ID ，具体使用方法参阅文档
  MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY || null, // 开启mailichimp邮件订阅 APIkey

  // 作废配置
  AVATAR: process.env.NEXT_PUBLIC_AVATAR || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAH0AgcDASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAAAwQCBQABBgcI/8QAQBAAAgEDAwIEBAQFAwMDBAMBAQIDAAQREiExBUETIlFhBjJxgRQjQpFSobHB0QczYhUk4XLw8RZDU4IlNUSS/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIxEBAQEBAAIDAQEAAgMAAAAAAAERAhIhAzFBE1EEFCJhcf/aAAwDAQACEQMRAD8A5j4is1knkcYTByCeK5gTeG+mTY+tendSto5I2DKCSMGvPb+wQyMEGRk+WsN0t+VM2+xPcVYQPoXSAWA4xVKLaVD5Wx7Gi6bgKNMgGa0zi4knYklvy0HfPNFtJ/FI0htJOx9apIYmkc+K7P6DtV/YQ6SCwxj0qUjq+l6IR4m+TsDVnF+c7MefTvVTZZ0qFOw7etSmuJoDMyMS4U4FZrpFi1vdySMbaKVkC5YhSRiiRzoo8PSOMk7ik+n/AByby6tEkvZbeKKHw5LeJdJZvX3pxZn8bUV1xkYIIzWudY6akeJSrxKxXPmydVAcp4paLcnanlhUupAK6v0ngUJowJi4dQD+nT/OtMheGrEltjjc+vtUWBgwQFzyB6UVlLRhihZAd8CoPpUxyGPVEdmB/TQRnWVUycqD6b4qKuZBhpF1YwCxx/Oju8UYKxnIO2B2FCKRqoJy2/BPFAyAsMPnVD22OaEpGoKqsEAz5hitghSSwYoeDkbVky4AZQR9TnIoGbfqt3YOrQzeU76W3A+1d10b4jivfCh4lI8y/pJ9vSvPDETECdRQncAb1MSusi+F+WB3zj70wexh49BCjB7g81AK5OzaR6VwfSviWaLQl3KHUDAflq7W0vIrmJX1hlIyH7Gs4HMrjSTkihG2iV9eXyfVqJoCg4OSTWlY6sEUEHBC5IyKjG2UIKjSKZ2bbn2paSEhyVfAPYd6g3q8UZTAIodzHHJCUuwrJ79vpW9lBxge1aWVSTq83tVHM9Q6CrHNg5lH8BOCPpVBL4ls/gyowbOOP616ToBIKpv2AoN50+16hHonj0uf1Ab00efrC0iMoj2G5YVoDygyHGjdRnG9WfVOjXlgSykvFnZ19KrNPiriR9B/iIzWhn4gY8+ZAeDzisItyQCxLHcHHFBVGiJXIwOdPBqeqOF3cIrEcKaCciFHjYnHsBzUpIRIpYrp07gk5oa3LupDjIHAPaps7E6dRKZ3A7UGmVVtRrbDZyMbk/WlnZ1cMFzuARjiizRhlKanH8J00RVjwCcEn3/rQZDqUOVDNGDlu5FGUo8Z1EBGPYf0oaKEcjU4BGCAdjUdZbCAnTnYDag1JEjTSAyNgY0rjesMaJIp1gZX9Q/vRHdYnZfMPUH/ADUFKuy61fHY5oCLGqpjwxKc5znj3qDyvlBq1BBt5eKkWCygB2VQd8DBqQDE6hqAbueDQCRgctsuo4A9KMkk0ETxs40H2BAHrQniOURkw2djntWvwwEpQk6RvnPag1LG8cilWDI4wMjiiLIuQoO4OTlcA1FGnjcBBllPlBAOTR31OfzYyknOCMUEG8M2xCAZz8xPb0rISxHmYAAbe9aEGZ/KCwIzzjFQui9uuRucjY7gUB43UyPr1KpxljRYpcowecklgdXNJGUsAuhvP24FYGbPhjkHYHtQOoRpfzh1J2PofWlby7gsbY3A3kB/28bt9KOpBcmUb9ih2P1rUpB83gqp+uaCus+qwdSDflSxTE5Gpdj9KtIbqWEnXkoo+VjkkVBfCeRQFAYDcgYrcsAydRW4ODxsQatDsMyzkFA0bRndAdwPWoygbMurVnOCCdf7VRwX01zCc2s8ciNpYnGAPrVzFfobBQ7MjJsXT09+9RAzE6SqzRjJzggkUMLKY2ja3yvZ/mKn3plZI7iII86yuvBUjJHuKIi+GuUYh8YIVc7fSgTit5kXCTa1051OvFO2topsj4dxmUnOA+37UldXktuIQ35sLeUaF3X61OCVstIXHhocHw+x/tQ0t/3cis8s8MqoSNKHDKanK4mtk1ZIG5A2bPtTl0njL+Kslxkec7YakYJQ8rrIrKynYjjP0oDLLIiKVgV0G2w3rKhI6wmSXxJGyQNC4wPfFZRXncnUfGlWNFZzjcVVX4huUWS3tTFp2c69Wo+vtW2lZrZb+ByrBcgrtj60BeoSTr+asCsTk+GBvWMa1XvFnIIoP4fjFW9zb6lDruSOBQltSq6pWCL/AMjVSlIbbzDBAq4tY8EY+lChSHfw45bhz2jG371cWlj1OVdKRxWaE/ORqarhpu1hfwyVwpxyxxSF3eQANGk34ibusIJ/nVnB0O1dh+MuJrqQfpdsL+1WMENpbRkQRJGqjGnGKmL5OTtOndQLG7itYIWJ2ac+Ye+BV9020vYpvFu74zSMMKiLpWrRmhkjIC425oQV/KIyBnYeatMsnZ/EWLBDryc8596C4dpl1uAqnygHf/4o0jOf9xBqUYzjY0s2WiGoYYH5j/mgOXCapNIZWGOTuaizhVQbMPQ+lRbeJEVm0Y33wDQFRFm8JyVJHJG2fUUBQUEmlyoVjtvWERsHMZJ0cnNSmjhdRGArMvcjmoDVBGcrnUPLgYyKDSyfmoigH/keKbGksS4zp5zwfpSQd2YBIXUeijOaJESRupGo6cmgMrCHJj8oxk5JOai0hdAZT5X2AxvWrhPyQWbjYA96GEdNA0bnYat8e9AVI8OBAGYgZG21WXTepXVherIoPoYpeD9qq43KMRI2DnbS2dqaQNISW1FQdznfNB6B0vr/AOIyjqEfOyM2x+hq9R1kAIO459q8mV9HyyHIbJ33xV7074rnjMMEtoQc4EzMRke/rWbB6ADpPl3Pepg5GSAM9qQt71JlyjqT30nI/emASBk+lZ0EeIO3mNLSRlG4GPWnEfUNxUXRTzzVCYl0ADVk5qSySagZAQDxprGjXVrBGB2qPjMZCDgiqGxhkwSHU9jVD1L4XimWSS0OhyM6Dx9quUkzjAwSdvSmCmpcE6T7UHmT2c9pmO4R0fGxPehSGIthtRJ425r0W+trS6QR3KBh2OdxXJdT+HpbQtLaxloc5BU5NXRRK7ZEQUsPVtitbePLY1HSewOKOWLQGIrkudyRjH3oXhPpOkYC+p5qiMb+H5SWKk4Gd6ONAHzbkY37UERBCoBcepPapo8eWFwxAAwpVc0ElCrlfMR6E1jxo25xsNscigagWzFgjg5NTTUCfKGwP2oN6V3I1M/fW24osbgRAjJwdz6VFJYyBqCtjtiopJqk0NGN/wBJ70BDIPmWTVtgsTsK14xEZBlzjsO9CVrcTeCFCfqAPyn61PKGUsIggxgKDsD6igNnxYtedWB8rHcUJFOlpFxgcqW5rRZF0uSSxOnHb96MynZwR5hgADcUAQrBcFyT2WoFnfJJcyDnVyBRTnH5hAIOxGxHtUZobpj40mMZ8pJ3PvQbMy5BOoPjBAo7KbiAavKccgUtM0MrBdWkgAmROf2qTRMYHKOWVds5wD9qCbJpBJbYHHPI9qHDLGJ8NqG+APSo/kSWza49ePQ5IqcKJLAHJIUDykHOfrQHdMkM0wQZxkjINa0mMtH5WIGQwO2K1EPDRj5sMfWtNoUAlTn2NASOWRNm4PBxVH1qzmhnF7ExB7hcrVukoSRSiErjOkHGKZcPMoJYDT+l1ojk4uv33lUlnCjc6dz9aJB1mWW8xdOfAYYJiXBFdELSBpNZjXWOCvNC/wCmWLE4hAcn33Fb8kxzlxeiPqCSWSOk+du5Y09F8RdS1GOaMSPqwdQ06RR36DJBIJrS5VJ99nGr/wCKr7hZbcueorqf5llVgCD6cbig69kSRI8PGCdyq4296BJHC0p8IZmxlnxjOK5W3hkEv4lZoQQDsWwW+1WVj12COcLLakSnCmRWOSPoaWIvIOp/hY/AlaPw5G050kEfWiTf9uhkIXQeGbYE/Wl0ngnLtE66kw7E8YptuorfW/hp4UyD5nXDAH6VlYTSTWv+2HJ3O21ZUY2ljjaCYaTq8kkW2RWVGnjllK/SnktbzKxMMqcZB9qi2qU4sLIgHfU66BXYaI+41Y/i3oMihm0lMDHIqKo4rO+kVRLOqLjGI13pyHpdojBpMyOe7nNOBW1Y4xya0xIIAUHB70DsaxJGFjAUDtjFGN1KjqFwUPJPaq7xNADnLHuBR4ZPE4yvf3qobWVgfEwSTsdsUR5ZQN8nVwPalNWDksSc5I7VISM7gsfKBtjeiYfJJXY42821DMgUKuCVHJK4xSr+YncjG+xxRIl05z+rgKc4oDgoSG/EEsDtg81F5Br8Ig+cZ16cj71sBBEoChH31HnP2oLNEG2lGonOntRRElVwEC5GnBJ/tRCDMAHHBGMntQprgKg0oBgYOk1iE+CUbOrHOaDbnzeRcEc43yKIEIXCsJQTttgrQoxhlXOGPr6VMLIpDqVXcgEUE5EMKR+AzB85OBUSA/lRvMDlgT3rbco2wc875zU2gUwtIrYl7kbg0EBBOJA2kog9O9bJcjDKRgkiootxJjLHSD9aK6sjDw1dscahxQDMcWU1B8jkA81PwxCQq5JZsjDVKfxJMro0sRuc5FQhtGjTW5H3oDgDUNBy2d9Z7VuWREXTMDkHI7ilh5ZNaphAf0/qptmWVSTGPEI79hQP2HUJbCdXtmYo48wY5Vq7TpnWEuIV1FQ/eMtkj6eorz2NzpBypTgaeaJHJ4ESlnEbas6xUsHq6ykrnbBHasGT5tJP1rkOnfEaQLBBMxldj/uqdj9RXVxXqNgHyseFNQb0a3B4HcVpQnAIBBwc1tkkkz5gBUEi0gBjkD1FQSZlxhAxPsKUkuJ3uhbq+kEZdv4RTzSqEO4yPSuciuZ7zrF1bQsEkyMsRkKvt71Rdx2ca5cuZD6k0ydAj0jcHbGM0mqyWki5zIO+9MNMuMg5oKTqHw+lwshtsJJyYzwfpXI3Sf8ATVlS6zGVGfNXeXd2oTKbSbAEf3rzz4662t/Pb9FjiWW7chnePcovuKsFVc9dtoo1keTCNwOSftQIviS1c6WWUA+sZqrvumt0iQxhhdXDLqCIASo9/Subl+JJbWQxKInkOxCknFUej21/Zl8JOoJ33pwS6mLqdSfXmvKX6zfFgwZYz3Db5qytOv3ESBZpUcYzgcCrg9HAWRAWXAzxngVFzqm1LnTwpzXMWHxTA2EY4b1bir23vUuJVCyHJ2wCMGgfSEvmR2DPnBGmpF1kYmGJQUXBGc7dzQEDqzkM0YznSckn3plpEARoiVkO7E1AFJCXCq2AdjkUVWI0MW3j2O+M0FlHieQHHdc0ZI/EAZcKQd80EMtI+JVLp3TO5980REZYwhkKom4Gc1FsoQSRgE9+a2kwcfMoBPpQaVgsgkBVSBgtp2qUkoY7HbmjSmNoA5ZWBBGAMY+tJomdXk8p4xwKDHjMmMHGewoyqsOPDyV7qR/el2JXCnUHOwKjOKPGpXIKrkjucUELm6ieQRxxzCU7AFCFJ+tFGtlBkhEZz8uoHP0rYV1GVIKnbJOStahUxIGLa2383agKjyRxL4Yw6/MDxioPKCx2I33HpQVlfxeGBbPnX19KaiZs5dsK67ggHFBvLFA2nBPHrW4X0NiVgCeNtqCGcTPliyDdCSBkVMSklS4JAOBjtQMkqfMDwaorzobzSOYrnyP+kjJB9KsJbs7rpxg/Md6lbyssYOkMC3BqxFdY9LuLK5jSV0aNeQY9/wB6s5OnWTTGS6tmLsPK6NjBFHmKTIpU4YD0qu6qL2aELYlSwG7Ntj2xTamF7jovjzYhmeNW2AdsgZ9xR+m/DrdNn8SG7ZnGzGPBXHuKpI+o9QsrqJriUSop3RSM/SiXl83UZVFqHgmG/mfSTVxY62Mq8smp21E7gbD9jxWVwpuru0lL3DzrJ/FnORWU8TUUUEb8GhOSCRgkfvimGiIVSSSaifCxhk/nWVJFWLE8Y9ai4wF9DzTGhmOoYxxt6VjMI1yoG/rQKsxAGBt61JZZFGVAwdsmpl8ncAZ74rFVS2QCfbFQb1sANS5AokWrIOAo7gCtABWyc47CpMI2fJJUdyDiqDEIFbckEb54rAVUKA5A4oIQO2dZJ50niiq+pyuwcDbSKAysSADpZP2oRdzL+VEmlRyakVlYAb798UYKQfD1523XFAKKQ6wzjccgCpkGSQMsZU9s96YBTK+UZ96G0LaSQN+2GoNZLyglcY235rYdi7KiBznjPal2WXGtiPL2XOTTMJVMsG3x3G9BrKklJ43QZ+Yb4piFUTMcbElvUUBmOgq7Mc+nBqKvcF00uAvfJzigsEjuoh5tBTnGd6hOxYhiMN2BalSkzRhjOzZOBvzUY4oh/vMz4OdPFAwEkzmQaWJHlFTVkiZ31+IqndGbYUKMqrtIqHLHPzE4qZQtrZkXQedXNASXTpYAhQCCCK0mlQd2BGTr5zQx5hjKDcb+lFQEAhVL52B7fSgEisAXZmUEYwP60ZBlNORGwGcKc6qhETpaWRw4PIzpK+1ZqxGyLseQw3xQZArpMmmJc8ENzVxB1e9XQkk7+GjDyA7iqyOREiwCXI31DnPrU2lmLh9Pl745NB33T+r213EMShXB+Vjhh9u9N3F9HbBfxT4jZguvgDPGa85jYiaKf5pEO2rtXVQdWtuo27W1wumSRSrRv8p+lZsF9LIIl8gADkAZ9aoujMY/jDrMcoGoBCgXuCK52e+uL6aP4fVw1/EdQmJOGjH6tu4pCCw6hafGttaSdZu7ee5hOLgYOojjY8j2pivVIyTcMvOBQJnjUkKuN658dW6n0R//AOXiW4gLaRewDA9tS9qsxcQmJrsyjwlXxC2dsetBS/FPWv8ApnT2dIw9xJ5YUHY+prx67+IYeiX114NwJLibAubthlge4UUL40+OHvut3V5Af+3hPhW2/fu1eZXF3LdTvLKxZ3bUfc1qRHQ9U+KJbpJILdfAt2Pm7vJ7k1UxXM7ZNvExxvkCmundPtoYjfdTlVUAPhwkEmQ/4op69EsZhgtUx23IA+greGkVu7jWPxBcg+oq7sYxMVSNgXbjeqGe+uLs6J5QFG4A4FRtvEilykpx6jatYmu+tunTKrE2+tQPONtqsbaZbNUkTWsLHcuDt9DXI2XVp1bTOTKjc7kEV0dh1CPGiCYIjDBSUZFZsV3lhd+LCC76kxs45p7IkYNE+DtkGuKg8bpsyyKf+2bYlDqC/wDiupsbtZ8ZkYMo3UgHP0rOBsNIju2ltWcg0SNgzlnQrJjOx70MOuV8PWT2VtqMW1uxJOccelQY2jC6WUsRlgRgg+lY6qhXQAWZfWoKMRYYxk8My96ixKoMqpB3GKAo8VYArDfOCDzRGUphgCxABwu2aXWSQoAzLkHYnvRfxLLp1xaB8uoHmgyd1aQfpA3xjYfWiPI0wVG7/KAOT9fSot+ZqYFRjYnHNSJVGUNpIXfy8/aghGfCc6wykbZoeFiLeGrOCc4BqcquUZwr8k7j+tbKxyx6hGCdO+Ccig0H1ppSV0J7gVNVaRArNq5xk96VeRY0CanPYA8UZpImePw5BE6pvk7Z9qDPKJCuoBvTGT+9SPljBJLITyy8GpLFHJDq8qMc5OM5+hoKIWTzalbP2oJuUGkaWyRgjO1NQyIANWpSfWgGFC6gk5OflPNY8mCqkMVA3I7CgmkwjlZWBIPrSF702SVZJYbqaMnzCPXt9qbW4SNXVG1Ox2bHb6USFDK6oiNJrG6YojkLiKOKXShLgjctzmmLWznjuIpzCXUAeZTn966M9NsQS7xnVnJycZOaeygwiaSoXIXkZrWoRm6XBfKiyRFGA2GcZrKdD+cN4JkIGNPA+tZWdquNRQyhhkAVmgMfMAV5oulVJIBx+rFDMYBEiq5BOMY2oocikg6dIPYihNEmnUSdQ5pkqpbJBznsa20Qyctg4zvQJjDg+Qg8DIqPhyRDTqBGdyqnamWw50FsHOwPNbYOoI0j6nmgXOSgQBW32wd62AxUI7DSNwpFEVPfB9qxcyakAICjOWNBrTpkUjsOQaMHCocY1nuDQG1MoQb98iiRhMkEHK747EUBFbTFnLau2DjFR1v4seZtCqfmPYmpa1U+XBx2O9YirK5JY6s54zQFEgBbXHr0n1wTUQJH3GVUnIHepuxZdJAYeq7GojEZUYYkjg70GpSwBZwpOa1JLmMsYBnsUqaMNRGnUvG9aZchgukDPlHGKAcQeSPC4G+4PNYkcrMU0gDG51gGixxNuXAI7EcioPCXIJXjfJNBpdKOEML5A2IPJolvD+U8rDSf+W+DQgWPnZSqr9cZqYbWhbUTk7gUB4yUh4Csdww2zQZZgUb8Q8gXsm1ERiE06gyjfcbj71MAsAzIChPJ3xQDihVURihEbH9femQAFGktucDy8UEEuCHkRgp8pAoqYY6QNeeAPWgnbxQzOFuJFjVckNpJJNYqyNL4asAmP1DGakxkRBFxKRtrG4oMrzJGqFy2Ow4/eg1bRyjWrBQNW51YIpgyNqILDQvA5zQ9KuB5zg7jfmgShEmLsSFY9zxQMx6pQZIpUGOwGc1yvxJ8VGwZLO0iEk+ckKScV00zaAXSTDHOwP8AWvO+pp4PXkmkYBJSST3H3pAGD4t65b9Yt+pglZoBpGYz5lPIPrXRXvx1F1Buk3ZUx3tnKDkbqUJ3rEghS2e4EkeF3YE7muT+ILS1hmMtq+I5BkYPDdxWvs19G33UIr34YZyqvDOB7hgeN68o/wBQOvXvwz0SToDMCLtRJG4fzIncH3/rXKdD+Pb/AKT09+ntIzW5IYAn5SDnauW+LviC6+IOsy3dzIHzgLg7AY2FTxyrqmllaQgEkgcAmtIVAAOxJ+b0oWawnNaY1N5pHADMWxwSeKjvzUc1LJIxQbGKMjEHZsUEADnmp+IOwrUQ/HcFSNKlqft72QN5jtVKsijnNMRSxfqBNU12PTusywrhJModirGuhsOttEAUfIXcDOce30rzy3ljI8gI9qZaZggwSPvUvOrK9j6f1iK9YAsqyAcZ5qwl8UlXEewO4PevD7brlxbSK3iHKnY13vw/8bQ3IEV0xV+NQY4rF5xXaSAmPSAEXkqO9ZFFG3+7lGOdPmoMF2kmoqwdQdsHNHVwJCkag55JrOKiwKICu5BrIx+IyqsQqHPsDW3kbXoCbDbUMVpY0ikbVKc8kqMUBTI0E5V0OjHzLtRMoFGGAYcYHalVLSE5LPjcUVZjglUXYY0saAjTuzaXnYgDIFYshCl0dcnsy4qPhMkZPhhCdz5gf2qMc4dJIy2rg5K8UBGw8YdyDjbPoagkjQqwCqRnfIzn65rDIhYBdWcZJ7ftTEUsKSGQMry/wyDI+tAATSKwAGA3ZtgKyaV5iF3BU76RmseSM6JFjw2r5ePtRJlneVmACryNO+BQCRMqRIxbc6HydhWggYZLEaeM75rCjxq+WDKeV4NbgULEH3U5xnINAeMQSafOMd9sn9qAmFdhqYpq2xkHFYYiRmElmAPlBxmhkMqgNqGN8Z3NAwVeSXTE2qM+YK3Kn61NAkjFvEKFe6bEGl9pZA2dW2wB3FHIUZ1IPQH/ADQMRX0ot1SUl3XbjG1ZSixrJK2qQqeyqdjWU0U8UenZUJ75NQlDsAEAAB3pgM0gwsZ4zk4rFgkG+VT+poFmDIoVo875DZBqEgBzvuTwRR/DYtp9OWArTadODjVnANABFYNmVQT20+lEkDOAdgO2dqmGOxDMQNqE+TIfMCOATtigGyg6W4OeRWim7Z3z6CieFJGOQRznP+a0JNKnI1EUEFgAJZU0kDt3+tZgknHcciiNI2zKSB3U1HSN3DDOM7UA0DQsGG7DYk0wizSLgIIyNwSaGFyTgEsecbmpo7adJcZ9xkigJbxtnXJICoG2N8fWozkOwEeo7cqdq3E2UzIAHHcbVih4g2mTIO/m4P3oBKjITgjVyd6IieUSEEnV8prFyozIFwTnJ7ViSmQnSsbAnntQTdA0gIZojzsMg1ILIQxd18vA/i9q1plDAqVXTsfSsYaBqw8m/Y4A+1BjZ8PCjTnkLx/OtAIEIZXHpvxW4meVyPCbjasaR21IygAcaR3oIpEwU6dYGdnzRFLaykeXx8wIx+1Rw2lRKAsfOoVkix+Jq1EkbjfGaDeqOLbQBJ64qDSuiltDagdjsK00jeIC0JXJ232rGGrzK5AByQfWggpeVlDSEb5LM3y0VZnjRiuG7bmpQQROGknAIG/lOCKDJPGiHSpCcFj2oCq5SDygKh31asmlOpdUs7GAS3EgVgOCP6VuS9tYojh9W3BHNebfGHUT1K/EcUumKMacZzVk9hvqvxzOZRFZhFTP1Y1zt5f3t2QZmbA3BY0COJEZcfMO9Flj8XzM4LV0nMxm0mt1OuPO5U8gk4rZvGaLRICMbg5qc1vJIBpbGONqWmabSFfdVHFXEaknEikZ3pIn2rZPn2qJPas1WqzFZW6g1xW81qsoNmtg1oVmaolmpB2yPShg1maumDrNIo2fFE/GSFceI1KVNPmG1WVLBsytvkkZpmyuZ7eXg6c70WG5RE0lFJ4GRTImSXIMSqQe1LCV0Nl1++sZFkgfykDK9jXadF69cX6eMtuSB8xQ529SO1ebW8iN5HGnHDCrTovVJOkX2WY+E+zgHH3zWLG3rNpcoz+NDGh777/vTMytMzSBRvuVC4FUXT5TLGCupsjIfjNWKzTFgADo9c4BPpWaDtpSIeU+4B3FaGDEpPhqWbAYtW9SGRm1su/ytUkWCRlOnUVPB7VBuaJwCvirrVsELvQ43YNhSNPJUj5qbleASYySOM+lKmKOWRWKFivG/wDOgMiM5CkaFYZAUZoLIQwZVEjZ504OKwK+oNqJI4J3qUO4YmRiONu30oCxxCYj1HyhjmoAvExjZxoY7Ef+KmGHl83371rwlB2y2++BQYI1UFFByTvk5rSxBVKqArA/ODWNLHpOGYMPU7Vo6Ru7Aj0JoCRStHGXJEoA3CjcGsOi4fKuQcZyp3oSQhFIiYjuRnOaxRJGxKMSxOWKrvQY8KOpEes6fmZTWMZsEJpwQBkmta3jZ/mZsfMu371JZj4R8nmb+I4FBI5RF3X6jisoBVJAQVwR6NWUAEtyjai5yd+Nj9Kmy7Athd+3eiEt4gUasH1GcVhwNImVuckrtmiBlFUBgqnfkGo+CXDDwwSNyANxW3jk8f8AJKBCeT6fWpt4gGljgjbIqBQQjVqOSAfpWmjyS4GAO/YmnCkYQFgSQeP80AgO5Yo6j+EHmqF2XWoyxGPXehmIKFbHmPftRWjU7hSPUHfNbijhyMtg9xQhbS5YgSR5xv5SaH4TpkykAjvjAP2p+VNCMQozj7mgvOkiENHsO5ooPhqp1rKckbnippIhAAAZj3Pap6YwM6gUG+PWoSskYBCKinfbtQZmWUM6EMp23G9SEnlIYfVTQYgFIYyAhgSfLWRqxfZiRnJB7UBEGUOnGDuQRxWCeTWF8MleAAKKVckKF2Y5yKiseksckMWwoB/tQYC+ooy6fTFSDynZVkIzxWykiOAyEJ6uuDW/DTSQkpTHpQaSS4gU6NJz61qORpWIwU74GCDQTMkOnW2tc796OF84l8gBG2kdqDfglmUa2jUnznsKj1FVhZY0uFdW/XpHmrU4hLDw5Dngg7D71KJWjYh44tuO+aDUJVkVTITjZRjg1qKF8vqQEZ3z3oqrGdTkRRPn960WaJ8+Zgw+ZN8UEjD5GYeTbY85qtnkkZDlkQLtt3p5pDq0ao2BHfbBrneq9QjgMheQKFGcZ3NBy/X+rNDI9vbE6+GNc2sbFi0j5Y7nJ3Nbur8SzyMu7Mc5JpHxXblzzvit8os4hDsCCCD3PNTaSPGBGAfWqcS4bfeio6j9e9dJ9MjSPjvj71XzySA7nY080zBRgB/XVS0t1G2z26fUHFShBjk5rMZFEdoznSpH3oYPas1WHatmsNaJ3xWVarK2RWhVRsVvYVg9TRFiD8HfFXxpoVZ6VN4mjOCKgVwd6YusBosbBSMjIoWa2v1qyos40jkGpTim/CITKsNqrImAI3xTqvvnJrViUdJSqkNvvzRVnZ0Kk/QUsBqOxqDFoyNiMVixqV6P8E9caSP8BNIoeP5SRuRXZyFAyhGIJ4wNhXivTeovZ30VymzKck+tex9LvEmsY7hmVlYDnsazVN+CzjTO2+PmHejYjRhp+mM1FnMsaaAGJzkL6VhDpvo0gdzWQQyJHqUL5s4JPetKDGAyMMdgaxZJguCOD3oxVDGMlsHfANAKSTw1wxcBuGAyK1ygA3A5IxhjWM7eGHVC2diM4xQl1KRqAXJz/wDNAUBiwBU7jG1SRnRjG0Olc/qPzCipqZQMaVxksP1Uv4krZaVQ5HylR2oJEkjJjABbJxWpADoKyR4zgKe1bDEx7j6ZNbLmMICEYk9hnAoNTyeGAzMwOdIbTmptC0UxxPCzEZIIJJosMzOHVhjIxpxnFAZCsoYLn1wdxQbWPSNesK2dhioztJbsfKzLnIOg4P0zUpj5iFbV75wRUi8k66HaVgMELrOMfSgVaWLId1II7jb7VlGeBhKVQ4T3rKCC+IHGSAQexohLSoSAH08laIgRyoOkIeQdxQ2lWIMqoRjYb5BqMtLKmdkaNlGNxnP2rbqzx5DDUfMRjFYsZ1B/EZTjJGM5FbiVSoKHnn/xQLSsSwZozp9jW3QIA4Awd8GjSFNIygUDnbv70vHIv6mDN2XutBmpGVtSoFA21Eg0m6FR5Y9OTnGMg04YlTJkLHPqOPvWMeNJyAP3oEyDOSDkHGBvWvDAlTUBtz70WWOdWwmCD24x96E5dWDahnjBNVU3OqZhoDehzxQ5F+XcZG+RWOZNWccb8GhGPUBICyj0ztRUvEVSC6jJ47CsVSI2JdjjsO9EYgW/nRmJ4I7VopIsGtcleDgcUEHId1EbsqqN9W2akVM+kRuq4/ibO9CGlVyWKkt3NTkUu35SkLy21BvxZIkEczpztkZqJdseKyMVOyknGai8IkYedFyc4bOamk1uAFQEvnhhn9qCJVGQakDA/wDLFZiNlKCJsDsp4rc8ETjZ9JO5Unb7VONikBVQzMB8ykCgjFFDqyYJww4I3FOxsrQsQNXqG5pUSSkDw8jA3Dd62JmVSCCmrk4yKDFeAMdSqWPY1EgAaolaI9xnmpQSxhydSnTztioy3SBXkwpVASMZoOf6n1JoXKozM5GTnsK82651qS4le3VVCg7tnJNXXxB1mMQyNCSHlPJNcQSWOSSSasG9R7E1tSx71EHatg4OSK3GEwCW9aYQRxgZGTS3ibcVJHwM8tWoVYa4ymWAA9zQ2eEqRHBn/lpoMK63BbnPFWXiIqYAyfftV+01SyLgnK71EocgetPTr4oJA27UaOFWRDpGcfzp46eWKt0IJ24qGMVa3VuBbs2k6higPaEoJBwal5J0RNYp8wzTJtWCE96CUIGcbVMa0aOMSbrsR2oxi0nOKAiNp1qxBxTEc/irj9VbYrWjUu3zCotF4keQu4qY3ORsaPGwBDDvyKYRV4AIBBFYyAbjg07cxZYZBwc4NK6SradQwds1mxpBSVOx+1PwS5X1+tIMANmFSR2j44NWUWisjcZVx77VsvlfNScM2ojV+5posNIINRUTrXdWGPSvRP8ATrrltPM3Rb+5Fu0gzbu3ys38JPavOtRIODip27MJkGfNkaT6GsNPo6Xp0vTyI51ZZPmXHyn3zQGYSSkN+69/rXSfBFzL1H4atYurpHNMkagsRyOx/wA1Pqnwk/itJYEeGxyY2PB9qxo5llLjSVYnbAFYdhhsrvyexqcqSQTlJkZXXYg7GlmkBkJ3wORn+1BJNSSAB2wc7nfP2oqXskT506sDB1KCCPvWo1L4YAHnc0J4lYhHjOoblg3FA0Toi8TxSWJzpxx9agmqV8qVDDORnG3tQleKNDpLnfffmh6hucY7j2oJsoUsrNgKNgwqSkeU4AA5walEVlj1M45/VUljHiCVGVtPKhdsUEADjxY5QQTuOd60ktwhd3CPnjsSKKYULErhQewGAaEH8GPBbIP6RQHQakOQqknnGaGuoMRhuOQNq3FO8ytgoAOAdia0XOkhSxI24FBCF/FcmQ/Q7j96ysn1QDORv/DWUEkVoCQoGcbg8UTDSkHOn2WtxeZttbkco3Na8Nw4OSMH5TsKjKRZhhF1oRsQTzUDpBESRlWOwcNsK207OSHj8NTsG5K+9SQQxgHxFZjsxA2NADLKwXG4POQagUJAZ9JYnkDijgBSNB2zkhu9EndyuZHRARsMdqBIxyENjS5G+G3BpVpZtJU25QE4GNxTButZKwOuQcFweaIW7swJJxnOaBbDoMPjSO+TUTGhXUIjIoIJIPNMsvmw4JHfegS+TzOrKo2AGd6oA9yI8qp0JyA1QeVcZY4221bZPpTZ8FISrLufMfelwsTqCXMgI2QnOPtRQhcjBYI3qR2Fb8Sc+ZF1Lj5NQzTCKvg4KjHbatNMiKUC6yRn/bzQRFuHwGPAyNe+D6VtrVwzFmIUbb960JX06S65wSVIqUYV4dBbUSM8UUJ3KqUjYZGxORkULU2VAYBuxA3FbeEoNLQHSTkuBUZAItLeHIUJ2JFAw6gxnWFIHJZsFqAqaB4kKwn1V24qR2UNkHPqKjpULr8Nd9tPFAWNieEG/OP81ElCGGh8Y3YEYobALIQhzt8pFFjVZbNiZAj+hG9BJpQIThE1Dviqzql08HTJZAhUEFQwGxptAzBlaSVSds9q5n4qv5bfpkiyswUA6RnIoPL+pXPjXGkHYc/Wk81jZZix5NZgCtRKzg1hrRNYDVRLNSG5qI3xUkbTvViG0cRr7jvW/EyupjgUprzya0z6+TW9xMOwyq2UHamIzhSv8JzzVZG5RiaYEpyHyN9iKs6ZvJyWTWmM5G9ZbyZj0n04pYsQcVBWKSVdTxuG2AJA7EUtJHoGk/K1TMmQD6VqRg6A7cUpzoER0q69xvQSSG1LtW9X5gI+lQNZdMMq7MuteR2qUc5Zs96WRym44qZH6x+1NTMPByyhTikptn+Xg0eN8getSdQ++ORVpCTYznG1TUArisaPyke9QTUrYPNRUvDKNg8GiRSFSF7VMNq8rbn1oR8sgOaWEM6sYNa1AkEc1HV5ck1BGz3rFjcfT3+lvVB1P4YtJACZoVML6fbcZr0Zm1J8rAnFeC/6EdQaO6vLTxMI+lite/M2FBGSMdq5X7CV/wBLtOoIouUOocODgiuS6r8Oy2txqjTxID8rdx7GuzYyMw0gsvrRPCXB1KGxuPapo8wz4eQF0kbEVDSNTkuqEj65rt+qfDsF+DJCognPfs31rl7/AKVc9NcCeIlezLx+9XRWCPUfKdvepkAhSquWB9Nq2qFgeSM/xUw05WMx+GWcenpVCS6Vk/OXV7EZ/etkFCxhJhB7KMgitMkbMC7MGzsMc1IagNaglTsdqCObqOZWDqyY3PcH6VOTE+glcOm+QOa1G2lyU2JG5NFWaNJXDHOdsUAtw4OFUe3atFV8MANh9ezZx+9HuonFuXRFwMbht/2pWUkRRqCQrHdgOKAwcJHiVWdi2Aw3GKyl4SqzGLxA45yp71lA8GdkJZdS9wTuKxTLMjR4wAM8DFEEilc6Qjn9IOaVyVZfFA3/AFB9x9qjIq2yEjNw0eoHY4IrGGG0rpUrvqqbRJKgdGClRhlZTvQhb5XWm55Jzx9jQTmkDoGUBSedPGahod0ztqG53zU8qY9LjxXJxgjGBW0QRhQ7aQTjINAM2ySSiQxxmQD9O2ak0as2cLGoGcd80VrbUqyIJX05yVHakJ5JJHwqMW7FQcfzoJOqtIArNgb6iM5rTmSZcpCzlSMN2oqEvGNWxJxzitMWQtGpwWGRg1QjMolfGp0ccrjANSV9BIU78agKOkMcYDvKX9Qc7VCQxMuEBxngCouAyCRVLZPGPrSmJANcRZFX5tVPyRN4A0q+ectxQHiQKGJJwMkZ2FUBV2lAznUBkNjn61FoWjCMGJGflU4qUTeIxC4XuN6IZxGQBJqzyCeKK0biWLOGcb7Ab5FCa4cnLIX7jeiO5xrVBzzQ/F0ZAwc+goINIGOsIQPqMViPg5ypAG3mqetSVJR42I423qONYbOkBTvjv9aAiKGfVpDMRyTxS/iytKVYBN8ZFbWRQ+hSuffiiyEiMKdD57dqCLIzgmFs7eYZ4rz748uJJJ4rKUhUUa2OcmvR0a3C6ZUVSQd1WvK/9QnibqaeA2pAuNXrVg4xsAnHFRNZWjWkrKysrKIkDtW+1QBqWdsUGVJV2zWIupsUUKdQUDJPFTWsQK9sVoZ3p3wNO2N+9E/CHTkAGp5L40qjFlxk6q1McMprHUxvtkY3okiCSLP6q3L6ZsDOfX/zWDIBzUYjk6Dz2ooAIwa1qYWb584qSjU5FGlj/L1AcVGEZdfepphcZBINGTye4NEktxqJBIoUfmzGeRxTm6dROM4I/lRUfBxn/wAUrn9J2xUw4AGa1UgrHcgbg0Fh77isD6WJ5BqTMM7/AGqDASN6jqJYDtmtF9iOaiCOaoYGNNaTZs9sVtTqj+grS71lXoX+jt0IPj6zXcrICMD6V9Rq+h8NqGd9xXyN/p3diw+MbK5bGEbucV9doVmiVw22kYINcuvttplJbUjYaszl+yvjvUZS2M5GkHnvWgmpMtuPXuKwifn1KpJz39KjLElwhhmVZIiODUZEIG8hIxkGsRdOM7jGxqjnb/4URi72MhDD9DcH71zNxBc2jeHMJI3zjfg16asi6ScDbtQ7q1gvIvDuI0cHb3H0q6PMfFZgY3wd8ggcUsXKhh4hDeldT1P4TmhQvYTNJhsshxkD29a5qWERzHXGwcbEkYqgZR0AOnLMOR/Woyj8vDo2snAYnOKYjJRcP9qxyFQE7LjGnGxoNRzhYjGyo3qRya2XDr8hIznPp/mgNCukMBt234qYuQj/AJMir5cMnvQEEALAqQVPqOays8WQIASD6KRuKygO0fiKZyioATv3NYPzNIJHtmm4XZZiQyIhXdWXIpYo66m8qsGypHcVGUne3OldIRuMjOKgmUWRQyNvyDWP51ZZVxk7DJ/eh+GqjSmQRtznNAxE7OukSOVAxjsKHIkB8qnURyM5peQmMgYmye6jijERBU0DEh+ZiOaCbLKCNLZGNt6h4krSsLgElRsABjPrtUkRPD8hOR/EMg0Fox4xQMFGMkAGgIZPzGzGh91/vQWEdw5O+B2ogSLB/wBwkDYnkftQ5oVZSGTAP6g2CPequAMiRq3hs6gH5i2T+1bYrgsvmDH5lNDYKNEaeYHkr/eseAxPuxKEbBe31oqMmVGgEt7Njb71FbheGU5PGP70ykPixq5jHh75JO9C8J5CxWcRIvcoCTQC8moucE42GmgmE6wCNm7qOKajt0QZLtJqG508VGSSOJN0J7DTsKBRraTGoYGON61GmFPiNAx4Hv8AWmXum06RFpiJ3ycHNaSGNGzGgYNnOwOP3oAW5UM2Aib7gHIoUMXgySOELKTkb43pgQQxKdCMQTk6ePvW52DICkYVQNwVzQReKYSDNtpBGBvnNDM8gy3gqFGxywANTSV5x+Xpx6DeorH4rGSTIYny7bGgFFI1w+kkHAyMNgY/vXn/AMdWSs3jqBoRdiPXNegyqqzKEJHYqO1cl8b2KydNkeJmbQCxWkHlhzWqIRhBQ62jKysrKIytjmtVJPmoGFwiCm7O3IHiFcsdlFLW665AW+Va6Pplr4irK3BOFHtXK125gYsMRMWzqxUII+M10P4cnIx2qomi8GffAU/1qSt4puo2zI5YcClY/lwTXR3UKyw5xvjfeudkjMTFTwa3zXLqFpFKNqFMLiSLI+bvS7ckdqlG+g78GujnDyrrtGAHmxSkOVcZ7GmElKhh2NCK5868Z3o0acZ3pCWIqfEU96sUwUBA2oEqZRx9xWJcq2EX82G9eaiTxWgcbVvSSpI7V0tYkZny1gPrWlxjFZ3rOrjZ5qOawnesG5q6hkHTBmtI+qosx0Y7ChqcA1oXvQ50h6xaO/yiQavpmvsPo1ys/RrR1+RolIPtXxPby6ZlbPBzX1x8E9ctuo/DdgpdRIsIVl1c1y6jUdgFyDpxUVck6ThTW4WXTgbfWtiPy4Yhj3PFYEWDE84qA1AdwR6d6x4pSRwQDtRAxwCcafTG9AJl1P5Xye4Ira5DecZxxRGT9SYH2oJR2JDOyr2OKAgZCcLjPtSPUOiWHUxmeMh/412NGdfDC4cFj39aMHZlGkqR3oOJ6n8M3tk3iQKJ4O+OR9qpUYAt4sSsmd1c4r1dcFcg8VT9T+H7DqQL4EUv8a+vuKujzmZjHkRoCCd8nK4rcRimzo0j/iR/SrXqnQ73piM2kGHONXY/4qp8KSQkiMo4PzLuDVQWNo2J8RHMfGpOc1lZAiR5CqgycsPesopzS6My6cJ+r1/esV9ZfEYBUbktsfTatqixktJIuANgRnNbZ4yqAI2D82BzUZCdgxUwsDINyB39qjN4vlJiKA+mM02ViOhI4yQw71Fi48pwy8Lgb0C5jgkYCN9MmPTOo+mawymFgHRsnYmtuMuCuFYHBA2JqLuLZyXVmBOPUig0dTIwE+kkbFeRUHcKQS0hPqNqMpieMkLpIOdRXtRJZEUHYNsNO/PtVUprIcsqSaMbMRW2dJVXXg9sDmirldwwDdk70OIrIzGRcnjI2waKgY4xKyRSswUEgAYP3oDIlyUMiuNIwGZsg+w9KYNtGkmZLgM2e2xoUoQhkW5bX2U7iiLIXsK2YgKxR7YAIzv9qrdHiSAaECfwk96FHAQDK4JReTrGT9qxnAXfVl9laTFFEWRY3ZSdD7gKTlft2paWJsEsVXf5aIwjTGE8w+f0rDHJljhzGfkY8UARboIjrRS2exDD/wAVPw1kj1eKhx+hWwaxoykfnxudwnIqK2shkRiMKN1cgDI96AHjvbSZhJ2Ow2bP1qUjzzOZZlCAYwOM/aiuGjYrHMjnnRmoCAGTxWkJJGcY/lQCJkLFgR7gDG1SkRXw8Uqqm2RnmtEMpIOnSw2yprTIzRadEY3BHv8AWglpUEkoXIOTgZ2pK7i/E2VxGE/KZTkN3phkOsMIhFKO6d63JE7WsnhufLuA/NB4V1WyawvWt2xtuPpVea6X4xtJLfrRZgSGTn3rmjWolZWVmKyqjKNEmaGgy4HvVjDAQw25rPVb550SxhMriMDbOTXYWMIXCgeUDaqLp8axjJ2JqzPUkh8qMCfWuX26z0vI0GpvTig3nTklTBGCeD6GlbfqsZTzMM1ZRXsc0OdQJ7b0zGnNSI8TFXGBxg9jVZf22qPWAN+a6a+hS6JBxk847VWT2skY0HzrjtVlZzXIyAo5zWBdQJHpVn1C0yHIXBXeqxGwRXWXXKzK3FIQcHfFNRlHhlQLvyKRYefIokUmiQZ4J3oi36YqSgo/JB/lUJYtOQfUg0Gyl8K7LAbFtqverWyxwrMp+Zc1n9dJ9ORmTRKVotkA0xU8EGoXD65c0Xpqhr1ARycVb9Oc+w1hOtlI4NDkXBNXUlkUupAB96QvLcoak61u8+iNbFarK05tk5qSIWVsb4FaUFzgU/0yI/iSHXKMNJ9qBGEZkC+te4fBXU7np3SYGt5GEgjClSuQR6V5B06zabq4jUAqr4yeK9d6fEtp0yGLbWw5B4qVXp/Sfiy2vGhUuY5CMurjbPsa6n8RiLMQBY9i1eLqwQZDkZ24zmrbpPWprC5ESyO0DDLKVBIPsazg9PglnnBDAqPUbUtc+NZyh1Z27nPakbD4ljuwiW8gnK/PqXSw+3eugV4LmASBldMcjtUCtrfNLu66duRwaeWXXsR/5pdZbfAjVcem1Fa3DAMGINBIphiQtCYhyTGoz3B2NSIkSMHVqI7GtIzSLqdSD9KAatMgCybCpqELbk5NReSRjoYAKeG9KgVlU4XzACgYkRHQxuodTyCMiqbqnw7HPEXsQIpv4RspqzWQo3m5ximPFTQTnHbeg8yu+nTWk2i6iKOd+djWV6VJFBcRgTokg5GoZrKumOASNWyVzrXklsg0HTOQSxYMDgnG2KYVg0x0+UEb570RThs5BUjHO1GSEyXCaGXLFey4FMCQMqiVTrxttzQ5JlhcJhCvBzzWtPnVlbUmcgnt9KDV1BCkXiqgiYH5i2o0CKRGCsz6gpwcdvrTcoGhnwCRw2M0q0zGQ5iMmvuDjNBNpX3UsG22UKKGDk+dQMbhlHFFdSVQouMcYzkVqHxhE+l1UHcEjv71VjTtIXkl8QyfYZ+1BZ0lABTTlsnLYDVLS0qiRXDN6EacGo6YjICyNk8gYIzRW3t4tYSGIugOcls4+hrJUVkK/l685Oo6jj0xW2TXHpSQwZ4zjJoTwyDR4eXY7azQCNsqxjXGAmCBgYNDNxq0RmOVgDgMyg04ceKiNKNWNwSMZ+tRd2hlaMtgkYG2R9qBRpbrxTHHCH07Dbj61L8PdzODGNOBkkjGTRjGolLM0gQdwME0PXKEHhJLkHfJoBqjW7BmZ3YHGKmxDagzkEj64oxQyqfEj8Mg757/AEobwRhgxyV7FDhhQDi8N9KrpBH6iApozwMVXSRtwSM0OR453EZGRwTp4rDOYXIRRpxnIOQKCKRSRKwnwNvKOVb/ABQDFrUukRAz5hnGKalkWRcylADjB7g/QVBkXJfUT22bmgWkVVYATFC3AahkTiMouhiBlQRtUpCZH0yKy4O2rkmiraEwYzgn5c9qDjPiXor9StDIY1V4c8d/WvKmgInaMDcMRivoGe0bwTHKysCOB3ryv4j6BJZdYN1EhMDvqoOWnsJoIRKy+QnGaUIrrep6bmEwRtpX+Ed65eSF4iQwO1WdSt9/F1zJanaLruUXFdCltiPWewqp6JB498FxnAzXZfgsppC5zWO/trmenNM0rZCg4qBSTOSp4rqIuloN2ozdMtzuWA271nyXx1xrPIncitLe3URyjEV2H/SunFt3XPfehzdEt23idD7A01PDFDb9XnZQHP8AKuj6bPHcJiTduc1Ty9IMTZAxR7SKSIqBkYOafjU9Li76VFcIHKjPBI9K4jrHSZLCcsATGx2PpXotiC8YV871q/6Qt5YPGyjjY0nWVeuNeTGpE+XIHemb+wkspijg4zsfWoW1u0ocAZ2rrszXDLuIJcNH5gBmmT1G5njKu5K4xip2XTfGkCucHNdB03oUBlMU7qvcEnFS9Rqc1xzZ1Zo1srrOrLmul6x8ORWqO8MyuDxg8VedO+Eo5LG3uFcMSo+lS9zFnx1T9PR5WYSqcnuRQOsWhSEvj2rvrX4fCMdQGBxiq7rvRcWzNgnTvWJ17dPH08pPNaqcqYmdR2Y1oIcgYrs8+LDpNn+LmVRu2rGKvLXpLv1WeBcqqOBnHFN/CnRmQL1B1IVT5fc9hXVdL6S8fiTytmWZmd9t19qhZl9q7oPQY7XXMyoSzFvMK662jSOGMopGdjnge9ChhURFlYAD9LUWUMYCxAbI5DbVNBtD/iXid45scFTjb2qKOVZvKxIGME80nC4YhJ2A2yMnBB9M0zDHphy0YaPnnfNAzHPJamOaNDHk5Vwd81fdL+L2hZhP5WdstKqd/cd65hpFdFCRlTnOM81vUoKkAn7Z29KD1+36kksSM/hgn5ZFOQfr6U8olc6g+AfvXkdv1J7Rj+EZ11DDhePvXXdA+KHcMl9Ksbn5FK4X/wCamDsdAyNRJNTVQq87Upb3onLI2kNjK47iiK66iDke9QT1Lkqee1QKMp1R9+V7GiZUgbAgcVMMp4IoE3EjtqWJQRsd6ifyydQyKdfTz3PcUvLKgUqwL47jmgkjq42IK+lZQlCFSAjj6isoPPz1KI+STR4g2IAqRvFcRiJSxAyRjAxWoIkMpZ0wV5YipGWGeUrFu49NiR6Vob8Z/F8RI137Mm+aD+aWcGMJ5sg8CjeKMbocZxnPFQmGImZmMkX6cDOmoyIsMrjGrZRuR3FBWaL5l8oU4IAyakCsCa5VZANhmixSRySkoMtyVA3+tBAsjOH1nSF2HGKWmleICN4w0ec6w1WDBJUbCb/TgUv4BUFkcFDyDzQCOjCmLCludRyK0mgPIuF3Ay6nGPapmRXc+GiMnBbO4NQzCxIkUBQe471VQMTIugQ4UnVr2J/eoyzzIw8Nmwpzl1wWprCodIUMuNjnGKTuZREVKq759RtQ0stxcNcOIbLSzDLM6c1g1hATEGzyc8f4py2XzHXlttyDtj0qQtlK+GgBLHffighMkyYdiBEV4Rs0sJi2QofAI3xgH7U1KfDlA0Dy7eXtQXOmRfzdMb/Nq3oaksTMNTyhh3XBAxSFtDNLI4RYWjB4ffPtTzBYZC8SNKOBhsVCSWQoSv5Y7k0VtPJnhdv09qC3mZjEvm9zlSaLBbKikazlxqGrg0JUlRQqRpz2bH9aAbENGS+vTwRjmtp4FsFLsfmGDjNYW1FopPnxyF3+xrDH+SAzahzkj/3vQFnY3L6rY6lxvqXH7UtIXVVQh8tzjcCpuhbCayyfqXOMVs2qBcl8nH3PtQAVE1OwDAE7ZOaFLa2dw4M4GVyCM7Zo3hiONZI8gcHVuKkuhtLFBrOx0rsaDyO+i8PqUyacKHIxU7npsMwVGXZxjV6V03xZ0krK1/FGNGrTJp4B7VWXIUQoT/CK4X1X1befk+OY5zoNnJZfEEtrMuHRSK7lYwqZxSfT7eHrCi+iAF9Y+SYDl4zw32q1jTUoGNq31deHmWeqpr27SFCWyMelc5Pfz3dx4VuhydtTV2110lJhkrnFU0vSXRwyjBU5yBWNbxy3Wbe76fFEXncs+c6TgCkrTqFxG3luZM7YDHIPtXbX1qOp2X4eaM6h8rqNxSvSPg2OC8S5ui00atkR/Lk+9dZ1P1zvx9CW9xI7fh7tCs2MjPei+H4cgHarLrHSLjqVx48LxROgGkAHtQhZzm2Uzx6ZBz71zrpmQ50/LsABuK6q36RJcQHbkZ2rl+kD/ulX1Ir1zotsr2WWUHbvWK1HinxR0HIZHXDdjiuW6b0yWK8YFDpI8xr2n4g6Qbi6ZgAa4vqHS7iKUpHbtp4ZhWp16w8Nrh+sM9iS8C7Egaqp4byd5Cz3UitgkHPeu7k6SZ7WS0mjBDfKRyKrLf4HYTo08uYQd9I3NdubHPv4utMDo/VG6Nb36kXMcseoxsMEVcfD3VE8BIlZoip3ilHH0NdGZ4k6dFaWsR0omgah2pyw+GIrm3DNHpbYg44rHdmunPGT2c6ePxOkhTUeu2C/9PlAHAJroOn9LFpBo5b1FB6tDqtpVIzlTt9q5T7Wx4D8NdAl611mXy/lI51HHen+qfCjW123lIVTtXbdCgj+GLa2gkjAuLnM0h7gEnSP2q/6zbQ9R6Z4saDUzDet9dXcdPh+GXLXM/D0ItuirnB8+ymrl5THpGrSW442qCxJaw/h0iDHHrxQ5mjLoRHlm21D1+ldOZ6eX/k9S/JcMTMFLMrqXYfIB/OoJJ4bKiwhxpGcZIB96iIgiq0zZZdlzWNIQ6guygAjHpWnBjLBOhMiFn3xpO1ZltI8rBdOVKncfaotG7NpR42HIwvFTTWoP5UhOkglAD+9BuMxliQ5ViMEGpKY1YAksmMEDke9CVXdkHh6d/1DBqXiNGzI6pscbbE0EGeNmZFlwFGxHf60bx8uPzF37HjNLtCNeryaSMYIzR44ozHqJUhRsMbk0F1034murSYRs63FuCPLnOB7E8V3nT+r295ArRyeL6oD51H968pBCRnDAh+RwRW4pJbcpJG+hkwcg7ipg9oiZXGpGynqK28upwmNxuDXA9N+MGjk8G8LLvlblRyP+Q7121vfQvAkzEFWG0n6T/is5gdP8W4I5HrWEx6SAuSd8cVrWjkDnPFSbBGCc0GnidkGhiPY1lSKv4eFc59TWVR5rrvEQCUIq8ateSalrt0twyODNn5gea2CfKFKyI3zY7fTNR2WYRiMKvfy7GtDbN4MTAOWJG4UcVNZ/wAoGLy8fesYGOQrsABsTtihJIJ0ZSokbOPLyB60QdlUkh1ZgwxqJ2PtU4pBbKrRxqmnynByf3oCtpwGZY0XGCxBrGaRNT+IGQ77LjFAwmPN5gT8ygtgVCebddWIl7nGahEI1tz4jZ140FQNqwLlHYN4hTnbf+VDC6kK76ASpOAR6+tSlWRkUSHDDfYbn60ws8TnSVMbEZOV5rUqskgYEhB/FwKBYtKNCqnkOQdS7j6VIICuhl1EfLg0RGYkl/Nz8tAgA1lXlcEH5DvURorpURo6rnYkVqOSKG4kikyDpyGzjFZKX0gCTTg4AVc4+tainTTIJB4jDykkb0A/y5Jj5idvIVOQfr70HTbIrBQXcnljRgEDAQIzNnOTsK21pM5DzAaBn/bXeqB+JoOnw9YI2Bbg0J5JCG1g4OxYsNvtTRjSKIOId8bgtvQmkhDIxQENzsKNFY42Rx4xV1AwHVzxRDJG7krqOkbjSTn9q0HIYtEiIvbYYrIYpXzM0xR+Bgg/+xQRlaUZSKRVAA5PFQeGVIwJlfnJKjY0yynyYWObG7EAcfQ1MF4pSxfKgZMYGcftQQkeCSRWZmCAb+TBFBYQvKU2ZFHlYnBJ9KJJJH4sclt4/GGynlU1jmPxXkjBc4+c7ZNAs5fw2VYSpG53yPuKsei9FbqragPDgHzv6n2qPTbO5vp1Usqp+s4ztXYl4rS2WCBQiKOAMVLQh1vovTpfhm96fDEqloshyNyRuDXhN/Cxt1ZdtOxFe29WvSlhO2oDK4+teR3OlZphp1KTutcu3q/4/ef+NUnw9eydP+KLaeLdWRkkTs49DXoF7YLb+HdW2Ws5/NGf4T3U+4riH6dFDcW17blgBIAw9K7roN6EuDZXETT2U+0sY5X/AJD3FF7mXW4Y1ePFBuLHIJXGfQV0kXw5KXPgXUEkBPkctjI9x602vw0xXEl5APcZNTxqTuOEHT7gcKBRounXDn8x8L7V3sPwrbsAW6iPslOx/CnTxu17K/0UCrOKf15cNHaLEmFA+/NV17C0i+1epD4Y6X3/ABLj2OM/yoi/CfRWxqsrh8+rmrOKl+XmvH+nQFL5frXr/RtP4H5T8tHg+E+iRPqj6V5h3LE/3q4gsreFNCWgUegp/NP6xx91biWZ/KOaVuOma1JCjV325rujZWmc/gxn6Vn4O2xg2g3p/Nf7z/Hk930GItqQBWz6bUGPpEqgALq37V63J0ywceazU/agno/TR8tqR9CRV8Kv/Yn+OAs+kO5GuNR9qv0tltoFwpbGBhRmugXpdiDtFKPvUxY2o7Sis/zpfnlUxiGk+vtSM1sbidIsfOwB+ldHJaWwUnTNVddxx2tnPdRghwhVCTnLHinhZ7J8kvqPLOrZvvim/wDJ5BKqRY/gAwK6gwRWnTY4m4A1HNbTpEfTrlJhGZp3UE6vWmZuk3/UbGd7YqJU3I/i9hWfvp6r3OONcpKdKPdRIrLnzEg81ozRv53jTO2w7UJ0eJpIZ4nDnZlIwQajkiEqCBj969H/AKfLt263JIQ/mbyNuMithImmywkJ41MdhW4mYmOQ6lkAx9qlPGjAOusDkkHBFBGNZYdQkhZUz5HxsaMMRRq8TaWY5ODmggy6X1eIVB2YHbPvUkxKoJCqRxjk0GpbhJJ1LEBicDB2rU6CPUrqW22qDYnuBAzRlDzrPB9jR9GsYlkC/pGvfNAsIh4Ik9DwCQaki6csofGcnIzmix26uhUEls/Kp3HuKyNVUhFbOk+YZ/rQbhyWcxHzJ/EMVBy5GPQ+YAcUQxskr4DMXGCoOQfpUERzEWKtgfq70BNLFwcDw++Ke6f1a96fagx3C/hs7x69Qz9DxVYtwIkwQ51HZlGR9CKMDHNJhgqnnYbn7UHoPRfi23vNERcRz5ACP8rf+k9q6qOSOR9iPFHKtyK8RLBA2V48wYHBroei/Es9tGglP4qEYGB849896mD1FpGX9JPvWVUWXVxexakZZVPZD5l+orKDjrZpEbyIrZ2dX7VPxRGz6VBIORhs6fpQo4lMWoOqjhWXYVEJbgKIxqlA21D+dUMLOSqlvM5HzHYGg644ZSvm8QnbSNjRIppJfLJGoZOAa2zu50vojjPBDZNBCWNJCQ4UK3OoYOaHIYoFzG+jfBzuDTKxl4gmdQPr3pdIIwozKTqY4DKD+9Bv814i/h+JgbKuwrIBEZi0ts6SHYEZUEelGjYII49Wn1A2qDhzOGiGVXckigjM+qQLHGWjG5VVP9amZGWDE0Z0Nxhsn9qH4rrr0pJpJyCCcftRHEZZGLORjOnSeaIjbLrBDB8A7EDehtEvjNGX+Xffn60YShR5dZB5HFBl8NSvmJRzjGTmiNtD5CqS4ccUCa3EWgtJlceZlXejjTIWR9GUUAMufMKyBvBOmRkaMjIxyPY1Av5Y8kQs6EYLkdqk35XhzxsfDPAI81RkIlyIA/JyTxj2opdjb+DIseOzY3AorczjAm/CADgl+TSwWRlIjLITyF3B+gor+Gw0rq0KPmY7H7VC2LRyEBdIxsRsaqlZrZoXV5BFrI82glCR79jUthEoeGHSTsFbn9qOi/imfxFdivZgeKhcQxZXQ6qw50/pqoF4yxvpELIDsAeftRVBVCquRnJJJ2osEiPNHLOfFwMltOkGtzwPcSj8IJHBICqo2+9QhOHWGkCpKqn5SrDDGtKrKy+Pa69RxoiPNdJZ/Ct3MdUzC3X1yCf2FXMPQ7DpqeLlppUBIdzx9qmqo+mRJZ2uVRkZ8kq3b2rclyGYgngcmlp7t3ZiNgaQnuNMZODmsVQOu3qtamNec15p1G7NrfrMclS2HHtXZdQkLrzvXn3xG3kYcHNPtri5V+wUWrhBsTqFXnw+dXV7YA415H7iuK6T1+3nshBczLHOgwdRxqHrXSdMu1ja2uUYMqsDkHINZx6OrK9Qtlit4xG4BOckZptZIFO6xe3c1U290ZWAwq5GR5KdjcPsXOe2AK6PKuLS9iVW0xIfTC06L9j8tuQPULVLDMoOnEh//anVnOr/AG/3Y1YixW8nYY0Mv7etSF1PjdgPqwpBbrfdEH0FMJdqRuQPoMVQ0tzNn5l/n64phJpDkHScexpVJ1fiTP3puAZGSSaCRlcfpH860ZmHYfvRGZY9yTigSXQxhCaCQuCdvL+9RM8gPCH/APag+O5I3NbBlJ5z7YoDC5fvGp9wwrRuTpx4ZBPuKgBIMagB9qjKWVc7Z+lAOeYlcAMR6aqoeuXjtPFAijRHghccmrlVlnbygAd8CuY65Mem9TLXQOkkaT6jFY7+nX4s8vZiVy1v4rjDtsBirqyVIrVBHwRnPrXDXXVXu1LQ5AiOpR64rqelXaz22AQdP9DWOfTp8/fl6g3Wfh2y65A2seFcY2lXn7+teadR6DfdEujDPqbX8kmMgivWVbGM1l7ZW/VLRra5XUp+UjlT6iukrzPH/CWOMN4xZ8bhRjBoviB42BGRjvjNPdW6O/RL8xXLOyuPy5ANmH9jVa4VlYhSwByxHetCC6fACIz4PKhv6+tRDopOXyeNqhMiCcMhwD8oJxRgGjUyPEoZffOaAIjinbKBx6sOxphnfQkR0nByc81GMM0zSW+pMjzKODRCiSFTGhLYOrWaCMREbmQscA8KeKg5AkQBSEc7kckfWpSLEI9J3x82B2qBSM4VNQH/ACbP7UBkIjeNozpYHZsUVLmSeeULpLFdQBIGT9KA8sUMnheYOoBUkDDUNpIvLN4WkE+mwP1oCJJIW0ho9SnOc7g1OV/KLg7zKcZAoI0sThW1H9QGTWzcYYxYLDO5AIoNN42gynLJny7UWz8Z9KRZJVuwwfrRQZPBMeV0FcnVsRQobdYyWEp82+AdqB1Lm4WQlZZYmydTI2CPaspeTXEwchfOM+XfNZQXay+Goi0jSx3PYUVwyk+ePA/UozUY4YpU8VZthvnVTCPDoLnOr0xQAmV4yDqlMmOEwR96lFMEYSXAMeBsNOc/aiRCSUl2VGPu2KLcW8MmGe4lCaeFPBoAT+LFbiaEq6/wBsNWQNEWUxYTVu4bzAGgYIQJqd1HGSBk++aO8cz9nyybhcbmglIVRTI0j+U8KOaKgaaAeYgMM4GQcUlDD4EhWSVxGRvHnk/WmVZbdVCNh9wg5oITG7toj+H0FVPysPN+9TyV0FpCwJzk/poLXDeI3jRM2rkDbNTZTOgCMYiNhle1E0w+HgKwvGWzk5NQiMrx6ZYV1g8twRQraQKZIWAGDgZGCaI80ZkGnUNHAY/3oiFwH8FTFEvl2JzwKVjinZsmWF1G+lRpzTT3CzHQsLRgfNoOR/5oIJuAVQlyBv5dJFQbEM08hEK4CjYE4A+poLJJLpXWgkTtj+VFktjbDxFMuk7NqqFuzySCSOUKCNhQR8OEsW8LTMu+Fb+1CLyA5SOUsdwHxgfenngIn8QSZfHDKDTVt06/vpNCIoTPzsu1NVWwvLKG8ZWGRv2/ai2/Trm6AS0t2kycEnjHqTXXWfw/a24BnJkfuM4FWaiOGMRxKqKOAoxTVUVl8LQwhXu5S7j9KHy1dRRwW0emCNUA9BWmfI5qBbG5wB71BN5Rvk1UdUvUjtpMNuQRTNzKuhghy1cf1aeQIwc757VAsZsn5vtS11IQhHNK/iAp8x29qjeXAjhLFhWVV14+djttXCfEeynPGrcmuxupi0mw3xXHfESNJayjuN6s+xxMp1yFvevWv9JbZesS29tKuqO2Zmcew3FeVLHXsf8Aofe2VlcdVEqyeOyrpIGwXO9bsWPWrzpkTOHjGkrSbxCLGkferN+o2Lknx044PNV0txbl9pU//wCqMsjftvmrKHDp/wCKqPHgDf78f11Uxb9TtomGu4TH1qap0wvqyBUzAzAHTg96gOs9PAyZdQz+mon4ms4xgRM1VMMxROpDbgjk1cWRzzziqez6/De+TwAp7Zq0glKYIQY9qodaMtydqGLdTnIxSVx1WS3O8AK+uqoHrgUbw7+maBxrTG6nFZGki8kGkP8A6hizg28h+m9THW4m/wD8837UD7FiKD85053NA/6wpO1rKa0t6ZZMpavkepoLBEEY2Fcl/qD017ro6XkILNbNl1HdDyftXSSXM6KNUCrn1bNIdUv2i6RePIAUWFidvapVjzSykUgE8NtV50C5NvciAnK6zH9uRXKWMx8FGBzmrTp14B1Obf8ASkm/scVzaeixyebSd6ZDAH2qs1+dW7MoNNJIRt7UiY31rpkfWOnPA4HiKNUTHs1eS3ELW7PBKGBSTzDO+a9igmBBGeK4L456f+D6gvUIYwUuRpk24Yd63zWXNvLHMcqjHTnkb/vSy+eAONS42O+4qasI42K5LE+bHpWNGGjJt3kQgcMNq0Chkis9IlZJDsQe/tUHmjlyUDRKANs53oGmRmGsqDnhRtUxGRNp0Dc/p4NAabkDwssNiw2z9a3DMIWy4VkIwV4NQ1uyFNADDj1FRgcnJOnP8JXNAVkilVSFOoEnH/H3rUcsTA27YVWG2alE/iTeVk0kdtq0q2yZV1QSg8MeaDIvLL4pkLBPuCKy4PizFINADAMY3XOfoaGJF8RNCqFJ/SdqYjSNZW8QYOSF22OaATRsksbTI6xMMeQahn6034b6GjQBgd1xsR7YpNTJbs2gZi9fmFEa4EcgBc6iQQ2CMUA5JBrUa85HbtWVk4WWQsGbfcnjNZQdHG74Cads4OoYA96mQInQGRtGd9sjFEUqY2DE7DI9aAsJi0rs2dzrbce9A3LPHb6DGAVI9MH7UPP4pljZFQg5V2OMUIBVkLs6uDsx9KnAolmkBldowOCoIBoiSRiElpEEixkjUTR4wzRpKgGFJBwdgKTEAMYR5GJzqDrx+1MrGS5g8RZUAyfDOw+tCIj8RPqVB4vbCHigpC4JlGWYHBU/5osEgtncxMYsn5yMn6VqRPEUYOll/U2fNQacKCisJG08jkisa5Z9oomkHOCMHFEJkhucgNKcbkbYof4tzIoZMMP18ke2KJixJaaFUaJvLuAw3pE20rSMWmzGozpAG1MR3Ek2H1Z0nG3el2iincxHUJRuM7UXG4pNSkCNsKchcA5qFxdoLlTvrG222KmzG0cARgsowRjcf5oayxQO8k0JUuNmbiiNmUuHd1bUR8niac/St9LgkuomitIfEOeS3H3qy6T0aS/jDzRqsR31Y5+ldVb21vZQ+FBGqDvgcmpqyKvp3QY4CstzhpR+kHYVb5CDCgAe1RLbVob1lWyTzUC1SckLkdqTnn0RE5xQbmuI4gWZsVxnxF8USQSGOEke2Kc6p1IRRs2c/wBq4rqnV+msr+M4MhHrQXNr8ROqDWdTn34oHVupJJBrZhqznANcJL1XYeDqY57VDxuoXQKjSmfU0HVLJrAbPIoMsmu5iRvlByaQ6dO/4cRSMpdNifWiuSsoPsd6ype8kLXDkEAE9qo+qQCSNxzmrOY+Y+lKTrrTFFjhBEUkKEbg13P+mE8sHxQ8CkeHPAwYH23GK5vqVv4cwlH6uaBa3l3064W6sp3hnT5XXmug+h9QWRGOB653p1+n29wmoIPNyRXmnwP8ey9bWWx6qEN1GMq6DBde+3qK9DtGOFMMux7HcUMK3PRhCcruPSgr09DztV7NdYUiePGeGXcUKJEcaoyGHtUxFV/0/HygijLZErzv71aiPfitNHv7UNJRW8kJDKScelddYSvPZKUU6sYJPaqBORV5YApCME71YCyW5wA7aj7Vi2qkjyDNOJCZDlt6ZSJVHFVFetihb5f5UylmijimWZIxliB9aVe+BbTCpc+3FBt4VOBjFYrQQcsCeMDc0IRSyHXK53/SKIFjReAuO9BF1e4JYkqOwrnvjaydvgrqhhZxIsWvnsDv/KlPij/Ubpvw1m2SM3l3j/bRgAv/AKj2rx74p/1P+I+sRSw+MlpZvs0MI3K+hbmprUiz6VPr6eh7gU7ZyY6pFqPleN0/ln+1c50a7EtmgBz6b1ZWl1jqsEeQQoZj7bGsVr9etWchk6bbSZ30YptGLLvVd0rbo9uDyADT7eVM+1RhOOTEhweKV+KoPxfw9NhC7x4dQvNDjl/MzVpazN4iryDVlwePxBgHB15x5iRvTBCsmpExtt5uBXo3XfhSC/1XNiqxXHJQ7K/+DXnM1vNbXbQXKtBIpwUJx966agIWUqZDkgnSutdvfetwwlSDgIVOVYb7USRcsdWp1UZG+37VKK5t0ilincgsvkdf0n0Oe1BHwjK+gANv2ON/aoAPDMynIPo6natI2gHaKQ6e/rWSZeMMVKnvpJoNkEk8KeMqa0EWbZ2w52Oeazfwxl1G+dufvW5cvEsiZDg4I70GoY7dB4cj7E7AnG9SWMADDNoQ5wOw+tbDq64IQvjdW5NRQAxyIq5B2Gr9NAeGZbcuTK6FvMq42YVGWQlsqGKkZIB71n4fTGFKBm5BqKpvqWTBBxjVQFjkFvGGMyOJNzrXGKyohTIrIFhYDcA8isoL9QiSflwshbudwacjaOZmR5FD43DihQlZZh4asWA4od7CpmLHAbA59KADwgyu0K6tO2NeAftWQyOdSoNBJwxLD+lGa3gUqwUlmXzKHO3vSzWrjySrsTlDjGfv3oDLJG6rHFIdudQ7d6yFo4iRG5VNWC0Q5PuDWQ241FzGQQMNpO1HAeLUdHbIKnke9EDdE8RWe4jkA5x/ijrdsyEqA6D9AGKiqDclFPlwWHP3qdqGhbzBGfHBOKGsjaZbZhJBpHYK2dq1NMqFlgERdjkq3Jqc80oUzSYCjYKhzn60MNqjDSQkuTkHA2oMZ5ZYlVIzGc4dD3+hrSRyxEySXA8MDCK3P0zQ2keGMsY5UAydWnmnekWb9SlAAVk5diD5fpRQoxcdQnjVGJkGxB711Vh0VYwHuj4jfw9qds7OCwh8OFMep7mmOfWs26MJCppUaQOMChHetu+2BSN91C2sYTJczrGB/E1QNZweRSt51G0sE13Vyka+5rk7z4n6h1EFOk23hwd7mbYfb1rm7q20zeNdzveXBOcyfIPotNXHoUPxR0+dsQCaUfxLH5f3NQveoPOhS2hQMwPmkkAAry24uZmYjxGx2XO1Cjup42ysjZ96aLnqvSzPIz3vV8N/+KBdh9zXMXfQLBAWQMz85c5zVu8/4uMgkLKBgH1qmlunjkZXU6gcb1RWPCYSVAx9qgJZFIUHGaauJFk8xpP9YNAZLs2fUEVj+XIMZ96tJZDpzmud6sNcasvI3FWFldfibVcnLAYYVLAxIRq57VDY1mfLg8io96yK2/tw8bAjmufkjaJyh+1dbOoK4O+aqLu18QEcMK1Bzhabp98l1bu0bZ2ZTgg17D8F/FLdUtQHZReRAa1J+ceteVzW/iRtGwwaj0e/uOl9QjljYrJG23vS1qe/T6YsrmG/iZMgONijc0Kfp0kD64ZGQ1zHSepxdSso7yA6SwGoKd1auitutsuI7pNQ7OKrNbi6jLCwW6j1Ln5l5qwSe2uVzFKNX8LbGhtHb3SaoyGB4INJyWipg/z4qot44Cd9sVd2ERZQBwOa5WymlhkA8dvD9DvXTWpt5YwRcuCRuOKC0e4htxpLgn0G5NLSX0zbRR6fdqiqW6E+Hkn1NF8HUwIqgCWzTvqlcsR609HAqAbftWnlhtkzIyrVfN1GW4Oi2BVf4+9A3c3McB8NfM54Arifjv4r/wDp3ozSeIGvZfJBH7nvj0FdFPNB06zlurhwqIpZ3Y8V85fE3xFJ8U9f/GMT4GoiBD2UHAqLIAzy3IeeZi0sjFnZuSaqOojMbCugRCIftVB1PZiKy1DnwxeE2rKTvGxH2rpvhyJ7zqcj4zkhAf61wPQ5Sl1NEOX3FexfB3S/wtvHI/zMc/SpVteh26LHbRx4wAOKndSaYSftQUbJBY0K7lA0oSeM1GKBFIwk52q2spGDazwOKpNWkgc5NW0DlYACAMcGgu431b+tKdT6NZdZh0XUY1r8kqjzKfr/AGrLeUkDJptWGNjWojy7rPQLrot3qn1vbnZZkGVP19KrX8KOHKtkHcBtwDXszpHcQmKaNZI2GGVhkGuJ698HMiGfpcKyRg6mhPzD6eta0ckYYnBEkLYYZDRnGDQA7xsYlDMhPJwcUTTIjMhypBIIY4xQl0lGRQA2c+xqgixPDKzxuDIfU4BoaPIUGpMHO4znFQdAsyyYLFhgx57+1MtFMIix8hYeXVtmgXkuEEqxrFmYD5xvU/HkZRJ3zhiq/NUmWON4wikeXJZjkZ9jWQFY5BP4hTfBGnI+tBpXLynwNJUDOrO9EBllQyRvGrA40NUpGaWZ5YgrBj8yD5vfFLmTLFF+ZecjmgYjg1nLlUkxuyjb6b1lCMzwt+sg8kDUBWUHUho3PiCeRUIw4XKnatiGNotTO4yT4ecHf3xWrZpHCyEhQcHOMg+xrFu4oUbQVVCxLZHf1oNlWkjEp0BwflJ2H0oDSSR3DZRJI3A/VnBFTjvNbrGiIFHGkc/egySzTSkCPRzjSudh60BUaOVXRWKNuWAGf51BJ3JbQ+I+CGXfNamid4UKM6EndWXSAfY1IW7JB/3GQG3yvY9t6IkNDWboksiTk4XUMqR7HtREKIwRtKkDAMnrQBIHJtywAC7GM5JNbhaPIMrMzA7Bl4qI2ESeU+LI5KtuE2B+9PB0SUssKTHPmD80q5WCTEr6QQCD2qSYmmW3USM7PnUg2qqZtrFupgwLHIkerGzbCutsLOLp9mtvDkheWPJpaxtks4hGhyScs/cmmprmO2gMszhUUbkms1YYzk5qv6h1vp/Tl/PuF1nYIDlj9BVLN1C/6uSLRjaWfeZvmf8A9I/vW7OysrI5hiBlPM0nmdj9TWVbuOqdU6hHiztltIm/+9c849lquXpdoj+LdSyX04PMvyg+y1Z3BfPmBPoc0hMwjOw3PrQBuZ9QZc4UcDFc9fKQ2cc71cSy7kkVX3OH9j9aDmpTg77mglsAb496bvING4zVcTv5uaQS8Qo2Rz9aBfOJlLkYcDfHepMRxS07ZUjG2K0hJnJAFDz34rbj9qicYqDLpfEh47c0jDcyWhR1xp+Vh7VY6S0A77VX+HqidMb1VXYkDIHXcHuK3kYBHekLG4CoI24PFOAhWx27VgYwHelZIxnjNN89hQ2XO9BUXUAZdQ59PWqW8i0uJR9DXVNHngCqy/sdaMyDntV1Yc+Fevt0u6UMSbeTAkX09xXrFtKkyAjDxsMqfUV8/wATmCUodsGvQ/hD4g8LTZXEn5TH8tyfkPp9Ku+2uprvwJbeUPBIyn2NOL1Jz5Z49We6/wCKVV9Y0nkGihVNVzO293au2BKAfQ7Vf2IGkYIIxz6VybWyNhgvarPo0Y/EeG0pCkcZqjqPxUEfl1F29FGaxupTsNEK6Pc7msEUUKgIAT61JIwnm2LVQAQM51SsXfPLGmV0wJk4yKg0mnzE7+1cR8Z/GMXTY2sraQNdEYcg7Rj/ADSrJrnP9UfixriCTplq/kXaTHdvSvMrKD89IwMeGoXf1pq6la+maViTFHlmYnk1PpalsykfOc/Ss36b+lhp0xkHFcz1YjWT710t02Izv71TWvT26t1RYiCI1OXPtUjIvwh0AzXY6hOpCg+QHvXsHTlCIiqB2HFUPTrRIFCqoCKAABXQ2A1TKPQ1KV0ipoRc+lV1zKPEZvTYU5PMFizVD1C68ONvXtRCXVOo3cTA2cXi6T511b49qf6V8WWVziGV2ilxgxyjSaprO4USEOM6qhdJaSSlLqFZI+AxG4+9MHo1tKrxhkbI/pVjGfKDn+VeVWrdR6W+eldQMsQ/+xcHI+zV0/SfjKGSZbTqUT2Vydh4nyMfZuKuDsgeKIHIx3FKxvqUMDkEbGjK4Owoit638OWfWomYYhucbSKOfY15r1PpVx0e5FveQYYnyMD5T7g168Dg81G8srXqdq1tdwrLG3Y8g+o9DVHjLAOAzIVKngdiO4NbkLSOnivJoIzkcftXQfEHwvL0ubxI1L2ZOdY2x7GqSEKwz4SsgO5B4rQ1EyhTGrR7DykjYj/NCBVMeKqMo3A3G9aaS2jcLrBUnYkEUW4ZHHhqzaNm1BaBVmlRCqxMIc5BAyR96at3iPDLlRwwojOkY8XUfP8AKQe/uKLNJGp8bwxMMY1bZzQKsZEuWGDpO4ztWU407i1aJoI2RiCDnj6VlPQ6BLh4YGijkXwNi4XGQKgUjuDoTg78bt70FVtyh8Lf1wOB6VFpJESKaCELpByJF3I9qAiRiDEaKzHgMcYFEnQG4iaJlGoDxEL8nvQZvHaITRujsr4CldhmpJHcSSCSfSGxk7cnFEEuIwxKgSEjBChv/eaE8txFG9uEZoX5JIJGKNcrGxUuGyABlW3+tD/NSVpI38u27rsfWohe3gcsJYw7gHPlHy1keuPVICNIJ2bcj603qkWYSFtAPmC40gj1FBitmvpX8FgXkfZVFAF4XkkDkEFzp1Dt9q7DovSxZ25aVtc7DGr0FbtOhraRobiQyS7YXstZ1PqsfSrfVgvK20aDljTWjl1LFZxBpGAJ+Ve5+grn7uY3E3iXXmC/7cIOQPc+pqolu55ZDLO5a5bk5+Qego0MmqMDJ1HvWLRapOZcamH/AKc1PxAm+NvpVL4zRMCCSfem16gsi4O59BUVYPMssZZDuKp7uRgSQcn3rX4po5sk7elBvjrUzRg6TyB2oFHkOcMRj0oL4I4BGaWefSxwN/c1E3IOASB9K1gHcopGNqpLiMIx3BNXDPq5Haq26XLE6fvTBWufvQJd1amnGKXYEgiqhFu+aC2KYZTvkb0uxoCxt5PtS+AshosZytadefeoF9OlmXsdxTVvN4i6W+df50BhlP8AkpqDbASIcMN6WKtQSQP51rYgYH3pe3uVmXI+YfMKZB+1QR07UMx5zxTIG1aZdskc1BynXOnlHF1F8vDgdveg9OusHGftXVywrIrIwBDDGK46SH8H1B4sYGfL9Ku/63zXrPwx1v8AGwi0nYm4Qflk/rHp9a6dXOnVXkHT53RkZGKuDkEHcV3vTfie3ljVL8GGUcyqMq3uR2NWVOuf8dGJW4BwKespQrgt9qqIup9Mff8A6jb4Jxg5FPwdQ6bHpZr+10441ZNa2M5XX212mkajjaj/AIjxDsM1yL/FXRLYamu2k9o4yc/c1yvxF/qVPNG1t0iM2ynZpm3cj29Kas5rqPjP40tuhwNaWkiydQcYJByIf/NeOpFcdVuJZZHbwxlpJGpmx6XP1WUzTyFIc5eZ+/8Ak1W/EXXIY1/6X0wYhXZnHLGt88b7pes9QOeZLqUWVoMW8Z8zfxVaQJ4UQX0pDpdsILZPUjJPvViqSTNpQYHqeK5dXVAlL3LiGMZY7V0fRunrZQ6QMlt2b3paytli+Vd/WryFNGMAe9IycTCqB6b1Y2LiMa8jPaqoSDseDTVsxcrjYCmC8kucxeY5AFc1ezm4lP8ACNhimepXoT8mM6j3NVJkP0+tWAgGk+lFlhEkf+5uOKXMnrUjI2gkEUAFLwOMO2231q/szDfQmC8RZYyNww4rmWm1TYbferXp0pBODj+9KOospr74fiUqJLzpfsdUkP8Ala6u0vbe9t1mtpVdDwQa5bp3UvCKrqPvvTrdPV5fxfS5hZ3R3ZcZjl+o9fcVnTHTK2eaJsMaa5yH4g/CyCDq8Js5TsHO8bn2b/NdBHKsiB42DIdwQcirLqYm6pPG0Uqh0cYZTwa89+IfhRukSvfWcZktWHmGd0+vtXoPJqanKlXCspGCp7iqPGludUZhaJCjdtP9KhEzQlo2lJTtqXius+KfhYWga/sUJtScyRj/AO2fUe1cm5SRAG8z/wAWTkCtCMhEYIxsSCTtitMUfU+VAHKg7UQssYDi3V1PK9mqai3fSzIVBG22/wBDQBSRmALkqf4V3rKaW2LQG4jeNQH06Sd6ygufCKTeHCisAuCc4qayrYpI0hYFSOQXxnvRrVZHL+LpZGUaR3HtRo5GhZzDIojIIZyuQv1NAGeeA2qSLIgY+ZNAzq+ooSszn8QsjDSw8QDgVFXb8KRGB4iyEalG5/8AFSaFnlYK8yuCMoDhTiiGLt7aaXVq05OdY2BqDQyxtrMwaN+F7kUtLc26SKJJMAnBRhvmmppGdSyHJxgdzUCU0bzSCMlvJjUO/wBK7jonToel2QdVAklGps9vaqHpVrHFqvb5y5fGmM9yO9X1zfxx2azyEJEq6iKlq431O/jtIGnc5xsADuT6CuPuppDIbqfP4lvlXtEP802sz9Tn/GzAiJf9iM9vc0jfwMWZjvmpVVonP4ghjVjE4xvt96pZGCS79jxTtvMGQY5I71kMTOWGx3pYTBGG+4qUjlRx29ar5yeeKuCyaYSKGG2RR7O4wTE5yjbYNU0U51AFvpRNbA6hzn1q4IdUtzbTnG6McqaQBxv3q5ucXdgOdcYzXPtIc8GpQyz7HegSkMuMA1HXkY71HVnvTQpKmG4oDJTsi6snn1oDJz2qyiskXzMMUnKhFWMqecnv2pW4QFfeqhaH0ozLkZ9qDFs2KaxqUYFSqW04obrhtuD/ACph1I7UMjIoFUBhu0ddgTgj1qyjfJAJFIunA99jTC5aMEc1KLCPDAemaKVBG1VcF3onCSHB/kauYyCvrUC7xHHG9c38RWXhNHd9h5WPpXYeHnkUKe2SeMo6KynlW3zVWVxdjcLgebNX8MgdQfUb0SP4b6FO7anktJfRG2pyH4L0MDbdfTRj5ZFBIrXha15QBQoG5+1ba9gt1JkZQMdzTw+E4M5vOvEx91iABNHXpvwhZnzQvcuOWkJOas+Ol7jnZurfi2WK2DP6aRVv0/4fEUf47q58G3G6xk+Z6ck+JOnWSGPpvToo+wIWub6h1O/6tLh2YgcKK7c/FPuufXf+N9e+ImulNpZgRW67LoqisbINMJJFyBxmrEWcduMzbyH9IPFN2lt4hDMPL296fL1kxnmbR7aIvg7hR2q0hi1DjCj0rLa1IUAgjFWMcJUDI7bivK61O2jG1OMwhiyTzQMpCpdzgdqWkllu3ORhBxWoybgLTyDGy559asWfwEGPmxnFLWqLFEWIwBxWSSFySTQJzMzSMx5O5oJl7GiSnzEmhYXfFKJB1Y7VjSkLjihMQGPYAdqFLIwHOR2pgGHzKcjvVvZDBXB52qnT5shc1ZWhZSDpOxqjorVCCGzmr20nZVHm2G9c9auSoIyDVjBI2ec1gX5uUmiMc0YdGGMOMikoLKSwk8To9wIgTk2srZjb6H9NRimyqhhipM3dTg0V0NhfreoVdGimjOHiblf8j3p7muSi6iA6ibKsmwkX5h/ke1XkfVoV0+OyiNtlmHyk+h9DWpUWRwUKkalIwQe4ryz4o6IekdYEkBYW0oLIAOPUZr1IbjaqL4rsXveiSmFiJYfzBj07j9qsqPMkDSRFVcBQ26vsVqb/AJbsMCQY5V+K2jxiJ2JXSQB9aiVjEmVT5sAmtAniRKRqfwBjlsnNZUZRFeQCJjHlTuCcYrKDqCsbbWxIQDIBP8qKZpGD+HGERlBaMHI2rBbmRNKLpCZZlz2FDjPzSxkLg4KqaIWxG9w5RmOwyFHNT/2y5GGXIK5bGDRzE4YNHGxGMnA4oaTQIZGcSeJkDSwGN6IyQTiRo2EYHzLjk/WpIrNAocIi6tig831rd1GkZZowXII5bO1Q1CKElwSw7moqVv1NYuqpk5iiACqRtU+qx3dxfx2eT+BlHiI/qncfXNc012p6hkbAHj1q9k+JBJ01UXBeBsqPVe4rFaW6IF8uPKBtio3kCyRlm2229aDZX0d7Cro4yRmnXHiJkkn+9QcPfgpIc7DNatp9lXvTvXbcI5IG1UNvMyyDcZoL6U4XvVfM+cgjimI5CyY5pOYaWOqtQAaQoc5o0b6gPMaTuQDGSp/ak7e8ZX0sRsfSmjpLWYoxU7htqqr9fClIC4GdqOkpOCprOoDXGknfg1KK0SZ2x96kG7j+dLFsZ2rFlBqBk1hQlTjihq4yDTUeCDVFXKmCdu9JzL7VbXEf5jYqvnj396oq2UCTamYvudqFIuDt/SjQjb7U/BuRPLtSh5/tVgynRSTrg5qX0IFRjet25ydFaJqIOmQN2oDXFkJo8rnVQbHqbWkvgXZbGcK5/vVhA+Mb7Uefp9tfxFSAG9agdikWQArgg8GmPD24/aueto5ulTCF2LRk+U9qv4JtaDf7UCtzYJcPqUYkG23etp0m5XhZPcaTTjtjzcEbgirOO4uZEWSO7RfVS+CK9nwZ1MrHeqVOizu3+1KR9K2ehyY8yAAclmxTtxJdDJa8XH/qJqmnuiurMrPXozmMbUpun2sAY3E6gj9KDJP3qqu7yONGW2jEe+M9zTCJcXbEIgA/ienrTpcMLa5MvJ/E3b6V5/k+XmfS8839VXTOnSzSCWaMnvg/3roktVVd1Gewogwp2GBW9WSM/avLberrr9CRqAB2NZLIqLlt/QDvQGnVTpTzP9dhRIYTs8h1E/ypIBmFrgh3PHApuCJYs52FaLpCMkj6VAFp2yThR/OqGTNr2AwudhQnf61IDLegqRQc0Cr75z6cUsSQc/yp2UgDjjtSU0m3FSwDeTbesTD7NQHYSbDO1HiTAxmget40B96s4AikZXNVsA0gZp0XBRRxVFmjKMADbtTAYEZA39qp0vlY6cjYU5bzhjgGs0WqSFsA5ApgNnYb70jDJjAPA7U3Gys2/JqLrHi1fXNGtRJCGVlDxsMMrbgj3oilWUb8URQB9KIJBfS9GQOxkm6b+rO72/8Alf6V0cckVxEssTB43GQQchhVDEdORyCNwe9AsWbo994a/wD9fcHyrnaF/Qexqyjl/iLph6R1YxptFNlosrlT7VURa2LrMgOF+ZRivVutdJj630uS3YlZF88bjkGvLnt2hkkRQV5BDvnjkVuVAPBRXyHdvttWVhOE2B52A4NZVR1UcsIRAE0sTgkncVORWjY42DcnHNLyKGMMiu6MGyykZU/WmLlGlOuc6S24VePYiqIakijbU0jDlY8d/rWERzeGDFhlPzBt6iJjFcLANTMRkBht+9bFw2lyYCyHY4HesoKwhXUPNhiArk5xVd1aZbZBGGDNg5IqxnigUoAGKHBOdv6VR9alj0OPD8wHOc4pVjnzOfxDMOSCKSa7limA1bGsRybnG+M0C/jwwYdxXNp0PR+pvYXADEGKTGM9jXoFtL+IiDg/TFeV2TfibPQT5gMCuq+GusaVa2n2dex7j1oL3q1sskZG2fXFcHeRm3uTkYr0eR0mQ4GdtsVyfXrPUjOF8wO1AjZza1X6cZo13HlCyjtVTaTeHIFPHG9XSMJIwoxmrBUBjqIqpvwIbgMuwNXV1F4Uje5qm6ohMefSoHrC58RQD32q1ZfEtmH7Vx3Tbzw5gvfnmustp9SjnfmtYKqeMoTn14pB3I9qv7yEOGbeudufKxqYGYZN+c4HNWkDE+mK56CY6ueKvbVtSg5q4DTR69xVdPH6bmrrTkg+1JXUIBzwCMVKOdlUhzRIl3GMbVlwNMmKJbqCdx2oClQV4xScyetWYTbONqWnj2O1L7FadjWiAaI4wx25oZGKgJExGFqwijdQGU5PoKrh2I7U/Z3JjZcGganjFzbHV/uJvUbVmC5J4q1iaKYZwMnah+HFapJ4mMLwTQJXFyI1Of2rl+v3twkkL2zS4bKlUq4njF9MJA7KgPpzTkMKRphVA9zzXTnrxupZrlbE9XuiA8cwH8TkgV0Np0nRvM5c478VYrtuamGOe1OvktJGokEQAA4FFDb7DNAeVIxl3A+tD/HPIQlvHn/ma5qckkSNcuwHtS2uW5bCAovr3NEgtCxEkpLv7008kcC7kZPAqwbt7ZIUG2T3Joc98kPkj8z/ANKSnu5ZvKPKvGBWW9v3IP3rQagSSXzucnPFOgBBgVqCLQu1bkbHGOaDYJzUiTxn7UEElhtipM2xOaAE8g08b5qsmkDMcU3cyYyOARVW7ZY4qaCo++DTUTn60ihyafjTYGpocify+4FAuLvSuAcYO9akkEcZJqmubnUT6d6s9B1L5/F3O9XVndEhSDuPWuTjkzjB2q3spvMBx70+x2FvN4gBPNOLNgZ3yDVNayYjOTTqyrpO+alFtHdKSNjk01HISdsYqiWUfxY34py2uNMoJ4NQX8bbDB3rGjjmHhSbq+xocJDIDyRzUDIHfGd1oLjpt08UzWlwxMiAFW//ACL6/WuR+N+itbXLdRiQm1lI1MP0N710bpJdWqtG2LmE6om/t9DTDXkV30j8PcqQLpdLA/p7f1rUqPJ3cIjNJLpXVtoNZRbhk6VeSQPEJFUkMB3P0rK2On/KiVfFVxJGMEEE5/aj3c0UluuUJGwV8bj0obTzJpdguNJ1kjf61BCgQu8igMMkav54oiKys48JjpB2DDbf2NRBmLvDKXQgY8TGzfatQiOd/FUCaHhXHb7VN5fwqkyM5DtjfdgPYCgKItUQUvGy6v1kgGqTqTZEuBtkjar3wkKZjkJBG+1Vk0Hi27jABBIJ96lWOOgjIuGJ23rV4mqNge3rTLR+HfFTgZNRukDqdxmuakOmPouWjLcjI+tdA1rJMizWxxOm6+/tXKs5t7lXX9J3z6V0tn1BYl1njkYPagv+h9XWddEhKyKcMp5FWV5EsyE5zkYxXG3l3btMOoWTgSg4lQHkev1roul9SS5gXLDzVbBzHU7ZrS61AYUnmnbSfWq7irbqlkt1DlBjHrXNxBreYo1QWt3GZYiwG9c3ejyMGGNu9dLDNlADxVd1O0EkZZewrQ4Pxvw15GePNiuz6fKCASa4jqi+E59Vaum6XMXhjbnIB+tUdHJ5k371zHU8JJgbHvXSKQ0dc31vaUjjFT7FcjYfFXtlPkjg4rm1bDc1d9OkGpSe9L9Do0JYcUO5i2NTtjqJx601JFqU53+lT8HJXsWls9qHbZHNWl9b51ZqrVSjEZNQWKDaoSrkH0rITtvvRigNWCnmjweKUYb1bzR5zmq2ZdLZpQNTviirgUAcijLUFnYyupAWROeGOP50bqOqeVVlGEX9IOQ1V8KEkHtTgiZhk5q4BeIkQ2/pUGvVGwyT9KO1vsNtqGbTUfpTQNb0YOQ3tWvxFxJkINAPfvW3t9AzW4yF59KgilsGbMjF29TVjGFUbAYoCnuKKDmgMZ3CgDalmYux1EE+tG/TS7Dze9UTjjJIOKsreIhd8Ulb7EZq1gUHGN6sBMaV4pWQb78elNscZwKXlByD67VQIYH0rTvha2+VOQM/SgSyjTjg+9AjdSZJIpME6qLNu3IqKJqGfes0HhjyKdVQqE8YocMeMdqVv7wKDGrbcnBpIF767DMQCcDaqtpMmtTTZPP70JW3rQagc6gKvLCPON96prRCxG1dDZx6U3HFQXERCqBUzLpXHrzS6sEQHnaotKpOKUOxyFRg7709byA4Oe9Vcbg7Z4p202ZOdzTB1dvJptdRI2FI2kvizOeMnmhdQvRbWixDdnpGzvlgXUWA9c1B2tm2ACDwKq/ie5ES2vhDfXnaqduuyykrBsh2z60td3UkjRiZyxG5qCHxLaQQ9SS48Isl5GJMjjUOaymutxC8+G7a4MwRreXSSwOMMPb6VldP/iCMuY2COEmK5x8wx6Gl08SVoSGWKTdTojDBh6GmgzW0bNBpEg/3MDOayCMxsrpo1Z1j6VWRWiPhq4C+cZBB2B+lRaRG8skvmHfGMUNI/FmaMu6AkkqRsaYj1eIYSsTqRyfQUVG11LMB4mUUEkik4T4klzGc7sTirNoxFbkhFXVxj0qpt5BF1c6vlcc+9Z1Y5bq0RhutW+M4pdn1KDV78SWhyWA25HtXNRvtjG9Yqlr2LOSBvRejXUayeHMucdj6Uw8QkG++aqbuCS3mDodxwRVFn1rozRL+NsHI7so4NJ9E62Y5xDJ+W38JP9Ksek9XjmXwZucYwe9K9Z+HfxKNdWnkYb7Vodxa3qTQKHIyR+9I9RtFJMiDeuR6D1uVG/B3Z0zJxnbUK65LsXEQBOazgro2ZTg0x4gZcEZz/OoSphjig759qfQ5L4osfCdpgvlbvUvhybXZx777g1fdWtFvOnyKw3AzXL9A1QK8f8Lmr+DtIpMACqLr4IZWPeraF86R2O9IdfX/ALVW9DSDmicMCBVtYSgFcbd8VTOdvenbJwVBHPrQdp09wwGTVsoyu1UHT5CEA2J9avYH2FSituodWSO3NUlxFpc11NxFlieTiqe7t++Kgroj33p6MBl3pRVwxG9Ow5CAGqFpkJqpuVw33q9kXCk1UXcZ5xyaBDBxU0OwqP23ra7GoHoORVmi5X3qrgOd6tojnt2q0bMe3FZp0ghRRtJO5rAuknbNQJSxbZI2pXw/NVpJHtg0s8WN/wCdAsuQaKmTjsa1oxt7VJfm4oJk4XegbZokrYU+9CTcgf0qh23VjvjNWsIwuDtVfbA+WrAbKOKsG3IzQ5ADHv2rf6/7GtkhgQcVQg7YLb80pOcoTR59iwI4NIyPyv8AOp+hVlJbYk703brnkYoSqSwpxdMKF32AHNLAK+uVtoSB85G1c7cTFsmpX96ZZWYnI7VVvKTk6jVQYvqOKPAhfFKQqztnHfvVtawHI2qKfsoc42Iq6tyNOmkrYYUetNhwqbYzioCvJp2ofi5IB7ntS0kuMAd96Gjs3HrVwWqP5gRk1b9P80i9u9UcJzirFrxOn9NmuGbBUELn1oiHWuqxpcMzt8uwFc+eoXN/JoTypnGBVS9xLe3BYksSc10PS7UIqlhg96Kv+l/lWwU8imG87En7Glo3CIRnc0xHIDDuMe9Si/6XAt/YTWb40vhhn1BrKS6PdiK7Glycg7VlPKwTmaIyERoyouSDtlh7+tZFcLGqjWkmRuBx9xRXS2Ex8Nm06dTBhwfahyRqkxaDDxjG7r3row3LdNah5hcfMujC8DNRUySxojI/iDBV+x+ntRrgFpI5VRPCZQWCjGDUrUrE8lwWJVASvmyP2oqE7eGqxZ+Xn61UX4ME8E6nbVg0R7vXIWZhgmk71/FjKhud6560t+oxLeWIfkgV5/dRG2uXjxt2967no1yk1qInzkjG/rVF8TdOZGE6jYbGoKi3bUcH0pia0SdPlzVfBIFc52NXdrpZBk0HMXdg0La48jB2NO9N6q8QEchyRXQT2QkjJwMVRXfSSjFkzQEvulW3VkEsJ8OddwV2pezvri1lFteDDjYN2ao288ttJhgR2qwIg6nH4cq79m7itQOiUSrkb1psVU5uelyBJ8tCx8sn9jVjHMsgDKQQatEnTKEHvXHWw8DqlxHn9Wa7E/L6iuSvE8H4hkGNnUNUn0L23bODmtdbGvppPoQRULY4UUfqGHsJB7Ug459+1FsmGSue9DOcf2rUZ0TbHY0R1FhNgBc10drN5RtXG20hBWuhsp9hk1LFXzDWM5wfWkLmMGjxy5GK1Lgrue1JBSSQebjvTEcWBU5EX13rBtwKgHKvlOKqLpcgiriY+TGe9VU67HNBVHY/WtDmpOMHaoj1oHbXY1bRAY1VU254+u9W0JHbiqG1xjet6c1iYIqWNqAMgH/xQvY0SbI470EtzmoISgDgY2pbOGPempDnH0pIthjzzQSkbIqMfzDHaoMwY0WLn2oLa1HlBG1NFvKc7VX20mABkU0XBGMgmtT6Gzu2c/etjvQwwzyKi8ukHekC11kng0gwOQcCnJ5Ne+QaW2wfWrBkQ9eRSPWb5Y4fCDc870W7vobKFizDVjYetcjd3bXMhYnk0EZZi5O/PFbiRnbAFCjQyNgVawxaFGBviiCW0OMCrW3UDANK28Z2p6EYbnNSqfQaQMfvUZJcAYxg0IzBUIG9BeUsBj0p+ibEsTR7dScZwBmlolLHfmmJ7uCxgEk7BR2Hc1RYK0dupkdgFG5JrmerdXfqc4ihz4K7KPX3pG96ncdTmCJlYs7IP71YdO6fowWGWNSIa6XZaMEjc10sES/TA70paRKuAOTTzMsSYJ34qqkzgOMEYFbkuNMbYOKSOGfy7j0oc0oyUz+9A9065c3AYE5AIzWVLpkADZ2z7VlYq46+2h8MiKWVRHyFkO/0paVdMoLri2JK6lckftzWwjKyPJiSNt8GpNcJK2oowRfmVBg4rqw3JAYfIzgBMMoVsgikbxjDYu7hNUh5TbI9aYguIpJ3IyQMjSxAb229KresgsURSSqrj6VLRVJONTDmjjLEY71WhWjkPvVjZHLZb5QKxrSXTpzaX5Vt1Y10F7DFe2jDGzjBzXIXTfmGRdsHOa6TpF4stuFbOag4a6tmtbhoyDseaYs7rThCN66P4i6WsifiYlzjmuRZCpLCg6u1lEiaanJaiVRhd8Vz1h1IxHSxOO9dLaXiuowc0FFeWLISdO30pOIeFINiMV2LojrkjIIpCa1hXBKA++KBQIl1bGORQykcGuduo5Okzkglrcnb2rpQhBKxDntSl7ZmaIqy/Y1sK290sq5yCMVQ9b0/9ZhZeSmDQba/WyeRJW2ViKSN7/1C+M4HlGwpg6CzfKgHtTV0dVoy98UjZN5Qcb01dP8AkHHOKDmceYihsMENRsHUfWosuRiiHLdiBnPNXFrckDIINUNvxj0qwt2NB0UV3sOBRjcZHzVURNtnNMKSRt2qVTZfPfNbB29DQFJPFEkkSManYKPUmpmo1MPIfrVdOMg5rV112yh28XXvwu9VE3xFA0n+2+n1rc+Op5ROXk7e9CUbmp+Mk6CSNsqd6iOea52Y0btvmq3tuc5qothvmre2BqhxPr96KDkbelDQUQNikApV1Db6UmwIbenHO/8AalH+Y+lSiDHKmkn+dhTTsQOaWfnNWQBXOo/WmIyRQFHmJo6Z32qwMhwFH9q2JfftQCeP61HJ+lVB2k2BqLSE0AnC4pe4vIrdS0jb9gOTQNM5HfvVVf8AWI7cFI/PJ9dhVfd9VmuMqnkjPYcmqtjQTuLiS4cvI2SaCql9hWwCTTlvABk7ZoCWsIQZ7+tPRpuRQ40x+1MIMD3xQGjOnai68Cli+Kmp2oGC2RUo0LY2NRhjMjACsvbo2qeDbYMpB3/hqSKjfdSh6amn55iNkH96otFz1O48Wdid9h6U5bdMMkvizEu53JPermC0UbAD61ULWVgka4VBnuauoIlRQMDPrUI00njinoo9RB7f0oJxaY8FvtQZZGkbnmpMGkcMRgZ2FTZFXBooDHwIwSd8UpqMtyD2O1Zfzk4UHet2ILyheTUg6vpcKaRk7Y9Kymel27FlVQTkVlTF054rMszyKcY2XG+aLDN41vhyse3zeHg0HxpYireCWTjVz+9a1Tu6yqdShsAA4rowl4cspI0xmPONa7bUlchfMWxirFvDkkVlt2VlUsz6+TVVdSYBzis1YprpRryOKlA+iByTueKi5Jc/yrAPyH9azYpZ/lO+Q1E6ddtDLpJIoDbrgbUDXpbVxUHeQMt3bmMsDkce1cr1PpJtrhsDCHcU50u/AYAtntmr64hjv7fHJ7H3oPPprJv0jBqEF5PZyaXJGPWujmtngkMbjfPJocvTILpff1oI2fWNaqGIIp5ZVuNlIxXN3XSbqzbXGCyD0rLa+kiYA4FB2EVskaAgb45oMsIzvvStp1IOoBONqe1CUAg9q1KPIOvWbRfEF3HvgvnH1rLOEqMDauh+LbZYusrI4x4i81VoVTfIxVQ/a+TGTRLibynFJi6iUbuM0Ca7Qg4bb1oBPySO9QY7kUKW6jTvkn0oH4sN2IzQNxS6JSOAasom3+lUgkyfX3p23kuAxClWHYGgv4HAQU2h2HYYqhQdRkICvEg7HmnV6c7RB7q9kYY3wdIq5KasWvbaDOuZAcZxmuau7ubrN+sUefDzgD+9L3jwzXIitIsLnGonJaruxjs+k27NLNH4zDzHPHsK6znxnpjfKoTdNsrKzd2hErgfqbmuXeYGbMcIGTso3q06lfydSmEUCt4YOw7k0BXh6WmWxJcnsOFrU2Rm+6atYhHbjTtq8xB7UYDf6Vzsl3O8niGQhuduKuemXgu10EedRv7+9cu/js9t89S+ltbjA+lWcPlXmq6EHI2p+P0rnjZ6M5XJojHbNBRkiiLuwUepNI3PW7KEYEgdvRaeN/A6xyM8/WgSDODVLN8RtgCK3JJ2AJ5p8XRFqJbgCM43GeKt4sSdROTOfpQZKq//AKiXxiDASnY57VIdet5BkxyAeuK1/PqJ5RYKBq3oy7YqvtuqWlxKsSSHWeART7EImXIAHcmpZitnP86HLIkalnYAD1pG56skYKwjWfXtVXPLJOxMjc74qBy66mSdMHH8Rqod2ZizsWJPJojbUu5oBufTiohdRqYGptqPHGPTeg1DFtnFORxgcCtImAKOgAoJAYG1SLY23qLNjg1EbmgIuTkb+1N28JcjIzQIIyz7iiXF+tt+TDgyHk+lAxPOtqvgxbueT6UtDHqfJ3J70CCMscsckncnvVrDCqqDRW4omUDamkBOwHBqSeUe1Mg5GRgCpo1FEWO/GdzTIYIulRisUnYDcd6kVz6fSqIKSSM/WgX1wFQLnt2osknhgjH7VUXMhdiDUt0DOZXwTvVx02AggjGRVLACZdhXTdNj0spxsakHa/DUAklLNnYdqymejZgsXl0kZIA9aytI55pOoxXASBoxaejg5P3p0iQyLJhUiG4DHY/tQbqOIRn8RMsmP+flU1kLx3SCFpdYVfKFTGP81pDZxIGdRp1DGBx9qqru3GWABroLTQPLpzgbmj3FvHIuop9D6Vi1pwc0JjcjvQ41ysnpiuhvrddTDSM+4qifEKyBuTUCDINO3NKSLycb0dplBwTUCytxUA4pWikDA4+tdR0zqQKhHJ7d65QuFzngd6btZMtswFB2V5aLcxGRecZBqm8KSF9OMVYdOvToEbHUKburUSAMoGKCthOSQ+CCKQ6j0iKVTJGmCB2FWDQvGdW+P5UWM6lOTig5WJXt30tkdqt7abBA1US6skck4++KDHZy6vKtBWfG1tHN0eO5/VFIBke9cCrEY3yK9F+KwYvhiUScl10j1rzQXDL+jv2rYYZATsKj4QbtzUUuELbnSfejq6ngg0AvBBGMUvJCVNWGkHBBFbMSupGaIQjG9WMPlw/70EQEE+lMwrhcHigcivIIl1O4ApO+6tJfP4EAIj7Du1L3PTSza4TseVp7pMVnZkSSPmXH6hxXSZJrNlvpKL4dleNXadULD5cbinE+HbaJdc8jPjvwKZbrNqh8paZzwsYzQZo73qigSD8NbZzpz5jU8rb7PGRT33UIYQbfp6Koz5pAN/tVOQFlBmDAE5Oea65umWcZXEQyvc0t1W2ku4AkQTIPcb1qdxm82uYuZElkAjTSg2UVYW0sfS7bVkNNIPl9KAem3McbyPHjw/8A3mh2Vq15caWcAckk10tljMlh+zfql65aCQjH2Aq0SLrqY/MjOe+1FnkTpVkPCRSOACdzVfP1y4khZAqpq2yKzNv1GrJGprme5uBb3FyCurzEHAFWZuelWUDG3jWSQDGvGd6RsoemIqfiJDLM36V4+lC6ksklyEgtGSFeFC80uWk3DXS7FppDfXGMZyopPrF/+Kk8KM/lLzjuaeY9Qu4BEkItocYJJpNuhy6sLImn1NSdTdpZcyKmOGa4crFGzY5wKuEW6htfw8dqkQOxd6fi8Gwi0R+Z8b47mkri4aVy2MVnr5NXnjGQJa9LUsMT3B/V2FK3N5PdH8xts7Adq03O3eoBO9Yt1tFdhnFadgO9TK4peY4Iyag2xzjBoJGanjiipGDuRneghFFkA4ptVAABrSqAKmD60EhxWZqOazNBPvxkVIYByR70PIX6UjdXjNJ4EI87cn0FA7NfkExW/wAx5b0rVtbk4ZiSxO5qNpa6VGOe5qzhj3AxigNbw4qwhUBQO9QhjBIA7fzpxECx6mFSqxEGCTsKIDrIGPKKi5L8Daixg4H1qQMoAFxtitOwUZrM4GM0vcthOd6tqFbyYsM1XnzHUaPKcg55pF30qRU/FWVgqPJk/t611NjGoUA5J9K5bosZZ98neu36VbCW5iU/xAGoOqiKW3T7eNyMlc1lAvAsswBOAu21ZWtRRxIkMDxSWURHZgfKayCW2zhEXJGBobg0EHqGgGMxyDGT5tOPrTEX4eazXUESUYJwRyK2LXo4Yu2scHkiuijgjdMEDB5FUHStelm3AP8A7zVus4RgNf8A5rnftYXvulK4O1cv1z4ddrYyQKSR6V3H4lWjJNIHqUUbFGXI96g8gmtJFYhgVIOMGgNE6OVIx6V6zd9LsuoxltChvbmqG9+GlW3bBJ0jIoODZDjDA1iMyHkjFdSvSNcO674oUvQUkB2Kk96BSwutOMMM/vXSWl0SgDGuWXp89nc4K5Wru3B0rzxQWsiKykjfviggRr8ygfWoxyldqOxSUDV+9BArCTkEfSs0AttjA9q1+GIOQc77Vq5mjsrR55iAqDJ3qjz7/U7qMsSWlnbnfPiP/auHsrxJxpZcOORVv1q/PWupS3bZAJwgPYdqo7mxIIeIkMu+RW8Q69ujk4ApZrV8eUkfSt2l2WOiTZx/Orm2hVk1vxQU6G9iG3nHuKOl7hsTKY2/lTVxf29sCMavYVBJ7G+XZhq9DsagPHOpAJwQe4oyGMnZhv771XtaGI5hO3pQ2btIuD61RdKCuPSiqE31Ip+ormJb27sJfLMTERkat6ag+IQdImjGP4loOqhliUYVFX6CmPFHqN6o7fqlrKoKtv7U2tzG+4aoGZXy2xziha9Q981oyKfeohwO1AQ8YODkUi/S7WRy4Qo3qhxTuvIzWal9RVlwJJ0WJm1S3EjDsM01H0WxA86u31apowYnzUVZVAwSDV8qmQSO3s4APBgRSODjeimQ4znml1kXO1bLeX2qK1JIcZpOWVmzgmjStkYHFAIwNxUCzDfigsMimiOe1BYbd6Bcr2qGMUV3Cjc4FKSXSLsuW+lUENJ3bArzvUi7yHzKVFRkiBXnJxQZbuJIge4ODTSYyfrSFp5C6H1zToypzQGrNqiHB3qJl09tqgmawnb6CohwRnNBuJwkTEntQN2FncdWumt7fAABLOeFFJ2Vj4Dyam1yFiCatOl9VW2+GJIbcAXNzIQ79wgocEYP1oGIIiTgGrGGEjHehWieYGrONR9s1FThh/UdgKIw1tihSzaVCiiWxLgNzUwMJACAD6UcQgCpxrjfPNbkZVj3NaAHwlVtxKMbZ70e5nG4zVTPLjnJqUQnuMjApXBeTasc5barLp1n4pDHbFZFr0S1KKCdxzXbdHjMcmvGw71z/ToMOqgb8V1VsohtmUEjPrVwRmkkec6RketZRlweP3rKaipSIW8gjVmKkZ8xziq6JEY5CKpZjq098d6ysrojr+mki2AHFL3kzK7AYHvWVlc601BcS6gCxIO+9WEyLJCCwGSKyspRXJI0T6UOAKsSS8JDHO1ZWVAhLEgUADH0pOZQCu1ZWVQrcopjbIG1KxsQKysoJ5OT9KlE5C81lZQNqxKZya4z48vJo7OKBHwkh82O9ZWVrj7S/Tz1eBRkGV3rKyunTPKv6hEsRV0GGzVvau0nTgCf2rKysNF1tYnY6gTQZbWFScLjvWVlQLu7xHyu371D8TIxOWzWVlWAd+xmtyH9KoopXjYYPfvWVlWBwSumGRip9qtendRuJJAjsGHuKysoL8ZKg5Iz6VhZkGQx571lZUBFlY4z3opArKyoJY3FT4/esrKAkfr3zRwBprKygE4/kKA+2fpWVlAFuaUuHKocVlZQVZdp5cOxx6CnI4UQYCisrKCTIpHHNKt5WIHFZWUA0AD7d6NqI2rKyqNEmhOSd81lZRWBjik78nRzWVlBY2CKlvGFHaraHdhWVlQWsCDA59af+WLIrKypfsKOTrOabsmIOBxWVlUWo4FBl3296ysoKi7Yjj1xVZJud/SsrKzRuJQSCa6KwRV2A7CsrKL+Oo6ZEi5YDcCr7QpSMY2xWVlVkYIoAwMVlZWVlX//2Q==', // 作者头像，被notion中的ICON覆盖。若无ICON则取public目录下的avatar.png
  TITLE: process.env.NEXT_PUBLIC_TITLE || '下午看黄昏', // 站点标题 ，被notion中的页面标题覆盖；此处请勿留空白，否则服务器无法编译
  HOME_BANNER_IMAGE:
        process.env.NEXT_PUBLIC_HOME_BANNER_IMAGE || '/bg_image.jpg', // 首页背景大图, 会被notion中的封面图覆盖，若无封面图则会使用代码中的 /public/bg_image.jpg 文件
  DESCRIPTION:
        process.env.NEXT_PUBLIC_DESCRIPTION || '梦想发财~', // 站点描述，被notion中的页面描述覆盖

  // 网站图片
  IMG_LAZY_LOAD_PLACEHOLDER: process.env.NEXT_PUBLIC_IMG_LAZY_LOAD_PLACEHOLDER || 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', // 懒加载占位图片地址，支持base64或url
  IMG_URL_TYPE: process.env.NEXT_PUBLIC_IMG_TYPE || 'Notion', // 此配置已失效，请勿使用；AMAZON方案不再支持，仅支持Notion方案。 ['Notion','AMAZON'] 站点图片前缀 默认 Notion:(https://notion.so/images/xx) ， AMAZON(https://s3.us-west-2.amazonaws.com/xxx)
  IMG_SHADOW: process.env.NEXT_PUBLIC_IMG_SHADOW || false, // 文章图片是否自动添加阴影

  // 开发相关
  NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN || '', // Useful if you prefer not to make your database public
  DEBUG: process.env.NEXT_PUBLIC_DEBUG || false, // 是否显示调试按钮
  ENABLE_CACHE: process.env.ENABLE_CACHE || process.env.npm_lifecycle_event === 'build', // 缓存在开发调试和打包过程中选择性开启，正式部署开启此功能意义不大。
  isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  VERSION: process.env.NEXT_PUBLIC_VERSION || '1.0'// 版本号
}

module.exports = BLOG
