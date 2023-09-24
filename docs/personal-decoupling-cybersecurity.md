---
title: 脱钩：我的个人网络安全策略
date: '2023-09-16'
cover: https://c2.llyz.xyz/blog/2023/09/decoupling/t-0.jpg
categories:
- code
tags:
- internet
---

自 2020 年以来，经常可以从国际政经新闻中看到一个词汇 [Decoupling](https://www.wikiwand.com/en/Decoupling) ，中文翻译过来叫「脱钩」，这里所说的脱钩主要就是「[中美脱钩](https://zh.wikipedia.org/zh/%E7%BB%8F%E6%B5%8E%E8%84%B1%E9%92%A9)」，中美两个大国在经济、科技、金融、供应链等领域的逐渐升级的分离和对抗。

一方面，是过去 20 年伴随着全球化浪潮的互联网公民的出现，另一方面，是全球互联网的法治化和监管的加强，这两个趋势的交汇，也让我开始思考自己，作为一个互联网从业者，一个普通网民，应该如何应对这些变化。

今天这篇文章，我不会危言耸听贩卖焦虑，更不会鼓励大家做任何违法的事情，只是分享一下我个人在网络资讯安全方面的「脱钩」策略、方案和经验，希望能给大家一些启发和帮助。

## 一. 为什么要脱钩

我是一个程序员，由于职业的关系，对于资讯安全有着比较高的敏感度，时不时也会关注一些跟网络安全相关的新闻。

过去几年，也是由于工作的关系，做了不少与「合规」相关的工作，看了不少文档，对于「合规」也有了一定的了解。

大概从 2020 年底开始，随着《网络安全法》《个人信息保护法》以及各种相关法规的陆续实施和监管落地，某种程序上国内互联网行业的「合规」工作也进入了一个新的阶段。

* [已到凌云仍虚心——互联网平台合规监管2021年度盘点](https://www.zhonglun.com/Content/2022/01-07/1713201851.html)

不管是欧盟、美国还是中国，都在加强对于互联网行业的监管，对大公司的监管力度也在不断加强，这是一个全球性的趋势。

趁着着这波互联网法治完善的浪潮，我也稍微研究了一下相关的法律法规，尤其是看了下这些法规中，对于个人隐私、数据的强制要求。

![](https://c2.llyz.xyz/blog/2023/09/decoupling/t-1.jpg)

大家可以打开你日常使用最多的几个国内 APP，看看这些 APP 的用户协议，一般都会在APP的「隐私」栏里，在过去几年监管层的要求下，目前主流大厂的应用基本基本都强制公开了。

* 个人信息与权限
* [个人信息收集清单](https://www.google.com/search?sca_esv=565913793&sxsrf=AM9HkKkv4T6PqxAMparoKydnI9Na2N5Scg:1694866095332&q=%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E6%94%B6%E9%9B%86%E6%B8%85%E5%8D%95&spell=1&sa=X&ved=2ahUKEwjoiLecjK-BAxVqHDQIHWWJB8cQBSgAegQIDRAB&biw=1535&bih=1158&dpr=2)
* [第三方信息共享清单](https://www.google.com/search?q=%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BF%A1%E6%81%AF%E5%85%B1%E4%BA%AB%E6%B8%85%E5%8D%95&sca_esv=565913793&biw=1535&bih=1158&sxsrf=AM9HkKnNpxLFUd9Gy7Iwp3FVfknIJ4OtiA%3A1694866130416&ei=0poFZbyDGb-D0PEP6oee0AE&ved=0ahUKEwi8tJStjK-BAxW_ATQIHeqDBxoQ4dUDCBA&uact=5&oq=%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BF%A1%E6%81%AF%E5%85%B1%E4%BA%AB%E6%B8%85%E5%8D%95&gs_lp=Egxnd3Mtd2l6LXNlcnAiG-esrOS4ieaWueS_oeaBr-WFseS6q-a4heWNlTIFEAAYgARI4QVQhANYhANwAXgBkAEAmAHVAqAB1QKqAQMzLTG4AQPIAQD4AQL4AQHCAgoQABhHGNYEGLAD4gMEGAAgQYgGAZAGCg&sclient=gws-wiz-serp)

在了解完法律层的要求后，我愈发觉得国内互联网公司的「合规」工作还有很长的路要走。

2021年开始，我尝试陆续脱离了一些国内的互联网服务，比如：社交媒体、云服务、云存储、邮箱和各类账号等，经过一年多的实践下来，虽然还没完全脱离，但是已经有了一些经验和心得，这里分享给大家。

## 二.我的脱钩策略

我的脱钩策略，总结下来就是「**有限隔离**」。

> 对于生活在中国大陆的人来说，**完全脱离国内互联网服务是不现实的，也无必要**，但是可以尽量减少对国内互联网服务的依赖。

当然，这里的「脱钩」并不代表我对国内互联网服务和产品的否定，也不代表我对境外公司或者产品的盲目信任，我只是从理性和博弈的角度分析，选择一个相对来说更加安全的方案。

由于国家强而有力的监管，许多外国互联网公司难以在中国境内运营，也难以获得中国用户的个人数据并开展业务。

不用中国互联网公司的产品，而改用国外的产品服务，恰好可以避免这些数据在国内境内流通，这也是我「脱钩」的原因之一。

我依旧认为国内互联网服务和产品是非常优秀的。但是鉴于个人对于「隐私」和「安全」的偏好，我个人的网络资讯安全策略需要做一些调整。

## 三.账号

账号是互联网世界的身份证，这一部分是隔离，也是「数字移民」或者「第二数字身份」的关键。

## 手机 && 手机号码

手机是每个人都使用的设备，目前国内的大多互联网服务都是以手机为主要的入口。

国内法规要求所有的互联网服务都必须实名，目前国内通过实名制严格管控手机号码，基本上所有网站都会要求绑定手机号，手机号某种程序上就是一个人的第二身份证。

我的建议是**采用至少2套手机 + 多个手机号**方案，这是相对来说最简单的隔离方案。

* A:iPhone + 境外SIM卡 + 国外互联网服务。
* B:国产手机 + 国内SIM卡 + 国内互联网服务，

iPhone 由于其封闭的 iOS 底层系统和严格的权限管控，应用的权限管理严格，基本上不会出现胡乱读取你设备上其他信息的情况，反过来 Android 由于其开放的生态，加上各大手机厂商在系统层面的定制和不太规范和透明的权限管理，所以安全性上还是有一定的差距。

这部分就不展开了，给大家一个最近的新闻，即使在国内安全和合规做到遥遥领先的头部品牌，也会面临这种被取证的挑战:

* [效率源｜遥遥领先！华为Mate60手机快速取证现勘工具全球首发](https://www.google.com/search?q=%E6%95%88%E7%8E%87%E6%BA%90%EF%BD%9C%E9%81%A5%E9%81%A5%E9%A2%86%E5%85%88%EF%BC%81%E5%8D%8E%E4%B8%BAMate60%E6%89%8B%E6%9C%BA%E5%BF%AB%E9%80%9F%E5%8F%96%E8%AF%81%E7%8E%B0%E5%8B%98%E5%B7%A5%E5%85%B7%E5%85%A8%E7%90%83%E9%A6%96%E5%8F%91&sourceid=chrome&ie=UTF-8)

目前我使用的手机方案是：

| 手机 | 型号   | 运营商 | IP | 用途 |
| ----- | --------- | ----------- | ------- | ------- |
| iPhone | iPhone14 Pro |  澳门电信  | 澳门 | 美区 AppleID + 国外互联网服务       |
| 安卓 | 华为 Nova 6 |  深圳联通  | 境内 | 国内常用互联网服务  |
| iPhone | iPhone XS 港版 |  eSIM 香港卡  |  - | 美区 AppleID + 国外互联网服务  |

手机号码方面，我的境内外号码也在用途上做了一些区分。

| 运营商 | 属地   | IP |  用途 |
| ----- | --------- | ----------- | ----------- |
| 深圳联通 | 境内 |  广东  | 绑定国内政府、金融机构等关键服务 |
| 深圳联通 | 境内 |  广东  | 绑定普通应用与服务、快递等 |
| ClubSim | 香港 |  香港  | 绑定香地区服务 |
| 中国电信澳门 | 澳门 |  澳门  | - |
| 美国卡 | 美国 |  -  | 绑定其他境外地区服务 |

我的澳门和香港卡都是通过合法流程申请的，算半实名制的卡，但毕竟还是境外卡，还是有一定的隐私保护。

同时**为了避免不必要的麻烦，我也从未使用境外卡号注册境内服务**。

我之所以依旧使用一台安卓手机做完自己的主力机，注意还是为了便利。一些政务相关的应用反而在安卓上使用更加方便。

日常生活中许多国内应用和服务，领取优惠券什么的，一般都需要绑定国内手机号，干脆就用安卓手机，反正各种平台数据互相读取，用**有限隐私换便利**。

## 邮箱

将邮箱交给一个平台，某种意义也是一个风险挺大的事情。但对于大多数人来说，也没有其他选择。在邮箱服务的选择上，尽量遵循以下几个原则:

* **可持续性**:最好这个公司和产品能活得久一点
* **安全记录**:是否有被黑客攻破、数据泄露的记录
* **数据和隐私**:向任一政府或者机构提供数据的记录和底线

新闻参考:

* [时代的眼泪！雅虎邮箱2月28日停止中国大陆服务](https://www.sohu.com/a/525828158_120914498)
* [雅虎公司30亿个用户隐私泄露！涉及中国用户几千万](https://finance.sina.cn/chanjing/gsxw/2017-10-08/detail-ifymrcmm9189791.d.html?from=wap)
* [雅虎被曝监视用户电子邮件 提供给美国情报官员](http://news.cctv.com/2016/10/06/ARTIEvjKJns93FatVjNEoSFp161006.shtml)

过去很长的一段时间，我都使用`境内腾讯域名邮箱+境外Gmail`的组合。

目前除了 QQ 自带的数字邮箱和工作必须的企业邮箱，其他的都迁移到了境外，算是完全弃用了国内邮箱。

目前我的邮箱方案是：

| 邮箱 | 用途   |
| ----- | --------- |
| Google Workspace | 绑定个人域名，用于日常工作、个人通讯 |  
| Gmail | 绑定国外主流互联网服务 |
| CloudFlare Email Routing | 绑定匿名域名，实现任意邮箱转发，用于注册境外中小产品和服务 |

之所以使用域名邮箱，是因为即使是再大的公司，也有可能会倒闭，而域名邮箱可以随时迁移到其他服务商，不会因为某个公司倒闭而导致邮箱失效。

### Google Workspace

我在[《我的云账单:2023年》](https://luolei.org/how-much-i-spend-on-cloud-monthly-2023#%E4%B8%89-%E4%BA%91%E6%9C%8D%E5%8A%A1)中曾经介绍过我将邮箱从原来的 G Suite 迁移到了 Google Workspace，支持绑定多个域名，最多可以添加300个独立账号，每个账号都拥有独立的 Gmail ，加上终身免费，还是非常划算的。

### Cloudflare Email Routing

[CloudFlare Email Routing](https://www.cloudflare.com/zh-cn/learning/email-security/what-is-email-routing/) 是一套免费的邮件转发方案，支持`Catch-all`，可以将任意邮箱转发到任意邮箱。

```txt
# catch-all 支持将任意邮箱转发到指定邮箱，并隐藏你的真实邮箱地址
abc@luolei.org -> your-public-mail@gmail.com
edf@luolei.org -> your-public-mail@gmail.com
xyz@luolei.org -> your-public-mail@gmail.com
```

Cloudflare 的 `Workers`，支持你根据不同的域名，设置不同的转发规则，比如：

```ts
export default {
  async email(message, env, ctx) {
        // 通过 message.to 判断希望转发到哪个邮箱
        // 例如把 ssyy.1984@luoeli.org 转发到 your-secert-mail@gmail.com
        let forwardAddress = message.to.includes('.1984') ? "your-secert-mail@gmail.com" : "your-public-mail@gmail.com";
        await message.forward(forwardAddress);

  }
}
```

使用`Catch-all`方案，理论上可以实现无限多个邮箱地址，有时候我需要注册一些不太重要的境外服务，就会使用这个方案。毕竟网络安全不分国界，境外服务也存在数据泄漏、密码爆破的风险。

```txt
#例
某网站A: a.random@luolei.org 密码: 123
某论坛B: b.kitty@luolei.org 密码: 456
某应用C: c.mikami@luolei.org 密码: 789

```

即使这些网站中的某一个发生数据泄漏，也不会影响我的真实邮箱，也不容易撞库发现我的其他账号。

## 离岸金融账号

使用境外服务，尤其是涉及到金融、支付、投资、交易等服务，都需要绑定银行卡或者信用卡，这部分也是脱钩的重点。这是最难的一部分。有关这一部分，大家可以参考我过往的有关境外银行卡的文章和视频:

* [香港银行开户攻略 | 境外投资必备，如何拥有一个香港银行卡](https://luolei.org/how-to-open-a-bank-account-in-hongkong)
* [美国银行开户攻略 | Bank Of America | 视频 + 图文](https://luolei.org/open-bank-account-in-usa-b1-b2-visa)

## 四.云服务

对于云服务，我采用的是`迁移境外+下云`的双重方案。

| 服务 | Before   | After | 变化 |
| ----- | --------- | ----------- | ------- |
| 域名注册商 | Name.com |  Cloudflare  |  境外       |
| DNS 解析 | DNSpod |  Cloudflare  |  境外  |
| 博客 | 腾讯云广州 |   Vercel |    境外     |
| MySQL  | 腾讯云 MySQL     |  HomeLab  |    下云     |
| MongoDB  |  腾讯云广州     |  MongoDB Atlas  |    境外     |

## 域名

目前我有不少域名，用于博客和各种其他用途。虽然我的好几个域名都按照国内法规备案了，但我还是陆续把**域名注册**和**DNS解析**的服务商都已经迁移到了境外。

* [域名被注册商强制停止解析，域名状态 clientHold ~~怎么办？](https://www.v2ex.com/t/171208)
* [个人博客网站需要域名，是在万网上买好还是在 goDaddy 上买好？](https://www.v2ex.com/t/244348)

目前我使用域名服务商是 Cloudflare，国际主流，域名价格也不贵，提供免费的 DNS 解析服务，支持 HTTPS，非常好用。

在这里需要提醒，针对这类具有「根用途」属性的账号权限管理，一定要注意邮箱和找回方式的隔离:**不要使用国内邮箱来注册账号，也不要使用国内邮箱来找回密码**。

如果你的域名注册商是国外的，但是你使用了国内或存在安全风险的DNS解析服务商，并且将国内或域名邮箱作为找回邮箱，那么你的域名可能会受到中间人攻击。

理论上，攻击者可以通过修改你DNS中的`MX`记录来转发找回邮件到新的落地邮件服务，从而实施攻击。

## 云主机

在今年初[《我的云账单:2023年》](https://luolei.org/how-much-i-spend-on-cloud-monthly-2023#%E4%BA%8C-%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%9B%B8%E5%85%B3)的服务器相关部分 ，我还在使用国内云服务商的主机，现在我只保留了一台香港轻量服务器，但是已经将所有数据均下云或者迁移到了其他境外云主机，这台香港轻量只用于转发一些特殊的网络请求。

过去我的博客和一些应用都是部署在国内云主机上，虽然我的网站已经备案，但是还是难免会接到一些「投诉」，比如要求屏蔽某一篇文章。时不时也能接到备案中心的检查电话，虽然都是正常的检查，但是也是一种麻烦。

除此之外，由于国内互联网主机也会有一些「安全检测」，如果发现你有一些「不正常」的行为，也会被封禁，比如我之前在国内云主机上部署的一个应用，由于有一些于境外通讯的「不正常」的行为，也警告封禁了。

去年我搬新家后，我在家里已经部署了一台服务器，我已经把大多数的服务迁移到了家里的这台 HomeLab。如果外网需要访问，直接通过 DDNS 或者 Cloudflare Tunnel 暴露就可以了。

* [Cloudflare Tunnel](https://www.cloudflare.com/zh-cn/products/tunnel/)

由于硬件、数据完全都在自己手上，可以说再也不用担心账号「被封」的问题了。

当然，将数据部署在自己的服务器上，也需要注意安全，比如防火墙、安全组、密钥管理、数据备份等等。目前我是采用了多设备+多备份的方案，重要的数据在两个NAS上做了双备份，对于MySQL、Git、Docker 持久化数据等，我都做了定时备份策略。

## 云存储

由于我的博客有大量的图片资源，加上后面笔记同步的需要，我也陆续将所有需要上云的数据迁移到了境外。

| 存储源 | 类型   | 实体属地 | 存储内容 |
| ----- | --------- | ----------- | ------- |
| Cloudflare R2 | 云 |  R2   | 博客图片        |

目前我唯一使用的云存储是 Cloudflare R2，这是 Cloudflare 的一个免费的云存储服务，也可以实现图片的全球分发。

* [Cloudflare R2](https://www.cloudflare.com/developer-platform/r2/)

## 五.个人数据

同样的道理，我也将所有个人相关数据都迁移到了境外或者下云。

| 存储源 | 类型   | 实体属地 | 存储内容 |
| ----- | --------- | ----------- | ------- |
| 群晖NAS | 本地 NAS |  个人   | 照片+视频+ homelab 数据备份        |
| 绿联NAS | 本地 NAS |  中国  |  工作照片+视频+影音娱乐  |
| iCloud | 云 |     美国     | 照片+视频+文档  |
| OneDrive  | 云     |  美国  |    照片+视频+文档+应用数据备份     |
| 阿里云盘  | 云     |  中国  |    影音娱乐     |
| 百度云盘  | 云     |  中国  |    影音娱乐     |

目前我家里机柜中有两个 NAS，一个是群晖DS216,一个是[绿联DX4600](https://luolei.org/ugreen-dx4600)。

群晖是老牌境外品牌NAS，绿联是国内品牌NAS。群晖我只关闭了群晖本身的服务，只有指定文件夹的数据与 OneDrive 同步，同时是软路由的备份机，运行在软路由上的各种应用数据，会定期同步到群晖上。

由于绿联的服务在国内，所以我只备份了一些不太重要的照片和视频，比如一些工作照片和视频，以及一些影音娱乐。

至于阿里云盘和百度云盘，我则完全只用来下载影音娱乐，不会上传任何个人数据。手机应用也关闭了自动备份和相册权限。

## 照片

对于个人隐私资料，例如相册、视频、文档等，目前我采用的是`本地备份 + iCloud 外区 + OneDrive`的方案。

我的 iPhone 上有有超过2万张照片，开启了土耳其的 iCloud 2TB 套餐，与我的老婆共用。

我的安卓机目前用的是华为，关闭了华为云服务，但是开启了 OneDrive 的自动备份，这样可以保证我的照片在云端都有备份。但是我一般也不在安卓手机上拍摄和保存私密照片。

照片同步到云上后，会再通过群晖NAS的云同步，同步到我家里的 NAS 上，这样就实现了三重备份。

## 文件

其他文件，我一般都直接保存到 NAS 上，再通过穿透或 ZeroTier 或者 Tailscale 之类的方案，实现远程访问。

* [ZeroTier](https://www.zerotier.com/)
* [Tailscale](https://tailscale.com/)

这样的好处就是，云上没有我的私人数据，就也不会麻烦任何云服务商的「安全内容」之类的检测。坏处就是，家庭网络相比云服务商还是差了不少，速度受到家宽上限的限制，进行大文件传输还是比较慢的。

## 笔记

作为一个使用 [印象笔记](https://www.yinxiang.com/) 超过十年的用户，鉴于印象笔记这几年越来越劣化的用户体验（全客户端的广告），我现在也逐渐开始转向使用 [Obsidian](https://obsidian.md/) 自托管的方案。

![](https://c2.llyz.xyz/blog/2023/09/decoupling/t-2.jpg)

Obsidian 是基于 Markdown 的知识管理软件，MD文件我通过 [remotely-save](https://github.com/remotely-save/remotely-save) 同步到 OneDrive 上，这样就实现了多设备同步。

由于笔记中也存在大量的图片和附件，我使用 [Image Auto Upload Plugin](https://github.com/renmu123/obsidian-image-auto-upload-plugin) 配合本地 [PicGo](https://picgo.github.io/PicGo-Doc/zh/guide/) 上传到自己的云存储中。

* [笔记同步:remotely-save](https://github.com/remotely-save/remotely-save)
* [附件自动上传:Image Auto Upload Plugin](https://github.com/renmu123/obsidian-image-auto-upload-plugin)
* [PicGo: 一个用于快速上传图片并获取图片 URL 链接的工具](https://picgo.github.io/PicGo-Doc/zh/guide/)

## 密码与 2FA

密码和 2FA 是个人隐私和安全的最后一道防线，也是最重要的一道防线。

![](https://c2.llyz.xyz/blog/2023/09/decoupling/t-3.jpg)

我并没有使用 [1Password](https://1password.com/) 之类的成熟产品，目前我使用的密码管理工具是开源的 [Bitwarden](https://github.com/bitwarden)，同样是托管在自己的服务器上，只能通过内网或者VPN访问。

我的所有账号，都开启了 2FA 或者多因素认证，我使用的2FA app 是 [2FAS](https://2fas.com/) 和 [Authy](https://authy.com/)。

这里有一个技巧，在添加某个账号到 2FA app时，我会另外把二维码保存到加密的仓库上，以防手机丢失时，还能通过原始的二维码恢复。

* [Bitwarden](https://github.com/bitwarden)
* [2FAS](https://2fas.com/)
* [Authy](https://authy.com/)

## 总结

这篇文章主要是分享我个人的网络资讯安全策略。由于每个人的需求和偏好不同，所以这些方案并不一定适合所有人。

比如我使用的邮件方案，虽然安全性高，但是无法直接通过境内运营商的网络访问，我也需要通过公司的专线或者澳门卡的漫游来访问。

写完这篇文章，发现尽管自己已经做了不少，但是面对诸多不可抗力，依旧感觉无奈。

Anyway，希望大家都能够保护好自己的隐私和数据。