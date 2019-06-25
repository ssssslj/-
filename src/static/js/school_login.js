function isEmpty(){  
	
    var _form = document.form;   

    if(_form.name.value=="" ){   
        alert("用户名或密码不能为空!");           
        return false;   
    }
	if(_form.password.value==""){   
	    alert("用户名或密码不能为空!");           
	    return false;   
	}
	return false;
}