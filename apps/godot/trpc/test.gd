extends Node

func _init():
	pass

var _trpc_client_instance = null

func connect_to_trpc_client(client_instance):
	_trpc_client_instance = client_instance

var query = {
	"connect": Callable(self, "_query_connect")
}

func _query_connect(params = {}):
	return _trpc_client_instance.query("/test.query", params)
