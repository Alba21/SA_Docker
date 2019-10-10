CREATE TABLE articulo (
    id_articulo bigserial primary key,
    nombre_articulo varchar(20) NOT NULL,
    fecha_creacion TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

insert into articulo(nombre_articulo) values('Tomate');
insert into articulo(nombre_articulo) values('Lechuga');
insert into articulo(nombre_articulo) values('Zanahoria');
insert into articulo(nombre_articulo) values('Naranja');
insert into articulo(nombre_articulo) values('Manzana');
insert into articulo(nombre_articulo) values('Pera');