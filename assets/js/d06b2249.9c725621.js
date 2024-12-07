"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[882],{7941:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"Patrones_de_diseno_de_comportamiento/Command","title":"Command.","description":"Definici\xf3n.","source":"@site/docs/Patrones_de_diseno_de_comportamiento/Command.md","sourceDirName":"Patrones_de_diseno_de_comportamiento","slug":"/Patrones_de_diseno_de_comportamiento/Command","permalink":"/Documentacion_PDC/docs/Patrones_de_diseno_de_comportamiento/Command","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Patrones_de_diseno_de_comportamiento/Command.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"chain of responsability.","permalink":"/Documentacion_PDC/docs/Patrones_de_diseno_de_comportamiento/Chain_of_Responsability"},"next":{"title":"Iterator.","permalink":"/Documentacion_PDC/docs/Patrones_de_diseno_de_comportamiento/Iterator"}}');var a=r(4848),o=r(8453);const i={sidebar_position:3},t="Command.",c={},l=[{value:"Definici\xf3n.",id:"definici\xf3n",level:2},{value:"Prop\xf3sito.",id:"prop\xf3sito",level:2},{value:"Caracter\xedsticas principales:",id:"caracter\xedsticas-principales",level:2},{value:"Ventajas y Desventajas.",id:"ventajas-y-desventajas",level:2},{value:"Ejemplo.",id:"ejemplo",level:2},{value:"Analog\xeda:",id:"analog\xeda",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"command",children:"Command."})}),"\n",(0,a.jsx)(n.h2,{id:"definici\xf3n",children:"Definici\xf3n."}),"\n",(0,a.jsx)(n.p,{children:"El patr\xf3n Command encapsula una solicitud como un objeto, permitiendo que se parametrice con diferentes solicitudes, se coloque en colas y se pueda deshacer. Este patr\xf3n desacopla al emisor de la solicitud de los objetos que realmente ejecutan las acciones, dentro de este patron estan los siguientes actores:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Cliente/Invoker."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Es la clase que inicia todo, en el ejemplo anterior de registrar un usuario, bien podr\xeda ser un controlador asociado a una ruta POST que toma los valores de un formulario para registrar a un nuevo usuario."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Command."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Es la clase que encapsula toda la informaci\xf3n necesaria para ejecutar la acci\xf3n. Son simples DTOs en la mayor\xeda de casos, aunque pueden contener otros objetos dentro. Es muy importante, como veremos m\xe1s adelante, que sean f\xe1cilmente serializables. En nuestro ejemplo, esto ser\xeda una clase que contenga los datos del usuario a registrar, por ejemplo email y password."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"CommandHandler/Handler."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Es la clase que contiene la l\xf3gica a ejecutar, puede tener dependencias externas, como servicios de mensajer\xeda, conexiones a base de datos, servicios para escribir en logs\u2026 etc. Es importante que esta clase ejecute una y solo una acci\xf3n, ya que en caso contrario resultar\xeda muy confusa su nomenclatura."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://refactoring.guru/images/patterns/diagrams/command/structure.png",alt:""})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"prop\xf3sito",children:"Prop\xf3sito."}),"\n",(0,a.jsx)(n.p,{children:"El prop\xf3sito principal de este patr\xf3n es permitir que las solicitudes sean representadas como objetos, de forma que se pueda parametrizar las acciones a realizar, almacenarlas, ejecutar operaciones en momentos posteriores y realizar deshacer (undo)."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://refactoring.guru/images/patterns/content/command/command-es.png",alt:""})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"caracter\xedsticas-principales",children:"Caracter\xedsticas principales:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Encapsulamiento de solicitudes:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Las acciones se encapsulan como objetos independientes."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Desacoplamiento:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Los objetos que invocan los comandos no necesitan saber c\xf3mo se ejecutan las acciones."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Deshacer/rehacer:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Se puede implementar la funcionalidad de deshacer y rehacer las operaciones de forma sencilla."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://reactiveprogramming.io/_next/image?url=%2Fbooks%2Fpatterns%2Fimg%2Fpatterns%2Fcommand2.png&w=3840&q=75",alt:"Command"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"ventajas-y-desventajas",children:"Ventajas y Desventajas."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Ventajas"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Desventajas"})})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.strong,{children:"Desacoplamiento"}),": El emisor no necesita conocer los detalles de los objetos que procesan la solicitud."]}),(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.strong,{children:"Dificultad para depurar"}),": Es complicado rastrear qu\xe9 manejador proces\xf3 una solicitud en cadenas largas o complejas."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.strong,{children:"Extensibilidad"}),": Es f\xe1cil agregar nuevos manejadores a la cadena sin modificar los existentes."]}),(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.strong,{children:"Posible bajo rendimiento"}),": Si la cadena es muy extensa, se generan m\xfaltiples llamadas innecesarias antes de procesar la solicitud."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.strong,{children:"Flexibilidad en el procesamiento"}),": Permite modificar din\xe1micamente el orden de los manejadores o la cadena de responsabilidad."]}),(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.strong,{children:"Orden estricto"}),": El orden de los manejadores afecta el comportamiento, lo que puede causar errores si no se define correctamente."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.strong,{children:"Reutilizaci\xf3n"}),": Los manejadores pueden ser reutilizados en diferentes cadenas o contextos."]}),(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.strong,{children:"Falta de garant\xeda de manejo"}),": No hay certeza de que la solicitud ser\xe1 procesada si ning\xfan manejador es capaz de hacerlo."]})]})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"C\xf3digo"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"<?php\r\n\r\nnamespace Api\\Command\\User;\r\n\r\nfinal class RegisterUserCommand\r\n{\r\n    private $email;\r\n    private $password;\r\n    \r\n    public function __construct(string $email, string $password)\r\n    {\r\n        $this->email = $email;\r\n        $this->password = $password;\r\n    }\r\n    \r\n    public function email(): string\r\n    {\r\n        return $this->email;   \r\n    }\r\n    \r\n    \r\n    public function password(): string\r\n    {\r\n        return $this->password;   \r\n    }\r\n}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"<?php\r\n\r\nnamespace Api\\CommandHandler\\User;\r\n\r\nuse Api\\Command\\User\\RegisterUserCommand;\r\nuse Api\\Domain\\Repository\\UserRepository;\r\nuse Api\\Entity\\User;\r\n\r\nfinal class RegisterUserHandler\r\n{\r\n    const MINIMUM_LENGHT = 12;\r\n    \r\n    private $repository;\r\n    \r\n    public function __construct (UserRepository $repository)\r\n    {\r\n        $this->repository = $repository;   \r\n    }\r\n    \r\n    public function __invoke(RegisterUserCommand $command)\r\n    {\r\n        $email = $command->email();\r\n        $password = $command->password();\r\n        \r\n        $this->checkEmail();\r\n        $this->checkPassword();\r\n        \r\n        $user = new User($email, $password);\r\n        $this->repository->save($user);\r\n    }\r\n    \r\n    private function checkEmail($email)\r\n    {\r\n        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {\r\n            throw new \\Exception('Invalid email');\r\n        }\r\n        \r\n        if ($this->repository->userExists($email)) {\r\n            throw new \\Exception('User already exist');\r\n        }\r\n    }\r\n    \r\n    private function checkPassword($password)\r\n    {\r\n        if (self::MINIMUM_LENGHT > strlen($password)) {\r\n            throw new \\Exception('Password too short');\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"<?php\r\n\r\nnamespace Api\\Controller\\User;\r\n\r\nuse Api\\Command\\User\\RegisterUserCommand;\r\nuse Api\\CommandHandler\\User\\RegisterUserHandler;\r\nuse Symfony\\Component\\HttpFoundation\\Request;\r\nuse Symfony\\Component\\HttpFoundation\\Response;\r\n\r\nfinal class UserController\r\n{\r\n    public function registerUser(Request $request): Response\r\n    {\r\n        $email = $request->request->get('email');\r\n        $password = $request->request->get('password');\r\n        \r\n        $command = new RegisterUserCommand($email, $password);\r\n        \r\n        $userRepository = $this->get('repository.user');\r\n        $handler = new RegisterUserHandler($userRepository);\r\n        \r\n        try {\r\n            $handler($command);\r\n        } catch (\\Exception $e) {\r\n            return new Response($e->getMessage(), Response::HTTP_BAD_REQUEST);\r\n        }\r\n        \r\n        return new Response('', Response::HTTP_CREATED);\r\n    }\r\n}\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"analog\xeda",children:"Analog\xeda:"}),"\n",(0,a.jsx)(n.p,{children:"Tras un largo paseo por la ciudad, entras en un buen restaurante y te sientas a una mesa junto a la ventana. Un amable camarero se acerca y toma tu pedido r\xe1pidamente, apunt\xe1ndolo en un papel. El camarero se va a la cocina y pega el pedido a la pared. Al cabo de un rato, el pedido llega al chef, que lo lee y prepara la comida. El cocinero coloca la comida en una bandeja junto al pedido. El camarero descubre la bandeja, comprueba el pedido para asegurarse de que todo est\xe1 como lo quer\xedas, y lo lleva todo a tu mesa."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://refactoring.guru/images/patterns/content/command/command-comic-1.png",alt:""})}),"\n",(0,a.jsx)(n.p,{children:"El pedido en papel hace la funci\xf3n de un comando. Permanece en una cola hasta que el chef est\xe1 listo para servirlo. Este pedido contiene toda la informaci\xf3n relevante necesaria para preparar la comida. Permite al chef empezar a cocinar de inmediato, en lugar de tener que correr de un lado a otro aclarando los detalles del pedido directamente contigo."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>t});var s=r(6540);const a={},o=s.createContext(a);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);