extends Control
const TRPC = preload("res://trpc/trpc.gd")

func _ready() -> void:
	var trpc =TRPC.new()
	trpc.test._query_connect(_res)
	
	
func _res():
	print("hello")
