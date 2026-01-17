import { DC } from "../../constants";

export const effarigUnlocks = {
  adjuster: {
    id: 0,
    description: "可调整的符文等级因子权重",
    cost: 1e7,
    onPurchased: () => {
      Effarig.quotes.unlockWeights.show();
      ui.view.tabs.reality.openGlyphWeights = true;
      Tab.reality.glyphs.show();
    }
  },
  glyphFilter: {
    id: 1,
    description: "符文过滤",
    cost: 2e8,
    onPurchased: () => {
      Effarig.quotes.unlockGlyphFilter.show();
      player.reality.showSidebarPanel = GLYPH_SIDEBAR_MODE.FILTER_SETTINGS;
    }
  },
  setSaves: {
    id: 2,
    description: "符文预设",
    cost: 3e9,
    onPurchased: () => {
      Effarig.quotes.unlockSetSaves.show();
      player.reality.showSidebarPanel = GLYPH_SIDEBAR_MODE.SAVED_SETS;
    }
  },
  run: {
    id: 3,
    description: "埃法利希的现实",
    cost: 5e11,
    onPurchased: () => {
      Effarig.quotes.unlockRun.show();
    }
  },
  infinity: {
    id: 4,
    label: "无限",
    get description() {
      return ` 复制器上限乘以一个基于无限次数的值
        无限次数增加你的最大复制器星系数量
        在埃法利希的现实中，基础无限点数获取上限为 ${format(DC.E200)}
        在埃法利希的现实中，每种类型的无限点数倍率上限为 ${format(DC.E50)}`;
    },
  },
  eternity: {
    id: 5,
    label: "永恒",
    get description() {
      return ` 永恒产生无限次数
        在埃法利希的现实中，无限点数不再受任何限制
        你已解锁无名者`;
    },
  },
  reality: {
    id: 6,
    label: "现实",
    get description() {
      return " 你已解锁埃法利希符文（你最多只能装备一个，且某些效果是互斥的）";
    },
  }
};
