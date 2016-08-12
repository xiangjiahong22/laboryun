//common plugins
(function($){
	$().ready(function(){
		$.fn.extend({
			//toggle hide
			//## .toggleCon ##
			//## .toggle - .hide ##

			//##<div class="designCenter toggleCon">
			//##	<div class="toggle"></div>
			//##	<div class="toggle hide"></div>
			//##	<div class="toggle hide"></div>
			//##</div>
			toggleHide:function(options){
				var defaults = {
	                hash: false,
	                parentEleName:''
	            };
	            var options = $.extend(defaults, options);
	           
				$('a',this).on('click',function(){
					$(this).siblings('a').removeClass('active');
					$(this).addClass('active');
					var _thisIndex=$(this).index();
					
					$('.'+options.parentEleName).find('.toggle').addClass('hide');
					$('.'+options.parentEleName).find('.toggle').eq(_thisIndex).removeClass('hide');
					
				})
			}

		})
	})
})(jQuery);
