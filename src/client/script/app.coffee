define ['require', 'cs!example-component'], (require, ExampleComponent) ->
	App = (name) ->
		if name == undefined
			return 'World'
		else
			return this.name

	App.prototype = {
		getMessage: () ->
			return 'Hello ' + this.name
		}
		
	return App

# define(function(require, exports, module) {
#   'use strict'