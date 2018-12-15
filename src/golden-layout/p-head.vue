<template>
	<div>Title: {{title}}</div>
</template>
<script>

export default {
    name: 'p-head',
    props: {
        title: String
    },
    methods: {
        created: function() {
            console.assert(!!this.$parent.$parent, 'Vue object linked to root');
        }
    }
}
</script>
