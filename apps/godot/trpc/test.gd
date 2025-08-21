extends Object
func query(input:String,config=null)->Signal:
	return TRPCClient.query("test.test.hello", input,config)
