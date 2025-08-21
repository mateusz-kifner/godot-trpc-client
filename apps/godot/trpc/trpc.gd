extends Node
#const TRPCClient = preload("res://addons/trpc_plugin/TRPCClient.gd")
const TestRoute = preload("res://trpc/test.gd")

#var client = TRPCClient.new()
var test = TestRoute.new()
#
#func _init(config = {}):
	#client = TRPCClient.new(config)
	#test.connect_to_trpc_client(client)
#
#
#var _error_stack = []
#
#
#signal _error_stack_length_chnaged(val:int)
