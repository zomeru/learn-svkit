/// <reference types="svelte" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			code?: string;
		}
		interface Locals {
			user?: {
				name: string;
				id: number;
			};
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
