<script lang="ts" setup>
import i18n from "@plugins/i18n/i18n.ts";
import { ref,shallowRef } from 'vue'
import indexPage from "@components/index/Index.vue"
import newsPage from "@components/news/News.vue"
import aboutusPage from "@components/aboutus/Aboutus.vue"
import productPage from "@components/product/Product.vue"
let currentTab = shallowRef(indexPage)
const changePage = (page:any) => {
  currentTab.value = page
}


i18n.global.locale = "zh"
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

</script>

<template>
    <div class="common-layout">
        <el-container>
            <div style="height: auto;"></div>

            <el-header>
                <el-row class="center">
                    <el-col :span="6">
                        <span class="title-font">
                            {{ $t('title_py') }}&nbsp;
                            {{ $t('title') }}
                        </span>
                    </el-col>
                    <el-col :span="12">
                        <el-menu class="center"  :default-active="activeIndex" mode="horizontal"
                            @select="handleSelect">
                            <el-menu-item index="1" @click="changePage(indexPage)"> {{ $t('menu.index') }}</el-menu-item>
                            <el-menu-item index="2"  @click="changePage(productPage)"> {{ $t('menu.product') }}</el-menu-item>
                            <el-menu-item index="3"  @click="changePage(newsPage)"> {{ $t('menu.news') }}</el-menu-item>
                            <el-menu-item index="4"  @click="changePage(aboutusPage)"> {{ $t('menu.aboutus') }}</el-menu-item>
                        </el-menu>
                    </el-col>
                    <el-col :span="6">
                        <el-dropdown size="large ">
                            <span class="center el-dropdown-link">
                                {{ $t('i18n') }}
                                <el-icon class="el-icon--right">
                                    <arrow-down />
                                </el-icon>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>Global-English</el-dropdown-item>
                                    <el-dropdown-item>China-简体中文</el-dropdown-item>
                                    <el-dropdown-item>Japan-日本語</el-dropdown-item>
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
    text-align: center;
    font-size: 32px;
    line-height: 2;
    color: #fff;
    font-weight: bolder;
    text-shadow: 0 0 4px #32003c;
}

.cc {
    background-color: red;
}

.center {
    text-align: center;
    /* 垂直居中 */
    align-items: center;
    /* 水平居中 */
    justify-content: center;
}

.el-header {
    background-color: rgb(206, 253, 253);
}

.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}

.el-main {
    background-color: rgb(250, 252, 135);
}

.el-footer {
    background-color: red;
}
</style>