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
            },
            {
                name: 'Vue',
                location: '../../../bower_components/vue',
                main: 'dist/vue.min.js'
            },
            {
                name: 'vue',
                location: '../../../bower_components/require-vuejs',
                main: 'dist/require-vuejs.min.js'
            },
            {
                name: 'vue-router',
                location: '../../../bower_components/vue-router',
                main: 'dist/vue-router.min.js'
            }
        ],
        nodeRequire: require,
        paths: {}
    });

    require(['Vue', 'vue-router', 'cs!app'], function(Vue, VueRouter, app) {
        Vue.use(VueRouter);
        var asyncComp = function(components) {
            var componentsArray = [];
            if (typeof components === 'string') {
                componentsArray = [components];
            } else if (typeof components === 'object') {
                componentsArray = components;
            }

            return function(resolve) {
                require(componentsArray, resolve);
            };
        };

        var router = new VueRouter({
            routes: [
                { path: "/", component: asyncComp("vue!/views/home") },
                { path: "/html", component: asyncComp("vue!/views/component.html") },
                { path: "/vue", component: asyncComp("vue!/views/component") },
                { path: "/async", component: asyncComp(["vue!/views/async", "cs!/script/example-component"]) },
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