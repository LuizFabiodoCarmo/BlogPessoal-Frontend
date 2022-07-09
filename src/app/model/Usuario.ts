import { Postagem } from "./Postagem"

export class Usuario{
public id: number  // toda variavel do tipo numérico como 'long' no Spring, no visual code será 'number'
public nome: string
public usuario: string
public senha: string
public foto: string
public tipo: string
public postagem: Postagem[] //relacionei as tabelas de Usuario e Postagem
}






