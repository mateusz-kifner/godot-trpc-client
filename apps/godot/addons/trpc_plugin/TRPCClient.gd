extends Node


var _base_url = "http://localhost:3000/api/trpc"


func _init(config = {}):
	if config.has("base_url"):
		_base_url = config.base_url

func query(path:String, params):
	if typeof(params) == TYPE_STRING:
		params = {"0":{"json":params}}
	if !path.begins_with("/"):
		path = "/" + path
	
	var http = HTTPRequest.new()
	add_child(http)
	#http.request_completed.connect(Callable(self, "_on_request_completed").bind(http))
	var input = JSON.stringify(params)
	var url = _base_url + path + "?batch=1&input=" + input
	print(url)
	var error = http.request(url)
	if error != OK:
		push_error("HTTP Request Error: ", error)
	return http.request_completed

func _on_request_completed(result, response_code, headers, body, http_node):
	var response = JSON.parse_string(body.get_string_from_utf8())
	if response_code == 200:
		emit_signal("query_success", response)
	else:
		emit_signal("query_error", response)
	http_node.queue_free()
