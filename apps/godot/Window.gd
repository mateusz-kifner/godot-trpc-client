extends Window

@export
var error = "" : set = _set_error
@export
var stacktrace = "": set = _set_stacktrace

func _set_error(val):
	error = val
	%error.text = val
func _set_stacktrace(val):
	stacktrace = val
	%stacktrace.text = val


func _on_show_stack_trace_pressed():
	%PanelContainer.show()
	%ShowStackTrace.hide()


func _on_close_requested():
	hide()

func _on_show_errors_pressed():
	popup_centered()
