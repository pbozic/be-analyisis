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
									type: 'category',
									label: 'business_group_name',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/admin/business/business_group_name/get-api-admin-business-business_group_name',
									],
								},
								{
									type: 'category',
									label: 'business_id',
									collapsible: true,
									collapsed: true,
									items: ['api/api/admin/business/business_id/get-api-admin-business-business_id'],
								},
								{
									type: 'category',
									label: 'children',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'parent_business_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/admin/business/children/parent_business_id/get-api-admin-business-children-parent_business_id',
											],
										},
									],
								},
								'api/api/admin/business/get-api-admin-business',
								{
									type: 'category',
									label: 'merchants',
									collapsible: true,
									collapsed: true,
									items: ['api/api/admin/business/merchants/get-api-admin-business-merchants'],
								},
								{
									type: 'category',
									label: 'transfers',
									collapsible: true,
									collapsed: true,
									items: ['api/api/admin/business/transfers/get-api-admin-business-transfers'],
								},
							],
						},
						{
							type: 'category',
							label: 'drivers',
							collapsible: true,
							collapsed: true,
							items: ['api/api/admin/drivers/get-api-admin-drivers'],
						},
						{
							type: 'category',
							label: 'users',
							collapsible: true,
							collapsed: true,
							items: ['api/api/admin/users/get-api-admin-users'],
						},
						{
							type: 'category',
							label: 'vehicles',
							collapsible: true,
							collapsed: true,
							items: ['api/api/admin/vehicles/get-api-admin-vehicles'],
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
							type: 'category',
							label: 'active',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'category',
									collapsible: true,
									collapsed: true,
									items: ['api/api/ads/active/category/post-api-ads-active-category'],
								},
								'api/api/ads/active/get-api-ads-active',
							],
						},
						{
							type: 'category',
							label: 'ad_id',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'activate',
									collapsible: true,
									collapsed: true,
									items: ['api/api/ads/ad_id/activate/patch-api-ads-ad_id-activate'],
								},
								{
									type: 'category',
									label: 'deactivate',
									collapsible: true,
									collapsed: true,
									items: ['api/api/ads/ad_id/deactivate/patch-api-ads-ad_id-deactivate'],
								},
								'api/api/ads/ad_id/delete-api-ads-ad_id',
								'api/api/ads/ad_id/get-api-ads-ad_id',
								'api/api/ads/ad_id/patch-api-ads-ad_id',
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
									label: 'business_id',
									collapsible: true,
									collapsed: true,
									items: ['api/api/ads/business/business_id/get-api-ads-business-business_id'],
								},
							],
						},
						'api/api/ads/get-api-ads',
						'api/api/ads/post-api-ads',
						{
							type: 'category',
							label: 'user',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'user_id',
									collapsible: true,
									collapsed: true,
									items: ['api/api/ads/user/user_id/get-api-ads-user-user_id'],
								},
							],
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
							type: 'category',
							label: 'create',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'scheduled_user',
									collapsible: true,
									collapsed: true,
									items: ['api/api/auth/create/scheduled_user/post-api-auth-create-scheduled_user'],
								},
							],
						},
						{
							type: 'category',
							label: 'municipalities',
							collapsible: true,
							collapsed: true,
							items: ['api/api/auth/municipalities/get-api-auth-municipalities'],
						},
						{
							type: 'category',
							label: 'scheduled_users',
							collapsible: true,
							collapsed: true,
							items: ['api/api/auth/scheduled_users/get-api-auth-scheduled_users'],
						},
						{
							type: 'category',
							label: 'update',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'scheduled_user',
									collapsible: true,
									collapsed: true,
									items: ['api/api/auth/update/scheduled_user/post-api-auth-update-scheduled_user'],
								},
							],
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
							label: 'activate',
							collapsible: true,
							collapsed: true,
							items: ['api/api/business/activate/post-api-business-activate'],
						},
						{
							type: 'category',
							label: 'address',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'add',
									collapsible: true,
									collapsed: true,
									items: ['api/api/business/address/add/post-api-business-address-add'],
								},
								'api/api/business/address/patch-api-business-address',
							],
						},
						{
							type: 'category',
							label: 'auth',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'businesses',
									collapsible: true,
									collapsed: true,
									items: ['api/api/business/auth/businesses/get-api-business-auth-businesses'],
								},
								{
									type: 'category',
									label: 'register',
									collapsible: true,
									collapsed: true,
									items: ['api/api/business/auth/register/post-api-business-auth-register'],
								},
							],
						},
						{
							type: 'category',
							label: 'business-group-name',
							collapsible: true,
							collapsed: true,
							items: ['api/api/business/business-group-name/patch-api-business-business-group-name'],
						},
						{
							type: 'category',
							label: 'business-unit',
							collapsible: true,
							collapsed: true,
							items: ['api/api/business/business-unit/patch-api-business-business-unit'],
						},
						{
							type: 'category',
							label: 'businesses',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'busyness',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/business/businesses/busyness/get-api-business-businesses-busyness',
									],
								},
								{
									type: 'category',
									label: 'ids',
									collapsible: true,
									collapsed: true,
									items: ['api/api/business/businesses/ids/post-api-business-businesses-ids'],
								},
								{
									type: 'category',
									label: 'merchant',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'daily-meals',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/business/businesses/merchant/daily-meals/get-api-business-businesses-merchant-daily-meals',
											],
										},
										'api/api/business/businesses/merchant/get-api-business-businesses-merchant',
										{
											type: 'category',
											label: 'main',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/business/businesses/merchant/main/get-api-business-businesses-merchant-main',
											],
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
											type: 'category',
											label: 'merchant',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/business/businesses/sections/merchant/post-api-business-businesses-sections-merchant',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'taxi',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/business/businesses/taxi/get-api-business-businesses-taxi',
										{
											type: 'category',
											label: 'main',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/business/businesses/taxi/main/get-api-business-businesses-taxi-main',
											],
										},
									],
								},
							],
						},
						{
							type: 'category',
							label: 'business_id',
							collapsible: true,
							collapsed: true,
							items: [
								'api/api/business/business_id/delete-api-business-business_id',
								'api/api/business/business_id/get-api-business-business_id',
								{
									type: 'category',
									label: 'reviews',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/business/business_id/reviews/get-api-business-business_id-reviews',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'daily-meal-users',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'business_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/business/daily-meal-users/business_id/get-api-business-daily-meal-users-business_id',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'deactivate',
							collapsible: true,
							collapsed: true,
							items: ['api/api/business/deactivate/post-api-business-deactivate'],
						},
						{
							type: 'category',
							label: 'delivery-address',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'add',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/business/delivery-address/add/post-api-business-delivery-address-add',
									],
								},
								'api/api/business/delivery-address/patch-api-business-delivery-address',
							],
						},
						{
							type: 'category',
							label: 'earnings',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'all',
									collapsible: true,
									collapsed: true,
									items: ['api/api/business/earnings/all/get-api-business-earnings-all'],
								},
								{
									type: 'category',
									label: 'business_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/business/earnings/business_id/get-api-business-earnings-business_id',
										{
											type: 'category',
											label: 'total',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/business/earnings/business_id/total/get-api-business-earnings-business_id-total',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'total',
									collapsible: true,
									collapsed: true,
									items: ['api/api/business/earnings/total/get-api-business-earnings-total'],
								},
							],
						},
						{
							type: 'category',
							label: 'edit',
							collapsible: true,
							collapsed: true,
							items: ['api/api/business/edit/patch-api-business-edit'],
						},
						{
							type: 'category',
							label: 'email',
							collapsible: true,
							collapsed: true,
							items: ['api/api/business/email/patch-api-business-email'],
						},
						{
							type: 'category',
							label: 'favorites',
							collapsible: true,
							collapsed: true,
							items: [
								'api/api/business/favorites/delete-api-business-favorites',
								'api/api/business/favorites/post-api-business-favorites',
								{
									type: 'category',
									label: 'type',
									collapsible: true,
									collapsed: true,
									items: ['api/api/business/favorites/type/get-api-business-favorites-type'],
								},
							],
						},
						{
							type: 'category',
							label: 'new',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'business_id',
									collapsible: true,
									collapsed: true,
									items: ['api/api/business/new/business_id/patch-api-business-new-business_id'],
								},
							],
						},
						{
							type: 'category',
							label: 'parent',
							collapsible: true,
							collapsed: true,
							items: [
								'api/api/business/parent/get-api-business-parent',
								{
									type: 'category',
									label: 'remove',
									collapsible: true,
									collapsed: true,
									items: ['api/api/business/parent/remove/patch-api-business-parent-remove'],
								},
								{
									type: 'category',
									label: 'update',
									collapsible: true,
									collapsed: true,
									items: ['api/api/business/parent/update/patch-api-business-parent-update'],
								},
							],
						},
						'api/api/business/patch-api-business',
						{
							type: 'category',
							label: 'popular',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'business_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/business/popular/business_id/patch-api-business-popular-business_id',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'purchase_order_limit',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'business_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/business/purchase_order_limit/business_id/get-api-business-purchase_order_limit-business_id',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'register',
							collapsible: true,
							collapsed: true,
							items: ['api/api/business/register/post-api-business-register'],
						},
						{
							type: 'category',
							label: 'restaurant-overwhelmed',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'business_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/business/restaurant-overwhelmed/business_id/patch-api-business-restaurant-overwhelmed-business_id',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'scheduled_users',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'sorting',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/business/scheduled_users/sorting/post-api-business-scheduled_users-sorting',
										{
											type: 'category',
											label: 'type',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/business/scheduled_users/sorting/type/post-api-business-scheduled_users-sorting-type',
											],
										},
									],
								},
							],
						},
						{
							type: 'category',
							label: 'scoring_points',
							collapsible: true,
							collapsed: true,
							items: ['api/api/business/scoring_points/post-api-business-scoring_points'],
						},
						{
							type: 'category',
							label: 'stripe',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'business_id',
									collapsible: true,
									collapsed: true,
									items: ['api/api/business/stripe/business_id/get-api-business-stripe-business_id'],
								},
								{
									type: 'category',
									label: 'generate',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'business_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/business/stripe/generate/business_id/patch-api-business-stripe-generate-business_id',
											],
										},
									],
								},
							],
						},
						{
							type: 'category',
							label: 'telephone',
							collapsible: true,
							collapsed: true,
							items: ['api/api/business/telephone/patch-api-business-telephone'],
						},
						{
							type: 'category',
							label: 'type',
							collapsible: true,
							collapsed: true,
							items: ['api/api/business/type/patch-api-business-type'],
						},
						{
							type: 'category',
							label: 'workingHours',
							collapsible: true,
							collapsed: true,
							items: ['api/api/business/workingHours/patch-api-business-workingHours'],
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
							type: 'category',
							label: 'add_user',
							collapsible: true,
							collapsed: true,
							items: ['api/api/businessTeams/add_user/patch-api-businessTeams-add_user'],
						},
						{
							type: 'category',
							label: 'business_id',
							collapsible: true,
							collapsed: true,
							items: ['api/api/businessTeams/business_id/get-api-businessTeams-business_id'],
						},
						{
							type: 'category',
							label: 'business_teams_id',
							collapsible: true,
							collapsed: true,
							items: [
								'api/api/businessTeams/business_teams_id/delete-api-businessTeams-business_teams_id',
								'api/api/businessTeams/business_teams_id/get-api-businessTeams-business_teams_id',
								{
									type: 'category',
									label: 'limit',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/businessTeams/business_teams_id/limit/patch-api-businessTeams-business_teams_id-limit',
									],
								},
								{
									type: 'category',
									label: 'name',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/businessTeams/business_teams_id/name/patch-api-businessTeams-business_teams_id-name',
									],
								},
								'api/api/businessTeams/business_teams_id/patch-api-businessTeams-business_teams_id',
							],
						},
						{
							type: 'category',
							label: 'create',
							collapsible: true,
							collapsed: true,
							items: ['api/api/businessTeams/create/post-api-businessTeams-create'],
						},
						{
							type: 'category',
							label: 'move_user',
							collapsible: true,
							collapsed: true,
							items: ['api/api/businessTeams/move_user/patch-api-businessTeams-move_user'],
						},
						{
							type: 'category',
							label: 'remove_user',
							collapsible: true,
							collapsed: true,
							items: ['api/api/businessTeams/remove_user/patch-api-businessTeams-remove_user'],
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
							type: 'category',
							label: 'address',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'operating',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/businessUsers/address/operating/post-api-businessUsers-address-operating',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'allowance',
							collapsible: true,
							collapsed: true,
							items: ['api/api/businessUsers/allowance/patch-api-businessUsers-allowance'],
						},
						{
							type: 'category',
							label: 'business',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'business_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/businessUsers/business/business_id/get-api-businessUsers-business-business_id',
									],
								},
								{
									type: 'category',
									label: 'group_user',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'business_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/businessUsers/business/group_user/business_id/get-api-businessUsers-business-group_user-business_id',
											],
										},
									],
								},
							],
						},
						{
							type: 'category',
							label: 'business_users_id',
							collapsible: true,
							collapsed: true,
							items: [
								'api/api/businessUsers/business_users_id/delete-api-businessUsers-business_users_id',
							],
						},
						{
							type: 'category',
							label: 'company-role',
							collapsible: true,
							collapsed: true,
							items: ['api/api/businessUsers/company-role/patch-api-businessUsers-company-role'],
						},
						'api/api/businessUsers/get-api-businessUsers',
						{
							type: 'category',
							label: 'online',
							collapsible: true,
							collapsed: true,
							items: ['api/api/businessUsers/online/patch-api-businessUsers-online'],
						},
						'api/api/businessUsers/post-api-businessUsers',
						{
							type: 'category',
							label: 'type',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'type',
									collapsible: true,
									collapsed: true,
									items: ['api/api/businessUsers/type/type/get-api-businessUsers-type-type'],
								},
							],
						},
						{
							type: 'category',
							label: 'user_id',
							collapsible: true,
							collapsed: true,
							items: ['api/api/businessUsers/user_id/get-api-businessUsers-user_id'],
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
							type: 'category',
							label: 'category_type',
							collapsible: true,
							collapsed: true,
							items: ['api/api/categories/category_type/get-api-categories-category_type'],
						},
						'api/api/categories/get-api-categories',
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
									type: 'category',
									label: 'register',
									collapsible: true,
									collapsed: true,
									items: ['api/api/delivery/auth/register/post-api-delivery-auth-register'],
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
									type: 'category',
									label: 'active',
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
													type: 'category',
													label: 'business_id',
													collapsible: true,
													collapsed: true,
													items: [
														'api/api/delivery/orders/active/business/business_id/get-api-delivery-orders-active-business-business_id',
													],
												},
											],
										},
										{
											type: 'category',
											label: 'driver',
											collapsible: true,
											collapsed: true,
											items: [
												{
													type: 'category',
													label: 'driver_id',
													collapsible: true,
													collapsed: true,
													items: [
														'api/api/delivery/orders/active/driver/driver_id/get-api-delivery-orders-active-driver-driver_id',
													],
												},
											],
										},
										'api/api/delivery/orders/active/get-api-delivery-orders-active',
										{
											type: 'category',
											label: 'user_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/delivery/orders/active/user_id/get-api-delivery-orders-active-user_id',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'add_to_timeline',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/delivery/orders/add_to_timeline/post-api-delivery-orders-add_to_timeline',
									],
								},
								{
									type: 'category',
									label: 'business_id',
									collapsible: true,
									collapsed: true,
									items: ['api/api/delivery/orders/business_id/get-api-delivery-orders-business_id'],
								},
								{
									type: 'category',
									label: 'completed',
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
													type: 'category',
													label: 'business_id',
													collapsible: true,
													collapsed: true,
													items: [
														'api/api/delivery/orders/completed/business/business_id/get-api-delivery-orders-completed-business-business_id',
													],
												},
											],
										},
										{
											type: 'category',
											label: 'driver_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/delivery/orders/completed/driver_id/get-api-delivery-orders-completed-driver_id',
											],
										},
										{
											type: 'category',
											label: 'user',
											collapsible: true,
											collapsed: true,
											items: [
												{
													type: 'category',
													label: 'user_id',
													collapsible: true,
													collapsed: true,
													items: [
														'api/api/delivery/orders/completed/user/user_id/get-api-delivery-orders-completed-user-user_id',
													],
												},
											],
										},
									],
								},
								{
									type: 'category',
									label: 'daily_meals',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'business',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/delivery/orders/daily_meals/business/post-api-delivery-orders-daily_meals-business',
											],
										},
										'api/api/delivery/orders/daily_meals/get-api-delivery-orders-daily_meals',
										'api/api/delivery/orders/daily_meals/post-api-delivery-orders-daily_meals',
										{
											type: 'category',
											label: 'subscription',
											collapsible: true,
											collapsed: true,
											items: [
												{
													type: 'category',
													label: 'payment',
													collapsible: true,
													collapsed: true,
													items: [
														'api/api/delivery/orders/daily_meals/subscription/payment/post-api-delivery-orders-daily_meals-subscription-payment',
													],
												},
												'api/api/delivery/orders/daily_meals/subscription/post-api-delivery-orders-daily_meals-subscription',
											],
										},
										{
											type: 'category',
											label: 'user',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/delivery/orders/daily_meals/user/post-api-delivery-orders-daily_meals-user',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'driver',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'driver_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/delivery/orders/driver/driver_id/get-api-delivery-orders-driver-driver_id',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'order',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'accept',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/delivery/orders/order/accept/post-api-delivery-orders-order-accept',
											],
										},
										{
											type: 'category',
											label: 'cancel_delivery',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/delivery/orders/order/cancel_delivery/post-api-delivery-orders-order-cancel_delivery',
											],
										},
										{
											type: 'category',
											label: 'complete',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/delivery/orders/order/complete/post-api-delivery-orders-order-complete',
											],
										},
										{
											type: 'category',
											label: 'delivery_time',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/delivery/orders/order/delivery_time/post-api-delivery-orders-order-delivery_time',
											],
										},
										{
											type: 'category',
											label: 'dispatcher_cancel',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/delivery/orders/order/dispatcher_cancel/post-api-delivery-orders-order-dispatcher_cancel',
											],
										},
										{
											type: 'category',
											label: 'dispatcher_revoke',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/delivery/orders/order/dispatcher_revoke/post-api-delivery-orders-order-dispatcher_revoke',
											],
										},
										{
											type: 'category',
											label: 'merchant_accept',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/delivery/orders/order/merchant_accept/post-api-delivery-orders-order-merchant_accept',
											],
										},
										{
											type: 'category',
											label: 'order_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/delivery/orders/order/order_id/get-api-delivery-orders-order-order_id',
											],
										},
										{
											type: 'category',
											label: 'pickup_time',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/delivery/orders/order/pickup_time/post-api-delivery-orders-order-pickup_time',
											],
										},
										'api/api/delivery/orders/order/post-api-delivery-orders-order',
										{
											type: 'category',
											label: 'status',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/delivery/orders/order/status/post-api-delivery-orders-order-status',
											],
										},
										{
											type: 'category',
											label: 'update',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/delivery/orders/order/update/post-api-delivery-orders-order-update',
											],
										},
										{
											type: 'category',
											label: 'user',
											collapsible: true,
											collapsed: true,
											items: [
												{
													type: 'category',
													label: 'order_id',
													collapsible: true,
													collapsed: true,
													items: [
														'api/api/delivery/orders/order/user/order_id/get-api-delivery-orders-order-user-order_id',
													],
												},
											],
										},
									],
								},
								{
									type: 'category',
									label: 'timeline',
									collapsible: true,
									collapsed: true,
									items: ['api/api/delivery/orders/timeline/post-api-delivery-orders-timeline'],
								},
								{
									type: 'category',
									label: 'today',
									collapsible: true,
									collapsed: true,
									items: ['api/api/delivery/orders/today/get-api-delivery-orders-today'],
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
							type: 'category',
							label: 'available',
							collapsible: true,
							collapsed: true,
							items: ['api/api/deliveryDrivers/available/get-api-deliveryDrivers-available'],
						},
						{
							type: 'category',
							label: 'create',
							collapsible: true,
							collapsed: true,
							items: ['api/api/deliveryDrivers/create/post-api-deliveryDrivers-create'],
						},
						{
							type: 'category',
							label: 'daily-meals',
							collapsible: true,
							collapsed: true,
							items: ['api/api/deliveryDrivers/daily-meals/get-api-deliveryDrivers-daily-meals'],
						},
						{
							type: 'category',
							label: 'daily_meals',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'business',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/deliveryDrivers/daily_meals/business/post-api-deliveryDrivers-daily_meals-business',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'delivery_driver_id',
							collapsible: true,
							collapsed: true,
							items: [
								'api/api/deliveryDrivers/delivery_driver_id/get-api-deliveryDrivers-delivery_driver_id',
								{
									type: 'category',
									label: 'location',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/deliveryDrivers/delivery_driver_id/location/get-api-deliveryDrivers-delivery_driver_id-location',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'earnings',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'all',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/deliveryDrivers/earnings/all/get-api-deliveryDrivers-earnings-all',
									],
								},
								{
									type: 'category',
									label: 'delivery_driver_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/deliveryDrivers/earnings/delivery_driver_id/get-api-deliveryDrivers-earnings-delivery_driver_id',
										{
											type: 'category',
											label: 'total',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/deliveryDrivers/earnings/delivery_driver_id/total/get-api-deliveryDrivers-earnings-delivery_driver_id-total',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'total',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/deliveryDrivers/earnings/total/get-api-deliveryDrivers-earnings-total',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'edit',
							collapsible: true,
							collapsed: true,
							items: ['api/api/deliveryDrivers/edit/patch-api-deliveryDrivers-edit'],
						},
						'api/api/deliveryDrivers/get-api-deliveryDrivers',
						{
							type: 'category',
							label: 'location',
							collapsible: true,
							collapsed: true,
							items: ['api/api/deliveryDrivers/location/patch-api-deliveryDrivers-location'],
						},
						{
							type: 'category',
							label: 'online',
							collapsible: true,
							collapsed: true,
							items: [
								'api/api/deliveryDrivers/online/get-api-deliveryDrivers-online',
								'api/api/deliveryDrivers/online/patch-api-deliveryDrivers-online',
							],
						},
						{
							type: 'category',
							label: 'orders',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'user_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/deliveryDrivers/orders/user_id/get-api-deliveryDrivers-orders-user_id',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'update',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'delivery_driver_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/deliveryDrivers/update/delivery_driver_id/patch-api-deliveryDrivers-update-delivery_driver_id',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'user',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'user_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/deliveryDrivers/user/user_id/get-api-deliveryDrivers-user-user_id',
									],
								},
							],
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
							type: 'category',
							label: 'additionalInfo',
							collapsible: true,
							collapsed: true,
							items: ['api/api/documents/additionalInfo/patch-api-documents-additionalInfo'],
						},
						{
							type: 'category',
							label: 'business',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'business_id',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'type',
											collapsible: true,
											collapsed: true,
											items: [
												{
													type: 'category',
													label: 'document_type',
													collapsible: true,
													collapsed: true,
													items: [
														'api/api/documents/business/business_id/type/document_type/get-api-documents-business-business_id-type-document_type',
													],
												},
											],
										},
									],
								},
							],
						},
						{
							type: 'category',
							label: 'businesses',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'businessId',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/documents/businesses/businessId/get-api-documents-businesses-businessId',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'create',
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
											type: 'category',
											label: 'business_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/documents/create/business/business_id/post-api-documents-create-business-business_id',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'delivery_driver',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'delivery_driver_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/documents/create/delivery_driver/delivery_driver_id/post-api-documents-create-delivery_driver-delivery_driver_id',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'driver',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'driver_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/documents/create/driver/driver_id/post-api-documents-create-driver-driver_id',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'user',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'user_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/documents/create/user/user_id/post-api-documents-create-user-user_id',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'vehicle',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'vehicle_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/documents/create/vehicle/vehicle_id/post-api-documents-create-vehicle-vehicle_id',
											],
										},
									],
								},
							],
						},
						{
							type: 'category',
							label: 'deliveryPersons',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'deliveryPersonId',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/documents/deliveryPersons/deliveryPersonId/get-api-documents-deliveryPersons-deliveryPersonId',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'documentId',
							collapsible: true,
							collapsed: true,
							items: ['api/api/documents/documentId/get-api-documents-documentId'],
						},
						{
							type: 'category',
							label: 'drivers',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'driverId',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'type',
											collapsible: true,
											collapsed: true,
											items: [
												{
													type: 'category',
													label: 'documentType',
													collapsible: true,
													collapsed: true,
													items: [
														'api/api/documents/drivers/driverId/type/documentType/get-api-documents-drivers-driverId-type-documentType',
													],
												},
											],
										},
									],
								},
								{
									type: 'category',
									label: 'driver_id',
									collapsible: true,
									collapsed: true,
									items: ['api/api/documents/drivers/driver_id/get-api-documents-drivers-driver_id'],
								},
							],
						},
						{
							type: 'category',
							label: 'expirationDate',
							collapsible: true,
							collapsed: true,
							items: ['api/api/documents/expirationDate/patch-api-documents-expirationDate'],
						},
						{
							type: 'category',
							label: 'files',
							collapsible: true,
							collapsed: true,
							items: ['api/api/documents/files/patch-api-documents-files'],
						},
						'api/api/documents/get-api-documents',
						{
							type: 'category',
							label: 'issueDate',
							collapsible: true,
							collapsed: true,
							items: ['api/api/documents/issueDate/patch-api-documents-issueDate'],
						},
						{
							type: 'category',
							label: 'type',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'documentType',
									collapsible: true,
									collapsed: true,
									items: ['api/api/documents/type/documentType/get-api-documents-type-documentType'],
								},
							],
						},
						{
							type: 'category',
							label: 'user',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'type',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'document_type',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/documents/user/type/document_type/get-api-documents-user-type-document_type',
											],
										},
									],
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
									type: 'category',
									label: 'userId',
									collapsible: true,
									collapsed: true,
									items: ['api/api/documents/users/userId/get-api-documents-users-userId'],
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
									type: 'category',
									label: 'vehicleId',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/documents/vehicles/vehicleId/get-api-documents-vehicles-vehicleId',
										{
											type: 'category',
											label: 'type',
											collapsible: true,
											collapsed: true,
											items: [
												{
													type: 'category',
													label: 'documentType',
													collapsible: true,
													collapsed: true,
													items: [
														'api/api/documents/vehicles/vehicleId/type/documentType/get-api-documents-vehicles-vehicleId-type-documentType',
													],
												},
											],
										},
									],
								},
							],
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
							type: 'category',
							label: 'available',
							collapsible: true,
							collapsed: true,
							items: ['api/api/drivers/available/get-api-drivers-available'],
						},
						{
							type: 'category',
							label: 'business',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'business_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/drivers/business/business_id/get-api-drivers-business-business_id',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'come_to_work',
							collapsible: true,
							collapsed: true,
							items: ['api/api/drivers/come_to_work/post-api-drivers-come_to_work'],
						},
						{
							type: 'category',
							label: 'create',
							collapsible: true,
							collapsed: true,
							items: ['api/api/drivers/create/post-api-drivers-create'],
						},
						{
							type: 'category',
							label: 'driver_id',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'action',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'type',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/drivers/driver_id/action/type/patch-api-drivers-driver_id-action-type',
											],
										},
									],
								},
								'api/api/drivers/driver_id/get-api-drivers-driver_id',
								{
									type: 'category',
									label: 'history_location',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/drivers/driver_id/history_location/get-api-drivers-driver_id-history_location',
									],
								},
								{
									type: 'category',
									label: 'location',
									collapsible: true,
									collapsed: true,
									items: ['api/api/drivers/driver_id/location/get-api-drivers-driver_id-location'],
								},
								{
									type: 'category',
									label: 'set_current_vehicle',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/drivers/driver_id/set_current_vehicle/patch-api-drivers-driver_id-set_current_vehicle',
									],
								},
								{
									type: 'category',
									label: 'toggle_orders',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/drivers/driver_id/toggle_orders/patch-api-drivers-driver_id-toggle_orders',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'earnings',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'all',
									collapsible: true,
									collapsed: true,
									items: ['api/api/drivers/earnings/all/get-api-drivers-earnings-all'],
								},
								{
									type: 'category',
									label: 'driver_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/drivers/earnings/driver_id/get-api-drivers-earnings-driver_id',
										{
											type: 'category',
											label: 'total',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/drivers/earnings/driver_id/total/get-api-drivers-earnings-driver_id-total',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'total',
									collapsible: true,
									collapsed: true,
									items: ['api/api/drivers/earnings/total/get-api-drivers-earnings-total'],
								},
							],
						},
						{
							type: 'category',
							label: 'edit',
							collapsible: true,
							collapsed: true,
							items: ['api/api/drivers/edit/patch-api-drivers-edit'],
						},
						{
							type: 'category',
							label: 'full',
							collapsible: true,
							collapsed: true,
							items: ['api/api/drivers/full/get-api-drivers-full'],
						},
						'api/api/drivers/get-api-drivers',
						{
							type: 'category',
							label: 'location',
							collapsible: true,
							collapsed: true,
							items: ['api/api/drivers/location/patch-api-drivers-location'],
						},
						{
							type: 'category',
							label: 'online',
							collapsible: true,
							collapsed: true,
							items: [
								'api/api/drivers/online/get-api-drivers-online',
								'api/api/drivers/online/patch-api-drivers-online',
							],
						},
						{
							type: 'category',
							label: 'orders',
							collapsible: true,
							collapsed: true,
							items: ['api/api/drivers/orders/get-api-drivers-orders'],
						},
						{
							type: 'category',
							label: 'ride_requirements',
							collapsible: true,
							collapsed: true,
							items: ['api/api/drivers/ride_requirements/patch-api-drivers-ride_requirements'],
						},
						{
							type: 'category',
							label: 'sos',
							collapsible: true,
							collapsed: true,
							items: ['api/api/drivers/sos/post-api-drivers-sos'],
						},
						{
							type: 'category',
							label: 'unavailable',
							collapsible: true,
							collapsed: true,
							items: ['api/api/drivers/unavailable/get-api-drivers-unavailable'],
						},
						{
							type: 'category',
							label: 'update',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'driver_id',
									collapsible: true,
									collapsed: true,
									items: ['api/api/drivers/update/driver_id/patch-api-drivers-update-driver_id'],
								},
							],
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
							type: 'category',
							label: 'business',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'business_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/finances/business/business_id/get-api-finances-business-business_id',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'create',
							collapsible: true,
							collapsed: true,
							items: ['api/api/finances/create/post-api-finances-create'],
						},
						{
							type: 'category',
							label: 'finance_id',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'account_number',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/finances/finance_id/account_number/patch-api-finances-finance_id-account_number',
									],
								},
								{
									type: 'category',
									label: 'bank_name',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/finances/finance_id/bank_name/patch-api-finances-finance_id-bank_name',
									],
								},
								'api/api/finances/finance_id/delete-api-finances-finance_id',
								'api/api/finances/finance_id/get-api-finances-finance_id',
								'api/api/finances/finance_id/patch-api-finances-finance_id',
								{
									type: 'category',
									label: 'payment_preferences',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/finances/finance_id/payment_preferences/patch-api-finances-finance_id-payment_preferences',
									],
								},
							],
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
							type: 'category',
							label: 'flag_id',
							collapsible: true,
							collapsed: true,
							items: [
								'api/api/flags/flag_id/delete-api-flags-flag_id',
								'api/api/flags/flag_id/get-api-flags-flag_id',
								'api/api/flags/flag_id/patch-api-flags-flag_id',
							],
						},
						'api/api/flags/get-api-flags',
						'api/api/flags/post-api-flags',
					],
				},
				{
					type: 'category',
					label: 'lostItems',
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: 'category',
							label: 'delete',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'lost_item_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/lostItems/delete/lost_item_id/delete-api-lostItems-delete-lost_item_id',
									],
								},
							],
						},
						'api/api/lostItems/get-api-lostItems',
						{
							type: 'category',
							label: 'report',
							collapsible: true,
							collapsed: true,
							items: ['api/api/lostItems/report/post-api-lostItems-report'],
						},
						{
							type: 'category',
							label: 'update',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'lost_item_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/lostItems/update/lost_item_id/patch-api-lostItems-update-lost_item_id',
									],
								},
							],
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
							type: 'category',
							label: 'active',
							collapsible: true,
							collapsed: true,
							items: ['api/api/menu/active/patch-api-menu-active'],
						},
						{
							type: 'category',
							label: 'add-category-order',
							collapsible: true,
							collapsed: true,
							items: ['api/api/menu/add-category-order/patch-api-menu-add-category-order'],
						},
						{
							type: 'category',
							label: 'business',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'business_id',
									collapsible: true,
									collapsed: true,
									items: ['api/api/menu/business/business_id/get-api-menu-business-business_id'],
								},
							],
						},
						{
							type: 'category',
							label: 'daily',
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
											type: 'category',
											label: 'business_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/menu/daily/business/business_id/post-api-menu-daily-business-business_id',
											],
										},
									],
								},
							],
						},
						{
							type: 'category',
							label: 'daily-meal',
							collapsible: true,
							collapsed: true,
							items: ['api/api/menu/daily-meal/post-api-menu-daily-meal'],
						},
						{
							type: 'category',
							label: 'daily-meals-menu',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'business_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/menu/daily-meals-menu/business_id/get-api-menu-daily-meals-menu-business_id',
									],
								},
								{
									type: 'category',
									label: 'create',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/menu/daily-meals-menu/create/post-api-menu-daily-meals-menu-create',
									],
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
									type: 'category',
									label: 'business_id',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'date',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/menu/menu/business_id/date/get-api-menu-menu-business_id-date',
											],
										},
									],
								},
							],
						},
						{
							type: 'category',
							label: 'menu-categories',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'add',
									collapsible: true,
									collapsed: true,
									items: ['api/api/menu/menu-categories/add/patch-api-menu-menu-categories-add'],
								},
								{
									type: 'category',
									label: 'business',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'business_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/menu/menu-categories/business/business_id/get-api-menu-menu-categories-business-business_id',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'create',
									collapsible: true,
									collapsed: true,
									items: ['api/api/menu/menu-categories/create/post-api-menu-menu-categories-create'],
								},
								{
									type: 'category',
									label: 'menu_category_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/menu/menu-categories/menu_category_id/delete-api-menu-menu-categories-menu_category_id',
									],
								},
								{
									type: 'category',
									label: 'menu_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/menu/menu-categories/menu_id/get-api-menu-menu-categories-menu_id',
									],
								},
								{
									type: 'category',
									label: 'order',
									collapsible: true,
									collapsed: true,
									items: ['api/api/menu/menu-categories/order/patch-api-menu-menu-categories-order'],
								},
								'api/api/menu/menu-categories/patch-api-menu-menu-categories',
								{
									type: 'category',
									label: 'price',
									collapsible: true,
									collapsed: true,
									items: ['api/api/menu/menu-categories/price/patch-api-menu-menu-categories-price'],
								},
								{
									type: 'category',
									label: 'remove',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/menu/menu-categories/remove/patch-api-menu-menu-categories-remove',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'menu-items',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'add-order',
									collapsible: true,
									collapsed: true,
									items: ['api/api/menu/menu-items/add-order/patch-api-menu-menu-items-add-order'],
								},
								{
									type: 'category',
									label: 'business',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'business_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/menu/menu-items/business/business_id/get-api-menu-menu-items-business-business_id',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'business_id',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'date',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/menu/menu-items/business_id/date/get-api-menu-menu-items-business_id-date',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'category',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'add',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/menu/menu-items/category/add/patch-api-menu-menu-items-category-add',
											],
										},
										{
											type: 'category',
											label: 'category_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/menu/menu-items/category/category_id/delete-api-menu-menu-items-category-category_id',
												'api/api/menu/menu-items/category/category_id/post-api-menu-menu-items-category-category_id',
											],
										},
										{
											type: 'category',
											label: 'remove',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/menu/menu-items/category/remove/patch-api-menu-menu-items-category-remove',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'category_id',
									collapsible: true,
									collapsed: true,
									items: ['api/api/menu/menu-items/category_id/get-api-menu-menu-items-category_id'],
								},
								{
									type: 'category',
									label: 'create',
									collapsible: true,
									collapsed: true,
									items: ['api/api/menu/menu-items/create/post-api-menu-menu-items-create'],
								},
								{
									type: 'category',
									label: 'extras-sides',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'business_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/menu/menu-items/extras-sides/business_id/post-api-menu-menu-items-extras-sides-business_id',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'is_enabled',
									collapsible: true,
									collapsed: true,
									items: ['api/api/menu/menu-items/is_enabled/patch-api-menu-menu-items-is_enabled'],
								},
								{
									type: 'category',
									label: 'menu_item_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/menu/menu-items/menu_item_id/delete-api-menu-menu-items-menu_item_id',
									],
								},
								{
									type: 'category',
									label: 'order',
									collapsible: true,
									collapsed: true,
									items: ['api/api/menu/menu-items/order/patch-api-menu-menu-items-order'],
								},
								'api/api/menu/menu-items/patch-api-menu-menu-items',
								{
									type: 'category',
									label: 'price',
									collapsible: true,
									collapsed: true,
									items: ['api/api/menu/menu-items/price/patch-api-menu-menu-items-price'],
								},
								{
									type: 'category',
									label: 'remove-order',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/menu/menu-items/remove-order/patch-api-menu-menu-items-remove-order',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'menu_id',
							collapsible: true,
							collapsed: true,
							items: ['api/api/menu/menu_id/delete-api-menu-menu_id'],
						},
						'api/api/menu/post-api-menu',
						{
							type: 'category',
							label: 'remove-category-order',
							collapsible: true,
							collapsed: true,
							items: ['api/api/menu/remove-category-order/patch-api-menu-remove-category-order'],
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
									type: 'category',
									label: 'register',
									collapsible: true,
									collapsed: true,
									items: ['api/api/merchant/auth/register/post-api-merchant-auth-register'],
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
									type: 'category',
									label: 'active',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'user_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/merchant/reservations/active/user_id/get-api-merchant-reservations-active-user_id',
											],
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
											label: 'business_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/merchant/reservations/business/business_id/get-api-merchant-reservations-business-business_id',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'create',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/merchant/reservations/create/post-api-merchant-reservations-create',
									],
								},
								'api/api/merchant/reservations/get-api-merchant-reservations',
								{
									type: 'category',
									label: 'reservation_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/merchant/reservations/reservation_id/delete-api-merchant-reservations-reservation_id',
										'api/api/merchant/reservations/reservation_id/get-api-merchant-reservations-reservation_id',
									],
								},
								{
									type: 'category',
									label: 'status',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/merchant/reservations/status/patch-api-merchant-reservations-status',
									],
								},
								{
									type: 'category',
									label: 'table',
									collapsible: true,
									collapsed: true,
									items: ['api/api/merchant/reservations/table/post-api-merchant-reservations-table'],
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
							type: 'category',
							label: 'cancel',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'order_lobbies_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/orderLobby/cancel/order_lobbies_id/delete-api-orderLobby-cancel-order_lobbies_id',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'create',
							collapsible: true,
							collapsed: true,
							items: ['api/api/orderLobby/create/post-api-orderLobby-create'],
						},
						{
							type: 'category',
							label: 'items',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'order_lobbies_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/orderLobby/items/order_lobbies_id/patch-api-orderLobby-items-order_lobbies_id',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'submit',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'order_lobbies_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/orderLobby/submit/order_lobbies_id/post-api-orderLobby-submit-order_lobbies_id',
									],
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
									type: 'category',
									label: 'order_lobbies_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/orderLobby/users/order_lobbies_id/patch-api-orderLobby-users-order_lobbies_id',
									],
								},
							],
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
							type: 'category',
							label: 'limit',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'order_lobby_users_id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/orderLobbyUser/limit/order_lobby_users_id/patch-api-orderLobbyUser-limit-order_lobby_users_id',
									],
								},
							],
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
							type: 'category',
							label: 'drivers',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'activity',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'settings',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/overwatch/drivers/activity/settings/get-api-overwatch-drivers-activity-settings',
												'api/api/overwatch/drivers/activity/settings/patch-api-overwatch-drivers-activity-settings',
											],
										},
									],
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
									type: 'category',
									label: 'pagination',
									collapsible: true,
									collapsed: true,
									items: ['api/api/overwatch/orders/pagination/post-api-overwatch-orders-pagination'],
								},
							],
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
								'api/api/promo/ads/get-api-promo-ads',
								{
									type: 'category',
									label: 'id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/promo/ads/id/delete-api-promo-ads-id',
										'api/api/promo/ads/id/get-api-promo-ads-id',
										'api/api/promo/ads/id/put-api-promo-ads-id',
									],
								},
								'api/api/promo/ads/post-api-promo-ads',
								{
									type: 'category',
									label: 'type',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'type',
											collapsible: true,
											collapsed: true,
											items: ['api/api/promo/ads/type/type/get-api-promo-ads-type-type'],
										},
									],
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
									type: 'category',
									label: 'ad',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'ad',
											collapsible: true,
											collapsed: true,
											items: ['api/api/promo/banners/ad/ad/get-api-promo-banners-ad-ad'],
										},
									],
								},
								'api/api/promo/banners/get-api-promo-banners',
								{
									type: 'category',
									label: 'id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/promo/banners/id/delete-api-promo-banners-id',
										'api/api/promo/banners/id/get-api-promo-banners-id',
										'api/api/promo/banners/id/put-api-promo-banners-id',
									],
								},
								'api/api/promo/banners/post-api-promo-banners',
								{
									type: 'category',
									label: 'section',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'section',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/promo/banners/section/section/get-api-promo-banners-section-section',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'serviceType',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'serviceType',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/promo/banners/serviceType/serviceType/get-api-promo-banners-serviceType-serviceType',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'size',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'size',
											collapsible: true,
											collapsed: true,
											items: ['api/api/promo/banners/size/size/get-api-promo-banners-size-size'],
										},
									],
								},
								{
									type: 'category',
									label: 'type',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'type',
											collapsible: true,
											collapsed: true,
											items: ['api/api/promo/banners/type/type/get-api-promo-banners-type-type'],
										},
									],
								},
							],
						},
						{
							type: 'category',
							label: 'sections',
							collapsible: true,
							collapsed: true,
							items: [
								'api/api/promo/sections/get-api-promo-sections',
								{
									type: 'category',
									label: 'id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/promo/sections/id/delete-api-promo-sections-id',
										'api/api/promo/sections/id/get-api-promo-sections-id',
										'api/api/promo/sections/id/patch-api-promo-sections-id',
									],
								},
								'api/api/promo/sections/post-api-promo-sections',
								{
									type: 'category',
									label: 'reorder',
									collapsible: true,
									collapsed: true,
									items: ['api/api/promo/sections/reorder/patch-api-promo-sections-reorder'],
								},
								{
									type: 'category',
									label: 'type',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'type',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/promo/sections/type/type/get-api-promo-sections-type-type',
											],
										},
									],
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
									type: 'category',
									label: 'business',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'business_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/promo/section_buy/business/business_id/get-api-promo-section_buy-business-business_id',
											],
										},
									],
								},
								'api/api/promo/section_buy/get-api-promo-section_buy',
								{
									type: 'category',
									label: 'id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/promo/section_buy/id/delete-api-promo-section_buy-id',
										'api/api/promo/section_buy/id/get-api-promo-section_buy-id',
										'api/api/promo/section_buy/id/put-api-promo-section_buy-id',
									],
								},
								'api/api/promo/section_buy/post-api-promo-section_buy',
								{
									type: 'category',
									label: 'request',
									collapsible: true,
									collapsed: true,
									items: ['api/api/promo/section_buy/request/post-api-promo-section_buy-request'],
								},
								{
									type: 'category',
									label: 'section',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'section',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/promo/section_buy/section/section/get-api-promo-section_buy-section-section',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'stripeSub',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/promo/section_buy/stripeSub/id/post-api-promo-section_buy-stripeSub-id',
											],
										},
										{
											type: 'category',
											label: 'stripe_subscription_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/promo/section_buy/stripeSub/stripe_subscription_id/get-api-promo-section_buy-stripeSub-stripe_subscription_id',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'tier',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'tier',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/promo/section_buy/tier/tier/get-api-promo-section_buy-tier-tier',
											],
										},
									],
								},
							],
						},
						{
							type: 'category',
							label: 'words',
							collapsible: true,
							collapsed: true,
							items: [
								'api/api/promo/words/get-api-promo-words',
								{
									type: 'category',
									label: 'id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/promo/words/id/delete-api-promo-words-id',
										'api/api/promo/words/id/get-api-promo-words-id',
										'api/api/promo/words/id/patch-api-promo-words-id',
									],
								},
								'api/api/promo/words/post-api-promo-words',
							],
						},
						{
							type: 'category',
							label: 'word_buy',
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
											type: 'category',
											label: 'business_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/promo/word_buy/business/business_id/get-api-promo-word_buy-business-business_id',
											],
										},
									],
								},
								'api/api/promo/word_buy/get-api-promo-word_buy',
								{
									type: 'category',
									label: 'id',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/promo/word_buy/id/delete-api-promo-word_buy-id',
										'api/api/promo/word_buy/id/get-api-promo-word_buy-id',
										'api/api/promo/word_buy/id/put-api-promo-word_buy-id',
									],
								},
								'api/api/promo/word_buy/post-api-promo-word_buy',
								{
									type: 'category',
									label: 'stripeSub',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/promo/word_buy/stripeSub/id/post-api-promo-word_buy-stripeSub-id',
											],
										},
										{
											type: 'category',
											label: 'stripe_subscription_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/promo/word_buy/stripeSub/stripe_subscription_id/get-api-promo-word_buy-stripeSub-stripe_subscription_id',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'tier',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'tier',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/promo/word_buy/tier/tier/get-api-promo-word_buy-tier-tier',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'word',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'word',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/promo/word_buy/word/word/get-api-promo-word_buy-word-word',
											],
										},
									],
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
							type: 'category',
							label: 'business_id',
							collapsible: true,
							collapsed: true,
							items: ['api/api/search/business_id/get-api-search-business_id'],
						},
						'api/api/search/get-api-search',
						{
							type: 'category',
							label: 'menu-items',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'extras-sides',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'business_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/search/menu-items/extras-sides/business_id/post-api-search-menu-items-extras-sides-business_id',
											],
										},
									],
								},
							],
						},
						'api/api/search/post-api-search',
						{
							type: 'category',
							label: 'sections',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'merchant',
									collapsible: true,
									collapsed: true,
									items: ['api/api/search/sections/merchant/post-api-search-sections-merchant'],
								},
							],
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
							type: 'category',
							label: 'generate',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'business_id',
									collapsible: true,
									collapsed: true,
									items: ['api/api/stripe/generate/business_id/get-api-stripe-generate-business_id'],
								},
							],
						},
						{
							type: 'category',
							label: 'return',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'business_id',
									collapsible: true,
									collapsed: true,
									items: ['api/api/stripe/return/business_id/get-api-stripe-return-business_id'],
								},
							],
						},
						{
							type: 'category',
							label: 'webhook',
							collapsible: true,
							collapsed: true,
							items: ['api/api/stripe/webhook/post-api-stripe-webhook'],
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
							type: 'category',
							label: 'calculate_transfer_price',
							collapsible: true,
							collapsed: true,
							items: ['api/api/taxi/calculate_transfer_price/post-api-taxi-calculate_transfer_price'],
						},
						'api/api/taxi/get-api-taxi',
						{
							type: 'category',
							label: 'grouped_order',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'cancel',
									collapsible: true,
									collapsed: true,
									items: ['api/api/taxi/grouped_order/cancel/post-api-taxi-grouped_order-cancel'],
								},
								{
									type: 'category',
									label: 'reject',
									collapsible: true,
									collapsed: true,
									items: ['api/api/taxi/grouped_order/reject/post-api-taxi-grouped_order-reject'],
								},
							],
						},
						{
							type: 'category',
							label: 'order',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'accept',
									collapsible: true,
									collapsed: true,
									items: ['api/api/taxi/order/accept/post-api-taxi-order-accept'],
								},
								{
									type: 'category',
									label: 'append_driver',
									collapsible: true,
									collapsed: true,
									items: ['api/api/taxi/order/append_driver/post-api-taxi-order-append_driver'],
								},
								{
									type: 'category',
									label: 'cancel',
									collapsible: true,
									collapsed: true,
									items: ['api/api/taxi/order/cancel/post-api-taxi-order-cancel'],
								},
								{
									type: 'category',
									label: 'complete',
									collapsible: true,
									collapsed: true,
									items: ['api/api/taxi/order/complete/post-api-taxi-order-complete'],
								},
								{
									type: 'category',
									label: 'complete_route',
									collapsible: true,
									collapsed: true,
									items: ['api/api/taxi/order/complete_route/post-api-taxi-order-complete_route'],
								},
								{
									type: 'category',
									label: 'delivery_location',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/taxi/order/delivery_location/post-api-taxi-order-delivery_location',
									],
								},
								{
									type: 'category',
									label: 'order_id',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'available-drivers',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/taxi/order/order_id/available-drivers/get-api-taxi-order-order_id-available-drivers',
											],
										},
										'api/api/taxi/order/order_id/get-api-taxi-order-order_id',
									],
								},
								{
									type: 'category',
									label: 'payment',
									collapsible: true,
									collapsed: true,
									items: ['api/api/taxi/order/payment/post-api-taxi-order-payment'],
								},
								{
									type: 'category',
									label: 'pickup_location',
									collapsible: true,
									collapsed: true,
									items: ['api/api/taxi/order/pickup_location/post-api-taxi-order-pickup_location'],
								},
								{
									type: 'category',
									label: 'preferences',
									collapsible: true,
									collapsed: true,
									items: ['api/api/taxi/order/preferences/post-api-taxi-order-preferences'],
								},
								{
									type: 'category',
									label: 'reject',
									collapsible: true,
									collapsed: true,
									items: ['api/api/taxi/order/reject/post-api-taxi-order-reject'],
								},
								{
									type: 'category',
									label: 'route',
									collapsible: true,
									collapsed: true,
									items: ['api/api/taxi/order/route/post-api-taxi-order-route'],
								},
								{
									type: 'category',
									label: 'status',
									collapsible: true,
									collapsed: true,
									items: ['api/api/taxi/order/status/post-api-taxi-order-status'],
								},
								{
									type: 'category',
									label: 'timeline',
									collapsible: true,
									collapsed: true,
									items: ['api/api/taxi/order/timeline/post-api-taxi-order-timeline'],
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
									type: 'category',
									label: 'active',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'driver',
											collapsible: true,
											collapsed: true,
											items: [
												{
													type: 'category',
													label: 'driver_id',
													collapsible: true,
													collapsed: true,
													items: [
														'api/api/taxi/orders/active/driver/driver_id/get-api-taxi-orders-active-driver-driver_id',
													],
												},
											],
										},
										{
											type: 'category',
											label: 'user_id',
											collapsible: true,
											collapsed: true,
											items: [
												{
													type: 'category',
													label: 'type',
													collapsible: true,
													collapsed: true,
													items: [
														'api/api/taxi/orders/active/user_id/type/get-api-taxi-orders-active-user_id-type',
													],
												},
											],
										},
									],
								},
								{
									type: 'category',
									label: 'canceled',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'driver_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/taxi/orders/canceled/driver_id/get-api-taxi-orders-canceled-driver_id',
											],
										},
										{
											type: 'category',
											label: 'user',
											collapsible: true,
											collapsed: true,
											items: [
												{
													type: 'category',
													label: 'user_id',
													collapsible: true,
													collapsed: true,
													items: [
														'api/api/taxi/orders/canceled/user/user_id/get-api-taxi-orders-canceled-user-user_id',
													],
												},
											],
										},
									],
								},
								{
									type: 'category',
									label: 'completed',
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
													type: 'category',
													label: 'business_id',
													collapsible: true,
													collapsed: true,
													items: [
														'api/api/taxi/orders/completed/business/business_id/get-api-taxi-orders-completed-business-business_id',
													],
												},
											],
										},
										{
											type: 'category',
											label: 'driver_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/taxi/orders/completed/driver_id/get-api-taxi-orders-completed-driver_id',
											],
										},
										{
											type: 'category',
											label: 'user',
											collapsible: true,
											collapsed: true,
											items: [
												{
													type: 'category',
													label: 'user_id',
													collapsible: true,
													collapsed: true,
													items: [
														'api/api/taxi/orders/completed/user/user_id/get-api-taxi-orders-completed-user-user_id',
													],
												},
											],
										},
									],
								},
								{
									type: 'category',
									label: 'driver',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'driver_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/taxi/orders/driver/driver_id/get-api-taxi-orders-driver-driver_id',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'pagination',
									collapsible: true,
									collapsed: true,
									items: ['api/api/taxi/orders/pagination/post-api-taxi-orders-pagination'],
								},
								{
									type: 'category',
									label: 'rejected',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'driver_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/taxi/orders/rejected/driver_id/get-api-taxi-orders-rejected-driver_id',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'scheduled_orders',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'driver',
											collapsible: true,
											collapsed: true,
											items: [
												{
													type: 'category',
													label: 'driver_id',
													collapsible: true,
													collapsed: true,
													items: [
														'api/api/taxi/orders/scheduled_orders/driver/driver_id/get-api-taxi-orders-scheduled_orders-driver-driver_id',
													],
												},
											],
										},
										'api/api/taxi/orders/scheduled_orders/get-api-taxi-orders-scheduled_orders',
										{
											type: 'category',
											label: 'user',
											collapsible: true,
											collapsed: true,
											items: [
												{
													type: 'category',
													label: 'user_id',
													collapsible: true,
													collapsed: true,
													items: [
														'api/api/taxi/orders/scheduled_orders/user/user_id/get-api-taxi-orders-scheduled_orders-user-user_id',
													],
												},
											],
										},
									],
								},
							],
						},
						{
							type: 'category',
							label: 'today',
							collapsible: true,
							collapsed: true,
							items: ['api/api/taxi/today/get-api-taxi-today'],
						},
						{
							type: 'category',
							label: 'transfer_price',
							collapsible: true,
							collapsed: true,
							items: ['api/api/taxi/transfer_price/post-api-taxi-transfer_price'],
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
							type: 'category',
							label: 'active',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'user_id',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/active/user_id/patch-api-users-active-user_id'],
								},
							],
						},
						{
							type: 'category',
							label: 'delete',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'user_id',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/delete/user_id/delete-api-users-delete-user_id'],
								},
							],
						},
						{
							type: 'category',
							label: 'disabled',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'user_id',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/disabled/user_id/patch-api-users-disabled-user_id'],
								},
							],
						},
						'api/api/users/get-api-users',
						{
							type: 'category',
							label: 'group_user',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'allowance',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/group_user/allowance/patch-api-users-group_user-allowance'],
								},
							],
						},
						{
							type: 'category',
							label: 'me',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'active_order_ids',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/me/active_order_ids/get-api-users-me-active_order_ids'],
								},
								{
									type: 'category',
									label: 'address',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'address_id',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/users/me/address/address_id/delete-api-users-me-address-address_id',
												{
													type: 'category',
													label: 'primary',
													collapsible: true,
													collapsed: true,
													items: [
														'api/api/users/me/address/address_id/primary/patch-api-users-me-address-address_id-primary',
													],
												},
											],
										},
									],
								},
								{
									type: 'category',
									label: 'ads-personalization',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/users/me/ads-personalization/patch-api-users-me-ads-personalization',
									],
								},
								{
									type: 'category',
									label: 'allergies-preferences',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/users/me/allergies-preferences/patch-api-users-me-allergies-preferences',
									],
								},
								{
									type: 'category',
									label: 'claim-reward',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/me/claim-reward/patch-api-users-me-claim-reward'],
								},
								{
									type: 'category',
									label: 'confirm-payment-intent',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/users/me/confirm-payment-intent/post-api-users-me-confirm-payment-intent',
									],
								},
								{
									type: 'category',
									label: 'credits',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'service_type',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/users/me/credits/service_type/get-api-users-me-credits-service_type',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'delivery-push-notification-preferences',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/users/me/delivery-push-notification-preferences/patch-api-users-me-delivery-push-notification-preferences',
									],
								},
								{
									type: 'category',
									label: 'disabled',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/me/disabled/patch-api-users-me-disabled'],
								},
								'api/api/users/me/get-api-users-me',
								{
									type: 'category',
									label: 'group_user',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'allowance',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/users/me/group_user/allowance/patch-api-users-me-group_user-allowance',
											],
										},
										{
											type: 'category',
											label: 'delete',
											collapsible: true,
											collapsed: true,
											items: [
												{
													type: 'category',
													label: 'group_user_id',
													collapsible: true,
													collapsed: true,
													items: [
														'api/api/users/me/group_user/delete/group_user_id/delete-api-users-me-group_user-delete-group_user_id',
													],
												},
											],
										},
										{
											type: 'category',
											label: 'status',
											collapsible: true,
											collapsed: true,
											items: [
												'api/api/users/me/group_user/status/patch-api-users-me-group_user-status',
											],
										},
									],
								},
								{
									type: 'category',
									label: 'marketing-notifications',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/users/me/marketing-notifications/patch-api-users-me-marketing-notifications',
									],
								},
								{
									type: 'category',
									label: 'newsletter',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/me/newsletter/patch-api-users-me-newsletter'],
								},
								{
									type: 'category',
									label: 'notification-preferences',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/users/me/notification-preferences/patch-api-users-me-notification-preferences',
									],
								},
								{
									type: 'category',
									label: 'payment-sheet',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/me/payment-sheet/get-api-users-me-payment-sheet'],
								},
								{
									type: 'category',
									label: 'ping',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/me/ping/get-api-users-me-ping'],
								},
								{
									type: 'category',
									label: 'profile_picture',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/me/profile_picture/patch-api-users-me-profile_picture'],
								},
								{
									type: 'category',
									label: 'radio-preferences',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/me/radio-preferences/patch-api-users-me-radio-preferences'],
								},
								{
									type: 'category',
									label: 'redeem-referral-code',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/users/me/redeem-referral-code/post-api-users-me-redeem-referral-code',
									],
								},
								{
									type: 'category',
									label: 'referral',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/me/referral/get-api-users-me-referral'],
								},
								{
									type: 'category',
									label: 'request-data',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/me/request-data/post-api-users-me-request-data'],
								},
								{
									type: 'category',
									label: 'request-payment-intent',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/users/me/request-payment-intent/post-api-users-me-request-payment-intent',
									],
								},
								{
									type: 'category',
									label: 'requestToAddFunds',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/me/requestToAddFunds/post-api-users-me-requestToAddFunds'],
								},
								{
									type: 'category',
									label: 'reviews',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/me/reviews/get-api-users-me-reviews'],
								},
								{
									type: 'category',
									label: 'scheduled_orders',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/me/scheduled_orders/get-api-users-me-scheduled_orders'],
								},
								{
									type: 'category',
									label: 'spicy-preferences',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/me/spicy-preferences/patch-api-users-me-spicy-preferences'],
								},
								{
									type: 'category',
									label: 'taxi-preferences',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/me/taxi-preferences/patch-api-users-me-taxi-preferences'],
								},
								{
									type: 'category',
									label: 'taxi-push-notification-preferences',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/users/me/taxi-push-notification-preferences/patch-api-users-me-taxi-push-notification-preferences',
									],
								},
								{
									type: 'category',
									label: 'transfer-preferences',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/users/me/transfer-preferences/patch-api-users-me-transfer-preferences',
									],
								},
								{
									type: 'category',
									label: 'transfer-push-notification-preferences',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/users/me/transfer-push-notification-preferences/patch-api-users-me-transfer-push-notification-preferences',
									],
								},
								{
									type: 'category',
									label: 'update_user',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/me/update_user/post-api-users-me-update_user'],
								},
								{
									type: 'category',
									label: 'verify',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'phone',
											collapsible: true,
											collapsed: true,
											items: ['api/api/users/me/verify/phone/get-api-users-me-verify-phone'],
										},
									],
								},
							],
						},
						{
							type: 'category',
							label: 'personal',
							collapsible: true,
							collapsed: true,
							items: ['api/api/users/personal/get-api-users-personal'],
						},
						{
							type: 'category',
							label: 'user',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'code',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/user/code/get-api-users-user-code'],
								},
							],
						},
						{
							type: 'category',
							label: 'user_id',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'family_wallet',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/user_id/family_wallet/get-api-users-user_id-family_wallet'],
								},
								'api/api/users/user_id/get-api-users-user_id',
								{
									type: 'category',
									label: 'reviews',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/user_id/reviews/get-api-users-user_id-reviews'],
								},
								{
									type: 'category',
									label: 'transactions',
									collapsible: true,
									collapsed: true,
									items: ['api/api/users/user_id/transactions/get-api-users-user_id-transactions'],
								},
								{
									type: 'category',
									label: 'wallet',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/users/user_id/wallet/get-api-users-user_id-wallet',
										'api/api/users/user_id/wallet/patch-api-users-user_id-wallet',
									],
								},
							],
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
							type: 'category',
							label: 'business',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'businessId',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/vehicles/business/businessId/get-api-vehicles-business-businessId',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'category',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'vehicleCategory',
									collapsible: true,
									collapsed: true,
									items: [
										'api/api/vehicles/category/vehicleCategory/get-api-vehicles-category-vehicleCategory',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'class',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'vehicleClass',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'category',
											collapsible: true,
											collapsed: true,
											items: [
												{
													type: 'category',
													label: 'vehicleCategory',
													collapsible: true,
													collapsed: true,
													items: [
														'api/api/vehicles/class/vehicleClass/category/vehicleCategory/get-api-vehicles-class-vehicleClass-category-vehicleCategory',
													],
												},
											],
										},
										'api/api/vehicles/class/vehicleClass/get-api-vehicles-class-vehicleClass',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'create',
							collapsible: true,
							collapsed: true,
							items: ['api/api/vehicles/create/post-api-vehicles-create'],
						},
						{
							type: 'category',
							label: 'driver',
							collapsible: true,
							collapsed: true,
							items: [
								{
									type: 'category',
									label: 'assign',
									collapsible: true,
									collapsed: true,
									items: ['api/api/vehicles/driver/assign/post-api-vehicles-driver-assign'],
								},
								{
									type: 'category',
									label: 'driver_id',
									collapsible: true,
									collapsed: true,
									items: [
										{
											type: 'category',
											label: 'category',
											collapsible: true,
											collapsed: true,
											items: [
												{
													type: 'category',
													label: 'vehicleCategory',
													collapsible: true,
													collapsed: true,
													items: [
														'api/api/vehicles/driver/driver_id/category/vehicleCategory/get-api-vehicles-driver-driver_id-category-vehicleCategory',
													],
												},
											],
										},
										{
											type: 'category',
											label: 'class',
											collapsible: true,
											collapsed: true,
											items: [
												{
													type: 'category',
													label: 'vehicleClass',
													collapsible: true,
													collapsed: true,
													items: [
														'api/api/vehicles/driver/driver_id/class/vehicleClass/get-api-vehicles-driver-driver_id-class-vehicleClass',
													],
												},
											],
										},
										'api/api/vehicles/driver/driver_id/get-api-vehicles-driver-driver_id',
									],
								},
								{
									type: 'category',
									label: 'unassign',
									collapsible: true,
									collapsed: true,
									items: ['api/api/vehicles/driver/unassign/patch-api-vehicles-driver-unassign'],
								},
							],
						},
						'api/api/vehicles/get-api-vehicles',
						'api/api/vehicles/patch-api-vehicles',
						{
							type: 'category',
							label: 'vehicle_id',
							collapsible: true,
							collapsed: true,
							items: [
								'api/api/vehicles/vehicle_id/delete-api-vehicles-vehicle_id',
								'api/api/vehicles/vehicle_id/get-api-vehicles-vehicle_id',
							],
						},
					],
				},
			],
		},
		{
			type: 'category',
			label: 'reset-password',
			collapsible: true,
			collapsed: true,
			items: [
				{
					type: 'category',
					label: 'token',
					collapsible: true,
					collapsed: true,
					items: ['api/reset-password/token/get-reset-password-token'],
				},
			],
		},
	],
};
