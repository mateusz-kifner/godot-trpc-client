extends Control


@onready
var TRPCErrorDialogScene = preload("res://TRPCErrorDialog.tscn") 

func _on_test_pressed():
	var http = HTTPRequest.new()
	add_child(http)
	http.request_completed.connect(_http_request_completed)
	var err = http.request("http://localhost:3000/api/trpc/test.test2?batch=1&input={\"0\":{\"json\":null,\"meta\":{\"values\":[\"undefined\"]}}}")
	if err != OK:
		push_error("An error occurred in the HTTP request.")
	
	
	

func _http_request_completed(result: int, response_code: int, headers: PackedStringArray, body: PackedByteArray):
	var json = JSON.new()
	json.parse(body.get_string_from_utf8())
	var response = json.get_data()
	if response[0].has("error"):
		api._error_stack.append({
			"error": "Error " + str(response[0]["error"]["json"]["data"]["httpStatus"]) + " : " + response[0]["error"]["json"]["data"]["code"] + "\n" + response[0]["error"]["json"]["message"],
			"stack": response[0]["error"]["json"]["data"]["stack"]
		})
		api._error_stack_length_chnaged.emit(len(api._error_stack)-1)

	#print(response[0]["error"]["json"])
	#$MarginContainer/VBoxContainer/RichTextLabel.append_text(response[0]["error"]["json"]["data"]["stack"])
	#print(result,response_code,headers,response)
