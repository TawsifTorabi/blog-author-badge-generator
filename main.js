/* Coded By TawsifTorabi */
/* fb.com/tawsif.torabi */
/* blog.grplusbd.net */


			//copy to clipboard
			var copyTextareaBtn = document.getElementById('copycode');	 //copy to clipboard button declared as variable
	
			copyTextareaBtn.addEventListener('click', function(event)	//Copy to clipboard button event listener onclick
			{
			  var copyTextarea = document.getElementById('gencode'); 	//textarea declared as variable
			  copyTextarea.select(); 									//select all text in textarea

			  try {
				var successful = document.execCommand('copy'); 			//copy selected text declared as variable
				var msg = successful ? 'successful' : 'unsuccessful'; 	//if unsucsessful, console log data
				console.log('Copying text command was ' + msg); 		//if successful, console log message
				copymsg(); 												//trigger successful messege to user
			  } catch (err) {
				console.log('Oops, unable to copy'); 					//if failed, console log data
			  }
			});
			
			

			//Notification Messages Timeouts
				function copymsg(){
				document.getElementById('copymsg').style.display = "inline"; 
				setInterval(function(){document.getElementById('copymsg').style.display = "none";},3000); 	//hide message
				}
				function genmsg(){
				document.getElementById('genmsg').style.display = "inline"; 
				setInterval(function(){document.getElementById('genmsg').style.display = "none";},3000);	//hide message
				}	
				function imageerror(){
				document.getElementById('imgmsg').style.display = "inline"; 
				setInterval(function(){document.getElementById('imgmsg').style.display = "none";},3000);	//hide message
				}
				
			//generate code
			function gencode(){
				var code = document.getElementById('content').innerHTML;
				document.getElementById('gencode').innerHTML = code;
			}
			
			//Variable Input Functions
			function imageurl(){
				var url = document.getElementById('imageurl').value;
				document.getElementById('ico').src = url;
			}
			
			function nameinput(){
				var url = document.getElementById('nameinput').value;
				document.getElementById('name').innerHTML = url;
			}
			
			function jobinput(){
				var url = document.getElementById('jobinput').value;
				document.getElementById('job').innerHTML = url;
			}
			
			function social(){
				var url = document.getElementById('social').value;
				var first = 'https://www.facebook.com/plugins/follow.php?href=https%3A%2F%2Fwww.facebook.com%2F';
				var second = '&width=64&height=65&layout=box_count&size=small&show_faces=true&appId=164293520647951';
				var newton = first + url + second ;
				document.getElementById('floatfollow').src = newton;
			}
			

			
			function bgcolor(){
				var input = document.getElementById('bgcolor').value;
				document.getElementById('grplusbd_floating_likebox').style.backgroundColor = input;
			}

			function namecolor(){
				var input = document.getElementById('namecolor').value;
				document.getElementById('name').style.color = input;
			}

			function jobcolor(){
				var input = document.getElementById('jobcolor').value;
				document.getElementById('job').style.color = input;
			}

			function chngposition(){
				var input = document.getElementById('positionofbox').value;
				var doc = document.getElementById('grplusbd_floating_likebox');
				
				//top right
				if(input == 1){
					doc.style.top = ('0px');
					doc.style.right = ('0px');
					doc.style.bottom = null;
					doc.style.borderBottomLeftRadius = '10px';
					doc.style.borderTopLeftRadius = null;	
					doc.style.borderBottomRightRadius = null;
					doc.style.left = null;
				}

				//top center
				if(input == 2){
					doc.style.top = ('0px');
					doc.style.right = ('38%');
					doc.style.left = ('38%');
					doc.style.bottom = null;
					doc.style.borderBottomRightRadius = '10px';
					doc.style.borderBottomLeftRadius = '10px';
					doc.style.borderTopLeftRadius = null;	
				}

				//top left
				if(input == 3){
					doc.style.top = ('0px');
					doc.style.right = null;
					doc.style.left = ('0px');
					doc.style.bottom = null;
					doc.style.borderBottomRightRadius = '10px';
					doc.style.borderBottomLeftRadius = null;
					doc.style.borderTopRightRadius = null;	
					doc.style.borderTopLeftRadius = null;	
				}

				//center right
				if(input == 4){
					doc.style.top = '40%';
					doc.style.right = '0px';
					doc.style.left = null;
					doc.style.bottom = '40%';
					doc.style.borderBottomRightRadius = null;
					doc.style.borderBottomLeftRadius = '10px';
					doc.style.borderTopRightRadius = null;	
					doc.style.borderTopLeftRadius = '10px';	
				}

				//center left
				if(input == 5){
					doc.style.top = '40%';
					doc.style.right = null;
					doc.style.left = '0px';
					doc.style.bottom = '40%';
					doc.style.borderBottomRightRadius = '10px';
					doc.style.borderBottomLeftRadius = null;
					doc.style.borderTopRightRadius = '10px';	
					doc.style.borderTopLeftRadius = null;	
				}

				//bottom center
				if(input == 6){
					doc.style.top = null;
					doc.style.right = '40%';
					doc.style.left = '40%';
					doc.style.bottom = '0px';
					doc.style.borderBottomRightRadius = null;
					doc.style.borderBottomLeftRadius = null;
					doc.style.borderTopRightRadius = '10px';	
					doc.style.borderTopLeftRadius = '10px';	
				}

				//bottom left
				if(input == 7){
					doc.style.top = null;
					doc.style.right = null;
					doc.style.left = '0px';
					doc.style.bottom = '0px';
					doc.style.borderBottomRightRadius = null;
					doc.style.borderBottomLeftRadius = null;
					doc.style.borderTopRightRadius = '10px';	
					doc.style.borderTopLeftRadius = null;	
				}

				//bottom right
				if(input == 8){
					doc.style.top = null;
					doc.style.right = '0px';
					doc.style.left = null;
					doc.style.bottom = '0px';
					doc.style.borderBottomRightRadius = null;
					doc.style.borderBottomLeftRadius = null;
					doc.style.borderTopRightRadius = null ;	
					doc.style.borderTopLeftRadius = '10px';	
				}
			}
	