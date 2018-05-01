import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from "../todo";
import { TodosService } from '../services/todos.service';

@Component({
	selector: 'todos',
	templateUrl: './todos.component.html',
	styleUrls: [ './todos.component.css' ]
})
export class TodosComponent implements OnInit{
	todos: Todo[];
	newTodo: Todo = {
		_id: "",
		nom: "",
		presentation: ""
	};
	recherche: Todo = {
		_id: "",
		nom: "",
		presentation: ""
	};
	chargement: Boolean;

	constructor(
		private todosService: TodosService) { }

	ngOnInit(): void {
		this.chargement = true;
		this.getTodos();
	}



	getTodos(): void {
		this.todosService
				.getTodos()
				.then(todos => {
					this.todos = todos;
					this.chargement = false;
				});
		}

	ajouterTodo(newTodo: Todo): void {
		this.todosService.postTodo(newTodo)
			.then(newTodo => {
				this.todos.push(newTodo);
				this.newTodo = {
					_id: "",
					nom: "",
					presentation: ""
				}
			});
	}

	supprimerTodo(todo: Todo): void {
		this.todosService
				.deleteTodo(todo._id)
				.then(() => {
					this.todos = this.todos.filter(t => t !== todo);
				});
	}
}

