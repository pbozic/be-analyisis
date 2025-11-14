import { Prisma } from '@prisma/client';

// TODO: This include is for old schema, ubdate to new schema structure
const userDataRequestDefaultInclude = Prisma.validator<Prisma.usersInclude>()({
	addresses: {
		// user_address
		select: {
			address: true, // addresses model
		},
	},
	// tokens: { //NO NEED TO SEND BACK THE TOKENS
	// 	where: { active: true } // Optional: only active tokens
	// },
	business_users: {
		select: {
			business_users_id: true,
			online: true,
			company_role: true,
			created_at: true,
			user_id: true,
			business_id: true,
			//include
			business: {
				select: {
					business_id: true,
					//name: true,
					//type: true,
					// Only include minimal business information needed for identification
				},
			},
			operating_address: {
				select: {
					address_id: true,
					address: true,
					// Only include minimal address information needed for identification
				},
			},
		},
	},
	driver: {
		select: {
			driver_id: true,
			//business_id: true,
			online: true,
			on_order: true,
			working_hours: true,
			ride_requirements: true,
			created_at: true,
			updated_at: true,
			user_id: true,
			current_vehicle_id: true,
			last_used_vehicle_id: true,
			location: true,
			delivery_timeline: true,
			last_ping_at: true,
			is_inactive: true,
			transfer_requirements: true,
			regions: true,
			handles_taxi_orders: true,
			handles_transfer_orders: true,
			handles_delivery_orders: true,
			taxi_orders_toggled: true,
			transfer_orders_toggled: true,
			delivery_orders_toggled: true,
			partner_cash_balance: true,
			come_to_work_last_sent_at: true,
			//include
			vehicles: {
				// vehicle_drivers
				select: {
					vehicle_drivers_id: true,
					vehicle_id: true,
					driver_id: true,
					can_drive: true,
					created_at: true,
					updated_at: true,
					//include
					vehicle: {
						select: {
							vehicle_id: true,
							class: true,
							category: true,
							make: true,
							model: true,
							color: true,
							license_plate: true,
						},
					},
				},
			},
			current_vehicle: {
				select: {
					vehicle_id: true,
					class: true,
					category: true,
					make: true,
					model: true,
					color: true,
					license_plate: true,
				},
			},
			documents: {
				select: {
					document_id: true,
					document_type: true,
					created_at: true,
					updated_at: true,
					expiration_date: true,
					issue_date: true,
					public: true,
				},
			},
			activity_logs: {
				select: {
					driver_activity_log_id: true,
					activity_type: true,
					started_at: true,
					ended_at: true,
					timeout_at: true,
					lockout_until: true,
				},
			},
			driver_municipalities: {
				select: {
					driver_municipalities_id: true,
					municipalities_id: true,
					created_at: true,
					updated_at: true,
				},
			},
			driver_history_locations: {
				select: {
					driver_history_location_id: true,
					taxi_order_id: true,
					delivery_order_id: true,
					status: true,
					location: true,
					created_at: true,
					updated_at: true,
				},
			},
			received_orders: {
				select: {
					taxi_order_sent_id: true,
					order_id: true,
					accepted: true,
					location: true,
					timeline: true,
					created_at: true,
					updated_at: true,
					rejected: true,
				},
			},
			received_delivery_orders: {
				select: {
					delivery_order_sent_id: true,
					order_id: true,
					accepted: true,
					location: true,
					timeline: true,
					created_at: true,
					updated_at: true,
				},
			},
		},
	},
	// documents: {
	// 	select: {
	// 		document_id: true,
	// 		document_type: true,
	// 		created_at: true,
	// 		updated_at: true,
	// 		expiration_date: true,
	// 		issue_date: true,
	// 		additional_info: true,
	// 		public: true,
	// 		//include
	// 		files: {
	// 			select: {
	// 				file_id: true,
	// 				url: true,
	// 				file_type: true,
	// 				public: true,
	// 				mime_type: true,
	// 				created_at: true,
	// 				updated_at: true,
	// 			},
	// 		},
	// 	},
	// },
	// delivery_driver: {
	// 	select: {
	// 		delivery_driver_id: true,
	// 		online: true,
	// 		on_order: true,
	// 		delivers_daily_meals: true,
	// 		working_hours: true,
	// 		business_id: true,
	// 		created_at: true,
	// 		updated_at: true,
	// 		user_id: true,
	// 		location: true,
	// 		delivery_timeline: true,
	// 		last_ping_at: true,
	// 		on_daily_meals: true,
	// 		is_inactive: true,
	// 		scheduled_meals_route: true,
	// 		regions: true,
	// 		partner_cash_balance: true,
	// 		daily_meal_business_id: true,
	// 		//include
	// 		vehicles: {
	// 			select: {
	// 				vehicle_id: true,
	// 				class: true,
	// 				category: true,
	// 				make: true,
	// 				model: true,
	// 				color: true,
	// 				license_plate: true,
	// 			},
	// 		},
	// 		documents: {
	// 			select: {
	// 				document_id: true,
	// 				document_type: true,
	// 				created_at: true,
	// 				updated_at: true,
	// 				expiration_date: true,
	// 				issue_date: true,
	// 				public: true,
	// 			},
	// 		},
	// 		delivery_driver_history_locations: {
	// 			select: {
	// 				delivery_driver_history_location_id: true,
	// 				order_id: true,
	// 				status: true,
	// 				location: true,
	// 				created_at: true,
	// 				updated_at: true,
	// 			},
	// 		},
	// 		received_orders: {
	// 			select: {
	// 				delivery_order_sent_id: true,
	// 				order_id: true,
	// 				accepted: true,
	// 				location: true,
	// 				timeline: true,
	// 				created_at: true,
	// 				updated_at: true,
	// 			},
	// 		},
	// 		daily_meal_business: {
	// 			select: {
	// 				business_id: true,
	// 				name: true,
	// 				type: true,
	// 			},
	// 		},
	// 	},
	// },
	orders: {
		// taxi_orders
		select: {
			order_id: true,
			user_id: true,
			driver_id: true,
			vehicle_id: true,
			route: true,
			pickup_location: true,
			delivery_location: true,
			payment: true,
			estimates: true,
			timeline: true,
			preferences: true,
			status: true,
			last_sent_at: true,
			created_at: true,
			updated_at: true,
			//business_id: true,
			telephone: true,
			first_name: true,
			last_name: true,
			cancellation_reason: true,
			find_drivers_attempts: true,
			is_scheduled: true,
			parent_order_id: true,
			type: true,
			subtype: true,
			//flags: true,
			cargo_preferences: true,
			customer_note: true,
			parent_user_type: true,
			creating_user_id: true,
			allow_credits_usage: true,
			order_number: true,
			//include
			vehicle: {
				select: {
					vehicle_id: true,
					class: true,
					category: true,
					make: true,
					model: true,
					color: true,
					license_plate: true,
				},
			},
			driver: {
				select: {
					driver_id: true,
					user_id: true, // Only include the essential identifiers
				},
			},
			// business: {
			// 	select: {
			// 		business_id: true,
			// 		name: true,
			// 		type: true,
			// 	},
			// },
			history: {
				select: {
					taxi_order_sent_id: true,
					order_id: true,
					driver_id: true,
					accepted: true,
					rejected: true,
					location: true,
					timeline: true,
					created_at: true,
					updated_at: true,
				},
			},
			grouped_orders: {
				select: {
					order_id: true,
					status: true,
				},
			},
			parent_order: {
				select: {
					order_id: true,
					status: true,
				},
			},
			wallet_transfer: {
				select: {
					wallet_transfer_history_id: true,
					amount: true,
					created_at: true,
					updated_at: true,
					success: true,
				},
			},
			transactions: {
				select: {
					transaction_id: true,
					amount: true,
					type: true,
					description: true,
					createdAt: true,
					updatedAt: true,
				},
			},
			scoring_points: {
				select: {
					scoring_points_id: true,
					points: true,
					isPenalty: true,
					reason: true,
					expiration_date: true,
					created_at: true,
					updated_at: true,
				},
			},
			late_events: {
				select: {
					late_events_id: true,
					seconds: true,
					created_at: true,
					updated_at: true,
				},
			},
			cashback: {
				select: {
					cashback_id: true,
					amount: true,
					type: true,
					source: true,
					status: true,
					earned_at: true,
					expires_at: true,
				},
			},
		},
	},
	delivery_orders: {
		select: {
			order_id: true,
			user_id: true,
			route: true,
			pickup_location: true,
			delivery_location: true,
			payment: true,
			estimates: true,
			items: true,
			details: true,
			courier_instructions: true,
			restaurant_message: true,
			//scheduled: true,
			timeline: true,
			status: true,
			last_sent_at: true,
			created_at: true,
			updated_at: true,
			vehicle_id: true,
			//delivery_driver_id: true,
			driver_id: true,
			//business_id: true,
			payment_intent_id: true,
			find_drivers_attempts: true,
			is_daily_meal: true,
			//flags: true,
			allow_credits_usage: true,
			order_number: true,
			//include
			vehicle: {
				select: {
					vehicle_id: true,
					class: true,
					category: true,
					make: true,
					model: true,
					color: true,
					license_plate: true,
				},
			},
			//we dont need to include the driver or delivery_driver details for the order
			// delivery_driver: {
			// 	select: {
			// 		delivery_driver_id: true,
			// 		user_id: true // Only include the essential identifiers
			// 	}
			// },
			// driver: {
			// 	select: {
			// 				user_id: true // Only include the essential identifiers
			// 			}
			// business: {
			// 	select: {
			// 		name: true,
			// 		// type: true
			// 	},
			// },
			// history: { //we dont need to include the history for this order
			// 	select: {
			// 		delivery_order_sent_id: true,
			// 		order_id: true,
			// 		delivery_driver_id: true,
			// 		driver_id: true,
			// 		accepted: true,
			// 		location: true,
			// 		timeline: true,
			// 		created_at: true,
			// 		updated_at: true
			// 	}
			// },
			transactions: {
				select: {
					transaction_id: true,
					amount: true,
					type: true,
					description: true,
					createdAt: true,
					updatedAt: true,
				},
			},
			wallet_transfer: {
				select: {
					wallet_transfer_history_id: true,
					amount: true,
					created_at: true,
					updated_at: true,
					success: true,
				},
			},
			scoring_points: {
				select: {
					scoring_points_id: true,
					points: true,
					isPenalty: true,
					reason: true,
					expiration_date: true,
					created_at: true,
					updated_at: true,
				},
			},
			late_events: {
				select: {
					late_events_id: true,
					seconds: true,
					created_at: true,
					updated_at: true,
				},
			},
			cashback: {
				select: {
					cashback_id: true,
					amount: true,
					type: true,
					source: true,
					status: true,
					earned_at: true,
					expires_at: true,
				},
			},
			order_lobbies: {
				select: {
					order_lobbies_id: true,
					lobby_name: true,
					lobby_description: true,
					active: true,
					//business_id: true,
					//restaurant_id: true,
					creator_id: true,
					created_at: true,
					updated_at: true,
				},
			},
		},
	},
	// reviewable: {
	// 	// Reviews left for the user
	// 	select: {
	// 		reviewable_id: true,
	// 		reviews: {
	// 			select: {
	// 				review_id: true,
	// 				rating: true,
	// 				comment: true,
	// 				feedback: true,
	// 				created_at: true,
	// 				updated_at: true,
	// 			},
	// 		},
	// 	},
	// },
	reviews: {
		// Reviews written by the user
		select: {
			review_id: true,
			//rating: true,
			comment: true,
			//feedback: true,
			created_at: true,
			updated_at: true,
			//reviewable_id: true,
		},
	},
	transactions: {
		select: {
			transaction_id: true,
			amount: true,
			type: true,
			description: true,
			createdAt: true,
			updatedAt: true,
			delivery_order_id: true,
			taxi_order_id: true,
			wallet_fund_id: true,
			//include
			documents: {
				select: {
					document_id: true,
					document_type: true,
					created_at: true,
					expiration_date: true,
					issue_date: true,
				},
			},
		},
	},
	reservations: {
		select: {
			reservation_id: true,
			seats: true,
			//date: true,
			//time: true,
			datetime: true,
			created_at: true,
			updated_at: true,
			status: true,
			table: true,
			// business_id: true // Only include business ID, not full business details
		},
	},
	// flag_changes: {
	// 	select: {
	// 		flag_history_id: true,
	// 		flag_id: true,
	// 		status: true,
	// 		created_at: true,
	// 		updated_at: true,
	// 	},
	// }, // flag_history
	lost_items: {
		select: {
			lost_item_id: true,
			status: true,
			description: true,
			found: true,
			created_at: true,
			updated_at: true,
			//include
			// documents: {
			// 	select: {
			// 		document_id: true,
			// 		document_type: true,
			// 		created_at: true,
			// 		updated_at: true,
			// 		expiration_date: true,
			// 	},
			// },
		},
	},
	child_users: {
		// Users for whom the current user is a parent
		select: {
			group_user_id: true, // Only include the relationship ID, not the linked accounts' details
			created_at: true,
			updated_at: true,
			enabled: true,
		},
	},
	parent_user: {
		// If the current user is a child_user, this is their parent linkage
		select: {
			group_user_id: true, // Only include the relationship ID, not the linked accounts' details
			created_at: true,
			updated_at: true,
			enabled: true,
		},
	},
	wallet_funds: {
		select: {
			wallet_funds_id: true,
			user_id: true,
			referral_id: true,
			charge_id: true,
			amount: true,
			reserved_order: true,
			reserved_daily_meals_subscription: true,
			reserved_business: true,
			created_at: true,
			updated_at: true,
			expires_at: true,
			type: true,
			status: true,
		},
	}, // GDPR: Include wallet funds but without nested relations
	referrals_made: {
		// Referrals made by this user
		select: {
			referral_id: true,
			referral_code: true, // User's own code is okay to include
			referrer_user_id: true, // This is the user's own ID
			referred_user_id: true, // ID of who was referred
			created_at: true,
			updated_at: true,
		},
	},
	referral: {
		// If this user was referred by someone
		select: {
			referral_id: true,
			referrer_user_id: true, // ID of who referred the user
			referred_user_id: true, // This is the user's own ID
			conditions_met: true, // This relates to the user's own referral
			reward_claimed: true, // This relates to the user's own reward
			created_at: true,
			updated_at: true,
		},
	},
	cashback: {
		select: {
			cashback_id: true,
			user_id: true, // Added for GDPR completeness
			amount: true,
			type: true,
			source: true,
			status: true,
			description: true,
			earned_at: true,
			expires_at: true,
			converted_at: true,
			taxi_order_id: true,
			delivery_order_id: true,
		},
	},
	business_teams: {
		// Team the user belongs to
		select: {
			business_teams_id: true,
			team_name: true,
			business_id: true, // Only include business ID, not full business details
			limit_per_person: true,
			created_at: true,
			updated_at: true,
		},
	},
	order_lobby_users: {
		select: {
			order_lobby_users_id: true,
			limit: true,
			created_at: true,
			updated_at: true,
			order_lobbies_id: true,
			//includes
			order_lobbies: {
				select: {
					order_lobbies_id: true,
					lobby_name: true,
					lobby_description: true,
					active: true,
					//business_id: true, // Only include business ID
					//restaurant_id: true, // Only include restaurant ID
					created_at: true,
					updated_at: true,
				},
			},
		},
	},
	promo_section_buys: {
		select: {
			promo_sections_buy_id: true,
			promo_sections_id: true,
			//stripe_subscription_id: true,
			business_id: true, // Only include business ID
			active_at: true,
			expires_at: true,
			tier: true,
			//include
			promo_section: {
				select: {
					promo_sections_id: true,
					name: true,
					tag: true,
					active: true,
					description: true,
					canPurchase: true,
					service_type: true,
					promo_duration_days: true,
				},
			},
		},
	},
	scoring_points: {
		select: {
			scoring_points_id: true,
			// business_id: true, // Only include business ID
			delivery_order_id: true, // Only include order ID
			taxi_order_id: true, // Only include order ID
			points: true,
			isPenalty: true,
			reason: true,
			expiration_date: true,
			created_at: true,
			updated_at: true,
		},
	},
	// daily_meals_subscriptions: {
	// 	select: {
	// 		daily_meals_subscriptions_id: true,
	// 		grouped_id: true,
	// 		// business_id: true, // Only include business ID
	// 		menu_id: true, // Only include menu ID
	// 		address_id: true, // Only include address ID
	// 		menu_categories_id: true, // Only include menu category ID
	// 		created_at: true,
	// 		updated_at: true,
	// 		date: true,
	// 		quantity: true,
	// 		order_created: true,
	// 		restaurant_comment: true,
	// 		courier_comment: true,
	// 	},
	// },
	// late_events: {
	// 	select: {
	// 		late_events_id: true,
	// 		business_id: true, // Only include business ID
	// 		delivery_order_id: true, // Only include order ID
	// 		taxi_order_id: true, // Only include order ID
	// 		scoring_points_id: true,
	// 		seconds: true,
	// 		created_at: true,
	// 		updated_at: true,
	// 	},
	// },
	user_favorite_businesses: {
		select: {
			user_favorite_businesses_id: true,
			user_id: true,
			business_id: true,
			// business_type: true,
			created_at: true,
			updated_at: true,
		},
	},
	account_actions: {
		// Actions performed on this user's account
		select: {
			account_action_id: true,
			user_id: true, // Keep the user's own ID - this is their data
			created_at: true,
			reason: true,
			action: true,
			// No reference to action_creator (other users) to maintain GDPR compliance
		},
	},
	created_account_actions: {
		// Actions this user performed on other accounts
		select: {
			account_action_id: true,
			action_creator_user_id: true, // Keep this as it's the requesting user's own ID
			created_at: true,
			reason: true,
			action: true,
			// No reference to affected users to maintain GDPR compliance
		},
	},
});

export type userDataRequestDefaultIncludePrisma = Prisma.usersGetPayload<{
	include: typeof userDataRequestDefaultInclude;
}>;

export default userDataRequestDefaultInclude;
