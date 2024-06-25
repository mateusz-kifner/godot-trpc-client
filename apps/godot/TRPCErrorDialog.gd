extends Control

var current = 0 : set = _set_current

func _ready():
	api._error_stack_length_chnaged.connect(_set_current)

func _on_prev_pressed():
	if current-1 >=0 :
		current-=1
	_on_window_about_to_popup()


func _on_next_pressed():
	if current + 1 < len(api._error_stack):
		current +=1
	_on_window_about_to_popup()


func _on_window_about_to_popup():
	%ErrorLabel.text = "Error " + str(current+1) + "/" + str(len(api._error_stack))
	if len(api._error_stack) ==0:
		return
	%Window.error = api._error_stack[current]["error"]
	%Window.stacktrace =  api._error_stack[current]["stack"]
	%PanelContainer.hide()
	%ShowStackTrace.show()

func _set_current(val):
	current=val
	$ShowErrors/Label.show()
	$ShowErrors/Label.text = str(current+1)
