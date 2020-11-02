# GraphQL
* Es un lenguaje de consulta; es una especificación.
* Mejora el uso de las aplicaciones.
* Se pueden hacer múltiples consultas con una sola petición.
* Con el sistema de tipos, se describe la forma que se puede enviar / recibir los datos. Se tiene un contrato entre cliente / servidor.
* Se tiene un sólo endpoint.
* Se tiene una *versionless* API.

## Diferencia con REST.
* Con GraphQL es posible elegir lo que queremos recibir en el JSON.
* GraphQL es autodocumentado.
* REST cuenta con versionado y almacenamiento en caché.
* Las peticiones REST presentan *overfetching*; que es recibir más información de la necesaria.

## Schema
* Está definido y diseñado por tipos y directiva.
* Los tipos de operacion de raíz que admite:
  * Query: Consulta.
  * Mutation (Opcional): Mutación; alera la información.
  * Subscribe (Opcional): Interacción de información en tiempo real.

```graphql
type Query {
  miPrimerQuery: <tipo_de_dato>
}
```
* Todos los tipos del esquema, tienen nombre únicos. Al igual que las directivas.
* Campos en camelCase; tipos en PascalCase.

## Tipos Escalares
* Int.
* Float.
* String.
* Boolean.
* ID; Int o String.
* Escalares personalizados.
```graphql
nombre: String
edad: Int
```

## Tipos de Object
* Objetos personalizados que definen cómo se verá la API.
```graphql
type Profesor {
  nombre: String
  apellidos: String
  experiencia: Int
}

type Asignatura {
  id: ID
  nombre: String
  horasLectivas: Int
  profesor: Profesor
}
```

## Tipos de Enum
* Similar a un tipo escalar.
* Lista de valores electivos.
```graphql
enum Cursos {
  GRAPHQL_DESDE_CERO
  NPM_LIBRERIAS
}
```

## Modificadores de tipo
Hay dos tipos:
* Obligatorio; *!*
* Lista de valores; *[]*
```graphql
type Profesor {
  nombre: String!
  cursos: [String]
}
```

## Interfaces
* Definiciones abstractas de atributos comunes.
* Necesarias cuando se accede a cierto grupo de objetos que deben cumplir con las propiedades definidas por la interfaz.
```graphql
interface Perfil {
  nombre: String!
  email: String!
  edad: Int!
}

type Profesor implements Perfil {
  nombre: String!
  email: String!
  edad: Int!
  cursos: [String]
}
```

## Root type
* Son los puntos de entrada.
```graphql
type Query {
  lista: [String]
}

type Mutation {
  insertar(elemento: Int): [Int]
}

type Subscription {
  infoInsertada: [Int]
}
```

### Root Type - Query
* Usadas para realizar las consultas.
* Escrito en lenguaje SDL.

### Root Type - Mutation
* Operaciones para realizar operaciones de modificación.
* Similar a una función.
* Única forma de modificar datos.

### Root Type - Subscription
* Obtener la información en tiempo real.
* Se utilizan WebSockets, para mantener la comunicación.
* Se subscribirá a cambios que se realicen en el servidor.

## Tipos de entrada
* Permitirán pasar valores a las queries y a las mutatations.

```graphql
input TagInput {
  label: String!
  description: String
}

mutation {
  nuevoTag(tag: TagInput!): String
}
```
