<template>
  <div class="sidebar" style=" ">
    <ul class="side-menu">
        <li><router-link :to="{ name: 'Products-Page'}">Products</router-link></li>
        <li><router-link :to="{ name: 'Create-Products'}">Add Product</router-link></li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'SideBar-Page'

}
</script>

<style></style>