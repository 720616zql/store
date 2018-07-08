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
        <!-- <el-aside class="aside" width="200px">Aside</el-aside> -->
        <el-aside class="aside" width="200px">
            <el-menu
                default-active="/users"
                class="menu"
                unique-opened="ture"
                router="ture">
                <el-submenu index="1">
                    <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>用户管理</span>
                    </template>
                    <el-menu-item index="/users">
                        <template slot="title">
                        <i class="el-icon-menu"></i>
                            用户列表
                        </template>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>权限管理</span>
                    </template>
                    <el-menu-item index="/roles">
                        <template slot="title">
                        <i class="el-icon-menu"></i>
                            角色列表
                        </template>
                    </el-menu-item>
                    <el-menu-item index="/rights">
                        <template slot="title">
                        <i class="el-icon-menu"></i>
                            权限列表
                        </template>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>商品管理</span>
                    </template>
                    <el-menu-item index="3-1">
                        <template slot="title">
                        <i class="el-icon-menu"></i>
                            商品列表
                        </template>
                    </el-menu-item>
                    <el-menu-item index="3-2">
                        <template slot="title">
                        <i class="el-icon-menu"></i>
                            分类参数
                        </template>
                    </el-menu-item>
                    <el-menu-item index="3-3">
                        <template slot="title">
                        <i class="el-icon-menu"></i>
                            商品分类
                        </template>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>订单管理</span>
                    </template>
                    <el-menu-item index="4-1">
                        <template slot="title">
                        <i class="el-icon-menu"></i>
                            订单列表
                        </template>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>数据统计</span>
                    </template>
                    <el-menu-item index="5-1">
                        <template slot="title">
                        <i class="el-icon-menu"></i>
                            数据报表
                        </template>
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
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
    .aside .menu {
        height: 100%;
    }
    .main {
        background-color: #e9eef3;
    }
</style>
