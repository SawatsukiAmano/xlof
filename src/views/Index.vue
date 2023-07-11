<script lang="ts" setup>
import i18n from "@plugins/i18n/i18n.ts";
import { ref, shallowRef } from 'vue'
import indexPage from "@components/index/Index.vue"
import newsPage from "@components/news/News.vue"
import aboutusPage from "@components/aboutus/Aboutus.vue"
import productPage from "@components/product/Product.vue"
import 'element-plus/theme-chalk/display.css'
import headerLink from "@views/units/HeaderLink.vue"
import footerLink from "@views/units/FooterLink.vue"
// import indexPNG from "@assets/img/index.png"

//头
const elHeaderStyle = ref()
//头背景div
const rowIndexMenuMain = ref()
//头导航栏div
const rowIndexMenuSub = ref()

const headFontClass = ref('foucs-head-font')


const menuRef = ref()
const spanI18n = ref()
//切换body
let currentTab = shallowRef(indexPage)
const changePage = (page: any) => {
    currentTab.value = page//切换body页面
}
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
    //切换header样式
    // switch (key) {
    // case '1':
    //     rowIndexMenuMain.value.style.height = '500px'
    //     rowIndexMenuMain.value.style.backgroundColor = 'red'
    //     rowIndexMenuMain.value.style.backgroundImage = 'url(../src/assets/img/index.png)'
    //     console.log("INDEX")
    //     break;
    // case '2':
    //     rowIndexMenuMain.value.style.height = '300px'
    //     rowIndexMenuMain.value.style.backgroundColor = 'yellow'
    //     rowIndexMenuMain.value.style.backgroundImage = indexPage
    //     console.log("PRODUCT")
    //     break;
    // case '3':
    //     break;
    // case '4':
    //     break;
    // }
}

//鼠标移入导航栏
const changeIndexMenuStyleIn = () => {
    headFontClass.value = 'foucs-head-font'
    //header背景颜色
    rowIndexMenuSub.value.style.backgroundColor = 'white'
    //设置渐变
    rowIndexMenuSub.value.style.transition = 'all 0.7s cubic-bezier(0.23,1,0.32,1) 0s'
    //设置下边框
    // rowIndexMenuSub.value.style.borderBottom='0.3px solid #a7a3a3'
}
//鼠标移出导航栏
const changeIndexMenuStyleOut = () => {
    headFontClass.value = 'unfoucs-head-font'
    rowIndexMenuSub.value.style.backgroundColor = 'transparent'
    rowIndexMenuSub.value.style.transition = 'all 0.7s cubic-bezier(0.23,1,0.32,1) 0s'
}



i18n.global.locale = "zh"

</script>

<template>
    <div class="common-layout fillc">
        <headerLink />
        <el-container>
            <el-header ref="elHeaderStyle" class="fillc">
                <div ref="rowIndexMenuMain">

                    <!--手机导航栏-->
                    <el-row class="center hidden-sm-and-up">
                        <el-col :xs="20">
                            1
                        </el-col>
                        <el-col :xs="4">
                            2
                        </el-col>
                    </el-row>

                    <!--pc导航栏-->
                    <div ref="rowIndexMenuSub">
                        <el-row v-on:mouseover="changeIndexMenuStyleIn()" v-on:mouseout="changeIndexMenuStyleOut()"
                            class="center hidden-xs-only">
                            <el-col :lg="6" :md="5" :sm="7">
                                <span class="title-font ">
                                    {{ $t('title_py') }}&nbsp;
                                    {{ $t('title') }}
                                </span>
                            </el-col>
                            <el-col :lg="12" :md="14" :sm="10">
                                <el-menu ref="menuRef" class="center" style=" background-color: transparent"
                                    :default-active="activeIndex" mode="horizontal" @select="handleSelect">
                                    <el-menu-item :class="headFontClass" index="1" @click="changePage(indexPage)"> {{
                                        $t('menu.index')
                                    }}</el-menu-item>
                                    <el-menu-item index="2" :class="headFontClass" @click="changePage(productPage)"> {{
                                        $t('menu.product')
                                    }}</el-menu-item>
                                    <el-menu-item index="3" :class="headFontClass" @click="changePage(newsPage)"> {{
                                        $t('menu.news')
                                    }}</el-menu-item>
                                    <el-menu-item index="4" :class="headFontClass" @click="changePage(aboutusPage)"> {{
                                        $t('menu.aboutus')
                                    }}</el-menu-item>
                                </el-menu>
                            </el-col>

                            <!--国际化-->
                            <el-col :lg="6" :md="5" :sm="7">
                                <el-dropdown size="large ">
                                    <span ref="spanI18n" :class="headFontClass" class="center el-dropdown-link" style="cursor:pointer;">
                                        {{ $t('i18n') }}
                                        <el-icon class="el-icon--right">
                                            <arrow-down />
                                        </el-icon>
                                    </span>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                            <el-dropdown-item
                                                @click="i18n.global.locale = 'en'">Global-English</el-dropdown-item>
                                            <el-dropdown-item
                                                @click="i18n.global.locale = 'zh'">China-简体中文</el-dropdown-item>
                                            <el-dropdown-item
                                                @click="i18n.global.locale = 'ja'">Japan-日本語</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </el-col>
                        </el-row>
                    </div>

                    <el-row>
                        <!--导航简介-->
                        <!-- <el-image :src="indexPNG" fit="fill" /> -->
                    </el-row>
                </div>

            </el-header>

            <el-main>
                <component :is="currentTab" class="tab"></component>
            </el-main>
            <el-footer>
                <footerLink />
            </el-footer>
        </el-container>
    </div>
</template>


<style lang="scss" scoped>
.foucs-head-font {
    color: black;
    transition:'all 0.7s cubic-bezier(0.23,1,0.32,1) 0s';
    font-family:Arial,微软雅黑;
    font-size: 18px;
}

.unfoucs-head-font {
    color: rgb(255, 255, 255);
    transition:'all 0.7s cubic-bezier(0.23,1,0.32,1) 0s';
    // font-weight: bold;
    font-family:Arial,微软雅黑;
    font-size: 18px;
}

.fillc {
    margin: 0;
    padding: 0;
}

.title-font {
    font-size: 32px;
    text-align: center;
    line-height: 2;
    color: #fff;
    font-weight: bolder;
    text-shadow: 0 0 4px #32003c;
}

.el-menu {
    border: 0 !important;
}

.center {
    text-align: center;
    /* 垂直居中 */
    align-items: center;
    /* 水平居中 */
    justify-content: center;
}

.el-row {
    background-color: transparent;
}
</style>