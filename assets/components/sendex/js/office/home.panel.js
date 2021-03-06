sendex.panel.Home = function (config) {
	config = config || {};
	Ext.apply(config, {
		baseCls: 'modx-formpanel',
		layout: 'anchor',
		/*
		 stateful: true,
		 stateId: 'sendex-panel-home',
		 stateEvents: ['tabchange'],
		 getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
		 */
		hideMode: 'offsets',
		items: [{
			xtype: 'modx-tabs',
			defaults: {border: false, autoHeight: true},
			border: false,
			hideMode: 'offsets',
			items: [{
				title: _('sendex_items'),
				layout: 'anchor',
				items: [{
					html: _('sendex_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'sendex-grid-items',
					cls: 'main-wrapper',
				}]
			}]
		}]
	});
	sendex.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(sendex.panel.Home, MODx.Panel);
Ext.reg('sendex-panel-home', sendex.panel.Home);
