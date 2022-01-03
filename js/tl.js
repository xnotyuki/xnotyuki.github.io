var togglers = document.querySelectorAll('[data-toggle="tab"]');

for (var i = 0; i < togglers.length; i++) {
    togglers[i].addEventListener('click', function() {
        var tabs = document.querySelectorAll('.tab');
        for(var j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('active');
        }
        var $target = document.querySelector(this.getAttribute('data-target'));
        $target.classList.add('active');
    });
}

var yourbuttons = document.getElementsByClassName('buttons');
for (var i = yourbuttons.length - 1; i >= 0; i--) {
		var currentbtn;
		yourbuttons[i].onclick=function(){
    	if(currentbtn){
    		currentbtn.classList.remove("highlight");
    	}
      this.classList.add("highlight");
      currentbtn=this;
    }
    
};