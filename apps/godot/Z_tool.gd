@tool
extends Node
class_name Z_tool

func check(schema, obj):
	var result:ZodotResult = schema.parse(obj)
	if (!result.ok()):
		push_error(result.error)
