define [], () ->
	ExampleComponent = (name) ->
		if name == undefined
			this.name = 'World'
		else
			this.name = name

	ExampleComponent.prototype = {
		getMessage: () ->
			return 'Hello ' + this.name
		}
		
	return ExampleComponent