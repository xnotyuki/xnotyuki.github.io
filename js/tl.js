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

/*
TILE MAPS
*/

function tileclicker(){
    var hiders = document.querySelectorAll('[data-toggle2="tab"]'); /* i am the pinnacle of creativity */

    for (var i = 0; i < hiders.length; i++) {
        hiders[i].addEventListener('click', function() {
            var tabs = document.querySelectorAll('.tab2'); /* .tab2 to prevent conflict with button toggle if both are present in the same page */
            for(var j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove('active');
            }
            var $target = document.querySelector(this.getAttribute('data-target2'));
            $target.classList.add('active');
        });
    }
}


var thetiles = document.getElementsByClassName('ihatetiles');
for (var i = thetiles.length - 1; i >= 0; i--) {
		var currenttile;
		thetiles[i].onclick=function(){
    	if(currenttile){
    		currenttile.classList.remove("tilehighlight");
    	}
      this.classList.add("tilehighlight");
      currenttile=this;
    }
    
};
