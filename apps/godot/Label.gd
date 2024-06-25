extends Label

#@onready
#var test_handlers = api.test.test.query()

func _ready():
	#api.test.test.query()
	#print(a.has_method("query"))
	var test = {
		"A": func(): 
			print("test"),
		"B": func():
			print("test2")
	}
	test["A"].call()
	
