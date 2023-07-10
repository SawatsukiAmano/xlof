<script lang="ts" setup>
import i18n from "@plugins/i18n/i18n.ts";
import { ref, shallowRef } from 'vue'
import indexPage from "@components/index/Index.vue"
import newsPage from "@components/news/News.vue"
import aboutusPage from "@components/aboutus/Aboutus.vue"
import productPage from "@components/product/Product.vue"
import 'element-plus/theme-chalk/display.css'
let currentTab = shallowRef(indexPage)
const changePage = (page: any) => {
    currentTab.value = page
}


i18n.global.locale = "zh"

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

</script>

<template>
    <div class="common-layout" style="margin: 0;padding: 0; ">
        <div
            style="padding-top: 1.5px; background-color: rgba(8, 8, 8, 0.8); border-bottom:1.5px solid rgb(0, 0, 0); text-align: right;">
            <a title="抖音 douyin" href="https://www.douyin.com/user/MS4wLjABAAAAbRNr--Am8NylBFhEqTdjgPq6PPei9kkD_xIVvqg2S3A" target="_blank" style="cursor:pointer;"><img src="@assets/logo/douyin.svg"
                    style="height: 14px;  margin-bottom: 1px;" alt="抖音" />&nbsp;&nbsp;&nbsp;</a>&nbsp;
            <a title="tiktok"  href="" target="_blank" style="cursor:pointer;"><img src="@assets/logo/tt.svg"
                    style="height: 15px; margin-top: 1px;" alt="tiktok" />&nbsp;&nbsp;&nbsp;</a>&nbsp;
            <a title="微信 wechat"  href="src/assets/img/vx.jpg" target="_blank" style="cursor:pointer;"><img src="@assets/logo/vx.svg"
                    style="height: 17px;" alt="微信" />&nbsp;&nbsp;&nbsp;</a>&nbsp;
            <a title="mail 邮件" href="mailto:xjh@xinlon.ltd" target="_blank" style="cursor:pointer;"><img src="@assets/logo/mail.svg"
                    style="height: 17px;" alt="e-mail" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
        </div>
        <el-container>
            <div style="height: auto;"></div>
            <el-header>
                <el-row class="center hidden-sm-and-up">
                    <el-col :xs="20">
                        1
                    </el-col>
                    <el-col :xs="4">
                        2
                    </el-col>
                </el-row>

                <el-row class="center hidden-xs-only">
                    <el-col :lg="6" :md="5" :sm="7">
                        <span class="title-font ">
                            {{ $t('title_py') }}&nbsp;
                            {{ $t('title') }}
                        </span>
                    </el-col>
                    <el-col :lg="12" :md="14" :sm="10">
                        <el-menu class="center" style=" background-color: transparent" :default-active="activeIndex"
                            mode="horizontal" @select="handleSelect">
                            <el-menu-item index="1" @click="changePage(indexPage)"> {{ $t('menu.index') }}</el-menu-item>
                            <el-menu-item index="2" @click="changePage(productPage)"> {{ $t('menu.product')
                            }}</el-menu-item>
                            <el-menu-item index="3" @click="changePage(newsPage)"> {{ $t('menu.news') }}</el-menu-item>
                            <el-menu-item index="4" @click="changePage(aboutusPage)"> {{ $t('menu.aboutus')
                            }}</el-menu-item>
                        </el-menu>
                    </el-col>

                    <el-col :lg="6" :md="5" :sm="7">
                        <el-dropdown size="large ">
                            <span class="center el-dropdown-link" style="cursor:pointer;">
                                {{ $t('i18n') }}
                                <el-icon class="el-icon--right">
                                    <arrow-down />
                                </el-icon>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item @click="i18n.global.locale = 'en'">Global-English</el-dropdown-item>
                                    <el-dropdown-item @click="i18n.global.locale = 'zh'">China-简体中文</el-dropdown-item>
                                    <el-dropdown-item @click="i18n.global.locale = 'ja'">Japan-日本語</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </el-col>
                </el-row>


            </el-header>

            <el-main>
                <component :is="currentTab" class="tab"></component>
            </el-main>
            <el-footer>yejiao1</el-footer>
        </el-container>
    </div>
</template>




<style lang="scss" scoped>
.title-font {
    font-size: 32px;
    text-align: center;
    line-height: 2;
    color: #fff;
    font-weight: bolder;
    text-shadow: 0 0 4px #32003c;
}


.center {
    text-align: center;
    /* 垂直居中 */
    align-items: center;
    /* 水平居中 */
    justify-content: center;
}



.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}

//test

.el-header {
    // background-color: rgb(206, 253, 253);
}

.cc {
    background-color: red;
}

.el-main {
    background-color: rgb(250, 252, 135);
}

.el-footer {
    background-color: red;
}
</style>