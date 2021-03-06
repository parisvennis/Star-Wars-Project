const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {
			// addFavorite: favorite => {
			// 	const store = getStore();
			// 	let newFavorite = { name: favorite };
			// 	updatedStore.favorites.concat(newFavorite);
			// 	setStore(store);
			// },

			// deleteFavorite: name => {
			// 	const store = getStore();
			// 	let returnArr = store.favorites.filter((element, index) => {
			// 		return id != index;
			// 	});
			// 	setStore({ favorites: returnArr });

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				/**
						fetch().then().then(data => setStore({ "foo": data.bar }))
					*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
