import { Component, OnInit } from "@angular/core";
import { Observable, Subscriber, timeout } from "rxjs";

@Component({
  selector: "app-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>Welcome to {{ title }}!</h1>
      <span style="display: block">{{ title }} app is running!</span>
      <img
        width="300"
        alt="Angular Logo"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="
      />
    </div>
    <h2>Here are some links to help you start:</h2>
    <ul>
      <li>
        <h2>
          <a target="_blank" rel="noopener" href="https://angular.io/tutorial"
            >Tour of Heroes</a
          >
        </h2>
      </li>
      <li>
        <h2>
          <a target="_blank" rel="noopener" href="https://angular.io/cli"
            >CLI Documentation</a
          >
        </h2>
      </li>
      <li>
        <h2>
          <a target="_blank" rel="noopener" href="https://blog.angular.io/"
            >Angular blog</a
          >
        </h2>
      </li>
    </ul>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = "RXJS";

  minhaPromise(nome: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (nome === "Sundjata") {
        setTimeout(() => {
          resolve("As your wish my MASTER " + nome + "!");
        }, 1000);
      } else {
        reject("Você não é o meu mestre!");
      }
    });
  }

  minhaObservable(nome: string): Observable<string> {
    return new Observable((subscriber) => {
      if (nome === "Sundjata") {
        subscriber.next("Olá " + nome);
        subscriber.next("Sundjata é Espertão!");
        setTimeout(() => {
          subscriber.next("E muito sábio!");
        }, 5000);
      } else {
        subscriber.error("Ops! Deu erro!");
      }
    });
  }

  ngOnInit(): void {
    // this.minhaPromise("Viado")
    //   .then((result) => console.log(result))
    //   .catch((erro) => console.log(erro));

    this.minhaObservable("Sundjata").subscribe((result) => console.log(result));
  }
}
