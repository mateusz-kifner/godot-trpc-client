extends Node

var TRPCError = preload("res://addons/trpc_plugin/TRPCError.gd")
var TRPCCodes = preload("res://addons/trpc_plugin/TRPCCodes.gd")

var regex = RegEx.new()
var error = regex.compile("^[a-zA-Z0-9.-_ ]+$")

func is_path_good(path):
	var result = regex.search(path)
	return result != null

var initial_query_config = {
	"enabled":true,
	#placeholderData: "world",
	"refetchInterval": false,
	"refetchIntervalInBackground": false,
	"refetchOnMount": true,
	"refetchOnReconnect": true,
	"refetchOnWindowFocus": true,
	#"onSuccess", fn 
	#"onError", fn
	#"onSettled", fn
	"retry": 3, # false = never, true = forever, number = amount of tries
	"retryDelay":1000,
	"staleTime":0,
	"cacheTime": 5 * 60 * 1000,
	
	"initialData": null
  }

var initial_state = {
	"status": "loading", # "loading" | 'success' | 'error'
	"retries": 0,
	"staleAt": 0,
	"cacheExpiresAt": 0,
	"dataUpdatedAt": 0,
	"errorUpdatedAt": 0,
	"errorUpdateCount": 0,
	#"failureCount":0,
}

var _cache = {}
#
#
#

var _base_url = "http://localhost:3000/api/trpc"
signal cache_change
signal trpc_request_changed

func _init(config = {}):
	if config.has("base_url"):
		_base_url = config.base_url
		
var http:HTTPRequest
func _ready() -> void:
	http = HTTPRequest.new()
	add_child(http)
	
func query(path:String, params, config = null):
	if typeof(params) == TYPE_STRING:
		params = {"0":{"json":params}}
	if (!is_path_good(path)):
		printerr("Path '"+path+"' is not correct")
		return
	
	if !path.begins_with("/"):
		path = "/" + path
	

	
	var input = JSON.stringify(params)
	var url = _base_url + path + "?batch=1"
	#&input=" + input
	print(url)
	var error = http.request(url)
	if error != OK:
		push_error("HTTP Request Error: ", error)
	var sig_req_completed = Signal(trpc_request_changed)
	var lambda = func(result, response_code, headers, body, http_node):
		if result != HTTPRequest.RESULT_SUCCESS:
			print(result,":", response_code,":", headers,":", body,":", http_node)
			return 
		var response = JSON.parse_string(body.get_string_from_utf8())
		if TRPCError.ok(response):
			sig_req_completed.emit(response)
		else:
			printerr(TRPCCodes.TRPC_ERROR_CODES_BY_NUMBER[int(response[0]["error"]["json"]["code"])])
			printerr(response[0]["error"]["json"]["code"])
	http.request_completed.connect(lambda.bind(http))
	
	return sig_req_completed

func _on_request_completed(result, response_code, headers, body, http_node):
	var response = JSON.parse_string(body.get_string_from_utf8())
	#if response_code == 200:
		#emit_signal("query_success", response)
	#else:
		#emit_signal("query_error", response)
