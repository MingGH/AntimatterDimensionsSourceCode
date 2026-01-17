export const eternityMilestones = {
  autobuyerIPMult: {
    eternities: 1,
    reward: "解锁无限点数倍率自动购买器",
    pelleUseless: true
  },
  keepAutobuyers: {
    eternities: 2,
    reward: "永恒开始时，所有普通挑战已完成，拥有所有普通自动购买器，且无限已打破"
  },
  autobuyerReplicantiGalaxy: {
    eternities: 3,
    reward: "解锁复制器星系自动购买器"
  },
  keepInfinityUpgrades: {
    eternities: 4,
    reward: "永恒开始时拥有所有无限升级",
    givenByPelle: () => PelleUpgrade.keepInfinityUpgrades.isBought,
    pelleUseless: true
  },
  bigCrunchModes: {
    eternities: 5,
    reward: "解锁更多大坍缩自动购买器选项"
  },
  autoEP: {
    eternities: 6,
    reward: () => {
      const EPmin = getOfflineEPGain(TimeSpan.fromMinutes(1).totalMilliseconds);
      const em200 = getEternitiedMilestoneReward(TimeSpan.fromHours(1).totalMilliseconds,
        EternityMilestone.autoEternities.isReached).gt(0);
      const em1000 = getInfinitiedMilestoneReward(TimeSpan.fromHours(1).totalMilliseconds,
        EternityMilestone.autoInfinities.isReached).gt(0);
      if (!player.options.offlineProgress) return `此里程碑将提供离线 EP 生成，但离线进度当前已禁用`;
      const effectText = (em200 || em1000) ? "未激活" : `当前 ${format(EPmin, 2, 2)} EP/分钟`;
      return `离线时，每分钟获得你之前永恒中最佳每分钟永恒点数的 ${formatPercents(0.25)}
        (${effectText})`;
    },
    activeCondition: () => (player.options.offlineProgress
      ? `只要其他离线里程碑（${formatInt(200)} 或 ${formatInt(1000)}）均未激活，此项即激活`
      : ""),
  },
  autoIC: {
    eternities: 7,
    reward: `你解锁无限挑战时立即完成它们，
      并保留维度献祭自动购买器`,
    pelleUseless: true
  },
  keepBreakUpgrades: {
    eternities: 8,
    reward: "永恒开始时拥有所有打破无限升级",
    givenByPelle: () => PelleUpgrade.keepBreakInfinityUpgrades.isBought,
    pelleUseless: true
  },
  autobuyMaxGalaxies: {
    eternities: 9,
    reward: "解锁购买最大反物质星系自动购买器模式"
  },
  unlockReplicanti: {
    eternities: 10,
    reward: "开始时已解锁复制器",
    givenByPelle: () => PelleUpgrade.replicantiStayUnlocked.isBought,
    pelleUseless: true
  },
  autobuyerID1: {
    eternities: 11,
    reward: "解锁第 1 无限维度自动购买器",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID2: {
    eternities: 12,
    reward: "解锁第 2 无限维度自动购买器",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID3: {
    eternities: 13,
    reward: "解锁第 3 无限维度自动购买器",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID4: {
    eternities: 14,
    reward: "解锁第 4 无限维度自动购买器",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID5: {
    eternities: 15,
    reward: "解锁第 5 无限维度自动购买器",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID6: {
    eternities: 16,
    reward: "解锁第 6 无限维度自动购买器",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID7: {
    eternities: 17,
    reward: "解锁第 7 无限维度自动购买器",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID8: {
    eternities: 18,
    reward: "解锁第 8 无限维度自动购买器",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autoUnlockID: {
    eternities: 25,
    reward: "达到无限维度时自动解锁它们"
  },
  unlockAllND: {
    eternities: 30,
    reward: "开始时所有反物质维度可购买"
  },
  replicantiNoReset: {
    eternities: 40,
    reward: `复制器星系不再重置反物质、反物质维度、
      Tick 速度、维度献祭或维度提升`,
    pelleUseless: true
  },
  autobuyerReplicantiChance: {
    eternities: 50,
    reward: "解锁复制器几率升级自动购买器",
    givenByPelle: () => PelleUpgrade.replicantiAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerReplicantiInterval: {
    eternities: 60,
    reward: "解锁复制器间隔升级自动购买器",
    givenByPelle: () => PelleUpgrade.replicantiAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerReplicantiMaxGalaxies: {
    eternities: 80,
    reward: "解锁最大复制器星系升级自动购买器",
    givenByPelle: () => PelleUpgrade.replicantiAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerEternity: {
    eternities: 100,
    reward: "解锁永恒自动购买器"
  },
  autoEternities: {
    eternities: 200,
    reward: () => {
      if (!player.options.offlineProgress) return `此里程碑将离线生成永恒，但离线
        进度当前已禁用`;
      const eternities = getEternitiedMilestoneReward(TimeSpan.fromHours(1).totalMilliseconds,
        player.eternities.gte(200));
      // As far as I can tell, using templates here as Codefactor wants would lead to nested templates,
      // which seems messy to say the least.
      const realTime = PlayerProgress.seenAlteredSpeed() ? "实际时间" : "";
      // eslint-disable-next-line prefer-template
      return `离线时，以你最快${realTime}永恒速率的 ${formatPercents(0.5)} 获得永恒 ` +
        (eternities.gt(0) ? `(当前 ${format(eternities, 2, 2)}/小时)` : "(未激活)");
    },
    activeCondition: () => (player.options.offlineProgress
      ? `必须在所有挑战和膨胀之外，且永恒自动购买器必须设置为 0 EP 时永恒。
        此里程碑效果上限为 ${formatInt(33)} 毫秒。`
      : ""),
      pelleUseless: true
  },
  autoInfinities: {
    eternities: 1000,
    reward: () => {
      if (!player.options.offlineProgress) return `此里程碑将离线生成无限，但离线
        进度当前已禁用`;
      const infinities = getInfinitiedMilestoneReward(TimeSpan.fromHours(1).totalMilliseconds,
        player.eternities.gte(1000));
      // eslint-disable-next-line prefer-template
      return `离线时，获得等于你本次永恒最佳无限/小时的 ${formatPercents(0.5)}
        的无限 ` +
        (infinities.gt(0) ? `(当前 ${format(infinities, 2, 2)}/小时)` : "(未激活)");
    },
    activeCondition: () => (player.options.offlineProgress
      ? `必须在普通/无限挑战之外，且在 EC4 和 EC12 之外，
        大坍缩自动购买器必须开启并设置为时间模式且小于等于 ${formatInt(5)} 秒，
        且永恒自动购买器必须关闭。`
      : ""),
      pelleUseless: true
  }
};
