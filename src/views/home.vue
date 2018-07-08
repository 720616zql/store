<template>
    <el-container class="container">
    <!-- <el-header class="header">Header</el-header> -->
    <!-- 头部 栅格系统 element 24 -->
    <el-header class="header">
        <el-row>
            <el-col class="logo" :span="4">此处有logo图片</el-col>
            <el-col class="center" :span="19"><h2>电商后台管理系统</h2></el-col>
            <el-col class="logout" :span="1"><a href="#">退出</a></el-col>
        </el-row>
    </el-header>
    <el-container>
        <el-aside class="aside" width="200px">Aside</el-aside>
        <el-main class="main">Main</el-main>
    </el-container>
    </el-container>
</template>

<script>
export default {

};
</script>

<style>
    .container {
        height: 100%;
    }
    .header {
        background-color: #b3c0d1;
        padding: 0;
    }
    .header .logo {
        text-align: center;
        line-height: 60px;
    }
    .header .center {
        text-align: center;
        line-height: 60px;
        color: #ffffff;
    }
    .header .logout {
        /* text-align: center; */
        line-height: 60px;
    }
    .header .logout a {
        text-decoration: none;
        color: red;
    }
    .aside {
        background-color: #d3dce6;
    }
    .main {
        background-color: #e9eef3;
    }
</style>
