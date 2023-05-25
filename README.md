# apirest_mod3_usip
trabajo final de diplomado usip modulo 3
EL SISEMA FUE REALIZADO COMO TRABAJO FINAL DEL MODULO 3 DEL DIPLOMADO OFERTADO POR LA USIP
EL SISTEMA CORRE EN EL PUERTO 3002, PUESTO QUE EL PUERTO 3000 LO TENIA OCUPADO CON OTRAS TAREAS
EL SISTEMA FUE PROBADO CON POSTMAN
LA URL DEL SISTEMA EN LOCAL ES localhost:3002/usipapirest/v1/usuarios/estado
SE IMPLEMENTO LOS METODOS GET, POST, PUT, DELETE QUE SE UTILIZAN EN LAS API REST
LA BASE DE DATOS SE CREO EN POSTGRESQL EN SU VERSIÓN 13  
LOS SCRIPTS SON

CREATE SEQUENCE public.usuarios_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9999 START 1 CACHE 1;

CREATE TABLE "public"."usuarios" (
    "id" integer DEFAULT nextval('public.usuarios_id_seq') NOT NULL,
	"cedula_identidad" character varying(15) NOT NULL,
    	"nombre" character varying(25) NOT NULL,
    	"primer_apellido" character varying(25) NOT NULL,
	"segundo_apellido" character varying(25),
	"fecha_nacimiento" date NOT NULL,
    	"created_at" timestamp(0),
	"updated_at" timestamp(0),

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
) WITH (oids = false);  

LOS SCRIPTS JSON PARA PROBAR EL SISTEMA FUERON
{
    "id": 1,
    "cedula_identidad": "3994223",
    "nombre": "EDWIN JAVIER",
    "primer_apellido": "MORALitos",
    "segundo_apellido": "VARGAS",
    "fecha_nacimiento": "1977-12-11T00:00:00.000Z",
    "createdAt": "2023-05-22T01:16:27.645Z",
    "updatedAt": "2023-05-24T02:57:52.518Z"
}

CON LA URL  localhost:3002/usipapirest/v1/usuarios/1

