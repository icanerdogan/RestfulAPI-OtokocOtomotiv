
<h1 align="center"> RestfulAPI for Otokoç Otomotiv </h1>

<p align="center">
  <img src="https://raw.githubusercontent.com/icanerdogan/RestfulAPI-OtokocOtomotiv/master/images/logo.png">
</p>

 <h2>İçindekiler</h2>
 <ul>
     <li><a href="#kutuphaneler"> Kullanılan Kütüpahaneler </a></li>
     <li><a href="#api-istekleri"> API İstekleri </a></li>
        <ul>
          <li><a href="#pagination-api"> Pagination GET  </a></li>
        </ul>
 </ul>

<hr>
 
<h2 id="kutuphaneler">Kullanılan Kütüphaneler </h2>

```
// Express.js
npm i express
// dotenv
npm install dotenv --save
// body-parser
npm install body-parser
// mongoose
npm install mongoose
// nodemon
npm install -g nodemon
npm install --save-dev nodemon
```

<h2 id="api-istekleri">API İstekleri </h2>
<!-- **************************************************************************************************************************************************************** -->
<h3 id="pagination-api">GET - Pagination </h3>
<p>Verilerimizin 2. Sayfada ve 5 veri ile limitlenmiş hali aşağıda verilen örnek ile çekilir!</p>

<b>
  
```
http://localhost:8000/cars?page=2&limit=5
```
</b>
<img src="">
 <!-- **************************************************************************************************************************************************************** -->
<h3 id="all-api">GET - All </h3>
<p>Verilerin sayafalanmadan toplu bir halde görünmesi için aşaığdaki link örneğini kullanıyoruz!</p>

<b>
  
```
http://localhost:8000/cars/all
```
</b>
<img src="">
 <!-- **************************************************************************************************************************************************************** -->
<h3 id="all-api">GET - One </h3>
<p>Veriler arasından sadece Parça numarasına (ID) göre verimizi elde etmek için aşağıdaki link örneğini kullanıyoruz!</p>

<b>
  
```
http://localhost:8000/cars/61f784c833bc6e663b55af88
```
</b>
<img src="">

 <!-- **************************************************************************************************************************************************************** -->
<h3 id="all-api">POST </h3>
<p>Yeni parçaları dinamik olarak verilerimiz içine ekleyebiliyoruz!</p>

<img src="">
 <!-- **************************************************************************************************************************************************************** -->
<h3 id="all-api">DELETE </h3>
<p>Verilerimiz arasından eklediğimiz veriyi Parça numarasına(ID) göre silebiliriz!</p>

<img src="">
 <!-- **************************************************************************************************************************************************************** -->
<h3 id="all-api">PUT </h3>
<p>Değiştirmek istediğim verimizi ID ile kolaylıkla değiştirebilir!</p>

<img src="">
