enyo.kind({
	name: "mainmenu.panels",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable phdBg",
	components: [
		{
			kind: "onyx.Toolbar",
			layoutKind: "FittableColumnsLayout",
			classes:"phdStd45px",
			style:"padding:0px !important",			
				components: [
 					{
						tag:"h1",
						classes:"toolBarHeader",
						content: "Header", 
						fit:true
					},
					{
						kind: "onyx.MenuDecorator", 
						ontap:"handleMenuPop",
						onSelect: "itemSelected", 
						style:"margin-top:5px !important",
						components: [
							{content: "menu"},
							{
								kind: "onyx.Menu",
								floating: true,
								name:"pullDownMenu",
 								components: [
									{content: "Favorites"},
									{classes: "onyx-menu-divider"},
									{content: "Recents"},
									{classes: "onyx-menu-divider"},
									{content: "Exit App"}
								]}
						]
					}
				]
		},
		{
			kind: "Scroller", 
			name: "tabScroller",
			classes:"onyx-toolbar phdStd40pxRedBar maximize", 
			touchOverscroll:false, 
			touch:false, 
			horizontal:"hidden",
			vertical:"hidden", 
			animate:false,
			thumb:false,
 				components: [
 					{
 						classes: "onyx-toolbar-inline maximize",
 						components: [
	 						{
		 						tag: "div",
	 	 						classes:"redBarGapper"
		 					},
		 					{
		 						tag: "div",
	 	 						style:"height:40px;margin:0px !important;",
		 						components:[
		 							{
				 						kind: "onyx.RadioGroup", 
				 						name: "tabMenu",
				 						onActivate:"handleRadioTabActivate",
				 						controlClasses: "onyx-tabbutton redBarTabButton", 
				 						components: [
											{
	 											content: "Menu1",
												active: true,
												disabled: true
											},
											{	
												content: "Menu2",
												disabled: true 
											},
											{	
												content: "Menu3",
												disabled: true
											},
											{	
												content: "Menu4",
												disabled: true
											},
											{	
												content: "Menu5",
												disabled: true
											}
										]
									}
		 						]
		 					},
		 					{
		 						tag: "div",
	 	 						classes:"redBarGapper"
		 					}
	 					]
	 				}
				]
		},
		{
			//Do the panel stuff here.
			kind: "Panels", 
			name:"AppPanels",
			onTransitionStart:"handlePanelChanged", 
			onTransitionEnd:"handleDestroyPrev",
			onflick:"handleFlick",
			arrangerKind: "CardArranger", 
			classes: "panels-wide",
			animate: true,
			draggable: false,
			fit:true,
			realtimeFit: false, 
			components: [
				{
					content:"panel1",
					style:"background:red;"
				},
				{
					content:"panel2",
					style:"background:blue;"
				},
				{
					content:"panel3",
					style:"background:green;"
				},
				{
					content:"panel4",
					style:"background:pink;"
				},
				{
					content:"panel5",
					style:"background:yellow;"
				}
				
			]

		},
		{
			kind: "onyx.Toolbar",
			layoutKind: "FittableColumnsLayout", 
			classes:"phdStd45px",
			components: [ 
				{content:"Footer"}
			]
		}	
	],
	// Sample Data in form of Array; the real thing will have some callback/ajax that returns 
	// actual data.
	create: function() {
		//create, rendered is one of the default events, we need to add inherited(arguments)
		//to work because, we are overriding the default functions.
		this.inherited(arguments);
		//To add external js files unit tested into some named div, just use addControl. 
		
 	},
	updateTabMenu : function(index) {
		this.$.tabScroller.setScrollLeft(index * 200);
		this.$.tabMenu.setActive( this.$.tabMenu.children[index] );
	},
	handleFlick : function(inSender, inEvent ){
		if (inEvent.xVelocity < 0){
			this.$.AppPanels.next();	
		} else {
			this.$.AppPanels.previous();
		}
	},
	handleMenuPop : function(inSender, inEvent ){
		console.log('handleMenuPop triggers');
		var p = this.$[inSender.popup];
		if (p) {
			p.show();
		}
	},
	handleRadioTabActivate : function(inSender, inEvent ){
		//HandleRadioTab
	},
	
	handlePanelChanged : function(inSender, inEvent) {
		this.updateTabMenu( inEvent.toIndex );		 
	}
	
});