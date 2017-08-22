define [], () ->
	ExampleComponent = (name) ->
		console.log 'example-component called constructor' + " " + new Date()
		if name == undefined
			this.name = 'World'
		else
			this.name = name

	ExampleComponent.prototype = {
		getMessage: () ->
			return 'Hello ' + this.name
		}
		
	return ExampleComponent