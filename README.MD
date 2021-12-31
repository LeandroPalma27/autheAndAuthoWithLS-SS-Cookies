# Proyecto de login con localStorage, sessionStorage y cookies

Este proyecto se realizo con la finalidad de experimentar y aprender de las tecnologias ofrecidas por javascript para manipular las sesiones, los datos guardados localmente y las cookies.

## Notas:

- Las sesiones son de gran ayuda para cuando no se maneje JWT, ya que nos permiten mantener una credencial activa por cada sesion, para que asi el usuario pueda navegar sin problemas por nuestra aplicacion. Cabe destacar que estas solamente se manejan hasta que el usuario cierre la pestaña (se borraran cuando esto ocurra), y tambien se guardan a nivel cliente.

- El localStorage puede servir de gran ayuda para preservar datos que no sean confidenciales como el contenido de un carrito de compras, etc. Se guarda en localmente y no se pierden a menos que los borremos manualmente. Su uso es parecido al de las cookies, ya que los datos perduran a menos que el usuario lo borre manualmente.

- Las cookies nos sirven para poder preservar informacion un poco mas confidencial, ya que se envian desde el servidor, pero siempre y cuando estas se cifren para que asi sean seguras.

- Para finalizar, las cookies y el localStorage pueden servir de mucha ayuda para preservar informacion que nos permita poder gestionar la navegacion de manera mas efectiva, dando rapidez para la recuperacion de datos entre otras cosas mas intersentas. En resumen, pueden ser de gran ayuda en el desarollo web asi que no debemos dejarlas de lado.