import { DC } from "../constants";

export const catchupResources = [
  {
    name: "反物质维度",
    id: 0,
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `每一个反物质维度都会持续生产下一阶的维度。最低阶的反物质维度生产反物质。`
  },
  {
    name: "Tick 速度升级",
    id: 1,
    openH2pEntry: "Tickspeed",
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `Tick 速度升级让反物质维度生产其他反物质维度或反物质的速度变快，就像时间流逝得更快一样。`
  },
  {
    name: "自动购买器",
    id: 2,
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `自动购买器是游戏内置的一项功能，当你有足够的资源时，它会自动为你购买反物质维度的升级。`
  },
  {
    name: "维度提升",
    id: 3,
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `当最高阶的反物质维度达到一定数量时，你可以通过重置所有反物质维度和 Tick 速度来获得维度提升。它们会为你的反物质维度提供倍率加成。`
  },
  {
    name: "反物质星系",
    id: 4,
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `通过重置反物质维度和维度提升可以获得反物质星系。它们会以复利的方式提高 Tick 速度升级的效果。`
  },
  {
    name: "无限",
    id: 5,
    requiredStage: PROGRESS_STAGE.EARLY_INFINITY,
    description: () => `无限是第一个主要的重置层级。达到 ${format(Number.MAX_VALUE, 2)} 反物质允许你重置之前的所有进度，以换取解锁新的内容和资源。`
  },
  {
    name: "无限点数",
    id: 6,
    openH2pEntry: "Infinity",
    requiredStage: PROGRESS_STAGE.EARLY_INFINITY,
    description: `无限点数是完成首次无限后的主要资源。它们可以用于购买在无限重置后依然保留的功能。`
  },
  {
    name: "普通挑战",
    id: 7,
    openH2pEntry: "Normal Challenges",
    requiredStage: PROGRESS_STAGE.EARLY_INFINITY,
    description: () => `挑战要求你在更困难的条件下达到 ${format(Number.MAX_VALUE, 2)} 反物质。完成挑战可以升级你的自动购买器。`
  },
  {
    name: "打破无限",
    id: 8,
    requiredStage: PROGRESS_STAGE.BREAK_INFINITY,
    description: () => `将你的大坍缩自动购买器升级到最大，允许你突破 ${format(Number.MAX_VALUE, 2)} 反物质的限制，反物质越多，获得的无限点数也越多。`
  },
  {
    name: "无限维度",
    id: 9,
    requiredStage: PROGRESS_STAGE.BREAK_INFINITY,
    description: `无限维度的生产方式类似于反物质维度，呈阶梯式。最低阶的无限维度生产无限能量，它能为所有反物质维度提供巨大的倍率加成。`
  },
  {
    name: "无限挑战",
    id: 10,
    requiredStage: PROGRESS_STAGE.BREAK_INFINITY,
    description: () => `无限挑战是新的挑战，其反物质目标高于 ${format(Number.MAX_VALUE, 2)}。完成它们可以获得升级和产量加成。`
  },
  {
    name: "复制器",
    id: 11,
    requiredStage: PROGRESS_STAGE.REPLICANTI,
    description: () => `复制器是一种随时间自我复制的资源，能为所有无限维度提供倍率加成。当达到 ${format(Number.MAX_VALUE, 2)} 复制器时，可以将它们重置为 ${formatInt(1)} 以获得一个额外的星系，该星系不会增加反物质星系的成本。它们在每次无限后也会重置。`
  },
  {
    name: "永恒",
    id: 12,
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: () => `永恒是第二个主要的重置层级。达到 ${format(Number.MAX_VALUE, 2)} 无限点数允许你重置之前的所有进度，以获取新的内容和资源。`
  },
  {
    name: "永恒点数",
    id: 13,
    openH2pEntry: "Eternity",
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: `永恒点数是完成首次永恒后的主要资源，其数量基于你完成永恒时的无限点数。`
  },
  {
    name: "时间研究",
    id: 14,
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: `时间研究是一组类似于技能树的升级，每次永恒后可以免费重新分配，没有资源损失。树的某些部分有限制，禁止你同时选择特定的研究。`
  },
  {
    name: "永恒里程碑",
    id: 15,
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: `永恒里程碑是内置的自动化和便利功能，只需完成更多次永恒即可解锁。解锁它们不需要消耗任何资源。`
  },
  {
    name: "时间维度",
    id: 16,
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: `时间维度也以阶梯方式相互生产，最低阶生产时间碎片。时间碎片为你提供额外的 Tick 速度升级，且不会增加用反物质购买的 Tick 速度升级的成本。`
  },
  {
    name: "永恒挑战",
    id: 17,
    requiredStage: PROGRESS_STAGE.ETERNITY_CHALLENGES,
    description: `永恒挑战是修改后的永恒，必须达到一定的无限点数目标才能完成。每个挑战最多可以完成五次，每次重复难度都会增加，奖励也会越来越强大。`
  },
  {
    name: "时间膨胀",
    id: 18,
    requiredStage: PROGRESS_STAGE.EARLY_DILATION,
    description: () => `时间膨胀是一种修改后的永恒，其中 Tick 速度和所有维度的倍率都会被严重削减。完成膨胀后的永恒会给予超光速粒子。`
  },
  {
    name: "超光速粒子",
    id: 19,
    openH2pEntry: "Time Dilation",
    requiredStage: PROGRESS_STAGE.EARLY_DILATION,
    description: () => `超光速粒子是一种无法刷取的资源，要求你在膨胀后的永恒中获得更多的反物质以增加其数量。超光速粒子生产膨胀时间。`
  },
  {
    name: "现实",
    id: 20,
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: () => `现实是第三个也是最后一个主要的重置层级。达到 ${format(DC.E4000)} 永恒点数让你有权重置之前的所有进度，以换取解锁新内容和获取新资源。`
  },
  {
    name: "现实机器",
    id: 21,
    openH2pEntry: "Reality",
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `现实机器是完成首次现实后的主要资源。它们基于完成现实时的永恒点数给予。`
  },
  {
    name: "特权",
    id: 22,
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `特权是类似于永恒里程碑的可解锁功能，主要侧重于便利性和自动化。它们使用特权点数购买，特权点数在每次现实后获得。`
  },
  {
    name: "符文",
    id: 23,
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `符文是可装备的升级，只能在现实之间卸下。每次现实你都可以从多个新的随机符文中选择一个接收；可选符文的平均质量取决于你在该次现实中某些资源达到的高度。`
  },
  {
    name: "自动机",
    id: 24,
    openH2pEntry: "Automator Overview",
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `自动机是一个内置功能，使用一种脚本语言，允许你在拥有足够的升级和特权后，完全自动地完成现实。`
  },
  {
    name: "黑洞",
    id: 25,
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `黑洞以周期性的循环让整个游戏运行得更快。这会影响到目前为止游戏中的所有内容，效果类似于让游戏开启等量的时间。`
  },
  {
    name: "特蕾莎",
    id: 26,
    requiredStage: PROGRESS_STAGE.TERESA,
    description: `特蕾莎是第一位天体，她拥有更困难的现实，根据完成情况给予符文牺牲巨大的加成。她解锁的升级专注于更容易地测试和自动化现实。`
  },
  {
    name: "埃法利希",
    id: 27,
    requiredStage: PROGRESS_STAGE.EFFARIG,
    description: `埃法利希是第二位天体，其现实限制了你的符文并具有不断增加的削弱，但每达到一个新的重置层级都会给予奖励。她解锁的升级专注于自动选择和过滤你收到的大量符文，使用一种名为遗物碎片的新资源购买。`
  },
  {
    name: "无名者",
    id: 28,
    openH2pEntry: "Nameless Ones",
    requiredStage: PROGRESS_STAGE.ENSLAVED,
    description: `无名者是第三位天体，其现实极其严酷，有一长串的削弱，但为那些能找出通关方法的人解锁超立方体。他们还修改你的黑洞以允许其储存时间。`
  },
  {
    name: "储存时间",
    id: 29,
    openH2pEntry: "Nameless Ones",
    requiredStage: PROGRESS_STAGE.ENSLAVED,
    description: `你的黑洞有两种储存时间的方式。充能允许你保留加速的时间并在之后作为一次性的跳跃释放。储存真实时间让你使用实际时间来模拟现实（给予该现实的资源但有倍率加成），或作为离线进度的替代。`
  },
  {
    name: "超立方体",
    id: 30,
    requiredStage: PROGRESS_STAGE.ENSLAVED,
    description: `无限维度不能无限购买，除了第 8 维度外，所有维度都有购买次数的硬性上限。每个超立方体都会大幅永久增加这个上限。`
  },
  {
    name: "V",
    id: 31,
    requiredStage: PROGRESS_STAGE.V,
    description: `V 是第四位天体，拥有一个类似于特蕾莎现实的修改版现实，但只有在其中达到特定的资源里程碑时才给予奖励。她给予一种名为空间定理的新资源，允许你在没有路径限制的情况下购买额外的时间研究。`
  },
  {
    name: "拉",
    id: 32,
    requiredStage: PROGRESS_STAGE.RA,
    description: `拉是第五位天体，拥有一个修改后的现实，根据你在其中的资源总量生产一种名为记忆碎片的资源。她主要专注于获取前四位天体的旧升级和主题并加以改进，以及填补自动化和便利性方面的一些最后空白。`
  },
  {
    name: "记忆",
    id: 33,
    openH2pEntry: "Ra",
    requiredStage: PROGRESS_STAGE.RA,
    description: `拉控制着前四位天体，根据记忆碎片数量随时间生产记忆。这些记忆用于提升前几位天体的等级，当达到特定等级时提供升级。`
  },
  {
    name: "充能无限升级",
    id: 34,
    openH2pEntry: "Ra",
    requiredStage: PROGRESS_STAGE.RA,
    description: `特蕾莎的记忆允许你充能你的无限升级，保持类似的效果但显著增强它们。哪些升级被充能只能在现实之间更改。`
  },
  {
    name: "符文炼金术",
    id: 35,
    requiredStage: PROGRESS_STAGE.RA,
    description: `埃法利希的记忆解锁符文炼金术，它使用修改版的符文牺牲提供许多微小的加成。通过这种方式放弃符文获得的资源必须在反应中结合在一起，以完全升级它们的效果。`
  },
  {
    name: "增幅黑洞",
    id: 36,
    openH2pEntry: "Ra",
    requiredStage: PROGRESS_STAGE.RA,
    description: `无名者的记忆增幅充能，使得储存的游戏时间多于实际经过的游戏时间。释放现在也可以重复并自动进行。`
  },
  {
    name: "更难的 V",
    id: 37,
    openH2pEntry: "Ra",
    requiredStage: PROGRESS_STAGE.RA,
    description: `V 的记忆解锁了 V 原始现实的修改版本，具有更难的目标和一套名为三元研究的新时间研究。`
  },
  {
    name: "想象机器",
    id: 38,
    requiredStage: PROGRESS_STAGE.IMAGINARY_MACHINES,
    description: () => `想象机器是在达到 ${format(DC.E1000)} 现实机器时解锁的新资源。它们被动生产，上限取决于你在最远的现实中本应获得的现实机器数量。`
  },
  {
    name: "莱特拉",
    id: 39,
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `莱特拉是第六位天体，其现实具有修改后的完成条件，并根据你达到它的速度给予相应的奖励。她解锁的新功能主要与一种名为暗物质的资源有关。`
  },
  {
    name: "连续体",
    id: 40,
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `连续体是一种修改后的生产方式，允许你的反物质维度像购买了部分升级一样进行生产，而无需实际购买它们。`
  },
  {
    name: "暗物质维度",
    id: 41,
    openH2pEntry: "Lai'tela",
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `暗物质维度是阶梯式生产，基于 Tick 系统运行，而不是连续运行。最低阶生产暗物质，所有阶层都生产暗能量。`
  },
  {
    name: "维度重置机制",
    id: 42,
    openH2pEntry: "Lai'tela",
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `暗物质维度可以通过两种方式重置。湮灭重置所有维度以换取对所有暗物质维度的永久倍率加成。飞升增加产量但重置单个维度的间隔。`
  },
  {
    name: "奇点",
    id: 43,
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `暗能量可以用来生产奇点，奇点根据其总量提供加成。生产奇点时，任何超过凝聚阈值的额外暗能量都会被浪费。`
  },
  {
    name: "佩里",
    id: 44,
    requiredStage: PROGRESS_STAGE.PELLE,
    description: `佩里是第七位也是最后一位天体，她永久地毁灭你的游戏，将你投入一个极其困难且无法逃脱的修改版现实中。`
  },
  {
    name: "末日",
    id: 45,
    openH2pEntry: "Pelle",
    requiredStage: PROGRESS_STAGE.PELLE,
    description: `末日是佩里特有的重置，你可以随时执行。这会将你的进度重置到毁灭现实的开始，但会给予残骸，残骸生产现实碎片。`
  },
  {
    name: "佩里打击和裂隙",
    id: 46,
    openH2pEntry: "Pelle Strikes",
    requiredStage: PROGRESS_STAGE.PELLE,
    description: `在佩里中达到特定的进度里程碑后，可能会发生打击，永久地对毁灭现实施加另一个削弱。伴随每次打击的是裂隙，这是一种允许你消耗不同资源以换取加成的机制。这些是永久的，在末日后依然保持解锁。`
  },
];
