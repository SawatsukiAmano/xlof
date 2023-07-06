<script lang="ts" setup>
import i18n from "@plugins/i18n/i18n.ts";
import { ref } from 'vue'

i18n.global.locale = "zh"
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <el-row class="center">
                    <el-col :span="6">
                        {{ $t('title_py') }}&nbsp;
                        {{ $t('title') }}
                    </el-col>
                    <el-col :span="12">
                        <el-menu class="center" :router="true" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
                            <el-menu-item index="1"> {{ $t('menu.index') }}</el-menu-item>
                            <el-menu-item index="2"> {{ $t('menu.product') }}</el-menu-item>
                            <el-menu-item index="3"> {{ $t('menu.news') }}</el-menu-item>
                            <el-menu-item index="4"> {{ $t('menu.aboutus') }}</el-menu-item>
                        </el-menu>
                    </el-col>
                    <el-col :span="6">
                        <el-dropdown size="large " >
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
            <el-main>Main111</el-main>
            <el-footer>Footer222</el-footer>
        </el-container>
    </div>
</template>




<style lang="scss" scoped>
.cc{
background-color: red;
}
.center{
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