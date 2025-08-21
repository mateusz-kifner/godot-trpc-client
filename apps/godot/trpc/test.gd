extends Object
func query(input:String)->Signal:
	return TRPCClient.query("test.hello", input)
