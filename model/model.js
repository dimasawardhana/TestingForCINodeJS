module.exports = function(){
	return {
		toUser : function(id,name,username,status = true){
			return {
				id ,name,username,status
			}
		},
		getId : function(user){
			return user.id;
		},
		getName : function(user){
			return user.name;
		},
		getUsername : function(user){
			return user.username;
		},
		getStatus : function(user){
			return user.status;
		}
	}
		}