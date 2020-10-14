/* eslint-disable */
self.importScripts("https://cdn.jsdelivr.net/npm/idb@4.0.5/build/iife/with-async-ittr-min.js");

function createDB() {
	idb.openDB("products", 1, {
		upgrade(database) {
			const store = database.createObjectStore("beverages", {
				keyPath: "id",
			});
			store.put({ id: 123, name: "coke", price: 10.99, quantity: 200 });
			store.put({ id: 321, name: "pepsi", price: 8.99, quantity: 100 });
			store.put({ id: 222, name: "water", price: 11.99, quantity: 300 });
		},
	});
}

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open("v1").then((cache) => {
			return cache.addAll([
				"./favicon.ico",
				"./index.html",
				"./logo192.png",
				"./logo512.png",
				"./manifest.json",
				"./robots.txt",
			]);
		})
	);
});

self.addEventListener("activate", function (event) {
	event.waitUntil(createDB());
});
