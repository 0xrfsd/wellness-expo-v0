// DONE
- HomeTabNavigator() => { bottomTabNavigator, [ home, search, experiences, saved, user ] }
- Router() => { HomeTabNavigator, [ Search, Filters, Listing ] } ! NOT NAVEGATING
- Salvos
- Books
- Reserva Steps() => {}
- 
- 

// TO DO
- API Creator() => { Painel ADM to add properties from airbnb or standalone }
- ProfileNavigator() => { Perfil, Preferencias, FAQ, Anfitriao, Dados, Ajuda }
- React-Native-Maps() => { Install library, Enable Google API, Get API Key }
- Create navigator of [ Search, Filters, Listing ] with data props, filter then map
- Conexao com Gateway de pagamento Pagseguro nodejs
- Criar Wellness-API => Express, NodeJS, MongoDB, Mongoose, Hapi/Joi, Redux, Networking ASYNC/AWAIT or Promise.then - flux - single way - prevState
- Puxar dados do AirbnbPRO-API e enviar pra Wellness-API
- Vincular as datas do AirbnbPRO-API com o da Wellness-API
- A Wellness nao vai puxar nada da API do airbnb em producao, vai rolar um servidor puxando a sincronias dos dados em tempo real mas em paralelo, puxa e ja manda pro db sem nenhuma iteracao com a aplicacao
- Wellness so puxa dado da Welness-API
- Wellness-API => Publica(publicalData)
- Painel ADM => {}
- Validar pagamento com gateway de pagamento e ficar escutando, se retornar TRUE ja posta a reserva na API do user, se voltar FALSE ja invalida a reserva e pede outro card ou outro meio de pgto alternativo
- Fazer sistema de canal de vendas por wa

// API 
- Schemas() => { Users[], Hosts[], Houses[], Experiences[], Restaurants[] } = Data Model
- Validator() => { STRINGS, INTS, SPACES, SPECIAL CHARS, MAX.LENGHT, MIN.LENGHT } = Prevent Security Attacks against [ XSSi, HTMLi, SWIFTi, OBJ-Ci, RNi, Ri, Ni, MDBi, RXi, CSRF, SSRF, CORS, RCE, LFI, RFI ]
- Authenticator() => { EXPO authenticator } = Who is logging in?
- Redux() => { Consuming API Elegant, Also dispatching } = Infra
- MongoDB() => { Database - Cluster0 Free rn } = DB = Cloud
- Navigation() => { react-navigation } = mobile application linking/navigating
- Routes() => { express } => API GETs and POSTs and PUTs and DELETEs + VALIDATOR
