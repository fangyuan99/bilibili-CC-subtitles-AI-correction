# Bilibili CC 字幕 AI 修正

一个用于获取并修正 B 站 CC 字幕的油猴脚本，通过 OpenAI API 自动纠正字幕中的同音错字和标点符号问题。最终可以获得一份完整的 AI 矫正过的文案
![image](https://github.com/user-attachments/assets/391f22f6-fae7-4345-b7bb-67fc9dae56d5)
[示例](https://github.com/fangyuan99/bilibili-CC-subtitles-AI-correction/tree/main?tab=readme-ov-file#%E7%A4%BA%E4%BE%8B)

## 功能特点

- 🎯 自动获取 B 站视频 CC 字幕
- 🤖 利用 OpenAI API 进行智能纠错
- ✍️ 修正同音错字问题
- 📝 优化标点符号使用
- 💬 支持对话格式标注
- 📋 一键复制修正后的文本

## 安装说明

1. 首先安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展
2. 点击 [安装脚本](https://github.com/fangyuan99/bilibili-CC-subtitles-AI-correction/raw/refs/heads/main/Bilibili%20CC%E5%AD%97%E5%B9%95AI%E4%BF%AE%E6%AD%A3.user.js) | [国内加速安装](https://github.site/fangyuan99/bilibili-CC-subtitles-AI-correction/raw/refs/heads/main/Bilibili%20CC%E5%AD%97%E5%B9%95AI%E4%BF%AE%E6%AD%A3.user.js) 将其添加到 Tampermonkey 中
   

## 使用方法

1. 打开任意 B 站视频页面
2. 点击右下角悬浮的 B 站 Logo 按钮打开控制面板
3. 填写必要配置：
   - OpenAI API Key
   - API URL（默认为 OpenAI 官方接口）
   - 模型选择（如：gpt-4o-mini）
4. 点击"获取字幕"按钮获取当前视频字幕
5. 点击"AI 修正"开始智能纠错
6. 使用"继续生成"按钮处理长文本
7. 点击"复制文本"获取修正后的内容

## 配置说明

| 配置项 | 说明 | 示例值 |
|--------|------|--------|
| API Key | OpenAI 的 API 密钥 | sk-xxx... |
| API URL | OpenAI 接口地址 | https://api.openai.com/v1/chat/completions |
| Model | 使用的 AI 模型 | gpt-4o-mini |

## 注意事项

- 推荐使用 `gemini-1.5-flash-002` 实测过万字的文案也可以成功修正，免费使用: https://aistudio.google.com/app/apikey （需要通过 one-api | new-api 等项目转为 OpenAI 格式）
- 需要视频包含 CC 字幕才能使用
- API 调用需要确保网络能够访问 OpenAI 服务
- 本地会保存 API 相关配置信息（不会上传到云端）
- 请确保 API Key 额度充足

## 示例

https://www.bilibili.com/video/BV1ne1iYxEus/

大家好！欢迎收看《大问题》节目！我是主持人机器人夏先生。




本期要探讨的大问题是：当真相无比残酷时，我们是否还应当选择相信真相？人们常说，幸福的人不需要知道太多，对吧？以前知道的不多的时候，主打一个二逼青年，欢乐多，天真烂漫，成天傻乐傻乐的。但是，一旦自己通过阅读、上网，去了更多的地方，认识了更多的人，知道了更多的真相以后，发现哎呀，这个世界原来不是自己原来想象的那么简单而美好，真相有时候是残酷的。当我知道了残酷的真相以后，我就再也回不到儿时的天真了，哎呀，我不干净了，我不纯洁了，我虚无了。当你知道了太多以后，开始觉得自己看破了红尘，一切都没什么意思，于是你整个人都虚无了，是不是？




那么，为了让自己活得幸福、快乐、安心，我们是否应当选择相信一些虚假，但是很美好的信念呢？生活在这个现代社会，我们需要学会做各种自我管理，包括饮食管理、情绪管理、身材管理、皮肤管理、穿搭管理、表情管理等等等等。那么，当现实的真相并不美好，因而可能会给我们带来负面的观感时，我们应该进行“三观管理”吗？什么叫“三观管理”呢？或者准确的说法应该叫做“信念管理”（Belief management），也就是关于我们应该相信什么，不应该相信什么，进行自我管理。唉，我们要去相信那些能够让自己生活变得更好的信念，也就是相信那些美好的信念，而不要去相信那些会让自己生活变得悲惨、消沉、低迷的有毒的信念。




在这种情况下，我们要管理好自己对生活和世界的印象，管理好输入源：不该看的新闻不看，不该读的书不读，不该关注的人不关注，而我们只关注那些能够让我们产生正能量信念的事情，这样我们才能积极乐观的生活下去。有人就说了，这个“信念管理”不就是自我催眠、自我PUA吗？为了活得安心逃避所谓残酷的真相，你就对真相充耳不闻，像个鸵鸟一样一头扎进土里，我不管，我不听，反正我就要相信世界是美好的！这不就是自欺欺人吗？




但有人反驳说，你以为我们生活中的每个人都是以科学家的态度来生活的吗？你这是站着说话不腰疼，生活哪有那么简单？生活不止有眼前的真相。比如说，你最近发现自己的伴侣很有可能是有外遇了，但是孩子正临近中考，你不想让家庭矛盾影响孩子学习。如果你相信伴侣不忠，你就很难做到情绪如常，你就会绷不住了，对不对？很有可能就会搞得家里鸡飞狗跳的，这就会影响孩子中考，对不对？那你是不是应该努力去相信伴侣依然忠诚？哎呀，问题不大，最近只是家附近的理发店做酬宾，他周末都是去做头发了，放宽心吧，对吧？要想生活过得去，心里就别太在意。




再比如，如果您目前身处一个逆行的环境中，为了能够让自己鼓足勇气渡过难关，依然抱有希望和动力，能够继续前行，你是否应当相信一切都会慢慢好起来？为了让自己成为一个积极向上的社会成员，你是否应当相信公平和正义最终都会得以实现？对吧？应当管理好输入源：不该看的新闻不看，不该读的书不读，不该关注的人不关注，我们只关注那些能够让我们产生正能量信念的事情。当你相信了这些正能量的信念以后，日子才不至于那么难过，要不然怎么着？难道成天不停地刷各种负面新闻，成天以泪洗面，然后陷入各种抑郁，然后躺在地上，一蹶不振吗？




其实，这个问题也是最近这些年哲学学术圈正在争论的大问题，也就是“认知理由vs实践理由”的问题。简单说，就是真相与美好之间产生了冲突，我们到底应该相信什么呢？认知理由指的就是我们应当相信什么取决于它是否指向真相，也就是相信真的东西；而实践理由是指我们应当相信什么取决于它是否美好，是否能带来好处。比如说，你的孩子要中考，你希望自己情绪稳定，家庭平静和谐，你应该相信伴侣没有出轨（实践理由），而你伴侣身上有你好兄弟的味道（认知理由）。所以，我们今天要探讨的大问题就是：究竟什么样的理由决定了我们应该相信什么？是指向事实真相的认知理由，还是能够带来好处的实践理由？如果两者出现冲突了，我们应该听谁的呢？




为了回答这个大问题，本期《大问题》节目邀请了三个派别的哲学家：以哲学家托马斯·凯利等人为代表的证据主义；以哲学家巴里·马奎尔等人为代表的实用主义；以及以哲学家苏珊娜·利亚德等人为代表的多元主义。我们将会分享这三个派别哲学家对本期大问题的看法，并且每介绍一个派别的同时，也分享其他派别对这个派别的批评与回应，最终需要你来评一评哪个派别的看法更有道理。下面进入会议正片！首先有请证据主义的代表哲学家托马斯·凯利出场！




在正式进入讨论之前，我们首先明确一下我们今天讨论的论域。今天的讨论有三点需要提前说明：第一，我们今天讨论的是应当相信真相还是应当相信美好；第二，实践理由所支持的“能够带来好处的信念”，“好处”是非常宽泛的，不单单是指物质利益，升职加薪等，可以理解为广义的美好，泛指一切相信它就能让我们生活的更好的信念，包括让我们感到幸福快乐舒服心安，也包括道德理由和对习俗的考量（例如，我们相信这个世界是公平正义的，这就是个道德理由）；第三，我们今天只讨论认知理由和实践理由有冲突的情况。要知道，认知理由和实践理由大部分情况下是不冲突的（例如，我相信2+3=5这个信念，既是真相，也对我有好处）。我们今天更多要讨论的是，当认知理由和实践理由出现了冲突的时候，我们该听谁的？例如，如果我处在极度悲惨的处境，真相对我而言十分残酷，我还应当相信真相吗？还是说我应当相信一些能够让我感受到希望和心安，但虚假的信念？好，这个时候，以哲学家托马斯·凯利为代表的证据主义者出场了。




证据主义者认为，一个人应该只根据自己掌握的相关事实证据来形成自己的信念。证据主义（EVIDENTIALISM）顾名思义，就是我们应当相信什么样的信念，只取决于事实证据，也就是取决于认知理由。有一份证据，信一份信念。证据主义源远流长，从当年的英国经验主义者到今天的唯物主义者，都可以看作是持有证据主义世界观的。正所谓“世界是客观存在的，正确的认识就是对客观世界的如实反映”，这就是我们常说的实事求是，一切从实际出发，理论联系实际。事情实际上是什么样的，我们就报以什么样的认识。




也许有人要质疑，那我现在生活十分悲惨，真相对我十分残酷，那我应当相信这一份残酷的真相吗？证据主义者回答说：即便真相是残酷的，你依然应当相信真相。你可能会觉得证据主义者太残忍了，那我还活不活了？证据主义者会坚定地回答说：即便真相是残酷的，我们依然应当相信真相。这并不是因为我们残忍，而是因为如果撇开事实谈信念，我们做不到。大家知道，伦理学里边有个特别基本的原则，叫做“应该蕴含能够原则”（OIC原则，Ought implies can），就是如果你对一个人说你应该干嘛，那么一个前提条件是他原则上能够干的了。就比如说，有个小孩子落水了，我恰巧路过，我赶紧拨打了110、119、120，并且大声呼救，有人落水了，快来救人！我这么做已经算个好人了。在这个时候，你蹬个共享单车过来对我说：你不道德，你就搁这儿光顾着呼救，你应该自己跳下水去救孩子！但是问题在于我不会游泳，我要是跳下水非但救不了孩子，而且还增添了一个要被救援的对象。所以，因为我能力上做不到跳下水救孩子，你就没有资格要求我说你应该跳下水救孩子。这就是“应该蕴含能够原则”。说一个人应当做什么，前提是他能够做得了。




我们现在来看，如果实践理由和认知理由出现了冲突，一个能给我带来好处的信念如果不符合事实证据，我们应当选择相信这个信念吗？答案是不应当。为什么不应当？是因为“应该蕴含能够原则”，你根本做不到去相信一个不符合事实的信念。我当然想相信自己是个大帅哥、有钱人，还有20个姑娘同时喜欢着我，我相信生活是如此美好！但实际上，我是一个长相丑陋、穷困潦倒、没有女朋友、没人关心的loser。我倒是想相信生活是美好的，但是我做不到，不是我不想，是臣妾做不到！这个时候，有人骑着小车过来批评证据主义者，说你们证据主义者说能力上做不到相信不符合事实真相的信念，这可能是因为不相信真相的好处不够大，或者相信真相的坏处不够大。如果有人给你一个亿，让你相信一头鹿是一匹马（指鹿为马的故事），那你肯定也会相信这是一匹马的。你相信鹿是鹿，不是因为你实事求是，只是因为给的不够多。




证据主义者回应说，我们就假定有人给了我们一个亿，让我们指鹿为马。对不起，他们给的实在太多了。或者反过来说，如果我们不指鹿为马，我就会被杀死。在这种情况下，为了获得巨大的好处，或者为了躲避巨大的坏处，我们的确可以做到指鹿为马，但这并不是你相信这头鹿是马，你只是撒了谎，你撒了谎骗了别人，但骗人骗不了自己，你自己内心里边依然相信这其实是一头鹿的。这种事情太多了，比如说妻子为了鼓励丈夫说“老公你真棒”，妻子这么做是出于善意，但她自己心里面也知道这不是真的，这不符合事实证据，这只是为了鼓励丈夫而说了一个善意的谎言。证据主义者认为，我们相信什么样的信念，根据的理由仅有认知理由。大部分情况下，实践理由和认知理由是不冲突的，但是一旦出现了冲突，真实和美好出现了矛盾，舞台上有的只有认知理由，实践理由根本没有资格上场，因为虚假的愿景，哪怕再美好，在事实证据面前也不堪一击。当我们的生活遭遇到不幸，当我们处在悲惨的生活境况之中，我们依然应当相信真相，而不是给自己编造一个虚假的幻象来自我麻醉，这更是无异于改善自己的近况。我们只有认清了真相，才谈得上去改善生活，因为自己骗自己等于愚蠢，从未听说过我们凭借愚蠢能改善自己的生活的。套用罗曼·罗兰的名言：真正的英雄主义在于认清了生活的真相以后，依然热爱生活，而不是自己骗自己。其实自己生活惨的一批，还非得相信自己是全世界最幸福的人。这么做，在证据主义者看来，根本就是做不到的事情。




如果用一个形式化的论证来表述证据主义的观点：前提一：如果主体S应该因为理由R相信某命题P，那么主体S肯定就能够因为理由R相信命题P（应该蕴含能够原则）。前提二：主体S不能因为实践理由R相信命题P。结论：主体S不应该因为实践理由R相信命题P。论证完毕。所以，在证据主义者看来，根本不存在什么信念管理或者三观管理这样的事儿，事实证据是什么样的，我们就相信什么样的信念。介绍完证据主义者的看法，接下来我们来介绍对证据主义的批评以及相关回应。




对证据主义者的一种批评是，他们让信念变成了状态的某种例外。什么意思呢？批评的提出者，也就是后面要出场的多元主义的代表人物苏珊娜·利亚德，认为我们说相信某个命题，其实是一种状态（state），例如我相信今天是晴天，我相信生活是美好的，这种相信是一种状态，如同穿衣服、上班一样，都是一种状态。而我们穿衣服上班这些状态的理由，显然都是实践理由，不会是认知理由。我上班是为了拿工资，不是因为上班会将我引向某个真命题。就算是科学家上班，你如果不给他批科研经费、不给他开工资、不给他评职称，你看他还去不去上班？在这种情况下，利亚德认为，既然状态的规范性理由都是实践理由，既然我们应当进入什么样的状态都取决于这个状态能给我带来的好处，那凭什么唯独“相信”这个状态就不一样，它就必须以认知理由为规范性理由呢？




对于利亚德的批评，证据主义者凯沙夫·辛格给出了一个回应：利亚德把“相信”这种状态和上班、穿衣服这种状态归为一类是很奇怪的。上班、穿衣服这类状态是由动作构成的，我们可以称之为动作状态；而“相信”这个状态它不是一种动作状态，是我们的心灵意向，或者指向某个东西的一种心灵状态。心灵状态和动作状态是完全不同的两种状态。和“相信”这种心灵状态属于同一类状态的，不是上班、穿衣服之类的动作状态，而是像羡慕、恐惧、憎恨等等这样的心灵状态。而这种心灵状态的规范性来源，也就是我们应当报以什么样的心灵状态，它就不是以实践理由为依据的，而是以“适切性”为依据的。“适切性”简单理解就是“适合”的东西，而不是“有好处”的东西。我们应该羡慕适合羡慕的东西，例如，我们应该羡慕具有美好品质的东西，而不应该羡慕丑恶的东西；我们应该畏惧适合畏惧的东西，例如，我们应该害怕野生老虎，但不应该害怕在播放动物世界的电视机；我们应该憎恨适合憎恨的东西，例如，我们应该憎恨实施性骚扰的人，而不应该憎恨性骚扰的受害者。那么，关于“相信”这个心灵状态的适切性是什么？就是认知理由。我们应当相信得到事实证据支持的命题，不应当相信和事实证据不相容的命题，就是这么简单。我们应当相信鹿是鹿，而不应当相信鹿是马。虽然我可能迫于利益或压力，嘴上对领导说了这头鹿是一匹马，这是一个动作状态，采取什么动作的理由可以是实践理由，但我的这种动作状态依然改变不了我心里面其实相信这就是一头鹿的心灵状态。




介绍完证据主义及其批评与回应，接下来我们有请以巴里·马奎尔为代表的实用主义者出场！（此处插入广告：我们目前做了两个产品提供给大家，一是“论证与说服50讲”课程，分享如何做到像哲学家一样把道理说清楚；二是Aurora讨论社区，大家一起探讨大问题。）




什么是实用主义的信仰观？简单说，就是我们应该相信什么样的信念，完全取决于实践理由，也就是取决于这份信念能不能给我们带来好处。甭管是A性恋还是B性恋，能让我们活得好的信念就是值得信的信念。一个经典的例子：我们去庙里烧香拜佛，你为什么信仰这么虔诚？是因为你做了什么仔细的调研和严谨的考证，证明了神仙具有极大概率是存在的吗？不是的，你信仰这么虔诚，不就是因为你期待着神仙能够保佑你明年考公上岸吗？17世纪的法国科学家布莱兹·帕斯卡提出过“帕斯卡的赌注”，说我们到底要不要信上帝，就看信上帝能不能带来好处，如果能带来好处，为什么不信？宁可信其有。帕斯卡算了一笔账：要么上帝存在，要么上帝不存在；要么我们信上帝，要么我们不信上帝。然后，拿数学期望值一算，得出结论就是我们应当选择信仰上帝，因为如果上帝真的存在，那我们就赚大了，如果上帝不存在，我们就算信错了，也没什么损失。信上帝的净收益明显比不信上帝的净收益要大太多了，因此我们应当选择信仰上帝。




咱不说信上帝得永生这么虚幻的信念，就说日常的信念。如果我们相信世界是美好的，我们就会活得很愉快很安心。为了让自己心情愉快，为了这样的实践理由，我们干嘛不相信这些能带来好处的信念呢？证据主义者认为，事实证据决定了我们应该相信什么；但在实用主义者看来，正好是反过来的，实践理由决定了我们应该相信什么。人是有主观能动性的，实践理由决定了我们应该相信什么。实践决定了认识。认识本身不是目的，改造世界才是认识的目的。什么样的信念有利于我们改造世界、改善生活，哪怕它是虚假的，我们也信它。哲学家巴里·马奎尔在论文中举下国际象棋的例子说明只有实践理由决定了我们应该相信什么。我们这里换成中国象棋来说：你跟一个对手下中国象棋，下一步最优的走法是用马把对面的一个炮给吃了（认知理由）。但在陪领导下棋时，你如果直接跳马吃炮，很可能导致领导立即输棋，你不能让领导输得这么难堪，那么你就应该不跳马吃炮，你假装没看见，或者干脆忘了。再假设另一种情况，你被外星人绑架了，外星人跟你下一盘中国象棋，你要是赢了，外星人就会用高科技让你这辈子永远打光棍，那你不仅不应该跳马吃炮，你就应该怎么烂怎么走，送对方把自己给将军了。无论你是在普通比赛中想要赢对手，还是在陪领导下棋，不能让领导输得难堪，还是要想方设法地输给外星人，都是实践理由在指导你应当如何下棋，并不取决于你是否正确地遵循了象棋规则，而是取决于你到底是想赢还是想输。即便是在和对手对弈，你看似是按照规则跳马吃炮，但你依然是为了赢得比赛这个实践理由而正确地跳马吃炮。马奎尔指出，信念这事和下象棋是一样的，事实证据是正确的，但我们并不总是该相信正确的信念。在实用主义者看来，根本没有独立存在的认知理由来指导我们应该相信什么信念。在认知理由和实践理由不冲突的情况下，永远是实践理由统摄着认知理由。认知理由只是听命于实践理由的手段。而在认知理由和实践理由发生冲突的情况下，舞台上只有实践理由，认知理由根本没有资格上场。




证据主义者就跳出来了，说我们之前不是提出了“应该蕴含能够原则”吗？你让人们去相信一个与事实证据不符的信念，这根本就是做不到的。实用主义者回应说，谁说相信不符合事实证据的信念是做不到的？他当然能做到！你们证据主义者太低估人类信念系统是有多么大的弹性，可供管理的。一个最直观的例子，就是对抑郁症患者的治疗。一个严重的抑郁症患者，他的境遇非常悲惨，他确实有充足的事实证据相信这个世界永远不会好了，他的人生一败涂地。但是，如果他继续相信这些真实的信念，他就会自杀轻生。这个时候，精神科医生就会使用一些与理性思考相悖的技巧来帮助他相信这个世界会好起来，公平正义一定会到来，例如，重复对他说“你真好”、“你真棒”、“这个世界也很美好”，或者通过药物调整他的激素水平，甚至使用催眠术。这个时候，这个抑郁症患者最应该做的，不是相信证据支持的真相，而是相信能让他走出抑郁阴影的信念。现实中有太多这种通过给抑郁症患者灌输一些不符合事实但却很正能量的信念，从而减缓病情甚至完全走出抑郁的例子。只要能带来好处，人们是能做到相信不符合事实的信念的。心理学效应，例如“自证预言”或“自我实现预言”，只要你相信一件事是真的，哪怕它是假的，你就会不知不觉地证明它是真的。（此处举例说明自证预言实验）。自证预言充分说明了事实怎么样并不重要，而取决于你相信什么样的信念，哪怕这个信念不是真的。医学上的“安慰剂效应”也是如此。总之，心理学和认知科学的研究表明，人的信念是可以管理的，哪怕这个信念并不符合事实证据，人依然能够塑造和管理自己的信念。证据主义者所言的“应该蕴含能够原则”在这里并不适用。我们当然能够管理我们的信念，之前说了，生活的真相是残酷的，我们能做的就是让自己好受一些，哪怕现实情况实际上越来越糟，但是如果我们相信一切都会好起来的，我们就会多一份面对残酷生活的勇气，从而保持乐观继续活下去。这其实也就是人们常说的“信仰的力量”。信仰并不一定是真实的，甚至往往是虚假的，但虚假又怎样？它真的有好处，它有时治愈，常常帮助，总是安慰。之前举的信念管理的例子，大多是自我疗愈（生活很悲惨，出于实践理由去相信一些能够疗愈自己的信念），如果我们的生活并不悲惨，但想取得功绩、干成大事，也需要信念管理（自我提升）。例如，《乔布斯传》中提到，乔布斯擅长“画饼”，让别人相信他描绘的各种愿景（这些愿景并非现实中事实证据能够印证的），这并不是说乔布斯故意欺骗别人，他自己也真信。有人说，人如果没有点虚假的妄念，根本创不了业。干大事的人，大企业家、大政治家都会有这种“现实扭曲立场”，都会相信一些与事实不符的妄念。要不然，如果大家都抱以证据主义的立场，有多少事实才会相信多少信念，那所有人都是做题家、打工人，哪还会有改变现状、改变世界呢？要想改变世界，你得首先相信这个世界上所没有的、不符合事实证据，但在实践上能够引领我们敢于去创造的信念。无论是用于自我疗愈还是用于自我提升，我们都是可以而且应当进行信念管理，从而管理好自己的“三观”。




介绍完实用主义的看法，接下来我们来介绍对实用主义的批评以及回应。证据主义者对实用主义的主张完全不买账，乔纳森·丹尼尔唯一指出，你们实用主义者说来说去，其实并不是在说实践理由能够直接决定我们应该相信什么，而是在说我们应该希望相信什么，以及相应的我们应该采取什么样的行动，把自己引向自己所希望相信的信念。例如，抑郁症患者如果真的相信世界不会好了，就会导致他自杀。确实，这个时候我们应当基于实践的考虑，不要让他自杀，但这种基于实践的考虑，只能决定他应该希望自己相信世界会好起来，并且基于这个希望，他应该采取一些行动，例如接受精神科医生的治疗和心理辅导。但这并不意味着他就能凭空突然就转变信念，立即就能相信一些不符合事实证据的信念。证据主义者认为，“应该蕴含能够原则”依然是起作用的，抑郁症患者并不能凭空转变信念，他只有采取一些行动（接受治疗，从阴郁的生活环境中抽离，甚至辞掉工作去旅游），收获一些不同于以往的新事实证据，才可能让他的信念发生转变。证据主义者乔纳森·丹尼尔唯一对实用主义的批评，被称作“重新定位策略”，实践理由并不能直接决定我们应该相信什么，我们基于实践的考量，只能导致我们希望自己应该相信什么，而这份希望依然需要通过我们采取一些行动，给我们搜集一些新的事实证据，依然是这些事实证据导致了我们信念的转变。




哲学家A.K.弗罗尔里回应说，乔纳森·丹尼尔唯一的“重新定位策略”其实并不构成是对实用主义的批评，而是说你们证据主义者自己撤退了。重新定位策略其实是在说，你们实用主义者说的都对，我们证据主义者也不知道该怎么反驳，但我们重新定位一下，自己重新发明一条新的赛道，这条赛道里的概念都是我们自己定义的，这也不叫直接影响信念，这叫影响了造成信念的相关行动，所以在这条新的赛道上，我们证据主义者还是赢了。




我们还可以接着弗罗尔里的意思继续说，你们证据主义者的撤退，已经和实用主义没啥区别了。例如，我作为一名视频博主，每次发出一期视频节目以后，我就删评论，删掉所有说我长得丑的评论，只留下说我长得帅的评论。于是，我在评论区里面对的证据全都是“夏先生全世界最漂亮”这些证据。我甚至雇佣一个经纪人专门干这个删评论的活儿。留给我看的评论区，就是大问题版的“顺天时报”都在说夏先生全世界最漂亮。那我面对这些证据，真的相信自己就是全世界最漂亮，证据造成信念，我也是个证据主义者。有人说经纪人这么做是不是有选择地筛选证据？经纪人也有理由，夏先生看到“夏先生全世界最漂亮”这些证据，他的心情就会很好，心情好，做节目的劲头就更大，更新频率就更快，更新频率越快，平台激励更多，赚钱嘛，不寒碜。这么看来，这种“撤退版”的证据主义和实用主义还有什么分别呢？




介绍完实用主义及其批评与回应，接下来我们有请以苏珊娜·利亚德为代表的多元主义出场！（此处插入会议说明及个人微信二维码广告。）




上两部分，我们介绍过证据主义信念观和实用主义信念观，这两种都是一种强证据主义和强实用主义，他们分别认为只有认知理由（真相）能够决定我们应该相信什么，以及只有实践理由（美好）能够决定我们应该相信什么。这两者是针锋相对的。多元主义就说，哎呀，你们两派干嘛把话说的那么死？多元主义者掏出了一个搅拌棒，说来，我给你们两派调和一下，真相和美好并不是只有其中一种决定了我们应该相信什么，而是两者都能够决定我们应该相信什么。你可能觉得多元主义者就是在捣浆糊，既要又要，但这正是因为多元主义者要把两种针锋相对的派别调和起来，他们其实面临着不小的论证难度，因为他是两面不讨好的。一方面，面对强证据主义，多元主义需要说明并不是必须完全是一份证据才能有一份信念；另一方面，面对强实用主义，多元主义认为强实用主义的自我PUA有点太脱离实际，完全是自己硬骗自己，凭空硬给自己画大饼，有点难以做到，违反“应该蕴含能够原则”。




多元主义者苏珊娜·利亚德提出了两种路径来进行有事实依据的自我PUA：一种是以实践理由为主导，让认知理由提供事实证据作为手段去验证实践理由；另一种是以认知理由为主导，认知理由为实践理由提供可能性。第一种路径，实践理由主导，我凭借实践理由（什么对我有好处）相信了一个信念，但我也不能完全无凭无据地相信，我还得四处搜集事实证据来验证这个信念。例如，你相信帕斯卡的赌注，认为信仰上帝对你有好处，周末就去教堂拜拜，万一上帝保佑你考公上岸了，是不是？但单凭实践理由，也不能让你信仰坚定，你还是会将信将疑，怀疑上帝到底存在还是不存在，于是你就去搜集证据（参加教会活动，读神学书籍），发现种种证据印证了你的信仰，你就坚定了对上帝的信仰。这有点像律师的思维，委托人委托我为他辩护（实践理由），我相信他是无罪的，但我还得去查阅卷宗搜集证据。第二种路径，认知理由主导，一个信念必须先有事实证据作为支撑，我们才能选择要不要再根据实践理由去相信它。有些对我们有好处的信念太离谱，自己都骗不了自己去相信，违反“应该蕴含能够原则”。例如，我很难让自己相信自己是全世界最帅的人。在这种情况下，认知理由有一票否决权，一个信念如果过不了认知理由这一关，你就甭谈它能不能带来好处。认知理由为实践理由奠基（赋能，in power）。例如，你相信你老婆很爱你（实践理由），有利于维持家庭和谐，而你老婆表现的很亲密，每天给你做饭，陪你聊康德聊黑格尔，虽然她白天可能去隔壁老王家串门，但她没被你发现，至少她的行动迹象为你想要相信她还爱着你提供了事实证据的基础，你可以选择放宽心。但如果她表现的特别异常，疏远你，手机屏幕倒扣，不及时回复短信，接到电话走得远远的，上厕所时间很长，甚至把隔壁老王标注为100086，这时你老婆的行为迹象无法为你想要相信她还爱着你提供事实基础，认知理由无法为你的实践理由赋能。你老婆这就属于是连演都不演了。




利亚德提供了两种有事实依据的信念管理路径：实践理由为主导，认知理由提供验证手段；认知理由主导，认知理由为实践理由提供可能性，认知理由赋能了实践理由。多元主义结合了证据主义和实用主义，我们可以根据实践理由进行三观管理，但管理不是硬骗，而是既要讲求美好愿景，又要讲求事实依据的有理有据的自我PUA。




接下来我们来介绍对多元主义的批评以及回应。多元主义说，实践理由和认知理由都能决定我们应该相信什么，那要是两种理由出现了冲突，两种理由把我们往相反的两边拽，我们该听谁的？你是采取利亚德提出的第一条路径（实践理由为主导）还是第二条路径（认知理由为主导）？两种理由能不能比大小？证据主义者认为，如果冲突，实践理由没有资格上台；实用主义者认为，如果冲突，认知理由没有资格上台。多元主义既然把两位大神都请上台了，你就必须面临如果两者冲突该听谁的问题。例如，你到底要不要相信你老婆还爱着你？你老婆表现没有特别异常，她可能是在演，也可能确实没出轨，这时你老婆在厨房洗碗，这时她手机来信息了，发信人是10086，这时你到底是应当走以认知理由为主导的路径（去瞄一眼老婆的手机），还是走以实践理由为主导的路径（放宽心，问题不大）？其实问题就卡在，你对侦查伴侣是否忠诚这个认知理由的需求更高，还是你对维系家庭幸福和睦这个实践理由的需求更高？




对于两种理由怎么比大小这样一个问题，不同的多元主义学者也是议论纷纷，可以分为两派：比不了派和比得了派。比不了派（代表人物：理查德·菲尔德）说，本来就没法比，我们没法说总体上我们应该相信什么。如果证据和好处把我们往两边拽，那我们就只能说，从认知上讲应该相信事实，从实践上讲应该相信美好，但在道理上就不存在一个终极裁决，我们可以自己瞎选一个，但这就是我的任意选择而已，谈不上应该或不应该。比得了派（代表人物：安德鲁·奈斯纳）提出一个模型（门槛单独决定模型）来比较认知理由和实践理由。当认知理由和实践理由相冲突时，我们就要单独考量实践理由，但对实践理由的考量有个门槛：如果实践考虑的分量很重，超过了这个门槛，那就应当以实践理由为主导；如果实践考虑的分量没有那么重，也就是没有超过这个门槛，那就应该以认知理由为主导。拿抑郁症患者的例子来说，如果他继续相信世界不会好了就要自杀，这时实践考虑分量很重，超过门槛了，他就应该出于实践理由去相信一切还是会好起来的；而如果你是心理健康的人，只是偶尔感叹一番，实践代价没超过门槛，你就应该面对事实，正确看待处境。




这就是多元主义者对两种理由出现冲突时能否以及如何比大小的回应。




本期《大问题》节目我们探讨了信念管理的问题，也就是我们应当基于什么样的理由来决定自己应该相信什么。证据主义者认为只有认知理由能决定；实用主义者认为只有实践理由能决定；而多元主义者认为认知理由和实践理由都能决定。看完本期节目，你会做出何种选择呢？你会为了家庭和睦，对伴侣的冷淡视而不见，继续相信你们之间还有爱吗？你会为了自己的身心健康与事业发展，多关注自己的成就，从而相信自己很棒，去自信地应对一切吗？你会为了充满希望和热情的活下去，相信一切都会好起来吗？你会为了做一个乐观积极的公民，去相信公平与正义终究存在吗？今天我们主要集中谈了“应该相信什么”，其实这个问题还有另外一面，就是我们应该如何去求知，我们应该如何管理那些会影响信念的行动（读哪些书，看什么样的新闻，认识什么样的人，上不上网，如何管理自己的行为），从而给自己塑造什么样的信念？欢迎你也同哲学家们一起参与到对这个大问题的讨论之中。他们的看法发表完了，现在轮到你来发言了！请在视频下方投出你的一票，并发表你的看法！

## 更新日志

### v1.2
- 添加继续生成功能
- 优化 UI 交互体验
- 增加本地配置保存

### v1.1 
- 修复字幕获取问题
- 改进错误提示

### v1.0
- 首次发布

## 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目。

## 许可证

MIT License

## 致谢

- OpenAI API
- Bilibili API
- Tampermonkey 
