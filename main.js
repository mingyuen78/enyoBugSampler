enyo.kind({
	name: "main.app",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable phdBg",
 	components: [
 		{   	
			kind: "Scroller",
			fit:true,
			touch:true, 
			name: "mainScroll",
			thumb:false,
			ondrag:"resetZoomFromInput",
			components: [
			{
					id:"formLogin",
					classes:'inflatePadding',
					components: [
						{
							tag:"h1",
							classes:"orangeHeader",
							content:"Select Distict..."
						},
				   		{
								 kind: "onyx.PickerDecorator", 
 								 onSelect: "pickerHandler",
								 components: [
									{
										content: "Pick One...",
										classes: "fullWidth resetTop resetTop roundedTop roundedBottom",
										style:"background:#ccc;color:#ffffff;font-weight:600;text-align:left;"
									},
									{
										 kind: "onyx.Picker", 
										 name: "cboState",
										 classes : "fullWidth resetTop roundedTop roundedBottom",
										 components: [
												{content: 'DISTRICT 01', active:true},
												{content: 'DISTRICT 02'},
												{content: 'DISTRICT 03'},
												{content: 'DISTRICT 04'},
												{content: 'DISTRICT 05'},
												{content: 'DISTRICT 06'},
												{content: 'DISTRICT 07'},
												{content: 'DISTRICT 08'},
												{content: 'DISTRICT 09'}
										]
									}
							]
						},
						{
				   			tag:"div",
				   			kind: "FittableColumns",
				   			style:"margin-top:15px",
		 		   			components: [
				   				{
									kind: "onyx.Button",
									classes:"orangeButton fullWidth phdButton",
									style:"width:48%",
									content: "Create Account",
									name:"btnCreateAccount",
									ontap: "createAccount"
								},
				   				{
									fit:true
								},
								{
									kind: "onyx.Button",
									classes:"greenButton fullWidth phdButton shadow",
									content: "Sign In",
									style:"width:48%",
									name:"btnSignin",
									ontap: "signIn"
								}
				   			]
				   		},
				   		{
				   			tag:"p",
				   			style:"height:30px;",
				   			ontap:"forgetPassword",
		 		   			allowHtml: true,
		 		   			content: "<a href='#' class='whitelink'>Forget Password ? &rarr;</a>"
				   		},
				   		{
				   			tag:"div",
				   			style:"height:100px;"
				   		}		   	
					]
				}
				]
		}
	],
	create: function() {
		this.inherited(arguments);
		
 	},
	pickerHandler : function(inSender,inEvent){
		//inEvent.preventDefault();
	},
	signIn : function(inSender,inEvent){
		new mainmenu.panels().renderInto(document.body);
	},
	createAccount : function(inSender, inEvent) {
		console.log(inSender.name + ' tapped');
	}
});