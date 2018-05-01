import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Todo } from "../todo";

@Injectable()
export class TodosService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private todosUrl = 'https://jeremie-nizou-todolist-api.herokuapp.com/todos/';

	constructor(private http: Http) { }

	getTodos(): Promise<Todo[]> {
		return this.http.get(this.todosUrl)
							 .toPromise()
							 .then(response => response.json() as Todo[])
							 .catch(this.handleError);
	}

	postTodo(newTodo: Todo): Promise<Todo> {
		return this.http.post(this.todosUrl, newTodo)
							 .toPromise()
							 .then(response => response.json() as Todo)
							 .catch(this.handleError);
	}

	deleteTodo(id: string): Promise<void> {
		return this.http.delete(this.todosUrl + id)
							 .toPromise()
							 .then(() => null)
							 .catch(this.handleError);
	}





	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}
