export interface Certificado {
  id: number;
  nombre: string;
  descripcion: string;
  campos: {
    titulo: string;
    nombre: string;
    fecha: string;
  };
}
