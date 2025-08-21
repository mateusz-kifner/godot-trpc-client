extends Object

static func ok(data):
	
	if typeof(data) != TYPE_ARRAY or data.size() <1:
		return false
	if typeof(data[0]) != TYPE_DICTIONARY:
		return false
	if data[0].has("error"):
		return false
	return true
