@tool
extends Control
#const TRPC = preload("res://trpc/trpc.gd")

var UserSchema = Z.schema({
  "name": Z.string().non_empty().maximum(5),
  "age": Z.integer().minimum(12),
  "is_tall": Z.boolean()
})

# Our data we want to validate
var user = {
  "name": "Jason",
  "age": "dada",
  "is_tall": true
}

var  z_tool = Z_tool.new().check(UserSchema,user)


func _ready() -> void:
	pass
	
	
#func _res():
	#print("hello")
