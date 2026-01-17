import { DC } from "../constants";

import { credits } from "@/core/secret-formula/credits";

export const h2p = {
  /**
   * @template
   * {
   *  @property {String} name   Internal name for the tab entry
   *  @property {String} alias  Display name for the tab; if not present, will use the internal name
   *  @property {Number} id     Unique ID for each entry (generated in-game, not explicitly stated)
   *  @property {function: @return String} info         Text body of information for the entry
   *  @property {function: @return Boolean} isUnlocked  Condition for when the entry is visible and searchable
   *  @property {Array: String} tags  List of keywords which are linked to this tab in the search function
   *  @property {String} tab    Key of a tab+subtab combination which will default the h2p to this entry if opened
   * }
   */
  tabs: [
    {
      name: "本弹窗",
      info: () => `
欢迎阅读游戏指南！
<br>
<br>
本弹窗包含您在游戏进程中遇到的所有内容的深入解释和详细信息。随着您解锁新功能和机制，
您将获得更多页面的访问权限。如果您对游戏中的某些机制感到困惑，可以在此处找到相关的解释。
<br>
<br>
目前，打开游戏指南将始终从本页开始。当您获得第一个维度提升后，打开本模态框将根据您当前
可见的标签页和子标签页，定位到最相关的游戏指南条目（如果存在）。
`,
      isUnlocked: () => true,
      tags: ["h2p", "how", "to", "play", "modal"],
      tab: ""
    },
    {
      name: "你的存档",
      info: () => `
你的游戏存档数据存储在你电脑的浏览器数据中（如果你在浏览器上游玩），或存储在你的 Steam 安装文件夹中（如果你在 Steam 上游玩）。这意味着清除浏览器的缓存或 cookie，或从 Steam 完全卸载游戏也会删除你的存档文件。
同样，如果你在隐私或隐身窗口中游玩，下次打开浏览器时存档将不存在。存档也是特定于浏览器的，例如，如果你在 Chrome 上游玩，你将无法在 Firefox 上找到你的存档。最后，你在网页版和 Steam 版本上的任何存档也将完全相互独立。
<br>
<br>
你可以使用导出功能在不同地方之间转移存档，这会将一串<i>非常</i>长的看似随机的字符复制到你的剪贴板。该文本包含你的存档数据，你可以通过将其粘贴到导入提示框的文本框中来将其加载回游戏。你需要完整的存档文本才能正常导入，否则游戏可能无法识别该文本为有效存档。如果你使用某些消息应用程序在设备之间传输存档，它们可能会截断部分文本。
<br>
<br>
来自现实更新的格式正确的存档字符串将以
<b>${GameSaveSerializer.startingString.savefile}</b> 开头，并以 <b>${GameSaveSerializer.endingString.savefile}</b> 结尾。
如果你是从现实发布之前的游戏版本导入，它将以 <b>eyJ</b> 开头，并以 <b>In19</b>、<b>fX0=</b> 或 <b>fQ==</b> 结尾。如果这两种情况都不是，那么你的存档部分丢失，导入将失败。除了导入和导出到剪贴板外，你还可以从文本文件导入和导出。
<br>
你可以使用“选择存档”按钮在浏览器的三个独立存档之间进行选择。这些存档在大多数情况下是完全相互独立的。导入和导出只会影响当前存档槽位。<b>唯一的例外是清除浏览器或 Steam 数据，在这种情况下，所有三个存档都将被重置。</b>
<br>
<br>
游戏会定期自动保存，默认每 ${formatInt(30)} 秒一次。
如果你需要关闭游戏，请记住这一点 - 除非你等待自动保存间隔或再次手动保存，否则你在关闭之前所做的任何操作可能都不会被保存。
自动保存间隔的长度是可调整的，其计时器可以在屏幕左下角看到。
<br>
<br>
你的存档备份也会在在线或离线一定时间后保存，你可以随时通过点击“打开自动存档备份菜单”按钮来查看和重新加载。如果你希望将存档恢复到过去某个时间点的状态，例如几分钟前或上次离线一段时间时，这些备份可能会很有用。
<br>
<br>
你还可以将 Google 帐户连接到游戏，以便在线保存你的进度。这允许你在登录同一帐户的任何设备上使用相同的存档进行游玩。云存档仅与网页版或 Steam 版游戏的其他存档兼容；Android 应用的存档不会通过云存档自动链接。从云端保存和加载将
自动覆盖另一个存档，除非另一个存档更旧或进度明显更多，在这种情况下，会出现一个模态框询问你要保留哪个存档。
<br>
<br>
如果需要，你可以随时点击按钮完全重置你的存档，这会弹出一个提示，你需要填写该提示以确保你是故意要重置。进行此重置只会清除你的当前存档；其他存档槽位将不受影响。<b>以这种方式重置游戏是完全不可逆的，并且不会给你带来任何永久性好处，无论是秘密的还是其他的。</b>
`,
      isUnlocked: () => true,
      tags: ["choose", "cloud", "google", "save", "import", "export", "reset"],
      tab: "options/saving"
    },
    {
      name: "自定义",
      info: () => `
游戏有两种不同的 UI 布局 - 经典 UI 保留了现实更新前反物质维度的风格，而现代 UI 是基于更现代的深色主题风格的重新设计。此外，还有各种主题可用于修改游戏中所有内容的外观。通过导入某些短语可以解锁一些秘密主题。两种 UI 布局都支持所有不同的可能主题。
<br>
<br>
游戏中用于显示数字的符号默认为混合科学计数法，但可以在下拉菜单中更改为众多选项之一。其中许多符号旨在作为玩笑，在某些情况下会将数字格式化为导致文本溢出到屏幕其他部分的方式 - 这不是错误。你还可以使用“指数符号选项”菜单配置极大数字的显示方式，尽管这可能会导致某些地方出现奇怪的文本显示。
<br>
<br>
游戏中的许多事件会触发全屏动画或弹出模态框，要求你确认是否要继续。大多数这些动画和确认可以通过选项单独禁用，尽管禁用任何给定动画或确认的功能只有在它们至少出现一次后才会出现。
`,
      isUnlocked: () => true,
      tags: ["UI", "update", "news", "theme", "notation", "comma", "exponent", "animation", "retry", "confirmation",
        "offline", "hotkey", "classic", "modern"],
      tab: "options/visual"
    },
    {
      name: "离线进度",
      info: () => `
反物质维度拥有追赶机制，尝试在游戏关闭较长时间后模拟游戏行为。模拟行为只是在一定程度上准确，因为游戏在数学上太复杂，无法在合理的时间内以完全准确的方式运行。在模拟结束时，游戏将总结在你离开期间各种相关资源的变化。
<br>
<br>
如果游戏保持打开状态但失去焦点或长时间挂起，它会在你返回时尝试将错过的时间作为离线进度应用。这可能不可靠，因为不同的设备处理这些情况的方式不同。如果这导致不良行为，可以在选项中关闭此功能 - 在这种情况下，游戏将尝试在一个 Tick 内应用所有错过的时间。
<br>
<br>
游戏运行在一个每 Tick 更新一次的系统上 - 所有维度和资源进行一个单位的生产，所有自动购买器触发一次，所有倍率和数值相应更改，所有显示的数字都会更新。默认情况下，游戏运行时每秒有 ${formatInt(20)} 个 Tick，但这可以通过游戏选项中的“更新速率”进行修改。
你当前的设置将使游戏平均每秒运行 ${format(1000 / player.options.updateRate, 2, 1)} 个 Tick，尽管延迟和内部 JavaScript 行为可能会导致单个 Tick 变化几个百分点。
<br>
<br>
当离线模拟激活时，这些 Tick 的长度会调整以填充你离开的时间量 - 例如，设置为 ${formatInt(1000)} 个离线 Tick 并关闭游戏一小时将导致每个 Tick 长 ${format(3.6, 1, 1)} 秒。对于游戏中的大多数事物，这不是问题，因为这仍将在模拟完成后产生大致相同数量的资源。一个显著的例外是自动购买器 - 在这种情况下，自动购买器实际上每 ${format(3.6, 1, 1)} 秒才会触发一次，这可能会对游戏的某些部分产生重大影响。
<br>
<br>
${player.blackHole[0].unlocked
    ? `<b>离线黑洞行为：</b>一旦解锁黑洞，离线进度模拟将尝试以一种每个 Tick 包含大致相同<i>游戏</i>时间的方式运行游戏。这可能会让人觉得在模拟时黑洞处于活动状态的时间比例比正常情况大得多，而实际上游戏是在活动期间运行得更慢，并“跳过”非活动期间，因为它们在每单位实际时间内贡献的产量要少得多。与具有恒定实际时间的 Tick 相比，这会导致通常对你有利的行为。
      <br>
      <br>`
    : ""
}
离线 Tick 数量可以在 ${formatInt(500)} 和 ${formatInt(DC.E6)} 个 Tick 之间调整。较小的数量将导致更快但不那么准确的模拟，而较大的数量将导致更准确的模拟，但完成时间更长。每个游戏 Tick 有一天的限制，这意味着在某些罕见情况下（例如超过一年不玩游戏），你可能无法获得你离开的所有时间。
<br>
<br>
如果需要，可以完全禁用离线进度，例如出于诊断或计时目的，或者为了进行“仅在线”通关。否则，离线进度从游戏一开始就默认开启。请注意，如果禁用离线进度，游戏关闭时的总游玩时间统计也将暂停。
`,
      isUnlocked: () => true,
      tags: ["offline", "away", "progress"],
      tab: "options/gameplay"
    }, {
      name: "效果叠加",
      info: () => `
反物质维度中的大多数效果和升级主要分为三类：
<br>
- <b>加法：</b>这些效果通常用 +（或单词“增加”）后跟一个数字表示，并将其值加到某个基础量上。多个加法效果相加。这些有时也会表现为减少资源成本的减法效果。
<br>
- <b>乘法：</b>这些效果由 ×（或单词“乘以”）后跟一个数字表示，或者更罕见地由 ➜ 分隔的两个数字表示。不同的乘法来源总是通过相乘结合，从不相加。在某些情况下，可能会有作为除法应用在此类别的负面效果或成本降低。
<br>
- <b>指数</b>：这些效果要罕见得多，显示为 ^ 后跟一个数字。多个指数效果按顺序应用，或者等效地将指数效果的值相乘并将最终值作为单个指数应用。在极少数情况下，负面效果可能会在此类别中作为小于 ${formatInt(1)} 的指数应用。
<br>
<br>
除非在升级或奖励<i>替换</i>旧值时另有说明，否则所有这些效果都会相互叠加。在升级将旧值替换为新值的情况下，替换发生在应用上述任何效果之前。要确定一组效果的最终值，每个类别的效果分别组合，然后按加法、乘法、指数效果的顺序应用。
<br>
<br>
${PlayerProgress.realityUnlocked() || PlayerProgress.dilationUnlocked()
    ? "膨胀和任何类似膨胀的效果在所有这些其他效果叠加<i>后</i>应用。"
    : ""}
<br>
<br>
${PlayerProgress.realityUnlocked()
    ? `符文效果实际上有两个叠加属性；它们内部相互叠加的方式以及它们与所有其他游戏效果叠加的方式。这些可能不一定相同 - 例如，“反物质维度指数”效果将<i>与其自身加法叠加</i>，然后总效果将加到基础值 ${formatInt(1)} 上，然后作为<i>指数效果</i>应用于反物质维度。`
    : ""}
`,
      isUnlocked: () => true,
      tags: ["effect", "stack", "combine", "add", "reduce", "multiply", "divide", "power", "dilation", "glyph"],
      tab: "options/gameplay"
    }, {
      name: "常用缩写",
      info: () => `
为了节省空间，游戏中的许多资源可能会以缩写格式显示为文本。当你首次遇到新资源时，此游戏指南条目将自行更新以包含新资源的条目。
<br>
- <b>AM</b>: 反物质 (Antimatter)<br>
- <b>AD</b>: 反物质维度 (Antimatter Dimension)<br>
- <b>AG</b>: 反物质星系 (Antimatter Galaxy)<br>
${PlayerProgress.infinityUnlocked() ? "- <b>IP</b>: 无限点数 (Infinity Point)<br>" : ""}
${PlayerProgress.infinityUnlocked() ? "- <b>NC</b>: 普通挑战 (Normal Challenge)<br>" : ""}
${PlayerProgress.infinityUnlocked() ? "- <b>IC</b>: 无限挑战 (Infinity Challenge)<br>" : ""}
${InfinityDimension(1).isUnlocked || PlayerProgress.eternityUnlocked() ? "- <b>ID</b>: 无限维度 (Infinity Dimension)<br>" : ""}
${PlayerProgress.replicantiUnlocked() ? "- <b>RG</b>: 复制器星系 (Replicanti Galaxy)<br>" : ""}
${PlayerProgress.eternityUnlocked() ? "- <b>EP</b>: 永恒点数 (Eternity Point)<br>" : ""}
${PlayerProgress.eternityUnlocked() ? "- <b>TT</b>: 时间定理 (Time Theorem)<br>" : ""}
${PlayerProgress.eternityUnlocked() ? "- <b>TD</b>: 时间维度 (Time Dimension)<br>" : ""}
${PlayerProgress.eternityUnlocked() ? "- <b>EC</b>: 永恒挑战 (Eternity Challenge)<br>" : ""}
${PlayerProgress.dilationUnlocked() ? "- <b>TP</b>: 超光速粒子 (Tachyon Particle)<br>" : ""}
${PlayerProgress.dilationUnlocked() ? "- <b>DT</b>: 膨胀时间 (Dilated Time)<br>" : ""}
${PlayerProgress.dilationUnlocked() ? "- <b>TG</b>: 超光速星系 (Tachyon Galaxy)<br>" : ""}
${PlayerProgress.realityUnlocked() ? "- <b>RM</b>: 现实机器 (Reality Machine)<br>" : ""}
${PlayerProgress.realityUnlocked() ? "- <b>AP</b>: 自动机点数 (Automator Point)<br>" : ""}
${PlayerProgress.realityUnlocked() ? "- <b>BH</b>: 黑洞 (Black Hole)<br>" : ""}
${MachineHandler.isIMUnlocked ? "- <b>iM</b>: 虚数机器 (Imaginary Machine)<br>" : ""}
${Laitela.isUnlocked ? "- <b>DM</b>: 暗物质 (Dark Matter)<br>" : ""}
${Laitela.isUnlocked ? "- <b>DE</b>: 暗能量 (Dark Energy)<br>" : ""}
`,
      isUnlocked: () => true,
      tags: ["abbreviation", "shorten", "am", "ad", "ag", "ip", "nc", "ic", "id", "rg", "ep", "tt", "td", "ec", "tp",
        "dt", "tg", "rm", "ap", "bh", "im", "dm", "de"],
      tab: ""
    }, {
      name: "反物质维度",
      info: () => `
反物质是贯穿整个游戏的一种资源，用于在进程中购买各种物品。
当你首次打开游戏时，你以 ${formatInt(10)} 反物质开始，
你可以花费它来购买第一反物质维度以开始游戏。
<br>
<br>
反物质维度是你在游戏中的生产单位。第一反物质维度生产你的反物质。
每一个后续的反物质维度生产前一个维度，使你能够拥有稳定的增长。
总共有八个反物质维度。
<br>
<br>
<b>维度倍率：</b> 在维度旁边有一个倍率（例如：第一维度 ${formatX(1, 1, 1)}）。
每个维度的基础产量乘以这个数字。
每购买 ${formatInt(10)} 个该维度，此倍率增加 ${formatX(2)}。
每次发生这种情况时，该维度的价格都会增加。
<br>
<br>
<b>累积维度数量：</b> 下一列是你拥有的该维度的当前数量。
这是你用反物质购买的数量，
以及由更高维度生产的数量的组合。
<br>
<br>
<b>购买维度数量：</b> 在每个拥有的累积维度数量旁边，
括号中显示了为下一个倍率升级而购买的该维度的数量。
例如，如果你的累积维度数量旁边有 (${formatInt(4)})，
你需要再购买 ${formatInt(6)} 个该维度才能获得下一个倍率提升。
<br>
<br>
<b>维度增长百分比：</b> 这个数字代表每个维度每秒经历的增长量。
${formatPercents(1)} 意味着维度每秒翻倍。
这让你能够判断整体增长情况。
<br>
<br>
<b>成本 & 直到 ${formatInt(10)}：</b>
当成本按钮高亮显示时，你可以用反物质购买单个数量的每个维度。
或者，如果“直到 ${formatInt(10)}”按钮高亮显示，
你可以购买达到该维度下一个维度倍率所需的任何数量。
<br>
<br>
<b>全部最大：</b> “全部最大”将购买直到 ${formatInt(10)} 的第一反物质维度直到无法购买为止，
然后是第二，以此类推直到第八反物质维度，然后购买最大数量的 Tick 速度升级。
<br>
<br>
<b>维度基础价格：</b> ${Array.range(1, 8)
    .map(tier => format(AntimatterDimension(tier)._baseCost, 2, 2))
    .join(", ")}
<br>
<b>每购买 ${formatInt(10)} 个维度的价格增长基数：</b> ${Array.range(1, 8)
  .map(tier => format(AntimatterDimension(tier)._baseCostMultiplier, 2, 2))
  .join(", ")}
<br>
<br>
<b>快捷键：1, 2, 3, 4, 5, 6, 7, 8</b> 用于购买直到 ${formatInt(10)} 的第 X 维度
（购买维度时按住 Shift 键将只购买 ${formatInt(1)} 个而不是 ${formatInt(10)} 个），
<b>M</b> 用于全部最大
`,
      isUnlocked: () => true,
      tags: ["dims", "normal", "antimatter", "ad"],
      tab: "dimensions/antimatter"
    }, {
      name: "Tick 速度",
      info: () => `
游戏中的生产发生在每个“Tick”上，最初每秒发生一次。通过购买 Tick 速度升级，
你可以使你的反物质维度生产得更快，就像每秒发生了多个 Tick 一样。
<br>
<br>
<b>Tick 速度：</b> 这说明了每秒发生多少个游戏 Tick。小数 Tick 也会被计算在内，
就像部分游戏 Tick 已经过去一样提升生产。请注意，实际的 Tick 速度时间是模拟的，
游戏总是以你在选项标签页中选择的更新速率运行计算。
<br>
<br>
<b>成本：</b> 用于将 Tick/秒乘以显示倍率的反物质成本。
（没有任何星系时，这是每次购买 ${formatX(1.1245, 0, 3)}）
<br>
<br>
<b>购买最大：</b> 这将用你当前的反物质购买最大数量的 Tick 速度升级。
<br>
<br>
<b>快捷键：T</b> 将购买尽可能多的 Tick 速度升级，或 <b>Shift+T</b> 购买单个升级。
<b>M</b> 用于全部最大。
`,
      isUnlocked: () => Tickspeed.isUnlocked,
      tags: ["dimension", "earlygame", "time"],
      tab: "dimensions/antimatter"
    }, {
      name: "维度提升",
      info: () => `
<b>维度提升：</b> 这会重置你的反物质和所有的反物质维度，但会为你解锁另一个
反物质维度以供购买，并提升你的维度倍率。
第一维度提升需要 ${formatInt(20)} 个第四维度，第二次需要 ${formatInt(20)} 个第五维度，以此类推。
解锁所有 ${formatInt(8)} 个维度后，
每一个额外的提升将比前一个提升多花费 ${formatInt(15)} 个第八维度，并且不再
解锁维度，但会继续增加你的维度倍率。
<br>
<br>
每一个维度提升都会使第一维度获得 ${formatX(2)} 倍率。每一个更高的
维度获得的倍率应用次数比前一个少一次，最低为 ${formatInt(0)}。
例如，有 ${formatInt(3)} 个提升时，第一维度获得 ${formatX(8)}，第二维度获得 ${formatX(4)}，
第三维度获得 ${formatX(2)}，其他维度不受影响。
<br>
<br>
<b>快捷键：D</b> 将尝试购买维度提升。
`,
      isUnlocked: () => true,
      tags: ["dimboost", "reset", "earlygame"],
      tab: "dimensions/antimatter"
    }, {
      name: "反物质星系",
      info: () => `
购买一个反物质星系将把你的游戏重置为只有 ${formatInt(4)} 个维度可用，
但会使你的前两个星系的 Tick 速度升级效果增加 +${format(0.02, 0, 2)}。
随着你获得更多星系，倍率将继续变得越来越强。
<br>
<br>
虽然对于前几次 Tick 速度购买来说影响很小，
但这种增加是乘法的，不需要很长时间就能看出来。
<br>
<br>
你的第一个反物质星系需要 ${formatInt(80)} 个第八维度，每一个额外的星系将多花费
${formatInt(60)} 个。
<br>
<b>遥远星系缩放：</b> 超过 ${formatInt(100)} 个反物质星系后，星系之间的成本增加将
每星系增加 ${formatInt(2)}，使下一个星系多花费 ${formatInt(62)}，然后多花费 ${formatInt(64)}，
以此类推。
<br>
<b>远程星系缩放：</b> 超过 ${formatInt(Galaxy.remoteStart)} 个反物质星系后，<i>总</i>成本
在遥远缩放的基础上，每星系增加 ${formatPercents(0.002, 1)}。
<br>
<br>
<b>快捷键：G</b> 将尝试购买一个反物质星系。
`,
      isUnlocked: () => true,
      tags: ["8th", "reset", "galaxy", "earlygame"],
      tab: "dimensions/antimatter"
    }, {
      name: "维度献祭",
      info: () => `
<b>你在第五次维度提升后解锁维度献祭。</b>
<br>
<br>
献祭将立即重置所有非第八维度的拥有数量为零，而不降低
倍率或当前成本。作为回报，它将把第八维度倍率乘以显示的值。
恢复到之前的产量需要时间，但你最终会获得净增长。
<br>
<br>
维度献祭倍率随你在献祭时拥有的第一维度数量而变化，
并且可以通过完成某些成就和挑战来改善缩放。倍率在献祭之间保留，
这意味着在 ${formatX(10)} 时献祭一次，然后在 ${formatX(4)} 时献祭一次，与先
${formatX(8)} 然后 ${formatX(5)} 是一样的；在这两种情况下，你最终的总献祭倍率都是 ${formatX(40)}。
<br>
<br>
<b>快捷键：S</b> 将尝试献祭。
`,
      isUnlocked: () => Sacrifice.isVisible,
      tags: ["8th", "reset", "earlygame", "gods", "earlygame"],
      tab: "dimensions/antimatter"
    }, {
      name: "成就",
      info: () => `
每个成就都有解锁要求。解锁后，部分成就会给予奖励。
要求和奖励的难度与收益差异很大。
<br>
<br>
除了个别成就的具体奖励外，你还将获得 ${formatX(1.03, 2, 2)} 的
所有反物质维度倍率。每完成一整行还会额外获得 ${formatX(1.25, 2, 2)}。所有成就的总倍率
效果显示在所有成就图像上方。
<br>
<br>
秘密成就没有任何游戏收益或优势，仅仅是为了好玩。悬停在秘密
成就上会给出如何获得它们的提示。
`,
      isUnlocked: () => true,
      tags: ["earlygame", "awards", "earlygame"],
      tab: "achievements"
    }, {
      name: "无限",
      info: () => `
一旦你拥有太多反物质以至于世界无法承受（${formatInt(2)}<sup>${formatInt(1024)}</sup>
或约 ${formatPostBreak(Number.MAX_VALUE, 6)}，
有时称为“无限”），你将被迫进行一次“大坍缩”。这将重置你的反物质、反物质
维度、维度提升和反物质星系。进行大坍缩有时也被称为
“无限”。
<br>
<br>
你最终将能够超过 ${formatPostBreak(Number.MAX_VALUE, 6)}，但在此之前任何更大的数字将
显示为 ${format(Infinity)}。
<br>
<br>
每次完成无限将给予一个无限点数，可以在新的无限标签页中用于升级。
你必须从上到下购买这些升级。你还将获得一次“无限次数”，这实际上是
你已经坍缩的次数。
<br>
<br>
“所有来源的无限点数乘以 ${formatInt(2)}”升级可以多次购买，
但每次购买需要 ${formatInt(10)} 倍的 IP。
你必须完成成就“不需要DLC”才能开始购买此特定升级。
<br>
<br>
<b>快捷键：C</b> 将尝试进行大坍缩。
`,
      isUnlocked: () => PlayerProgress.infinityUnlocked(),
      tags: ["crunch", "big", "upgrades", "ip", "reset", "prestige", "earlygame"],
      tab: "infinity/upgrades"
    }, {
      name: "普通挑战",
      info: () => `
普通挑战在你第一次无限后解锁；它们以不同的方式改变游戏机制，创造更
困难的无限环境。要完成挑战，你必须再次达到 ${formatPostBreak(Number.MAX_VALUE, 2)}
反物质。
<br>
<br>
每个完成的普通挑战将奖励一个自动购买器或升级现有自动购买器的能力。
你可以多次运行它们（尽管只有第一次给予奖励），
并且可以通过“退出挑战”按钮随时退出。
<br>
<br>
你的第一次无限被认为是第一个普通挑战，因此当你
解锁挑战时已经完成了。
<br>
<br>
无限升级的最右一列在挑战中不起作用。
`,
      isUnlocked: () => PlayerProgress.infinityUnlocked(),
      tags: ["infinity", "autobuyer", "earlygame"],
      tab: "challenges/normal"
    }, {
      name: "自动购买器",
      info: () => `
自动购买器允许你自动购买维度、升级或声望。所有自动购买器
控件都位于“自动化”标签页的“自动购买器”子标签页下，包括稍后在游戏中解锁的任何额外自动购买器。
<br>
<br>
反物质维度自动购买器和 Tick 速度升级自动购买器可以基于你的总反物质解锁，
但大多数其他自动购买器需要购买升级或通过挑战才能解锁。
<br>
<br>
大多数自动购买器具有类似的属性：
<br>
<br>
<b>自动购买器间隔：</b> 自动购买器尝试进行另一次购买之前的冷却时间。
反物质维度自动购买器和 Tick 速度升级自动购买器需要完成各自的挑战
才能升级其间隔。
<br>
<br>
<b>反物质维度自动购买器批量购买：</b> 一旦自动购买器的间隔达到其最小值
（${formatInt(100)} 毫秒），所有未来的升级将使自动购买器每 Tick 可购买的最大数量翻倍。
这可以被禁用。
<br>
<br>
<b>反物质维度自动购买器购买数量：</b> 维度自动购买器可以设置为购买单个维度，
或直到 ${formatInt(10)}。当自动购买器设置为单个时，批量购买被禁用。
<br>
<br>
<b>Tick 速度自动购买器购买数量：</b> Tick 速度自动购买器可以设置为每次激活购买单个升级，
或者在通过 Tick 速度挑战 (C9) 后购买最大可能数量。
<br>
<br>
<b>自动维度提升自定义：</b> 使用维度提升自动购买器，你可以设置它尝试购买的最大
提升数量，在总是自动购买维度提升之前的最小反物质星系数量，以及（解锁后）批量购买确切数量的维度提升的能力。
如果你达到指定的星系阈值，自动购买器将忽略你的最大提升限制。
<br>
<br>
<b>最大星系：</b> 星系自动购买器将购买的最高星系数量。
<br>
<br>
<b>大坍缩 IP：</b> 一旦你打破无限，你可以设置在坍缩之前你想等待多少 IP。
<br>
<br>
<b>献祭自动购买器：</b> 此自动购买器以最大间隔开始，可能每 Tick 触发一次。
<br>
<br>
<b>动态数量：</b> 升级后的声望自动购买器具有一种模式，当超过指定阈值时
触发声望。开启“动态数量”将允许此阈值在解锁
某些对此值应用倍率的升级或成就时自动增加。
<br>
<br>
<b>暂停/恢复自动购买器：</b> 此按钮将暂停或恢复已开启的自动购买器。
它不会更改单个自动购买器设置。把它想象成一个总开关。
<br>
<br>
<b>启用/禁用所有自动购买器：</b> 此按钮将单独打开或关闭你的所有自动购买器。
<br>
<br>
<b>快捷键：A</b> （用于暂停/恢复自动购买器）。
此外，当按下与升级、维度或声望关联的快捷键时按住 <b>Alt</b> 将
切换关联的自动购买器。
`,
      isUnlocked: () => true,
      tags: ["infinity", "automation", "challenges", "rewards", "interval", "earlygame"],
      tab: "automation/autobuyers"
    }, {
      name: "打破无限",
      info: () => `
一旦你打破无限，你不再受限于 ${formatPostBreak(Number.MAX_VALUE, 2)} 反物质，并且可以开始
每次坍缩获得超过 ${formatInt(1)} IP，具体取决于你坍缩时多出的反物质数量。
<br>
<br>
现在，在 ${formatPostBreak(Number.MAX_VALUE, 2)} 反物质时坍缩可获得约 ${format(1.78, 2, 2)} IP。
你拥有的反物质每增加 ${formatPostBreak(Number.MAX_VALUE, 2)} 倍（连续地），坍缩获得的 IP 乘以 ${formatInt(10)}。
这会在应用所有倍率<i>之后</i>向下取整到最近的整数。
<br>
<br>
所有维度的反物质成本在超过 ${formatPostBreak(Number.MAX_VALUE, 2)} 后开始更快增加。
在 ${formatPostBreak(Number.MAX_VALUE, 2)} 之上，升级<i>之间</i>的成本将<i>每次升级</i>
增加 ${formatX(10)}，类似的缩放也发生在 Tick 速度升级成本上。
`,
      isUnlocked: () => Autobuyer.bigCrunch.hasMaxedInterval || PlayerProgress.eternityUnlocked(),
      tags: ["limit", "crunch", "upgrades", "midgame"],
      tab: "infinity/break"
    }, {
      name: "无限维度",
      info: () => `
<b>解锁无限维度：</b> 无限维度通过达到一定数量的反物质解锁。
<br>
<br>
<b>无限维度购买：</b> 无限维度只能以 ${formatInt(10)} 为一组购买，并花费
无限点数。它们每次购买给予永久倍率，类似于其他维度。实际应用的倍率
取决于你购买的无限维度。
<br>
<br>
<b>无限维度生产：</b> 就像反物质维度一样，每个无限维度生产
下一个更低的无限维度。
<br>
<br>
每次坍缩，你生产的无限维度重置为你购买的数量。虽然无限维度的生产
不跨越坍缩，但你从购买它们获得的倍率会保留。
<br>
<br>
<b>无限维度解锁阈值（反物质）：</b> ${Array.range(1, 8)
    .map(tier => formatPostBreak(InfinityDimension(tier)._unlockRequirement))
    .join(", ")}
<br>
<b>无限维度购买倍率：</b> ${Array.range(1, 8)
    .map(tier => format(InfinityDimension(tier)._powerMultiplier))
    .join(", ")}
<br>
<b>无限维度基础价格（IP）：</b> ${Array.range(1, 8)
    .map(tier => format(InfinityDimension(tier)._baseCost))
    .join(", ")}
<br>
<b>无限维度价格增长：</b> ${Array.range(1, 8)
    .map(tier => format(InfinityDimension(tier)._costMultiplier))
    .join(", ")}
<br>
<br>
第一无限维度不生产反物质，而是生产无限能量，它给予一个应用于
所有反物质维度的倍率，等于 (能量<sup>${formatInt(7)}</sup>)。无限维度不
受 Tick 速度升级影响。
`,
      isUnlocked: () => Autobuyer.bigCrunch.hasMaxedInterval || PlayerProgress.eternityUnlocked(),
      tags: ["id", "power", "new", "dims", "unlock", "break", "midgame"],
      tab: "dimensions/infinity"
    }, {
      name: "无限挑战",
      // This one could use some work!
      info: () => `
无限挑战类似于普通挑战，但它们有更高的最终目标，通常更难。
它们不仅仅解锁自动购买器，还以更独特的方式提升你的各种生产形式。与
普通挑战类似，无限升级的最右一列在无限挑战中被禁用。
<br>
<br>
与一次性全部解锁的普通挑战不同，无限挑战要求你达到一定
数量的反物质才能尝试它们。
<br>
<br>
<b>无限挑战解锁阈值：</b> ${GameDatabase.challenges.infinity
    .map(ic => formatPostBreak(ic.unlockAM)).join(", ")}
`,
      isUnlocked: () => Autobuyer.bigCrunch.hasMaxedInterval || PlayerProgress.eternityUnlocked(),
      tags: ["rewards", "break", "ic", "midgame"],
      tab: "challenges/infinity"
    }, {
      name: "复制器",
      info: () => `
复制器是你在 ${format(DC.E140)} IP 解锁的另一种资源。
复制器不是生产其他东西，而是实际上生产<i>自身</i>，直到最大值
${formatPostBreak(Number.MAX_VALUE, 2)}。复制器以自己的速度生产，不受 Tick 速度升级影响。
每个单独的复制器有一定几率（初始 ${formatPercents(0.01)}）在每个复制器 Tick（初始每秒）生产另一个复制器，
这两个都可以通过花费 IP 升级。
<br>
<br>
如果你购买了复制器星系升级，那么你可以通过将复制器数量重置为 ${formatInt(1)}
来获得一个“免费”的复制器星系。这个星系是免费的，因为它的作用就像反物质星系一样，
但它不会使你的下一个反物质星系更昂贵。但是，它仍然会重置
与反物质星系相同的东西。
<br>
<br>
<b>快捷键：R</b> 将尝试购买一个复制器星系。
<br>
复制器给予所有无限维度一个倍率，在 ${formatPostBreak(Number.MAX_VALUE, 2)} 复制器时达到最大值
${formatX(Math.pow(2, 20), 2, 2)}。
<br>
<br>
<b>几率升级成本：</b> 基础 ${format(DC.E150)} IP，成本增量 ${formatX(DC.E15)} IP
<br>
<b>间隔升级成本：</b> 基础 ${format(DC.E140)} IP，成本增量 ${formatX(DC.E10)} IP
<br>
<b>星系升级成本：</b> 基础 ${format(DC.E170)} IP，成本增量 ${formatX(DC.E25)} IP 且每次升级额外
${formatX(1e5)} IP，类似于遥远反物质星系缩放。超过 ${formatInt(100)} 个复制器
星系，此每次升级 ${formatX(1e5)} 变为 ${formatX(DC.E55)}。超过 ${formatInt(1000)}，缩放从
二次方切换为三次方，${formatX(DC.E55)} 倍率本身每次升级增加 ${formatX(DC.E5)}。
`,
      isUnlocked: () => Replicanti.areUnlocked || PlayerProgress.eternityUnlocked(),
      tags: ["interval", "chance", "infinity", "galaxy", "galaxies", "midgame"],
      tab: "infinity/replicanti"
    }, {
      name: "永恒",
      info: () => `
达到 ${formatPostBreak(Number.MAX_VALUE, 2)} IP 后，你可以进行永恒。永恒将重置在此之前的
所有内容，除了挑战时间、成就和统计标签页的一般部分下的任何内容。
第一次永恒后，你将能够访问更多内容。
<br>
<br>
你可以超过 ${formatPostBreak(Number.MAX_VALUE, 2)} IP 而不会被强制执行任何操作，这与你第一次
达到 ${formatPostBreak(Number.MAX_VALUE, 2)} 反物质不同。你在永恒之前拥有的无限点数越多，
你将获得的永恒点数就越多。完成一次永恒你还将获得一次“永恒次数”。
<br>
<br>
永恒点数获取的缩放类似于无限点数获取，但基于无限点数而不是反物质。
在 ${formatPostBreak(Number.MAX_VALUE, 2)} IP 获得的基础 EP 量为 ~${format(1.62, 2, 2)} EP，
你拥有的 IP 每增加 ${formatPostBreak(Number.MAX_VALUE, 2)} 倍，EP 乘以 ${formatInt(5)}。
这总是向下取整，这意味着你在 ${formatPostBreak(Number.MAX_VALUE, 2)} IP 时获得 ${formatInt(1)} EP，
但在 ${formatPostBreak(DC.E349)} 之前不会达到 ${formatInt(2)} EP。
<br>
<br>
<b>快捷键：E</b> 将尝试进行永恒重置。
`,
      isUnlocked: () => PlayerProgress.eternityUnlocked(),
      tags: ["eternal", "ep", "reset", "prestige", "midgame"],
      tab: "eternity/upgrades"
    }, {
      name: "永恒里程碑",
      info: () => `
为了让永恒更快更方便，随着你获得更多“永恒次数”，你将解锁各种增益。这些
增益通常会让你以某些升级开始（否则你会因永恒而失去），给你新的
自动购买器以实现更好的自动化，或者让你以较低的速率离线被动获取资源。
<br>
<br>
给予你升级的里程碑在第一次开始永恒时会自动购买并将它们升级到最大值，
实际上让你永久拥有它们。
<br>
<br>
除了在自动购买器标签页上的条目外，所有新的自动购买器在其各自的手动按钮旁边都有开关（例如，无限维度
自动购买器可以在无限维度标签页上找到）。
维度提升、反物质星系和大坍缩自动购买器的改进更新了它们
在自动购买器标签页上的现有条目。
<br>
<br>
被动生成里程碑按设计仅在离线时工作，并且可能需要某些自动购买器设置才能正常工作，
如里程碑页面本身所述。
`,
      isUnlocked: () => PlayerProgress.eternityUnlocked(),
      tags: ["eternities", "rewards", "automation", "midgame"],
      tab: "eternity/milestones"
    }, {
      name: "时间维度",
      info: () => `
第一次永恒后，你解锁时间维度。你用永恒点数购买它们，它们生产时间碎片，
提供 Tick 速度升级。这些 Tick 速度升级就像普通的 Tick 速度升级一样起作用，但不增加
其成本。时间维度、时间碎片和它们提供的 Tick 速度升级在无限时保留，
但每次永恒都会重置。
<br>
<br>
与其他维度类似，第二时间维度生产第一时间维度，以此类推。与无限
维度类似，每次永恒后你的产量将重置为你购买的数量，但你保留
购买的任何倍率升级。
<br>
<br>
每次购买使该特定时间维度的倍率增加 ${formatX(4)}。升级之间的成本倍率
有一个基础值，但在 ${format(TimeDimension(1)._costIncreaseThresholds[0], 2)} EP 时增加
${formatX(1.5, 1, 1)}，在 ${format(TimeDimension(1)._costIncreaseThresholds[1])} EP 时增加
${formatX(2.2, 1, 1)}（基础值）。这些增加具有追溯力，导致成本
在达到这些阈值时跳跃，并且仅适用于前四个维度。超过
${format(TimeDimension(1)._costIncreaseThresholds[2])} EP，每次维度购买在成本增加方面
算作四次购买，导致价格急剧上涨。
<br>
<b>时间维度基础价格（EP）：</b> ${Array.range(1, 8)
    .map(tier => format(TimeDimension(tier)._baseCost))
    .join(", ")}
<br>
<b>时间维度基础价格增长：</b> ${Array.range(1, 8)
    .map(tier => format(TimeDimension(tier)._costMultiplier))
    .join(", ")}
<br>
<br>
获得另一个 Tick 速度升级的每个阈值比前一个多 ${formatPercents(0.33)} 时间碎片，
或者在有相关时间研究的情况下多 ${formatPercents(0.25)}。在 ${formatInt(FreeTickspeed.softcap)} 次升级后，
每个连续的免费 Tick 速度升级之间的倍率将逐渐增加，速率为每 ${formatInt(50000)} 次升级约 ${formatX(1.35, 0, 2)}
（每次升级 ${formatX(1.000006, 0, 6)}）。
`,
      isUnlocked: () => PlayerProgress.eternityUnlocked(),
      tags: ["dims", "td", "shards", "eternity", "midgame"],
      tab: "dimensions/time"
    }, {
      name: "时间研究",
      info: () => `
时间研究是一种强大的永恒后升级，需要一种称为时间定理的新资源。时间研究可以
提升你目前在游戏中看到的所有内容的产量，甚至改变某些公式的运作方式。
<br>
<br>
时间定理是一种有限的资源，你购买的每一个都会花费更多。它们可以用反物质、
无限点数或永恒点数购买。它们的成本每次购买增加一个固定系数。时间定理不会
在永恒时重置。
<br>
<br>
研究以树状方式布局，你必须先购买先决条件才能继续。你一开始只能购买
最上面的那个，然后从那里你可以购买任何正下方的你买得起的研究。
但是，有三个例外：
<br>
当研究之间的连线有颜色时，你一次只能选择三条路径中的一条。
<br>
当永恒挑战的研究挡路时，你需要完成与其连接的所有挑战至少一次
才能访问该研究。你不需要购买挑战研究即可访问它。
<br>
在底部附近，所有连线再次汇合的地方，你只能从每对研究中选择一个。
<br>
<br>
你可以按住 Shift 然后点击时间研究来购买直到那一点的所有研究。如果你 Shift 点击
一个位于你必须在两个或更多不同选项之间进行选择的位置的研究（见上文），
或者你买不起到达那一点所需的所有研究，这可能不会购买你想要的研究。
Shift 点击将贪婪地购买研究，在向下移动之前每行尽可能多地购买。
<br>
<br>
<b>预设：</b> 最初标记为 1 到 6 的按钮允许你将当前的整套研究保存到插槽中，
让你只需点击一下即可再次快速购买该特定的一套研究。你可以悬停在按钮上并
使用工具提示来加载/保存插槽，或者点击加载并 Shift 点击保存。这些预设可以重命名，但你
不允许给多个预设相同的名称。
<br>
<br>
<b>导入树/编辑预设：</b> 编辑预设或导入时间研究树时，模态框将显示
加载时将购买哪些时间研究，以及任何错误。
对于分歧路径，你可以使用名称作为研究集合的简写。
例如，你可以用 "antimatter" 替换 "71, 81, 91, 101" 来代表完全购买反物质分歧。
此外，如果时间研究字符串包含有效的永恒挑战，在字符串末尾添加 "!" 将
使游戏在使用时尝试立即解锁并进入永恒挑战。
<br>
<br>
<b>首选项：</b> 点击齿轮图标将打开一个对话框，让你选择在三向分支中选择的
“默认”路径。选择默认值将更改上述 Shift 点击行为，使其尝试
购买你首选的路径并继续，而不是在树分叉处完全停止。如果你购买了相关的时间研究，
你可以在此对话框中为维度分歧选择两条路径。
<br>
<br>
<b>洗点：</b> 洗点允许你重置树中的升级以取回花费在它们上的所有时间定理。
这可以免费完成，但仅在完成永恒时触发；你不能在永恒中间洗点时间研究。
<br>
<br>
<b>时间定理成本：</b>
<br>
<b>反物质：</b> 初始 ${format(DC.E20000)}，每个定理 ${formatX(DC.E20000)}
<br>
<b>无限点数：</b> 初始 ${formatInt(1)}，每个定理 ${formatX(DC.E100)}
<br>
<b>永恒点数：</b> 初始 ${formatInt(1)}，每个定理 ${formatX(2)}
`,
      isUnlocked: () => PlayerProgress.eternityUnlocked(),
      tags: ["eternity", "ts", "theorems", "tree", "study", "midgame"],
      tab: "eternity/studies"
    }, {
      name: "永恒挑战",
      info: () => `
永恒挑战是另一组由时间研究树解锁的挑战。它们需要一定数量的
时间定理以及当你解锁挑战时必须满足的次要要求。
<br>
<br>
当你进入永恒挑战时，你的目标变为达到特定的目标 IP。完成挑战后，
你不需要解锁永恒挑战的研究即可使奖励生效。这些挑战的奖励
类似于时间研究，但通常更强且永久，因为它们不需要你花费
时间定理来拥有其效果。
<br>
<br>
你一次只能解锁一个永恒挑战。
<br>
<br>
每个永恒挑战最多可以完成五次。每次完成后，奖励变强，但
下一次完成的目标也会增加。此外，再次解锁挑战的次要要求也会
增加。时间定理成本不会增加。
<br>
<br>
完成永恒挑战的次要要求将从研究要求中移除它们，直到你完成
该特定的永恒挑战，这意味着你只需要完成次要要求<i>一次</i>。
因此，你可以用一套研究解锁永恒挑战，然后洗点成另一套
研究来通过挑战。EC11 和 EC12 是此规则的例外 - 维度路径限制即使
你洗点时间研究也会保留。
`,
      isUnlocked: () => PlayerProgress.eternityUnlocked(),
      tags: ["ec", "study", "time", "rewards", "completions", "midgame"],
      tab: "challenges/eternity"
    }, {
      name: "时间膨胀",
      info: () => `
当你购买 EC11 和 EC12 研究下方解锁它的时间研究时，时间膨胀解锁。
为了购买此时间研究，你需要 ${formatInt(5000)} 未花费的 TT 以及一棵可以到达
该研究的树，<i>总共</i> ${formatInt(TimeStudy.dilation.totalTimeTheoremRequirement)} TT，并且必须
各完成 EC11 和 EC12 五次。
<br>
<br>
膨胀时间将开始一种修改后的永恒，称为时间膨胀，其中所有反物质/无限/时间
维度倍率的<i>指数</i>和 Tick 速度倍率的<i>指数</i>将变为
${formatPow(0.75, 2, 2)}，显著降低它们。如果你能达到 ${formatPostBreak(Number.MAX_VALUE, 2)} IP
来完成此膨胀永恒，你将获得一种称为超光速粒子的新资源。
<br>
<br>
你可以想膨胀多少次就膨胀多少次，但超光速粒子不能像其他资源一样“刷”。超光速
粒子永远不会减少，只会增加，并且增加到一个基于你的 TP 倍率和
当前膨胀中获得的反物质的上限。因此，除非你获得了 TP 倍率或能够在膨胀中显著增加你的反物质，
否则通常无法增加你的 TP。
<br>
<br>
超光速粒子生成另一种称为膨胀时间的货币。膨胀时间通过达到
类似于从时间维度获得的 Tick 速度升级的阈值转化为超光速星系。这些超光速星系就像
复制器星系一样，它们影响 Tick 速度就像它们是反物质星系一样，但它们不增加
下一个反物质星系的成本。
<br>
<br>
解锁时间膨胀还解锁了你可以使用膨胀时间购买的升级。第一行膨胀升级中的
第一个和第三个升级可以重复购买，只要你买得起。第二个升级也可以
重复购买，但最终会达到上限。
`,
      isUnlocked: () => DilationTimeStudyState.studies[1].isBought || PlayerProgress.realityUnlocked(),
      tags: ["dial", "dt", "dilated", "tachyon", "particle", "study", "free", "galaxy", "galaxies", "midgame"],
      tab: "eternity/dilation"
    }, {
      name: "现实",
      info: () => `
当你达到 ${formatPostBreak(DC.E4000)} EP 并完成前
${formatInt(13)} 行成就时，你将能够购买解锁现实的时间研究。
解锁它会打开一个新标签页，你可以在其中找到进行新现实的按钮。开始新现实
将重置几乎整个游戏到这一点，但作为交换给你
一种称为现实机器的新货币、一个符文和一个特权点数。
<br>
<br>
与目前为止的其他重置不同，你还会失去前 ${formatInt(13)} 行成就——即所有
现实前的成就及其相关奖励。但是，你仍然保留统计标签页中一般
标题下的所有值和你最好的挑战时间。
<br>
<br>
完成第一次现实后，符文标签页包含一个按钮，让你再次重启当前的现实，
而不改变你即将到来的符文选择。<b>请注意，这不会给你任何奖励，即使你
原本可以正常完成现实。</b>
<br>
<br>
你需要重做每个成就的要求才能再次获得奖励，但即使你没有达到要求，
每 ${timeDisplayNoDecimals(30 * 60000)} 你也会被动
解锁下一个未完成的成就，无需任何努力。此自动完成可以被禁用，在这种情况下，计时器将
倒数到零并暂停，在取消暂停时立即完成另一个成就。计时器在离线时
仍以相同的速率进行。
<br>
<br>
现实机器可以花费在现实标签页的各种升级上，是你从现在开始的主要货币。
符文是可装备的物品，你必须装备它们才能使用它们的加成。特权点数是另一种
货币，可以在特权子标签页中花费在不同的特权上。
<br>
<br>
现实机器纯粹根据 EP 缩放，现实按钮会告诉你获得
下一个需要多少 EP。前 ${formatInt(10)} RM 在 ${formatPostBreak(DC.E4000)} EP 和 ${formatPostBreak(DC.C10P16000D3)} EP
之间的指数线性缩放，然后超过那个
RM = ${formatInt(1000)}<sup>log<sub>${formatInt(10)}</sub>(EP)/${formatInt(4000)}-${formatInt(1)}</sup>。此公式
在 ${formatPostBreak(DC.C10P16000D3)} EP 以上比线性获得更高的 RM。
<br>
<br>
符文等级根据永恒点数、复制器和膨胀时间的组合进行缩放，最低等级为
${formatInt(1)}。符文的类型、效果和稀有度是随机的。
<br>
<br>
每次现实你正好获得 ${formatInt(1)} 个特权点数。
<br>
<br>
<b>快捷键：Y</b> 将尝试进行现实重置。
`,
      isUnlocked: () => PlayerProgress.realityUnlocked() || TimeStudy.reality.isBought,
      tags: ["rm", "machines", "glyph", "perk", "reset", "prestige", "endgame", "lategame"],
      tab: "reality/upgrades"
    }, {
      name: "符文",
      info: () => `
符文是一种可装备的物品，具有四个属性：
<br>
<b>类型</b> - 这是基于它倾向于提升游戏哪一部分而给出的名称
（例如“X 符文”）。这决定了它可能具有的效果。
<br>
<b>等级</b> - 这有助于决定你的符文有多强，它根据你在获得它的
现实中获得了多少各种资源而缩放。
<br>
<b>稀有度</b> - 这是一个介于 ${formatPercents(0)} 和 ${formatPercents(1)} 之间的百分比，也
影响你的符文强度。这是随机的，但可以受各种升级影响。
该百分比实际上是质量评级，值越高越好。特定的稀有度范围有名称，如普通或罕见。
<br>
<b>效果</b> - 这些是装备符文将给予你的加成，最多可包含四个效果。
等级或稀有度较高的符文通常比弱符文有更多效果。
<br>
<b>注意：你的第一个符文将具有固定的效果和稀有度，但其等级将根据你在任何现实内容之前的
进度进行缩放。一旦你收到符文，其属性就不能更改。</b>
<br>
<br>
要装备符文，双击或将图标从库存拖入屏幕中间的活动圆圈之一。
装备后，符文图标变为圆形，并将其效果添加到右侧列表中。
<br>
<br>
装备多个具有相同效果的符文将组合它们的效果；带有“+”的效果通常将
其值相加，带有“×”的效果通常将其值相乘。
<br>
<br>
你可以在现实期间随时将符文装备到<i>空</i>活动插槽中，这将立即应用
新符文的效果。你也可以将符文拖入已被占用的插槽以切换装备的符文，
但这将重启你当前的现实。
<br>
<br>
库存第一行的插槽是“受保护”插槽。新符文永远不会被放入其中（即使
你的库存没有空间），它们也不受排序和自动清理按钮的影响。如果你
的库存没有空间容纳新符文，你将收到的任何符文都将被自动删除（或献祭，
如果已解锁）。
<br>
<br>
你可以通过 Shift 点击从库存中删除符文，这将提示你一个确认对话框，
询问你是否确定要删除该符文。按住 Shift 和 Ctrl 同时点击将绕过此
对话框。<b>但是，如果你在从现实升级解锁符文献祭之前这样做，删除符文除了
清理库存空间外不会给你任何好处！</b>
<br>
<br>
一旦你解锁符文献祭，你将能够禁用符文选择模态框的出现。如果需要，你
可以通过 Shift 点击现实按钮强制模态框在本次现实再次出现（忽略此设置）。
在禁用选择模态框的情况下完成现实将从你的选项中随机选择一个符文。
<br>
<br>
点击模态框窗口外的一组圆形符文将打开一个模态框，显示
所有这些符文及其各种属性的详细摘要。摘要将同时显示所有符文的信息，
描述稍短，使其更适合与他人分享。这可以针对统计页面中的符文记录、
你装备的符文以及本次现实即将到来的符文选择进行。
`,
      isUnlocked: () => PlayerProgress.realityUnlocked() || TimeStudy.reality.isBought,
      tags: ["reality", "sacrifice", "level", "endgame", "lategame"],
      tab: "reality/glyphs"
    }, {
      name: "特权",
      info: () => `
特权是现实后解锁的一种升级。每个特权效果各不相同，但大多数是 QoL（生活质量）
改进，你可以选择自己的路径。所有特权只需要 ${formatInt(1)} 特权点数即可购买。
<br>
<br>
每次现实你获得 ${formatInt(1)} 特权点数，可以花费在树上的升级上，从
“你现在可以在现实时从 ${formatInt(Perk.firstPerk.config.effect)} 个符文中选择”开始。你只能解锁
与你已经拥有的特权直接相邻的特权，尽管树中有循环，你可以沿任一方向通过。
<br>
<br>
特权节点可以有两种不同的形状 - 圆形或菱形。两者唯一的区别是
菱形特权除了正常效果外还给予自动机点数。不同的节点也有
不同的颜色，大致指示它们对游戏哪一部分影响最大。
`,
      isUnlocked: () => PlayerProgress.realityUnlocked() || TimeStudy.reality.isBought,
      tags: ["pp", "reality", "tree", "endgame", "lategame"],
      tab: "reality/perks"
    }, {
      name: "自动机概览",
      info: () => `
自动机在达到总共 ${formatInt(AutomatorPoints.pointsForAutomator)} 自动机点数时解锁。
自动机点数在解锁各种特权或现实升级、解锁黑洞或
仅完成更多现实时给予。
<br>
<br>
自动机使用一种脚本语言，允许你自动化几乎整个游戏。
界面有两个窗格，左侧的脚本窗格用于输入自动化游戏的命令，右侧的窗格
有多个面板，执行许多不同的操作，如自动机介绍页面所述。
<br>
<br>
如果你想要更大的工作区，你可以按自动机文档窗格右上角的按钮
将其扩展到全屏。如果你想要更多空间编写脚本或阅读文档，你也可以水平拖动
窗格之间的边界来调整窗格大小。
<br>
<br>
按脚本窗格右上角的按钮，你可以在自动机的块和文本编辑器
模式之间切换；如果你不熟悉编程，块模式可能更平易近人。要在块模式下输入命令，
请选择右侧的命令块窗格，并将相关命令的框拖入脚本窗格并将其放在
你想要命令去的地方。如果需要，可以通过拖动块来自由重新排列命令。切换
块和文本模式也会尝试自动翻译你的脚本，尽管如果你的脚本包含错误，你可能会丢失部分
转换后的脚本。
<br>
<br>
就像你的整个存档一样，单个自动机脚本可以从游戏中导入和导出。
格式正确的脚本字符串将以 <b>${GameSaveSerializer.startingString["automator script"]}</b> 开头并
以 <b>${GameSaveSerializer.endingString["automator script"]}</b> 结尾。如果不是这种情况，那么你的脚本
的一部分在复制粘贴过程中丢失了。导入功能将脚本加载到新插槽中；你当前的脚本
不会丢失或被覆盖。
<br>
<br>
<b>快捷键：U</b> 将暂停/取消暂停自动机。
`,
      isUnlocked: () => Player.automatorUnlocked,
      tags: ["automation", "reality", "code", "script", "endgame", "lategame"],
      tab: "automation/automator"
    }, {
      name: "自动机技术细节",
      info: () => `
<b>技术限制</b>
<br>
<br>
为了减少滞后并防止存档大小变得太大，脚本有一些限制。
这些限制如下：
<br>
- 单个脚本限制为最多 ${formatInt(AutomatorData.MAX_ALLOWED_SCRIPT_CHARACTERS)}
个字符，所有脚本组合在一起总共不能超过 ${formatInt(AutomatorData.MAX_ALLOWED_TOTAL_CHARACTERS)}
个字符。
<br>
- 脚本名称不能超过 ${formatInt(AutomatorData.MAX_ALLOWED_SCRIPT_NAME_LENGTH)} 个字符。
<br>
- 定义的常量名称不能超过 ${formatInt(AutomatorData.MAX_ALLOWED_CONSTANT_NAME_LENGTH)}
个字符，或值不能超过 ${formatInt(AutomatorData.MAX_ALLOWED_CONSTANT_VALUE_LENGTH)} 个字符。
<br>
- 你不能拥有总共超过 ${formatInt(AutomatorData.MAX_ALLOWED_SCRIPT_COUNT)} 个脚本或
${formatInt(AutomatorData.MAX_ALLOWED_CONSTANT_COUNT)} 个定义的常量。
<br>
<br>
<b>脚本保存</b>
<br>
<br>
脚本在你编辑时会自动保存，但在全局自动保存计时器
（即“自上次保存以来的时间”）触发完整游戏保存之前，不会保存到你的游戏存档中。
如果你在关闭游戏前更改脚本，你应该等到游戏保存后再关闭，以免丢失更改。
在超过长度限制时对脚本进行的任何编辑都不会保存，直到你将脚本缩短到限制以下。
<br>
<br>
<b>自动机 Tick</b>
<br>
<br>
自动机的“执行计时器”基于实时，因此不受黑洞、
时间符文效果和 EC12 负面效果等事物的影响。然而，这个执行计时器完全独立于主
游戏的生产循环运行，这意味着在更快的速度下，自动机可以在每个生产 Tick 运行多个命令。
<br>
<br>
有些命令对游戏的内部代码更密集，在较慢的计算机上可能需要超过单个自动机 Tick 才能
处理。在这种情况下，自动机将执行这些命令，然后尝试通过
尽可能快地执行后续命令来“追赶”，直到它以
恒定的执行速度运行了它应该运行的命令数量。
<br>
<br>
<b>与离线进度的交互</b>
<br>
<br>
离线进度模拟期间较长的生产 Tick 意味着你所有的资源实际上是以
大块而不是更连续的方式给出的。这可能会对你的脚本在
离线时的行为产生潜在的不利影响，具体取决于你的脚本确切如何依赖游戏状态才能正常工作。
此外，PAUSE 命令可能会表现得很奇怪，因为它也基于实时。
`,
      isUnlocked: () => Player.automatorUnlocked,
      tags: ["automation", "reality", "code", "script", "endgame", "lategame"],
      tab: "automation/automator"
    }, {
      name: "黑洞",
      info: () => `
黑洞是一个周期性加速游戏运行速度的功能。
游戏将以正常速度运行一段时间，然后在短时间内极快地运行，
之后回到正常速度并重复循环。
<br>
<br>
来自黑洞的游戏速度提升比 Tick 速度强得多，因为与 Tick 速度不同，它影响
<i>所有事物</i>，包括仅部分受 Tick 速度影响的事物
（例如无限/时间维度），通常完全不受影响的事物（例如 DT/TT 生成），
以及纯粹基于花费时间提升的效果（例如闲置路径 IP/EP 倍率）。
<br>
<br>
虽然游戏中的大多数功能都受到这种增加的游戏速度的提升，但也有一些保持不受影响。
在这些情况下，会特别提到给定的时间是<i>实时</i>而不是
<i>游戏时间</i>。一个这样的例子是随时间自动完成永恒挑战的特权集。
否则，从这一点开始，应假设所有对时间的引用都是指<i>游戏时间</i>。
请注意，这也包括你可能希望花费<i>更少</i>时间的情况，例如
现实升级“复制速度”。
<br>
<br>
你可以使用现实机器购买黑洞升级。黑洞有三个升级：
<br>
<b>间隔</b> - 黑洞在爆发之间不活动的时间，
每次升级减少 ${formatPercents(0.2)}。
<br>
<b>功率</b> - 游戏在临时速度爆发期间运行的速度有多快，
每次升级增加 ${formatPercents(0.35)}。
<br>
<b>持续时间</b> - 每次速度爆发持续多长时间才回到正常速度，
每次升级增加 ${formatPercents(0.3)}。
<br>
<br>
解锁黑洞后的 ${formatInt(100)} 天<i>游戏时间</i>，你解锁购买
允许你拥有第二个黑洞的现实升级的能力。
第二个黑洞的计时器仅在第一个黑洞处于活动状态时才会推进。因此，例如，如果第一个
黑洞的持续时间为 ${formatInt(4)} 分钟，第二个黑洞的间隔为 ${formatInt(8)} 分钟，那么
无论第一个黑洞的间隔多短，第二个黑洞每两个第一个黑洞的周期才会激活一次。
请注意，游戏内标题中显示的计时器考虑了这一点，并显示
第二个黑洞激活之前的实际时间；在黑洞标签页中，你可以看到
第二个黑洞激活所需的第一个黑洞处于活动状态的时间。
<br>
<br>
当一个黑洞至少在 ${formatPercents(0.9999, 2)} 的时间内处于活动状态时，它将变为永久活动。
这是分别针对两个黑洞进行跟踪的。
<br>
<br>
在离线时，黑洞周期仍将正常推进，并且其活动速度提升将完全应用，就像
游戏仍然打开一样。离线时间模拟具有不同 Tick 长度的不活动和活动黑洞段，
以减少活动期间小 Tick 计数的负面影响；“离线进度”的条目
已更新为包含更多技术细节。
<br>
<br>
黑洞可以暂停，完全停止其间隔/持续时间循环。但是，当取消暂停时，它将
需要 ${BlackHoles.ACCELERATION_TIME} 秒实时时间才能从不活动变为最大加速速度。
此加速时间仍将像全速运行一样推进周期；因此
虽然暂停提供了一些更多控制，但最终也会导致一些加速时间损失。
<br>
<br>
暂停和取消暂停影响两个黑洞；它们不能独立暂停或取消暂停。通过切换黑洞标签页上的相关设置，它们可以
在激活前 ${BlackHoles.ACCELERATION_TIME} 秒实时时间自动暂停。
<br>
<br>
<b>升级成本信息：</b>
<br>
<b>间隔</b> - 基础成本 ${formatInt(15)} RM，每次升级增加 ${formatX(3.5, 0, 1)}。
<br>
<b>功率</b> - 基础成本 ${formatInt(20)} RM，每次升级增加 ${formatX(2)}。
<br>
<b>持续时间</b> - 基础成本 ${formatInt(10)} RM，每次升级增加 ${formatX(4)}。
<br>
<b>增加的成本缩放：</b> 超过 ${format(1e30)} RM，每次购买之间的成本倍率增加加法
+${format(0.2, 0, 1)}。超过 ${format(Number.MAX_VALUE, 1)} RM，会出现一个新的缩放，忽略所有
先前的行为。从此时起，所有升级的表现就像它们的初始成本为 ${format(DC.E310)}，
并且进一步的升级成本增加 ${format(1e6)}，${format(1e7)}，以此类推（升级之间 ${formatX(10)}）。
<br>
<b>黑洞 2：</b> 所有升级的初始成本比第一个黑洞高 ${formatX(1000)}，
但成本倍率相同。
<br>
<br>
<b>快捷键：B</b> 将暂停/取消暂停黑洞。
`,
      isUnlocked: () => player.blackHole[0].unlocked,
      tags: ["reality", "time", "speed", "duration", "interval", "rm", "endgame", "lategame"],
      tab: "reality/hole"
    }, {
      name: "天神",
      info: () => `
一旦你获得了所有现实升级，第一个天神就会解锁。这将在现实标签页旁边打开一个新的天神标签页。
天神标签页下的第一个子标签页显示一张名为“天神导航”的地图，随着你在游戏中的进展而更新。
首次解锁时只能看到地图的一部分，但随着你接近它，新内容将逐渐
显露，通常带有你向下一步进度的视觉指示。
<br>
<br>
每个天神都有独特的机制和升级，你需要击败所有七个天神才能通关游戏。
解锁或击败天神有不同的条件，具体取决于天神的机制。
<br>
<br>
所有天神都有自己的天神现实，但现实与每个天神以及游戏其余部分
的相关性将取决于天神。
<br>
<br>
天神是永恒的实体。除非另有说明，否则天神引入的任何新机制都不受
游戏速度倍率的影响，而是专门指实时而不是游戏时间。
`,
      isUnlocked: () => Teresa.isUnlocked,
      tags: ["reality", "challenges", "endgame", "lategame"],
      tab: "celestials/celestial-navigation"
    }, {
      name: "特蕾莎，现实天神",
      alias: "Teresa",
      info: () => `
特蕾莎是第一个天神。通过成就 147 解锁，该成就要求获得所有现实升级。
<br>
<br>
在主屏幕上，有一个条形图，上面有一个按钮写着“注入 RM”。这允许你将你的现实机器放入
容器中以获得现实机器倍率。注入容器的 RM 无法取回。
当你达到容器内的 ${format(TeresaUnlocks.run.price)} RM 时，你解锁特蕾莎的现实。
<br>
<br>
当你完成特蕾莎的现实时，
${Teresa.runRewardMultiplier > 1
    ? "你的符文献祭基于运行期间获得的反物质数量成倍增加。"
    : "（完成特蕾莎的现实以查看奖励）"}
完成特蕾莎的现实只是故事的一部分；你需要继续注入 RM 才能通过。一旦
你在容器中有 ${format(TeresaUnlocks.effarig.price)} RM，你将解锁下一个天神。
<br>
<br>
${Teresa.hasCompletedRun
    ? "特蕾莎的现实可以在完成后再次进入，如果你在这次重复运行中" +
      "达到更高的反物质数量，其奖励将变得更强。"
    : "(更多信息可用 - 完成特蕾莎的现实)"}
`,
      isUnlocked: () => Teresa.isUnlocked,
      tags: ["rm", "endgame", "lategame", "perks", "sacrifice", "boo", "ghost", "celestial"],
      tab: "celestials/teresa"
    }, {
      name: "以法利，远古遗物天神",
      alias: "Effarig",
      info: () => `
以法利是你遇到的第二个天神。
通过向特蕾莎的容器中注入至少 ${format(TeresaUnlocks.effarig.price)} RM 来解锁。
<br>
<br>
以法利引入了一种称为遗物碎片的货币，通过在现实期间使用不同类型的符文效果获得。
现实期间激活的不同效果数量极大地影响遗物碎片的获取，而 EP 的影响则小得多。
遗物碎片是解锁以法利的货币，从现在开始每次现实都会获得。
<br>
<br>
使用遗物碎片，你可以购买多个升级（见“高级符文机制”），这些升级可以改善你的符文，
并允许你在进行全自动现实时根据效果和稀有度筛选它们。
<br>
<br>
以法利的最终解锁是其自己的现实，需要 ${format(GameDatabase.celestials.effarig.unlocks.run.cost)} 遗物碎片。
${EffarigUnlock.run.isUnlocked
    ? "其现实分为三层：无限、永恒和现实。你必须完成每一层" +
      "才能进入下一层。完成以法利的永恒解锁下一个天神。"
    : "<div style='color: var(--color-effarig--base);'>（解锁以法利的现实以查看详细信息）</div>"
}
<br>
<br>
完成以法利的现实解锁
${EffarigUnlock.reality.isUnlocked
    ? `一种新的符文类型，<span style='color: var(--color-effarig--base);'>以法利</span>符文。以法利符文有
      ${formatInt(7)} 种可能的不同效果，你可以在符文筛选设置中查看。你一次只能
      装备一个以法利符文。
${Ra.unlocks.glyphEffectCount.canBeApplied
    ? `由于在拉中以法利达到了 10 级，以法利符文上出现的效果不再有任何限制。
      任何给定的以法利符文现在可以同时拥有所有 ${formatInt(7)} 种效果。`
    : `以法利符文最多只能有 ${formatInt(4)} 种效果，并且 RM 倍率和符文不稳定性
      效果不能同时出现在同一个符文上。`}`
    : "<span style='color: var(--color-effarig--base);'>（完成以法利的现实以查看奖励详情）</span>"}
<br>
<br>
`,
      isUnlocked: () => TeresaUnlocks.effarig.canBeApplied,
      tags: ["glyph", "sacrifice", "shards", "reality", "spectralflame", "lategame", "endgame", "celestial"],
      tab: "celestials/effarig"
    }, {
      name: "高级符文机制",
      info: () => `
符文等级调整可以用 ${format(GameDatabase.celestials.effarig.unlocks.adjuster.cost)} 遗物碎片购买。
这允许你为每种资源（EP、DT、复制器、永恒次数）设置权重，以决定它们对
现实中获得的符文等级的影响程度。
<br>
<br>
自动符文筛选可以用 ${format(GameDatabase.celestials.effarig.unlocks.glyphFilter.cost)}
遗物碎片购买。该系统使用多种方法之一为你的符文选择分配分数，然后选择
得分最高的选项。选择此符文后，它会检查分数是否高于阈值，如果高于阈值则保留，
否则将其献祭。有三种基本模式：
<br>
<b>最低总献祭值：</b> 符文根据你拥有的该特定符文类型的献祭值给出分数。
你拥有最低献祭值的符文类型将具有最高分数。
此模式没有阈值，总是献祭你的符文。
<br>
<b>效果数量：</b> 符文的分数等于它们拥有的效果数量，当多个
符文具有相同的效果数量时，稀有度较高的符文将被选中。它们比较的阈值
由你在文本框中的输入指定。
<br>
<b>稀有度阈值模式：</b> 符文的分数等于它们的稀有度百分比。比较阈值
可以为每种符文类型单独设置。
<br>
<br>
此外，还有两种更高级的模式，具有一些额外的灵活性。你最初可能不需要这些，但
它们以后可能会派上用场：
<br>
<b>指定效果模式：</b> 符文的分数等于其稀有度，并根据你指定的稀有度阈值进行检查，
但此分数会根据你输入的效果进行修改。符文将被检查是否具有最小
效果数量以及是否具有你选择的所有效果，每缺少一个效果，其分数降低 ${formatInt(200)}。
这保证了任何没有你想要的效果的符文都将低于阈值。你
可以通过设置不可能的条件来禁止特定符文<i>类型</i>（例如：在能量符文上设置至少 ${formatInt(6)} 个效果
将阻止选择能量符文）。
<br>
<b>效果分数模式：</b> 符文的分数由其稀有度加上其拥有的每个效果的分数计算得出，
你可以单独设置阈值和每个效果的值。一些可能的使用方式：
<br>
- 给较弱的效果一个 ${formatInt(5)} 的值，允许你保留没有该效果的符文，只要它们
更稀有以补偿较弱的效果
<br>
- 为你不<i>想要</i>的某个效果分配一个大的负分，将禁止选择带有该效果的符文；
这对于效果测试和其他更有限的情况很有用
<br>
- 设置一个不可能的条件（例如：阈值分数为 ${formatInt(999)} 且所有效果值为 ${formatInt(0)}）
也将让你像指定效果模式一样禁止整个类型
<br>
<br>
符文筛选模式是一个全局设置，一次应用于所有符文类型；例如，你不能用“稀有度阈值”筛选
能量符文，而用“指定效果”筛选时间符文。选择一种模式将需要
你在其设置中配置每种符文类型以进行适当的筛选。每种筛选模式都有自己的设置，
如果你切换到另一种模式，这些设置将被保留。
<br>
<br>
解锁符文筛选还允许你使用即将到来的选择中的最高符文分数作为
自动机中的可比较货币。此外，如果即将到来的选择都没有被筛选器保留，
你可以让你的筛选器强制立即进行现实（一旦可用），只要现实自动购买器已开启。
<br>
<br>
符文预设可以用 ${format(GameDatabase.celestials.effarig.unlocks.setSaves.cost)} 遗物碎片购买。
这解锁了 ${formatInt(7)} 个插槽，允许你将当前装备的符文保存为套装。
你不能覆盖套装，必须先删除它。当你加载套装时，其中的每个符文都会被找到并装备。
如果未找到任何符文，它将显示警告，但无论如何都会装备其余符文。
加载套装时，你可以选择对等级和/或稀有度敏感。在可能的符文中，最好的符文
将始终是被装备的那个。就像其他圆形符文组一样，你可以点击其中任何一个
以弹出一个总结整套符文的模态框。
`,
      isUnlocked: () => EffarigUnlock.adjuster.isUnlocked,
      tags: ["glyph", "weight", "adjustment", "sacrifice", "filter", "threshold", "set", "save", "reality", "lategame",
        "endgame"],
      tab: "celestials/glyphfilter"
    }, {
      name: "无名者，时间天神",
      alias: "无名者",
      info: () => `
无名者是第三个天神，通过完成以法利的永恒解锁。
<br>
<br>
解锁无名者时，你立即获得两个与时间相关的新机制。你可以通过
为黑洞充能来存储“游戏时间”，也可以通过有意停止生产来存储“实时”。
存储的游戏时间也用作从无名者处购买解锁的货币。
<br>
<br>
为黑洞充能会给你存储的游戏时间，代价是将你的游戏速度设置为 ${formatInt(1)}。
游戏实际上是在利用你增加的游戏速度来存储游戏时间本身。它的
主要用途是释放黑洞，这将使用你存储的游戏时间来在时间上跳跃一段
等于存储的游戏时间的持续时间。这与常规游戏速度倍率不同，因为释放不受
使用时游戏速度的任何修饰符的影响，仅在存储时受影响。
<br>
<br>
存储实时完全停止所有生产，有效地暂停你的游戏。每过去一秒实时，
你获得存储的实时（由一些效率系数修正）。你可以使用存储的实时来
在符文标签页中放大现实。当你完成现实时，这将一次性使用你所有存储的实时
来尝试一遍又一遍地重复那个
确切的现实，给你通常会从重复中获得的所有奖励。例如，如果
你有 ${formatInt(50)} 分钟存储并放大了一个持续 ${formatInt(10)} 分钟的现实，该现实原本
给予 ${format(DC.E30)} RM 和 ${format(DC.E12)} 遗物碎片，放大的现实将给你 ${format(5e30)} RM，
${format(5e12)} 遗物碎片，${formatInt(5)} 个符文（受你的筛选设置影响），
以及 ${formatInt(5)} 个特权点数。
<br>
<br>
但是，如果你的现实持续时间少于 ${formatInt(1)} 秒，放大系数将受到
存储秒数的限制。例如，如果你有 ${formatInt(1000)} 秒存储并放大了一个
持续 ${format(0.2, 2, 2)} 秒的现实，你将使用 ${formatInt(200)} 秒来模拟 ${formatInt(1000)} 次现实。
<br>
<br>
你可以切换设置以自动将离线时间存储为存储的实时。
<br>
<br>
它们的第一个解锁花费 ${format(TimeSpan.fromMilliseconds(ENSLAVED_UNLOCKS.FREE_TICKSPEED_SOFTCAP.price).totalYears)}
年的存储游戏时间。它增加了从时间维度获得的 Tick 速度升级的软上限
（其成本开始增加得更快的时间点）
${format(1e5)} 个 Tick 速度升级。
<br>
<br>
在 ${format(TimeSpan.fromMilliseconds(ENSLAVED_UNLOCKS.RUN.price).totalYears)} 年的存储游戏时间时，你能够
最终解锁它们的现实。完成无名者现实的奖励是
${Enslaved.isCompleted
    ? "解锁超立方体，它们有自己的游戏指南条目。"
    : "<span style='color: var(--color-bad);'>（完成无名者的现实以查看奖励详情）</span>"}
<br>
<br>
无名者不会直接解锁下一个天神。
`,
      isUnlocked: () => EffarigUnlock.eternity.isUnlocked,
      tags: ["reality", "time", "blackhole", "lategame", "endgame", "testers", "celestial",
        ...credits.people.map(p => p.name)
      ],
      tab: "celestials/enslaved"
    }, {
      name: "超立方体",
      info: () => `
超立方体是你完成无名者现实解锁的一种新资源。
<br>
<br>
无限维度通常上限为 ${format(InfinityDimensions.HARDCAP_PURCHASES)} 总购买次数，
这限制了它们的倍率可以增长多大，因为最终你无法再升级它们。
超立方体允许你通过花费无限点数来提高此上限。
<br>
<br>
超立方体的成本呈超指数增长，但每个连续的超立方体都比
上一个强得多，以弥补这一点。超立方体数量永不重置，这意味着一旦购买，你不需要
再次达到 IP 成本即可在以后的现实中利用提高的上限。
<br>
<br>
你可以在无限维度标签页中查看有关当前超立方体数量和下一个成本的更多信息。
此外，你当前的无限点数现在也将显示下一个超立方体的百分比。
如果买得起，无限按钮本身将在点击时视觉上改变并将你带到无限维度标签页。
`,
      isUnlocked: () => Enslaved.isCompleted,
      tags: ["reality", "lategame", "endgame", "tesseract", "id", "celestial"],
      tab: "celestials/tesseract"
    }, {
      name: "V，成就天神",
      alias: "V",
      info: () => `
V 是一个特殊的天神，因为它们不是由另一个天神解锁的，
而是通过完成成就 ID 151（第 ${formatInt(15)} 行，第 ${formatInt(1)} 列，
“反正你真的不需要它”）解锁的，该成就要求你在当前的无限中获得 ${formatInt(800)} 个反物质星系
而不购买第八反物质维度。
<br>
<br>
在子标签页从成就解锁后，你会遇到另一组完全解锁 V 的要求。
你必须完成 ${formatInt(GameDatabase.celestials.v.mainUnlock.realities.requirement)} 次现实并拥有
${format(GameDatabase.celestials.v.mainUnlock.realityMachines.requirement)} 未花费的 RM。
此外，你需要达到 ${format(GameDatabase.celestials.v.mainUnlock.eternities.requirement)} 次永恒，
${format(GameDatabase.celestials.v.mainUnlock.infinities.requirement)} 次无限，
${format(GameDatabase.celestials.v.mainUnlock.dilatedTime.requirement)} 膨胀时间，以及
${format(GameDatabase.celestials.v.mainUnlock.replicanti.requirement)} 复制器，所有这些都在同一个现实中。
<br>
<br>
当你满足所有这些要求时，你将能够访问 V 的现实。
${VUnlocks.vAchievementUnlock.isUnlocked
    ? `但是，完成现实本身仅仅是开始。V 有六个不同的要求，每个要求
      都需要你在 V 的现实中取得一定量的进展。完成一个要求会奖励你一个
      V-成就。
      V-成就是永久的，在退出 V 的现实后仍然存在，并且不需要同时全部完成。
      <br>
      <br>
      完成要求后，V-成就阈值随后增加，并且如果
      你能达到新目标，可以再次完成。你可以完成每类 V-成就最多六次。
      完成的 V-成就做两件事：
      <br>
      - 达到一定总数的 V-成就后，你会自动解锁 V 标签页上的升级，无需
      花费任何资源。
      <br>
      - 每个 V-成就还给你一个空间定理。
      <br>
      <br>
      拥有 ${formatInt(2)} 个 V-成就解锁的目标降低允许你通过花费特权点数
      使一些 V-成就要求更容易完成，最低限制为最简单的层级要求。
      降低目标的成本不会随使用而增加，并且也会降低未来层级的要求。
      <br>
      <br>
      空间定理允许你购买通常被禁止的时间研究，例如改进的 IP 公式后的
      配速分歧中的多条路径，或底部附近暗/亮对中的两个时间研究。
      像时间定理一样，每次你洗点研究时它们都会免费归还。
      有了足够的空间定理，你最终将能够一次性购买每一个时间研究！
      <br>
      <br>
      达到 ${formatInt(36)} 个 V-成就（因此完成所有 V 的成就）解锁下一个
      天神。`
    : "<span style='color: var(--color-bad);'>（解锁 V 的现实以查看更多详细信息）</span>"}
`,
      isUnlocked: () => Achievement(151).isUnlocked,
      tags: ["reality", "lategame", "endgame", "girlfriend", "challenges", "achievement", "space", "theorems",
        "study", "triad", "celestial"],
      tab: "celestials/v"
    }, {
      name: "拉，被遗忘者天神",
      alias: "Ra",
      info: () => `
拉是第五个天神，通过完全完成所有 V 的成就解锁。他们利用记忆来
以更强的方式带回先前天神的积极效果。随着时间的推移，你将在拉<i>内部</i>解锁之前的四个
天神，每个天神都提供与其原始主题相关的额外升级。
<br>
<br>
拉内部的每个先前天神通过使用记忆来获得等级，记忆随着时间的推移从
记忆块被动生成。记忆块只能通过进入拉的现实获得，但在现实内部，块将
根据某些资源总量被动生成。如果你正在存储实时，你将不会在拉的现实内部获得任何
块，但记忆仍将正常生成。所有天神总共拥有
${formatInt(Ra.remembrance.requiredLevels)} 个等级将解锁回想，
这允许你选择特定的天神在拉的现实内部获得更多块。
<br>
<br>
记忆可以花费在三件事上——增加记忆块获取，增加记忆获取，以及升级
天神。你开始拉时只有特蕾莎解锁，每个连续的天神通过达到
前一个天神的 ${formatInt(8)} 级解锁。等级上限为 ${formatInt(25)}。
<br>
<br>
特蕾莎解锁充能无限升级的能力，使它们更强。一旦你达到
一定的符文献祭值阈值，它们还会改善你的符文效果。
<br>
<br>
在 ${formatInt(2)} 级，以法利解锁
${Ra.unlocks.effarigUnlock.canBeApplied
    ? "一种称为符文炼金术的新机制，后来也使以法利符文更强，同时逐渐移除 " +
      "符文生成的几乎所有随机元素。符文炼金术也有自己的游戏指南条目。"
    : "<span style='color: var(--color-bad);'>（在拉内部解锁以法利以查看解锁详情）</span>"}
<br>
<br>
无名者解锁
${Ra.unlocks.enslavedUnlock.canBeApplied
    ? "与为黑洞充能相关的额外机制，以及使它们显著更强。"
    : "<span style='color: var(--color-bad);'>（在拉内部解锁无名者以查看解锁详情）</span>"}
<br>
<br>
V 解锁
${Ra.unlocks.vUnlock.canBeApplied
    ? "三元研究，这是树底部附近的新研究，花费空间定理。每个三元研究 " +
      "要求你也拥有附近的三个研究才能购买它们。它们还解锁了 " +
      "一组更难的 V-成就来完成以获得额外的空间定理。"
    : "<span style='color: var(--color-bad);'>（在拉内部解锁 V 以查看解锁详情）</span>"}
<br>
<br>
拉不会直接解锁下一个天神。`,
      isUnlocked: () => VUnlocks.raUnlock.isUnlocked,
      tags: ["reality", "memories", "razenpok", "levels", "glyphs", "lategame", "endgame",
        "effarig", "teresa", "nameless", "v", "celestial"],
      tab: "celestials/ra"
    }, {
      name: "符文炼金术资源",
      info: () => `
符文炼金术是在拉中达到以法利等级 ${formatInt(2)} 解锁的机制。它解锁了
通过将符文精炼成与其类型相关的炼金资源来消耗符文的能力。你可以通过
在符文标签页中将献祭类型设置为“总是献祭”以外的类型，并执行正常的
献祭程序来精炼符文。
每种炼金资源都有独特的效果，你可以在炼金术标签页上查看。
<br>
<br>
除了所有其他属性外，符文现在还有一个<i>精炼值</i>，决定了
它值多少相关的炼金资源。此值基于符文等级的立方，按比例缩放
使得等级 ${formatInt(10000)} 的符文对应 ${formatInt(10000)} 炼金资源。然而，单个符文本身
在精炼时仅给予此值的 ${formatPercents(GlyphSacrificeHandler.glyphRefinementEfficiency)}。
这些是 ${formatPercents(1)} 稀有度符文的值；较低稀有度的符文仍然具有相同的上限，但给予
按比例较少的资源。例如，一个 ${formatPercents(0.5)} 稀有度的符文将只给予一半。
<br>
<br>
炼金资源不能无限获取；每个资源都有上限，基于你精炼过的该类型所有符文的最高精炼
值。例如，如果你精炼过的最高等级时间符文
是等级 ${formatInt(8000)}（精炼值：${formatInt(GlyphSacrificeHandler.levelRefinementValue(8000))}），那么无论
你精炼多少时间符文，你永远不能拥有超过
${formatInt(GlyphSacrificeHandler.levelRefinementValue(8000))} 的时间资源，直到你精炼另一个具有
更高精炼值的时间符文。
`,
      isUnlocked: () => Ra.unlocks.unlockGlyphAlchemy.canBeApplied,
      // Oh god I'm so sorry this is so many words
      tags: ["reality", "lategame", "endgame", "ra", "effarig", "alchemy", "power", "infinity", "time", "replication",
        "dilation", "cardinality", "eternity", "dimensionality", "inflation", "alternation", "synergism", "momentum",
        "decoherence", "force", "exponential", "uncountability", "boundless", "unpredictability", "multiversal",
        "reaction"],
      tab: "reality/alchemy"
    }, {
      name: "符文炼金术反应",
      info: () => `
炼金资源可以按特定组合结合在一起，以创建新的复合资源，这些资源
在特定的以法利等级解锁。资源每次现实结合一次，不受实时
放大影响。当你的试剂数量较高时，反应具有更高的产量，因此发生得更快。
复合资源的上限等于其所有试剂中最低的上限。为了发生反应，
所有试剂的当前数量必须大于生成的资源的当前数量。
<br>
<br>
反应速度与反应可用试剂的数量成正比，但只有高于
产品数量的试剂数量才有资格被使用。例如，如果你有 ${formatInt(10000)} 的所有试剂和
${formatInt(7500)} 的产品，只有 ${formatInt(2500)} 的试剂用于计算反应速度。
如果你改为拥有 ${formatInt(0)} 的产品，<i>所有</i>的试剂都可用于反应，并且它将
产生快 ${formatX(4)} 倍。最后，如果你拥有 ${formatInt(10000)} 的产品，那么没有试剂可以
使用，反应根本不会运行。
<br>
<br>
要激活或停用反应，请点击对应反应产品的圆圈。当反应可以
应用时，将显示从所有试剂到产品的移动线。如果连接是实线，那意味着
由于该试剂不足以获得更多产品（由于其上限），反应无法进行。
`,
      isUnlocked: () => Ra.unlocks.unlockGlyphAlchemy.canBeApplied,
      tags: ["reality", "lategame", "endgame", "ra", "effarig", "alchemy", "power", "infinity", "time", "replication",
        "dilation", "cardinality", "eternity", "dimensionality", "inflation", "alternation", "synergism", "momentum",
        "decoherence", "force", "exponential", "uncountability", "boundless", "unpredictability", "multiversal",
        "reaction"],
      tab: "reality/alchemy"
    }, {
      name: "虚数机器",
      info: () => `
一旦你能够在单个现实中获得至少 ${format(MachineHandler.baseRMCap)} 现实机器，你
解锁获得一种称为虚数机器的新资源的能力。现实机器也将被硬上限
在 ${format(MachineHandler.baseRMCap)}；你将无法获得超过此限制的更多 RM。
<br>
<br>
此外，你解锁虚数升级标签页，其中包含一组类似于现实升级的升级 -
每个升级都有一个你必须满足的条件才能解锁它，以及实际购买它的虚数机器成本。
前两行升级可以重复购买，而后三行是一次性升级。
<br>
<br>
你的 iM 数量受两件事影响：
<br>
<b>iM 上限</b> - 你可以拥有的最大 iM 数量，基于如果没有 RM 上限你将能够
获得的最高 RM 数量。这是持续更新的，因此如果你
超过了之前的最高无上限 RM 数量，它将立即增加。
<br>
<b>当前 iM</b> - 随着时间的推移，你当前的 iM 将被动地上升到你的 iM 上限，其方式随着你接近上限
呈指数减慢。默认情况下，iM 减慢的速率是你<i>缺少</i>的数量
（即你的上限减去你当前的数量）每分钟减半。此增长率不受任何
游戏速度修饰符的影响。
<br>
<br>
虚数机器升级将解锁最后两个天神。
`,
      isUnlocked: () => MachineHandler.isIMUnlocked,
      tags: ["imaginary", "machines", "reality", "lategame", "endgame"],
      tab: "reality/imag_upgrades"
    }, {
      name: "莱特拉，维度天神",
      alias: "Lai'tela",
      info: () => `
莱特拉是第六个天神，通过购买适当的虚数升级解锁，花费
${format(ImaginaryUpgrade(15).cost)} iM。
<br>
<br>
莱特拉给予一种称为暗物质的新货币，它基于你曾经拥有的最高暗物质数量
提供对连续体效果的倍率。暗物质由
暗物质维度产生，以类似于游戏中所有其他类型维度的级联方式产生。与其他
维度不同，只有四个暗物质维度而不是八个。你立即解锁第一个，
更高的维度通过虚数升级解锁。解锁维度时，你获得
${formatInt(1)} 个维度，并且在没有从下一层产生的情况下无法获得更多。
<br>
<br>
每个暗物质维度，在一定时间间隔后，生成两件事：暗物质或下一个更低的
暗物质维度和另一种称为暗能量的资源。每个间隔的暗物质和暗物质维度产量
等于你的暗物质倍率和维度数量的乘积，而
暗能量产量独立于你的维度数量。暗能量用于产生奇点，
它们有自己的游戏指南条目。
<br>
<br>
暗物质维度的间隔可以升级到最小 ${formatInt(10)} 毫秒，此时
你无法进一步升级间隔。你可以选择飞升达到
那一点的暗物质维度，这最初将暗物质获取乘以 ${formatInt(POWER_DM_PER_ASCENSION)}，暗能量乘以
${formatInt(POWER_DE_PER_ASCENSION)}。间隔乘以 ${formatInt(1200)}，但可以再次升级。
再次达到 ${formatInt(10)} 毫秒允许你再次飞升，如果你选择的话。
<br>
<br>
一个虚数升级允许你解锁称为湮灭的声望。湮灭重置你的暗物质
和暗物质维度，但增加一个适用于所有暗物质维度的
暗物质永久倍率。你可以多次湮灭；倍率的增加是加法叠加的，并且
不需要每次都为了更大的增加而湮灭。你必须至少拥有
${format(Laitela.annihilationDMRequirement)} 暗物质才能湮灭。
<br>
<br>
莱特拉有一个现实，它基于你在现实中的表现给予暗物质维度的暗物质力量一个倍率。
每当你在 ${formatInt(30)} 秒内完成现实时，你最高的可用
维度将在进一步尝试现实时被永久禁用。通过在 ${formatInt(30)} 秒内
完成现实八次来禁用所有维度也将给你一个 ${formatX(8)} 倍率
到暗能量获取。
<br>
<br>
莱特拉不会直接解锁下一个天神。
`,
      isUnlocked: () => Laitela.isUnlocked,
      tags: ["omsi", "reality", "dark", "matter", "dimensions", "lategame", "endgame", "ascend", "celestial"],
      tab: "celestials/laitela"
    }, {
      name: "连续体",
      info: () => `
当你解锁莱特拉时，你的反物质维度和 Tick 速度升级切换到一种新的生产模式
称为连续体，它给予与以前相同的效果，但允许购买部分维度或
Tick 速度升级。这些部分购买是免费给予的，无需花费你的反物质，并将提供
其倍率的适当部分。
<br>
<br>
反物质维度和 Tick 速度升级的购买按钮被修改为显示如果连续体不活动你将能够
购买的升级数量，并且购买计数随反物质平滑缩放。
例如，拥有 ${format(2e7)} 反物质将给你一个 ${format(5.3, 0, 1)} 的 Tick 速度连续体值
（初始成本 ${format(1e3)} 且增加 ${formatX(10)}），因为你可以购买它 ${formatInt(5)} 次并且
大约是通往下一个的 ${formatPercents(0.3)}。这种情况下的 Tick 速度连续体将
给予等于 (升级倍率)<sup>${format(5.3, 0, 1)}</sup> 的生产提升。
<br>
<br>
一些升级将直接倍增连续体值，这给予生产提升而不影响成本
缩放。但是，如果在自动购买器页面上禁用连续体，这些升级将不起作用，这可能导致
如果禁用则生产损失。连续体使你的反物质维度和 Tick 速度自动购买器过时，
因此只要连续体处于活动状态，这些自动购买器的所有相关自动购买器设置现在都在该标签页上隐藏。
`,
      // Apparently continuumUnlocked is really important in a lot of places and if we keep it unlocked
      // Things break, so we check for the iMU instead.
      isUnlocked: () => ImaginaryUpgrade(15).isBought,
      tags: ["continuum", "purchase", "reality", "lategame", "endgame"],
      tab: ""
    }, {
      name: "奇点",
      info: () => `
奇点是你利用莱特拉内的功能可以获得的一种新资源。
<br>
<br>
为了获得奇点，你需要达到 ${format(200)} 暗能量。当你这样做时，你可以选择
将所有暗能量凝聚成一个奇点，将其重置回零。超过此数量的任何额外暗能量
不保留，因此被浪费了。请注意，只有暗能量被重置，凝聚奇点时你的暗物质及其
维度的状态保持不变。
<br>
<br>
一旦你达到 ${formatInt(10)} 个奇点，你可以自由增加或减少凝聚奇点的
暗能量要求 ${formatInt(10)} 倍（最小为 ${format(200)}）。这增加或减少
从上限重置获得的奇点数量<i>超过</i> ${formatInt(10)} 倍，使得
如果你愿意等待，更高的上限更有价值。
<br>
<br>
奇点的目的是解锁奇点里程碑，其作用类似于永恒里程碑。解锁
这些里程碑只需要你达到指定的奇点总数；奇点不被消耗。
有三种类型的里程碑 - 一次性里程碑，可重复有限次数的里程碑，以及
可以无限重复的里程碑。
<br>
<br>
独立于里程碑类型，里程碑也有一个图标指示它们通常给予什么样的升级：
<br>
<b>ᛝ</b> 这些里程碑帮助特定于莱特拉的机制
<br>
<i class="fas fa-arrows-alt"></i> 这些里程碑让莱特拉中的资源影响游戏的其余部分
<br>
<i class="fas fa-compress-arrows-alt"></i> 这些里程碑基于莱特拉之外的东西改善莱特拉
`,
      isUnlocked: () => Laitela.isUnlocked,
      tags: ["reality", "lategame", "endgame", "laitela", "dark"],
      tab: ""
    }, {
      name: "佩尔，反物质天神",
      alias: "Pelle",
      info: () => `
当你购买最后一个虚数升级并解锁佩尔时，你解锁他们的标签页，在那里你可以找到一个按钮来
“毁灭你的现实”。为了毁灭你的现实，你必须完成此时可用的所有 ${formatInt(17)} 行成就，
并获得 ${formatInt(25000)} 个每种炼金资源。
<br>
<br>
${Pelle.isDoomed
    ? `毁灭你的现实将开始一个新的<b>毁灭现实</b>，将几乎整个游戏重置到
      现实，不给你当前现实进度的任何奖励。
      <br>
      <br>
      当你进入毁灭现实时，你保留统计标签页中一般和现实标题下的所有值
      以及你所有最好的挑战时间。在毁灭现实内部，多个升级、时间研究、挑战和
      天神奖励、特权和其他游戏机制被禁用或不给予奖励。
      你可以查看佩尔标签页中的“显示毁灭现实中的效果”以获取更多信息。
      <br>
      <br>
      残余是在世界末日重置中获得的一种新货币。残余获取基于你在所有毁灭现实中最好的反物质、
      无限点数和永恒点数。残余产生现实碎片，可以
      花费在佩尔升级上。
      <br>
      <br>
      佩尔升级可以分为两类。第一行的五个升级可以重复购买，
      但最终达到上限。它们给予游戏不同方面的提升，使毁灭现实内的
      进程更容易。
      <br>
      <br>
      底部行中的其他升级提供自动化和 QoL（生活质量）改进。从这些升级解锁的
      所有内容无法通过游戏中的常规方法解锁；例如，如果完成普通
      挑战将不会解锁自动购买器，因为它们都被锁定在佩尔升级之后。
      你可以切换升级上方的按钮以隐藏已购买的升级或点击
      <i class="fas fa-compress-arrows-alt"></i> 图标以折叠和隐藏整个面板。
      <br>
      <br>
      <b>快捷键：Z</b> 将尝试执行世界末日重置。`
    : "<span style='color: var(--color-bad);'><b>你必须毁灭你的现实才能阅读此条目的其余部分。</b></span>"
}
`,
      isUnlocked: () => Pelle.isUnlocked,
      tags: ["reality", "antimatter", "lategame", "endgame", "final", "hevipelle", "celestial", "doom"],
      tab: "celestials/pelle"
    }, {
      name: "佩尔打击",
      info: () => `
佩尔打击在毁灭现实中的不同事件中遇到。你已经通过
在毁灭现实中首次达到无限遇到了第一次佩尔打击。更多的打击最终通过进一步的进展发生。
每个佩尔打击都会削弱游戏的一个特定方面，可以通过点击打击名称来查看。
每个佩尔打击还解锁一个裂隙条。
<br>
<br>
裂隙条可以通过点击它们来在“闲置”和“填充”之间切换，尽管任何给定时间只能有两个裂隙
处于“填充”状态。当激活时，裂隙每秒消耗 ${formatInt(3)}% 的裂隙特定资源。每个
裂隙提供基于填充总量的裂隙特定效果。
${PelleStrikes.eternity.hasStrike
    ? `衰变/坍缩/混乱是一个例外，一旦你耗尽了总共
    ${formatPostBreak(DC.E2000)} 复制器，其效果就会达到上限。`
    : ""}
此外，每个裂隙提供三个里程碑奖励，用于将它们填充到一定百分比。
`,
      isUnlocked: () => PelleStrikes.infinity.hasStrike,
      tags: ["reality", "antimatter", "lategame", "endgame", "final", "pelle", "strike", "rift", "celestial"],
      tab: "celestials/pelle"
    }, {
      name: "星系生成器",
      info: () => `
当你达到 ${formatInt(100)}% 递归/分散/毁灭时，你解锁<b>星系生成器</b>，它可以
被动生成星系。生成的星系就像复制器星系和超光速星系一样，它们影响
Tick 速度就像它们是反物质星系一样，但它们不增加你下一个反物质星系的成本。你
还解锁了五个新升级。第一个升级增加生成星系的基础数量。其他四个
升级然后给予此基础数量一个倍率。前两个升级可以通过花费反物质和
生成星系来购买。复制器或超光速星系不能用于购买这些升级。
<br>
<br>
<b>星系生成器</b>有一个它可以生成的最大星系数量，一旦达到当前上限，只能通过耗尽
裂隙来增加。`,
      isUnlocked: () => Pelle.hasGalaxyGenerator,
      tags: ["reality", "antimatter", "lategame", "endgame", "final", "pelle", "galaxy",
        "galaxies", "generator", "celestial"],
      tab: "celestials/pelle"
    }
  ]
};

(function() {
  for (let i = 0; i < h2p.tabs.length; i++) {
    const tab = h2p.tabs[i];
    tab.id = i;
    if (tab.alias === undefined) tab.alias = tab.name;

    tab.searchTermsRelevance = {};
  }

  const searchIndex = {};

  const addTerm = (term, tab) => {
    let entry = searchIndex[term];
    if (entry === undefined) {
      entry = [];
      searchIndex[term] = entry;
    }
    if (entry.includes(tab)) return;
    entry.push(tab);
  };

  const addWord = (word, tab) => {
    const lowerCase = word.toLowerCase();
    for (let i = 0; i < lowerCase.length; i++) {
      const term = lowerCase.slice(0, i + 1);
      addTerm(term, tab);
      if (tab.searchTermsRelevance[term] === undefined) {
        tab.searchTermsRelevance[term] = ((i + 1) / lowerCase.length) ** 0.65;
      } else {
        tab.searchTermsRelevance[term] = Math.max(tab.searchTermsRelevance[term], ((i + 1) / lowerCase.length) ** 0.65);
      }
    }
  };

  const addPhrase = (phrase, tab) => {
    addWord(phrase, tab);
    for (const part of phrase.split(" ")) {
      addWord(part, tab);
    }
  };

  for (const tab of h2p.tabs) {
    addPhrase(tab.name, tab);
  }
  for (const tab of h2p.tabs) {
    for (const tag of tab.tags) {
      addPhrase(tag, tab);
    }
  }
  for (const tab of h2p.tabs) {
    addPhrase(tab.alias, tab);
  }

  const map2dToObject = function(arr, keyFun, valueFun) {
    const out = {};
    for (let idx1 = 0; idx1 < arr.length; idx1++) {
      for (let idx2 = 0; idx2 < arr[idx1].length; idx2++) {
        out[keyFun(arr[idx1][idx2], idx1, idx2)] = valueFun(arr[idx1][idx2], idx1, idx2);
      }
    }
    return out;
  };

  // Very suboptimal code coming up. If anybody has a better solution, PLEASE, implement it.
  const keyboardify = keybrd => map2dToObject(keybrd.split(",").map(str => str.split("")),
    key => key, (_key, x, y) => ({ x, y }));

  const qwerty = keyboardify(`1234567890,qwertyuiop,asdfghjkl,zxcvbnm`);
  const qwertz = keyboardify(`1234567890,qwertzuiop,asdfghjkl,yxcvbnm`);
  const azerty = keyboardify(`1234567890,azertyuiop,qsdfghjklm,wxcvbn`);
  const dvorak = keyboardify(`1234567890,'<>pyfgcrl,aoeuidhtns,;qjkxbmwvz`);
  const colemak = keyboardify(`1234567890,qwfpgjluy,arstdhneio,zxcvbkm`);
  const workman = keyboardify(`1234567890,qdrwbjfup,ashtgyneoi,zxmcvkl`);
  const qwprf = keyboardify(`1234567890,qwprfyukl,asdtghnioe,zxcvbjm`);

  const keyboards = [qwerty, qwertz, azerty, dvorak, colemak, workman, qwprf];

  const keyboardDist = function(a, b, keyboard) {
    const aPos = keyboard[a], bPos = keyboard[b];
    if (!aPos || !bPos) return 100;
    return Math.max(Math.abs(aPos.x - bPos.x), Math.abs(aPos.y - bPos.y));
  };

  // I copied this code based on OSA distance off wikipedia, with a few added changes.
  // The cost for "substitution" (third item of the first Math.min) is replaced from a static value
  // to a function which roughly estimates how likely the user is to mispress the key based on its
  // minimum distance from several common keyboard layouts.
  // I have no idea how the actual "distance" calculation works but as long as it does don't touch it.
  const howBadlyTypoedWithKeyboard = function(a, b, keyboard) {
    // If they're the same, skip all calculations
    if (a === b) return 0;
    const aLen = a.length;
    const bLen = b.length;
    // If they're way too different, don't bother
    if (Math.abs(aLen - bLen) > 3) return 100;
    // 2d Array with dimensions aLen + 1 x bLen + 1
    const d = new Array(aLen + 1).fill(0).map(() => new Array(bLen + 1).fill(0));

    for (let i = 0; i <= aLen; i++) {
      d[i][0] = i;
    }
    for (let i = 0; i <= bLen; i++) {
      d[0][i] = i;
    }

    for (let i = 1; i <= aLen; i++) {
      for (let j = 1; j <= bLen; j++) {
        const distance = keyboardDist(a[i - 1], b[j - 1], keyboard);
        const cost = distance === 0 ? 0 : 0.3 + distance * distance * 0.25;
        d[i][j] = Math.min(
          d[i - 1][j] + 0.55,
          d[i][j - 1] + 0.7,
          d[i - 1][j - 1] + cost
        );
      }
    }
    return d[aLen][bLen];
  };

  const howBadlyTypoed = function(a, b) {
    // Arbitrarily large number
    let minTypoed = 1e10;
    for (const keyboard of keyboards) {
      minTypoed = Math.min(minTypoed, howBadlyTypoedWithKeyboard(a, b, keyboard));
    }
    return minTypoed;
  };

  const specialChars = ["'", "\"", ",", "-", ".", "_"];

  const replaceSpecialChars = function(str) {
    let result = str;
    for (const i of specialChars) {
      result = result.replaceAll(i, "");
    }
    return result;
  };

  // There are a LOT of magic numbers in this code, mostly from arbitrary choices for "What number is large enough to
  // act as a placeholder for 'basically not found'?"
  // This will need some cleanup if possible.
  h2p.search = query => {
    const truncatedQuery = replaceSpecialChars(query);
    if (truncatedQuery === "") return h2p.tabs.map(x => ({ tab: x, relevance: 1.5 }));
    const searchTerms = truncatedQuery.toLowerCase().split(" ").filter(str => str !== "");

    // A higher "Relevance" value actually means it's further away from the search, important to keep in mind
    const relevances = Array.repeat(1e4, h2p.tabs.length);
    for (const searchWord of searchTerms) {
      const minimumRequirement = Math.min(searchWord.length - 0.9, 3) * 0.5;
      for (const searchIndexStr in searchIndex) {
        const typoThreshold = howBadlyTypoed(replaceSpecialChars(searchIndexStr), searchWord);
        if (typoThreshold < minimumRequirement) {
          for (const tab of searchIndex[searchIndexStr]) {
            const maxRelevance = tab.searchTermsRelevance[searchIndexStr];
            const decrease = Math.max(maxRelevance * 1.6 - 0.9, 0);
            relevances[tab.id] = Math.min(relevances[tab.id], Math.max(typoThreshold, 1 - maxRelevance) - decrease);
          }
        }
      }
    }
    const results = h2p.tabs.filter(x => relevances[x.id] < 0.9)
      .map(x => ({ tab: x, relevance: relevances[x.id] }));
    // Provide both the relevance and the tab itself

    // Sort by id first, then push more relevant results to top.
    results.sort((a, b) => a.tab.id - b.tab.id).sort((a, b) => a.relevance - b.relevance);
    // Provide both the relevance and the tab itself
    return results;
  };
}());
