import { TemplateBinding } from "@angular/compiler"
import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
    public id: number //variaveis em 'public' para que possam ser acessadas por outros componentes
    public titulo: string
    public texto: string
    public data: Date
    public usuario: Usuario
    public  tema: Tema
    }