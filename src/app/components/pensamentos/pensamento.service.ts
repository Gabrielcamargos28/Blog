import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly API =
    'https://api-pensamentos-production.up.railway.app/pensamentos';
  //https://api-pensamentos-production.up.railway.app/pensamentos/listarpensamentos
  //private readonly API = 'http://localhost:8080/pensamentos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Pensamento[]> {
    console.log('teste');
    const url = `${this.API}/listarpensamentos`;
    return this.http.get<Pensamento[]>(url);
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/cadastrar`;
    return this.http.post<Pensamento>(url, pensamento);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscaPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url);
  }
}
