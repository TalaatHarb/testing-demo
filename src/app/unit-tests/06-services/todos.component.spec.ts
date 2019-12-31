import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { of, EMPTY, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set the todos property with the items returned from the server', () => {
    const todos = [{ id: 1, title: 'a' }, { id: 2, title: 'b' }, { id: 3, title: 'c' }];
    spyOn(service, 'getTodos').and.callFake(() => {
      return of(todos);
    });

    component.ngOnInit();

    expect(component.todos).toBe(todos);
  });

  it('should call the server to save the new todo item', () => {
    const spy = spyOn(service, 'add').and.callFake(() => {
      return EMPTY;
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add the todo returned from the server', () => {
    const todo = { id: 1, title: 'a' };
    spyOn(service, 'add').and.callFake(() => {
      return of(todo);
    });

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThanOrEqual(0);
  });

  it('should set the message property if server returns error', () => {
    const errorFromServer = 'Error from the server';
    spyOn(service, 'add').and.callFake(() => {
      return throwError(errorFromServer);
    });

    component.add();

    expect(component.message).toBe(errorFromServer);
  });

  it('should display confirmation when asked for delete, and call the server when the user confirms', () => {
    const id = 1;
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'delete').and.returnValue(EMPTY);

    component.delete(id);

    expect(spy).toHaveBeenCalledWith(id);
  });

  it('should not call the server when the user doesn\'t confirm delete', () => {
    const id = 1;
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service, 'delete').and.returnValue(EMPTY);

    component.delete(id);

    expect(spy).not.toHaveBeenCalled();
  });

});
