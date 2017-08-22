<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                This component was loaded with an async 
            </p>
            <a class="card-header-icon">
                <span class="icon">
                    <i class="fa fa-angle-down"></i>
                </span>
            </a>
        </header>
        <div class="card-content">
            <div class="content">
                This component was loaded at: 
                <small v-text="loaded"></small>
            </div>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
        </footer>
    </div>
</template>

<script>
define(['Vue', 'cs!example-component'], function(Vue, example) {
    var result = {
        template: template,
        data: function() {
            var time = new Date();
            return {
                loaded: time
            };
        },
        mounted: function() {
            console.log('mounted');
        },
        activated: function() {
            var t = new example('hellohello');
            console.log(t.getMessage() + " " + new Date());
        }
    };

    Vue.component("vue-vue", result);

    return result;
});
</script>
