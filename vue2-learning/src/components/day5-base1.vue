<template>
  <div>
    <slot name="header">default header</slot>
    <br>
    <slot name="content">default content</slot>
    <br>
    <slot name="footer">default footer</slot>
  </div>
</template>

<script>
export default {
  name: 'Day5Base1'
}
</script>
