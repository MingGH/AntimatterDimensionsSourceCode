export const teresa = {
  unlocks: {
    run: {
      id: 0,
      price: 1e14,
      description: "解锁特蕾莎的现实。",
      onUnlock: () => Teresa.quotes.unlockReality.show(),
    },
    epGen: {
      id: 1,
      price: 1e18,
      description: "解锁永恒点数被动生成。",
      isDisabledInDoomed: true
    },
    effarig: {
      id: 3,
      price: 1e24,
      description: "解锁埃法利希，远古遗物之神煞。",
      onUnlock: () => Teresa.quotes.effarig.show(),
    },
    shop: {
      id: 2,
      price: 1e21,
      description: "解锁特蕾莎的特权点数商店。",
    },
    undo: {
      id: 4,
      price: 1e10,
      description: "解锁“撤销”装备符文的功能。",
      isDisabledInDoomed: true
    },
    startEU: {
      id: 5,
      price: 1e6,
      description: "你在开始现实时解锁所有永恒升级。",
      isDisabledInDoomed: true,
      onUnlock: () => {
        for (const id of [1, 2, 3, 4, 5, 6]) player.eternityUpgrades.add(id);
      },
    }
  }
};
