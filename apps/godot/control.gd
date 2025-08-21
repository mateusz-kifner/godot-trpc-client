extends Control


func _ready() -> void:
	var res = await api.test.query("0",{})
	#var body_string = res[3].get_string_from_utf8()
	#var json = JSON.parse_string(body_string)
	print(res)
  
