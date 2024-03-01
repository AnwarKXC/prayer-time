<template>

</template>
  
<script>
export default {
  props: {
    iplaceholder: {
      type: [String, Number],
      default: "",
    },
    iClass: {
      type: [String, Number],
      default: "",
    },
    iType: {
      type: Text,
      default: () => 'text'
    },
    iValue:{
      type:Text,
      default:()=> ''
    },
    keypresFunc: {
      type: Function,  // Use 'Function' instead of 'Text' for type
      default: () => { }
    }
  },
};
</script>
  