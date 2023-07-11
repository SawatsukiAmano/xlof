<template>
    <!--图标栏-->
    <div
        style="padding-top: 1.5px; background-color: rgba(8, 8, 8, 0.8); border-bottom:1.5px solid #a7a3a3; text-align: right;">
        <el-popover title="抖音" trigger="hover" width="255">
            <template #reference>
                <a href="https://www.douyin.com/user/MS4wLjABAAAAbRNr--Am8NylBFhEqTdjgPq6PPei9kkD_xIVvqg2S3A"
                    target="_blank" style="cursor:pointer;"><img src="@assets/logo/douyin.svg"
                        style="height: 14px;  margin-bottom: 1px;" alt="抖音" />&nbsp;&nbsp;&nbsp;</a>
            </template>
            <template #default>
                <el-image style="width: 233px; height: 300px" :src="dyJPG" fit="scale-down" />
            </template>
        </el-popover>&nbsp;


        <el-popover placement="top-start" title="tiktok" trigger="hover">
            <template #reference>
                <a href="" target="_blank" style="cursor:pointer;"><img src="@assets/logo/tt.svg"
                        style="height: 15px; margin-top: 1px;" alt="tiktok" />&nbsp;&nbsp;&nbsp;</a> </template>

        </el-popover>&nbsp;
        <el-popover placement="top-start" title="微信 wechat" trigger="hover">
            <template #reference>
                <a href="" target="_blank" style="cursor:pointer;"><img src="@assets/logo/vx.svg" style="height: 17px;"
                        alt="微信" />&nbsp;&nbsp;&nbsp;</a> </template>
            <template #default>
                <el-image :src="vxJPG" fit="contain" />
            </template>
        </el-popover>&nbsp;

        <a href="mailto:xjh@xinlon.ltd" target="_blank" style="cursor:pointer;"><img src="@assets/logo/mail.svg"
                style="height: 17px;" alt="e-mail" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
    </div>
</template>

<script lang="ts" setup>
import vxJPG from '@assets/img/vx.jpg'
import dyJPG from '@assets/img/dy.jpg'
</script>