# USO DE TERMINAL MONGOOSE BD

Estas son algunas `palabras claves` usadas en la terminal de la base de datos de mongoose dentro de las app de mongoose Atlas:

* `show dbs:` Muestra todas las bases de datos creadas
* `use nombrebasededatos:` Nos ubica en la base de datos que deseamos trabajar. EJ. `use contactApp`
* `db.nombrebasededatos.find():` Nos muestra todos los objetos consignados en las colecciones.
* `cls:` Limpia la terminal
* `db.nombrebasedatos.insertOne({}):` Insertar nuevo objeto dentro de la colección. EJ:
    ```
    db.contacts.insertOne({"title": "Aprender linux","description":"Aprender conceptos basicos",deadline: new date(2023-09-10),done:false}) 
    ```

