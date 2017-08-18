define([], function() {
    'use strict';

    require.config({
        baseUrl: 'script',
        packages: [{
                name: 'cs',
                location: '../../../bower_components/require-cs',
                main: 'cs'
            },
            {
                name: 'coffee-script',
                location: '../../../bower_components/coffeescript',
                main: 'extras/coffee-script'
            }
        ],
        nodeRequire: require,
        shim: {
            "Vue": { "exports": "Vue" }
        },
        paths: {
            'Vue': 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.1/vue.min',
            "vue": 'https://rawgit.com/edgardleal/require-vue/master/dist/require-vuejs',
            'vue-router': '../../../bower_components/vue-router/dist/vue-router'
        }
    });

    requirejs(['Vue', 'vue-router'], function(Vue, VueRouter) {
        Vue.use(VueRouter);
        var asyncComp = function(componentName) {
            return function(resolve) {
                require([componentName], resolve);
            };
        };

        var router = new VueRouter({
            routes: [
                { path: "/", component: asyncComp("vue!/views/home") },
                { path: "/html", component: asyncComp("vue!/views/component.html") },
                { path: "/vue", component: asyncComp("vue!/views/component") },
                { path: "/async", component: asyncComp("vue!/views/async") },
            ]
        });

        new Vue({
            data: {
                started: new Date()
            },
            router: router,
            el: "#app"
        });
    });

});