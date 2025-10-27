module.exports = {
	api: [
		{
			type: 'category',
			label: 'api',
			collapsible: true,
			collapsed: true,
			items: [
				{
					type: 'category',
					label: 'admin',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'category',
							label: 'business',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'doc',
									id: 'api/api/admin/business/get-api-admin-business-business_group_name',
									label: '[GET] /business_group_name',
								},
								{
									type: 'doc',
									id: 'api/api/admin/business/get-api-admin-business-business_id',
									label: '[GET] /:business_id',
								},
								{
									type: 'doc',
									id: 'api/api/admin/business/get-api-admin-business-children-parent_business_id',
									label: '[GET] /children/:parent_business_id',
								},
								{
									type: 'doc',
									id: 'api/api/admin/business/get-api-admin-business-merchants',
									label: '[GET] /merchants',
								},
								{
									type: 'doc',
									id: 'api/api/admin/business/get-api-admin-business-transfers',
									label: '[GET] /transfers',
								},
								{
									type: 'doc',
									id: 'api/api/admin/business/get-api-admin-business',
									label: '[GET] /',
								},
							],
						},
						{
							type: 'category',
							label: 'drivers',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'doc',
									id: 'api/api/admin/drivers/get-api-admin-drivers',
									label: '[GET] /',
								},
							],
						},
						{
							type: 'category',
							label: 'drivers.routes',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'doc',
									id: 'api/api/admin/drivers.routes/get-api-admin-drivers.routes',
									label: '[GET] /',
								},
							],
						},
						{
							type: 'category',
							label: 'users',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'doc',
									id: 'api/api/admin/users/get-api-admin-users',
									label: '[GET] /',
								},
							],
						},
						{
							type: 'category',
							label: 'vehicles',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'doc',
									id: 'api/api/admin/vehicles/get-api-admin-vehicles',
									label: '[GET] /',
								},
							],
						},
						{
							type: 'category',
							label: 'vehicles.routes',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'doc',
									id: 'api/api/admin/vehicles.routes/get-api-admin-vehicles.routes',
									label: '[GET] /',
								},
							],
						},
					],
				},
				{
					type: 'category',
					label: 'ads',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'doc',
							id: 'api/api/ads/delete-api-ads-ad_id',
							label: '[DELETE] /:ad_id',
						},
						{
							type: 'doc',
							id: 'api/api/ads/get-api-ads-active',
							label: '[GET] /active',
						},
						{
							type: 'doc',
							id: 'api/api/ads/get-api-ads-ad_id',
							label: '[GET] /:ad_id',
						},
						{
							type: 'doc',
							id: 'api/api/ads/get-api-ads-business-business_id',
							label: '[GET] /business/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/ads/get-api-ads-user-user_id',
							label: '[GET] /user/:user_id',
						},
						{
							type: 'doc',
							id: 'api/api/ads/get-api-ads',
							label: '[GET] /',
						},
						{
							type: 'doc',
							id: 'api/api/ads/patch-api-ads-ad_id-activate',
							label: '[PATCH] /:ad_id/activate',
						},
						{
							type: 'doc',
							id: 'api/api/ads/patch-api-ads-ad_id-deactivate',
							label: '[PATCH] /:ad_id/deactivate',
						},
						{
							type: 'doc',
							id: 'api/api/ads/patch-api-ads-ad_id',
							label: '[PATCH] /:ad_id',
						},
						{
							type: 'doc',
							id: 'api/api/ads/post-api-ads-active-category',
							label: '[POST] /active/category',
						},
						{
							type: 'doc',
							id: 'api/api/ads/post-api-ads',
							label: '[POST] /',
						},
					],
				},
				{
					type: 'category',
					label: 'ads.routes',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'doc',
							id: 'api/api/ads.routes/delete-api-ads.routes-ad_id',
							label: '[DELETE] /:ad_id',
						},
						{
							type: 'doc',
							id: 'api/api/ads.routes/get-api-ads.routes-active',
							label: '[GET] /active',
						},
						{
							type: 'doc',
							id: 'api/api/ads.routes/get-api-ads.routes-ad_id',
							label: '[GET] /:ad_id',
						},
						{
							type: 'doc',
							id: 'api/api/ads.routes/get-api-ads.routes-business-business_id',
							label: '[GET] /business/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/ads.routes/get-api-ads.routes-user-user_id',
							label: '[GET] /user/:user_id',
						},
						{
							type: 'doc',
							id: 'api/api/ads.routes/get-api-ads.routes',
							label: '[GET] /',
						},
						{
							type: 'doc',
							id: 'api/api/ads.routes/patch-api-ads.routes-ad_id-activate',
							label: '[PATCH] /:ad_id/activate',
						},
						{
							type: 'doc',
							id: 'api/api/ads.routes/patch-api-ads.routes-ad_id-deactivate',
							label: '[PATCH] /:ad_id/deactivate',
						},
						{
							type: 'doc',
							id: 'api/api/ads.routes/patch-api-ads.routes-ad_id',
							label: '[PATCH] /:ad_id',
						},
						{
							type: 'doc',
							id: 'api/api/ads.routes/post-api-ads.routes-active-category',
							label: '[POST] /active/category',
						},
						{
							type: 'doc',
							id: 'api/api/ads.routes/post-api-ads.routes',
							label: '[POST] /',
						},
					],
				},
				{
					type: 'category',
					label: 'auth',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'doc',
							id: 'api/api/auth/get-api-auth-municipalities',
							label: '[GET] /municipalities',
						},
						{
							type: 'doc',
							id: 'api/api/auth/get-api-auth-scheduled_users',
							label: '[GET] /scheduled_users',
						},
						{
							type: 'doc',
							id: 'api/api/auth/post-api-auth-create-scheduled_user',
							label: '[POST] /create/scheduled_user',
						},
						{
							type: 'doc',
							id: 'api/api/auth/post-api-auth-update-scheduled_user',
							label: '[POST] /update/scheduled_user',
						},
					],
				},
				{
					type: 'category',
					label: 'business',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'category',
							label: 'auth',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'doc',
									id: 'api/api/business/auth/get-api-business-auth-businesses',
									label: '[GET] /businesses',
								},
								{
									type: 'doc',
									id: 'api/api/business/auth/post-api-business-auth-register',
									label: '[POST] /register',
								},
							],
						},
						{
							type: 'doc',
							id: 'api/api/business/delete-api-business-business_id',
							label: '[DELETE] /:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/business/delete-api-business-favorites',
							label: '[DELETE] /favorites',
						},
						{
							type: 'doc',
							id: 'api/api/business/get-api-business-businesses-busyness',
							label: '[GET] /businesses/busyness',
						},
						{
							type: 'doc',
							id: 'api/api/business/get-api-business-businesses-merchant-daily-meals',
							label: '[GET] /businesses/merchant/daily-meals',
						},
						{
							type: 'doc',
							id: 'api/api/business/get-api-business-businesses-merchant-main',
							label: '[GET] /businesses/merchant/main',
						},
						{
							type: 'doc',
							id: 'api/api/business/get-api-business-businesses-merchant',
							label: '[GET] /businesses/merchant',
						},
						{
							type: 'doc',
							id: 'api/api/business/get-api-business-businesses-taxi-main',
							label: '[GET] /businesses/taxi/main',
						},
						{
							type: 'doc',
							id: 'api/api/business/get-api-business-businesses-taxi',
							label: '[GET] /businesses/taxi',
						},
						{
							type: 'doc',
							id: 'api/api/business/get-api-business-business_id-reviews',
							label: '[GET] /:business_id/reviews',
						},
						{
							type: 'doc',
							id: 'api/api/business/get-api-business-business_id',
							label: '[GET] /:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/business/get-api-business-daily-meal-users-business_id',
							label: '[GET] /daily-meal-users/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/business/get-api-business-earnings-all',
							label: '[GET] /earnings/all',
						},
						{
							type: 'doc',
							id: 'api/api/business/get-api-business-earnings-business_id-total',
							label: '[GET] /earnings/:business_id/total',
						},
						{
							type: 'doc',
							id: 'api/api/business/get-api-business-earnings-business_id',
							label: '[GET] /earnings/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/business/get-api-business-earnings-total',
							label: '[GET] /earnings/total',
						},
						{
							type: 'doc',
							id: 'api/api/business/get-api-business-favorites-type',
							label: '[GET] /favorites/:type',
						},
						{
							type: 'doc',
							id: 'api/api/business/get-api-business-parent',
							label: '[GET] /parent',
						},
						{
							type: 'doc',
							id: 'api/api/business/get-api-business-purchase_order_limit-business_id',
							label: '[GET] /purchase_order_limit/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/business/get-api-business-stripe-business_id',
							label: '[GET] /stripe/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/business/patch-api-business-address',
							label: '[PATCH] /address',
						},
						{
							type: 'doc',
							id: 'api/api/business/patch-api-business-business-group-name',
							label: '[PATCH] /business-group-name',
						},
						{
							type: 'doc',
							id: 'api/api/business/patch-api-business-business-unit',
							label: '[PATCH] /business-unit',
						},
						{
							type: 'doc',
							id: 'api/api/business/patch-api-business-delivery-address',
							label: '[PATCH] /delivery-address',
						},
						{
							type: 'doc',
							id: 'api/api/business/patch-api-business-edit',
							label: '[PATCH] /edit',
						},
						{
							type: 'doc',
							id: 'api/api/business/patch-api-business-email',
							label: '[PATCH] /email',
						},
						{
							type: 'doc',
							id: 'api/api/business/patch-api-business-new-business_id',
							label: '[PATCH] /new/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/business/patch-api-business-parent-remove',
							label: '[PATCH] /parent/remove',
						},
						{
							type: 'doc',
							id: 'api/api/business/patch-api-business-parent-update',
							label: '[PATCH] /parent/update',
						},
						{
							type: 'doc',
							id: 'api/api/business/patch-api-business-popular-business_id',
							label: '[PATCH] /popular/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/business/patch-api-business-restaurant-overwhelmed-business_id',
							label: '[PATCH] /restaurant-overwhelmed/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/business/patch-api-business-stripe-generate-business_id',
							label: '[PATCH] /stripe/generate/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/business/patch-api-business-telephone',
							label: '[PATCH] /telephone',
						},
						{
							type: 'doc',
							id: 'api/api/business/patch-api-business-type',
							label: '[PATCH] /type',
						},
						{
							type: 'doc',
							id: 'api/api/business/patch-api-business-workingHours',
							label: '[PATCH] /workingHours',
						},
						{
							type: 'doc',
							id: 'api/api/business/patch-api-business',
							label: '[PATCH] /',
						},
						{
							type: 'doc',
							id: 'api/api/business/post-api-business-activate',
							label: '[POST] /activate',
						},
						{
							type: 'doc',
							id: 'api/api/business/post-api-business-address-add',
							label: '[POST] /address/add',
						},
						{
							type: 'doc',
							id: 'api/api/business/post-api-business-businesses-ids',
							label: '[POST] /businesses/ids',
						},
						{
							type: 'doc',
							id: 'api/api/business/post-api-business-businesses-sections-merchant',
							label: '[POST] /businesses/sections/merchant',
						},
						{
							type: 'doc',
							id: 'api/api/business/post-api-business-deactivate',
							label: '[POST] /deactivate',
						},
						{
							type: 'doc',
							id: 'api/api/business/post-api-business-delivery-address-add',
							label: '[POST] /delivery-address/add',
						},
						{
							type: 'doc',
							id: 'api/api/business/post-api-business-favorites',
							label: '[POST] /favorites',
						},
						{
							type: 'doc',
							id: 'api/api/business/post-api-business-register',
							label: '[POST] /register',
						},
						{
							type: 'doc',
							id: 'api/api/business/post-api-business-scheduled_users-sorting-type',
							label: '[POST] /scheduled_users/sorting/type',
						},
						{
							type: 'doc',
							id: 'api/api/business/post-api-business-scheduled_users-sorting',
							label: '[POST] /scheduled_users/sorting',
						},
						{
							type: 'doc',
							id: 'api/api/business/post-api-business-scoring_points',
							label: '[POST] /scoring_points',
						},
					],
				},
				{
					type: 'category',
					label: 'businessTeams',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'doc',
							id: 'api/api/businessTeams/delete-api-businessTeams-business_teams_id',
							label: '[DELETE] /:business_teams_id',
						},
						{
							type: 'doc',
							id: 'api/api/businessTeams/get-api-businessTeams-business_id',
							label: '[GET] /:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/businessTeams/get-api-businessTeams-business_teams_id',
							label: '[GET] /:business_teams_id',
						},
						{
							type: 'doc',
							id: 'api/api/businessTeams/patch-api-businessTeams-add_user',
							label: '[PATCH] /add_user',
						},
						{
							type: 'doc',
							id: 'api/api/businessTeams/patch-api-businessTeams-business_teams_id-limit',
							label: '[PATCH] /:business_teams_id/limit',
						},
						{
							type: 'doc',
							id: 'api/api/businessTeams/patch-api-businessTeams-business_teams_id-name',
							label: '[PATCH] /:business_teams_id/name',
						},
						{
							type: 'doc',
							id: 'api/api/businessTeams/patch-api-businessTeams-business_teams_id',
							label: '[PATCH] /:business_teams_id',
						},
						{
							type: 'doc',
							id: 'api/api/businessTeams/patch-api-businessTeams-move_user',
							label: '[PATCH] /move_user',
						},
						{
							type: 'doc',
							id: 'api/api/businessTeams/patch-api-businessTeams-remove_user',
							label: '[PATCH] /remove_user',
						},
						{
							type: 'doc',
							id: 'api/api/businessTeams/post-api-businessTeams-create',
							label: '[POST] /create',
						},
					],
				},
				{
					type: 'category',
					label: 'businessUsers',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'doc',
							id: 'api/api/businessUsers/delete-api-businessUsers-business_users_id',
							label: '[DELETE] /:business_users_id',
						},
						{
							type: 'doc',
							id: 'api/api/businessUsers/get-api-businessUsers-business-business_id',
							label: '[GET] /business/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/businessUsers/get-api-businessUsers-business-group_user-business_id',
							label: '[GET] /business/group_user/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/businessUsers/get-api-businessUsers-type-type',
							label: '[GET] /type/:type',
						},
						{
							type: 'doc',
							id: 'api/api/businessUsers/get-api-businessUsers-user_id',
							label: '[GET] /:user_id',
						},
						{
							type: 'doc',
							id: 'api/api/businessUsers/get-api-businessUsers',
							label: '[GET] /',
						},
						{
							type: 'doc',
							id: 'api/api/businessUsers/patch-api-businessUsers-allowance',
							label: '[PATCH] /allowance',
						},
						{
							type: 'doc',
							id: 'api/api/businessUsers/patch-api-businessUsers-company-role',
							label: '[PATCH] /company-role',
						},
						{
							type: 'doc',
							id: 'api/api/businessUsers/patch-api-businessUsers-online',
							label: '[PATCH] /online',
						},
						{
							type: 'doc',
							id: 'api/api/businessUsers/post-api-businessUsers-address-operating',
							label: '[POST] /address/operating',
						},
						{
							type: 'doc',
							id: 'api/api/businessUsers/post-api-businessUsers',
							label: '[POST] /',
						},
					],
				},
				{
					type: 'category',
					label: 'categories',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'doc',
							id: 'api/api/categories/delete-api-categories-category-id',
							label: '[DELETE] /category/:id',
						},
						{
							type: 'doc',
							id: 'api/api/categories/get-api-categories-category-id',
							label: '[GET] /category/:id',
						},
						{
							type: 'doc',
							id: 'api/api/categories/get-api-categories-category_type',
							label: '[GET] /:category_type',
						},
						{
							type: 'doc',
							id: 'api/api/categories/get-api-categories',
							label: '[GET] /',
						},
						{
							type: 'doc',
							id: 'api/api/categories/patch-api-categories-category-id',
							label: '[PATCH] /category/:id',
						},
						{
							type: 'doc',
							id: 'api/api/categories/post-api-categories-category',
							label: '[POST] /category',
						},
					],
				},
				{
					type: 'category',
					label: 'delivery',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'category',
							label: 'auth',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'doc',
									id: 'api/api/delivery/auth/post-api-delivery-auth-register',
									label: '[POST] /register',
								},
							],
						},
						{
							type: 'category',
							label: 'orders',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'doc',
									id: 'api/api/delivery/orders/get-api-delivery-orders-active-business-business_id',
									label: '[GET] /active/business/:business_id',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/get-api-delivery-orders-active-driver-driver_id',
									label: '[GET] /active/driver/:driver_id',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/get-api-delivery-orders-active-user_id',
									label: '[GET] /active/:user_id',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/get-api-delivery-orders-active',
									label: '[GET] /active',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/get-api-delivery-orders-business_id',
									label: '[GET] /:business_id',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/get-api-delivery-orders-completed-business-business_id',
									label: '[GET] /completed/business/:business_id',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/get-api-delivery-orders-completed-driver_id',
									label: '[GET] /completed/:driver_id',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/get-api-delivery-orders-completed-user-user_id',
									label: '[GET] /completed/user/:user_id',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/get-api-delivery-orders-daily_meals',
									label: '[GET] /:daily_meals',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/get-api-delivery-orders-driver-driver_id',
									label: '[GET] /driver/:driver_id',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/get-api-delivery-orders-order-order_id',
									label: '[GET] /order/:order_id',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/get-api-delivery-orders-order-user-order_id',
									label: '[GET] /order/user/:order_id',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/get-api-delivery-orders-today',
									label: '[GET] /today',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/post-api-delivery-orders-add_to_timeline',
									label: '[POST] /add_to_timeline',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/post-api-delivery-orders-daily_meals-business',
									label: '[POST] /daily_meals/business',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/post-api-delivery-orders-daily_meals-subscription-payment',
									label: '[POST] /daily_meals/subscription/payment',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/post-api-delivery-orders-daily_meals-subscription',
									label: '[POST] /daily_meals/subscription',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/post-api-delivery-orders-daily_meals-user',
									label: '[POST] /daily_meals/user',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/post-api-delivery-orders-daily_meals',
									label: '[POST] /daily_meals',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/post-api-delivery-orders-order-accept',
									label: '[POST] /order/accept',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/post-api-delivery-orders-order-cancel_delivery',
									label: '[POST] /order/cancel_delivery',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/post-api-delivery-orders-order-complete',
									label: '[POST] /order/complete',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/post-api-delivery-orders-order-delivery_time',
									label: '[POST] /order/delivery_time',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/post-api-delivery-orders-order-dispatcher_cancel',
									label: '[POST] /order/dispatcher_cancel',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/post-api-delivery-orders-order-dispatcher_revoke',
									label: '[POST] /order/dispatcher_revoke',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/post-api-delivery-orders-order-merchant_accept',
									label: '[POST] /order/merchant_accept',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/post-api-delivery-orders-order-pickup_time',
									label: '[POST] /order/pickup_time',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/post-api-delivery-orders-order-status',
									label: '[POST] /order/status',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/post-api-delivery-orders-order-update',
									label: '[POST] /order/update',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/post-api-delivery-orders-order',
									label: '[POST] /order',
								},
								{
									type: 'doc',
									id: 'api/api/delivery/orders/post-api-delivery-orders-timeline',
									label: '[POST] /timeline',
								},
							],
						},
					],
				},
				{
					type: 'category',
					label: 'deliveryDrivers',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'doc',
							id: 'api/api/deliveryDrivers/get-api-deliveryDrivers-available',
							label: '[GET] /available',
						},
						{
							type: 'doc',
							id: 'api/api/deliveryDrivers/get-api-deliveryDrivers-daily-meals',
							label: '[GET] /daily-meals',
						},
						{
							type: 'doc',
							id: 'api/api/deliveryDrivers/get-api-deliveryDrivers-delivery_driver_id-location',
							label: '[GET] /:delivery_driver_id/location',
						},
						{
							type: 'doc',
							id: 'api/api/deliveryDrivers/get-api-deliveryDrivers-delivery_driver_id',
							label: '[GET] /:delivery_driver_id',
						},
						{
							type: 'doc',
							id: 'api/api/deliveryDrivers/get-api-deliveryDrivers-earnings-all',
							label: '[GET] /earnings/all',
						},
						{
							type: 'doc',
							id: 'api/api/deliveryDrivers/get-api-deliveryDrivers-earnings-delivery_driver_id-total',
							label: '[GET] /earnings/:delivery_driver_id/total',
						},
						{
							type: 'doc',
							id: 'api/api/deliveryDrivers/get-api-deliveryDrivers-earnings-delivery_driver_id',
							label: '[GET] /earnings/:delivery_driver_id',
						},
						{
							type: 'doc',
							id: 'api/api/deliveryDrivers/get-api-deliveryDrivers-earnings-total',
							label: '[GET] /earnings/total',
						},
						{
							type: 'doc',
							id: 'api/api/deliveryDrivers/get-api-deliveryDrivers-online',
							label: '[GET] /online',
						},
						{
							type: 'doc',
							id: 'api/api/deliveryDrivers/get-api-deliveryDrivers-orders-user_id',
							label: '[GET] /orders/:user_id',
						},
						{
							type: 'doc',
							id: 'api/api/deliveryDrivers/get-api-deliveryDrivers-user-user_id',
							label: '[GET] /user/:user_id',
						},
						{
							type: 'doc',
							id: 'api/api/deliveryDrivers/get-api-deliveryDrivers',
							label: '[GET] /',
						},
						{
							type: 'doc',
							id: 'api/api/deliveryDrivers/patch-api-deliveryDrivers-edit',
							label: '[PATCH] /edit',
						},
						{
							type: 'doc',
							id: 'api/api/deliveryDrivers/patch-api-deliveryDrivers-location',
							label: '[PATCH] /location',
						},
						{
							type: 'doc',
							id: 'api/api/deliveryDrivers/patch-api-deliveryDrivers-online',
							label: '[PATCH] /online',
						},
						{
							type: 'doc',
							id: 'api/api/deliveryDrivers/patch-api-deliveryDrivers-update-delivery_driver_id',
							label: '[PATCH] /update/:delivery_driver_id',
						},
						{
							type: 'doc',
							id: 'api/api/deliveryDrivers/post-api-deliveryDrivers-create',
							label: '[POST] /create',
						},
						{
							type: 'doc',
							id: 'api/api/deliveryDrivers/post-api-deliveryDrivers-daily_meals-business',
							label: '[POST] /daily_meals/business',
						},
					],
				},
				{
					type: 'category',
					label: 'documents',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'doc',
							id: 'api/api/documents/get-api-documents-business-business_id-type-document_type',
							label: '[GET] /business/:business_id/type/:document_type',
						},
						{
							type: 'doc',
							id: 'api/api/documents/get-api-documents-businesses-businessId',
							label: '[GET] /businesses/:businessId',
						},
						{
							type: 'doc',
							id: 'api/api/documents/get-api-documents-deliveryPersons-deliveryPersonId',
							label: '[GET] /deliveryPersons/:deliveryPersonId',
						},
						{
							type: 'doc',
							id: 'api/api/documents/get-api-documents-documentId',
							label: '[GET] /:documentId',
						},
						{
							type: 'doc',
							id: 'api/api/documents/get-api-documents-drivers-driverId-type-documentType',
							label: '[GET] /drivers/:driverId/type/:documentType',
						},
						{
							type: 'doc',
							id: 'api/api/documents/get-api-documents-drivers-driver_id',
							label: '[GET] /drivers/:driver_id',
						},
						{
							type: 'doc',
							id: 'api/api/documents/get-api-documents-type-documentType',
							label: '[GET] /type/:documentType',
						},
						{
							type: 'doc',
							id: 'api/api/documents/get-api-documents-user-type-document_type',
							label: '[GET] /user/type/:document_type',
						},
						{
							type: 'doc',
							id: 'api/api/documents/get-api-documents-users-userId',
							label: '[GET] /users/:userId',
						},
						{
							type: 'doc',
							id: 'api/api/documents/get-api-documents-vehicles-vehicleId-type-documentType',
							label: '[GET] /vehicles/:vehicleId/type/:documentType',
						},
						{
							type: 'doc',
							id: 'api/api/documents/get-api-documents-vehicles-vehicleId',
							label: '[GET] /vehicles/:vehicleId',
						},
						{
							type: 'doc',
							id: 'api/api/documents/get-api-documents',
							label: '[GET] /',
						},
						{
							type: 'doc',
							id: 'api/api/documents/patch-api-documents-additionalInfo',
							label: '[PATCH] /additionalInfo',
						},
						{
							type: 'doc',
							id: 'api/api/documents/patch-api-documents-expirationDate',
							label: '[PATCH] /expirationDate',
						},
						{
							type: 'doc',
							id: 'api/api/documents/patch-api-documents-files',
							label: '[PATCH] /files',
						},
						{
							type: 'doc',
							id: 'api/api/documents/patch-api-documents-issueDate',
							label: '[PATCH] /issueDate',
						},
						{
							type: 'doc',
							id: 'api/api/documents/post-api-documents-create-business-business_id',
							label: '[POST] /create/business/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/documents/post-api-documents-create-delivery_driver-delivery_driver_id',
							label: '[POST] /create/delivery_driver/:delivery_driver_id',
						},
						{
							type: 'doc',
							id: 'api/api/documents/post-api-documents-create-driver-driver_id',
							label: '[POST] /create/driver/:driver_id',
						},
						{
							type: 'doc',
							id: 'api/api/documents/post-api-documents-create-user-user_id',
							label: '[POST] /create/user/:user_id',
						},
						{
							type: 'doc',
							id: 'api/api/documents/post-api-documents-create-vehicle-vehicle_id',
							label: '[POST] /create/vehicle/:vehicle_id',
						},
					],
				},
				{
					type: 'category',
					label: 'drivers',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'doc',
							id: 'api/api/drivers/get-api-drivers-available',
							label: '[GET] /available',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/get-api-drivers-business-business_id',
							label: '[GET] /business/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/get-api-drivers-driver_id-history_location',
							label: '[GET] /:driver_id/history_location',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/get-api-drivers-driver_id-location',
							label: '[GET] /:driver_id/location',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/get-api-drivers-driver_id',
							label: '[GET] /:driver_id',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/get-api-drivers-earnings-all',
							label: '[GET] /earnings/all',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/get-api-drivers-earnings-driver_id-total',
							label: '[GET] /earnings/:driver_id/total',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/get-api-drivers-earnings-driver_id',
							label: '[GET] /earnings/:driver_id',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/get-api-drivers-earnings-total',
							label: '[GET] /earnings/total',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/get-api-drivers-full',
							label: '[GET] /full',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/get-api-drivers-online',
							label: '[GET] /online',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/get-api-drivers-orders',
							label: '[GET] /orders',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/get-api-drivers-unavailable',
							label: '[GET] /unavailable',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/get-api-drivers',
							label: '[GET] /',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/patch-api-drivers-driver_id-action-type',
							label: '[PATCH] /:driver_id/:action/:type',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/patch-api-drivers-driver_id-set_current_vehicle',
							label: '[PATCH] /:driver_id/set_current_vehicle',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/patch-api-drivers-driver_id-toggle_orders',
							label: '[PATCH] /:driver_id/toggle_orders',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/patch-api-drivers-edit',
							label: '[PATCH] /edit',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/patch-api-drivers-location',
							label: '[PATCH] /location',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/patch-api-drivers-online',
							label: '[PATCH] /online',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/patch-api-drivers-ride_requirements',
							label: '[PATCH] /ride_requirements',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/patch-api-drivers-update-driver_id',
							label: '[PATCH] /update/:driver_id',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/post-api-drivers-come_to_work',
							label: '[POST] /come_to_work',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/post-api-drivers-create',
							label: '[POST] /create',
						},
						{
							type: 'doc',
							id: 'api/api/drivers/post-api-drivers-sos',
							label: '[POST] /sos',
						},
					],
				},
				{
					type: 'category',
					label: 'finances',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'doc',
							id: 'api/api/finances/delete-api-finances-finance_id',
							label: '[DELETE] /:finance_id',
						},
						{
							type: 'doc',
							id: 'api/api/finances/get-api-finances-business-business_id',
							label: '[GET] /business/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/finances/get-api-finances-finance_id',
							label: '[GET] /:finance_id',
						},
						{
							type: 'doc',
							id: 'api/api/finances/patch-api-finances-finance_id-account_number',
							label: '[PATCH] /:finance_id/account_number',
						},
						{
							type: 'doc',
							id: 'api/api/finances/patch-api-finances-finance_id-bank_name',
							label: '[PATCH] /:finance_id/bank_name',
						},
						{
							type: 'doc',
							id: 'api/api/finances/patch-api-finances-finance_id-payment_preferences',
							label: '[PATCH] /:finance_id/payment_preferences',
						},
						{
							type: 'doc',
							id: 'api/api/finances/patch-api-finances-finance_id',
							label: '[PATCH] /:finance_id',
						},
						{
							type: 'doc',
							id: 'api/api/finances/post-api-finances-create',
							label: '[POST] /create',
						},
					],
				},
				{
					type: 'category',
					label: 'flags',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'doc',
							id: 'api/api/flags/delete-api-flags-flag_id',
							label: '[DELETE] /:flag_id',
						},
						{
							type: 'doc',
							id: 'api/api/flags/get-api-flags-flag_id',
							label: '[GET] /:flag_id',
						},
						{
							type: 'doc',
							id: 'api/api/flags/get-api-flags',
							label: '[GET] /',
						},
						{
							type: 'doc',
							id: 'api/api/flags/patch-api-flags-flag_id',
							label: '[PATCH] /:flag_id',
						},
						{
							type: 'doc',
							id: 'api/api/flags/post-api-flags',
							label: '[POST] /',
						},
					],
				},
				{
					type: 'category',
					label: 'lostItems',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'doc',
							id: 'api/api/lostItems/delete-api-lostItems-delete-lost_item_id',
							label: '[DELETE] /delete/:lost_item_id',
						},
						{
							type: 'doc',
							id: 'api/api/lostItems/get-api-lostItems',
							label: '[GET] /',
						},
						{
							type: 'doc',
							id: 'api/api/lostItems/patch-api-lostItems-update-lost_item_id',
							label: '[PATCH] /update/:lost_item_id',
						},
						{
							type: 'doc',
							id: 'api/api/lostItems/post-api-lostItems-report',
							label: '[POST] /report',
						},
					],
				},
				{
					type: 'category',
					label: 'menu',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'doc',
							id: 'api/api/menu/delete-api-menu-menu-categories-menu_category_id',
							label: '[DELETE] /menu-categories/:menu_category_id',
						},
						{
							type: 'doc',
							id: 'api/api/menu/delete-api-menu-menu-items-category-category_id',
							label: '[DELETE] /menu-items/category/:category_id',
						},
						{
							type: 'doc',
							id: 'api/api/menu/delete-api-menu-menu-items-menu_item_id',
							label: '[DELETE] /menu-items/:menu_item_id',
						},
						{
							type: 'doc',
							id: 'api/api/menu/delete-api-menu-menu_id',
							label: '[DELETE] /:menu_id',
						},
						{
							type: 'doc',
							id: 'api/api/menu/get-api-menu-business-business_id',
							label: '[GET] /business/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/menu/get-api-menu-daily-meals-menu-business_id',
							label: '[GET] /daily-meals-menu/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/menu/get-api-menu-menu-business_id-date',
							label: '[GET] /menu/:business_id/:date',
						},
						{
							type: 'doc',
							id: 'api/api/menu/get-api-menu-menu-categories-business-business_id',
							label: '[GET] /menu-categories/business/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/menu/get-api-menu-menu-categories-menu_id',
							label: '[GET] /menu-categories/:menu_id',
						},
						{
							type: 'doc',
							id: 'api/api/menu/get-api-menu-menu-items-business-business_id',
							label: '[GET] /menu-items/business/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/menu/get-api-menu-menu-items-business_id-date',
							label: '[GET] /menu-items/:business_id/:date',
						},
						{
							type: 'doc',
							id: 'api/api/menu/get-api-menu-menu-items-category_id',
							label: '[GET] /menu-items/:category_id',
						},
						{
							type: 'doc',
							id: 'api/api/menu/patch-api-menu-active',
							label: '[PATCH] /active',
						},
						{
							type: 'doc',
							id: 'api/api/menu/patch-api-menu-add-category-order',
							label: '[PATCH] /add-category-order',
						},
						{
							type: 'doc',
							id: 'api/api/menu/patch-api-menu-menu-categories-add',
							label: '[PATCH] /menu-categories/add',
						},
						{
							type: 'doc',
							id: 'api/api/menu/patch-api-menu-menu-categories-order',
							label: '[PATCH] /menu-categories/order',
						},
						{
							type: 'doc',
							id: 'api/api/menu/patch-api-menu-menu-categories-price',
							label: '[PATCH] /menu-categories/price',
						},
						{
							type: 'doc',
							id: 'api/api/menu/patch-api-menu-menu-categories-remove',
							label: '[PATCH] /menu-categories/remove',
						},
						{
							type: 'doc',
							id: 'api/api/menu/patch-api-menu-menu-categories',
							label: '[PATCH] /menu-categories',
						},
						{
							type: 'doc',
							id: 'api/api/menu/patch-api-menu-menu-items-add-order',
							label: '[PATCH] /menu-items/add-order',
						},
						{
							type: 'doc',
							id: 'api/api/menu/patch-api-menu-menu-items-category-add',
							label: '[PATCH] /menu-items/category/add',
						},
						{
							type: 'doc',
							id: 'api/api/menu/patch-api-menu-menu-items-category-remove',
							label: '[PATCH] /menu-items/category/remove',
						},
						{
							type: 'doc',
							id: 'api/api/menu/patch-api-menu-menu-items-is_enabled',
							label: '[PATCH] /menu-items/is_enabled',
						},
						{
							type: 'doc',
							id: 'api/api/menu/patch-api-menu-menu-items-order',
							label: '[PATCH] /menu-items/order',
						},
						{
							type: 'doc',
							id: 'api/api/menu/patch-api-menu-menu-items-price',
							label: '[PATCH] /menu-items/price',
						},
						{
							type: 'doc',
							id: 'api/api/menu/patch-api-menu-menu-items-remove-order',
							label: '[PATCH] /menu-items/remove-order',
						},
						{
							type: 'doc',
							id: 'api/api/menu/patch-api-menu-menu-items',
							label: '[PATCH] /menu-items',
						},
						{
							type: 'doc',
							id: 'api/api/menu/patch-api-menu-remove-category-order',
							label: '[PATCH] /remove-category-order',
						},
						{
							type: 'doc',
							id: 'api/api/menu/post-api-menu-daily-business-business_id',
							label: '[POST] /daily/business/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/menu/post-api-menu-daily-meal',
							label: '[POST] /daily-meal',
						},
						{
							type: 'doc',
							id: 'api/api/menu/post-api-menu-daily-meals-menu-create',
							label: '[POST] /daily-meals-menu/create',
						},
						{
							type: 'doc',
							id: 'api/api/menu/post-api-menu-menu-categories-create',
							label: '[POST] /menu-categories/create',
						},
						{
							type: 'doc',
							id: 'api/api/menu/post-api-menu-menu-items-category-category_id',
							label: '[POST] /menu-items/category/:category_id',
						},
						{
							type: 'doc',
							id: 'api/api/menu/post-api-menu-menu-items-create',
							label: '[POST] /menu-items/create',
						},
						{
							type: 'doc',
							id: 'api/api/menu/post-api-menu-menu-items-extras-sides-business_id',
							label: '[POST] /menu-items/extras-sides/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/menu/post-api-menu',
							label: '[POST] /',
						},
					],
				},
				{
					type: 'category',
					label: 'merchant',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'category',
							label: 'auth',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'doc',
									id: 'api/api/merchant/auth/post-api-merchant-auth-register',
									label: '[POST] /register',
								},
							],
						},
						{
							type: 'category',
							label: 'reservations',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'doc',
									id: 'api/api/merchant/reservations/delete-api-merchant-reservations-reservation_id',
									label: '[DELETE] /:reservation_id',
								},
								{
									type: 'doc',
									id: 'api/api/merchant/reservations/get-api-merchant-reservations-active-user_id',
									label: '[GET] /active/:user_id',
								},
								{
									type: 'doc',
									id: 'api/api/merchant/reservations/get-api-merchant-reservations-business-business_id',
									label: '[GET] /business/:business_id',
								},
								{
									type: 'doc',
									id: 'api/api/merchant/reservations/get-api-merchant-reservations-reservation_id',
									label: '[GET] /:reservation_id',
								},
								{
									type: 'doc',
									id: 'api/api/merchant/reservations/get-api-merchant-reservations',
									label: '[GET] /',
								},
								{
									type: 'doc',
									id: 'api/api/merchant/reservations/patch-api-merchant-reservations-status',
									label: '[PATCH] /status',
								},
								{
									type: 'doc',
									id: 'api/api/merchant/reservations/post-api-merchant-reservations-create',
									label: '[POST] /create',
								},
								{
									type: 'doc',
									id: 'api/api/merchant/reservations/post-api-merchant-reservations-table',
									label: '[POST] /table',
								},
							],
						},
					],
				},
				{
					type: 'category',
					label: 'orderLobby',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'doc',
							id: 'api/api/orderLobby/delete-api-orderLobby-cancel-order_lobbies_id',
							label: '[DELETE] /cancel/:order_lobbies_id',
						},
						{
							type: 'doc',
							id: 'api/api/orderLobby/patch-api-orderLobby-items-order_lobbies_id',
							label: '[PATCH] /items/:order_lobbies_id',
						},
						{
							type: 'doc',
							id: 'api/api/orderLobby/patch-api-orderLobby-users-order_lobbies_id',
							label: '[PATCH] /users/:order_lobbies_id',
						},
						{
							type: 'doc',
							id: 'api/api/orderLobby/post-api-orderLobby-create',
							label: '[POST] /create',
						},
						{
							type: 'doc',
							id: 'api/api/orderLobby/post-api-orderLobby-submit-order_lobbies_id',
							label: '[POST] /submit/:order_lobbies_id',
						},
					],
				},
				{
					type: 'category',
					label: 'orderLobbyUser',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'doc',
							id: 'api/api/orderLobbyUser/patch-api-orderLobbyUser-limit-order_lobby_users_id',
							label: '[PATCH] /limit/:order_lobby_users_id',
						},
					],
				},
				{
					type: 'category',
					label: 'orderLobbyUser.routes',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'doc',
							id: 'api/api/orderLobbyUser.routes/patch-api-orderLobbyUser.routes-limit-order_lobby_users_id',
							label: '[PATCH] /limit/:order_lobby_users_id',
						},
					],
				},
				{
					type: 'category',
					label: 'overwatch',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'doc',
							id: 'api/api/overwatch/get-api-overwatch-drivers-activity-settings',
							label: '[GET] /drivers/activity/settings',
						},
						{
							type: 'doc',
							id: 'api/api/overwatch/patch-api-overwatch-drivers-activity-settings',
							label: '[PATCH] /drivers/activity/settings',
						},
						{
							type: 'doc',
							id: 'api/api/overwatch/post-api-overwatch-orders-pagination',
							label: '[POST] /orders/pagination',
						},
					],
				},
				{
					type: 'category',
					label: 'promo',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'category',
							label: 'ads',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'doc',
									id: 'api/api/promo/ads/delete-api-promo-ads-id',
									label: '[DELETE] /:id',
								},
								{
									type: 'doc',
									id: 'api/api/promo/ads/get-api-promo-ads-id',
									label: '[GET] /:id',
								},
								{
									type: 'doc',
									id: 'api/api/promo/ads/get-api-promo-ads-type-type',
									label: '[GET] /type/:type',
								},
								{
									type: 'doc',
									id: 'api/api/promo/ads/get-api-promo-ads',
									label: '[GET] /',
								},
								{
									type: 'doc',
									id: 'api/api/promo/ads/post-api-promo-ads',
									label: '[POST] /',
								},
								{
									type: 'doc',
									id: 'api/api/promo/ads/put-api-promo-ads-id',
									label: '[PUT] /:id',
								},
							],
						},
						{
							type: 'category',
							label: 'banners',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'doc',
									id: 'api/api/promo/banners/delete-api-promo-banners-id',
									label: '[DELETE] /:id',
								},
								{
									type: 'doc',
									id: 'api/api/promo/banners/get-api-promo-banners-ad-ad',
									label: '[GET] /ad/:ad',
								},
								{
									type: 'doc',
									id: 'api/api/promo/banners/get-api-promo-banners-id',
									label: '[GET] /:id',
								},
								{
									type: 'doc',
									id: 'api/api/promo/banners/get-api-promo-banners-section-section',
									label: '[GET] /section/:section',
								},
								{
									type: 'doc',
									id: 'api/api/promo/banners/get-api-promo-banners-serviceType-serviceType',
									label: '[GET] /serviceType/:serviceType',
								},
								{
									type: 'doc',
									id: 'api/api/promo/banners/get-api-promo-banners-size-size',
									label: '[GET] /size/:size',
								},
								{
									type: 'doc',
									id: 'api/api/promo/banners/get-api-promo-banners-type-type',
									label: '[GET] /type/:type',
								},
								{
									type: 'doc',
									id: 'api/api/promo/banners/get-api-promo-banners',
									label: '[GET] /',
								},
								{
									type: 'doc',
									id: 'api/api/promo/banners/post-api-promo-banners',
									label: '[POST] /',
								},
								{
									type: 'doc',
									id: 'api/api/promo/banners/put-api-promo-banners-id',
									label: '[PUT] /:id',
								},
							],
						},
						{
							type: 'category',
							label: 'sections',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'doc',
									id: 'api/api/promo/sections/delete-api-promo-sections-id',
									label: '[DELETE] /:id',
								},
								{
									type: 'doc',
									id: 'api/api/promo/sections/get-api-promo-sections-id',
									label: '[GET] /:id',
								},
								{
									type: 'doc',
									id: 'api/api/promo/sections/get-api-promo-sections-type-type',
									label: '[GET] /type/:type',
								},
								{
									type: 'doc',
									id: 'api/api/promo/sections/get-api-promo-sections',
									label: '[GET] /',
								},
								{
									type: 'doc',
									id: 'api/api/promo/sections/patch-api-promo-sections-id',
									label: '[PATCH] /:id',
								},
								{
									type: 'doc',
									id: 'api/api/promo/sections/patch-api-promo-sections-reorder',
									label: '[PATCH] /reorder',
								},
								{
									type: 'doc',
									id: 'api/api/promo/sections/post-api-promo-sections',
									label: '[POST] /',
								},
							],
						},
						{
							type: 'category',
							label: 'section_buy',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'doc',
									id: 'api/api/promo/section_buy/delete-api-promo-section_buy-id',
									label: '[DELETE] /:id',
								},
								{
									type: 'doc',
									id: 'api/api/promo/section_buy/get-api-promo-section_buy-business-business_id',
									label: '[GET] /business/:business_id',
								},
								{
									type: 'doc',
									id: 'api/api/promo/section_buy/get-api-promo-section_buy-id',
									label: '[GET] /:id',
								},
								{
									type: 'doc',
									id: 'api/api/promo/section_buy/get-api-promo-section_buy-section-section',
									label: '[GET] /section/:section',
								},
								{
									type: 'doc',
									id: 'api/api/promo/section_buy/get-api-promo-section_buy-stripeSub-stripe_subscription_id',
									label: '[GET] /stripeSub/:stripe_subscription_id',
								},
								{
									type: 'doc',
									id: 'api/api/promo/section_buy/get-api-promo-section_buy-tier-tier',
									label: '[GET] /tier/:tier',
								},
								{
									type: 'doc',
									id: 'api/api/promo/section_buy/get-api-promo-section_buy',
									label: '[GET] /',
								},
								{
									type: 'doc',
									id: 'api/api/promo/section_buy/post-api-promo-section_buy-request',
									label: '[POST] /request',
								},
								{
									type: 'doc',
									id: 'api/api/promo/section_buy/post-api-promo-section_buy-stripeSub-id',
									label: '[POST] /stripeSub/:id',
								},
								{
									type: 'doc',
									id: 'api/api/promo/section_buy/post-api-promo-section_buy',
									label: '[POST] /',
								},
								{
									type: 'doc',
									id: 'api/api/promo/section_buy/put-api-promo-section_buy-id',
									label: '[PUT] /:id',
								},
							],
						},
						{
							type: 'category',
							label: 'words',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'doc',
									id: 'api/api/promo/words/delete-api-promo-words-id',
									label: '[DELETE] /:id',
								},
								{
									type: 'doc',
									id: 'api/api/promo/words/get-api-promo-words-id',
									label: '[GET] /:id',
								},
								{
									type: 'doc',
									id: 'api/api/promo/words/get-api-promo-words',
									label: '[GET] /',
								},
								{
									type: 'doc',
									id: 'api/api/promo/words/patch-api-promo-words-id',
									label: '[PATCH] /:id',
								},
								{
									type: 'doc',
									id: 'api/api/promo/words/post-api-promo-words',
									label: '[POST] /',
								},
							],
						},
						{
							type: 'category',
							label: 'word_buy',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'doc',
									id: 'api/api/promo/word_buy/delete-api-promo-word_buy-id',
									label: '[DELETE] /:id',
								},
								{
									type: 'doc',
									id: 'api/api/promo/word_buy/get-api-promo-word_buy-business-business_id',
									label: '[GET] /business/:business_id',
								},
								{
									type: 'doc',
									id: 'api/api/promo/word_buy/get-api-promo-word_buy-id',
									label: '[GET] /:id',
								},
								{
									type: 'doc',
									id: 'api/api/promo/word_buy/get-api-promo-word_buy-stripeSub-stripe_subscription_id',
									label: '[GET] /stripeSub/:stripe_subscription_id',
								},
								{
									type: 'doc',
									id: 'api/api/promo/word_buy/get-api-promo-word_buy-tier-tier',
									label: '[GET] /tier/:tier',
								},
								{
									type: 'doc',
									id: 'api/api/promo/word_buy/get-api-promo-word_buy-word-word',
									label: '[GET] /word/:word',
								},
								{
									type: 'doc',
									id: 'api/api/promo/word_buy/get-api-promo-word_buy',
									label: '[GET] /',
								},
								{
									type: 'doc',
									id: 'api/api/promo/word_buy/post-api-promo-word_buy-stripeSub-id',
									label: '[POST] /stripeSub/:id',
								},
								{
									type: 'doc',
									id: 'api/api/promo/word_buy/post-api-promo-word_buy',
									label: '[POST] /',
								},
								{
									type: 'doc',
									id: 'api/api/promo/word_buy/put-api-promo-word_buy-id',
									label: '[PUT] /:id',
								},
							],
						},
					],
				},
				{
					type: 'category',
					label: 'search',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'doc',
							id: 'api/api/search/get-api-search-business_id',
							label: '[GET] /:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/search/get-api-search',
							label: '[GET] /',
						},
						{
							type: 'doc',
							id: 'api/api/search/post-api-search-menu-items-extras-sides-business_id',
							label: '[POST] /menu-items/extras-sides/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/search/post-api-search-sections-merchant',
							label: '[POST] /sections/merchant',
						},
						{
							type: 'doc',
							id: 'api/api/search/post-api-search',
							label: '[POST] /',
						},
					],
				},
				{
					type: 'category',
					label: 'stripe',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'doc',
							id: 'api/api/stripe/get-api-stripe-generate-business_id',
							label: '[GET] /generate/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/stripe/get-api-stripe-return-business_id',
							label: '[GET] /return/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/stripe/post-api-stripe-webhook',
							label: '[POST] /webhook',
						},
					],
				},
				{
					type: 'category',
					label: 'taxi',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'doc',
							id: 'api/api/taxi/get-api-taxi-order-order_id-available-drivers',
							label: '[GET] /order/:order_id/available-drivers',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/get-api-taxi-order-order_id',
							label: '[GET] /order/:order_id',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/get-api-taxi-orders-active-driver-driver_id',
							label: '[GET] /orders/active/driver/:driver_id',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/get-api-taxi-orders-active-user_id-type',
							label: '[GET] /orders/active/:user_id/:type',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/get-api-taxi-orders-canceled-driver_id',
							label: '[GET] /orders/canceled/:driver_id',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/get-api-taxi-orders-canceled-user-user_id',
							label: '[GET] /orders/canceled/user/:user_id',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/get-api-taxi-orders-completed-business-business_id',
							label: '[GET] /orders/completed/business/:business_id',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/get-api-taxi-orders-completed-driver_id',
							label: '[GET] /orders/completed/:driver_id',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/get-api-taxi-orders-completed-user-user_id',
							label: '[GET] /orders/completed/user/:user_id',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/get-api-taxi-orders-driver-driver_id',
							label: '[GET] /orders/driver/:driver_id',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/get-api-taxi-orders-rejected-driver_id',
							label: '[GET] /orders/rejected/:driver_id',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/get-api-taxi-orders-scheduled_orders-driver-driver_id',
							label: '[GET] /orders/scheduled_orders/driver/:driver_id',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/get-api-taxi-orders-scheduled_orders-user-user_id',
							label: '[GET] /orders/scheduled_orders/user/:user_id',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/get-api-taxi-orders-scheduled_orders',
							label: '[GET] /orders/scheduled_orders',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/get-api-taxi-today',
							label: '[GET] /today',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/get-api-taxi',
							label: '[GET] /',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/post-api-taxi-calculate_transfer_price',
							label: '[POST] /calculate_transfer_price',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/post-api-taxi-grouped_order-cancel',
							label: '[POST] /grouped_order/cancel',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/post-api-taxi-grouped_order-reject',
							label: '[POST] /grouped_order/reject',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/post-api-taxi-order-accept',
							label: '[POST] /order/accept',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/post-api-taxi-order-append_driver',
							label: '[POST] /order/append_driver',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/post-api-taxi-order-cancel',
							label: '[POST] /order/cancel',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/post-api-taxi-order-complete',
							label: '[POST] /order/complete',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/post-api-taxi-order-complete_route',
							label: '[POST] /order/complete_route',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/post-api-taxi-order-delivery_location',
							label: '[POST] /order/delivery_location',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/post-api-taxi-order-payment',
							label: '[POST] /order/payment',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/post-api-taxi-order-pickup_location',
							label: '[POST] /order/pickup_location',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/post-api-taxi-order-preferences',
							label: '[POST] /order/preferences',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/post-api-taxi-order-reject',
							label: '[POST] /order/reject',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/post-api-taxi-order-route',
							label: '[POST] /order/route',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/post-api-taxi-order-status',
							label: '[POST] /order/status',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/post-api-taxi-order-timeline',
							label: '[POST] /order/timeline',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/post-api-taxi-orders-pagination',
							label: '[POST] /orders/pagination',
						},
						{
							type: 'doc',
							id: 'api/api/taxi/post-api-taxi-transfer_price',
							label: '[POST] /transfer_price',
						},
					],
				},
				{
					type: 'category',
					label: 'users',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'doc',
							id: 'api/api/users/delete-api-users-delete-user_id',
							label: '[DELETE] /delete/:user_id',
						},
						{
							type: 'doc',
							id: 'api/api/users/delete-api-users-me-address-address_id',
							label: '[DELETE] /me/address/:address_id',
						},
						{
							type: 'doc',
							id: 'api/api/users/delete-api-users-me-group_user-delete-group_user_id',
							label: '[DELETE] /me/group_user/delete/:group_user_id',
						},
						{
							type: 'doc',
							id: 'api/api/users/get-api-users-me-active_order_ids',
							label: '[GET] /me/active_order_ids',
						},
						{
							type: 'doc',
							id: 'api/api/users/get-api-users-me-credits-service_type',
							label: '[GET] /me/credits/:service_type',
						},
						{
							type: 'doc',
							id: 'api/api/users/get-api-users-me-payment-sheet',
							label: '[GET] /me/payment-sheet',
						},
						{
							type: 'doc',
							id: 'api/api/users/get-api-users-me-ping',
							label: '[GET] /me/ping',
						},
						{
							type: 'doc',
							id: 'api/api/users/get-api-users-me-referral',
							label: '[GET] /me/referral',
						},
						{
							type: 'doc',
							id: 'api/api/users/get-api-users-me-reviews',
							label: '[GET] /me/reviews',
						},
						{
							type: 'doc',
							id: 'api/api/users/get-api-users-me-scheduled_orders',
							label: '[GET] /me/scheduled_orders',
						},
						{
							type: 'doc',
							id: 'api/api/users/get-api-users-me-verify-phone',
							label: '[GET] /me/verify/phone',
						},
						{
							type: 'doc',
							id: 'api/api/users/get-api-users-me',
							label: '[GET] /me',
						},
						{
							type: 'doc',
							id: 'api/api/users/get-api-users-personal',
							label: '[GET] /personal',
						},
						{
							type: 'doc',
							id: 'api/api/users/get-api-users-user-code',
							label: '[GET] /user/:code',
						},
						{
							type: 'doc',
							id: 'api/api/users/get-api-users-user_id-family_wallet',
							label: '[GET] /:user_id/family_wallet',
						},
						{
							type: 'doc',
							id: 'api/api/users/get-api-users-user_id-reviews',
							label: '[GET] /:user_id/reviews',
						},
						{
							type: 'doc',
							id: 'api/api/users/get-api-users-user_id-transactions',
							label: '[GET] /:user_id/transactions',
						},
						{
							type: 'doc',
							id: 'api/api/users/get-api-users-user_id-wallet',
							label: '[GET] /:user_id/wallet',
						},
						{
							type: 'doc',
							id: 'api/api/users/get-api-users-user_id',
							label: '[GET] /:user_id',
						},
						{
							type: 'doc',
							id: 'api/api/users/get-api-users',
							label: '[GET] /',
						},
						{
							type: 'doc',
							id: 'api/api/users/patch-api-users-active-user_id',
							label: '[PATCH] /active/:user_id',
						},
						{
							type: 'doc',
							id: 'api/api/users/patch-api-users-disabled-user_id',
							label: '[PATCH] /disabled/:user_id',
						},
						{
							type: 'doc',
							id: 'api/api/users/patch-api-users-group_user-allowance',
							label: '[PATCH] /group_user/allowance',
						},
						{
							type: 'doc',
							id: 'api/api/users/patch-api-users-me-address-address_id-primary',
							label: '[PATCH] /me/address/:address_id/primary',
						},
						{
							type: 'doc',
							id: 'api/api/users/patch-api-users-me-ads-personalization',
							label: '[PATCH] /me/ads-personalization',
						},
						{
							type: 'doc',
							id: 'api/api/users/patch-api-users-me-allergies-preferences',
							label: '[PATCH] /me/allergies-preferences',
						},
						{
							type: 'doc',
							id: 'api/api/users/patch-api-users-me-claim-reward',
							label: '[PATCH] /me/claim-reward',
						},
						{
							type: 'doc',
							id: 'api/api/users/patch-api-users-me-delivery-push-notification-preferences',
							label: '[PATCH] /me/delivery-push-notification-preferences',
						},
						{
							type: 'doc',
							id: 'api/api/users/patch-api-users-me-disabled',
							label: '[PATCH] /me/disabled',
						},
						{
							type: 'doc',
							id: 'api/api/users/patch-api-users-me-group_user-allowance',
							label: '[PATCH] /me/group_user/allowance',
						},
						{
							type: 'doc',
							id: 'api/api/users/patch-api-users-me-group_user-status',
							label: '[PATCH] /me/group_user/status',
						},
						{
							type: 'doc',
							id: 'api/api/users/patch-api-users-me-marketing-notifications',
							label: '[PATCH] /me/marketing-notifications',
						},
						{
							type: 'doc',
							id: 'api/api/users/patch-api-users-me-newsletter',
							label: '[PATCH] /me/newsletter',
						},
						{
							type: 'doc',
							id: 'api/api/users/patch-api-users-me-notification-preferences',
							label: '[PATCH] /me/notification-preferences',
						},
						{
							type: 'doc',
							id: 'api/api/users/patch-api-users-me-profile_picture',
							label: '[PATCH] /me/profile_picture',
						},
						{
							type: 'doc',
							id: 'api/api/users/patch-api-users-me-radio-preferences',
							label: '[PATCH] /me/radio-preferences',
						},
						{
							type: 'doc',
							id: 'api/api/users/patch-api-users-me-spicy-preferences',
							label: '[PATCH] /me/spicy-preferences',
						},
						{
							type: 'doc',
							id: 'api/api/users/patch-api-users-me-taxi-preferences',
							label: '[PATCH] /me/taxi-preferences',
						},
						{
							type: 'doc',
							id: 'api/api/users/patch-api-users-me-taxi-push-notification-preferences',
							label: '[PATCH] /me/taxi-push-notification-preferences',
						},
						{
							type: 'doc',
							id: 'api/api/users/patch-api-users-me-transfer-preferences',
							label: '[PATCH] /me/transfer-preferences',
						},
						{
							type: 'doc',
							id: 'api/api/users/patch-api-users-me-transfer-push-notification-preferences',
							label: '[PATCH] /me/transfer-push-notification-preferences',
						},
						{
							type: 'doc',
							id: 'api/api/users/patch-api-users-user_id-wallet',
							label: '[PATCH] /:user_id/wallet',
						},
						{
							type: 'doc',
							id: 'api/api/users/post-api-users-me-confirm-payment-intent',
							label: '[POST] /me/confirm-payment-intent',
						},
						{
							type: 'doc',
							id: 'api/api/users/post-api-users-me-redeem-referral-code',
							label: '[POST] /me/redeem-referral-code',
						},
						{
							type: 'doc',
							id: 'api/api/users/post-api-users-me-request-data',
							label: '[POST] /me/request-data',
						},
						{
							type: 'doc',
							id: 'api/api/users/post-api-users-me-request-payment-intent',
							label: '[POST] /me/request-payment-intent',
						},
						{
							type: 'doc',
							id: 'api/api/users/post-api-users-me-requestToAddFunds',
							label: '[POST] /me/requestToAddFunds',
						},
						{
							type: 'doc',
							id: 'api/api/users/post-api-users-me-update_user',
							label: '[POST] /me/update_user',
						},
					],
				},
				{
					type: 'category',
					label: 'vehicles',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'doc',
							id: 'api/api/vehicles/delete-api-vehicles-vehicle_id',
							label: '[DELETE] /:vehicle_id',
						},
						{
							type: 'doc',
							id: 'api/api/vehicles/get-api-vehicles-business-businessId',
							label: '[GET] /business/:businessId',
						},
						{
							type: 'doc',
							id: 'api/api/vehicles/get-api-vehicles-category-vehicleCategory',
							label: '[GET] /category/:vehicleCategory',
						},
						{
							type: 'doc',
							id: 'api/api/vehicles/get-api-vehicles-class-vehicleClass-category-vehicleCategory',
							label: '[GET] /class/:vehicleClass/category/:vehicleCategory',
						},
						{
							type: 'doc',
							id: 'api/api/vehicles/get-api-vehicles-class-vehicleClass',
							label: '[GET] /class/:vehicleClass',
						},
						{
							type: 'doc',
							id: 'api/api/vehicles/get-api-vehicles-driver-driver_id-category-vehicleCategory',
							label: '[GET] /driver/:driver_id/category/:vehicleCategory',
						},
						{
							type: 'doc',
							id: 'api/api/vehicles/get-api-vehicles-driver-driver_id-class-vehicleClass',
							label: '[GET] /driver/:driver_id/class/:vehicleClass',
						},
						{
							type: 'doc',
							id: 'api/api/vehicles/get-api-vehicles-driver-driver_id',
							label: '[GET] /driver/:driver_id',
						},
						{
							type: 'doc',
							id: 'api/api/vehicles/get-api-vehicles-vehicle_id',
							label: '[GET] /:vehicle_id',
						},
						{
							type: 'doc',
							id: 'api/api/vehicles/get-api-vehicles',
							label: '[GET] /',
						},
						{
							type: 'doc',
							id: 'api/api/vehicles/patch-api-vehicles-driver-unassign',
							label: '[PATCH] /driver/unassign',
						},
						{
							type: 'doc',
							id: 'api/api/vehicles/patch-api-vehicles',
							label: '[PATCH] /',
						},
						{
							type: 'doc',
							id: 'api/api/vehicles/post-api-vehicles-create',
							label: '[POST] /create',
						},
						{
							type: 'doc',
							id: 'api/api/vehicles/post-api-vehicles-driver-assign',
							label: '[POST] /driver/assign',
						},
					],
				},
			],
		},
		{
			type: 'category',
			label: 'index',
			collapsible: true,
			collapsed: true,
			items: [
				{
					type: 'doc',
					id: 'api/index/get-reset-password-token',
					label: '[GET] /reset-password/:token',
				},
			],
		},
	],
	controllers: [
		{
			type: 'doc',
			id: 'controllers/AdController',
			label: 'AdController',
		},
		{
			type: 'doc',
			id: 'controllers/AuthController',
			label: 'AuthController',
		},
		{
			type: 'doc',
			id: 'controllers/BlogController',
			label: 'BlogController',
		},
		{
			type: 'doc',
			id: 'controllers/BusinessClient',
			label: 'BusinessClient',
		},
		{
			type: 'doc',
			id: 'controllers/BusinessController',
			label: 'BusinessController',
		},
		{
			type: 'doc',
			id: 'controllers/BusinessTeamController',
			label: 'BusinessTeamController',
		},
		{
			type: 'doc',
			id: 'controllers/BusinessUsersController',
			label: 'BusinessUsersController',
		},
		{
			type: 'doc',
			id: 'controllers/CategoriesController',
			label: 'CategoriesController',
		},
		{
			type: 'doc',
			id: 'controllers/DailyMealCategoryController',
			label: 'DailyMealCategoryController',
		},
		{
			type: 'doc',
			id: 'controllers/DailyMealController',
			label: 'DailyMealController',
		},
		{
			type: 'doc',
			id: 'controllers/DeliveryDriverController',
			label: 'DeliveryDriverController',
		},
		{
			type: 'doc',
			id: 'controllers/DeliveryOrderController',
			label: 'DeliveryOrderController',
		},
		{
			type: 'doc',
			id: 'controllers/DocumentsController',
			label: 'DocumentsController',
		},
		{
			type: 'doc',
			id: 'controllers/DriverController',
			label: 'DriverController',
		},
		{
			type: 'doc',
			id: 'controllers/FilesController',
			label: 'FilesController',
		},
		{
			type: 'doc',
			id: 'controllers/FinancesController',
			label: 'FinancesController',
		},
		{
			type: 'doc',
			id: 'controllers/FlagsController',
			label: 'FlagsController',
		},
		{
			type: 'doc',
			id: 'controllers/GoogleMapsController',
			label: 'GoogleMapsController',
		},
		{
			type: 'doc',
			id: 'controllers/LostItemsController',
			label: 'LostItemsController',
		},
		{
			type: 'doc',
			id: 'controllers/MenuController',
			label: 'MenuController',
		},
		{
			type: 'doc',
			id: 'controllers/OrderLobbyController',
			label: 'OrderLobbyController',
		},
		{
			type: 'doc',
			id: 'controllers/OrderLobbyUserController',
			label: 'OrderLobbyUserController',
		},
		{
			type: 'doc',
			id: 'controllers/OverwatchController',
			label: 'OverwatchController',
		},
		{
			type: 'doc',
			id: 'controllers/ProductsController',
			label: 'ProductsController',
		},
		{
			type: 'doc',
			id: 'controllers/PromoController',
			label: 'PromoController',
		},
		{
			type: 'doc',
			id: 'controllers/ReservationController',
			label: 'ReservationController',
		},
		{
			type: 'doc',
			id: 'controllers/StripeController',
			label: 'StripeController',
		},
		{
			type: 'doc',
			id: 'controllers/SubscriptionController',
			label: 'SubscriptionController',
		},
		{
			type: 'doc',
			id: 'controllers/TaxiOrderController',
			label: 'TaxiOrderController',
		},
		{
			type: 'doc',
			id: 'controllers/UserController',
			label: 'UserController',
		},
		{
			type: 'doc',
			id: 'controllers/VehiclesController',
			label: 'VehiclesController',
		},
		{
			type: 'doc',
			id: 'controllers/WordController',
			label: 'WordController',
		},
	],
	daos: [
		{
			type: 'doc',
			id: 'daos/Actions',
			label: 'Actions',
		},
		{
			type: 'doc',
			id: 'daos/Ad',
			label: 'Ad',
		},
		{
			type: 'doc',
			id: 'daos/Addon',
			label: 'Addon',
		},
		{
			type: 'doc',
			id: 'daos/Address',
			label: 'Address',
		},
		{
			type: 'doc',
			id: 'daos/Blog',
			label: 'Blog',
		},
		{
			type: 'doc',
			id: 'daos/Business',
			label: 'Business',
		},
		{
			type: 'doc',
			id: 'daos/BusinessClient',
			label: 'BusinessClient',
		},
		{
			type: 'doc',
			id: 'daos/BusinessMoneyFlows',
			label: 'BusinessMoneyFlows',
		},
		{
			type: 'doc',
			id: 'daos/BusinessTeam',
			label: 'BusinessTeam',
		},
		{
			type: 'doc',
			id: 'daos/BusinessUsers',
			label: 'BusinessUsers',
		},
		{
			type: 'doc',
			id: 'daos/Cashback',
			label: 'Cashback',
		},
		{
			type: 'doc',
			id: 'daos/Categories',
			label: 'Categories',
		},
		{
			type: 'doc',
			id: 'daos/DailyMealCategory',
			label: 'DailyMealCategory',
		},
		{
			type: 'doc',
			id: 'daos/DailyMealDao',
			label: 'DailyMealDao',
		},
		{
			type: 'doc',
			id: 'daos/DeliveryDriver',
			label: 'DeliveryDriver',
		},
		{
			type: 'doc',
			id: 'daos/DeliveryOrder',
			label: 'DeliveryOrder',
		},
		{
			type: 'doc',
			id: 'daos/Document',
			label: 'Document',
		},
		{
			type: 'doc',
			id: 'daos/Driver',
			label: 'Driver',
		},
		{
			type: 'doc',
			id: 'daos/File',
			label: 'File',
		},
		{
			type: 'doc',
			id: 'daos/Finances',
			label: 'Finances',
		},
		{
			type: 'doc',
			id: 'daos/Flags',
			label: 'Flags',
		},
		{
			type: 'doc',
			id: 'daos/Group',
			label: 'Group',
		},
		{
			type: 'doc',
			id: 'daos/LateEvents',
			label: 'LateEvents',
		},
		{
			type: 'doc',
			id: 'daos/LocalLocation',
			label: 'LocalLocation',
		},
		{
			type: 'doc',
			id: 'daos/LostItems',
			label: 'LostItems',
		},
		{
			type: 'doc',
			id: 'daos/Menu',
			label: 'Menu',
		},
		{
			type: 'doc',
			id: 'daos/MenuCategory',
			label: 'MenuCategory',
		},
		{
			type: 'doc',
			id: 'daos/MenuItem',
			label: 'MenuItem',
		},
		{
			type: 'doc',
			id: 'daos/OrderLobby',
			label: 'OrderLobby',
		},
		{
			type: 'doc',
			id: 'daos/OrderLobbyItem',
			label: 'OrderLobbyItem',
		},
		{
			type: 'doc',
			id: 'daos/OrderLobbyUser',
			label: 'OrderLobbyUser',
		},
		{
			type: 'doc',
			id: 'daos/Payment',
			label: 'Payment',
		},
		{
			type: 'doc',
			id: 'daos/PaymentSplit',
			label: 'PaymentSplit',
		},
		{
			type: 'doc',
			id: 'daos/Product',
			label: 'Product',
		},
		{
			type: 'doc',
			id: 'daos/Promo',
			label: 'Promo',
		},
		{
			type: 'doc',
			id: 'daos/PromoAnalytics',
			label: 'PromoAnalytics',
		},
		{
			type: 'doc',
			id: 'daos/Referrals',
			label: 'Referrals',
		},
		{
			type: 'doc',
			id: 'daos/Reservation',
			label: 'Reservation',
		},
		{
			type: 'doc',
			id: 'daos/Review',
			label: 'Review',
		},
		{
			type: 'doc',
			id: 'daos/ScoringPoints',
			label: 'ScoringPoints',
		},
		{
			type: 'doc',
			id: 'daos/Subscription',
			label: 'Subscription',
		},
		{
			type: 'doc',
			id: 'daos/Tax',
			label: 'Tax',
		},
		{
			type: 'doc',
			id: 'daos/TaxiOrder',
			label: 'TaxiOrder',
		},
		{
			type: 'doc',
			id: 'daos/Token',
			label: 'Token',
		},
		{
			type: 'doc',
			id: 'daos/User',
			label: 'User',
		},
		{
			type: 'doc',
			id: 'daos/UserFavoriteBusiness',
			label: 'UserFavoriteBusiness',
		},
		{
			type: 'doc',
			id: 'daos/UserMoneyFlows',
			label: 'UserMoneyFlows',
		},
		{
			type: 'doc',
			id: 'daos/Vehicle',
			label: 'Vehicle',
		},
		{
			type: 'doc',
			id: 'daos/VehicleSpecifications',
			label: 'VehicleSpecifications',
		},
		{
			type: 'doc',
			id: 'daos/WalletFunds',
			label: 'WalletFunds',
		},
		{
			type: 'doc',
			id: 'daos/Word',
			label: 'Word',
		},
	],
	// "prisma": [
	//   {
	//     "type": "doc",
	//     "id": "p",
	//     "label": "0"
	//   },
	//   {
	//     "type": "doc",
	//     "id": "r",
	//     "label": "1"
	//   },
	//   {
	//     "type": "doc",
	//     "id": "i",
	//     "label": "2"
	//   },
	//   {
	//     "type": "doc",
	//     "id": "s",
	//     "label": "3"
	//   },
	//   {
	//     "type": "doc",
	//     "id": "m",
	//     "label": "4"
	//   },
	//   {
	//     "type": "doc",
	//     "id": "a",
	//     "label": "5"
	//   }
	// ]
};
