@tool
extends EditorPlugin

func _enter_tree():
	# Initialization of the plugin goes here.
	# Add the custom type to the editor.
	add_custom_type("TRPCClient", "Node", preload("res://addons/trpc_plugin/TRPCClient.gd"), preload("res://icon.svg")) # You'll need an icon

func _exit_tree():
	# Clean-up of the plugin goes here.
	# Remove the custom type to clean up the editor.
	remove_custom_type("TRPCClient")
