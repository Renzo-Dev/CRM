// This file sets up the Vue Router for the CRM application.

import {createRouter, createWebHistory} from 'vue-router'
import {routes} from './routes'

const router = createRouter(
	{
		history: createWebHistory(),
		routes
	}
)

export default router