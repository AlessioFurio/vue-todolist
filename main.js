// definire una lista di todo e stamparli in pagina in un elenco

// predisporre un input testuale per aggiungere un nuovo todo: al click di un pulsante, il testo inserito nell'input viene aggiunto alla lista dei todo

// al click su un item della lista, il todo viene rimosso
// BONUS: intercettare anche il tasto "ENTER" per aggiungere un nuovo todo

var app = new Vue({
	el: '#root',
	data: {
		todoText: '',
		todos: [
			{text: 'fare spesa',},
			{text: 'allenamento',},
		]
	},
	methods: {
		addTodo () {  // creo funzione per aggiungere un todo
			var newTodo = this.todoText.trim(); // salvo in var il contenuto dell' input tramite il v-model
			if (!newTodo) {return;} // se l'input e' vuoto non aggiunge un nuovo todo
			this.todos.push({text: newTodo,}); // pusho new todo nell' array todos
			this.todoText = ''; // reimposto a stringa vuota il contenuto dell' input
		},
        removeElement(index) {
            this.todos.splice(index, 1);
        }

	} // fine methods
});
