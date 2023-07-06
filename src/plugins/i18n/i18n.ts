//https://juejin.cn/post/7029609093539037197
import { createI18n } from "vue-i18n";
import zh from "@plugins/i18n/langs/zh.ts";
import en from "@plugins/i18n/langs/en.ts";
import ja from "@plugins/i18n/langs/ja.ts";


// 通过选项创建 VueI18n 实例
const i18n = createI18n({
  locale: "zh", // 设置地区
  messages: {
      zh,
      en,
      ja
  },
});

export default i18n;
